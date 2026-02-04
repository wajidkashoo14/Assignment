'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const intelligentFeatures = [
  {
    title: 'Proactive Response',
    description: 'Smart routines that anticipate and handle your daily needs automatically',
    icon: '⏰',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Reactive Intelligence',
    description: 'Intuitive sensors deliver instant convenience and enhanced security',
    icon: '🎯',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Motion Sensors',
    description: 'Advanced detection automatically adjusts lighting, climate & security',
    icon: '📡',
    gradient: 'from-pink-500 to-red-500',
  },
]

export default function IntelligentSpaces() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.2   // triggers earlier → better mobile feel
  })

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-24 lg:py-32 text-white"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px sm:40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            A Home That Senses
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6">
            Intelligent Spaces
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-light px-2 sm:px-0">
            Automated routines and sensory intelligence — redefining everyday comfort
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-16 md:mb-20 lg:mb-24">
          {intelligentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12, 
                ease: 'easeOut' 
              }}
              className="group relative h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 hover:border-accent/40 transition-all duration-400 hover:scale-[1.02] hover:shadow-xl">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} text-3xl sm:text-4xl shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo / Routines Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left – Text Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-5 sm:mb-6">
                Automated Daily Routines
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Wake gently, come home to comfort, sleep peacefully — your home learns and adapts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {['Morning Scene', 'Away Mode', 'Evening Relaxation', 'Sleep Mode'].map((routine, idx) => (
                  <motion.div
                    key={routine}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + idx * 0.12, duration: 0.6 }}
                    className="flex items-center gap-3 justify-center md:justify-start"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-medium text-base sm:text-lg">{routine}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right – Visual Element */}
            <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent/30 via-purple-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl"
              />

              <div className="relative h-full bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/15 p-6 sm:p-8 flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                    className="text-7xl sm:text-8xl md:text-9xl mb-4 sm:mb-6 opacity-90"
                  >
                    🏠
                  </motion.div>
                  <p className="text-accent font-semibold text-lg sm:text-xl">
                    Smart Home Hub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}