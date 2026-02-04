'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const interfaces = [
  {
    name: 'Smart Console',
    description: 'The central switch system your home deserves',
    icon: '🎛️',
    features: ['Touch Control', 'Scene Management', 'Status Display', 'Elegant Design'],
  },
  {
    name: 'Mobile App',
    description: 'Full control from anywhere in the world',
    icon: '📱',
    features: ['Remote Access', 'Real-time Status', 'Energy Monitoring', 'Notifications'],
  },
  {
    name: 'Voice Control',
    description: 'Hands-free with Alexa & Google Home',
    icon: '🗣️',
    features: ['Hands-free Control', 'Natural Commands', 'Multi-room Audio', 'Smart Routines'],
  },
  {
    name: 'Scene Wizard',
    description: 'Portable one-touch room controller',
    icon: '🪄',
    features: ['Wireless', 'One-touch Scenes', 'Portable', 'Premium Finish'],
  },
]

export default function IntuitiveInterfaces() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.15 })
  const [activeInterface, setActiveInterface] = useState(0)

  return (
    <section
      id="interfaces"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            A Home That Responds
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-4 sm:mb-6">
            Intuitive Interfaces
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-2 sm:px-0">
            Choose how you want to interact — from touch to voice to app
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left: Interface Selector List */}
          <div className="space-y-4 sm:space-y-5">
            {interfaces.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setActiveInterface(index)}
                className={`cursor-pointer rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-400 border ${
                  activeInterface === index
                    ? 'bg-primary text-white shadow-xl scale-[1.02] border-primary'
                    : 'bg-white text-primary shadow-md hover:shadow-lg hover:scale-[1.01] border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`text-4xl sm:text-5xl transition-transform duration-300 ${
                      activeInterface === index ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-display font-semibold mb-1.5 sm:mb-2">
                      {item.name}
                    </h3>
                    <p
                      className={`text-sm sm:text-base mb-3 sm:mb-4 ${
                        activeInterface === index ? 'text-white/80' : 'text-gray-600'
                      }`}
                    >
                      {item.description}
                    </p>

                    {activeInterface === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.4 }}
                        className="space-y-1.5 sm:space-y-2 pt-2"
                      >
                        {item.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-center gap-2.5 text-sm sm:text-base text-white/90"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>

                  <div
                    className={`text-xl sm:text-2xl transition-transform duration-400 self-center ${
                      activeInterface === index ? 'rotate-90' : 'rotate-0'
                    }`}
                  >
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Visual Preview (sticky on desktop, static on mobile) */}
          <div className="lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-primary-light"
            >
              {/* Background transition */}
              <motion.div
                key={activeInterface}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent"
              />

              <div className="relative h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-12 py-10 sm:py-12">
                <motion.div
                  key={`icon-${activeInterface}`}
                  initial={{ scale: 0.5, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-8xl sm:text-9xl md:text-[10rem] mb-6 sm:mb-8"
                >
                  {interfaces[activeInterface].icon}
                </motion.div>

                <motion.h3
                  key={`title-${activeInterface}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white text-center mb-3 sm:mb-4"
                >
                  {interfaces[activeInterface].name}
                </motion.h3>

                <motion.p
                  key={`desc-${activeInterface}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white/85 text-center max-w-md"
                >
                  {interfaces[activeInterface].description}
                </motion.p>

                {/* Decorative orbiting rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-6 sm:top-8 right-6 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 border-2 border-accent/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-10 sm:w-14 h-10 sm:h-14 border-2 border-accent/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}