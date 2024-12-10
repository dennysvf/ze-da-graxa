import React from 'react';
import { PriceDisplay } from '../PriceDisplay';
import { ShippingCalculator } from '../ShippingCalculator';
import { Cart, ShippingOption } from '../../types/cart';
import styles from './CartSummary.module.scss';

export interface CartSummaryProps {
  cart: Cart;
  onShippingSelect: (option: ShippingOption) => void;
  onCheckout: () => void;
  onCalculateShipping: (cep: string) => Promise<ShippingOption[]>;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  cart,
  onShippingSelect,
  onCheckout,
  onCalculateShipping,
}) => {
  return (
    <div className={styles.cartSummary}>
      <h2 className={styles.title}>Resumo do Pedido</h2>

      <div className={styles.summary}>
        <div className={styles.row}>
          <span>Subtotal</span>
          <PriceDisplay value={cart.subtotal} />
        </div>

        <div className={styles.row}>
          <span>Frete</span>
          {cart.shipping ? (
            <PriceDisplay value={cart.shipping.price} />
          ) : (
            <span className={styles.calculate}>Calcular</span>
          )}
        </div>

        <ShippingCalculator 
          onSelect={onShippingSelect}
          onCalculate={onCalculateShipping}
        />

        <div className={styles.total}>
          <span>Total</span>
          <PriceDisplay value={cart.total} size="large" />
        </div>

        <button
          type="button"
          className={styles.checkoutButton}
          onClick={onCheckout}
          disabled={!cart.shipping}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};
