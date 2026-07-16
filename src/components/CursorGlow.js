'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 })

  useEffect(() => {
    setMounted(true)
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const leave = () => {
      mouseX.set(-1000)
      mouseY.set(-1000)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[1]"
      style={{
        x: springX,
        y: springY,
        width: 600,
        height: 600,
        marginLeft: -300,
        marginTop: -300,
        background:
          'radial-gradient(circle at center, rgba(200,155,94,0.08), transparent 60%)',
      }}
    />
  )
}
