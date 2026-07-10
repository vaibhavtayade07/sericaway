'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import {
  Search,
  LineChart,
  Code2,
  Rocket,
  RefreshCw,
} from 'lucide-react'

const steps = [
  { icon: Search, title: 'Discovery', description: 'We audit your operations, identify bottlenecks, and map out where automation delivers the most value.' },
  { icon: LineChart, title: 'Strategy', description: 'A detailed roadmap with architecture decisions, timeline, metrics, and expected ROI.' },
  { icon: Code2, title: 'Development', description: 'Agile sprints. You see progress weekly. No black boxes, no surprises.' },
  { icon: Rocket, title: 'Deployment', description: 'Staged rollout with monitoring, fallbacks, and team training.' },
  { icon: RefreshCw, title: 'Optimization', description: 'Post-launch refinement based on real data. We keep improving.' },
]

export default function Process() {
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
            Process
          </p>
          <WeightHover className="heading-lg text-white">
            How we work
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            A structured but flexible approach that keeps projects moving
            without sacrificing quality.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[60px] right-[60px] h-px bg-[#27272A]" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative lg:px-6"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#111111] border border-[#27272A] flex items-center justify-center lg:mx-auto">
                  <step.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="mt-6 lg:text-center">
                  <h3 className="text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}