import { motion } from 'framer-motion'
import { philosophy, site } from '../data/site'
import { Container, OptimizedImage, SectionEyebrow } from '../components/ui/Primitives'
import { fadeUp } from '../utils/motion'

export function Philosophy() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionEyebrow>{philosophy.eyebrow}</SectionEyebrow>
          <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.88] text-bone">
            {philosophy.heading}
          </h2>
          <p className="mt-8 max-w-xl text-lg text-pretty text-stone">{philosophy.body}</p>
          <p className="mt-4 max-w-lg text-sm text-mist">{philosophy.supporting}</p>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2">
            {philosophy.features.map((item) => (
              <div key={item.number} className="border-t border-line pt-5">
                <dt className="flex items-baseline gap-3">
                  <span className="text-[11px] tracking-[0.2em] text-ember">{item.number}</span>
                  <span className="text-sm font-semibold tracking-wide text-bone uppercase">
                    {item.title}
                  </span>
                </dt>
                <dd className="mt-2 text-sm text-mist">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative lg:col-span-6"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <OptimizedImage
              src={site.images.philosophy}
              alt="Strength training inside the Vivansh gym"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 left-6 max-w-[220px] border border-line bg-charcoal/90 p-5 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.24em] text-ember uppercase">Since {site.foundedYear}</p>
            <p className="mt-2 text-sm text-bone">Training with a plan, not a playlist of random workouts.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
