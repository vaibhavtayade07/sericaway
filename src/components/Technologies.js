'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'

const technologies = [
  { name: 'OpenAI', category: 'LLM Providers' },
  { name: 'Claude', category: 'LLM Providers' },
  { name: 'Gemini', category: 'LLM Providers' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'Pinecone', category: 'Vector DB' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'WhatsApp API', category: 'Messaging' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'Vector Databases', category: 'Infrastructure' },
  { name: 'Custom AI Models', category: 'AI' },
]

export default function Technologies() {
  return (
    <section className="section-padding bg-[#090909] overflow-hidden">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <WeightHover className="heading-lg text-white">
            Modern AI stack
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            We select tools and platforms based on what best solves the
            problem — not allegiance to any single vendor.
          </p>
        </motion.div>
      </div>

      <div className="relative group">
        <div className="flex gap-4 marquee-track">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="shrink-0 w-[180px] p-6 rounded-2xl border border-[#27272A] bg-[#111111] hover:bg-[#161616] transition-colors duration-300"
            >
              <p className="text-sm font-medium text-white">{tech.name}</p>
              <p className="text-xs text-[#52525B] mt-1">{tech.category}</p>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#090909] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#090909] to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
