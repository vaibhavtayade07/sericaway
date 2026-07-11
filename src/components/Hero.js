'use client'

import { motion } from 'framer-motion'
import TechParticles from './TechParticles'
import ShinyButton from './ShinyButton'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <TechParticles />
      </div>

      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <motion.div
        className="container-app relative z-10 w-full pt-32 sm:pt-40 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272A] bg-[#111111] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-[#A1A1AA] tracking-wide uppercase">
              AI Automation Consultancy
            </span>
          </div>

          <h1 className="heading-xl text-white text-balance">
            Intelligent AI Systems.
            <br />
            <span className="text-[#A1A1AA]">Built for Business Growth.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed">
            We build AI agents and automation systems that remove repetitive
            work, improve operations, and help businesses scale with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ShinyButton onClick={() => scrollTo('#contact')}>
              Book a Discovery Call
            </ShinyButton>
            <button
              onClick={() => scrollTo('#case-studies')}
              className="px-8 py-3.5 rounded-lg border border-[#27272A] text-[#A1A1AA] font-medium text-sm hover:border-[#A1A1AA] hover:text-white transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 flex items-center gap-8 text-xs text-[#52525B]">
          <span>Trusted by innovative teams</span>
          <span className="hidden sm:inline">—</span>
          <div className="hidden sm:flex items-center gap-6">
            {['Startups', 'Enterprises', 'Agencies', 'SaaS'].map((item) => (
              <span key={item} className="text-[#3F3F46] font-medium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <svg className="w-4 h-4 text-[#52525B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}