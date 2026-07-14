'use client'

import { useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const num = parseInt(value, 10)
  const spring = useSpring(0, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v).toString())

  if (inView) spring.set(num)

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
