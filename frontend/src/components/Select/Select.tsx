import React, { forwardRef, useId } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import classNames from 'classnames';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Label do select
   */
  label: string;
  /**
   * Lista de opções
   */
  options: SelectOption[];
  /**
   * Texto do placeholder
   */
  placeholder?: string;
  /**
   * Se está em estado de erro
   */
  error?: boolean;
  /**
   * Texto de ajuda ou erro
   */
  hint?: string;
  /**
   * Se é obrigatório
   */
  required?: boolean;
  /**
   * Tamanho do select
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Classes CSS adicionais
   */
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      error,
      hint,
      required,
      size = 'md',
      disabled,
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const hintId = `${id}-hint`;
    const isInvalid = error || props['aria-invalid'];

    return (
      <div
        className={classNames(
          styles.container,
          {
            [styles.disabled]: disabled,
            [styles.error]: isInvalid,
          },
          className
        )}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>

        <div className={classNames(styles.selectWrapper, styles[size])}>
          <select
            {...props}
            ref={ref}
            id={id}
            className={styles.select}
            disabled={disabled}
            aria-describedby={hint ? hintId : undefined}
            aria-invalid={isInvalid}
            required={required}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map(({ value, label: optionLabel, disabled: optionDisabled }) => (
              <option key={value} value={value} disabled={optionDisabled}>
                {optionLabel}
              </option>
            ))}
          </select>

          <CaretDown
            className={styles.icon}
            size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
            weight="bold"
          />
        </div>

        {hint && (
          <div id={hintId} className={styles.hint}>
            {hint}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
