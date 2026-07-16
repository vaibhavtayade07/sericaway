'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const orbs = [
  {
    size: 600,
    color: 'radial-gradient(circle at 30% 30%, rgba(200,155,94,0.15), transparent 70%)',
    xRange: [-80, 120],
    yRange: [-60, 100],
    duration: 12,
    delay: 0,
    initialX: 100,
    initialY: -80,
  },
  {
    size: 450,
    color: 'radial-gradient(circle at 70% 20%, rgba(59,130,246,0.08), transparent 70%)',
    xRange: [40, -60],
    yRange: [80, -40],
    duration: 14,
    delay: 2,
    initialX: -120,
    initialY: 60,
  },
  {
    size: 350,
    color: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.06), transparent 70%)',
    xRange: [-40, 80],
    yRange: [-100, 20],
    duration: 10,
    delay: 4,
    initialX: 80,
    initialY: 160,
  },
  {
    size: 250,
    color: 'radial-gradient(circle at 60% 40%, rgba(168,85,247,0.04), transparent 70%)',
    xRange: [60, -100],
    yRange: [-30, 90],
    duration: 13,
    delay: 1,
    initialX: -60,
    initialY: -120,
  },
]

export default function AmbientOrbs() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            filter: 'blur(60px)',
            left: '50%',
            top: '50%',
            x: orb.initialX,
            y: orb.initialY,
            marginLeft: -orb.size / 2,
            marginTop: -orb.size / 2,
          }}
          animate={{
            x: [orb.initialX, orb.initialX + orb.xRange[0], orb.initialX + orb.xRange[1], orb.initialX],
            y: [orb.initialY, orb.initialY + orb.yRange[0], orb.initialY + orb.yRange[1], orb.initialY],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  )
}
