import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist on the Vivansh demo site." path="/404" />
      <section className="flex min-h-[70dvh] flex-col justify-center px-6 py-24">
        <p className="text-[11px] tracking-[0.32em] text-ember uppercase">Error 404</p>
        <h1 className="font-display mt-4 text-[clamp(5rem,18vw,12rem)] leading-[0.8]">
          THIS SET
          <br />
          IS CLOSED.
        </h1>
        <p className="mt-8 max-w-md text-stone">
          The page you’re looking for isn’t on this floor. Head back to training, memberships, or book a trial.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/">Return home</ButtonLink>
          <ButtonLink to="/trial" variant="secondary">
            Book a free trial
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-mist">
          Or visit{' '}
          <Link to="/contact" className="text-ember">
            contact
          </Link>
          .
        </p>
      </section>
    </>
  )
}
