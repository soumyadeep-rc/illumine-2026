'use client'

import { useActionState } from 'react'
import { submitContact } from '@/app/contact/actions'
import { SciFiButton } from '@/components/ui/SciFiButton'
import { cn } from '@/lib/cn'
import type { ContactFormState } from '@/lib/validation'

const initial: ContactFormState = { status: 'idle' }

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial)

  if (state.status === 'ok') {
    return (
      <div role="status" className="border-accent/40 bg-surface clip-hud border p-6 text-center">
        <p className="font-display text-ink text-xl font-semibold">{state.message}</p>
        <p className="text-muted mt-2 text-sm">A confirmation will land in your inbox shortly.</p>
      </div>
    )
  }

  return (
    <form action={action} className="grid gap-5">
      <Field
        label="Name"
        name="name"
        type="text"
        autoComplete="name"
        error={state.status === 'error' ? state.errors?.name?.[0] : undefined}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        error={state.status === 'error' ? state.errors?.email?.[0] : undefined}
      />
      <Field
        label="Subject"
        name="subject"
        type="text"
        error={state.status === 'error' ? state.errors?.subject?.[0] : undefined}
      />
      <Field
        label="Message"
        name="message"
        textarea
        rows={5}
        error={state.status === 'error' ? state.errors?.message?.[0] : undefined}
      />
      {state.status === 'error' && state.message ? (
        <p className="text-sm text-red-400">{state.message}</p>
      ) : null}
      <div className="flex justify-end">
        <SciFiButton type="submit" disabled={pending}>
          {pending ? 'Transmitting…' : 'Send message'}
        </SciFiButton>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  textarea,
  rows,
  autoComplete,
  error,
}: {
  label: string
  name: string
  type?: string
  textarea?: boolean
  rows?: number
  autoComplete?: string
  error?: string
}) {
  const id = `field-${name}`
  const sharedClass = cn(
    'bg-surface w-full border border-white/10 px-4 py-3 text-sm text-ink',
    'placeholder:text-dim focus:border-accent focus:outline-none',
    error && 'border-red-500/50',
  )
  return (
    <div>
      <label
        htmlFor={id}
        className="text-muted mb-2 block font-mono text-[11px] tracking-[0.3em] uppercase"
      >
        {label}
      </label>
      {textarea ? (
        <textarea id={id} name={name} rows={rows} className={sharedClass} required />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className={sharedClass}
          required
        />
      )}
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  )
}
