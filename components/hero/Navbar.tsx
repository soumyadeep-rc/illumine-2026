'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'
import { SciFiLink } from '@/components/ui/SciFiButton'
import { cn } from '@/lib/cn'
import { siteConfig } from '@/lib/site-config'

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 py-5 sm:px-8 sm:py-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-6"
      >
        <Link href="/" aria-label="Illumine 2026 — home" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {siteConfig.navigation.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative px-5 py-2 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-200',
                    active
                      ? 'clip-slash bg-accent text-ink shadow-[0_0_18px_rgba(91,108,255,0.4)]'
                      : 'text-muted hover:text-ink',
                  )}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <SciFiLink href="/login" variant="solid" size="sm">
            Log In
          </SciFiLink>
          <SciFiLink href="/signup" variant="outline" size="sm">
            Sign Up
          </SciFiLink>
        </div>
      </nav>
      {/* The thin horizontal rule under the centred nav, matching the design. */}
      <div
        aria-hidden
        className="mx-auto mt-4 hidden h-px max-w-[760px] bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block"
      />
    </header>
  )
}
