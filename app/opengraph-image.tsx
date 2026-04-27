import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site-config'

export const alt = `${siteConfig.name} — ${siteConfig.department}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at center, #0a0a18 0%, #000 70%), #000',
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
        padding: 80,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(91,108,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91,108,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          display: 'flex',
        }}
      />
      <div
        style={{
          display: 'flex',
          fontSize: 32,
          color: '#5b6cff',
          letterSpacing: 8,
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        {'// Silver Jubilee · 2026'}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 140,
          fontWeight: 900,
          letterSpacing: 4,
          lineHeight: 1,
        }}
      >
        ILLUMINE 2026
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 32,
          color: '#a8b0c8',
          marginTop: 32,
          letterSpacing: 6,
          textTransform: 'uppercase',
        }}
      >
        {siteConfig.department}
      </div>
    </div>,
    { ...size },
  )
}
