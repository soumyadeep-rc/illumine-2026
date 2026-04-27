import 'server-only'
import { db } from '@/db/client'
import { contactMessages } from '@/db/schema'

export type NewContactMessage = typeof contactMessages.$inferInsert

export async function insertContactMessage(input: NewContactMessage) {
  const [row] = await db.insert(contactMessages).values(input).returning({ id: contactMessages.id })
  return row
}
