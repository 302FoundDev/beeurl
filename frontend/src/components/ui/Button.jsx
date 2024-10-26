export const Button = ({ 
    children, 
    variant = 'secondary', 
    size = 'md' }) => {

  // Base styles
  const baseStyles = "px-5 py-1 w-full m-auto rounded";

  // Variant styles
  const variants = {
    primary: 'bg-green-700',
    secondary: 'bg-blue-400',
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
