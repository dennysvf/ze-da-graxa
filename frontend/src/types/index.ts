export interface Product {
  id: string
  name: string
  description: string
  price: number
  oldPrice?: number
  images: string[]
  brand: string
  category: {
    id: string
    name: string
    slug: string
  }
  stock: number
  rating: number
  reviewCount: number
  specifications: Record<string, string>
}

export interface CartItem {
  productId: string
  quantity: number
  product: Product
  total: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
}

export interface Address {
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
  zipCode: string
}

export interface Order {
  id: string
  items: {
    productId: string
    quantity: number
    price: number
    total: number
    product: Product
  }[]
  status: OrderStatus
  shipping: {
    address: Address
    method: ShippingMethod
    price: number
    trackingCode?: string
    estimatedDelivery: Date
  }
  payment: {
    method: PaymentMethod
    status: PaymentStatus
    total: number
    paidAt?: Date
  }
  total: number
  createdAt: Date
  updatedAt: Date
}

export type OrderStatus = 'pending_payment' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
export type PaymentMethod = 'credit_card' | 'pix' | 'boleto'
export type PaymentStatus = 'pending' | 'success' | 'failed'
export type ShippingMethod = 'PAC' | 'SEDEX'

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'customer'
}
