import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QuantitySelector } from '../QuantitySelector';
import { PriceDisplay } from '../PriceDisplay';
import { CartProduct } from '../../types/product';
import { TrashIcon } from '@heroicons/react/24/outline';
import styles from './CartItem.module.scss';
import { Modal } from '../Modal';
import { Button } from '../Button';

export interface CartItemProps {
  /** Item do carrinho */
  item: CartProduct;
  /** Callback chamado quando a quantidade é alterada */
  onQuantityChange: (productId: string, quantity: number) => void;
  /** Callback chamado quando o item é removido */
  onRemove: (productId: string) => void;
  /** Classe CSS adicional */
  className?: string;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove,
  className,
}) => {
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(item.id, quantity);
  };

  const handleRemoveClick = () => {
    setShowRemoveConfirmation(true);
  };

  const handleRemoveConfirm = () => {
    setIsRemoving(true);
    // Aguarda a animação de saída antes de remover
    setTimeout(() => {
      onRemove(item.id);
    }, 300);
  };

  const handleRemoveCancel = () => {
    setShowRemoveConfirmation(false);
  };

  const isOutOfStock = item.stock === 0;
  const isLowStock = item.stock <= 5 && item.stock > 0;

  const cartItemClasses = `${styles.cartItem} ${className || ''} ${isRemoving ? styles.removing : ''}`;

  return (
    <>
      <article 
        className={cartItemClasses}
        data-testid="cart-item"
      >
        <Link 
          to={`/produtos/${item.id}`} 
          className={styles.imageContainer}
          aria-label={`Ver detalhes de ${item.name}`}
        >
          <img
            src={item.images[0]}
            alt={item.name}
            className={styles.image}
            loading="lazy"
            width={120}
            height={120}
          />
        </Link>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.header}>
              <Link 
                to={`/produtos/${item.id}`} 
                className={styles.titleLink}
              >
                <h3 className={styles.title}>{item.name}</h3>
              </Link>
              <Link
                to={`/produtos/categoria/${item.category.slug}`}
                className={styles.category}
              >
                {item.category.name}
              </Link>
            </div>

            {(isOutOfStock || isLowStock) && (
              <p className={`${styles.stockStatus} ${isOutOfStock ? styles.outOfStock : styles.lowStock}`}>
                {isOutOfStock ? 'Produto indisponível' : `Apenas ${item.stock} unidades disponíveis`}
              </p>
            )}
          </div>

          <div className={styles.actions}>
            <div className={styles.quantityContainer}>
              <QuantitySelector
                value={item.quantity}
                onChange={handleQuantityChange}
                max={item.stock}
                disabled={isOutOfStock}
                aria-label={`Quantidade de ${item.name}`}
              />
              {item.quantity > 1 && (
                <span className={styles.unitPrice}>
                  <PriceDisplay
                    value={item.price}
                    size="small"
                    showCurrency={true}
                    prefix="Valor unitário: "
                  />
                </span>
              )}
            </div>

            <div className={styles.priceActions}>
              <PriceDisplay
                value={item.price * item.quantity}
                size="large"
                showCurrency={true}
                className={styles.totalPrice}
              />
              <Button
                variant="text"
                size="sm"
                onClick={handleRemoveClick}
                leftIcon={<TrashIcon className={styles.icon} />}
                aria-label={`Remover ${item.name} do carrinho`}
              >
                Remover
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Modal
        isOpen={showRemoveConfirmation}
        onClose={handleRemoveCancel}
        title="Remover item"
      >
        <div className={styles.confirmationModal}>
          <p>Tem certeza que deseja remover "{item.name}" do carrinho?</p>
          <div className={styles.modalActions}>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRemoveCancel}
            >
              Cancelar
            </Button>
            <Button 
              variant="danger" 
              size="sm" 
              onClick={handleRemoveConfirm}
            >
              Remover
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
