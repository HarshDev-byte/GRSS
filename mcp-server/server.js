const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 4000 })

console.log('MCP telemetry server running on ws://localhost:4000')

function randomTelemetry(){
  return {
    timestamp: Date.now(),
    satLink: Math.round(80 + Math.random()*20),
    droneActive: Math.round(Math.random()*20),
    ndvi: +(0.2 + Math.random()*0.8).toFixed(2)
  }
}

wss.on('connection', (ws) => {
  console.log('client connected')
  const iv = setInterval(()=>{
    const msg = JSON.stringify({ type: 'telemetry', data: randomTelemetry() })
    if(ws.readyState === WebSocket.OPEN) ws.send(msg)
  }, 1000)

  ws.on('close', ()=>{
    clearInterval(iv)
  })
})
