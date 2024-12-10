import { create } from 'zustand'
import { type Product, type ProductFilters } from '../types/product'

interface ProductStore {
  products: Product[]
  loading: boolean
  filters: ProductFilters
  setProducts: (products: Product[]) => void
  setLoading: (loading: boolean) => void
  setFilters: (filters: ProductFilters) => void
  filteredProducts: () => Product[]
}

// Simulação de produtos para desenvolvimento
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Pastilha de Freio Dianteira',
    description: 'Pastilha de freio de alta performance para carros populares',
    price: 89.90,
    oldPrice: 129.90,
    images: ['https://via.placeholder.com/300'],
    category: 'Freios',
    brand: 'Fras-le',
    stock: 50,
    sku: 'PFD-001',
    specifications: {
      'Material': 'Cerâmica',
      'Posição': 'Dianteira'
    },
    compatibleVehicles: ['Gol', 'Palio', 'Uno'],
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    name: 'Óleo Motor 5W30 Sintético',
    description: 'Óleo lubrificante sintético de alta performance',
    price: 35.90,
    images: ['https://via.placeholder.com/300'],
    category: 'Óleos',
    brand: 'Shell',
    stock: 100,
    sku: 'OMS-001',
    specifications: {
      'Tipo': 'Sintético',
      'Viscosidade': '5W30'
    },
    compatibleVehicles: ['Todos'],
    rating: 5,
    reviewCount: 256
  }
]

export const useProductStore = create<ProductStore>((set, get) => ({
  products: mockProducts,
  loading: false,
  filters: {},
  
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setFilters: (filters) => set({ filters }),
  
  filteredProducts: () => {
    const { products, filters } = get()
    
    return products.filter(product => {
      if (filters.category && !filters.category.includes(product.category)) {
        return false
      }
      
      if (filters.brand && !filters.brand.includes(product.brand)) {
        return false
      }
      
      if (filters.minPrice && product.price < filters.minPrice) {
        return false
      }
      
      if (filters.maxPrice && product.price > filters.maxPrice) {
        return false
      }
      
      if (filters.vehicle && !product.compatibleVehicles.includes(filters.vehicle)) {
        return false
      }
      
      return true
    })
  }
}))
