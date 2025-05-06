'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills</h2>

          {/* Key Skills Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Key Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-400">.NET C# Web API Development</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">C#</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">.NET</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Web API</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">ASP.NET</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-400">AWS Cloud</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">AWS DynamoDB</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">AWS Lambda</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">AWS S3</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">AWS EKS</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-400">Machine Learning</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">TensorFlow</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">PyTorch</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Scikit-learn</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Skills Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Additional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Programming & Web Development</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Python</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">SQL</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">React</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">HTML</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">CSS</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-400">DevOps & Data Visualization</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Docker</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Harness</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Veracode</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Postman</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">Tableau</span>
                  <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-400">ggplot2</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
