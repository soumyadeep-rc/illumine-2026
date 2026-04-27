import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/cn'

type BaseProps = {
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md'
  className?: string
  children: React.ReactNode
}

const baseClass =
  'clip-slash inline-flex items-center justify-center gap-2 font-medium tracking-[0.18em] uppercase ' +
  'transition-colors duration-200 select-none'

const variantClass = {
  solid: 'bg-accent text-ink hover:bg-accent-hi shadow-[0_0_24px_rgba(91,108,255,0.35)]',
  outline: 'border border-ink/70 text-ink hover:border-accent hover:text-accent bg-transparent',
} as const

const sizeClass = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
} as const

export function SciFiButton({
  variant = 'solid',
  size = 'md',
  className,
  children,
  ...rest
}: BaseProps & Omit<ComponentProps<'button'>, 'children'>) {
  return (
    <button className={cn(baseClass, variantClass[variant], sizeClass[size], className)} {...rest}>
      {children}
    </button>
  )
}

type LinkProps = BaseProps & Omit<ComponentProps<typeof Link>, 'children'>

export function SciFiLink({
  variant = 'solid',
  size = 'md',
  className,
  children,
  ...rest
}: LinkProps) {
  return (
    <Link className={cn(baseClass, variantClass[variant], sizeClass[size], className)} {...rest}>
      {children}
    </Link>
  )
}
