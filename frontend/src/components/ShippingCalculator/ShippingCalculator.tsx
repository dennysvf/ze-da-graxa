import React, { useState } from 'react';
import { ShippingOption } from '../../types/cart';
import styles from './ShippingCalculator.module.scss';

export interface ShippingCalculatorProps {
  onSelect: (option: ShippingOption) => void;
  onCalculate: (cep: string) => Promise<ShippingOption[]>;
}

export const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({
  onSelect,
  onCalculate,
}) => {
  const [cep, setCep] = useState('');
  const [options, setOptions] = useState<ShippingOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      setCep(value);
      setError('');
    }
  };

  const formatCep = (value: string) => {
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  const handleCalculate = async () => {
    if (cep.length !== 8) {
      setError('CEP inválido');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const shippingOptions = await onCalculate(cep);
      setOptions(shippingOptions);
    } catch (err) {
      setError('Erro ao calcular o frete. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.cepInput}>
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={formatCep(cep)}
          onChange={handleCepChange}
          className={styles.input}
          maxLength={9}
        />
        <button
          type="button"
          onClick={handleCalculate}
          disabled={loading || cep.length !== 8}
          className={styles.calculateButton}
        >
          {loading ? 'Calculando...' : 'Calcular'}
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {!error && options.length > 0 && (
        <div className={styles.options}>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={styles.option}
              onClick={() => onSelect(option)}
            >
              <div className={styles.optionInfo}>
                <span className={styles.optionName}>{option.name}</span>
                <span className={styles.optionDays}>
                  {option.estimatedDays} dias úteis
                </span>
              </div>
              <span className={styles.optionPrice}>
                R$ {option.price.toFixed(2)}
              </span>
            </button>
          ))}
        </div>
      )}

      <a
        href="https://buscacepinter.correios.com.br/app/endereco/index.php"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.findCep}
      >
        Não sei meu CEP
      </a>
    </div>
  );
};
