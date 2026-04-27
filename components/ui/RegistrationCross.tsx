import { cn } from '@/lib/cn'

type Props = {
  className?: string
  size?: number
  /** Stagger animation per cross (so they don't all pulse in sync). */
  delay?: number
}

/**
 * The "+" registration mark dotted around the hero. Decorative — aria-hidden.
 */
export function RegistrationCross({ className, size = 18, delay = 0 }: Props) {
  return (
    <span
      aria-hidden
      className={cn('text-muted/60 pointer-events-none absolute', className)}
      style={{ animation: `cross-pulse 3s ease-in-out infinite ${delay}s` }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <line x1="9" y1="0" x2="9" y2="18" />
        <line x1="0" y1="9" x2="18" y2="9" />
      </svg>
    </span>
  )
}
