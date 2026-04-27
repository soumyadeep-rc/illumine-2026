import { cn } from '@/lib/cn'

type Props = {
  className?: string
}

/**
 * The ILLUMINE wordmark with the sliced trailing E from the design.
 * Renders as text using the display font for crisp scaling.
 */
export function Logo({ className }: Props) {
  return (
    <span
      className={cn(
        'font-display text-ink inline-block text-xl leading-none font-bold tracking-[0.18em] select-none sm:text-2xl',
        className,
      )}
    >
      ILLUMIN
      <span aria-hidden className="relative inline-block">
        E{/* Slash through the trailing E to match the design. */}
        <span className="bg-deep absolute top-1/2 left-[10%] h-[2px] w-[80%] -translate-y-1/2 rotate-[-30deg]" />
      </span>
    </span>
  )
}
