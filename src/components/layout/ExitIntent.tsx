import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { ButtonLink } from '../ui/Button'

export function ExitIntent() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (pathname === '/trial') return
    if (sessionStorage.getItem('forge-exit') === '1') return

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 12) return
      sessionStorage.setItem('forge-exit', '1')
      setOpen(true)
    }

    const timer = window.setTimeout(() => {
      if (sessionStorage.getItem('forge-exit') === '1') return
      sessionStorage.setItem('forge-exit', '1')
      setOpen(true)
    }, 45000)

    document.addEventListener('mouseout', onLeave)
    return () => {
      document.removeEventListener('mouseout', onLeave)
      window.clearTimeout(timer)
    }
  }, [pathname])

  if (!open || pathname === '/trial') return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/70 p-4 backdrop-blur-sm sm:items-center">
      <div className="relative w-full max-w-md border border-line bg-charcoal p-8">
        <button
          type="button"
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center text-stone"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          <X size={16} />
        </button>
        <p className="text-[11px] tracking-[0.24em] text-ember uppercase">Complimentary session</p>
        <h2 className="font-display mt-2 text-4xl">Train once before you decide.</h2>
        <p className="mt-3 text-sm text-mist">
          Book a free trial — no membership on the first visit. This prompt is a demo lead-capture pattern.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <ButtonLink to="/trial" className="flex-1">
            Book a free trial
          </ButtonLink>
          <button type="button" className="text-xs tracking-[0.16em] text-mist uppercase" onClick={() => setOpen(false)}>
            Not now
          </button>
        </div>
      </div>
    </div>
  )
}
