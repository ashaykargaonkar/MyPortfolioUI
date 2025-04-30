'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 h-28">
      <div className="container mx-auto px-6 flex items-center h-full">
          <div className="flex flex-row items-center justify-between w-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#" className="text-2xl font-bold text-white">
              Ashay
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
