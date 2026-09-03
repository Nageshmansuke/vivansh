import { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../../data/site'
import { useLockBody, useScrolled } from '../../hooks/useScroll'
import { Logo } from './Logo'
import { ButtonLink } from '../ui/Button'
import { cn } from '../../utils/format'

export function Navbar() {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()

  useLockBody(open)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-line/80 bg-ink/80 py-2 backdrop-blur-md'
          : 'border-transparent bg-ink/40 py-4 backdrop-blur-sm',
      )}
    >
      <div className="relative z-[60] mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo compact={scrolled} />

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors',
                  isActive ? 'text-ember' : 'text-stone hover:text-bone',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink to="/trial" size="sm" className="hidden sm:inline-flex">
            Book a free trial
          </ButtonLink>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-bone xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-ink xl:hidden"
          >
            <div className="flex h-full flex-col px-6 pt-24 pb-10">
              <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile">
                {site.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          'block font-display text-[52px] leading-none tracking-[0.06em] sm:text-[64px]',
                          isActive ? 'text-ember' : 'text-bone',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <ButtonLink to="/trial" size="lg" className="w-full">
                Book a free trial
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
