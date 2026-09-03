import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { Container, DemoLabel, SectionEyebrow } from '../components/ui/Primitives'
import { useCountUp } from '../hooks/useCountUp'

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="trust" className="border-y border-line bg-void py-16 md:py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Social proof</SectionEyebrow>
            <h2 className="font-display text-4xl text-bone md:text-5xl">A room built on consistency.</h2>
          </div>
          <DemoLabel>Sample figures</DemoLabel>
        </div>
        <div ref={ref} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {site.stats.map((stat) => (
            <Stat key={stat.label} {...stat} active={active} />
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-mist">
          These indicators are placeholders for a sales demonstration. They are not third-party endorsements or audited claims.
        </p>
      </Container>
    </section>
  )
}

function Stat({
  value,
  suffix,
  label,
  active,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
}) {
  const n = useCountUp(value, active)
  return (
    <div className="border-t border-line pt-6">
      <p className="font-display text-5xl text-bone md:text-6xl">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-[12px] tracking-[0.2em] text-mist uppercase">{label}</p>
    </div>
  )
}
