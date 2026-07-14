'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import AmbientOrbs from './AmbientOrbs'
import ShinyButton from './ShinyButton'
import Magnetic from './Magnetic'
import OriginkitGrid from './OriginkitGrid'

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const wrapper = useRef(null)
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)
  const ctaRef = useRef(null)
  const visualRef = useRef(null)
  const cardA = useRef(null)
  const cardB = useRef(null)

  useEffect(() => {
    if (!wrapper.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
          headlineRef.current.querySelectorAll('.hero-word'),
          { opacity: 0, y: 40, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.06, ease: 'power2.out' }
        )
        .fromTo(subtextRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, x: 80, scale: 0.92 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1 },
          '-=0.8'
        )
        .fromTo(
          [cardA.current, cardB.current],
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
          '-=0.5'
        )
    }, wrapper)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={wrapper} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 z-0 opacity-30">
        <OriginkitGrid />
      </div>
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <AmbientOrbs />
      </div>
      <div className="absolute inset-0 z-[1] grid-pattern opacity-30 pointer-events-none" />

      <div className="container-app relative z-10 w-full pt-32 sm:pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 ref={headlineRef} className="heading-xl text-white tracking-wide">
              <span className="hero-word inline-block">Intelligent</span>{' '}
              <span className="hero-word inline-block">AI</span>{' '}
              <span className="hero-word inline-block">Systems.</span>
              <br />
              <span className="text-[#A1A1AA]">
                <span className="hero-word inline-block">Built</span>{' '}
                <span className="hero-word inline-block">for</span>{' '}
                <span className="hero-word inline-block">Business</span>{' '}
                <span className="hero-word inline-block">Growth.</span>
              </span>
            </h1>

            <p ref={subtextRef} className="mt-4 sm:mt-5 text-base sm:text-lg text-[#A1A1AA] max-w-lg leading-relaxed">
              We build AI agents and automation systems that remove repetitive
              work, improve operations, and help businesses scale with confidence.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
              <ShinyButton onClick={() => scrollTo('#contact')}>
                Book a Discovery Call
              </ShinyButton>
              <Magnetic
                as="button"
                onClick={() => scrollTo('#case-studies')}
                className="px-8 py-3.5 rounded-lg border border-[#27272A] text-[#A1A1AA] font-medium text-sm hover:border-[#A1A1AA] hover:text-white transition-all duration-300"
              >
                View Our Work
              </Magnetic>
            </div>
          </div>

          <div ref={visualRef} className="hidden lg:block relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#27272A] bg-[#111111]/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-accent/[0.02]" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="w-2 h-2 rounded-full bg-[#52525B]" />
                  <span className="w-2 h-2 rounded-full bg-[#52525B]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-[#27272A]">
                    <span className="text-[10px] text-[#52525B] font-medium uppercase tracking-wider">
                      Response Time
                    </span>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-accent">&lt;2s</span>
                      <span className="text-[10px] text-[#52525B]">avg</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-[#27272A] overflow-hidden">
                      <div className="h-full w-[92%] rounded-full bg-accent/40" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-[#27272A]">
                    <span className="text-[10px] text-[#52525B] font-medium uppercase tracking-wider">
                      Accuracy
                    </span>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-emerald-400">99.7%</span>
                      <span className="text-[10px] text-[#52525B]">uptime</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-[#27272A] overflow-hidden">
                      <div className="h-full w-[97%] rounded-full bg-emerald-500/40" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-[#27272A]">
                    <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                      <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span className="text-[10px] text-[#A1A1AA] font-medium">AI Agents</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-[#27272A]">
                    <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                      <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </div>
                    <span className="text-[10px] text-[#A1A1AA] font-medium">Automation</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-[#27272A]">
                    <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                      <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <span className="text-[10px] text-[#A1A1AA] font-medium">Security</span>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/10 via-transparent to-accent/5 pointer-events-none" />
            </div>

            <div
              ref={cardA}
              className="absolute -bottom-4 -left-4 w-32 h-24 rounded-xl border border-[#27272A] bg-[#111111]/90 backdrop-blur-sm p-4 flex flex-col justify-center"
            >
              <span className="text-2xl font-bold text-accent">24/7</span>
              <span className="text-[10px] text-[#52525B] uppercase tracking-wider mt-0.5">
                AI Support
              </span>
            </div>
            <div
              ref={cardB}
              className="absolute -top-4 -right-4 w-28 h-20 rounded-xl border border-[#27272A] bg-[#111111]/90 backdrop-blur-sm p-4 flex flex-col justify-center"
            >
              <span className="text-lg font-bold text-emerald-400">80%</span>
              <span className="text-[10px] text-[#52525B] uppercase tracking-wider mt-0.5">
                Faster
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <svg
            className="w-4 h-4 text-[#52525B] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
