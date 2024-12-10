import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Toast.module.scss'
import clsx from 'clsx'

export type ToastType = 'success' | 'error' | 'warning' | 'info'
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface ToastProps {
  /** ID único do toast */
  id: string;
  /** Tipo do toast */
  type: ToastType;
  /** Título opcional */
  title?: string;
  /** Mensagem do toast */
  message: string;
  /** Duração em ms */
  duration?: number;
  /** Posição do toast na tela */
  position?: ToastPosition;
  /** Callback quando o toast é fechado */
  onClose: (id: string) => void;
}

const icons = {
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
        fill="currentColor"
      />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
        fill="currentColor"
      />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.6 18H18.4L10 3L1.6 18ZM11 15H9V13H11V15ZM11 11H9V7H11V11Z"
        fill="currentColor"
      />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
        fill="currentColor"
      />
    </svg>
  ),
}

export const Toast = ({ 
  id, 
  type, 
  title, 
  message, 
  duration = 5000, 
  position = 'top-right',
  onClose 
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose(id), 200) // Aguarda a animação terminar
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, id, onClose])

  const toastClasses = clsx(
    styles.toast,
    styles[type],
    styles[position],
    isVisible ? styles.visible : styles.hidden
  )

  return createPortal(
    <div 
      className={toastClasses} 
      role="alert"
      aria-live="polite"
    >
      <div className={styles.icon}>{icons[type]}</div>
      <div className={styles.content}>
        {title && <h4 className={styles.title}>{title}</h4>}
        <p className={styles.message}>{message}</p>
      </div>
      <button
        type="button"
        className={styles.closeButton}
        onClick={() => {
          setIsVisible(false)
          setTimeout(() => onClose(id), 200)
        }}
        aria-label="Fechar notificação"
      >
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 14 14" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>,
    document.body
  )
}
