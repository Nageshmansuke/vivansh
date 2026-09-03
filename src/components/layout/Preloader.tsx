import { useEffect, useState } from 'react'
import { site } from '../../data/site'

export function Preloader() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || sessionStorage.getItem('forge-intro') === '1') return
    setShow(true)
    const t = window.setTimeout(() => {
      sessionStorage.setItem('forge-intro', '1')
      setShow(false)
    }, 1400)
    return () => window.clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-ink" role="status" aria-live="polite">
      <div className="text-center">
        <p className="text-[11px] tracking-[0.4em] text-ember uppercase">{site.city}</p>
        <p className="font-display mt-3 text-6xl tracking-[0.12em] text-bone sm:text-8xl">VIVANSH</p>
        <p className="mt-2 text-[11px] tracking-[0.32em] text-mist uppercase">Gym</p>
      </div>
    </div>
  )
}
