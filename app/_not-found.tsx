'use client'

import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h1>
        <p className="text-gray-300 mb-8">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="inline-block bg-primary-color text-white px-6 py-2 rounded-lg hover:bg-secondary-color transition-colors duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
