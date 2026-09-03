import { firstVisit, visitSteps } from '../data/site'
import { Container, SectionEyebrow } from '../components/ui/Primitives'
import { ButtonLink } from '../components/ui/Button'

export function VisitJourney() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionEyebrow>How joining works</SectionEyebrow>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.9]">
              Four steps. Then you train.
            </h2>
          </div>
          <p className="max-w-md text-sm text-mist lg:col-span-5">
            A clear path from first message to first session — built so a visitor never has to guess what happens next.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visitSteps.map((step) => (
            <li key={step.number} className="border-t border-ember/50 pt-6">
              <p className="text-[11px] tracking-[0.28em] text-ember">{step.number}</p>
              <h3 className="font-display mt-3 text-3xl">{step.title}</h3>
              <p className="mt-3 text-sm text-stone">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 border-t border-line pt-14 lg:grid-cols-2">
          <div>
            <SectionEyebrow>{firstVisit.eyebrow}</SectionEyebrow>
            <h3 className="font-display text-5xl leading-[0.9]">{firstVisit.heading}</h3>
            <ButtonLink to="/trial" className="mt-8">
              Book a free trial
            </ButtonLink>
          </div>
          <ul className="space-y-6">
            {firstVisit.items.map((item) => (
              <li key={item.title} className="border-t border-line pt-4">
                <p className="font-semibold text-bone">{item.title}</p>
                <p className="mt-1 text-sm text-mist">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
