import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { JsonLd, getPersonSchema } from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

const title = 'Ashay Kargaonkar - Software Engineer | Machine Learning Engineer | API & Cloud Specialist';
const description = 'Software Engineer with 4+ years of experience in C# .NET, AWS, and machine learning. Skilled in TensorFlow, OpenCV, and OCR systems for building intelligent, data-driven applications.';
const url = 'https://ashaykargaonkar.com';

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  keywords: [
    'Software Engineer',
    'Data Scientist',
    'Machine Learning Engineer',
    'Web Developer',
    'C#',
    '.NET',
    'AWS',
    'Backend Developer',
    'API Development',
    'Cloud Architecture',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
    'Chicago Developer',
    'Full Stack Developer'
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
  const personSchema = getPersonSchema()

  return (
    <html lang="en">
      <head>
        <JsonLd data={personSchema} />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
          {children}
        </div>
      </body>
    </html>
  )
}
