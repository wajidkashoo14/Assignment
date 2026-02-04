'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Smart App', 'Console', 'Hub', 'Lighting'],
    Company: ['About', 'Team', 'Careers', 'Partners'],
    Support: ['Documentation', 'Contact', 'FAQs', 'Downloads'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
  }

  return (
    <footer className="bg-gradient-to-b from-primary-light to-primary text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 xl:gap-12 mb-12 md:mb-16">
          {/* Brand + Social Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3">
                <span className="text-white">SMART</span>
                <span className="text-accent">HOME</span>
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed">
                Premium smart home systems designed for distinctive spaces. 
                Transform your living experience with intelligent automation.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: '📘', label: 'Facebook', href: '#' },
                { icon: '📷', label: 'Instagram', href: '#' },
                { icon: '💼', label: 'LinkedIn', href: '#' },
                { icon: '🐦', label: 'Twitter', href: '#' },
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-lg sm:text-xl hover:bg-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.07 + 0.15, duration: 0.5 }}
            >
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-accent">
                {category}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-white/70 hover:text-white transition-colors duration-300 block py-0.5"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 sm:mb-12 md:mb-16 rounded-2xl bg-white/5 backdrop-blur-sm p-6 sm:p-8 border border-white/10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-display font-semibold mb-2">
                Stay Updated
              </h4>
              <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto md:mx-0">
                Subscribe for the latest smart home innovations and updates
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 rounded-full bg-white/10 px-5 py-3 text-white placeholder-white/50 border border-white/20 focus:border-accent focus:outline-none transition-colors text-sm sm:text-base"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-primary hover:bg-accent-light transition-all duration-300 whitespace-nowrap shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:justify-between sm:items-center text-sm text-white/60">
            <p>
              Copyright © {currentYear} SmartHome. All rights reserved.
            </p>
            <div className="flex justify-center gap-5 sm:gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}