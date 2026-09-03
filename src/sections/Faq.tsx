import { useState } from 'react'
import { faqs } from '../data/site'
import { Container, SectionEyebrow } from '../components/ui/Primitives'
import { cn } from '../utils/format'
import { ChevronDown } from 'lucide-react'

export function Faq({ heading = 'Questions, answered.' }: { heading?: string }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-ink py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.9]">{heading}</h2>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((item, i) => {
            const expanded = open === i
            return (
              <div key={item.q} className="border-t border-line">
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-lg text-bone">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn('shrink-0 text-ember transition', expanded && 'rotate-180')}
                  />
                </button>
                <div className={cn('grid transition-all', expanded ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]')}>
                  <p className="overflow-hidden text-sm text-mist">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
