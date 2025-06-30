'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faSteam } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 1, text: 'Work Experience', href: '#work-experience' },
    { id: 2, text: 'Projects', href: '#projects' },
    { id: 3, text: 'Skills', href: '#skills' }
  ]

  const handleScroll = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 72
      const elementTop = element.getBoundingClientRect().top
      const offsetTop = elementTop + window.pageYOffset - offset
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [isMenuOpen])

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-40 h-28">
      <div className="container mx-auto px-6 flex items-center h-full">
        <div className="flex flex-row items-center justify-between w-full">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
            >
              Ashay
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map(item => (
              <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.href} onClick={(e) => handleScroll(e, item.href.substring(1))} className="text-white hover:text-blue-500 transition-colors">
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:ashaykargaonkar@gmail.com" className="text-yellow-400 hover:text-yellow-300">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/ashay-kargaonkar/" className="text-blue-500 hover:text-blue-400">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/ashaykargaonkar" className="text-gray-400 hover:text-gray-300">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://steamcommunity.com/profiles/76561198092074294" className="text-purple-500 hover:text-purple-400">
              <FontAwesomeIcon icon={faSteam} size="lg" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.instagram.com/ashay_kargaonkar?utm_source=qr&igsh=Z3JqYnkzZHBoNXk0" className="text-pink-500 hover:text-pink-400">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </motion.a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col items-center justify-center h-screen p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }} 
              transition={{ type: 'spring', stiffness: 300, damping: 25 }} 
              className="relative z-50 w-full max-w-xs bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-2xl px-6 py-8 flex flex-col items-center justify-center"
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-2 right-2 text-gray-400 hover:text-white text-lg">
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <div className="w-full space-y-4 mt-6">
                {menuItems.map(item => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.id * 0.05, type: 'spring', stiffness: 300 }}
                    className="w-full"
                  >
                    <Link 
                      href={item.href} 
                      onClick={(e) => handleScroll(e, item.href.substring(1))} 
                      className="block w-full py-3 px-6 rounded-lg text-center text-white hover:bg-gray-700/50 transition-all duration-300 text-base font-medium border border-gray-700 hover:border-blue-500/30 hover:text-blue-400"
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar