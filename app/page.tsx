import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import StatsBar from '@/components/StatsBar'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Products />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
