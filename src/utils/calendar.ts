function pad(n: number) {
  return String(n).padStart(2, '0')
}

function stamp(date: Date) {
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}00Z`
}

export function downloadIcs(opts: {
  title: string
  start: Date
  minutes?: number
  location?: string
  description?: string
}) {
  const end = new Date(opts.start.getTime() + (opts.minutes ?? 60) * 60 * 1000)
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vivansh//Demo//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@vivansh.demo`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(opts.start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${opts.title}`,
    opts.location ? `LOCATION:${opts.location}` : '',
    opts.description ? `DESCRIPTION:${opts.description.replace(/\n/g, '\\n')}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .filter(Boolean)
    .join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'vivansh.ics'
  a.click()
  URL.revokeObjectURL(url)
}

export function parseSlot(dateYmd: string, slot: string) {
  const match = slot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
  const date = new Date(`${dateYmd}T00:00:00`)
  if (!match) return date
  let hour = Number(match[1])
  const min = Number(match[2])
  const ap = match[3].toUpperCase()
  if (ap === 'PM' && hour < 12) hour += 12
  if (ap === 'AM' && hour === 12) hour = 0
  date.setHours(hour, min, 0, 0)
  return date
}

const weekdayIndex: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

export function nextWeekday(day: string, hm: string) {
  const now = new Date()
  const target = weekdayIndex[day] ?? 1
  const [h, m] = hm.split(':').map(Number)
  const next = new Date(now)
  const delta = (target - now.getDay() + 7) % 7
  next.setDate(now.getDate() + (delta === 0 && now.getHours() * 60 + now.getMinutes() >= h * 60 + m ? 7 : delta))
  next.setHours(h, m, 0, 0)
  return next
}
