import React from 'react';
import { clsx } from 'clsx';
import styles from './QuantitySelector.module.scss';

export interface QuantitySelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Valor atual */
  value: number;
  /** Callback quando o valor muda */
  onChange: (value: number) => void;
  /** Valor mínimo */
  min?: number;
  /** Valor máximo */
  max?: number;
  /** Se o componente está desabilitado */
  disabled?: boolean;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
  className,
  ...props
}) => {
  const handleChange = (newValue: number) => {
    if (!disabled && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div 
      className={clsx(styles.quantity, className)}
      {...props}
    >
      <button
        type="button"
        className={styles.button}
        onClick={() => handleChange(value - 1)}
        disabled={disabled || value <= min}
        aria-label="Diminuir quantidade"
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        onChange={(e) => handleChange(Number(e.target.value))}
        className={styles.input}
        aria-label="Quantidade"
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => handleChange(value + 1)}
        disabled={disabled || value >= max}
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  );
};
