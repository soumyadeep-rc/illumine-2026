import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from '@/components/hero/Navbar'
import { SiteFooter } from '@/components/site/Footer'
import { fontDisplay, fontMono, fontSans } from '@/lib/fonts'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.department}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Illumine 2026',
    'Jadavpur University',
    'Department of Information Technology',
    'IT alumni reunion',
    'silver jubilee',
    '25 years',
  ],
  authors: [{ name: 'Department of IT, Jadavpur University' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable}`}>
      <body className="bg-deep text-ink relative min-h-dvh antialiased">
        <Navbar />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
