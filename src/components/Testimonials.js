'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import WeightHover from './WeightHover'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      'Sericaway built an AI system that handles 80% of our customer inquiries. Our team can finally focus on complex cases instead of answering the same questions all day.',
    name: 'David Kim',
    role: 'COO, MediConnect Health',
  },
  {
    quote:
      'The workflow automation they designed saved us over 40 hours a week across our logistics operations. The ROI was obvious within the first month.',
    name: 'Rachel Torres',
    role: 'VP Operations, LogiChain Solutions',
  },
  {
    quote:
      'We were skeptical about AI until we saw the lead response system Sericaway built. Our conversion rate increased by 35% in the first quarter.',
    name: 'Marcus Chen',
    role: 'CEO, Prime Realty Group',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.2,
          },
        }
      )

      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1.2,
            },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section ref={sectionRef} className="section-padding bg-[#090909] relative overflow-hidden">
      <div className="section-shape section-shape-2" aria-hidden="true" />
      <div className="section-shape section-shape-3" aria-hidden="true" />
      <div className="container-app relative z-10">
        <div ref={headingRef} className="max-w-2xl mb-16 sm:mb-20">
          <WeightHover className="heading-lg text-white">
            Trusted by leaders
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Feedback from the teams we work with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className="rounded-2xl border border-[#27272A] bg-[#111111] p-8 sm:p-10 flex flex-col"
            >
              <svg
                className="w-6 h-6 text-accent/20 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-1.982.553-3.866 1.583-4.95C5.411 6.988 6.684 6.25 8 6.25V9.5c-.975.25-1.679.832-2 2.25h2v6H4.583zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-1.982.553-3.866 1.583-4.95C15.411 6.988 16.684 6.25 18 6.25V9.5c-.975.25-1.679.832-2 2.25h2v6h-3.417z" />
              </svg>

              <blockquote className="flex-1 text-sm text-[#A1A1AA] leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-[#27272A]">
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-[#52525B] mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
