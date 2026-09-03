import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import { Container, DemoLabel, SectionEyebrow } from '../components/ui/Primitives'
import { ButtonLink } from '../components/ui/Button'
import { whatsappUrl, gymOpenState } from '../utils/format'

export function LocationContact() {
  const hours = gymOpenState()

  return (
    <section className="bg-ink py-24 md:py-32">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionEyebrow>Visit</SectionEyebrow>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.9]">
            {site.locality}.
            <br />
            {site.city}.
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <DemoLabel>Demo address</DemoLabel>
            <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${hours.open ? 'text-ember' : 'text-mist'}`}>
              {hours.label} · {hours.note}
            </span>
          </div>
          <ul className="mt-10 space-y-5 text-sm text-stone">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 text-ember" />
              <span>
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.city} {site.address.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-ember" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-bone">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-ember" />
              <a href={`mailto:${site.email}`} className="hover:text-bone">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-ember" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={whatsappUrl(site.phoneRaw, site.whatsappMessage)} external>
              Chat on WhatsApp
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Contact details
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-line">
          <iframe
            title="Vivansh demo location map"
            src={site.address.mapsEmbed}
            className="h-full min-h-[360px] w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          <div className="absolute bottom-4 left-4 border border-line bg-ink/90 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.22em] text-ember uppercase">Find us</p>
            <p className="text-sm text-bone">
              {site.address.line2}, {site.city}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
