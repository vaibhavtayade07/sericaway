'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const metrics = [
  { label: 'Conversations Automated', value: 1247, suffix: '', prefix: '', decimals: 0 },
  { label: 'Hours Saved', value: 3842, suffix: '', prefix: '', decimals: 0 },
  { label: 'Active Automations', value: 156, suffix: '', prefix: '', decimals: 0 },
  { label: 'Avg Response Time', value: 0.8, suffix: 's', prefix: '', decimals: 1 },
]

function Sparkline({ color = '#6D5EF7' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const W = 120
    const H = 32
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(dpr, dpr)

    const points = Array.from({ length: 30 }, () => Math.random() * H)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      points.push(Math.random() * H)
      points.shift()

      ctx.beginPath()
      ctx.moveTo(0, H - points[0])
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo((i / points.length) * W, H - points[i])
      }
      ctx.strokeStyle = color
      ctx.lineWidth = 1.5
      ctx.globalAlpha = 0.5
      ctx.stroke()

      const grad = ctx.createLinearGradient(0, 0, 0, H)
      grad.addColorStop(0, `${color}15`)
      grad.addColorStop(1, `${color}00`)
      ctx.lineTo(W, H)
      ctx.lineTo(0, H)
      ctx.closePath()
      ctx.fillStyle = grad
      ctx.globalAlpha = 1
      ctx.fill()

      ctx.globalAlpha = 0.3
      for (let i = 0; i < points.length; i++) {
        ctx.beginPath()
        ctx.arc((i / points.length) * W, H - points[i], 1, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }
    }

    draw()
    const interval = setInterval(draw, 1200)
    return () => clearInterval(interval)
  }, [color])

  return <canvas ref={canvasRef} className="opacity-60" />
}

function AnimatedCounter({ target, suffix, prefix, decimals }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  )
}

export default function TechMetrics() {
  return (
    <section className="section-padding bg-[#090909] overflow-hidden">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Live Impact
          </p>
          <h2 className="heading-lg text-white">
            Real-time intelligence
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Every deployment feeds into our analytics. These metrics represent
            real outcomes from active client systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272A] rounded-2xl overflow-hidden">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#111111] p-8 sm:p-10 relative group hover:bg-[#161616] transition-colors duration-500"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-[#52525B] font-mono">LIVE</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight">
                <AnimatedCounter
                  target={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  decimals={metric.decimals}
                />
              </div>
              <p className="mt-2 text-sm text-[#A1A1AA]">{metric.label}</p>
              <div className="mt-4">
                <Sparkline color="#6D5EF7" />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}