import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <Image
      src="/cookpal-icon.png"
      alt="CookPal"
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
      priority
    />
  )
}
