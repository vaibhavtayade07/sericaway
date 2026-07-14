'use client'

import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import ShinyButton from './ShinyButton'
import { Linkedin, Instagram, Mail } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Email', href: 'mailto:hello@sericaway.com', icon: Mail },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#090909] relative overflow-hidden">
      <div className="section-shape section-shape-2" aria-hidden="true" />
      <div className="section-shape section-shape-3" aria-hidden="true" />
      <div className="container-app">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl mb-16 sm:mb-20"
          >
            <WeightHover className="heading-lg text-white">
              Let&rsquo;s build something
            </WeightHover>
            <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
              Tell us about your business and what you&rsquo;re trying to
              automate. We&rsquo;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#111111] rounded-2xl border border-[#27272A] p-8 sm:p-10 lg:p-12"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#090909] border border-[#27272A] text-white text-sm placeholder-[#52525B] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#090909] border border-[#27272A] text-white text-sm placeholder-[#52525B] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-[#090909] border border-[#27272A] text-white text-sm placeholder-[#52525B] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                  placeholder="Company name (optional)"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#090909] border border-[#27272A] text-white text-sm placeholder-[#52525B] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300 resize-none"
                  placeholder="Tell us about what you'd like to automate..."
                />
              </div>
              <ShinyButton
                type="submit"
                className="w-full justify-center"
              >
                Book a Discovery Call
              </ShinyButton>
            </form>

            <div className="mt-8 pt-8 border-t border-[#27272A] flex items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-9 h-9 rounded-full border border-[#27272A] text-[#52525B] flex items-center justify-center hover:border-[#A1A1AA] hover:text-[#A1A1AA] transition-all duration-300"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}