// components/Button.tsx (React + Tailwind)
import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  disabled?: boolean
  children: React.ReactNode
}

export const BaseButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center md:py-2 md:px-8 px-6 py-1.5 h-9 md:h-10 rounded-full italic font-black text-base tracking-wide transition-all duration-300'

  const primaryStyles = twMerge(
    'text-primary-text',
    disabled
      ? 'bg-primary opacity-40 cursor-not-allowed'
      : 'bg-primary hover:bg-primary-hover'
  )

  const secondaryStyles = twMerge(
    'border border-secondary-border text-secondary-text',
    disabled ? 'opacity-40 cursor-not-allowed' : 'hover:border-secondary-hover'
  )

  return (
    <button
      disabled={disabled}
      className={twMerge(
        baseStyles,
        variant === 'primary' ? primaryStyles : secondaryStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
