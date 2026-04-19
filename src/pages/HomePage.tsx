import { Hero } from '../components/home/Hero'
import { IntroSection } from '../components/home/IntroSection'
import { ValuesSection } from '../components/home/ValuesSection'
import { WhySection } from '../components/home/WhySection'
import { StaffPreview } from '../components/home/StaffPreview'
import { CampusSection } from '../components/home/CampusSection'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { ContactCta } from '../components/home/ContactCta'

export function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ValuesSection />
      <WhySection />
      <StaffPreview />
      <CampusSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <ContactCta />
    </>
  )
}
