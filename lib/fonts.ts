import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google'

export const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const fontMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
})

export const fontDisplay = Orbitron({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
})
