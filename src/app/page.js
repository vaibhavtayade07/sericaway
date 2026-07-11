import Hero from '@/components/Hero'
import TechMetrics from '@/components/TechMetrics'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Technologies from '@/components/Technologies'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMetrics />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}