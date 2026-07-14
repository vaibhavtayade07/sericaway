'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import { Search, LineChart, Code2, Rocket, RefreshCw } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Search, number: '01', title: 'Discovery',
    description: 'We audit your operations, identify bottlenecks, and map out where automation delivers the most value.',
    detail: 'Stakeholder interviews, process mapping, data flow analysis, and opportunity sizing.',
  },
  {
    icon: LineChart, number: '02', title: 'Strategy',
    description: 'A detailed roadmap with architecture decisions, timeline, metrics, and expected ROI.',
    detail: 'Technology selection, proof of concept, sprint planning, and success criteria definition.',
  },
  {
    icon: Code2, number: '03', title: 'Development',
    description: 'Agile sprints. You see progress weekly. No black boxes, no surprises.',
    detail: 'Iterative builds with continuous integration, automated testing, and weekly demo reviews.',
  },
  {
    icon: Rocket, number: '04', title: 'Deployment',
    description: 'Staged rollout with monitoring, fallbacks, and team training.',
    detail: 'Phased go-live, performance monitoring, rollback procedures, and hands-on team enablement.',
  },
  {
    icon: RefreshCw, number: '05', title: 'Optimization',
    description: 'Post-launch refinement based on real data. We keep improving.',
    detail: 'Performance tuning, user feedback integration, A/B testing, and continuous iteration.',
  },
]

export default function Process() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const timelineRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.process-card')
    cards.forEach((el) => {
      el.setAttribute('string', '')
      el.setAttribute('string-repeat', '')
    })

    let st
    const init = async () => {
      try {
        const { StringTune } = await import('@fiddle-digital/string-tune')
        st = StringTune.getInstance()
        st.use(StringTune.StringLazy)
        st.start(0)
      } catch {}
    }
    init()

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.2,
          },
        }
      )

      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 20%',
              end: 'bottom bottom',
              scrub: 1,
            },
          }
        )
      }
    }, sectionRef)
    return () => {
      ctx.revert()
      try { st?.stop?.() } catch {}
    }
  }, [reduce])

  return (
    <section ref={sectionRef} className="bg-[#090909] overflow-hidden relative">
      <div className="section-shape section-shape-1" aria-hidden="true" />
      <div className="section-shape section-shape-2" aria-hidden="true" />

      <style>{`
        .process-card-inner {
          scale: 1.15;
          opacity: 0;
          clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
          transition:
            scale 1.5s cubic-bezier(0.86, 0, 0.31, 1),
            opacity 1.5s cubic-bezier(0.86, 0, 0.31, 1),
            clip-path 1.5s cubic-bezier(0.86, 0, 0.31, 1);
        }
        .process-card.-inview .process-card-inner {
          scale: 1;
          opacity: 1;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>

      <div className="container-app pt-24 sm:pt-32 lg:pt-40">
        <div ref={headingRef} className="max-w-2xl mb-16 sm:mb-20">
          <h2 className="heading-lg text-white">How we work</h2>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            A structured but flexible approach that keeps projects moving without sacrificing quality.
          </p>
        </div>
      </div>

      <div className="relative pb-32 sm:pb-40 lg:pb-48">
        <div className="absolute left-[2.375rem] lg:left-1/2 top-0 bottom-0 w-px bg-[#27272A] -translate-x-1/2" />
        <div
          ref={timelineRef}
          className="absolute left-[2.375rem] lg:left-1/2 top-0 bottom-0 w-px bg-accent/40 origin-top -translate-x-1/2"
          style={{ scaleY: 0 }}
        />

        {steps.map((step, i) => {
          const isLeft = i % 2 === 0
          return (
            <div
              key={step.title}
              className="group relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 px-6 sm:px-8 mb-20 sm:mb-28 last:mb-0"
            >
              <div className="relative z-10 shrink-0 flex items-center justify-center w-[4.75rem] h-[4.75rem] rounded-full border-2 border-[#27272A] bg-[#090909] lg:mx-auto">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
              </div>

              <div className={`flex-1 w-full lg:w-[42%] ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <figure className="process-card block rounded-2xl border border-[#27272A] bg-[#111111] p-8 sm:p-10 lg:p-12 overflow-hidden">
                  <div className="process-card-inner">
                    <span className="text-5xl sm:text-6xl font-bold text-accent/10 leading-none block mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
                      {step.description}
                    </p>
                    <p className="mt-3 text-sm text-[#71717A] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </figure>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
