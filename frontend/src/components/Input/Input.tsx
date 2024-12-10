import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Rótulo do campo */
  label: string;
  /** Texto de ajuda */
  hint?: string;
  /** Mensagem de erro */
  error?: string;
  /** Ícone à esquerda do input */
  leftIcon?: ReactNode;
  /** Ícone à direita do input */
  rightIcon?: ReactNode;
  /** Container className */
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  disabled,
  required,
  className,
  containerClassName,
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  const describedBy = [
    hint && hintId,
    error && errorId,
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={clsx(
        styles.container,
        {
          [styles.disabled]: disabled,
          [styles.error]: error,
          [styles.withLeftIcon]: leftIcon,
          [styles.withRightIcon]: rightIcon,
        },
        containerClassName
      )}
    >
      <label 
        htmlFor={inputId}
        className={styles.label}
      >
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.inputWrapper}>
        {leftIcon && (
          <span className={styles.leftIcon} aria-hidden="true">
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          className={clsx(styles.input, className)}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          {...props}
        />

        {rightIcon && (
          <span className={styles.rightIcon} aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </div>

      {hint && !error && (
        <span id={hintId} className={styles.hint}>
          {hint}
        </span>
      )}

      {error && (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
});
