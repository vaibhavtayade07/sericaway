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
    <section className="section-padding bg-[#090909]">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Technology
          </p>
          <WeightHover className="heading-lg text-white">
            Modern AI stack
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            We select tools and platforms based on what best solves the
            problem — not allegiance to any single vendor.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#27272A] rounded-2xl overflow-hidden">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="bg-[#111111] p-6 sm:p-8 hover:bg-[#161616] transition-colors duration-300"
            >
              <p className="text-sm font-medium text-white">{tech.name}</p>
              <p className="text-xs text-[#52525B] mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}