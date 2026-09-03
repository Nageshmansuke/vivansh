import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { site } from '../data/site'
import { ButtonLink } from '../components/ui/Button'
import { OptimizedImage } from '../components/ui/Primitives'
import { fadeUp, stagger } from '../utils/motion'
import { gymOpenState } from '../utils/format'

export function Hero() {
  const hours = gymOpenState()

  return (
    <section className="relative min-h-[calc(100dvh-92px)] overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src={site.images.hero}
            alt="Athletes training on the Vivansh strength floor"
          className="kenburns h-full w-full object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100dvh-92px)] max-w-[1440px] flex-col justify-end px-5 pt-16 pb-10 sm:px-8 lg:justify-center lg:px-12 lg:pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-5 flex flex-wrap items-center gap-3">
            <p className="text-[12px] font-semibold tracking-[0.42em] text-ember uppercase">
              {site.name}
            </p>
            <span
              className={`border px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] uppercase ${
                hours.open ? 'border-ember/60 text-ember' : 'border-line text-mist'
              }`}
            >
              {hours.label} · {site.city}
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display mt-5 text-[clamp(3.4rem,12vw,8.75rem)] leading-[0.84] text-bone"
          >
            BUILD THE STRONGER
            <br />
            VERSION OF YOU.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base text-pretty text-stone sm:text-lg"
          >
            {site.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/trial" size="lg">
              Book a free trial
            </ButtonLink>
            <ButtonLink to="/membership" variant="secondary" size="lg">
              Explore memberships
            </ButtonLink>
          </motion.div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {site.stats.slice(0, 3).map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-bone sm:text-5xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-[11px] tracking-[0.18em] text-mist uppercase">{stat.label}</p>
            </div>
          ))}
          <div className="hidden sm:block">
            <p className="text-[10px] tracking-[0.22em] text-mist uppercase">Sample figures</p>
            <p className="mt-2 max-w-[12rem] text-xs text-stone">Replace with the gym’s live membership numbers.</p>
          </div>
        </div>
      </div>

      <a
        href="#trust"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[0.28em] text-stone uppercase md:flex"
      >
        Scroll
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
