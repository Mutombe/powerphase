import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Home, Zap } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-power-dark flex items-center justify-center relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-power-orange/10 rounded-full blur-[150px]" />

      <div className="relative text-center px-4 py-32">
        {/* Animated lightning bolt */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block mb-8"
        >
          <svg width="80" height="80" viewBox="0 0 32 32" className="drop-shadow-[0_0_30px_rgba(242,123,32,0.5)]">
            <path d="M18 4L8 18h6l-2 10 10-14h-6z" fill="#F27B20" />
          </svg>
        </motion.div>

        {/* 404 number */}
        <motion.h1
          className="text-8xl md:text-[12rem] font-heading font-bold text-white/5 leading-none select-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="-mt-16 md:-mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Circuit <span className="text-gradient-orange">Broken</span>
          </h2>
          <p className="text-white/50 font-body mt-4 max-w-md mx-auto">
            Looks like this page has been disconnected. Let's get you back on the main circuit.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-power-orange text-white font-accent font-bold rounded-xl hover:bg-power-orange-dark transition-all hover:shadow-glow"
          >
            <Home size={18} /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 border-2 border-white/15 text-white font-accent font-medium rounded-xl hover:border-power-orange/50 transition-all"
          >
            Contact Support <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
