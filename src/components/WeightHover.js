'use client'

import { useEffect, useRef } from 'react'
import { stagger, useAnimate } from 'framer-motion'

export default function WeightHover({
  children,
  as: Tag = 'h2',
  className = '',
  fromWeight = 400,
  toWeight = 700,
}) {
  const [scope, animate] = useAnimate()
  const hoveredRef = useRef(false)

  const text = typeof children === 'string' ? children : ''
  const letters = text.split('')

  useEffect(() => {
    const run = (w) => {
      animate(
        '.wh-letter',
        { fontVariationSettings: `'wght' ${w}` },
        { delay: stagger(0.02, { from: 'center' }), type: 'spring', duration: 0.6, bounce: 0.1 }
      )
    }
    const el = scope.current
    if (!el) return

    const onEnter = () => { hoveredRef.current = true; run(toWeight) }
    const onLeave = () => { hoveredRef.current = false; run(fromWeight) }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [scope, animate, fromWeight, toWeight])

  if (!text) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Tag ref={scope} className={className} style={{ cursor: 'default' }}>
      <style>{`
        @font-face {
          font-family: 'InterVariable';
          src: url('https://rsms.me/inter/font-files/InterVariable.woff2?v=4.0') format('woff2-variations');
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      <span aria-hidden="true">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="wh-letter"
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              fontFamily: '"InterVariable", "Inter", system-ui, sans-serif',
              fontVariationSettings: `'wght' ${fromWeight}`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  )
}