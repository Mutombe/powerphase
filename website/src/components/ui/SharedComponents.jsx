import React from 'react'
import { motion } from 'framer-motion'
import { useInView, useCountUp } from '../../hooks/useAnimations'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// Animated section wrapper with intersection observer
export function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  
  const variants = {
    up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    scale: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

// Animated counter
export function Counter({ end, suffix = '', prefix = '', label, duration = 2000 }) {
  const [ref, count] = useCountUp(end, duration)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-white">
        {prefix}<span className="text-gradient-orange">{count}</span>{suffix}
      </div>
      <div className="text-white/40 font-accent text-sm mt-2 uppercase tracking-wider">{label}</div>
    </div>
  )
}

// Glowing card component
export function GlowCard({ children, className = '', hoverGlow = true }) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={hoverGlow ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      {hoverGlow && (
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-power-orange/20 via-power-orange/10 to-power-orange/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      )}
      <div className="relative bg-white rounded-2xl border border-power-gray-pale/50 p-6 md:p-8 shadow-card group-hover:shadow-card-hover transition-all duration-500 overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-power-orange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

// Dark theme glow card
export function DarkCard({ children, className = '' }) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-power-orange/30 to-power-orange/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
      <div className="relative bg-power-dark-light/80 backdrop-blur-sm rounded-2xl border border-white/5 group-hover:border-power-orange/20 p-6 md:p-8 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

// Section heading component
export function SectionHeading({ overline, title, description, align = 'left', dark = false }) {
  return (
    <AnimatedSection className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {overline && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-accent font-semibold tracking-[0.15em] uppercase mb-4 ${
          dark 
            ? 'bg-power-orange/10 text-power-orange border border-power-orange/20' 
            : 'bg-power-dark/5 text-power-orange'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-power-orange animate-pulse" />
          {overline}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight ${dark ? 'text-white' : 'text-power-dark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg font-body leading-relaxed ${dark ? 'text-white/50' : 'text-power-gray-mid'}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}

// CTA Button
export function CTAButton({ to, children, variant = 'primary', className = '', icon = true }) {
  const base = 'inline-flex items-center gap-2 font-accent font-semibold text-sm rounded-xl transition-all duration-300 group'
  const variants = {
    primary: 'px-6 py-3 bg-power-orange text-white hover:bg-power-orange-dark hover:shadow-glow',
    secondary: 'px-6 py-3 bg-white text-power-dark hover:bg-power-gray-pale border border-power-gray-pale',
    outline: 'px-6 py-3 border-2 border-power-orange text-power-orange hover:bg-power-orange hover:text-white',
    'outline-white': 'px-6 py-3 border-2 border-white/20 text-white hover:border-power-orange hover:text-power-orange',
    ghost: 'px-4 py-2 text-power-orange hover:bg-power-orange/10',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
    </Link>
  )
}

// Decorative lightning bolt SVG
export function LightningBolt({ className = '', size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`${className}`}>
      <path d="M18 4L8 18h6l-2 10 10-14h-6z" fill="currentColor" />
    </svg>
  )
}

// Geometric decoration
export function GeometricDecor({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="absolute top-10 right-10 w-20 h-20 border border-power-orange/10 rotate-45 rounded-lg" />
      <div className="absolute top-24 right-24 w-12 h-12 border border-power-orange/20 rotate-12 rounded-lg" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-power-orange/10 -rotate-12 rounded-full" />
    </div>
  )
}

// Image with loading effect
export function OptimizedImage({ src, alt, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  )
}
