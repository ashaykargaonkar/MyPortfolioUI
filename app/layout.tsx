import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { motion } from 'framer-motion'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const title = 'Ashay Kargaonkar - Machine Learning Engineer';
const description = 'Portfolio of Ashay Kargaonkar, a Machine Learning Engineer with expertise in modern web technologies.';
const url = 'https://ashaykargaonkar.com';

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  keywords: [
    'Machine Learning Engineer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Ashay Kargaonkar' }],
  creator: 'Ashay Kargaonkar',
  publisher: 'Ashay Kargaonkar',
  metadataBase: new URL(url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Ashay Kargaonkar - Portfolio',
      },
    ],
  },
  // Twitter metadata removed as per user preference
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code
    // google: 'your-verification-code',
  },
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
