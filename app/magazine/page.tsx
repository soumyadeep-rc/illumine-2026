import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/PageHeader'
import { cn } from '@/lib/cn'

export const metadata: Metadata = {
  title: 'Magazine',
  description: 'Stories, essays, and memories from twenty-five years of IT @ JU.',
}

const placeholders = [
  { eyebrow: 'Vol. 25 · 2026', title: 'The Silver Jubilee Issue', body: 'A retrospective.' },
  {
    eyebrow: 'Essay',
    title: 'Lab 4B — late nights, first commits',
    body: 'A first-batch alum remembers.',
  },
  {
    eyebrow: 'Photo essay',
    title: 'Then and now',
    body: 'Campus, side by side, across two decades.',
  },
  {
    eyebrow: 'Interview',
    title: 'Building startups from the dorm',
    body: 'Three founders on what the IT program gave them.',
  },
  {
    eyebrow: 'Profile',
    title: 'From canteen tea to tech leadership',
    body: 'A faculty member traces the arc.',
  },
  {
    eyebrow: 'Open call',
    title: 'Submit your story',
    body: 'We’re collecting alumni essays for the print edition.',
  },
]

export default function MagazinePage() {
  return (
    <>
      <PageHeader
        eyebrow="02 // Magazine"
        title="Twenty-five issues, one homecoming"
        description="A growing collection of essays, photo stories, and interviews from the Illumine community."
      />
      <ul className="mx-auto grid max-w-[1200px] gap-6 px-6 py-16 sm:grid-cols-2 sm:px-12 lg:grid-cols-3">
        {placeholders.map((p, i) => (
          <li
            key={i}
            className={cn(
              'group bg-surface relative overflow-hidden border border-white/5 p-6 transition-colors',
              'clip-hud hover:border-accent/40',
            )}
          >
            <p className="text-accent mb-3 font-mono text-[11px] tracking-[0.3em] uppercase">
              {p.eyebrow}
            </p>
            <h2 className="font-display text-ink text-xl leading-snug font-semibold">{p.title}</h2>
            <p className="text-muted mt-3 text-sm leading-relaxed">{p.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
