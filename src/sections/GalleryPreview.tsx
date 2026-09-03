import { useState } from 'react'
import { gallery } from '../data/site'
import { Container, OptimizedImage, SectionEyebrow } from '../components/ui/Primitives'
import { Lightbox } from '../components/gallery/Lightbox'
import { ButtonLink } from '../components/ui/Button'

export function GalleryPreview() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const items = gallery.slice(0, 6)

  return (
    <section className="bg-void py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Inside the room</SectionEyebrow>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.9]">The floor, in frames.</h2>
          </div>
          <ButtonLink to="/gallery" variant="secondary">
            Open gallery
          </ButtonLink>
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
              <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/35" />
              <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.22em] text-white uppercase opacity-0 transition group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </Container>
      <Lightbox items={items} activeId={activeId} onClose={() => setActiveId(null)} onChange={setActiveId} />
    </section>
  )
}
