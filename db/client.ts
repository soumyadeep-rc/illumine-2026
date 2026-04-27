import 'server-only'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema'

// neon-http defers network I/O to query time, so it's safe to construct with a
// placeholder when DATABASE_URL is missing. This keeps `next build`'s page-data
// pass green (DrizzleAdapter inspects `db` at module load) — any real query
// against an unconfigured environment still surfaces a connection error.
const url =
  process.env.DATABASE_URL ?? 'postgres://placeholder:placeholder@localhost:5432/placeholder'

export const db = drizzle(neon(url), { schema })
