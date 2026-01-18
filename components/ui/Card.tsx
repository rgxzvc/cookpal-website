import { forwardRef } from 'react'

type CardVariant = 'default' | 'glass' | 'elevated' | 'outline'
type CardPadding = 'none' | 'sm' | 'md' | 'lg'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  hover?: boolean
  children: React.ReactNode
}

const variants: Record<CardVariant, string> = {
  default: 'bg-white border border-neutral-100',
  glass: 'glass',
  elevated: 'bg-white shadow-soft-lg',
  outline: 'bg-transparent border-2 border-neutral-200',
}

const paddings: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hover = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-3xl transition-all duration-200'
    const hoverStyles = hover
      ? 'hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer'
      : ''

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
