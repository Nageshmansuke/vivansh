import { useState } from 'react'
import { Check, Minus } from 'lucide-react'
import { annualMultiplier, planComparison, plans, site } from '../data/site'
import { Container, DemoLabel, SectionEyebrow } from '../components/ui/Primitives'
import { ButtonLink } from '../components/ui/Button'
import { cn, formatInr, whatsappUrl } from '../utils/format'

export function MembershipPreview() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="bg-void py-24 md:py-32">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <SectionEyebrow>Membership</SectionEyebrow>
              <DemoLabel>Sample pricing</DemoLabel>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.9]">
              Choose how you train.
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-line p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                'px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase',
                !annual ? 'bg-ember text-white' : 'text-stone',
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                'px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase',
                annual ? 'bg-ember text-white' : 'text-stone',
              )}
            >
              Annual · 2 months free
            </button>
          </div>
        </div>
        <p className="mb-10 max-w-xl text-sm text-mist">
          Prices are demonstration figures. Annual is shown as ten months billed once — replace with the gym’s live rates.
        </p>

        <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const price = annual ? plan.price * annualMultiplier : plan.price
            const period = annual ? '/ year' : plan.period
            return (
              <article
                key={plan.id}
                className={cn(
                  'flex flex-col border p-8',
                  plan.popular
                    ? 'border-ember bg-charcoal lg:-translate-y-4 lg:py-10'
                    : 'border-line bg-ink',
                )}
              >
                {plan.popular && (
                  <p className="mb-6 text-[10px] font-semibold tracking-[0.28em] text-ember uppercase">
                    Most chosen
                  </p>
                )}
                <h3 className="font-display text-4xl">{plan.name}</h3>
                <p className="mt-4 font-display text-5xl text-bone">
                  {formatInr(price)}
                  <span className="ml-1 text-base tracking-normal text-mist">{period}</span>
                </p>
                <p className="mt-2 text-xs tracking-[0.16em] text-mist uppercase">
                  {annual ? 'Billed annually · sample' : plan.duration}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-stone">
                      <Check size={16} className="mt-0.5 text-ember" />
                      {f}
                    </li>
                  ))}
                </ul>
                <ButtonLink to={`/trial?plan=${plan.id}`} variant={plan.popular ? 'primary' : 'secondary'} className="mt-10 w-full">
                  {plan.cta}
                </ButtonLink>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-3xl">Need help choosing a plan?</p>
            <p className="text-sm text-mist">A coach can walk you through the right starting point.</p>
          </div>
          <ButtonLink
            to={whatsappUrl(site.phoneRaw, 'Hi Vivansh, I need help choosing a membership plan.')}
            external
            variant="secondary"
          >
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

export function PlanCompare() {
  return (
    <section className="bg-ink py-20">
      <Container>
        <SectionEyebrow>Compare</SectionEyebrow>
        <h2 className="font-display mb-8 text-5xl">What each plan includes.</h2>
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
              <tr>
                <th className="px-4 py-3 font-medium">Feature</th>
                {plans.map((p) => (
                  <th key={p.id} className={cn('px-4 py-3 font-medium', p.popular && 'text-ember')}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planComparison.map((row) => (
                <tr key={row.feature} className="border-t border-line">
                  <td className="px-4 py-3 text-bone">{row.feature}</td>
                  {(['starter', 'pro', 'elite'] as const).map((key) => (
                    <td key={key} className="px-4 py-3 text-stone">
                      {typeof row[key] === 'boolean' ? (
                        row[key] ? (
                          <Check size={16} className="text-ember" />
                        ) : (
                          <Minus size={16} className="text-ash" />
                        )
                      ) : (
                        row[key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-mist">Guest pass counts are sample inclusions until the gym confirms its policy.</p>
      </Container>
    </section>
  )
}
