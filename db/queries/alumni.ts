import 'server-only'
import { desc, eq } from 'drizzle-orm'
import { db } from '@/db/client'
import { profiles, users } from '@/db/schema'

export async function listAlumni(limit = 50) {
  return db
    .select({
      id: users.id,
      name: users.name,
      image: users.image,
      batchYear: profiles.batchYear,
      company: profiles.company,
      role: profiles.role,
      location: profiles.location,
      linkedin: profiles.linkedin,
    })
    .from(profiles)
    .innerJoin(users, eq(users.id, profiles.userId))
    .where(eq(profiles.isAlumni, true))
    .orderBy(desc(profiles.batchYear))
    .limit(limit)
}
