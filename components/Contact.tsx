'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faSteam } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:ashaykargaonkar@gmail.com',
      className: 'text-yellow-400'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/ashay-kargaonkar/',
      className: 'text-blue-500'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/ashaykargaonkar',
      className: 'text-gray-400'
    },
    {
      name: 'Steam',
      icon: faSteam,
      url: 'https://steamcommunity.com/profiles/76561198092074294',
      className: 'text-purple-500'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/ashay_kargaonkar?utm_source=qr&igsh=Z3JqYnkzZHBoNXk0',
      className: 'text-pink-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Connect With Me</h2>
          <p className="text-gray-300 mb-12">Let's connect on social media!</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center group`}
              >
                <div className={`text-2xl mr-2 ${link.className} group-hover:text-white`}>
                  <FontAwesomeIcon icon={link.icon} />
                </div>
                <span className="text-gray-300 group-hover:text-white">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
