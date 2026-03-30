import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import data from '../data/content.json'

export default function Events(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#020417] via-[#04081a] to-[#030417] text-slate-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold">Events</h1>
        <p className="text-slate-400 mt-2">Upcoming workshops, talks and field sessions.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.events.map(ev => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
