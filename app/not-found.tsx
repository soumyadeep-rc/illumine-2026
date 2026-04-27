import Link from 'next/link'
import { SciFiLink } from '@/components/ui/SciFiButton'

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <p className="text-accent mb-3 font-mono text-xs tracking-[0.4em] uppercase">
          NOT FOUND // 404
        </p>
        <h1 className="font-display text-ink text-3xl font-bold">Lost transmission</h1>
        <p className="text-muted mt-3 text-sm">
          The route you requested doesn’t exist. Maybe it never did.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <SciFiLink href="/">Return home</SciFiLink>
          <Link href="/contact" className="text-muted hover:text-accent self-center text-sm">
            Report a broken link
          </Link>
        </div>
      </div>
    </section>
  )
}
