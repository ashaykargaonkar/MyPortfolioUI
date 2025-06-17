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
                I'm a Software Engineer and Machine Learning enthusiast with 4+ years of experience blending backend development with AI-powered solutions. I specialize in building scalable APIs using C# and .NET, deploying cloud-native systems on AWS, and applying machine learning to solve real-world problems.
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
                My work includes ThinkMoves — an AI-driven platform that converts handwritten chess scoresheets into digital PGNs using OCR, computer vision, and cloud automation — and AshayTalks, a personal AI chatbot built to make my career story instantly accessible.
              </Highlight>
              <Highlight>
                With a Master's in Computer Science and hands-on experience across full-stack development, cloud infrastructure, and applied machine learning, I bring both technical depth and a product-focused mindset. Based in Chicago and open to relocation, I’m passionate about building tools that sit at the intersection of software, data, and user impact.
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
