import React from 'react';
import { ProductCard, Product } from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';

export interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  variant?: 'grid' | 'list';
  onAddToCart?: (productId: string) => void;
  onAddToFavorites?: (productId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  variant = 'grid',
  onAddToCart,
  onAddToFavorites,
}) => {
  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <span>Carregando produtos...</span>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.grid} ${styles[variant]}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          variant={variant}
          onAddToCart={() => onAddToCart?.(product.id)}
          onAddToFavorites={() => onAddToFavorites?.(product.id)}
        />
      ))}
    </div>
  );
};
