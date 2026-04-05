import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#020417] via-[#04081a] to-[#030417] text-slate-100">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <p className="text-slate-400 mt-2">Get in touch with GRSS SIES GST for collaborations, events, and research.</p>

        <form className="mt-6 grid grid-cols-1 gap-4">
          <input className="p-3 rounded-lg bg-[#021226] border border-white/6 text-slate-100" placeholder="Your name" />
          <input className="p-3 rounded-lg bg-[#021226] border border-white/6 text-slate-100" placeholder="Email" />
          <textarea className="p-3 rounded-lg bg-[#021226] border border-white/6 text-slate-100" rows="6" placeholder="Message" />
          <button className="w-max px-5 py-3 rounded-md bg-gradient-to-r from-accent-cyan to-accent-blue text-black font-semibold">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
