import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/format'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light'
type Size = 'md' | 'lg' | 'sm'

type Common = {
  children: ReactNode
  className?: string
  variant?: Variant
  size?: Size
}

const styles: Record<Variant, string> = {
  primary: 'bg-ember text-white hover:bg-ember-hot hover:-translate-y-px',
  secondary: 'border border-bone/30 text-bone hover:border-bone hover:bg-bone/5',
  ghost: 'text-bone hover:text-white',
  light: 'bg-bone text-ink hover:bg-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[11px]',
  md: 'px-5 py-3 text-[12px]',
  lg: 'px-7 py-3.5 text-[13px]',
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold tracking-[0.18em] uppercase transition duration-300 disabled:opacity-50 disabled:pointer-events-none'

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, styles[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  className,
  variant = 'primary',
  size = 'md',
  external,
}: Common & { to: string; external?: boolean }) {
  const cls = cn(base, styles[variant], sizes[size], className)
  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  )
}
