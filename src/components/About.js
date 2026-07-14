'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import WeightHover from './WeightHover'
import { Target, Eye, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
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
  const cursorRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return

    const items = sectionRef.current.querySelectorAll('.about-item')
    items.forEach((el) => {
      el.setAttribute('string', 'cursor')
      el.setAttribute('string-cursor-target-style-disable', '')
    })

    const cursorEl = cursorRef.current
    if (cursorEl) {
      cursorEl.setAttribute('string-cursor', '')
      cursorEl.setAttribute('string-cursor-lerp', '0.75')
    }

    if (items[0]) items[0].setAttribute('string-cursor-class', '-target-1')
    if (items[1]) items[1].setAttribute('string-cursor-class', '-target-2')
    if (items[2]) items[2].setAttribute('string-cursor-class', '-target-3')

    let st
    const init = async () => {
      try {
        const { StringTune } = await import('@fiddle-digital/string-tune')
        st = StringTune.getInstance()
        st.use(StringTune.StringLazy)
        st.use(StringTune.StringCursor)
        st.start(0)
      } catch {}
    }
    init()

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.2,
          },
        }
      )
    }, sectionRef)
    return () => {
      ctx.revert()
      try { st?.stop?.() } catch {}
    }
  }, [reduceMotion])

  return (
      <section id="about" ref={sectionRef} className="section-padding bg-[#090909] overflow-hidden relative">
        <div className="section-shape section-shape-1" aria-hidden="true" />
      <style>{`
        .about-cross {
          display: none;
        }
        @media (min-width: 1024px) {
          .about-cross {
            grid-column-start: 2;
            grid-column-end: 14;
            grid-row-start: 2;
            grid-row-end: 5;
            justify-self: stretch;
            align-self: stretch;
            display: block;
            background-image:
              linear-gradient(to right, transparent 50%, rgba(51,51,51,0.4) calc(50% + 1px), transparent calc(50% + 1px)),
              linear-gradient(to top, transparent 50%, rgba(51,51,51,0.4) calc(50% + 1px), transparent calc(50% + 1px));
            background-repeat: no-repeat;
          }
        }

        .about-item {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0;
          cursor: default;
          position: relative;
        }
        .about-item figure {
          flex-shrink: 0;
          width: 2.441rem;
          border-radius: 0.4rem;
          overflow: hidden;
        }
        .about-l, .about-r {
          grid-column-start: 1;
          grid-column-end: 15;
        }

        @media (min-width: 1024px) {
          .about-l { grid-column-start: 2; grid-column-end: 8; }
          .about-r { grid-column-start: 8; grid-column-end: 14; }
          .about-mission, .about-values { grid-row-start: 2; grid-row-end: 3; }
          .about-vision { grid-row-start: 3; grid-row-end: 4; }

          .about-item {
            padding: 1rem calc(0.4rem / 2);
            min-height: 120px;
          }
          .about-item::before {
            content: '';
            position: absolute;
            inset: calc(0.4rem / 2);
            background-color: rgba(51,51,51,0.2);
            border-radius: 0.4rem;
            opacity: 0;
            scale: 0.5;
            transition: opacity 0.3s cubic-bezier(0.86,0,0.31,1), scale 0.3s cubic-bezier(0.86,0,0.31,1);
          }
          .about-item:hover::before {
            opacity: 1;
            scale: 1;
            transition: opacity 0.6s cubic-bezier(0.35,0.35,0,1), scale 0.6s cubic-bezier(0.35,0.35,0,1);
          }
          .about-item .about-icon-wrap {
            opacity: 1;
            scale: 1;
            transition: opacity 0.6s cubic-bezier(0.35,0.35,0,1), scale 0.6s cubic-bezier(0.35,0.35,0,1);
          }
          .about-item .about-title {
            color: rgba(255,255,255,0.6);
            transition: color 0.6s cubic-bezier(0.35,0.35,0,1);
          }
          .about-item .about-desc {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height 0.6s cubic-bezier(0.35,0.35,0,1), opacity 0.6s cubic-bezier(0.35,0.35,0,1);
          }

          .about-grid:has(.about-item:hover) .about-item .about-icon-wrap {
            scale: 0.7;
            opacity: 0.3;
          }
          .about-grid:has(.about-item:hover) .about-item .about-title {
            color: rgba(255,255,255,0.2);
          }
          .about-grid:has(.about-item:hover) .about-item .about-desc {
            max-height: 0;
            opacity: 0;
          }

          .about-item:hover .about-icon-wrap {
            scale: 1 !important;
            opacity: 1 !important;
            transition: opacity 0.3s cubic-bezier(0.86,0,0.31,1), scale 0.3s cubic-bezier(0.86,0,0.31,1);
          }
          .about-item:hover .about-title {
            color: #ffffff !important;
          }
          .about-item:hover .about-desc {
            max-height: 200px !important;
            opacity: 1 !important;
          }
        }

        .about-cursor { display: none; }
        @media (min-width: 1024px) {
          .about-cursor {
            position: fixed;
            z-index: 100;
            left: 0;
            top: 0;
            pointer-events: none;
            margin-left: 1rem;
            margin-top: 1.5rem;
            display: grid;
            place-items: center;
            transform: translate3d(calc(var(--x) * 1px + 1rem), calc(var(--y) * 1px + 1.5rem), 0) rotate(calc(var(--x-lerp) * 0.5deg));
            will-change: transform;
          }
          .about-cursor figure {
            grid-area: 1 / 1;
            border-radius: 0.4rem;
            overflow: hidden;
            width: 12rem;
            opacity: 0;
            scale: 0.5;
            translate: 0 25%;
            transition: opacity 0.3s, scale 0.3s, translate 0.3s;
          }
          .about-cursor.-target-1 .image-1,
          .about-cursor.-target-2 .image-2,
          .about-cursor.-target-3 .image-3 {
            z-index: 101;
            opacity: 1;
            scale: 1;
            translate: 0 0;
            transition:
              opacity 0s cubic-bezier(0.35,0.35,0,1),
              scale 0.6s cubic-bezier(0.35,0.35,0,1),
              translate 0.6s cubic-bezier(0.35,0.35,0,1);
          }
        }
      `}</style>

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

      <div ref={gridRef} className="about-grid container-app">
        <div
          className="relative"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(14, 1fr)',
            gridTemplateRows: 'auto auto auto auto',
            alignItems: 'center',
            minHeight: '100dvh',
          }}
        >
          <span className="about-cross"></span>

          <div className="about-item about-mission about-l">
            <figure className="about-icon-wrap">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
            </figure>
            <div className="flex flex-col">
              <span className="about-title text-lg font-semibold">Our Mission</span>
              <p className="about-desc text-sm text-[#A1A1AA] leading-relaxed mt-1">
                We help businesses eliminate repetitive work through AI agents, workflow automation, and intelligent software.
              </p>
            </div>
          </div>

          <div className="about-item about-vision about-r">
            <figure className="about-icon-wrap">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
            </figure>
            <div className="flex flex-col">
              <span className="about-title text-lg font-semibold">Our Vision</span>
              <p className="about-desc text-sm text-[#A1A1AA] leading-relaxed mt-1">
                A world where every business can leverage AI to operate more efficiently and grow without limits.
              </p>
            </div>
          </div>

          <div className="about-item about-values about-l">
            <figure className="about-icon-wrap">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
              </div>
            </figure>
            <div className="flex flex-col">
              <span className="about-title text-lg font-semibold">Our Values</span>
              <p className="about-desc text-sm text-[#A1A1AA] leading-relaxed mt-1">
                Transparency, craftsmanship, and results. We communicate honestly and build with care.
              </p>
            </div>
          </div>

          <div ref={cursorRef} className="about-cursor">
            {values.map((v, i) => (
              <figure key={v.title} className={`image-${i + 1}`}>
                <div className="w-48 h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center p-4">
                  <v.icon className="w-8 h-8 text-accent" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
