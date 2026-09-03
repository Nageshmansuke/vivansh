import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { fitnessGoals, plans, referralSources, site, trialSlots } from '../data/site'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { Container } from '../components/ui/Primitives'
import { Button, ButtonLink } from '../components/ui/Button'
import { cn, whatsappUrl } from '../utils/format'
import { saveCapturedLead } from '../utils/leads'
import { downloadIcs, parseSlot } from '../utils/calendar'
import { toast } from '../utils/toast'

type FormState = {
  name: string
  phone: string
  email: string
  goal: string
  plan: string
  date: string
  time: string
  source: string
  promo: string
  message: string
}

const DRAFT = 'forge-trial-draft'

const empty: FormState = {
  name: '',
  phone: '',
  email: '',
  goal: '',
  plan: '',
  date: '',
  time: '',
  source: '',
  promo: '',
  message: '',
}

export function TrialPage() {
  const [params] = useSearchParams()
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const draft = localStorage.getItem(DRAFT)
    const plan = params.get('plan') ?? ''
    if (draft) {
      try {
        setValues({ ...empty, ...(JSON.parse(draft) as FormState), plan: plan || JSON.parse(draft).plan })
        return
      } catch {
        /* ignore */
      }
    }
    if (plan) setValues((v) => ({ ...v, plan }))
  }, [params])

  function update(key: keyof FormState, value: string) {
    setValues((v) => {
      const next = { ...v, [key]: value }
      localStorage.setItem(DRAFT, JSON.stringify(next))
      return next
    })
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate() {
    const next: Partial<FormState> = {}
    if (values.name.trim().length < 2) next.name = 'Enter your full name.'
    if (!/^[0-9+\-\s]{10,15}$/.test(values.phone.trim())) next.phone = 'Enter a valid phone number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Enter a valid email.'
    if (!values.goal) next.goal = 'Select a fitness goal.'
    if (!values.date) next.date = 'Choose a preferred date.'
    if (!values.time) next.time = 'Choose a preferred time.'
    return next
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return
    saveCapturedLead({
      name: values.name.trim(),
      phone: values.phone.trim(),
      interest: `Trial · ${values.goal}${values.plan ? ` · ${plans.find((p) => p.id === values.plan)?.name ?? values.plan}` : ''}`,
      source: values.source || 'Trial form',
    })
    localStorage.removeItem(DRAFT)
    setSubmitted(true)
    toast('Trial captured in this browser — check Admin → Leads.')
  }

  const locationLine = `${site.address.line1}, ${site.address.line2}, ${site.address.city}`

  return (
    <>
      <Seo
        title="Book a free trial"
        description="Book a complimentary trial session at Vivansh. Demo form — submissions are simulated and stored in this browser for the admin preview."
        path="/trial"
      />
      <PageHero
        eyebrow="Free trial"
        title="One session. No commitment."
        body="Tell us when you can train. This form is a frontend demonstration. Drafts save in your browser. Production can connect it to WhatsApp, email or an admin dashboard."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.24em] text-ember uppercase">What happens next</p>
            <ol className="mt-6 space-y-6">
              {[
                'You share a name, number and preferred slot.',
                'The gym confirms the session — by call or WhatsApp.',
                'You train, meet a coach, and decide if the room fits.',
              ].map((step, i) => (
                <li key={step} className="border-t border-line pt-4">
                  <span className="text-[11px] text-ember">0{i + 1}</span>
                  <p className="mt-1 text-stone">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-mist">
              Offer code <span className="text-bone">{site.offer.code}</span> — {site.offer.label}. {site.offer.detail}
            </p>
            <ButtonLink
              to={whatsappUrl(site.phoneRaw, 'Hi Vivansh, I would like to book a free trial.')}
              external
              variant="secondary"
              className="mt-8"
            >
              Prefer WhatsApp?
            </ButtonLink>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-ember/40 bg-void p-10 text-center"
              >
                <CheckCircle2 className="mx-auto text-ember" size={40} />
                <h2 className="font-display mt-6 text-5xl">Request received.</h2>
                <p className="mx-auto mt-4 max-w-md text-stone">
                  This booking is stored in this browser and listed under Admin → Leads as a live capture. Production would confirm by WhatsApp or SMS.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button
                    type="button"
                    onClick={() =>
                      downloadIcs({
                        title: 'Vivansh — complimentary trial',
                        start: parseSlot(values.date, values.time),
                        minutes: 60,
                        location: locationLine,
                        description: 'Demo calendar hold. Confirm with the gym before travelling.',
                      })
                    }
                  >
                    Add to calendar
                  </Button>
                  <ButtonLink to="/admin-demo/leads" variant="secondary">
                    View in admin
                  </ButtonLink>
                </div>
                <Button
                  variant="ghost"
                  className="mt-4"
                  onClick={() => {
                    setSubmitted(false)
                    setValues(empty)
                  }}
                >
                  Submit another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field id="full-name" label="Full name" error={errors.name}>
                  <input id="full-name" value={values.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" className={inputClass(Boolean(errors.name))} />
                </Field>
                <Field id="phone-number" label="Phone number" error={errors.phone}>
                  <input id="phone-number" value={values.phone} onChange={(e) => update('phone', e.target.value)} autoComplete="tel" inputMode="tel" className={inputClass(Boolean(errors.phone))} />
                </Field>
                <Field id="email" label="Email" error={errors.email} className="sm:col-span-2">
                  <input id="email" type="email" value={values.email} onChange={(e) => update('email', e.target.value)} autoComplete="email" className={inputClass(Boolean(errors.email))} />
                </Field>
                <Field id="fitness-goal" label="Fitness goal" error={errors.goal}>
                  <select id="fitness-goal" value={values.goal} onChange={(e) => update('goal', e.target.value)} className={inputClass(Boolean(errors.goal))}>
                    <option value="">Select a goal</option>
                    {fitnessGoals.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </Field>
                <Field id="plan-interest" label="Plan interest">
                  <select id="plan-interest" value={values.plan} onChange={(e) => update('plan', e.target.value)} className={inputClass()}>
                    <option value="">Not sure yet</option>
                    {plans.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </Field>
                <Field id="preferred-date" label="Preferred date" error={errors.date}>
                  <input id="preferred-date" type="date" value={values.date} onChange={(e) => update('date', e.target.value)} min={new Date().toISOString().slice(0, 10)} className={inputClass(Boolean(errors.date))} />
                </Field>
                <Field id="preferred-time" label="Preferred time" error={errors.time}>
                  <select id="preferred-time" value={values.time} onChange={(e) => update('time', e.target.value)} className={inputClass(Boolean(errors.time))}>
                    <option value="">Select a time</option>
                    {trialSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field id="heard" label="How did you hear about us?">
                  <select id="heard" value={values.source} onChange={(e) => update('source', e.target.value)} className={inputClass()}>
                    <option value="">Optional</option>
                    {referralSources.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field id="promo" label="Offer code">
                  <input id="promo" value={values.promo} onChange={(e) => update('promo', e.target.value.toUpperCase())} placeholder={site.offer.code} className={inputClass()} />
                  {values.promo === site.offer.code && (
                    <p className="mt-1 text-xs text-ember">{site.offer.label} applied (sample).</p>
                  )}
                </Field>
                <Field id="message" label="Message" className="sm:col-span-2">
                  <textarea
                    id="message"
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={4}
                    className="min-h-28 w-full border border-line bg-void px-3 py-3 text-sm text-bone outline-none placeholder:text-mist focus:border-ember"
                    placeholder="Injuries, experience, or preferred coach — optional."
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Book my free trial
                  </Button>
                  <p className="mt-4 text-xs text-mist">
                    Drafts save automatically in this browser. No email is sent. Open Admin → Leads after submit to see the capture.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-mist uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-ember" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function inputClass(error?: boolean) {
  return cn(
    'h-12 w-full border bg-void px-3 text-sm text-bone outline-none placeholder:text-mist focus:border-ember',
    error ? 'border-ember' : 'border-line',
  )
}
