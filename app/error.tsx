'use client'

import { useEffect } from 'react'
import { SciFiButton } from '@/components/ui/SciFiButton'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="flex min-h-dvh items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <p className="text-accent mb-3 font-mono text-xs tracking-[0.4em] uppercase">
          ERR // {error.digest ?? '500'}
        </p>
        <h1 className="font-display text-ink text-3xl font-bold">System fault</h1>
        <p className="text-muted mt-3 text-sm">
          Something failed while rendering this page. Try again, or head back home.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <SciFiButton onClick={reset}>Retry</SciFiButton>
          <SciFiButton onClick={() => (window.location.href = '/')} variant="outline">
            Home
          </SciFiButton>
        </div>
      </div>
    </section>
  )
}
