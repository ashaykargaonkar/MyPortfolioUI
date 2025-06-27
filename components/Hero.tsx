'use client'

import React from 'react'
import { motion } from 'framer-motion'

const textBlue = 'text-blue-400'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center items-center p-8 sm:p-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Animated Hello Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            >
              Hi,
            </motion.h1>
          </motion.div>

          {/* Animated Name Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              I'm Ashay Kargaonkar
            </motion.h2>
          </motion.div>

          {/* Animated Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-base md:text-lg lg:text-xl text-gray-300"
            >
              I'm a <span className={textBlue}>Software Engineer</span> and <span className={textBlue}>Machine Learning</span> enthusiast with <span className={textBlue}>4+ years</span> of experience blending <span className={textBlue}>backend development</span> with AI-powered solutions. I specialize in building scalable <span className={textBlue}>RESTful APIs</span> using <span className={textBlue}>C#</span> and <span className={textBlue}>.NET</span>, deploying cloud-native systems on <span className={textBlue}>AWS</span>, and applying machine learning to solve real-world problems.
            </motion.p>
          </motion.div>

          {/* Animated Additional Info Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-base md:text-lg lg:text-xl text-gray-300"
            >
              My work includes <span className={textBlue}>ThinkMoves</span> — an AI-driven platform that converts handwritten chess scoresheets into digital PGNs using <span className={textBlue}>OCR</span>, <span className={textBlue}>computer vision</span>, and cloud automation — and <span className={textBlue}>AshayTalks</span>, a <span className={textBlue}>AI chatbot</span> built to make my career story instantly accessible.
              With a <span className={textBlue}>Master's</span> in <span className={textBlue}>Computer Science</span> and hands-on experience across <span className={textBlue}>full-stack development</span>, <span className={textBlue}>cloud infrastructure</span>, and applied <span className={textBlue}>machine learning</span>, I bring both technical depth and a product-focused mindset. Based in <span className={textBlue}>Chicago</span> and <span className={textBlue}>open to relocation</span>, I’m passionate about building tools that sit at the intersection of software, data, and user impact.
            </motion.p>
          </motion.div>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/AshayKargaonkarResume.pdf"
              className="inline-block bg-blue-400 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
