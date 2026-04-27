import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const routes = ['', 'about', 'magazine', 'alumni', 'events', 'contact', 'login', 'signup']
  return routes.map((path) => ({
    url: `${siteConfig.url}/${path}`.replace(/\/$/, '') || siteConfig.url,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))
}
