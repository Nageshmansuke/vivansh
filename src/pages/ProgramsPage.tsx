import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { programs, site } from '../data/site'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { Container, OptimizedImage } from '../components/ui/Primitives'
import { ButtonLink } from '../components/ui/Button'

export function ProgramsPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <Seo
        title="Programs"
        description="Strength, personal training, fat loss, muscle building, functional fitness and group training at Vivansh."
        path="/programs"
      />
      <PageHero
        eyebrow="Programs"
        title="A path, not a playlist."
        body="Every program on this page is a starting framework. Coaches adjust volume, intensity and recovery to the person in front of them."
        image={site.images.about}
      />

      <div className="py-20 md:py-28">
        {programs.map((program, i) => (
          <article
            id={program.slug}
            key={program.slug}
            className="scroll-mt-28 border-b border-line py-16 first:pt-0"
          >
            <Container className="grid items-center gap-10 lg:grid-cols-12">
              <div className={i % 2 ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'}>
                <div className="aspect-[5/4] overflow-hidden">
                  <OptimizedImage
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[11px] tracking-[0.24em] text-ember">0{i + 1}</p>
                <h2 className="font-display mt-3 text-5xl md:text-6xl">{program.title}</h2>
                <p className="mt-5 max-w-lg text-stone">{program.description}</p>
                <dl className="mt-8 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Difficulty</dt>
                    <dd className="mt-1 text-bone">{program.difficulty}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Duration</dt>
                    <dd className="mt-1 text-bone">{program.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">Focus</dt>
                    <dd className="mt-1 text-bone">{program.focus}</dd>
                  </div>
                </dl>
                <ButtonLink to="/trial" className="mt-8">
                  Book a free trial
                </ButtonLink>
              </div>
            </Container>
          </article>
        ))}
      </div>
    </>
  )
}
