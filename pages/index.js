import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import dynamic from 'next/dynamic'
import LabsSection from '../components/LabsSection'
import DashboardCard from '../components/DashboardCard'
import Footer from '../components/Footer'
import CaseStudySection from '../components/CaseStudySection'
import Testimonials from '../components/Testimonials'
import SponsorCarousel from '../components/SponsorCarousel'
import HighlightsGallery from '../components/HighlightsGallery'
import Publications from '../components/Publications'
import { Activity, Radio, Cpu } from 'lucide-react'
import AnimatedSky from '../components/AnimatedSky'
import AnimatedGridBackground from '../components/AnimatedGridBackground'
import GlobalMetrics from '../components/GlobalMetrics'

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 relative">
      <AnimatedSky />
      <div className="fixed inset-0 -z-20">
        <AnimatedGridBackground />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-hero-glow opacity-30 blur-[150px] pointer-events-none -z-10" />
      <Navbar />
      
      <main id="main" className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-16">
        <Hero />
        <GlobalMetrics />
        {/* dynamically load telemetry widget into hero */}
        <div className="hidden">
          {/* placeholder to ensure client-side TelemetryWidget is bundled */}
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 mb-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <DashboardCard title="Founding Year" value="2026" subtitle="Celebrating our inception" icon={<Activity className="text-accent-cyan" size={24} />} />
          <DashboardCard title="Active Projects" value="5" subtitle="Drones, Satcom, AI" icon={<Radio className="text-accent-blue" size={24} />} />
          <DashboardCard title="Upcoming Events" value="3" subtitle="Workshops & Hackathons" icon={<Cpu className="text-accent-purple" size={24} />} />
        </motion.section>

        <LabsSection />

        <CaseStudySection />
        <Testimonials />

        <Publications />
        <HighlightsGallery items={[]}/>
        <SponsorCarousel />
      </main>

      <Footer />
    </div>
  )
}
