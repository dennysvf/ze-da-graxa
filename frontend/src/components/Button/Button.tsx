import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import styles from './Button.module.scss';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual do botão */
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'danger';
  /** Tamanho do botão */
  size?: 'sm' | 'md' | 'lg';
  /** Se verdadeiro, o botão ocupará 100% da largura do container */
  fullWidth?: boolean;
  /** Estado de carregamento */
  loading?: boolean;
  /** Estado ativo do botão */
  active?: boolean;
  /** Ícone à esquerda do texto */
  leftIcon?: ReactNode;
  /** Ícone à direita do texto */
  rightIcon?: ReactNode;
  /** Se verdadeiro, otimiza o botão para exibir apenas ícone */
  iconOnly?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  active = false,
  disabled = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
  className,
  children,
  type = 'button',
  ...props
}, ref) => {
  const buttonClass = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.fullWidth]: fullWidth,
      [styles.loading]: loading,
      [styles.active]: active,
      [styles.iconOnly]: iconOnly,
      [styles.withLeftIcon]: !!leftIcon && !iconOnly,
      [styles.withRightIcon]: !!rightIcon && !iconOnly,
    },
    className
  );

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClass}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <LoadingSpinner 
          size="small" 
          color={variant === 'primary' ? 'white' : 'primary'} 
          className={styles.spinner}
        />
      )}
      {!loading && leftIcon && (
        <span className={styles.leftIcon} aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {children && <span className={styles.content}>{children}</span>}
      {!loading && rightIcon && (
        <span className={styles.rightIcon} aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';
