import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { Container, DemoLabel } from '../components/ui/Primitives'
import { Button, ButtonLink } from '../components/ui/Button'
import { whatsappUrl } from '../utils/format'
import { copyText } from '../utils/toast'
import { saveCapturedLead } from '../utils/leads'

const addressText = `${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postalCode}`
const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address.mapsQuery)}`

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Visit Vivansh in Banjara Hills, Hyderabad. Call, email or WhatsApp to book a trial. Demo contact details."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Walk in. Or write first."
        body="Every detail below is demonstration content. Swap in the gym’s real address, number, hours and map pin."
        image={site.images.contact}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DemoLabel>Demo contact</DemoLabel>
            <ul className="mt-8 space-y-8">
              <li className="flex gap-4">
                <MapPin className="text-ember" size={20} />
                <div>
                  <p className="text-[11px] tracking-[0.2em] text-mist uppercase">Address</p>
                  <p className="mt-1 text-bone">{addressText}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] tracking-[0.16em] uppercase">
                    <button type="button" className="text-ember" onClick={() => copyText(addressText, 'Address copied')}>
                      Copy address
                    </button>
                    <a href={directions} target="_blank" rel="noreferrer" className="text-stone hover:text-bone">
                      Directions
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-ember" size={20} />
                <div>
                  <p className="text-[11px] tracking-[0.2em] text-mist uppercase">Phone</p>
                  <a href={`tel:${site.phoneRaw}`} className="mt-1 block text-bone hover:text-ember">
                    {site.phoneDisplay}
                  </a>
                  <button type="button" className="mt-2 text-[11px] tracking-[0.16em] text-ember uppercase" onClick={() => copyText(site.phoneDisplay, 'Number copied')}>
                    Copy number
                  </button>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-ember" size={20} />
                <div>
                  <p className="text-[11px] tracking-[0.2em] text-mist uppercase">Email</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-bone hover:text-ember">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="text-ember" size={20} />
                <div>
                  <p className="text-[11px] tracking-[0.2em] text-mist uppercase">Opening hours</p>
                  {site.hours.map((h) => (
                    <p key={h.days} className="mt-1 text-bone">
                      <span className="text-mist">{h.days}</span> {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to={whatsappUrl(site.phoneRaw, site.whatsappMessage)} external>
                Chat on WhatsApp
              </ButtonLink>
              <ButtonLink to="/trial" variant="secondary">
                Book a free trial
              </ButtonLink>
            </div>
            <CallbackForm />
          </div>

          <div className="relative min-h-[420px] lg:col-span-7">
            <iframe
              title="Map showing the Vivansh demo location in Banjara Hills"
              src={site.address.mapsEmbed}
              className="h-full min-h-[420px] w-full border border-line grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-6 right-6 max-w-[220px] border border-line bg-ink/90 p-5 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.22em] text-ember uppercase">On the map</p>
              <p className="mt-2 text-sm text-bone">
                {site.locality}, {site.city} — placeholder pin until the real gym location is set.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function CallbackForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (name.trim().length < 2 || !/^[0-9+\-\s]{10,15}$/.test(phone.trim())) return
    saveCapturedLead({
      name: name.trim(),
      phone: phone.trim(),
      interest: 'Callback request',
      source: 'Contact page',
    })
    setDone(true)
  }

  return (
    <div className="mt-12 border-t border-line pt-8">
      <p className="text-[11px] tracking-[0.22em] text-ember uppercase">Request a callback</p>
      <p className="mt-2 text-sm text-mist">Leave a number. In production this lands in the lead queue instantly.</p>
      {done ? (
        <p className="mt-4 text-sm text-bone">Request saved in this browser. Open Admin → Leads to see it.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
          <input
            aria-label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 border border-line bg-void px-3 text-sm outline-none focus:border-ember"
          />
          <input
            aria-label="Phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="tel"
            className="h-12 border border-line bg-void px-3 text-sm outline-none focus:border-ember"
          />
          <Button type="submit" className="sm:col-span-2 sm:w-fit">
            Call me back
          </Button>
        </form>
      )}
    </div>
  )
}
