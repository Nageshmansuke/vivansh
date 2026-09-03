export type CapturedLead = {
  id: string
  name: string
  phone: string
  interest: string
  date: string
  status: 'New'
  source: string
}

const KEY = 'forge-demo-leads'

export function getCapturedLeads(): CapturedLead[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as CapturedLead[]) : []
  } catch {
    return []
  }
}

export function saveCapturedLead(lead: Omit<CapturedLead, 'id' | 'date' | 'status'>) {
  const next: CapturedLead = {
    ...lead,
    id: `LIVE-${Date.now().toString().slice(-6)}`,
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    status: 'New',
  }
  const all = [next, ...getCapturedLeads()].slice(0, 40)
  localStorage.setItem(KEY, JSON.stringify(all))
  window.dispatchEvent(new Event('forge-leads'))
  return next
}
