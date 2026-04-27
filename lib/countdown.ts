export type CountdownParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

export function countdownFrom(now: number, target: number): CountdownParts {
  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)
  return { days, hours, minutes, seconds, done: diff === 0 }
}

export function pad(n: number, width = 2) {
  return n.toString().padStart(width, '0')
}
