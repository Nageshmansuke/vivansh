import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '../../data/site'
import { OptimizedImage } from '../ui/Primitives'
import { useLockBody } from '../../hooks/useScroll'

export function Lightbox({
  items,
  activeId,
  onClose,
  onChange,
}: {
  items: GalleryItem[]
  activeId: string | null
  onClose: () => void
  onChange: (id: string) => void
}) {
  const index = items.findIndex((i) => i.id === activeId)
  const item = index >= 0 ? items[index] : null
  useLockBody(Boolean(item))

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, items, index])

  function step(dir: number) {
    if (!items.length) return
    const next = (index + dir + items.length) % items.length
    onChange(items[next].id)
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center text-bone"
            aria-label="Close image"
          >
            <X />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                className="absolute left-3 grid h-11 w-11 place-items-center border border-white/20 text-bone sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                className="absolute right-14 grid h-11 w-11 place-items-center border border-white/20 text-bone sm:right-20"
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            </>
          )}
          <motion.figure
            key={item.id}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-h-[86dvh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={item.image}
              alt={item.title}
              className="max-h-[78dvh] w-auto object-contain"
              sizes="90vw"
            />
            <figcaption className="mt-3 text-sm text-stone">
              <span className="mr-3 tracking-[0.2em] text-ember uppercase">{item.category}</span>
              {item.title}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
