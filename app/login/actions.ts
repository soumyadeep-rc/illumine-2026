'use server'

import { signIn } from '@/lib/auth'

export async function signInWith(provider: 'google' | 'github', next: string) {
  await signIn(provider, { redirectTo: next })
}

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get('email') ?? '')
  const next = String(formData.get('next') ?? '/')
  if (!email) return
  await signIn('resend', { email, redirectTo: next })
}
