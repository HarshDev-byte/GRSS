import { useEffect, useRef, useState } from 'react'

export default function TelemetryWidget(){
  const [tel, setTel] = useState({ satLink: null, droneActive: null, ndvi: null })
  const [status, setStatus] = useState('disconnected')
  const wsRef = useRef(null)
  const reconnectRef = useRef(0)
  const timeoutRef = useRef(null)

  useEffect(()=>{
    let mounted = true

    function connect(){
      setStatus('connecting')
      try{
        const ws = new WebSocket('ws://localhost:4000')
        wsRef.current = ws

        ws.onopen = () => {
          reconnectRef.current = 0
          if(!mounted) return
          setStatus('connected')
        }

        ws.onmessage = (ev) => {
          try{
            const msg = JSON.parse(ev.data)
            if(msg.type === 'telemetry' && mounted) setTel(msg.data)
          }catch(e){ /* ignore parse errors */ }
        }

        ws.onclose = () => {
          if(!mounted) return
          setStatus('disconnected')
          // schedule reconnect with exponential backoff
          const delay = Math.min(30000, 1000 * Math.pow(2, reconnectRef.current))
          reconnectRef.current += 1
          timeoutRef.current = setTimeout(connect, delay)
        }

        ws.onerror = () => {
          if(!mounted) return
          setStatus('error')
          ws.close()
        }
      }catch(e){
        console.warn('WS connect failed', e)
        setStatus('error')
        timeoutRef.current = setTimeout(connect, 3000)
      }
    }

    connect()

    return ()=>{
      mounted = false
      if(timeoutRef.current) clearTimeout(timeoutRef.current)
      if(wsRef.current) wsRef.current.close()
    }
  }, [])

  const fmt = (v, suffix = '') => (v === null || v === undefined) ? '--' : `${v}${suffix}`

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" aria-live="polite" aria-atomic="true">
      <div className="p-3 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border">
        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-400">Sat Link</div>
          <div className={`text-xxs ${status==='connected' ? 'text-emerald-400' : status==='connecting' ? 'text-amber-300' : 'text-rose-400'}`}>{status}</div>
        </div>
        <div className="mt-2 text-2xl font-bold">{fmt(tel.satLink, typeof tel.satLink === 'number' ? '%' : '')}</div>
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
