import { CartProduct } from './product';

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: number;
}

export interface Cart {
  items: CartProduct[];
  subtotal: number;
  shipping?: ShippingOption;
  total: number;
}

export interface CartItemAction {
  productId: string;
  quantity: number;
}
