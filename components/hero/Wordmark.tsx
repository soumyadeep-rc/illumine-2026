import { cn } from '@/lib/cn'

type Props = {
  className?: string
}

/**
 * The ILLUMINE 2026 sliced wordmark. Approximates the cyberpunk/sliced look
 * via Orbitron Black at wide tracking, with a thin horizontal slice across the
 * middle to evoke the cut letterforms in the design.
 *
 * Note: the source design uses a custom sliced typeface; for production a
 * dedicated SVG outline (or a licensed sci-fi face) would be used here.
 */
export function Wordmark({ className }: Props) {
  return (
    <h1
      className={cn(
        'font-display text-ink relative inline-block leading-[0.95] font-black tracking-[0.06em] select-none',
        'text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.5rem]',
        className,
      )}
    >
      <span className="relative">
        ILLUMINE&nbsp;2026
        {/* Horizontal slice to evoke the sliced glyphs. */}
        <span
          aria-hidden
          className="bg-deep absolute inset-x-0 top-[58%] h-[3px] mix-blend-screen"
          style={{ transform: 'skewY(-3deg)' }}
        />
        <span
          aria-hidden
          className="bg-deep/95 absolute inset-x-0 top-[24%] h-[2px] mix-blend-multiply"
          style={{ transform: 'skewY(-3deg)' }}
        />
      </span>
    </h1>
  )
}
