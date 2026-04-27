import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'
import { db } from '@/db/client'
import { accounts, sessions, users, verificationTokens } from '@/db/schema'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.AUTH_EMAIL_FROM,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.userId = user.id
      return token
    },
    async session({ session, token }) {
      if (token.userId && session.user) {
        session.user.id = token.userId as string
      }
      return session
    },
  },
})
