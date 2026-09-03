import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Trainer } from '../../data/site'
import { OptimizedImage } from '../ui/Primitives'
import { ButtonLink } from '../ui/Button'
import { useLockBody } from '../../hooks/useScroll'

export function TrainerModal({
  trainer,
  onClose,
}: {
  trainer: Trainer | null
  onClose: () => void
}) {
  useLockBody(Boolean(trainer))

  useEffect(() => {
    if (!trainer) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [trainer, onClose])

  return (
    <AnimatePresence>
      {trainer && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/80 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="trainer-title"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            className="grid max-h-[90dvh] w-full max-w-3xl overflow-y-auto bg-charcoal md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={trainer.image}
              alt={trainer.name}
              className="h-64 w-full object-cover md:h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="relative p-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 grid h-9 w-9 place-items-center text-stone hover:text-bone"
                aria-label="Close profile"
              >
                <X size={18} />
              </button>
              <p className="text-[11px] tracking-[0.24em] text-ember uppercase">{trainer.role}</p>
              <h3 id="trainer-title" className="font-display mt-2 text-5xl">
                {trainer.name}
              </h3>
              <p className="mt-3 text-sm text-mist">
                {trainer.specialization} · {trainer.experience} experience
              </p>
              <p className="mt-6 text-sm leading-relaxed text-stone">{trainer.bio}</p>
              <p className="mt-4 text-xs text-mist">Coach profiles are sample content until replaced.</p>
              <ButtonLink to="/trial" className="mt-8">
                Book a trial
              </ButtonLink>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
