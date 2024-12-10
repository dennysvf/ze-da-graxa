import { CartProduct } from './product';
import { ShippingOption } from './cart';

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface OrderTimeline {
  status: OrderStatus;
  date: Date;
  description: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartProduct[];
  shipping: ShippingOption;
  subtotal: number;
  total: number;
  status: OrderStatus;
  timeline: OrderTimeline[];
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}
