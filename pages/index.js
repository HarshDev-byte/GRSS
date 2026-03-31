import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LabsSection from '../components/LabsSection'
import Footer from '../components/Footer'
import CaseStudySection from '../components/CaseStudySection'
import Testimonials from '../components/Testimonials'
import SponsorCarousel from '../components/SponsorCarousel'
import HighlightsGallery from '../components/HighlightsGallery'
import Publications from '../components/Publications'
import GlobalMetrics from '../components/GlobalMetrics'
import RoamingCrafts from '../components/RoamingCrafts'

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100 relative overflow-hidden bg-[#01020a]">

      {/* Global grid overlay */}
      <div className="site-grid-overlay" aria-hidden="true" />

      {/* Realistic Roaming Photorealistic Crafts Background */}
      <RoamingCrafts />

      {/* Fixed ambient glows */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-[-30%] right-[-5%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04),transparent_65%)]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.04),transparent_65%)]" />
      </div>

      <Navbar />

      <main id="main" className="w-full mx-auto px-6 md:px-10 2xl:px-16 relative z-10">
        <Hero />
        <GlobalMetrics />
        <LabsSection />
        <div className="section-divider my-24" />
        <CaseStudySection />
        <div className="section-divider my-24" />
        <Testimonials />
        <Publications />
        <HighlightsGallery items={[]} />
      </main>

      <SponsorCarousel />
      <Footer />
    </div>
  )
}
