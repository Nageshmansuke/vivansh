import { useEffect, useMemo, useState } from 'react'
import { weekDays, weeklyClasses, type WeekDay } from '../data/site'
import { Container, DemoLabel, SectionEyebrow } from '../components/ui/Primitives'
import { Button, ButtonLink } from '../components/ui/Button'
import { cn, gymOpenState, hmToMins } from '../utils/format'
import { downloadIcs, nextWeekday } from '../utils/calendar'
import { toast } from '../utils/toast'
import { site } from '../data/site'

const RESERVE_KEY = 'forge-reserved-classes'

export function ClassTimetable({ compact = false }: { compact?: boolean }) {
  const status = gymOpenState()
  const today = status.weekday as WeekDay
  const initial = weekDays.includes(today) ? today : 'Mon'
  const [day, setDay] = useState<WeekDay>(initial)
  const [reserved, setReserved] = useState<string[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RESERVE_KEY)
      if (raw) setReserved(JSON.parse(raw) as string[])
    } catch {
      /* ignore */
    }
  }, [])

  const rows = useMemo(
    () => weeklyClasses.filter((c) => c.day === day).slice(0, compact ? 4 : undefined),
    [day, compact],
  )

  function hold(id: string, waitlist: boolean) {
    const next = reserved.includes(id) ? reserved : [...reserved, id]
    setReserved(next)
    localStorage.setItem(RESERVE_KEY, JSON.stringify(next))
    toast(waitlist ? 'Waitlist saved in this browser (demo).' : 'Spot held in this browser (demo).')
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Class days">
        {weekDays.map((d) => (
          <button
            key={d}
            type="button"
            role="tab"
            aria-selected={day === d}
            onClick={() => setDay(d)}
            className={cn(
              'min-w-12 px-3 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase',
              day === d ? 'bg-ember text-white' : 'border border-line text-stone hover:text-bone',
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {rows.map((cls) => {
          const held = reserved.includes(cls.id)
          const waitlist = cls.spots <= 1
          const live =
            cls.day === status.weekday &&
            status.mins >= hmToMins(cls.start) &&
            status.mins < hmToMins(cls.end)
          return (
            <li key={cls.id} className="grid gap-3 py-5 md:grid-cols-12 md:items-center">
              <p className="font-display text-2xl text-bone md:col-span-2">
                {cls.start}
                <span className="mt-0.5 block text-xs tracking-normal text-mist">{cls.end}</span>
              </p>
              <div className="md:col-span-4">
                <p className="font-semibold text-bone">{cls.name}</p>
                <p className="text-sm text-mist">{cls.coach}</p>
                {live && (
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-ember uppercase">Live now</p>
                )}
              </div>
              <p className="text-sm text-stone md:col-span-2">{cls.room}</p>
              <p className="text-[11px] tracking-[0.14em] text-mist uppercase md:col-span-2">
                {cls.level} · {cls.spots} spots
              </p>
              <div className="flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                <Button size="sm" variant={held ? 'secondary' : 'primary'} onClick={() => hold(cls.id, waitlist)}>
                  {held ? 'Saved' : waitlist ? 'Waitlist' : 'Reserve'}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="px-2"
                  onClick={() =>
                    downloadIcs({
                      title: `${cls.name} — Vivansh`,
                      start: nextWeekday(cls.day, cls.start),
                      minutes: 50,
                      location: `${cls.room}, ${site.address.city}`,
                      description: `Coach: ${cls.coach}. Demo calendar hold.`,
                    })
                  }
                >
                  .ics
                </Button>
              </div>
            </li>
          )
        })}
        {rows.length === 0 && (
          <li className="py-8 text-sm text-mist">No sample classes on this day. Replace with the gym’s live timetable.</li>
        )}
      </ul>
      <p className="mt-4 text-xs text-mist">
        Reservations, waitlist and calendar files are simulated for this demo. Production can connect spots to memberships.
      </p>
    </div>
  )
}

export function SchedulePreview() {
  return (
    <section className="bg-void py-24 md:py-32">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <SectionEyebrow>Weekly schedule</SectionEyebrow>
              <DemoLabel>Sample timetable</DemoLabel>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.9]">Train on a clock, not a guess.</h2>
          </div>
          <ButtonLink to="/schedule" variant="secondary">
            Full timetable
          </ButtonLink>
        </div>
        <ClassTimetable compact />
      </Container>
    </section>
  )
}
