import { Link } from 'react-router-dom'
import { facilities } from '../data/site'
import { Container, OptimizedImage, SectionEyebrow } from '../components/ui/Primitives'
import { cn } from '../utils/format'

export function Facilities() {
  return (
    <section className="bg-void py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Facilities</SectionEyebrow>
            <h2 className="font-display max-w-2xl text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.9] text-bone">
              Built for serious work.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-mist">
            Six spaces, one standard. Photos are stock placeholders until the gym’s own photography is added.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
          {facilities.map((item) => (
            <article
              key={item.number}
              className={cn(
                'group relative min-h-[280px] overflow-hidden',
                item.span === 'large' && 'md:col-span-7 md:row-span-2 md:min-h-[560px]',
                item.span === 'medium' && 'md:col-span-5 md:min-h-[270px]',
                item.span === 'small' && 'md:col-span-4 md:min-h-[240px]',
              )}
            >
              <OptimizedImage
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[11px] tracking-[0.28em] text-ember">{item.number}</p>
                <h3 className="font-display mt-1 text-4xl text-bone">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-stone opacity-90">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/gallery" className="text-[12px] font-semibold tracking-[0.22em] text-ember uppercase hover:text-ember-hot">
            View the gallery
          </Link>
        </div>
      </Container>
    </section>
  )
}
