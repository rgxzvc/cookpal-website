'use client'

import { forwardRef } from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const textareaId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full px-4 py-3 rounded-2xl border transition-all duration-200
            bg-white text-neutral-900 placeholder:text-neutral-400
            resize-none
            ${
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : 'border-neutral-200 focus:border-primary-400 focus:ring-primary-100'
            }
            focus:outline-none focus:ring-4
            disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        {hint && !error && <p className="mt-2 text-sm text-neutral-500">{hint}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
