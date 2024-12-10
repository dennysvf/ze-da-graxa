import { Component, ErrorInfo, ReactNode } from 'react'
import styles from './ErrorBoundary.module.scss'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro capturado:', error, errorInfo)
    this.props.onError?.(error, errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className={styles.container} role="alert">
          <div className={styles.content}>
            <svg
              className={styles.icon}
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM26 34H22V30H26V34ZM26 26H22V14H26V26Z"
                fill="currentColor"
              />
            </svg>
            <h2 className={styles.title}>Ops! Algo deu errado</h2>
            <p className={styles.message}>
              Desculpe, ocorreu um erro inesperado. Nossa equipe foi notificada.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <pre className={styles.errorDetails}>
                {this.state.error?.toString()}
              </pre>
            )}
            <button
              type="button"
              className={styles.button}
              onClick={this.handleReset}
            >
              Tentar novamente
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
