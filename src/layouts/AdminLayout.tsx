import { NavLink, Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import {
  BarChart3,
  Calendar,
  CalendarCheck2,
  Dumbbell,
  ImageIcon,
  LayoutDashboard,
  Menu,
  MessageSquareQuote,
  Settings,
  Tag,
  Users,
  UserRound,
  X,
  ClipboardList,
} from 'lucide-react'
import { Logo } from '../components/layout/Logo'
import { cn } from '../utils/format'

const links = [
  { to: '/admin-demo', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin-demo/leads', label: 'Leads', icon: ClipboardList },
  { to: '/admin-demo/trials', label: 'Trial bookings', icon: CalendarCheck2 },
  { to: '/admin-demo/memberships', label: 'Memberships', icon: Users },
  { to: '/admin-demo/trainers', label: 'Trainers', icon: UserRound },
  { to: '/admin-demo/programs', label: 'Programs', icon: Dumbbell },
  { to: '/admin-demo/classes', label: 'Classes', icon: Calendar },
  { to: '/admin-demo/gallery', label: 'Gallery', icon: ImageIcon },
  { to: '/admin-demo/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { to: '/admin-demo/offers', label: 'Offers', icon: Tag },
  { to: '/admin-demo/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/admin-demo/settings', label: 'Settings', icon: Settings },
]

export function AdminLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-[#0c0c0e] text-bone">
      <div className="border-b border-line bg-ember px-4 py-2 text-center text-[11px] font-semibold tracking-[0.18em] text-white uppercase">
        Admin dashboard preview · Demo data only ·{' '}
        <Link to="/" className="underline">
          Back to website
        </Link>
      </div>
      <div className="flex">
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto border-r border-line bg-void pt-[42px] transition-transform lg:sticky lg:top-0 lg:h-dvh lg:translate-x-0 lg:pt-0',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex h-16 items-center justify-between px-5">
            <Logo compact />
            <button type="button" className="lg:hidden" onClick={() => setOpen(false)} aria-label="Close sidebar">
              <X size={18} />
            </button>
          </div>
          <nav className="space-y-0.5 px-3 pb-8" aria-label="Admin">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3 py-2.5 text-[13px] text-stone transition hover:bg-steel hover:text-bone',
                    isActive && 'bg-steel text-bone',
                  )
                }
              >
                <link.icon size={16} />
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {open && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-ink/60 lg:hidden"
            aria-label="Close sidebar overlay"
            onClick={() => setOpen(false)}
          />
        )}

        <div className="min-w-0 flex-1">
          <div className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-line bg-[#0c0c0e]/90 px-4 backdrop-blur-md lg:hidden">
            <button type="button" onClick={() => setOpen(true)} aria-label="Open sidebar">
              <Menu size={20} />
            </button>
            <p className="text-sm font-medium">Operations</p>
          </div>
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
