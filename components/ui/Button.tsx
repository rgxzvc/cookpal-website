'use client'

import { forwardRef } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  fullWidth?: boolean
  children: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-soft hover:shadow-glow hover:from-primary-600 hover:to-primary-700 active:scale-[0.98]',
  secondary:
    'bg-neutral-900 text-white shadow-soft hover:bg-neutral-800 active:scale-[0.98]',
  outline:
    'border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98]',
  ghost:
    'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 active:scale-[0.98]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      fullWidth = false,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
      fullWidth ? 'w-full' : ''
    } ${className}`

    if (href && !disabled) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
