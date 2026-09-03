import { transformations } from '../data/site'
import { Container, DemoLabel, SectionEyebrow } from '../components/ui/Primitives'
import { BeforeAfter } from '../components/ui/BeforeAfter'

export function Transformations() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <SectionEyebrow>Progress</SectionEyebrow>
          <DemoLabel>Sample stories</DemoLabel>
        </div>
        <h2 className="font-display max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.9]">
          Real people. Real discipline. Real progress.
        </h2>
        <p className="mt-6 max-w-2xl text-sm text-mist">
          Drag the slider. These are placeholder training stories — not guaranteed outcomes and not medical claims. Replace with verified member stories and consented photos.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {transformations.map((item) => (
            <article key={item.name} className="border-t border-line pt-6">
              <BeforeAfter before={item.before} after={item.after} name={item.name} />
              <p className="mt-5 text-[11px] tracking-[0.22em] text-ember uppercase">
                {item.goal} · {item.duration}
              </p>
              <h3 className="font-display mt-2 text-4xl">{item.name}</h3>
              <p className="mt-3 text-sm text-stone">{item.story}</p>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-[10px] tracking-[0.18em] text-mist uppercase">{m.label}</dt>
                    <dd className="mt-1 text-sm text-bone">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
