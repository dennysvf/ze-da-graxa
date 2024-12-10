import React from 'react';
import { ProductGrid } from '../ProductGrid';
import { Product } from '../../types/product';
import styles from './FeaturedProducts.module.scss';

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  subtitle,
  products,
}) => {
  return (
    <section className={styles.featured}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <ProductGrid products={products} />
      <div className={styles.actions}>
        <button
          onClick={() => window.location.href = '/produtos'}
          className={styles.viewAllButton}
        >
          Ver Todos os Produtos
        </button>
      </div>
    </section>
  );
};
