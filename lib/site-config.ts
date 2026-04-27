export const siteConfig = {
  name: 'Illumine 2026',
  tagline: 'A Quarter Century of Memories : Welcoming You Home',
  department: 'Department of Information Technology',
  institution: 'Jadavpur University',
  description:
    'The 25-year silver-jubilee reunion of the Department of Information Technology, Jadavpur University. Familiar paths we walked, where youthful dreams were cast.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  eventDate: process.env.NEXT_PUBLIC_EVENT_DATE ?? '2026-12-26T10:00:00+05:30',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/alumni', label: 'Alumni' },
    { href: '/contact', label: 'Contact Us' },
  ] as const,
} as const
