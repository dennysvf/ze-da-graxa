import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The variant style of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'danger'
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg'
  /** If true, shows a loading spinner */
  loading?: boolean
  /** If true, the button will take up the full width of its container */
  fullWidth?: boolean
  /** Icon to show before the button text */
  leftIcon?: ReactNode
  /** Icon to show after the button text */
  rightIcon?: ReactNode
  /** The content of the button */
  children?: ReactNode
  /** Optional icon-only mode - will adjust padding and aria-label accordingly */
  iconOnly?: boolean
  /** Optional active state for toggle buttons */
  active?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  children,
  iconOnly = false,
  active = false,
  ...props
}, ref) => {
  const isDisabled = disabled || loading

  return (
    <button
      ref={ref}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        {
          [styles.loading]: loading,
          [styles.fullWidth]: fullWidth,
          [styles.disabled]: isDisabled,
          [styles.iconOnly]: iconOnly,
          [styles.active]: active,
        },
        className
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      data-variant={variant}
      data-size={size}
      {...props}
    >
      <span className={styles.content}>
        {loading ? (
          <span className={styles.spinner} aria-hidden="true">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className={styles.spinnerIcon}
              aria-hidden="true"
            >
              <circle 
                className={styles.spinnerTrack} 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <circle 
                className={styles.spinnerIndicator} 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
            </svg>
            <span className={styles.srOnly}>Carregando</span>
          </span>
        ) : (
          <>
            {leftIcon && (
              <span 
                className={clsx(styles.icon, styles.leftIcon)} 
                aria-hidden="true"
              >
                {leftIcon}
              </span>
            )}
            {children && <span className={styles.label}>{children}</span>}
            {rightIcon && (
              <span 
                className={clsx(styles.icon, styles.rightIcon)} 
                aria-hidden="true"
              >
                {rightIcon}
              </span>
            )}
          </>
        )}
      </span>
    </button>
  )
})

Button.displayName = 'Button'
