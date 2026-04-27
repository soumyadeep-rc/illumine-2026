'use client'

import { useEffect, useState } from 'react'
import { countdownFrom, pad, type CountdownParts } from '@/lib/countdown'

type Props = {
  /** Pre-computed parts from the server (avoids initial CLS / hydration jump). */
  initial: CountdownParts
  /** Target as epoch ms. */
  target: number
}

export function Countdown({ initial, target }: Props) {
  const [parts, setParts] = useState(initial)

  useEffect(() => {
    const id = setInterval(() => {
      setParts(countdownFrom(Date.now(), target))
    }, 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div
      className="font-display text-accent text-glow flex items-center justify-center gap-3 text-3xl tabular-nums sm:text-4xl md:text-5xl"
      aria-label={`Time remaining: ${parts.days} days, ${parts.hours} hours, ${parts.minutes} minutes, ${parts.seconds} seconds`}
    >
      <Unit value={parts.days} label="d" />
      <Unit value={parts.hours} label="h" />
      <Unit value={parts.minutes} label="m" />
      <Unit value={parts.seconds} label="s" />
    </div>
  )
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <span>{pad(value)}</span>
      <span className="text-muted text-base font-normal sm:text-lg">{label}</span>
    </span>
  )
}
