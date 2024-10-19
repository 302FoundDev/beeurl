import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'outlined',
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md' }: ButtonProps) => {

  // Base styles
  const baseStyles = "px-5 py-1 w-full m-auto rounded"

  // Variant styles
  const variants = {
    primary: 'bg-green-700',
    secondary: 'bg-blue-700 hover:bg-blue-800',
    danger: 'bg-red-700',
    outlined: 'outline outline-pink-700'
  }

  const sizeVariants = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizeVariants[size]}`}
    >
      {children}
    </button>
  )
}
