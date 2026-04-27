import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-12 sm:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="text-muted mt-4 text-sm leading-relaxed">
            {siteConfig.department}, {siteConfig.institution}. The silver-jubilee reunion —{' '}
            {new Date(siteConfig.eventDate).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
            .
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm">
          {siteConfig.navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted hover:text-ink tracking-wide transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="text-dim mx-auto mt-10 max-w-[1400px] border-t border-white/5 pt-6 font-mono text-[11px] tracking-widest uppercase">
        © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.institution}
      </div>
    </footer>
  )
}
