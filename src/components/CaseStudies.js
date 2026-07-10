'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import { ArrowUpRight } from 'lucide-react'

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
          className="grid lg:grid-cols-3 gap-px bg-[#27272A] rounded-2xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.client}
              variants={cardVariants}
              className="bg-[#111111] p-8 sm:p-10 flex flex-col hover:bg-[#161616] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs text-[#52525B] uppercase tracking-wider">
                    {study.industry}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {study.client}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#52525B] mt-1 shrink-0" />
              </div>

              <div className="space-y-4 flex-1">
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

              <div className="mt-6 pt-6 border-t border-[#27272A]">
                <div className="text-2xl font-bold text-accent">
                  {study.metric}
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