import { site, philosophy, visitSteps } from '../data/site'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { Container, OptimizedImage } from '../components/ui/Primitives'
import { ButtonLink } from '../components/ui/Button'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Vivansh is a purpose-built training room in Nanded — strength, discipline and coaching without the noise."
        path="/about"
      />
      <PageHero
        eyebrow="About Vivansh"
        title="A gym with a standard."
        body="Vivansh is a demonstration brand for a premium gym website. The story below is written as the gym would tell it — replace it with the owner’s real origin, values and photography."
        image={site.images.about}
      />

      <section className="py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.28em] text-ember uppercase">The room</p>
            <h2 className="font-display mt-4 text-5xl leading-[0.9] md:text-6xl">
              Train with purpose. Leave with a plan.
            </h2>
          </div>
          <div className="space-y-5 text-stone lg:col-span-7 lg:pt-8">
            <p>
              Most gyms sell access. Vivansh is built around coaching. The floor is designed so strength work, conditioning and personal training can happen without competing for the same square metre.
            </p>
            <p>
              {philosophy.body} {philosophy.supporting}
            </p>
            <p>
              The brand, address and numbers on this site are sample content. They exist so an owner can see how a finished custom website would feel with their own identity dropped in.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-void py-24">
        <Container className="grid gap-4 md:grid-cols-2">
          {philosophy.features.map((f) => (
            <article key={f.number} className="border-t border-line py-8 pr-6">
              <p className="text-[11px] tracking-[0.24em] text-ember">{f.number}</p>
              <h3 className="font-display mt-3 text-4xl">{f.title}</h3>
              <p className="mt-3 max-w-md text-sm text-mist">{f.text}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-charcoal py-24">
        <Container>
          <p className="text-[11px] tracking-[0.28em] text-ember uppercase">The path in</p>
          <h2 className="font-display mt-3 text-5xl">How a first visit works.</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visitSteps.map((step) => (
              <li key={step.number} className="border-t border-line pt-5">
                <p className="text-[11px] text-ember">{step.number}</p>
                <h3 className="font-display mt-2 text-3xl">{step.title}</h3>
                <p className="mt-2 text-sm text-mist">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <OptimizedImage
            src={site.images.philosophy}
            alt="Training on the Vivansh strength floor"
            className="aspect-[4/5] w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div>
            <h2 className="font-display text-5xl md:text-6xl">What we protect.</h2>
            <ul className="mt-8 space-y-6 text-stone">
              <li>
                <strong className="block text-bone">Form before load.</strong>
                Strength that lasts starts with movement you can repeat.
              </li>
              <li>
                <strong className="block text-bone">Coaching in the room.</strong>
                Not a poster of a coach. Actual eyes on the set.
              </li>
              <li>
                <strong className="block text-bone">A floor that stays usable.</strong>
                Equipment, spacing and class times planned so members can train, not wait.
              </li>
            </ul>
            <ButtonLink to="/trial" className="mt-10">
              Book a free trial
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
