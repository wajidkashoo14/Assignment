'use client'

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import AmbienceControl from '@/components/AmbienceControl'
import IntelligentSpaces from '@/components/IntelligentSpaces'
import IntuitiveInterfaces from '@/components/IntuitiveInterfaces'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <AmbienceControl />
      <IntelligentSpaces />
      <IntuitiveInterfaces />
      <ContactSection />
      <Footer />
    </main>
  )
}
