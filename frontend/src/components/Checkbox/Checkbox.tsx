import React, { forwardRef, useId } from 'react';
import { clsx } from 'clsx';
import styles from './Checkbox.module.scss';

type BaseCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>;

export interface CheckboxProps extends BaseCheckboxProps {
  /** Estado de seleção do checkbox */
  checked?: boolean;
  /** Estado inicial de seleção */
  defaultChecked?: boolean;
  /** Se o checkbox está desabilitado */
  disabled?: boolean;
  /** Se o checkbox está em estado de erro */
  error?: boolean;
  /** Se o checkbox é obrigatório */
  required?: boolean;
  /** Texto do label do checkbox */
  label: string;
  /** Texto de dica/ajuda */
  hint?: string;
  /** Nome do campo para formulários */
  name?: string;
  /** Valor do checkbox */
  value?: string;
  /** Função chamada quando o estado muda */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Classes CSS adicionais */
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    label, 
    error, 
    hint, 
    required, 
    className, 
    disabled, 
    id: providedId,
    onChange,
    ...props 
  }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const hintId = `${id}-hint`;
    const isInvalid = error || props['aria-invalid'];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.checked, event);
    };

    return (
      <div
        className={clsx(
          styles.container,
          {
            [styles.disabled]: disabled,
            [styles.error]: isInvalid,
          },
          className
        )}
      >
        <div className={styles.inputWrapper}>
          <input
            {...props}
            ref={ref}
            type="checkbox"
            id={id}
            disabled={disabled}
            aria-describedby={hint ? hintId : undefined}
            aria-invalid={isInvalid}
            aria-disabled={disabled}
            aria-required={required}
            className={styles.input}
            required={required}
            onChange={handleChange}
          />
          <div 
            className={styles.checkbox} 
            aria-hidden="true"
            data-state={props.checked ? 'checked' : 'unchecked'}
          >
            <svg
              className={styles.checkmark}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <label htmlFor={id} className={styles.label}>
            {label}
            {required && <span className={styles.required} aria-hidden="true">*</span>}
          </label>
        </div>
        {hint && (
          <div 
            id={hintId} 
            className={clsx(styles.hint, {
              [styles.errorHint]: isInvalid
            })}
          >
            {hint}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
