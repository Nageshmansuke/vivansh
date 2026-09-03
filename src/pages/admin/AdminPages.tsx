import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  adminStats,
  analyticsSeries,
  leadStatuses,
  leads,
  members,
  offers,
  trialBookings,
  type LeadStatus,
} from '../../data/admin'
import { gallery, plans, programs, site, testimonials, trainers, weeklyClasses } from '../../data/site'
import { OptimizedImage } from '../../components/ui/Primitives'
import { cn } from '../../utils/format'
import { getCapturedLeads, type CapturedLead } from '../../utils/leads'

function PageHead({ title, note }: { title: string; note: string }) {
  return (
    <header className="mb-8">
      <p className="text-[10px] font-semibold tracking-[0.28em] text-ember uppercase">Demo data</p>
      <h1 className="font-display mt-2 text-4xl md:text-5xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-mist">{note}</p>
    </header>
  )
}

function Status({ value }: { value: string }) {
  const tone =
    value === 'Converted' || value === 'Active' || value === 'Live' || value === 'Completed'
      ? 'text-emerald-400 bg-emerald-400/10'
      : value === 'Lost' || value === 'No-show' || value === 'Paused'
        ? 'text-red-400 bg-red-400/10'
        : value === 'New' || value === 'Scheduled'
          ? 'text-ember bg-ember/10'
          : 'text-stone bg-white/5'
  return (
    <span className={cn('inline-flex px-2 py-1 text-[11px] font-medium tracking-wide', tone)}>
      {value}
    </span>
  )
}

function TableWrap({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto border border-line">{children}</div>
}

export function AdminDashboardPage() {
  return (
    <>
      <PageHead
        title="Dashboard"
        note="A preview of the operations layer that can sit behind the public website: leads, trials, memberships and content."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((card) => (
          <article key={card.key} className="border border-line bg-void p-5">
            <p className="text-[11px] tracking-[0.18em] text-mist uppercase">{card.label}</p>
            <p className="font-display mt-3 text-5xl">{card.value}</p>
            <p className="mt-2 text-xs text-mist">{card.hint}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <section className="border border-line bg-void p-5 lg:col-span-3">
          <h2 className="text-sm font-semibold">Lead flow (sample)</h2>
          <div className="mt-6 flex h-40 items-end gap-3">
            {analyticsSeries.map((row) => (
              <div key={row.month} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end gap-1">
                  <div className="w-1/2 bg-ember/80" style={{ height: `${row.leads * 3}px` }} />
                  <div className="w-1/2 bg-bone/20" style={{ height: `${row.trials * 8}px` }} />
                </div>
                <span className="text-[10px] text-mist">{row.month}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-mist">Ember = leads · Pale = trials. Replace with live analytics.</p>
        </section>
        <section className="border border-line bg-void p-5 lg:col-span-2">
          <h2 className="text-sm font-semibold">Needs attention</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {leads
              .filter((l) => l.status === 'New' || l.status === 'Follow-up')
              .map((l) => (
                <li key={l.id} className="flex items-center justify-between gap-3 border-b border-line pb-3">
                  <span>
                    {l.name}
                    <span className="mt-0.5 block text-xs text-mist">{l.interest}</span>
                  </span>
                  <Status value={l.status} />
                </li>
              ))}
          </ul>
          <Link to="/admin-demo/leads" className="mt-4 inline-block text-xs tracking-[0.16em] text-ember uppercase">
            Open leads
          </Link>
        </section>
      </div>
    </>
  )
}

export function AdminLeadsPage() {
  const [q, setQ] = useState('')
  const [status, setStatus] = useState<LeadStatus | 'All'>('All')
  const [live, setLive] = useState<CapturedLead[]>([])

  useEffect(() => {
    const sync = () => setLive(getCapturedLeads())
    sync()
    window.addEventListener('forge-leads', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('forge-leads', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const rows = useMemo(() => {
    const captured = live.map((l) => ({
      id: l.id,
      name: l.name,
      phone: l.phone,
      interest: `${l.interest} · ${l.source}`,
      date: l.date,
      status: l.status as LeadStatus,
      live: true,
    }))
    const sample = leads.map((l) => ({ ...l, live: false }))
    return [...captured, ...sample].filter((l) => {
      const match = `${l.name} ${l.phone} ${l.interest}`.toLowerCase().includes(q.toLowerCase())
      return match && (status === 'All' || l.status === status)
    })
  }, [q, status, live])

  return (
    <>
      <PageHead
        title="Leads"
        note="Sample records plus live captures from this browser’s trial and callback forms. Production would sync to a real database."
      />
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, phone or interest"
          className="h-11 flex-1 border border-line bg-void px-3 text-sm outline-none focus:border-ember"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as LeadStatus | 'All')}
          className="h-11 border border-line bg-void px-3 text-sm outline-none"
        >
          <option>All</option>
          {leadStatuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <TableWrap>
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
            <tr>
              {['Name', 'Phone', 'Interest', 'Date', 'Status'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-line">
                <td className="px-4 py-3">
                  {row.name}
                  <span className="mt-0.5 block text-[11px] text-mist">
                    {row.id}
                    {'live' in row && row.live ? ' · Live capture' : ''}
                  </span>
                </td>
                <td className="px-4 py-3 text-stone">{row.phone}</td>
                <td className="px-4 py-3">{row.interest}</td>
                <td className="px-4 py-3 text-stone">{row.date}</td>
                <td className="px-4 py-3">
                  <Status value={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}

export function AdminTrialsPage() {
  return (
    <>
      <PageHead title="Trial bookings" note="Complimentary sessions captured from the public trial form." />
      <TableWrap>
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
            <tr>
              {['Name', 'Phone', 'Goal', 'Date', 'Time', 'Status'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trialBookings.map((row) => (
              <tr key={row.id} className="border-t border-line">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3 text-stone">{row.phone}</td>
                <td className="px-4 py-3">{row.goal}</td>
                <td className="px-4 py-3 text-stone">{row.date}</td>
                <td className="px-4 py-3">{row.time}</td>
                <td className="px-4 py-3">
                  <Status value={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}

export function AdminMembershipsPage() {
  return (
    <>
      <PageHead title="Memberships" note="Active, expiring and paused members. Plans mirror the public pricing page." />
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {plans.map((p) => (
          <article key={p.id} className="border border-line bg-void p-4">
            <p className="text-[11px] tracking-[0.18em] text-mist uppercase">{p.name}</p>
            <p className="font-display mt-1 text-3xl">₹{p.price.toLocaleString('en-IN')}</p>
          </article>
        ))}
      </div>
      <TableWrap>
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
            <tr>
              {['Member', 'Plan', 'Start', 'Renewal', 'Status'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map((row) => (
              <tr key={row.id} className="border-t border-line">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.plan}</td>
                <td className="px-4 py-3 text-stone">{row.start}</td>
                <td className="px-4 py-3 text-stone">{row.renewal}</td>
                <td className="px-4 py-3">
                  <Status value={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}

export function AdminTrainersPage() {
  return (
    <>
      <PageHead title="Trainers" note="Coach roster published to the website. Edit here, reflect on /trainers." />
      <div className="grid gap-4 sm:grid-cols-2">
        {trainers.map((t) => (
          <article key={t.slug} className="flex gap-4 border border-line bg-void p-4">
            <OptimizedImage src={t.image} alt={t.name} className="h-24 w-20 object-cover" sizes="80px" />
            <div>
              <h2 className="font-medium">{t.name}</h2>
              <p className="text-sm text-ember">{t.role}</p>
              <p className="mt-1 text-xs text-mist">
                {t.specialization} · {t.experience}
              </p>
              <button type="button" className="mt-3 text-[11px] tracking-[0.16em] text-stone uppercase">
                Edit profile
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export function AdminProgramsPage() {
  return (
    <>
      <PageHead title="Programs" note="Public program catalogue. Difficulty, duration and copy are editable in production." />
      <TableWrap>
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
            <tr>
              {['Program', 'Difficulty', 'Duration', 'Focus'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {programs.map((p) => (
              <tr key={p.slug} className="border-t border-line">
                <td className="px-4 py-3">{p.title}</td>
                <td className="px-4 py-3 text-stone">{p.difficulty}</td>
                <td className="px-4 py-3">{p.duration}</td>
                <td className="px-4 py-3 text-stone">{p.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}

export function AdminGalleryPage() {
  return (
    <>
      <PageHead title="Gallery" note="Asset library driving the public gallery filters and lightbox." />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((g) => (
          <figure key={g.id} className="border border-line">
            <OptimizedImage src={g.image} alt={g.title} className="aspect-square w-full object-cover" sizes="200px" />
            <figcaption className="px-3 py-2 text-xs text-mist">
              {g.category} · {g.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

export function AdminTestimonialsPage() {
  return (
    <>
      <PageHead title="Testimonials" note="Placeholder quotes until real member reviews are approved for publishing." />
      <div className="space-y-4">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="border border-line bg-void p-5">
            <p className="text-sm text-bone">“{t.quote}”</p>
            <footer className="mt-3 text-xs text-mist">
              {t.name} · {t.goal} · Sample
            </footer>
          </blockquote>
        ))}
      </div>
    </>
  )
}

export function AdminOffersPage() {
  return (
    <>
      <PageHead title="Offers" note="Campaigns that can appear in the announcement bar or membership page." />
      <TableWrap>
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
            <tr>
              {['Offer', 'Type', 'Window', 'Status'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {offers.map((o) => (
              <tr key={o.id} className="border-t border-line">
                <td className="px-4 py-3">{o.title}</td>
                <td className="px-4 py-3 text-stone">{o.type}</td>
                <td className="px-4 py-3">{o.window}</td>
                <td className="px-4 py-3">
                  <Status value={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}

export function AdminAnalyticsPage() {
  return (
    <>
      <PageHead title="Analytics" note="Sample conversion story from enquiry to membership. Connect GA4 or a custom backend later." />
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
            <tr>
              {['Month', 'Leads', 'Trials', 'Members'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {analyticsSeries.map((r) => (
              <tr key={r.month} className="border-t border-line">
                <td className="px-4 py-3">{r.month}</td>
                <td className="px-4 py-3">{r.leads}</td>
                <td className="px-4 py-3">{r.trials}</td>
                <td className="px-4 py-3">{r.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export function AdminSettingsPage() {
  return (
    <>
      <PageHead
        title="Settings"
        note="Brand fields read from the central config. In production these would be editable by the gym owner."
      />
      <dl className="grid gap-4 sm:grid-cols-2">
        {[
          ['Gym name', site.name],
          ['Tagline', site.tagline],
          ['Phone', site.phoneDisplay],
          ['Email', site.email],
          ['City', `${site.locality}, ${site.city}`],
          ['Hours', site.hours.map((h) => `${h.days} ${h.time}`).join(' · ')],
        ].map(([k, v]) => (
          <div key={k} className="border border-line bg-void p-4">
            <dt className="text-[11px] tracking-[0.18em] text-mist uppercase">{k}</dt>
            <dd className="mt-2 text-sm text-bone">{v}</dd>
          </div>
        ))}
      </dl>
    </>
  )
}

export function AdminClassesPage() {
  return (
    <>
      <PageHead
        title="Classes"
        note="Weekly timetable published on /schedule. Capacity and coaches are sample records."
      />
      <TableWrap>
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="bg-void text-[11px] tracking-[0.16em] text-mist uppercase">
            <tr>
              {['Day', 'Time', 'Class', 'Coach', 'Room', 'Spots'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeklyClasses.map((row) => (
              <tr key={row.id} className="border-t border-line">
                <td className="px-4 py-3">{row.day}</td>
                <td className="px-4 py-3">
                  {row.start}–{row.end}
                </td>
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3 text-stone">{row.coach}</td>
                <td className="px-4 py-3 text-stone">{row.room}</td>
                <td className="px-4 py-3">
                  {row.spots}/{row.capacity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}
