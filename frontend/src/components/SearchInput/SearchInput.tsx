import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  /** Valor do input - Obrigatório conforme documentação */
  value: string;
  /** Placeholder do input */
  placeholder?: string;
  /** Callback chamado quando o valor muda - Obrigatório conforme documentação */
  onChange: (value: string) => void;
  /** Callback chamado quando a busca deve ser executada */
  onSearch: (value: string) => void;
  /** Estado de carregamento */
  loading?: boolean;
  /** Tempo de debounce em ms */
  debounceTime?: number;
  /** Se verdadeiro, habilita autocompletar */
  autoComplete?: boolean;
  /** Lista de sugestões para autocompletar */
  suggestions?: string[];
  /** Classe CSS adicional */
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Buscar...',
  loading = false,
  debounceTime = 300,
  autoComplete = false,
  suggestions = [],
  className,
}) => {
  // Debounce the search to avoid too many requests
  const debouncedSearch = useCallback(
    debounce((searchValue: string) => {
      onSearch(searchValue);
    }, debounceTime),
    [onSearch, debounceTime]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Call onChange
    onChange(newValue);
    
    // Trigger search
    debouncedSearch(newValue);

    // Show suggestions if we have autoComplete and suggestions
    if (autoComplete && suggestions.length > 0) {
      // setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Call onChange
    onChange(suggestion);
    
    // Trigger search immediately
    onSearch(suggestion);
    
    // Hide suggestions
    // setShowSuggestions(false);
  };

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
        onBlur={() => {}}
      />
      <div className={styles.iconWrapper}>
        {loading ? (
          <LoadingSpinner size="sm" className={styles.spinner} />
        ) : (
          <svg
            className={styles.icon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {autoComplete && suggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              className={styles.suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
