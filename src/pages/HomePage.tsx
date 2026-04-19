import { Hero } from '../components/home/Hero'
import { AboutInstitutionSection } from '../components/home/AboutInstitutionSection'
import { ActivitiesSection } from '../components/home/ActivitiesSection'
import { HomeGallery } from '../components/home/HomeGallery'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutInstitutionSection />
      <ActivitiesSection />
      <HomeGallery />
    </>
  )
}
