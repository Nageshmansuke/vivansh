import { useScrollProgress } from '../../hooks/useScroll'

export function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-[70] h-[2px] bg-transparent" aria-hidden>
      <div
        className="h-full origin-left bg-ember"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
