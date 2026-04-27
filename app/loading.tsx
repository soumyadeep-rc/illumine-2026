export default function Loading() {
  return (
    <section
      className="flex min-h-dvh items-center justify-center px-6 text-center"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="text-accent font-mono text-xs tracking-[0.4em] uppercase">{'// Loading'}</p>
    </section>
  )
}
