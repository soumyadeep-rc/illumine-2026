'use client'

import { useEffect, useState } from 'react'

const DEFAULT_CHARSET = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ!#$%&*+-/<>=?@^_~░▒▓█▀▄▌▐╳╱╲┃═│┼└┘┌┐'

type Options = {
  /** ms per render frame — lower = faster glyph cycling. Default 50. */
  speed?: number
  /** ms between locking each next target char. Default 70. */
  lockEvery?: number
  /** ms to wait after fully resolved before re-scrambling. 0 disables loop. */
  loopAfter?: number
  /** Optional charset override. */
  charset?: string
}

/**
 * Cycles random glyphs and locks in the target chars left-to-right; loops on a
 * pause after each full resolution. Honours prefers-reduced-motion (renders
 * the target string verbatim, with no animation).
 *
 * Pattern: hold animated frames in optional state; when null, fall back to the
 * target prop. Avoids `setState`-in-effect cascades for the reduced-motion path.
 */
export function useDecryptedText(target: string, options: Options = {}) {
  const { speed = 50, lockEvery = 70, loopAfter = 4500, charset = DEFAULT_CHARSET } = options
  const [frame, setFrame] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let locked = 0
    let lastLock = performance.now()
    let restart = 0

    const tick = () => {
      const now = performance.now()
      if (locked >= target.length) {
        if (loopAfter > 0 && restart === 0) restart = now + loopAfter
        if (restart && now >= restart) {
          locked = 0
          restart = 0
          lastLock = now
        }
      } else if (now - lastLock >= lockEvery) {
        locked++
        lastLock = now
      }
      let next = ''
      for (let i = 0; i < target.length; i++) {
        const c = target[i]
        next +=
          i < locked || c === ' ' || c === '\n'
            ? c
            : charset[Math.floor(Math.random() * charset.length)]
      }
      setFrame(next)
    }

    const id = setInterval(tick, speed)
    tick()
    return () => {
      clearInterval(id)
      setFrame(null)
    }
  }, [target, speed, lockEvery, loopAfter, charset])

  return frame ?? target
}
