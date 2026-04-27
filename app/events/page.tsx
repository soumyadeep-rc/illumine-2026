import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/PageHeader'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Events',
  description: 'The full Illumine 2026 schedule — talks, panels, dinners, and reunions.',
}

const sessions = [
  { time: 'Day 1 · 10:00', title: 'Registration & opening address', venue: 'Main auditorium' },
  { time: 'Day 1 · 14:00', title: 'Department lab tours', venue: 'IT building, floors 2–4' },
  { time: 'Day 1 · 19:00', title: 'Welcome dinner', venue: 'University guest house lawns' },
  {
    time: 'Day 2 · 10:00',
    title: 'Alumni keynote — building enduring teams',
    venue: 'Main auditorium',
  },
  { time: 'Day 2 · 14:00', title: 'Batch breakout sessions', venue: 'Departmental seminar rooms' },
  { time: 'Day 2 · 20:00', title: 'Silver Jubilee gala', venue: 'JU Centenary Hall' },
]

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="05 // Schedule"
        title="Two days. Twenty-five years."
        description={`The full Illumine 2026 programme. Doors open ${new Date(
          siteConfig.eventDate,
        ).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}.`}
      />
      <ul className="mx-auto max-w-3xl divide-y divide-white/5 px-6 py-16 sm:px-12">
        {sessions.map((s) => (
          <li key={s.time} className="grid gap-2 py-6 md:grid-cols-[180px_1fr] md:gap-8">
            <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase">{s.time}</p>
            <div>
              <h3 className="font-display text-ink text-lg font-semibold">{s.title}</h3>
              <p className="text-muted mt-1 text-sm">{s.venue}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
