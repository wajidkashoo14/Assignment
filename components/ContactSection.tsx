'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 }) // lower threshold = earlier trigger

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    propertySize: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    // Reset form (optional)
    // setFormData({ name: '', email: '', ... })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-24 lg:py-32 text-white"
    >
      {/* Background decoration - smaller & better positioned on mobile */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 text-center sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl font-display font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Living Experience
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 font-light max-w-3xl mx-auto px-2 sm:px-0">
            Register for an exclusive smart home demo at our custom-built studio apartment
          </p>
        </motion.div>

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
          {/* ─── Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-accent focus:outline-none transition-colors"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="block w-full appearance-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-primary text-gray-300">Select type</option>
                    <option value="Independent Home">Independent Home</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Office">Office</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Property Size</label>
                  <select
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    required
                    className="block w-full appearance-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-primary text-gray-300">Select size</option>
                    <option value="1500-2000">1500 - 2000 sq ft</option>
                    <option value="2000-3000">2000 - 3000 sq ft</option>
                    <option value="3000-4000">3000 - 4000 sq ft</option>
                    <option value="4000+">4000+ sq ft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-full bg-accent px-6 py-3.5 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-accent-light sm:py-4 sm:text-xl"
              >
                Request Demo
              </motion.button>
            </form>
          </motion.div>

          {/* ─── Contact Info + Why Choose Us ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="space-y-8 lg:space-y-10"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="mb-6 text-2xl font-display font-semibold text-accent sm:text-3xl">
                Get in Touch
              </h3>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl">📞</div>
                  <div>
                    <p className="mb-1 text-sm text-white/70">Call us</p>
                    <a
                      href="tel:+919392905179"
                      className="text-lg font-semibold hover:text-accent transition-colors sm:text-xl"
                    >
                      +91 93929 05179
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl">✉️</div>
                  <div>
                    <p className="mb-1 text-sm text-white/70">Email us</p>
                    <a
                      href="mailto:info@smarthome.in"
                      className="text-lg font-semibold hover:text-accent transition-colors sm:text-xl"
                    >
                      info@smarthome.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl">📍</div>
                  <div>
                    <p className="mb-1 text-sm text-white/70">Visit us</p>
                    <p className="text-base sm:text-lg">Experience Centers Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 sm:p-8">
              <h4 className="mb-4 text-xl font-display font-semibold sm:text-2xl">Why Choose Us?</h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Premium quality products',
                  'Expert installation & support',
                  'Customized solutions',
                  'Lifetime warranty',
                  'Smart home expertise',
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}