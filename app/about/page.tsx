import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/PageHeader'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Twenty-five years of the Department of Information Technology at Jadavpur University.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="01 // History"
        title="A quarter century of IT"
        description="The Department of Information Technology at Jadavpur University has graduated alumni now leading teams at companies across the globe. Illumine 2026 marks the silver-jubilee homecoming."
      />
      <article className="text-muted mx-auto max-w-3xl px-6 py-16 text-base leading-relaxed sm:px-12 sm:text-lg">
        <p>
          Founded in the early 2000s, the department has grown from a small undergraduate programme
          to a recognised research and engineering hub. Generations of students have shaped how
          India builds software.
        </p>
        <p className="mt-6">
          Illumine 2026 brings them back — to the labs they coded in, the canteens they argued in,
          and the friends they made across batches.
        </p>
      </article>
    </>
  )
}
