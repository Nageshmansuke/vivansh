import type { ReactNode } from 'react'
import { cn } from '../../utils/format'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold tracking-[0.32em] text-ember uppercase">
      {children}
    </p>
  )
}

export function DemoLabel({ children }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line px-2 py-0.5 text-[9px] font-semibold tracking-[0.22em] text-mist uppercase">
      {children ?? 'Demo content'}
    </span>
  )
}

export function OptimizedImage({
  src,
  alt,
  className,
  priority,
  sizes = '100vw',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  const srcSet = [640, 960, 1280, 1600, 2000]
    .map((w) => `${withWidth(src, w)} ${w}w`)
    .join(', ')

  return (
    <img
      src={withWidth(src, 1600)}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}

function withWidth(src: string, w: number) {
  try {
    const url = new URL(src)
    url.searchParams.set('w', String(w))
    url.searchParams.set('auto', 'format')
    url.searchParams.set('fit', 'crop')
    url.searchParams.set('q', '75')
    return url.toString()
  } catch {
    return src
  }
}
