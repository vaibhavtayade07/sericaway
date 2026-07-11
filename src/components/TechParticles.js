'use client'

import { useRef, useEffect } from 'react'

export default function TechParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const ACCENT = '109,94,247'
    const PARTICLE_COUNT = 180
    const CONNECTION_DIST = 180
    const SPHERE_RADIUS = 220

    let W, H
    const mouse = { x: -9999, y: -9999, active: false }
    let particles = []
    let raf

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(W * dpr)
      canvas.height = Math.floor(H * dpr)
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = SPHERE_RADIUS * (0.6 + Math.random() * 0.4)
        particles.push({
          homeX: r * Math.sin(phi) * Math.cos(theta),
          homeY: r * Math.cos(phi),
          homeZ: r * Math.sin(phi) * Math.sin(theta),
          x: 0, y: 0, z: 0,
          vx: 0, vy: 0, vz: 0,
          pulseOffset: Math.random() * Math.PI * 2,
          pulseSpeed: 0.2 + Math.random() * 0.3,
          connections: [],
        })
      }

      for (let i = 0; i < particles.length; i++) {
        const conns = []
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() < 0.15) {
            conns.push(j)
          }
        }
        particles[i].connections = conns
      }
    }

    const project3D = (x, y, z, rotY) => {
      const cosR = Math.cos(rotY)
      const sinR = Math.sin(rotY)
      const rx = x * cosR - z * sinR
      const rz = x * sinR + z * cosR
      const scale = 600 / (600 + rz)
      return {
        sx: W / 2 + rx * scale,
        sy: H / 2 + y * scale,
        scale,
        depth: rz,
      }
    }

    let rotation = 0

    const frame = (time) => {
      rotation += 0.0015

      ctx.clearRect(0, 0, W, H)

      const cx = mouse.x !== -9999 ? mouse.x : W / 2
      const cy = mouse.y !== -9999 ? mouse.y : H / 2
      const cursorDX = cx - W / 2
      const cursorDY = cy - H / 2
      const cursorDist = Math.sqrt(cursorDX * cursorDX + cursorDY * cursorDY)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        const targetX = p.homeX + (cursorDist < 400 ? cursorDX * 0.08 * (1 - cursorDist / 400) * (1 + p.homeY / SPHERE_RADIUS) : 0)
        const targetY = p.homeY + (cursorDist < 400 ? cursorDY * 0.08 * (1 - cursorDist / 400) * (1 + Math.abs(p.homeX) / SPHERE_RADIUS) : 0)
        const targetZ = p.homeZ

        p.vx += (targetX - p.x) * 0.04
        p.vy += (targetY - p.y) * 0.04
        p.vz += (targetZ - p.z) * 0.04
        p.vx *= 0.92
        p.vy *= 0.92
        p.vz *= 0.92
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz
      }

      const projected = particles.map((p) => {
        const proj = project3D(p.x, p.y, p.z, rotation)
        return { ...p, ...proj }
      })

      projected.sort((a, b) => a.depth - b.depth)

      const time_s = time * 0.001

      for (let i = 0; i < projected.length; i++) {
        const a = projected[i]
        for (const j of a.connections) {
          const b = projected[j]
          const pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time_s * a.pulseSpeed + a.pulseOffset))
          const dx = a.sx - b.sx
          const dy = a.sy - b.sy
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > 400) continue

          const prox = mouse.active
            ? Math.max(0, 1 - Math.sqrt((mouse.x - (a.sx + b.sx) / 2) ** 2 + (mouse.y - (a.sy + b.sy) / 2) ** 2) / 300)
            : 0

          const alpha = (0.04 + prox * 0.3) * pulse * Math.min(1, a.scale + b.scale)
          ctx.strokeStyle = `rgba(${ACCENT},${alpha})`
          ctx.lineWidth = 0.5 + prox * 1.5
          ctx.beginPath()
          ctx.moveTo(a.sx, a.sy)
          ctx.lineTo(b.sx, b.sy)
          ctx.stroke()
        }
      }

      for (const p of projected) {
        const pulse = 0.5 + 0.5 * Math.sin(time_s * p.pulseSpeed + p.pulseOffset)
        const prox = mouse.active
          ? Math.max(0, 1 - Math.sqrt((mouse.x - p.sx) ** 2 + (mouse.y - p.sy) ** 2) / 200)
          : 0

        const alpha = (0.15 + prox * 0.5) * (0.4 + 0.6 * pulse) * Math.min(1, p.scale)
        const r = (1 + prox * 2) * Math.min(1, p.scale)

        ctx.beginPath()
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT},${alpha})`
        ctx.fill()

        if (prox > 0.1) {
          ctx.beginPath()
          ctx.arc(p.sx, p.sy, r * 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ACCENT},${prox * 0.08})`
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    raf = requestAnimationFrame(frame)

    const onResize = () => resize()
    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onLeave = () => { mouse.active = false }
    const onTouch = (e) => {
      const t = e.touches[0]
      if (t) { mouse.x = t.clientX; mouse.y = t.clientY; mouse.active = true }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  )
}