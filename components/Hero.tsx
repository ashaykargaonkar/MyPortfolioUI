'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Highlight = ({ children }: { children: string }) => {
  const keywords = [
    'Software Engineer', 'Data Scientist', 'C#', '.NET', 'backend APIs',
    'AWS', 'AshayTalks', 'chatbot', 'ThinkMoves', 'OCR-driven',
    'chess analytics', 'Master\'s', 'Computer Science', 'clean architecture',
    'automation', 'Chicago', 'relocation', 'software', 'data', 'innovation'
  ]

  const words = children.split(' ')
  return (
    <span>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '')
        if (keywords.includes(cleanWord)) {
          return (
            <span key={index} className="text-blue-400">
              {word}{' '}
            </span>
          )
        }
        return word + ' '
      })}
    </span>
  )
}

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
              <Highlight>
                I'm a Software Engineer and Data Scientist with 4+ years of experience, including 3+ years building robust backend APIs using C# .NET and integrating systems with AWS. I specialize in combining engineering with AI to build real-world tools—like AshayTalks, a chatbot showcasing my journey and work, and ThinkMoves, an OCR-driven chess analytics platform.
              </Highlight>
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
              <Highlight>
                With a Master's in Computer Science, I bring strong technical expertise and a product-driven mindset. I'm passionate about clean architecture, automation, and transforming ideas into impactful solutions. Based in Chicago and open to relocation, I'm eager to collaborate on meaningful projects at the intersection of software, data, and innovation.
              </Highlight>
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
