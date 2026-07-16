'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import WeightHover from './WeightHover'
import { Target, Eye, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    icon: Target, title: 'Our Mission',
    description: 'We help businesses eliminate repetitive work through AI agents, workflow automation, and intelligent software — freeing teams to focus on what matters.',
  },
  {
    icon: Eye, title: 'Our Vision',
    description: 'A world where every business, regardless of size, can leverage AI to operate more efficiently, compete with larger players, and grow without limits.',
  },
  {
    icon: Heart, title: 'Our Values',
    description: 'Transparency, craftsmanship, and results. We communicate honestly, build with care, and measure success by the outcomes our clients achieve.',
  },
]

const founders = ['Vaibhav Tayade', 'Yugandhar Pise']

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const gridRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.4, ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.5,
          },
        }
      )

      gsap.fromTo(
        gridRef.current.querySelectorAll('.about-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-[#090909] overflow-hidden relative">
      <div className="section-shape section-shape-1" aria-hidden="true" />

      <div className="container-app mb-16 sm:mb-20">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">About</p>
            <WeightHover className="heading-lg text-white">Who we are</WeightHover>
          </div>
          <div className="max-w-xl">
            <p className="text-[#A1A1AA] text-base leading-relaxed">
              Sericaway was founded on a simple idea: AI should make business
              easier, not more complicated. We combine deep technical expertise
              with practical business understanding to build systems that deliver
              measurable results.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              {founders.map((name) => (
                <div key={name}>
                  <p className="text-sm font-medium text-white">{name}</p>
                  <p className="text-xs text-[#52525B] mt-0.5">Founder</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={gridRef} className="container-app">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="about-card rounded-2xl border border-[#27272A] bg-[#111111] p-8 hover:border-accent/30 hover:bg-[#161616] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
