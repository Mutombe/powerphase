import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-power-dark">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      {/* Pulsing circles */}
      <div className="absolute w-48 h-48 rounded-full border border-power-orange/20 animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute w-32 h-32 rounded-full border border-power-orange/30 animate-ping" style={{ animationDuration: '1.5s' }} />
      
      {/* Center logo animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Lightning bolt SVG */}
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 32 32"
          className="drop-shadow-[0_0_20px_rgba(242,123,32,0.6)]"
          animate={{ 
            filter: [
              'drop-shadow(0 0 10px rgba(242,123,32,0.4))',
              'drop-shadow(0 0 30px rgba(242,123,32,0.8))',
              'drop-shadow(0 0 10px rgba(242,123,32,0.4))',
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path d="M18 4L8 18h6l-2 10 10-14h-6z" fill="#F27B20" />
        </motion.svg>
        
        {/* Company name */}
        <div className="text-center">
          <motion.h2
            className="text-xl font-heading font-bold text-white tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            POWERPHASE
          </motion.h2>
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-power-orange to-transparent mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
        
        {/* Loading dots */}
        <div className="flex gap-2 mt-2">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-power-orange"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
