'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import { ArrowUpRight } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const caseStudies = [
  {
    client: 'LogiChain Solutions',
    industry: 'Logistics',
    challenge:
      'Manual order processing across 3 systems required 40+ hours of data entry per week, with frequent errors.',
    solution:
      'Deployed an AI agent that reads incoming orders from email, validates inventory, creates records in their ERP, and updates the CRM.',
    outcome: 'Manual workload reduced by 80%.',
    metric: '80%',
    metricLabel: 'Manual work eliminated',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center',
  },
  {
    client: 'MediConnect Health',
    industry: 'Healthcare',
    challenge:
      'Patient support team was overwhelmed with 500+ daily inquiries, average response time of 8 hours.',
    solution:
      'Built a RAG-powered AI chatbot trained on clinical protocols, insurance policies, and FAQs, integrated with WhatsApp.',
    outcome: '24/7 AI customer support with under 30-second responses.',
    metric: '30s',
    metricLabel: 'Average response time',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&crop=center',
  },
  {
    client: 'Prime Realty Group',
    industry: 'Real Estate',
    challenge:
      'Sales team manually entering lead data from Zillow, Realtor.com, and their website into Salesforce.',
    solution:
      'Developed an automated lead ingestion pipeline with AI enrichment that scores and routes leads to the right agent.',
    outcome: 'Lead response time dropped from 4 hours to under 30 seconds.',
    metric: '30s',
    metricLabel: 'Lead response time',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&crop=center',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function CaseStudies() {
  const gridRef = useRef(null)

  useEffect(() => {
    let st
    const init = async () => {
      try {
        const { StringTune } = await import('@fiddle-digital/string-tune')
        st = StringTune.getInstance()
        st.use(StringTune.StringMagnetic)
        st.start(0)
      } catch {}
    }
    init()
    return () => {
      try { st?.stop?.() } catch {}
    }
  }, [])

  return (
    <section id="case-studies" className="section-padding bg-[#090909]">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Case Studies
          </p>
          <WeightHover className="heading-lg text-white">
            Results we deliver
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Real projects. Real outcomes. Each engagement is tailored to the
            specific operations and goals of the business.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.client}
              variants={cardVariants}
              string="magnetic"
              string-radius="600"
              string-strength="0.08"
              className="group relative bg-[#111111] rounded-2xl border border-[#27272A] p-8 sm:p-10 flex flex-col hover:bg-[#161616] transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img
                  src={study.img}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
              </div>

              <div className="relative z-10 flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs text-[#52525B] uppercase tracking-wider">
                    {study.industry}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {study.client}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#52525B] mt-1 shrink-0 group-hover:text-accent transition-colors duration-300" />
              </div>

              <div className="space-y-4 flex-1 relative z-10">
                <div>
                  <p className="text-xs text-[#52525B] uppercase tracking-wider mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#52525B] uppercase tracking-wider mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#27272A] relative z-10">
                <div className="text-2xl font-bold text-accent">
                  <AnimatedCounter
                    value={study.metric.replace(/\D/g, '')}
                    suffix={study.metric.replace(/\d/g, '')}
                  />
                </div>
                <div className="text-sm text-[#A1A1AA] mt-0.5">
                  {study.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
