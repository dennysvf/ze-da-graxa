import React from 'react';
import styles from './ProductFilters.module.scss';

export interface ProductFiltersProps {
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
  selectedCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  onCategoryChange: (category: string) => void;
  onPriceChange: (min: number, max: number) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  minPrice,
  maxPrice,
  onCategoryChange,
  onPriceChange,
}) => {
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const min = Number(e.target.value);
    onPriceChange(min, maxPrice || Infinity);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = Number(e.target.value);
    onPriceChange(minPrice || 0, max);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.section}>
        <h3>Categorias</h3>
        <div className={styles.categoryList}>
          <button
            className={`${styles.categoryButton} ${!selectedCategory ? styles.active : ''}`}
            onClick={() => onCategoryChange('')}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${
                selectedCategory === category.slug ? styles.active : ''
              }`}
              onClick={() => onCategoryChange(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Preço</h3>
        <div className={styles.priceInputs}>
          <div className={styles.priceInput}>
            <label htmlFor="minPrice">Mínimo</label>
            <input
              type="number"
              id="minPrice"
              min="0"
              value={minPrice || ''}
              onChange={handleMinPriceChange}
              placeholder="R$ Min"
            />
          </div>
          <div className={styles.priceInput}>
            <label htmlFor="maxPrice">Máximo</label>
            <input
              type="number"
              id="maxPrice"
              min="0"
              value={maxPrice || ''}
              onChange={handleMaxPriceChange}
              placeholder="R$ Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
