'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import {
  Building2,
  Rocket,
  GitBranch,
  Shield,
  Cpu,
  HeadphonesIcon,
  ArrowUpRight,
} from 'lucide-react'

const reasons = [
  {
    icon: Building2,
    title: 'Business-first approach',
    description:
      'We focus on outcomes, not technology. Every solution starts with understanding your operations and goals.',
    span: 'lg:col-span-2 lg:row-span-1',
    gradient: 'from-accent/20 via-accent/5 to-transparent',
    visual: 'gradient',
  },
  {
    icon: Rocket,
    title: 'Fast deployment',
    description:
      'Most projects move from kickoff to production in under 4 weeks.',
    span: 'lg:col-span-1 lg:row-span-1',
    gradient: '',
    visual: null,
  },
  {
    icon: Cpu,
    title: 'Modern AI stack',
    description:
      'We work with the latest models — OpenAI, Claude, Gemini, open-source, and custom fine-tuned models.',
    span: 'lg:col-span-2 lg:row-span-1',
    gradient: '',
    visual: 'image',
  },
  {
    icon: GitBranch,
    title: 'Scalable architecture',
    description:
      'Built to grow with you. Our systems handle increasing volume without degradation.',
    span: 'lg:col-span-1 lg:row-span-1',
    gradient: '',
    visual: null,
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    description:
      'Data privacy and security are baked into every layer. SOC 2 principles guide our architecture.',
    span: 'lg:col-span-1 lg:row-span-1',
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    visual: 'gradient',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated support',
    description:
      'Every client gets a direct line to their project team. No account managers, no runaround.',
    span: 'lg:col-span-2 lg:row-span-1',
    gradient: '',
    visual: null,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function WhyChooseUs() {
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
            Why Choose Us
          </p>
          <WeightHover className="heading-lg text-white">
            Built different
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            We combine deep technical expertise with a practical understanding
            of how businesses actually operate.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className={`relative group overflow-hidden rounded-2xl border border-[#27272A] bg-[#111111] p-8 sm:p-10 ${reason.span} transition-all duration-500 hover:border-accent/30`}
            >
              {reason.visual === 'gradient' && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-60`}
                />
              )}
              {reason.visual === 'image' && (
                <>
                  <div className="absolute inset-0">
                    <img
                      src="https://picsum.photos/seed/ai-stack-2024/800/400"
                      alt=""
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
                  </div>
                </>
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#52525B] group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
