import { useState, useCallback } from 'react'
import { ToastType } from './Toast'

interface ToastData {
  id: string
  type: ToastType
  title?: string
  message: string
  duration?: number
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((currentToasts) => [...currentToasts, { ...toast, id }])
    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  }, [])

  const toast = useCallback(
    (message: string, options?: Partial<Omit<ToastData, 'id' | 'message'>>) => {
      return addToast({ type: 'info', message, ...options })
    },
    [addToast]
  )

  const success = useCallback(
    (message: string, options?: Partial<Omit<ToastData, 'id' | 'message' | 'type'>>) => {
      return addToast({ type: 'success', message, ...options })
    },
    [addToast]
  )

  const error = useCallback(
    (message: string, options?: Partial<Omit<ToastData, 'id' | 'message' | 'type'>>) => {
      return addToast({ type: 'error', message, ...options })
    },
    [addToast]
  )

  const warning = useCallback(
    (message: string, options?: Partial<Omit<ToastData, 'id' | 'message' | 'type'>>) => {
      return addToast({ type: 'warning', message, ...options })
    },
    [addToast]
  )

  const info = useCallback(
    (message: string, options?: Partial<Omit<ToastData, 'id' | 'message' | 'type'>>) => {
      return addToast({ type: 'info', message, ...options })
    },
    [addToast]
  )

  return {
    toasts,
    removeToast,
    toast,
    success,
    error,
    warning,
    info,
  }
}
