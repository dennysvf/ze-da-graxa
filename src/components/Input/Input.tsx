import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

export type InputVariant = 'default' | 'filled' | 'outlined';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputStatus = 'error' | 'success' | 'warning';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed below the input */
  error?: string;
  /** Status of the input */
  status?: InputStatus;
  /** Visual style variant of the input */
  variant?: InputVariant;
  /** Size of the input */
  size?: InputSize;
  /** If true, the input will take up the full width of its container */
  fullWidth?: boolean;
  /** If true, shows a required asterisk next to the label */
  required?: boolean;
  /** Icon component to be displayed on the left side of the input */
  leftIcon?: React.ReactNode;
  /** Icon component to be displayed on the right side of the input */
  rightIcon?: React.ReactNode;
  /** If true, shows a clear button when the input has a value */
  clearable?: boolean;
  /** Callback when the clear button is clicked */
  onClear?: () => void;
  /** Additional class name for the input container */
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error,
  status,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  required = false,
  leftIcon,
  rightIcon,
  clearable = false,
  onClear,
  className,
  disabled,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(
    value !== undefined ? !!value : !!defaultValue
  );

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (onChange) {
      const event = new Event('input', { bubbles: true });
      Object.defineProperty(event, 'target', {
        writable: false,
        value: { value: '' }
      });
      onChange(event as unknown as React.ChangeEvent<HTMLInputElement>);
    }
    onClear?.();
    setHasValue(false);
  };

  const containerClasses = classNames(
    styles.inputContainer,
    {
      [styles.fullWidth]: fullWidth,
      [styles.focused]: focused,
      [styles.hasValue]: hasValue,
      [styles.disabled]: disabled,
      [styles.error]: error || status === 'error',
      [styles.success]: status === 'success',
      [styles.warning]: status === 'warning',
    },
    className
  );

  const inputClasses = classNames(
    styles.input,
    styles[variant],
    styles[size],
    {
      [styles.hasLeftIcon]: leftIcon,
      [styles.hasRightIcon]: rightIcon || (clearable && hasValue),
    }
  );

  const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const helperId = `${id}-helper`;
  const statusMessage = error || helperText;

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {leftIcon && (
          <span className={styles.leftIcon} aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          className={inputClasses}
          disabled={disabled}
          aria-invalid={!!error || status === 'error'}
          aria-describedby={statusMessage ? helperId : undefined}
          required={required}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {rightIcon && !clearable && (
          <span className={styles.rightIcon} aria-hidden="true">
            {rightIcon}
          </span>
        )}
        {clearable && hasValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Limpar campo"
            tabIndex={-1}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={styles.clearIcon}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
      {statusMessage && (
        <span id={helperId} className={styles.helperText}>
          {statusMessage}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
