import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import type { AdapterAccountType } from 'next-auth/adapters'

/* -----------------------------------------------------------------------------
   Auth.js tables (shape required by @auth/drizzle-adapter)
   --------------------------------------------------------------------------- */

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').unique().notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
})

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => [primaryKey({ columns: [account.provider, account.providerAccountId] })],
)

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })],
)

/* -----------------------------------------------------------------------------
   Application tables
   --------------------------------------------------------------------------- */

export const profiles = pgTable('profile', {
  userId: text('userId')
    .primaryKey()
    .references(() => users.id, { onDelete: 'cascade' }),
  batchYear: integer('batchYear'),
  company: varchar('company', { length: 160 }),
  role: varchar('role', { length: 160 }),
  location: varchar('location', { length: 160 }),
  linkedin: text('linkedin'),
  bio: text('bio'),
  isAlumni: boolean('isAlumni').default(false).notNull(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow().notNull(),
})

export const events = pgTable('event', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  datetime: timestamp('datetime', { mode: 'date', withTimezone: true }).notNull(),
  venue: varchar('venue', { length: 200 }),
  capacity: integer('capacity'),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
})

export const registrations = pgTable(
  'registration',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    eventId: integer('eventId')
      .notNull()
      .references(() => events.id, { onDelete: 'cascade' }),
    registeredAt: timestamp('registeredAt', { mode: 'date' }).defaultNow().notNull(),
  },
  (r) => [primaryKey({ columns: [r.userId, r.eventId] })],
)

export const contactMessages = pgTable('contactMessage', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  email: varchar('email', { length: 200 }).notNull(),
  subject: varchar('subject', { length: 200 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
})
