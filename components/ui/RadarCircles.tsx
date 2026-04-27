import { cn } from '@/lib/cn'

type Props = {
  className?: string
  size?: number
  spin?: boolean
  variant?: 'full' | 'arc'
}

/**
 * Concentric radar circles. Decorative — aria-hidden.
 */
export function RadarCircles({ className, size = 96, spin = false, variant = 'full' }: Props) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn('text-muted/60 pointer-events-none', className)}
      style={spin ? { animation: 'radar-spin 24s linear infinite' } : undefined}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        {variant === 'full' ? (
          <>
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="36" />
            <circle cx="50" cy="50" r="24" />
            <circle cx="50" cy="50" r="12" opacity="0.6" />
            <line x1="2" y1="50" x2="98" y2="50" opacity="0.4" />
            <line x1="50" y1="2" x2="50" y2="98" opacity="0.4" />
            <circle cx="50" cy="50" r="2.5" fill="currentColor" />
          </>
        ) : (
          <>
            {/* Three crescent arcs — matches the bottom-center group in the design. */}
            <path d="M 14 50 A 36 36 0 0 1 50 14" strokeWidth="1" />
            <path d="M 26 50 A 24 24 0 0 1 50 26" strokeWidth="1" />
            <path d="M 38 50 A 12 12 0 0 1 50 38" strokeWidth="1" />
          </>
        )}
      </g>
    </svg>
  )
}
