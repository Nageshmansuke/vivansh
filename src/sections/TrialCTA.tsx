import { site } from '../data/site'
import { ButtonLink } from '../components/ui/Button'
import { OptimizedImage } from '../components/ui/Primitives'

export function TrialCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
        <OptimizedImage
          src={site.images.trial}
          alt="Member training during a coaching session"
          className="h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="text-[11px] font-semibold tracking-[0.32em] text-ember uppercase">Complimentary session</p>
        <h2 className="font-display mt-4 text-[clamp(3rem,8vw,6.5rem)] leading-[0.88]">
          Train once.
          <br />
          Decide after.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-stone">
          Book a free trial, meet a coach, and see how the floor feels. No membership pressure on the first visit.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/trial" size="lg">
            Book a free trial
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
