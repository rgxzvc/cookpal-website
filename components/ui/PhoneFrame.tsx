import Image from 'next/image'

interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
}

export function PhoneFrame({ src, alt, className = '' }: PhoneFrameProps) {
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
            
            {/* Screenshot */}
            <div className="relative aspect-[9/19.5]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>
        </div>
        
        {/* Side button (power) */}
        <div className="absolute right-[-3px] top-28 w-[3px] h-12 bg-neutral-700 rounded-r-sm" />
        
        {/* Side buttons (volume) */}
        <div className="absolute left-[-3px] top-24 w-[3px] h-8 bg-neutral-700 rounded-l-sm" />
        <div className="absolute left-[-3px] top-36 w-[3px] h-8 bg-neutral-700 rounded-l-sm" />
      </div>
    </div>
  )
}
