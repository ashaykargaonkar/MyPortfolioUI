import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { motion } from 'framer-motion'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashay Kargaonkar - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
          {children}
        </div>
      </body>
    </html>
  )
}
