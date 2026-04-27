import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['motion', 'lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
