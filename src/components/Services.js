'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import WeightHover from './WeightHover'
import {
  Bot,
  Workflow,
  MessageSquare,
  Database,
  MessageCircle,
  Users,
  Mail,
  Puzzle,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cardVisuals = [
  'from-accent/[0.05] via-transparent to-transparent',
  'from-emerald-500/[0.04] via-transparent to-transparent',
  'from-blue-500/[0.04] via-transparent to-transparent',
  'from-violet-500/[0.04] via-transparent to-transparent',
  'from-amber-500/[0.04] via-transparent to-transparent',
  'from-cyan-500/[0.04] via-transparent to-transparent',
  'from-rose-500/[0.04] via-transparent to-transparent',
  'from-accent/[0.04] via-transparent to-accent/[0.02]',
]

const services = [
  { icon: Bot, title: 'AI Agents', description: 'Custom AI agents that automate complex tasks, make decisions, and work alongside your team around the clock.' },
  { icon: Workflow, title: 'Workflow Automation', description: 'End-to-end automation pipelines that connect your tools and eliminate manual handoffs between systems.' },
  { icon: MessageSquare, title: 'AI Chatbots', description: 'Intelligent conversational assistants that handle support, qualify leads, and provide instant responses 24/7.' },
  { icon: Database, title: 'RAG Systems', description: 'Retrieval-augmented generation systems that let AI reason over your private knowledge base and documents.' },
  { icon: MessageCircle, title: 'WhatsApp Automation', description: 'Automated WhatsApp workflows for notifications, marketing campaigns, customer support, and two-way conversations.' },
  { icon: Users, title: 'CRM Automation', description: 'Smart CRM workflows that score leads, automate follow-ups, and keep your sales pipeline moving without manual effort.' },
  { icon: Mail, title: 'Email Automation', description: 'AI-powered email sequences that personalize outreach, nurture leads, and optimize send times for maximum engagement.' },
  { icon: Puzzle, title: 'Custom Integrations', description: 'Bespoke API connections and middleware that bridge gaps between your existing tools and new AI capabilities.' },
]

export default function Services() {
  const wrap = useRef(null)
  const track = useRef(null)
  const headingRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !wrap.current || !track.current) return
    const ctx = gsap.context(() => {
      const distance = track.current.scrollWidth - window.innerWidth

      gsap.to(track.current, {
        x: () => -(track.current.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      })
    }, wrap)
    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section id="services" className="bg-[#090909]">
      <div className="container-app pt-24 sm:pt-32 lg:pt-40">
        <div ref={headingRef} className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Services
          </p>
          <WeightHover className="heading-lg text-white">
            What we build
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Every engagement starts with understanding your operations. We
            design and deploy AI systems that fit your existing stack.
          </p>
        </div>
      </div>

      <div ref={wrap} className="relative h-[100dvh] overflow-hidden">
        <div ref={track} className="flex h-full items-center gap-6 pl-6 pr-6 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group shrink-0 w-[340px] h-[420px] rounded-2xl border border-[#27272A] bg-[#111111] p-8 flex flex-col hover:bg-[#161616] transition-colors duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cardVisuals[i % cardVisuals.length]} pointer-events-none`} />

              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/[0.02] rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-[10px] text-[#52525B] font-mono font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="pt-4 border-t border-[#27272A]">
                <span className="text-xs text-[#52525B] group-hover:text-accent transition-colors duration-300">
                  Learn more &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
