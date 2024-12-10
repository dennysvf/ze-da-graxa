import { HTMLAttributes, forwardRef } from 'react'
import styles from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fluid?: boolean
  as?: keyof JSX.IntrinsicElements
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    children, 
    className, 
    size = 'lg',
    fluid = false,
    as: Component = 'div',
    ...props 
  }, ref) => {
    const containerClasses = [
      styles.container,
      !fluid && styles[size],
      fluid && styles.fluid,
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Component
        ref={ref}
        className={containerClasses}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
