import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Projects(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#020417] via-[#04081a] to-[#030417] text-slate-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold">Projects</h1>
        <p className="text-slate-400 mt-2">Active and recent projects across Drone Lab and Satellite Lab.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border backdrop-blur-md shadow-glow-cyan">
            <h3 className="text-lg font-semibold">High Res Mapping</h3>
            <p className="mt-2 text-slate-300">Drone-based photogrammetry for coastal mapping.</p>
          </article>
          <article className="p-6 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border backdrop-blur-md shadow-glow-cyan">
            <h3 className="text-lg font-semibold">SmallSat Analytics</h3>
            <p className="mt-2 text-slate-300">Algorithms for multispectral remote sensing.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
