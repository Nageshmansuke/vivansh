import { Seo } from '../components/Seo'
import { Hero } from '../sections/Hero'
import { Ticker } from '../sections/Ticker'
import { TrustBar } from '../sections/TrustBar'
import { Philosophy } from '../sections/Philosophy'
import { VisitJourney } from '../sections/VisitJourney'
import { Facilities } from '../sections/Facilities'
import { ProgramsPreview } from '../sections/ProgramsPreview'
import { SchedulePreview } from '../sections/SchedulePreview'
import { TrainersPreview } from '../sections/TrainersPreview'
import { Transformations } from '../sections/Transformations'
import { MembershipPreview } from '../sections/MembershipPreview'
import { Testimonials } from '../sections/Testimonials'
import { GalleryPreview } from '../sections/GalleryPreview'
import { InstagramStrip } from '../sections/InstagramStrip'
import { Faq } from '../sections/Faq'
import { TrialCTA } from '../sections/TrialCTA'
import { LocationContact } from '../sections/LocationContact'

export function HomePage() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <Ticker />
      <TrustBar />
      <Philosophy />
      <VisitJourney />
      <Facilities />
      <ProgramsPreview />
      <SchedulePreview />
      <TrainersPreview />
      <Transformations />
      <MembershipPreview />
      <Testimonials />
      <GalleryPreview />
      <InstagramStrip />
      <Faq />
      <TrialCTA />
      <LocationContact />
    </>
  )
}
