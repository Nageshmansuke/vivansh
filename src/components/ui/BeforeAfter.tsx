import { useRef, useState, type PointerEvent } from 'react'
import { OptimizedImage } from './Primitives'

export function BeforeAfter({
  before,
  after,
  name,
}: {
  before: string
  after: string
  name: string
}) {
  const [pos, setPos] = useState(52)
  const ref = useRef<HTMLDivElement>(null)

  function move(clientX: number) {
    const box = ref.current?.getBoundingClientRect()
    if (!box) return
    const next = ((clientX - box.left) / box.width) * 100
    setPos(Math.min(92, Math.max(8, next)))
  }

  function onPointer(e: PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId)
    move(e.clientX)
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] cursor-ew-resize overflow-hidden select-none"
      onPointerDown={onPointer}
      onPointerMove={(e) => {
        if (e.buttons) move(e.clientX)
      }}
      role="slider"
      aria-valuemin={8}
      aria-valuemax={92}
      aria-valuenow={Math.round(pos)}
      aria-label={`Progress comparison for ${name}. Sample photography.`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(8, p - 6))
        if (e.key === 'ArrowRight') setPos((p) => Math.min(92, p + 6))
      }}
    >
      <OptimizedImage src={after} alt={`${name} — after, sample`} className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <OptimizedImage
          src={before}
          alt={`${name} — before, sample`}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
      </div>
      <div className="absolute inset-y-0 w-px bg-bone" style={{ left: `${pos}%` }} />
      <div
        className="absolute top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 border border-bone bg-ink/80 text-[9px] font-semibold tracking-widest text-bone uppercase"
        style={{ left: `${pos}%` }}
      >
        <span className="grid h-full place-items-center">Drag</span>
      </div>
      <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] text-white uppercase">Before</span>
      <span className="absolute right-3 bottom-3 text-[10px] tracking-[0.2em] text-white uppercase">After</span>
    </div>
  )
}
