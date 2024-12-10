import React from 'react';
import styles from './ProductSort.module.scss';

export type SortOption = 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';

export interface ProductSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const ProductSort: React.FC<ProductSortProps> = ({ value, onChange }) => {
  return (
    <div className={styles.sort}>
      <label htmlFor="sort">Ordenar por:</label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
      >
        <option value="name_asc">Nome (A-Z)</option>
        <option value="name_desc">Nome (Z-A)</option>
        <option value="price_asc">Menor preço</option>
        <option value="price_desc">Maior preço</option>
      </select>
    </div>
  );
};
