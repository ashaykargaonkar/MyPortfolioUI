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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">About Myself</h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg lg:text-xl"
          >
            I'm based in <span className="text-blue-400 font-semibold">Chicago, IL</span>, and bring a <span className="text-blue-400 font-semibold">product-focused</span> mindset to every project I take on. From modernizing <span className="text-blue-400 font-semibold">legacy systems</span> to designing <span className="text-blue-400 font-semibold">intelligent tools</span> for <span className="text-blue-400 font-semibold">automation</span> and <span className="text-blue-400 font-semibold">data insights</span>, I enjoy turning complex problems into elegant <span className="text-blue-400 font-semibold">software solutions</span>.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg lg:text-xl"
          >
            With <span className="text-blue-400 font-semibold">4+ years</span> of experience in <span className="text-blue-400 font-semibold">backend development</span> and <span className="text-blue-400 font-semibold">cloud architecture</span>, I've successfully delivered projects ranging from <span className="text-blue-400 font-semibold">scalable API</span> development to <span className="text-blue-400 font-semibold">machine learning</span> implementations. My approach combines <span className="text-blue-400 font-semibold">technical expertise</span> with a keen eye for creating <span className="text-blue-400 font-semibold">practical, user-focused solutions</span>.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 leading-relaxed text-base md:text-lg lg:text-xl"
          >
            Outside of work, I'm a passionate <span className="text-blue-400 font-semibold">table tennis</span> player and <span className="text-blue-400 font-semibold">chess</span> enthusiast — always seeking that perfect balance of <span className="text-blue-400 font-semibold">strategy and precision</span>. I value <span className="text-blue-400 font-semibold">continuous learning</span> and aim to grow as a <span className="text-blue-400 font-semibold">technical leader</span>, blending <span className="text-blue-400 font-semibold">software development</span>, <span className="text-blue-400 font-semibold">machine learning</span>, and <span className="text-blue-400 font-semibold">entrepreneurial thinking</span> to deliver tools that make a <span className="text-blue-400 font-semibold">real-world impact</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
