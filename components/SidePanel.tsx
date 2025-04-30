'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faSteam } from '@fortawesome/free-brands-svg-icons'

interface SidePanelProps {
  isOpen: boolean
  isChatOpen: boolean
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, isChatOpen }) => {
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
<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  className={`fixed right-4 top-1/3 -translate-y-1/2 w-48 bg-gray-800 rounded-xl p-4 shadow-xl z-50 side-panel ${isOpen && !isChatOpen ? 'hidden md:block' : 'hidden'}`}
>
      <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
      
      <div className="space-y-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors`}
          >
            <div className={`text-xl mr-3 ${link.className}`}>
              <FontAwesomeIcon icon={link.icon} />
            </div>
            <span className="text-white text-sm">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default SidePanel
