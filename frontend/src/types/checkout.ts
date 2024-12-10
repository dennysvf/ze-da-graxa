import { CartProduct } from './product';
import { ShippingOption } from './cart';

export type PaymentMethod = 'credit_card' | 'pix';

export interface CreditCardInfo {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

export interface Address {
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface CheckoutData {
  items: CartProduct[];
  shipping: ShippingOption;
  address: Address;
  payment: {
    method: PaymentMethod;
    creditCard?: CreditCardInfo;
  };
  subtotal: number;
  total: number;
}

export interface CheckoutFormData {
  address: Address;
  payment: {
    method: PaymentMethod;
    creditCard?: CreditCardInfo;
  };
}
