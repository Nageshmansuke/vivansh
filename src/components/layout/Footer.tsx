import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import { Logo } from './Logo'
import { Container } from '../ui/Primitives'
import { whatsappUrl } from '../../utils/format'

export function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-stone">
            {site.address.line1}
            <br />
            {site.address.line2}, {site.address.city} {site.address.postalCode}
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.instagram} className="grid h-10 w-10 place-items-center border border-line text-stone hover:text-bone" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={site.social.facebook} className="grid h-10 w-10 place-items-center border border-line text-stone hover:text-bone" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
              </svg>
            </a>
            <a href={site.social.youtube} className="grid h-10 w-10 place-items-center border border-line text-stone hover:text-bone" aria-label="YouTube" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.4 5.4 12 5.4 12 5.4s-6.4 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.4.4 7.8.4 7.8.4s6.4 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM10 15.5v-6.6l5.2 3.3L10 15.5Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-mist uppercase">Visit</p>
          <ul className="mt-5 space-y-2 text-sm text-stone">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-bone">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/trial" className="hover:text-bone">
                Free trial
              </Link>
            </li>
            <li>
              <Link to="/admin-demo" className="hover:text-bone">
                Admin preview
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-mist uppercase">Hours</p>
          <ul className="mt-5 space-y-3 text-sm text-stone">
            {site.hours.map((row) => (
              <li key={row.days}>
                <span className="block text-bone">{row.days}</span>
                {row.time}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[11px] tracking-wide text-mist uppercase">{site.demo.label}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-mist uppercase">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-stone">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="hover:text-bone">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-bone">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl(site.phoneRaw, site.whatsappMessage)}
                className="text-ember hover:text-ember-hot"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Sample brand for a website demonstration.</p>
          <p className="max-w-xl sm:text-right">{site.demo.note}</p>
        </Container>
      </div>
    </footer>
  )
}
