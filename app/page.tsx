import AboutSection from '@/containers/about-container'
import BannerSection from '@/containers/banner-container'
import BannerContainer from '@/containers/banner-container'
import FormSection from '@/containers/form-container'
import HeroSection from '@/containers/hero-container'
import ProjectsSection from '@/containers/projects-container'
import ReasonsSection from '@/containers/reasons-container'
import ServicesSection from '@/containers/services-container'
import StatsSection from '@/containers/stats-container'

export default function Home() {

  

  return (
   <main>
    <HeroSection />
    <ReasonsSection />
    <AboutSection />
    <ServicesSection/>
    <StatsSection />
    <BannerSection />
    <ProjectsSection />
    <FormSection/>
   </main> 
  )
}
