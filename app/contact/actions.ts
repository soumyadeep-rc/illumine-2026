'use server'

import { insertContactMessage } from '@/db/queries/contact'
import { ContactSchema, type ContactFormState } from '@/lib/validation'

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })

  if (!parsed.success) {
    return {
      status: 'error',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
    await insertContactMessage(parsed.data)
  } catch {
    return {
      status: 'error',
      errors: {},
      message: 'We couldn’t save your message right now. Please try again shortly.',
    }
  }

  return { status: 'ok', message: 'Message received. We’ll be in touch.' }
}
