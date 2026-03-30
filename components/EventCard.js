export default function EventCard({event}){
  return (
    <article className="p-4 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border backdrop-blur-md">
      <div className="text-sm text-slate-300">{event.date} • {event.location}</div>
      <h4 className="mt-2 font-semibold text-lg">{event.title}</h4>
      <p className="mt-1 text-slate-400 text-sm">{event.summary}</p>
    </article>
  )
}
