import { useState } from 'react'
import { trainers, site } from '../data/site'
import type { Trainer } from '../data/site'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { Container, OptimizedImage } from '../components/ui/Primitives'
import { Button } from '../components/ui/Button'
import { TrainerModal } from '../components/trainers/TrainerModal'

export function TrainersPage() {
  const [active, setActive] = useState<Trainer | null>(null)
  const [filter, setFilter] = useState('All')
  const specs = ['All', ...Array.from(new Set(trainers.map((t) => t.specialization)))]
  const list = filter === 'All' ? trainers : trainers.filter((t) => t.specialization === filter)

  return (
    <>
      <Seo
        title="Trainers"
        description="Meet the Vivansh coaching team — strength, personal training, conditioning and group training."
        path="/trainers"
      />
      <PageHero
        eyebrow="Coaches"
        title="People who still do the work."
        body="Coach names, bios and photographs on this page are sample profiles. Swap them for the gym’s real team."
        image={site.images.trial}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Coach specializations">
            {specs.map((spec) => (
              <button
                key={spec}
                type="button"
                onClick={() => setFilter(spec)}
                className={`px-4 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase ${
                  filter === spec ? 'bg-ember text-white' : 'border border-line text-stone hover:text-bone'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
          <div className="grid gap-10 md:grid-cols-2">
          {list.map((trainer) => (
            <article key={trainer.slug} className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
              <div className="aspect-[3/4] overflow-hidden">
                <OptimizedImage
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-[11px] tracking-[0.22em] text-ember uppercase">{trainer.role}</p>
                <h2 className="font-display mt-2 text-5xl">{trainer.name}</h2>
                <p className="mt-3 text-xs tracking-[0.16em] text-mist uppercase">
                  {trainer.specialization} · {trainer.experience}
                </p>
                <p className="mt-4 text-sm text-stone">{trainer.bio}</p>
                <Button variant="ghost" className="mt-6 w-fit px-0" onClick={() => setActive(trainer)}>
                  View profile
                </Button>
              </div>
            </article>
          ))}
          </div>
        </Container>
      </section>
      <TrainerModal trainer={active} onClose={() => setActive(null)} />
    </>
  )
}
