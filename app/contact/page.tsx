import type { Metadata } from 'next'
import { ContactForm } from '@/app/contact/ContactForm'
import { PageHeader } from '@/components/site/PageHeader'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to the Illumine 2026 organising team.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="04 // Contact"
        title="Get in touch"
        description="Reunion logistics, sponsorship, or press — drop us a line."
      />
      <section className="mx-auto max-w-2xl px-6 py-16 sm:px-12">
        <ContactForm />
      </section>
    </>
  )
}
