'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import {
  Bot,
  Workflow,
  MessageSquare,
  Database,
  MessageCircle,
  Users,
  Mail,
  Puzzle,
} from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Custom AI agents that automate complex tasks, make decisions, and work alongside your team around the clock.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'End-to-end automation pipelines that connect your tools and eliminate manual handoffs between systems.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Intelligent conversational assistants that handle support, qualify leads, and provide instant responses 24/7.',
  },
  {
    icon: Database,
    title: 'RAG Systems',
    description:
      'Retrieval-augmented generation systems that let AI reason over your private knowledge base and documents.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    description:
      'Automated WhatsApp workflows for notifications, marketing campaigns, customer support, and two-way conversations.',
  },
  {
    icon: Users,
    title: 'CRM Automation',
    description:
      'Smart CRM workflows that score leads, automate follow-ups, and keep your sales pipeline moving without manual effort.',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description:
      'AI-powered email sequences that personalize outreach, nurture leads, and optimize send times for maximum engagement.',
  },
  {
    icon: Puzzle,
    title: 'Custom Integrations',
    description:
      'Bespoke API connections and middleware that bridge gaps between your existing tools and new AI capabilities.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#090909]">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Services
          </p>
          <WeightHover className="heading-lg text-white">
            What we build
          </WeightHover>
          <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
            Every engagement starts with understanding your operations. We
            design and deploy AI systems that fit your existing stack.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272A] rounded-2xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-[#111111] p-8 hover:bg-[#161616] transition-colors duration-500"
            >
              <service.icon className="w-5 h-5 text-[#A1A1AA] group-hover:text-accent transition-colors duration-300" />
              <h3 className="mt-6 text-sm font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                {service.description}
              </p>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}