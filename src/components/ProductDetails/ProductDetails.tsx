import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import styles from './ProductDetails.module.css';

export interface ProductAttribute {
  label: string;
  value: string;
}

export interface ProductDetailsProps {
  /** Title of the product */
  title: string;
  /** Description of the product */
  description?: string;
  /** List of image URLs */
  images: string[];
  /** Current price */
  price: number;
  /** Original price (if on sale) */
  originalPrice?: number;
  /** Badge text to display */
  badge?: string;
  /** Product attributes/specifications */
  attributes?: ProductAttribute[];
  /** If true, shows a loading state */
  loading?: boolean;
  /** If true, the product is out of stock */
  outOfStock?: boolean;
  /** Called when the add to cart button is clicked */
  onAddToCart?: () => void;
  /** Called when the buy now button is clicked */
  onBuyNow?: () => void;
  /** Additional class name */
  className?: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  description,
  images,
  price,
  originalPrice,
  badge,
  attributes,
  loading = false,
  outOfStock = false,
  onAddToCart,
  onBuyNow,
  className,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const classes = classNames(
    styles.container,
    {
      [styles.loading]: loading,
    },
    className
  );

  return (
    <div className={classes}>
      <div className={styles.gallery}>
        <img
          src={images[selectedImage]}
          alt={title}
          className={styles.mainImage}
        />
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={index}
              className={classNames(styles.thumbnail, {
                [styles.thumbnailActive]: index === selectedImage,
              })}
              onClick={() => setSelectedImage(index)}
              aria-label={`View image ${index + 1} of ${images.length}`}
            >
              <img src={image} alt={`${title} - Image ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>

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

        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {attributes && attributes.length > 0 && (
          <div className={styles.attributes}>
            {attributes.map((attr, index) => (
              <div key={index} className={styles.attribute}>
                <span className={styles.attributeLabel}>{attr.label}</span>
                <span className={styles.attributeValue}>{attr.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className={styles.actions}>
          {onAddToCart && (
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              disabled={outOfStock || loading}
              onClick={onAddToCart}
            >
              {outOfStock ? 'Indisponível' : 'Adicionar ao Carrinho'}
            </Button>
          )}
          {onBuyNow && (
            <Button
              variant="primary"
              size="lg"
              fullWidth
              disabled={outOfStock || loading}
              onClick={onBuyNow}
            >
              Comprar Agora
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

ProductDetails.displayName = 'ProductDetails';
