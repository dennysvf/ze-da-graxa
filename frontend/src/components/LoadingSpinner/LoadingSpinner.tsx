import clsx from 'clsx'
import styles from './LoadingSpinner.module.scss'

interface LoadingSpinnerProps {
  /** Tamanho do spinner */
  size?: 'small' | 'medium' | 'large';
  /** Cor do spinner (código hex, rgb, ou nome da cor) */
  color?: string;
  /** Se verdadeiro, o spinner será exibido em tela cheia com overlay */
  fullScreen?: boolean;
  /** Classe CSS adicional */
  className?: string;
}

export const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'currentColor',
  fullScreen = false,
  className 
}: LoadingSpinnerProps) => {
  const spinnerClasses = clsx(
    styles.spinner,
    styles[size],
    fullScreen && styles.fullScreen,
    className
  )

  const spinnerStyle = color ? { borderColor: color, borderTopColor: 'transparent' } : undefined

  if (fullScreen) {
    return (
      <div className={styles.overlay} role="dialog" aria-modal="true">
        <div className={spinnerClasses} role="status" style={spinnerStyle}>
          <span className={styles.visuallyHidden}>Carregando...</span>
        </div>
      </div>
    )
  }

  return (
    <div className={spinnerClasses} role="status" style={spinnerStyle}>
      <span className={styles.visuallyHidden}>Carregando...</span>
    </div>
  )
}
