import { Star } from 'lucide-react'
import { testimonials } from '../data/site'
import { Container, DemoLabel, SectionEyebrow } from '../components/ui/Primitives'

export function Testimonials() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Voices</SectionEyebrow>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9]">
              Ready for real reviews.
            </h2>
          </div>
          <DemoLabel>Sample quotes</DemoLabel>
        </div>
        <p className="mb-12 max-w-xl text-sm text-mist">
          These quotes are placeholders so the layout is ready. They are not real member reviews.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="border-t border-ember/40 pt-8">
              <div className="mb-4 flex gap-1 text-ember" aria-label={`${item.rating} out of 5`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-bone">“{item.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="block font-semibold text-bone">{item.name}</span>
                <span className="text-[11px] tracking-[0.18em] text-mist uppercase">{item.goal}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
