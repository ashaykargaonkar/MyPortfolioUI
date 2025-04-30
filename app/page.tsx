'use client'

import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Certifications from '../components/Certifications'
import Chatbot from '../components/Chatbot'
import Navbar from '../components/Navbar'
import SidePanel from '../components/SidePanel'
import { motion } from 'framer-motion'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Chatbot onOpenChange={setIsChatOpen} />
      <main className="min-h-screen relative pt-28">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 sm:px-8 lg:px-12 py-12 max-w-7xl"
        >
          <div className="space-y-24">
            <Hero />
            <About />
            <WorkExperience />
            <Projects />
            <Skills />
            <Certifications />
          </div>

          <SidePanel isOpen={!isChatOpen} />
        </motion.div>
      </main>
    </div>
  )
}
