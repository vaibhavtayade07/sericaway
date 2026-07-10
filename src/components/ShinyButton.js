'use client'

export default function ShinyButton({ children, className = '', ...props }) {
  return (
    <button
      className={`relative px-8 py-3.5 rounded-lg bg-accent text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:bg-accent-600 glow ${className}`}
      {...props}
    >
      <style dangerouslySetInnerHTML={{
        __html: `@keyframes shinySweep {
          0% { mask-position: 200%; -webkit-mask-position: 200%; }
          100% { mask-position: -100%; -webkit-mask-position: -100%; }
        }`
      }} />
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 z-20 flex items-center justify-center text-white pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)',
          maskImage: 'linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)',
          WebkitMaskSize: '200% auto',
          maskSize: '200% auto',
          animation: 'shinySweep 2.5s ease-in-out infinite',
        }}
      >
        {children}
      </span>
    </button>
  )
}