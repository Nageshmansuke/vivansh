export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatInr(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function whatsappUrl(phone: string, message: string) {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

/** Open-now status using the demo Hyderabad hours. Replace timezone with the real gym. */
export function gymOpenState(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now)

  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon'
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
  const mins = hour * 60 + minute
  const weekend = weekday === 'Sat' || weekday === 'Sun'
  const openMins = weekend ? 7 * 60 : 6 * 60
  const closeMins = weekend ? 21 * 60 : 22 * 60
  const open = mins >= openMins && mins < closeMins

  return {
    open,
    label: open ? 'Open now' : 'Closed now',
    note: weekend ? 'Weekend · 7:00 AM — 9:00 PM' : 'Weekday · 6:00 AM — 10:00 PM',
    mins,
    weekday: WEEKDAY.includes(weekday as (typeof WEEKDAY)[number]) ? weekday : 'Mon',
  }
}

export function hmToMins(hm: string) {
  const [h, m] = hm.split(':').map(Number)
  return h * 60 + m
}
