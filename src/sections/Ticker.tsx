import { tickerItems } from '../data/site'

export function Ticker() {
  const loop = [...tickerItems, ...tickerItems]

  return (
    <div className="overflow-hidden border-y border-line bg-charcoal py-4" aria-hidden>
      <div className="marquee-track flex w-max gap-10 pr-10">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 text-[12px] font-semibold tracking-[0.28em] text-stone uppercase">
            {item}
            <span className="text-ember">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
