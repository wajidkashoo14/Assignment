'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: 'Lighting Control',
    description: 'Transform your space with a single tap using intelligent light design',
    icon: '💡',
  },
  {
    title: 'Climate Control',
    description: 'Set the perfect temperature for every mood and moment',
    icon: '🌡️',
  },
  {
    title: 'Curtain Control',
    description: 'Let natural light and privacy dance together through smart scenes',
    icon: '🪟',
  },
  {
    title: 'Media Control',
    description: 'Elevate ambience with perfectly synced music and media',
    icon: '🎵',
  },
]

export default function AmbienceControl() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.2    // lower threshold = animations trigger earlier on mobile
  })

  return (
    <section 
      id="features" 
      ref={ref} 
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            A Home That Perceives
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-4 sm:mb-6">
            Ambience Control
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-2 sm:px-0">
            Light, climate, media, and blinds — all converging with one tap to craft the perfect mood, every time.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12,          // tighter stagger on mobile
                ease: 'easeOut'
              }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-400 ease-out">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Accent line – full width on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent rounded-full w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* Visual Element / Hero-like placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 sm:mt-20 md:mt-24 relative"
        >
          <div className="aspect-[4/3] sm:aspect-video bg-gradient-to-br from-primary via-primary-light to-accent/20 rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-white text-7xl sm:text-8xl md:text-9xl"
              >
                🏡
              </motion.div>
            </div>
            
            {/* Overlay text – responsive sizing */}
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 md:px-16">
              <p className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-center tracking-tight drop-shadow-md">
                Your Space, Perfected
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}