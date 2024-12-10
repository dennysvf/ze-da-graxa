import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Alert.module.css'

interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  title?: string
  description?: string
  icon?: ReactNode
  closable?: boolean
  onClose?: () => void
  className?: string
  children?: ReactNode
}

export function Alert({
  variant = 'info',
  size = 'md',
  title,
  description,
  icon,
  closable = false,
  onClose,
  className,
  children
}: AlertProps) {
  return (
    <div
      role="alert"
      className={clsx(styles.alert, styles[variant], styles[size], className)}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
        {children}
      </div>

      {closable && onClose && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar alerta"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
