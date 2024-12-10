import React from 'react';
import { clsx } from 'clsx';
import styles from './PriceDisplay.module.scss';

export interface PriceDisplayProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Valor do preço */
  value: number;
  /** Tamanho do texto */
  size?: 'small' | 'medium' | 'large';
  /** Se deve mostrar o símbolo da moeda */
  showCurrency?: boolean;
  /** Prefixo do texto */
  prefix?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  value,
  size = 'medium',
  showCurrency = true,
  prefix,
  className,
  ...props
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      ...(showCurrency ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    }).format(price);
  };

  return (
    <span 
      className={clsx(styles.price, styles[size], className)} 
      {...props}
    >
      {prefix}{formatPrice(value)}
    </span>
  );
};
