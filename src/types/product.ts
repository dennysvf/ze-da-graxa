export interface Product {
  id: string
  name: string
  description: string
  price: number
  oldPrice?: number
  images: string[]
  category: string
  brand: string
  stock: number
  sku: string
  specifications: Record<string, string>
  compatibleVehicles: string[]
  rating: number
  reviewCount: number
}

export interface ProductFilters {
  category?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  vehicle?: string
}
