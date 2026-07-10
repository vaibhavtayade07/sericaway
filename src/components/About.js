'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import { Target, Eye, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'We help businesses eliminate repetitive work through AI agents, workflow automation, and intelligent software — freeing teams to focus on what matters.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'A world where every business, regardless of size, can leverage AI to operate more efficiently, compete with larger players, and grow without limits.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Transparency, craftsmanship, and results. We communicate honestly, build with care, and measure success by the outcomes our clients achieve.',
  },
]

const founders = [
  'Vaibhav Tayade',
  'Yugandhar Pise',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#090909]">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <WeightHover className="heading-lg text-white">
            Who we are
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Sericaway was founded on a simple idea: AI should make business
            easier, not more complicated. We combine deep technical expertise
            with practical business understanding to build systems that deliver
            measurable results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-px bg-[#27272A] rounded-2xl overflow-hidden mb-12">
          {values.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#111111] p-8 sm:p-10 hover:bg-[#161616] transition-colors duration-500"
            >
              <item.icon className="w-5 h-5 text-accent" />
              <h3 className="mt-6 text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-[#111111] rounded-2xl border border-[#27272A] p-8 sm:p-10"
        >
          <h3 className="text-sm font-semibold text-white mb-6">Founders</h3>
          <div className="flex flex-wrap gap-8">
            {founders.map((name) => (
              <div key={name}>
                <p className="text-sm font-medium text-white">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}