'use client'

import { useDecryptedText } from '@/hooks/useDecryptedText'
import { cn } from '@/lib/cn'

type Props = {
  align: 'left' | 'right'
  className?: string
}

const LEFT_LINES = [
  'TRMX CORE SYSTEM      LAB NODE',
  'VRS 03.44.77   SYS INIT SEQ   MOD LOAD //',
  'SEC NODE 77AF81C2 / 10.0.3.221 AUTH: ROOT',
  '',
  'PROCESS : EXEC [98.7%]  --  GRID SYNC -- TRMX SYS',
  '',
  'CFG RESET MODULE   ACT:8-9   PIPE:OPEN',
  'NET CHANNEL   QNT:0-4   LAT:0.3MS',
  'MOD 554-992-001  MOD 225-118-778  MOD 889-001-662',
  'ALX Q   BUS LINK OK   CACHE READY',
  '',
  'DRV STATUS:OK   MEM:67%   TEMP:34C',
  'GPU:ACTIVE   CLK:1.8GHZ   VOLT:STABLE',
  '',
  'INPUT:READY   OUTPUT:READY   PORTB:OPEN',
  'KERNEL:PASS   THREADS:128   ERR:NONE',
  '_____________________________',
  '//R',
  'UPD SEQ LVL 22/30   SYNC 0-1   CHK:A9F3-7701',
  'END PROC >>',
] as const

const RIGHT_LINES = [
  'TRMX CORE',
  '         LAB',
  'VRS 03.44.77   SYS INIT',
  'SEC NODE 77AF81C2  AUTH: ROOT',
  '',
  'PROCESS : EXEC [98.7%]',
  '',
  'CFG RESET   ACT:8-9',
  'NET CHN     QNT:0-4',
  '',
  'MEM:67%   TEMP:34C   GPU:OK',
  '',
  'INPUT:READY   OUTPUT:READY',
  'ERR:NONE',
  '',
  'END >>',
] as const

export function HudPanel({ align, className }: Props) {
  const lines = align === 'left' ? LEFT_LINES : RIGHT_LINES
  return (
    <aside
      aria-hidden
      className={cn(
        'text-muted/80 pointer-events-none font-mono select-none',
        'space-y-[2px] text-[10px] leading-[1.45] sm:text-[11px]',
        align === 'right' && 'text-right',
        className,
      )}
    >
      {lines.map((line, i) => (
        <Line key={i} text={line} delay={i * 60} />
      ))}
    </aside>
  )
}

function Line({ text, delay }: { text: string; delay: number }) {
  // Empty rows render a spacer to preserve vertical rhythm.
  const out = useDecryptedText(text, {
    speed: 55,
    lockEvery: Math.max(40, 90 - text.length),
    loopAfter: 6000 + delay,
  })
  if (text === '') return <div className="h-[14px]" />
  return <div className="whitespace-pre">{out}</div>
}
