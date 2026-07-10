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
} from 'lucide-react'

const reasons = [
  {
    icon: Building2,
    title: 'Business-first approach',
    description:
      'We focus on outcomes, not technology. Every solution starts with understanding your operations and goals.',
  },
  {
    icon: Rocket,
    title: 'Fast deployment',
    description:
      'Most projects move from kickoff to production in under 4 weeks. We ship iteratively and improve continuously.',
  },
  {
    icon: GitBranch,
    title: 'Scalable architecture',
    description:
      'Built to grow with you. Our systems handle increasing volume without degradation or redesign.',
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    description:
      'Data privacy and security are baked into every layer. SOC 2 principles guide our architecture decisions.',
  },
  {
    icon: Cpu,
    title: 'Modern AI stack',
    description:
      'We work with the latest models and infrastructure — OpenAI, Claude, Gemini, open-source, and custom fine-tuned models.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated support',
    description:
      'Every client gets a direct line to their project team. No account managers, no runaround.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272A] rounded-2xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className="bg-[#111111] p-8 sm:p-10 hover:bg-[#161616] transition-colors duration-500"
            >
              <reason.icon className="w-5 h-5 text-accent" />
              <h3 className="mt-6 text-sm font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}