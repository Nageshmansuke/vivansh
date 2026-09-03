import { MembershipPreview, PlanCompare } from '../sections/MembershipPreview'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { site } from '../data/site'
import { Container } from '../components/ui/Primitives'
import { ButtonLink } from '../components/ui/Button'
import { Faq } from '../sections/Faq'
import { whatsappUrl } from '../utils/format'

export function MembershipPage() {
  return (
    <>
      <Seo
        title="Membership"
        description="Starter, Pro and Elite membership plans at Vivansh. Sample monthly and annual pricing for a website demonstration."
        path="/membership"
      />
      <PageHero
        eyebrow="Membership"
        title="Clear plans. No noise."
        body="Three sample tiers with monthly or annual billing. Replace prices and inclusions with the gym’s current offer."
        image={site.images.hero}
      />
      <MembershipPreview />
      <PlanCompare />
      <section className="border-y border-line bg-void py-16">
        <Container className="grid gap-8 md:grid-cols-2">
          <article>
            <p className="text-[11px] tracking-[0.22em] text-ember uppercase">Teams</p>
            <h2 className="font-display mt-2 text-4xl">Corporate memberships</h2>
            <p className="mt-3 text-sm text-mist">
              For studios, offices and founder teams who want a shared standard. Sample copy — WhatsApp to scope a real package.
            </p>
            <ButtonLink
              className="mt-6"
              variant="secondary"
              to={whatsappUrl(site.phoneRaw, 'Hi Vivansh, I would like to discuss a corporate membership.')}
              external
            >
              Talk on WhatsApp
            </ButtonLink>
          </article>
          <article>
            <p className="text-[11px] tracking-[0.22em] text-ember uppercase">Gift</p>
            <h2 className="font-display mt-2 text-4xl">Give a month of training.</h2>
            <p className="mt-3 text-sm text-mist">
              Gift memberships can be issued at the desk. This is a placeholder until the gym confirms its gift policy.
            </p>
            <ButtonLink className="mt-6" to="/contact" variant="secondary">
              Ask the desk
            </ButtonLink>
          </article>
        </Container>
      </section>
      <Faq heading="Membership questions." />
    </>
  )
}
