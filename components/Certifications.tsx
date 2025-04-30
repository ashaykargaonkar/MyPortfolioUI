'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      platform: "Udemy",
      icon: "aws"
    },
    {
      name: "AWS AI Practitioner",
      platform: "Udemy",
      icon: "aws"
    },
    {
      name: "Machine Learning A-Z",
      platform: "Udemy",
      icon: "ml"
    },
    {
      name: "Deep Learning A-Z",
      platform: "Udemy",
      icon: "dl"
    },
    {
      name: "Crash Course Electronics",
      platform: "Udemy",
      icon: "electronics"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                    <span className="text-blue-400 font-semibold text-lg">{cert.icon === 'aws' ? 'AWS' : cert.icon === 'ml' ? 'ML' : cert.icon === 'dl' ? 'DL' : 'E'}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{cert.name}</h3>
                    <p className="text-gray-300">{cert.platform}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
