'use client'

import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className = '', id, ...props }, ref) => {
    const selectId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full px-4 py-3 rounded-2xl border transition-all duration-200
              bg-white text-neutral-900 appearance-none cursor-pointer
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
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
