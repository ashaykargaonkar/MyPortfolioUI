import React from 'react'

interface BulletListProps {
  items: string[]
  className?: string
}

const BulletList: React.FC<BulletListProps> = ({ items, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-blue-500 w-4 h-4 flex items-center justify-center">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className="text-white/90 text-base leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  )
}

export default BulletList
