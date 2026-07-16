'use client'

import { useRef, useEffect } from 'react'

export default function OriginKitGrid() {
  const hostRef = useRef(null)
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })
  const trailRef = useRef([])

  useEffect(() => {
    const host = hostRef.current
    const canvas = canvasRef.current
    if (!host || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const GAP = 64
    const R = 280
    const PULL = 1.2
    const DOT_COLOR = 'rgba(255,255,255,0.35)'
    const LINE_COLOR = 'rgba(200,155,94,0.15)'
    const TRAIL_COLOR = 'rgba(200,155,94,0.12)'

    let W = 1
    let H = 1
    let dots = []

    const build = (mw, mh) => {
      const r = host.getBoundingClientRect()
      W = Math.max(1, Math.floor(mw ?? r.width))
      H = Math.max(1, Math.floor(mh ?? r.height))
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(W * dpr)
      canvas.height = Math.floor(H * dpr)
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots = []
      const nCols = Math.floor(W / GAP) + 2
      const nRows = Math.floor(H / GAP) + 2
      for (let c = 0; c < nCols; c++) {
        for (let r = 0; r < nRows; r++) {
          const hx = c * GAP
          const hy = r * GAP
          dots.push({ hx, hy, x: hx, y: hy, vx: 0, vy: 0 })
        }
      }
    }

    build()

    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect
      build(cr?.width, cr?.height)
    })
    ro.observe(host)

    const setMouse = (clientX, clientY) => {
      const r = canvas.getBoundingClientRect()
      const mx = clientX - r.left
      const my = clientY - r.top
      mouseRef.current.x = mx
      mouseRef.current.y = my
      mouseRef.current.active = true
      const now = performance.now()
      const tr = trailRef.current
      tr.push({ x: mx, y: my, t: now })
      if (tr.length > 80) tr.shift()
    }

    const onMove = (e) => setMouse(e.clientX, e.clientY)
    const onLeave = () => {
      mouseRef.current.active = false
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }
    const onTouch = (e) => {
      const t = e.touches[0]
      if (t) setMouse(t.clientX, t.clientY)
    }

    host.addEventListener('mousemove', onMove)
    host.addEventListener('mouseleave', onLeave)
    host.addEventListener('touchmove', onTouch, { passive: true })
    host.addEventListener('touchend', onLeave)

    let raf = 0
    const frame = () => {
      const m = mouseRef.current
      ctx.clearRect(0, 0, W, H)

      for (const d of dots) {
        let ax = (d.hx - d.x) * 0.06
        let ay = (d.hy - d.y) * 0.06
        if (m.active) {
          const dx = m.x - d.x
          const dy = m.y - d.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < R && dist > 0.001) {
            const f = (1 - dist / R) * PULL
            ax += (dx / dist) * f
            ay += (dy / dist) * f
          }
        }
        d.vx = (d.vx + ax) * 0.82
        d.vy = (d.vy + ay) * 0.82
        d.x += d.vx
        d.y += d.vy
      }

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        const right = dots[i + 1]
        const nCols = Math.floor(W / GAP) + 2
        const down = dots[i + nCols]
        const prox = m.active
          ? Math.max(0, 1 - Math.sqrt((m.x - d.x) ** 2 + (m.y - d.y) ** 2) / R)
          : 0

        if (right && (i + 1) % nCols !== 0) {
          ctx.globalAlpha = 0.08 + prox * 0.5
          ctx.strokeStyle = LINE_COLOR
          ctx.lineWidth = 0.5 + prox * 1.2
          ctx.beginPath()
          ctx.moveTo(d.x, d.y)
          ctx.lineTo(right.x, right.y)
          ctx.stroke()
        }
        if (down && i + nCols < dots.length) {
          ctx.globalAlpha = 0.08 + prox * 0.5
          ctx.strokeStyle = LINE_COLOR
          ctx.lineWidth = 0.5 + prox * 1.2
          ctx.beginPath()
          ctx.moveTo(d.x, d.y)
          ctx.lineTo(down.x, down.y)
          ctx.stroke()
        }
      }

      for (const d of dots) {
        const prox = m.active
          ? Math.max(0, 1 - Math.sqrt((m.x - d.x) ** 2 + (m.y - d.y) ** 2) / R)
          : 0
        ctx.globalAlpha = 0.3 + prox * 0.6
        ctx.fillStyle = DOT_COLOR
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2 + prox * 1.8, 0, 2 * Math.PI)
        ctx.fill()
      }

      if (m.active) {
        const now = performance.now()
        const tr = trailRef.current
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        for (let i = 1; i < tr.length; i++) {
          const a = tr[i - 1]
          const b = tr[i]
          const age = now - b.t
          if (age > 260) continue
          ctx.globalAlpha = Math.max(0, 1 - age / 260) * 0.4
          ctx.strokeStyle = TRAIL_COLOR
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      host.removeEventListener('mousemove', onMove)
      host.removeEventListener('mouseleave', onLeave)
      host.removeEventListener('touchmove', onTouch)
      host.removeEventListener('touchend', onLeave)
    }
  }, [])

  return (
    <div
      ref={hostRef}
      className="absolute inset-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  )
}