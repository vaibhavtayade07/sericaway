'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'

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
            Testimonials
          </p>
          <WeightHover className="heading-lg text-white">
            Trusted by leaders
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Feedback from the teams we work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[#27272A] rounded-2xl overflow-hidden">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#111111] p-8 sm:p-10 flex flex-col hover:bg-[#161616] transition-colors duration-500"
            >
              <svg className="w-6 h-6 text-[#27272A] mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-1.982.553-3.866 1.583-4.95C5.411 6.988 6.684 6.25 8 6.25V9.5c-.975.25-1.679.832-2 2.25h2v6H4.583zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-1.982.553-3.866 1.583-4.95C15.411 6.988 16.684 6.25 18 6.25V9.5c-.975.25-1.679.832-2 2.25h2v6h-3.417z" />
              </svg>
              <blockquote className="flex-1 text-sm text-[#A1A1AA] leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-[#27272A]">
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-[#52525B] mt-0.5">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}