'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import ShinyButton from './ShinyButton'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScroll = useRef(0)
  const scrollY = useMotionValue(0)
  const springY = useSpring(scrollY, { stiffness: 200, damping: 25 })

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 40)

      const dir = current > lastScroll.current ? 'down' : 'up'
      if (dir === 'down' && current > 80) {
        scrollY.set(-100)
      } else {
        scrollY.set(0)
      }
      lastScroll.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY])

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <motion.header
      style={{ y: springY }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090909]/80 backdrop-blur-xl border-b border-[#27272A]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-app flex items-center justify-between h-16 sm:h-20">
        <a
          href="/"
          className="text-lg font-semibold text-white tracking-tight hover:text-accent transition-colors duration-300"
        >
          Sericaway
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <ShinyButton
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(e, '#contact')
            }}
          >
            Book a Call
          </ShinyButton>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-[#A1A1AA] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#27272A] bg-[#090909]"
          >
            <div className="container-app py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <ShinyButton
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(e, '#contact')
                }}
              >
                Book a Call
              </ShinyButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
