'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WeightHover from './WeightHover'
import ShinyButton from './ShinyButton'
import { Linkedin, Instagram, Mail, CheckCircle } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Email', href: 'mailto:hello@sericaway.com', icon: Mail },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to submit')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    }
  }

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
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
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
            transition={{ duration: 0.3, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#111111] rounded-2xl border border-[#27272A] p-8 sm:p-10 lg:p-12"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Thanks, {formData.name}!</h3>
                <p className="text-[#A1A1AA] text-sm max-w-md">
                  We&rsquo;ve received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                    value={formData.company}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#090909] border border-[#27272A] text-white text-sm placeholder-[#52525B] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300 resize-none"
                    placeholder="Tell us about what you'd like to automate..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}

                <ShinyButton
                  type="submit"
                  className="w-full justify-center"
                >
                  Book a Discovery Call
                </ShinyButton>
              </form>
            )}

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