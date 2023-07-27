import AboutSection from '@/containers/about-container'
import HeroSection from '@/containers/hero-container'
import ReasonsSection from '@/containers/reasons-container'
import ServicesSection from '@/containers/services-container'

export default function Home() {

  

  return (
   <main>
    <HeroSection />
    <ReasonsSection />
    <AboutSection/>
    <ServicesSection/>
   </main>
  )
}
