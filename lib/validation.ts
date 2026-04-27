import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(120),
  email: z.email('Please enter a valid email.').max(200),
  subject: z.string().min(3, 'Subject is too short.').max(200),
  message: z.string().min(10, 'Tell us a bit more — at least 10 characters.').max(5000),
})

export type ContactInput = z.infer<typeof ContactSchema>

export type ContactFormState =
  | { status: 'idle' }
  | { status: 'error'; errors: Partial<Record<keyof ContactInput, string[]>>; message?: string }
  | { status: 'ok'; message: string }
