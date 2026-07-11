'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import {
  Search,
  LineChart,
  Code2,
  Rocket,
  RefreshCw,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description:
      'We audit your operations, identify bottlenecks, and map out where automation delivers the most value.',
    detail:
      'Stakeholder interviews, process mapping, data flow analysis, and opportunity sizing.',
  },
  {
    icon: LineChart,
    number: '02',
    title: 'Strategy',
    description:
      'A detailed roadmap with architecture decisions, timeline, metrics, and expected ROI.',
    detail:
      'Technology selection, proof of concept, sprint planning, and success criteria definition.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development',
    description:
      'Agile sprints. You see progress weekly. No black boxes, no surprises.',
    detail:
      'Iterative builds with continuous integration, automated testing, and weekly demo reviews.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deployment',
    description:
      'Staged rollout with monitoring, fallbacks, and team training.',
    detail:
      'Phased go-live, performance monitoring, rollback procedures, and hands-on team enablement.',
  },
  {
    icon: RefreshCw,
    number: '05',
    title: 'Optimization',
    description:
      'Post-launch refinement based on real data. We keep improving.',
    detail:
      'Performance tuning, user feedback integration, A/B testing, and continuous iteration.',
  },
]

export default function Process() {
  const wrapper = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrapper.current) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.stack-card')

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cards[cards.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        })

        gsap.to(card, {
          scale: 0.92,
          opacity: 0.4,
          filter: 'grayscale(0.6)',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })
      })
    }, wrapper)

    return () => ctx.revert()
  }, [reduce])

  return (
    <section className="bg-[#090909]">
      <div className="container-app pt-24 sm:pt-32 lg:pt-40">
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
            Process
          </p>
          <h2 className="mt-4 heading-lg text-white">
            How we work
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            A structured but flexible approach that keeps projects moving
            without sacrificing quality.
          </p>
        </div>
      </div>

      <div ref={wrapper} className="relative">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="stack-card sticky top-0 min-h-[80dvh] flex items-center justify-center px-6 sm:px-8"
          >
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative rounded-2xl border border-[#27272A] bg-[#111111] p-8 sm:p-12 lg:p-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                  <div className="shrink-0">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent/20 leading-none">
                        {step.number}
                      </span>
                      <div className="w-px h-12 bg-[#27272A]" />
                      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                    <p className="mt-3 text-sm text-[#71717A] leading-relaxed max-w-2xl">
                      {step.detail}
                    </p>
                  </div>

                  <div className="shrink-0 hidden lg:flex items-center gap-2 text-[#52525B]">
                    <span className="text-xs font-medium">{`0${i + 1}`}</span>
                    <div className="w-16 h-px bg-[#27272A]" />
                    <span className="text-xs font-medium">05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
