'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import WeightHover from './WeightHover'
import Magnetic from './Magnetic'
import { Search, LineChart, Code2, Rocket, RefreshCw } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Search, number: '01', title: 'Discovery',
    description: 'We audit your operations, identify bottlenecks, and map out where automation delivers the most value.',
    detail: 'Stakeholder interviews, process mapping, data flow analysis, and opportunity sizing.',
    hue: 250,
  },
  {
    icon: LineChart, number: '02', title: 'Strategy',
    description: 'A detailed roadmap with architecture decisions, timeline, metrics, and expected ROI.',
    detail: 'Technology selection, proof of concept, sprint planning, and success criteria definition.',
    hue: 160,
  },
  {
    icon: Code2, number: '03', title: 'Development',
    description: 'Agile sprints. You see progress weekly. No black boxes, no surprises.',
    detail: 'Iterative builds with continuous integration, automated testing, and weekly demo reviews.',
    hue: 270,
  },
  {
    icon: Rocket, number: '04', title: 'Deployment',
    description: 'Staged rollout with monitoring, fallbacks, and team training.',
    detail: 'Phased go-live, performance monitoring, rollback procedures, and hands-on team enablement.',
    hue: 40,
  },
  {
    icon: RefreshCw, number: '05', title: 'Optimization',
    description: 'Post-launch refinement based on real data. We keep improving.',
    detail: 'Performance tuning, user feedback integration, A/B testing, and continuous iteration.',
    hue: 190,
  },
]

const decoratives = {
  scan: ({ hue }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border opacity-[0.06]"
          style={{
            left: '20%',
            top: '50%',
            width: `${200 + i * 120}px`,
            height: `${200 + i * 120}px`,
            borderColor: `hsl(${hue}, 70%, 60%)`,
            marginLeft: `-${100 + i * 60}px`,
            marginTop: `-${100 + i * 60}px`,
            animation: `ping 3s ${i * 0.6}s ease-out infinite`,
          }}
        />
      ))}
    </div>
  ),
  wave: ({ hue }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-end gap-[3px] p-6 opacity-[0.06]">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-t-full"
          style={{
            height: `${20 + Math.sin(i * 0.8) * 40 + 20}px`,
            backgroundColor: `hsl(${hue}, 70%, 60%)`,
            animation: `wave 2s ${i * 0.07}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  ),
  grid: ({ hue }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 22}%`,
            top: `${30 + (i % 2) * 35}%`,
            width: '6px',
            height: '6px',
            backgroundColor: `hsl(${hue}, 70%, 60%)`,
            boxShadow: `0 0 12px hsla(${hue}, 70%, 60%, 0.4)`,
            animation: `pulse-dot 2s ${i * 0.4}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  ),
  particles: ({ hue }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            bottom: '-10px',
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
            backgroundColor: `hsl(${hue}, 70%, 60%)`,
            animation: `rise 3s ${i * 0.25}s ease-out infinite`,
          }}
        />
      ))}
    </div>
  ),
  orbit: ({ hue }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.06]">
      <div
        className="relative"
        style={{ width: '200px', height: '200px' }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid',
            borderColor: `hsl(${hue}, 70%, 60%)`,
            animation: 'spin 8s linear infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: '50%',
            top: '-4px',
            width: '8px',
            height: '8px',
            marginLeft: '-4px',
            backgroundColor: `hsl(${hue}, 70%, 60%)`,
            boxShadow: `0 0 12px hsla(${hue}, 70%, 60%, 0.6)`,
          }}
        />
      </div>
    </div>
  ),
}

export default function Process() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.5,
          },
        }
      )

      const cards = gsap.utils.toArray('.process-card')
      cards.forEach((card) => {
        const number = card.querySelector('.card-number')
        const icon = card.querySelector('.card-icon')
        const title = card.querySelector('.card-title')
        const desc = card.querySelector('.card-desc')
        const detail = card.querySelector('.card-detail')

        gsap.set(card, { opacity: 0, y: 80 })
        gsap.set(number, { x: -40, opacity: 0 })
        gsap.set(icon, { scale: 0, rotation: -25 })
        gsap.set([title, desc, detail], { y: 25, opacity: 0 })

        ScrollTrigger.create({
          trigger: card,
          start: 'top 75%',
          onEnter: () => {
            const tl = gsap.timeline()
            tl.to(card, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' })
              .to(number, { x: 0, opacity: 1, duration: 0.35, ease: 'power3.out' }, '-=0.25')
              .to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'back.out(2.5)' }, '-=0.2')
              .to(title, { y: 0, opacity: 1, duration: 0.3, ease: 'power3.out' }, '-=0.15')
              .to(desc, { y: 0, opacity: 1, duration: 0.25, ease: 'power3.out' }, '-=0.1')
              .to(detail, { y: 0, opacity: 1, duration: 0.25, ease: 'power3.out' }, '-=0.05')
          },
          once: true,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reduce])

  return (
    <section ref={sectionRef} className="bg-[#090909] overflow-hidden relative">
      <div className="section-shape section-shape-1" aria-hidden="true" />
      <div className="section-shape section-shape-2" aria-hidden="true" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <style>{`
        @keyframes ping {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.5); }
        }
        @keyframes wave {
          0% { transform: scaleY(0.5); }
          100% { transform: scaleY(1.2); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-400px) scale(0.3); opacity: 0; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="container-app pt-20 sm:pt-24 lg:pt-32">
        <div ref={headingRef} className="max-w-2xl mb-14 sm:mb-20">
          <WeightHover className="heading-lg text-white">How we work</WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            A structured but flexible approach that keeps projects moving without sacrificing quality.
          </p>
        </div>
      </div>

      <div className="container-app pb-24 sm:pb-32 lg:pb-40">
        <div className="space-y-12 sm:space-y-16">
          {steps.map((step, i) => {
            const DecorativeVisual = decoratives[['scan', 'wave', 'grid', 'particles', 'orbit'][i]]
            const accentColor = `hsl(${step.hue}, 55%, 50%)`
            const accentBg = `hsla(${step.hue}, 55%, 50%, 0.1)`
            const accentBorder = `hsla(${step.hue}, 55%, 50%, 0.2)`
            const orbGradient = `radial-gradient(circle at 30% 30%, hsla(${step.hue}, 60%, 60%, 0.12), transparent 70%)`

            return (
              <div
                key={step.title}
                className="process-card relative rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid',
                  borderColor: 'rgba(39,39,42,1)',
                  backgroundColor: '#111111',
                  transition: 'border-color 0.5s, background-color 0.5s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `hsla(${step.hue}, 55%, 50%, 0.3)`
                  e.currentTarget.style.backgroundColor = '#161616'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(39,39,42,1)'
                  e.currentTarget.style.backgroundColor = '#111111'
                }}
              >
                {/* Ambient orb */}
                <div
                  className="absolute -top-24 -right-24 w-56 h-56 rounded-full pointer-events-none"
                  style={{
                    background: orbGradient,
                    filter: 'blur(60px)',
                  }}
                />

                {/* Decorative visual */}
                {DecorativeVisual && <DecorativeVisual hue={step.hue} />}

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <Magnetic className="card-number inline-block text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-4 select-none"
                    style={{ color: `hsla(${step.hue}, 55%, 50%, 0.1)` }}
                  >
                    {step.number}
                  </Magnetic>

                  <div
                    className="card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: accentBg, border: `1px solid ${accentBorder}` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: accentColor }} />
                  </div>

                  <h3 className="card-title text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="card-desc text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-2xl">
                    {step.description}
                  </p>

                  <p className="card-detail text-sm text-[#71717A] leading-relaxed max-w-xl mt-2">
                    {step.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
