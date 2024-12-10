import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
  stock: number;
  specifications: Record<string, string>;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  onAddToFavorites?: () => void;
  showActions?: boolean;
  variant?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onAddToFavorites,
  showActions = true,
  variant = 'grid',
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <Link to={`/produtos/${product.id}`} className={styles.imageContainer}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
      </Link>

      <div className={styles.content}>
        <Link to={`/produtos/${product.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>

        <Link
          to={`/produtos/categoria/${product.category.slug}`}
          className={styles.category}
        >
          {product.category.name}
        </Link>

        {variant === 'list' && (
          <p className={styles.description}>{product.description}</p>
        )}

        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.stock > 0 ? (
              <span className={styles.stock}>Em estoque</span>
            ) : (
              <span className={`${styles.stock} ${styles.outOfStock}`}>
                Fora de estoque
              </span>
            )}
          </div>

          {showActions && (
            <div className={styles.actions}>
              <button
                type="button"
                className={`${styles.button} ${styles.favoriteButton}`}
                onClick={onAddToFavorites}
                aria-label="Adicionar aos favoritos"
              >
                ♡
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.cartButton}`}
                onClick={onAddToCart}
                disabled={product.stock === 0}
                aria-label="Adicionar ao carrinho"
              >
                🛒
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
