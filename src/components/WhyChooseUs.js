'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import WeightHover from './WeightHover'
import {
  Building2,
  Rocket,
  GitBranch,
  Shield,
  Cpu,
  HeadphonesIcon,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cells = [
  {
    icon: Building2,
    title: 'Business-first approach',
    description:
      'Every solution starts with understanding your operations and goals. Outcomes, not technology.',
    span: 'lg:col-span-2 lg:row-span-1',
    visual: 'accent-gradient',
  },
  {
    icon: Rocket,
    title: 'Fast deployment',
    description:
      'Most projects move from kickoff to production in under 4 weeks.',
    span: 'lg:col-span-1 lg:row-span-2',
    visual: 'minimal',
  },
  {
    icon: Cpu,
    title: 'Modern AI stack',
    description:
      'The latest models — OpenAI, Claude, Gemini, open-source, and custom fine-tuned models.',
    span: 'lg:col-span-1 lg:row-span-1',
    visual: 'dense-grid',
  },
  {
    icon: GitBranch,
    title: 'Scalable architecture',
    description:
      'Built to grow with you. Systems that handle increasing volume without degradation.',
    span: 'lg:col-span-1 lg:row-span-1',
    visual: 'lines',
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    description:
      'Data privacy and security baked into every layer. SOC 2 principles guide our architecture.',
    span: 'lg:col-span-1 lg:row-span-1',
    visual: 'emerald-gradient',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated support',
    description:
      'Every client gets a direct line to their project team. No account managers, no runaround.',
    span: 'lg:col-span-2 lg:row-span-1',
    visual: 'dots',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const gridRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      const cards = gridRef.current.querySelectorAll('.bento-cell')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section ref={sectionRef} className="section-padding bg-[#090909] relative overflow-hidden">
      <div className="section-shape section-shape-1" aria-hidden="true" />
      <div className="section-shape section-shape-3" aria-hidden="true" />

      <div className="container-app relative z-10">
        <div ref={headingRef} className="max-w-2xl mb-16 sm:mb-20">
          <WeightHover className="heading-lg text-white">
            Built different
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            We combine deep technical expertise with a practical understanding
            of how businesses actually operate. Here&apos;s why clients trust us.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[minmax(180px,auto)]"
        >
          {cells.map((cell, i) => (
            <div
              key={cell.title}
              className={`bento-cell group relative overflow-hidden rounded-2xl border border-[#27272A] bg-[#111111] p-6 sm:p-8 ${cell.span} transition-all duration-500 hover:border-accent/30 hover:bg-[#161616]`}
              style={{ minHeight: '180px' }}
            >
              {cell.visual === 'accent-gradient' && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-accent/[0.02]" />
              )}
              {cell.visual === 'emerald-gradient' && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-emerald-500/[0.02]" />
              )}
              {cell.visual === 'dense-grid' && (
                <>
                  <div className="absolute inset-0 opacity-[0.04]">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />
                  </div>
                </>
              )}
              {cell.visual === 'lines' && (
                <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
                  <div className="absolute inset-0 flex flex-col justify-around">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <div
                        key={j}
                        className="h-px bg-white"
                        style={{ width: `${50 + Math.random() * 50}%` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {cell.visual === 'dots' && (
                <div className="absolute inset-0 opacity-[0.04]">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                </div>
              )}
              {cell.visual === 'minimal' && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/[0.03] to-transparent rounded-bl-full" />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-auto">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors duration-300">
                    <cell.icon className="w-[18px] h-[18px] text-accent" />
                  </div>
                  <span className="font-mono text-[10px] text-[#3F3F46] group-hover:text-[#52525B] transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">
                  {cell.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#A1A1AA] leading-relaxed">
                  {cell.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
