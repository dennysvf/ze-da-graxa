import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AlertIcon } from './AlertIcon';
import styles from './Alert.module.scss';
import { clsx } from 'clsx';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variante do alerta */
  variant?: 'success' | 'error' | 'warning' | 'info';
  /** Tamanho do alerta */
  size?: 'sm' | 'md' | 'lg';
  /** Título do alerta */
  title?: string;
  /** Descrição do alerta */
  description?: string;
  /** Ícone personalizado */
  icon?: React.ReactNode;
  /** Se o alerta pode ser fechado */
  closable?: boolean;
  /** Callback quando o alerta é fechado */
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      size = 'md',
      title,
      description,
      icon,
      closable = false,
      onClose,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const alertClasses = clsx(
      styles.alert,
      styles[variant],
      styles[size],
      {
        [styles.closable]: closable,
      },
      className
    );

    const handleClose = () => {
      onClose?.();
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={alertClasses}
        {...props}
      >
        <div className={styles.icon}>
          {icon || <AlertIcon variant={variant} />}
        </div>

        <div className={styles.content}>
          {title && (
            <h4 className={styles.title}>{title}</h4>
          )}
          {description && (
            <p className={styles.description}>{description}</p>
          )}
          {children && (
            <div className={styles.children}>{children}</div>
          )}
        </div>

        {closable && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Fechar alerta"
          >
            <XMarkIcon className={styles.icon} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
