import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { programs } from '../data/site'
import { Container, SectionEyebrow } from '../components/ui/Primitives'

export function ProgramsPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Programs</SectionEyebrow>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.9]">Train harder. Move better.</h2>
          </div>
          <Link
            to="/programs"
            className="text-[12px] font-semibold tracking-[0.22em] text-ember uppercase hover:text-ember-hot"
          >
            All programs
          </Link>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {programs.map((program, i) => (
            <li key={program.slug}>
              <Link
                to={`/programs#${program.slug}`}
                className="group grid gap-4 py-7 md:grid-cols-12 md:items-center md:gap-8"
              >
                <span className="text-[11px] tracking-[0.2em] text-mist md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl text-bone transition-colors group-hover:text-ember md:col-span-4 md:text-4xl">
                  {program.title}
                </h3>
                <p className="text-sm text-stone md:col-span-3">{program.short}</p>
                <p className="text-[11px] tracking-[0.16em] text-mist uppercase md:col-span-2">
                  {program.difficulty} · {program.duration}
                </p>
                <span className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.18em] text-ember uppercase md:col-span-2 md:justify-end">
                  Learn more
                  <ArrowUpRight className="hidden text-mist transition group-hover:text-ember md:inline" size={18} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
