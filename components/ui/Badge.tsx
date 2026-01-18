import { forwardRef } from 'react'

type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-neutral-100 text-neutral-700',
  primary: 'bg-primary-100 text-primary-700',
  accent: 'bg-accent-100 text-accent-500',
  success: 'bg-emerald-100 text-emerald-700',
  outline: 'bg-transparent border border-neutral-300 text-neutral-600',
}

const sizes: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = 'default', size = 'md', children, className = '', ...props },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full'

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
