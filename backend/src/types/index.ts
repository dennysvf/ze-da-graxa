export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  stock: number;
  specifications: Record<string, string>;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'customer' | 'guest';

export type OrderStatus = 
  | 'pending_payment'
  | 'paid'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export type PaymentMethod = 'credit_card' | 'pix' | 'boleto';

export type PaymentStatus = 
  | 'pending'
  | 'processing'
  | 'success'
  | 'failed'
  | 'refunded';

export type ShippingMethod = 'PAC' | 'SEDEX';

export interface Address {
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault?: boolean;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  total: number;
}

export interface ShippingInfo {
  address: Address;
  method: ShippingMethod;
  trackingCode?: string;
  price: number;
  estimatedDelivery?: Date;
}

export interface Shipping {
  address: Address;
  method: ShippingMethod;
  trackingCode?: string;
  price: number;
  estimatedDelivery: Date;
}

export interface PaymentInfo {
  method: string;
  status: PaymentStatus;
  total: number;
  paidAt?: Date;
}

export interface Payment {
  method: PaymentMethod;
  status: PaymentStatus;
  total: number;
  paidAt?: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  shipping: ShippingInfo;
  payment: PaymentInfo;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
