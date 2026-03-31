import { useEffect, useState } from 'react'

// Simulate realistic telemetry values that drift over time.
// When a real backend at ws://localhost:4000 is available, replace the
// useEffect below with the WebSocket connect() implementation.
function useTelemetry() {
  const [tel, setTel] = useState({ satLink: 94, droneActive: 3, ndvi: 0.71 })
  const [status, setStatus] = useState('live')

  useEffect(() => {
    const id = setInterval(() => {
      setTel(prev => ({
        satLink:     Math.min(100, Math.max(70, +(prev.satLink + (Math.random() - 0.48) * 2).toFixed(1))),
        droneActive: Math.min(6,   Math.max(0,  Math.round(prev.droneActive + (Math.random() > 0.85 ? (Math.random() > 0.5 ? 1 : -1) : 0)))),
        ndvi:        Math.min(0.95, Math.max(0.40, +(prev.ndvi + (Math.random() - 0.5) * 0.02).toFixed(3))),
      }))
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return { tel, status }
}

export default function TelemetryWidget(){
  const { tel, status } = useTelemetry()

  const fmt = (v, suffix = '') => (v === null || v === undefined) ? '--' : `${v}${suffix}`

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" aria-live="polite" aria-atomic="true">
      <div className="p-3 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border">
        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-400">Sat Link</div>
          <div className="text-xxs text-emerald-400">{status}</div>
        </div>
        <div className="mt-2 text-2xl font-bold">{fmt(tel.satLink, '%')}</div>
      </div>
      <div className="p-3 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border">
        <div className="text-xs text-slate-400">Drone Ops</div>
        <div className="mt-2 text-2xl font-bold">{fmt(tel.droneActive)}</div>
      </div>
      <div className="p-3 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border">
        <div className="text-xs text-slate-400">NDVI</div>
        <div className="mt-2 text-2xl font-bold">{fmt(tel.ndvi)}</div>
      </div>
    </div>
  )
}
