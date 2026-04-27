/**
 * The dark hero backdrop. Pure CSS (no image asset required) — a deep
 * radial vignette over a fine grid of dotted lines. If you have a campus
 * photo, drop it into /public and layer it via next/image (priority, AVIF)
 * with the same vignette mask on top.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* Faint grid plate. */}
      <div className="hud-grid absolute inset-0 opacity-50" />
      {/* Vignette darkening the edges. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(13,15,28,0.4) 0%, rgba(0,0,0,0.85) 70%, #000 100%)',
        }}
      />
      {/* Subtle accent glow behind the wordmark. */}
      <div
        className="absolute top-1/2 left-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-[55%] opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(91,108,255,0.55) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
