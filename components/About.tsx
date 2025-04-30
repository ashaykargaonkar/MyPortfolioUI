'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Myself</h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mb-8 leading-relaxed"
          >
            Hello! I'm Ashay Kargaonkar, a passionate <span className="text-blue-400 font-semibold">Software Engineer</span> based in Chicago, IL. With <span className="text-blue-400 font-semibold">4+</span> years of professional experience, I specialize in <span className="text-blue-400 font-semibold">backend web API development</span>, cloud-based application deployment on <span className="text-blue-400 font-semibold">AWS</span>, and advanced <span className="text-blue-400 font-semibold">data analytics</span>, leveraging cutting-edge technologies to build scalable and impactful solutions.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 mb-8 leading-relaxed"
          >
            Throughout my career, I've worked on diverse projects, including successfully migrating legacy systems, developing <span className="text-blue-400 font-semibold">machine learning</span> models to optimize processes, and applying data analytics to deliver actionable insights. I take pride in blending technical expertise with creativity to solve complex challenges and build impactful solutions.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 mb-8 leading-relaxed"
          >
            Outside of work, I am an avid <span className="text-blue-400 font-semibold">Table-Tennis</span> player and <span className="text-blue-400 font-semibold">Chess</span> enthusiast, enjoying the balance of strategy, skill, and precision these games demand. I also find time to relax with online games, which keep me engaged and curious about new challenges and experiences. Exploring new technologies and learning continuously are integral parts of who I am.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 leading-relaxed"
          >
            I aim to grow as a leader in software development, combining my technical skills, machine learning expertise, and <span className="text-blue-400 font-semibold">business acumen</span> to drive innovative projects that make a meaningful impact. Additionally, I aspire to develop groundbreaking ideas that leverage my entrepreneurial mindset to create practical, high-impact solutions that can benefit industries and society.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
