import { useState } from 'react'
import { trainers } from '../data/site'
import { Container, OptimizedImage, SectionEyebrow } from '../components/ui/Primitives'
import { Button } from '../components/ui/Button'
import { TrainerModal } from '../components/trainers/TrainerModal'
import type { Trainer } from '../data/site'

export function TrainersPreview() {
  const [active, setActive] = useState<Trainer | null>(null)

  return (
    <section className="bg-void py-24 md:py-32">
      <Container>
        <div className="mb-12">
          <SectionEyebrow>Coaches</SectionEyebrow>
          <h2 className="font-display max-w-3xl text-[clamp(2.6rem,6vw,5rem)] leading-[0.9]">
            Coached by people who still train.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <article key={trainer.slug} className="group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <OptimizedImage
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-3xl">{trainer.name}</h3>
                <p className="text-sm text-ember">{trainer.role}</p>
                <p className="mt-2 text-xs tracking-[0.16em] text-mist uppercase">
                  {trainer.specialization} · {trainer.experience}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 px-0"
                  onClick={() => setActive(trainer)}
                >
                  View profile
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <TrainerModal trainer={active} onClose={() => setActive(null)} />
    </section>
  )
}
