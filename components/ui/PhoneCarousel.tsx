'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Screenshot {
  src: string
  alt: string
}

interface PhoneCarouselProps {
  screenshots: Screenshot[]
  className?: string
  interval?: number // milliseconds between transitions
}

export function PhoneCarousel({ 
  screenshots, 
  className = '', 
  interval = 3500 
}: PhoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (screenshots.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, interval)

    return () => clearInterval(timer)
  }, [screenshots.length, interval])

  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] md:w-[320px]">
        {/* Outer bezel */}
        <div className="relative rounded-[3rem] bg-gradient-to-b from-neutral-800 to-neutral-900 p-3 shadow-2xl">
          {/* Inner bezel highlight */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-neutral-600/20 to-transparent pointer-events-none" />
          
          {/* Screen area */}
          <div className="relative rounded-[2.25rem] overflow-hidden bg-white">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-28 h-7 bg-black rounded-b-2xl" />
            </div>
            
            {/* Screenshots with fade transition */}
            <div className="relative aspect-[9/19.5]">
              {screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Side button (power) */}
        <div className="absolute right-[-3px] top-28 w-[3px] h-12 bg-neutral-700 rounded-r-sm" />
        
        {/* Side buttons (volume) */}
        <div className="absolute left-[-3px] top-24 w-[3px] h-8 bg-neutral-700 rounded-l-sm" />
        <div className="absolute left-[-3px] top-36 w-[3px] h-8 bg-neutral-700 rounded-l-sm" />
      </div>

      {/* Pagination dots */}
      {screenshots.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-500 w-6' 
                  : 'bg-neutral-300 hover:bg-neutral-400 w-2'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
