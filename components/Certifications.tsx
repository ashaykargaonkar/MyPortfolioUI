'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      year: "2023",
      platform: "Udemy",
      icon: "aws",
      pdf: "/CloudPrac.pdf"
    },
    {
      name: "AWS AI Practitioner",
      year: "2025",
      platform: "Udemy",
      icon: "aws",
      pdf: "/AIPrac.pdf"
    },
    {
      name: "Machine Learning A-Z",
      year: "2023",
      platform: "Udemy",
      icon: "ml",
      pdf: "/MachineLearning.pdf"
    },
    {
      name: "Deep Learning A-Z",
      year: "2023",
      platform: "Udemy",
      icon: "dl",
      pdf: "/DeepLearning.pdf"
    },
    {
      name: "Crash Course Electronics",
      year: "Ongoing",
      platform: "Udemy",
      icon: "electronics",
      pdf: "https://www.udemy.com/course/crash-course-electronics-and-pcb-design/"
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
          className="max-w-6xl mx-auto text-center text-white"
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
                    <div className="w-full">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-blue-400 whitespace-nowrap">
                          {cert.name}
                        </h3>
                        <span className="text-sm text-gray-400 bg-gray-700 px-2 py-0.5 rounded ml-2 whitespace-nowrap">
                          {cert.year}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm">{cert.platform}</p>
                        <Link 
                          href={cert.pdf} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-900/50 hover:bg-blue-800/70 text-blue-300 hover:text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-1 border border-blue-800/70 hover:border-blue-600/70"
                        >
                          <span>View Certificate</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
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
