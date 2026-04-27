import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

/**
 * Next.js 16 renamed middleware → proxy. Runs on the Node runtime.
 * Protects /alumni: unauthenticated users are bounced to /login with `next` param.
 */
export default auth((req) => {
  const { pathname, search } = req.nextUrl
  const isProtected = pathname.startsWith('/alumni')

  if (isProtected && !req.auth) {
    const next = pathname + search
    const url = new URL(`/login?next=${encodeURIComponent(next)}`, req.nextUrl)
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
})

export const config = {
  // Run only on protected paths to keep the proxy lean.
  matcher: ['/alumni/:path*'],
}
