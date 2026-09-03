import { useMemo, useState } from 'react'
import { gallery, galleryFilters, site, type GalleryFilter } from '../data/site'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { Container, OptimizedImage } from '../components/ui/Primitives'
import { Lightbox } from '../components/gallery/Lightbox'
import { cn } from '../utils/format'

export function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilter>('ALL')
  const [activeId, setActiveId] = useState<string | null>(null)

  const items = useMemo(
    () => (filter === 'ALL' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  )

  return (
    <>
      <Seo
        title="Gallery"
        description="Look inside Vivansh — gym floor, training, equipment and community photography placeholders."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="The work, in stills."
        body="Stock photography for the demonstration. Filter by category, then click any frame. Replace with the gym’s own images."
        image={site.images.philosophy}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
            {galleryFilters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  'px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase',
                  filter === item ? 'bg-ember text-white' : 'border border-line text-stone hover:text-bone',
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="group relative mb-4 block w-full overflow-hidden"
              >
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                  <span>
                    <span className="block text-[10px] tracking-[0.22em] text-ember uppercase">{item.category}</span>
                    <span className="text-sm text-bone">{item.title}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>
      <Lightbox items={items} activeId={activeId} onClose={() => setActiveId(null)} onChange={setActiveId} />
    </>
  )
}
