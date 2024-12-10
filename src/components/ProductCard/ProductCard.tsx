import React from 'react';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import styles from './ProductCard.module.css';

export interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  outOfStock?: boolean;
}

export interface ProductCardProps {
  /** Product data */
  product: Product;
  /** If true, shows a loading state */
  loading?: boolean;
  /** Called when the product card is clicked */
  onClick?: (product: Product) => void;
  /** Called when the add to cart button is clicked */
  onAddToCart?: (product: Product) => void;
  /** Called when the favorite button is clicked */
  onFavorite?: (product: Product) => void;
  /** If true, the product is marked as favorite */
  isFavorite?: boolean;
  /** Additional class name */
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  loading = false,
  onClick,
  onAddToCart,
  onFavorite,
  isFavorite = false,
  className,
}) => {
  const {
    title,
    description,
    image,
    price,
    originalPrice,
    badge,
    outOfStock,
  } = product;

  const handleClick = () => {
    if (!loading && !outOfStock && onClick) {
      onClick(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!loading && !outOfStock && onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!loading && onFavorite) {
      onFavorite(product);
    }
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const classes = classNames(
    styles.productCard,
    {
      [styles.loading]: loading,
      [styles.outOfStock]: outOfStock,
    },
    className
  );

  return (
    <div
      className={classes}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.imageContainer}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        <div className={styles.priceContainer}>
          <span className={styles.price}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(price)}
          </span>
          {originalPrice && (
            <>
              <span className={styles.originalPrice}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(originalPrice)}
              </span>
              <span className={styles.discount}>-{discount}%</span>
            </>
          )}
        </div>
      </div>
      {(onAddToCart || onFavorite) && (
        <div className={styles.actions}>
          {onAddToCart && (
            <Button
              variant="primary"
              size="sm"
              fullWidth
              disabled={outOfStock || loading}
              onClick={handleAddToCart}
            >
              {outOfStock ? 'Indisponível' : 'Adicionar'}
            </Button>
          )}
          {onFavorite && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFavorite}
              leftIcon={
                isFavorite ? (
                  <HeartFilledIcon className="w-5 h-5" />
                ) : (
                  <HeartIcon className="w-5 h-5" />
                )
              }
              aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            />
          )}
        </div>
      )}
    </div>
  );
};

ProductCard.displayName = 'ProductCard';

// Icons
const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const HeartFilledIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
    />
  </svg>
);
