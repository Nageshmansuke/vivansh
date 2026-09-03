import { site } from '../data/site'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/ui/PageHero'
import { Container, DemoLabel } from '../components/ui/Primitives'
import { ClassTimetable } from '../sections/SchedulePreview'
import { ButtonLink } from '../components/ui/Button'

export function SchedulePage() {
  return (
    <>
      <Seo
        title="Class schedule"
        description="Weekly strength, conditioning and studio classes at Vivansh. Sample timetable for a website demonstration."
        path="/schedule"
      />
      <PageHero
        eyebrow="Schedule"
        title="The week, on the floor."
        body="A sample timetable you can replace with live class software. Reserve is simulated — in production it can hold a spot and notify the coach."
        image={site.images.about}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <DemoLabel>Sample timetable</DemoLabel>
            <p className="text-sm text-mist">Times, coaches and capacity are placeholders.</p>
          </div>
          <ClassTimetable />
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/trial">Book a free trial</ButtonLink>
            <ButtonLink to="/membership" variant="secondary">
              View memberships
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
