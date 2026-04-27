import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHeader } from '@/components/site/PageHeader'
import { listAlumni } from '@/db/queries/alumni'
import { auth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Alumni Directory',
  description: 'Browse the Illumine alumni network — gated to verified members.',
}

export default async function AlumniPage() {
  const session = await auth()
  return (
    <>
      <PageHeader
        eyebrow="03 // Network"
        title="Alumni directory"
        description={
          session?.user
            ? `Welcome back, ${session.user.name ?? 'alum'}. The directory is sorted by graduating batch.`
            : 'Verified alumni only. Sign in to view the full directory.'
        }
      />
      <Suspense fallback={<DirectorySkeleton />}>
        <Directory />
      </Suspense>
    </>
  )
}

async function Directory() {
  let rows: Awaited<ReturnType<typeof listAlumni>> = []
  try {
    rows = await listAlumni()
  } catch {
    // DB likely not configured yet — render an empty state instead of crashing.
    rows = []
  }

  if (rows.length === 0) {
    return (
      <p className="text-muted mx-auto max-w-[1200px] px-6 py-16 sm:px-12">
        The directory is being seeded. Check back shortly, or{' '}
        <a className="text-accent hover:underline" href="/contact">
          contact us
        </a>{' '}
        to request early access.
      </p>
    )
  }

  return (
    <ul className="mx-auto grid max-w-[1200px] gap-4 px-6 py-16 sm:grid-cols-2 sm:px-12 lg:grid-cols-3">
      {rows.map((row) => (
        <li
          key={row.id}
          className="bg-surface clip-hud border border-white/5 p-5 transition-colors"
        >
          <h3 className="font-display text-ink text-lg font-semibold">{row.name ?? 'Alum'}</h3>
          <p className="text-accent mt-1 font-mono text-xs tracking-widest">
            BATCH {row.batchYear ?? '—'}
          </p>
          {row.role || row.company ? (
            <p className="text-muted mt-2 text-sm">
              {[row.role, row.company].filter(Boolean).join(' · ')}
            </p>
          ) : null}
          {row.location ? <p className="text-dim mt-1 text-xs">{row.location}</p> : null}
        </li>
      ))}
    </ul>
  )
}

function DirectorySkeleton() {
  return (
    <div className="mx-auto grid max-w-[1200px] gap-4 px-6 py-16 sm:grid-cols-2 sm:px-12 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-surface clip-hud h-32 animate-pulse border border-white/5" />
      ))}
    </div>
  )
}
