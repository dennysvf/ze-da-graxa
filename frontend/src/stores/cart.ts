import { create } from 'zustand'
import { Cart } from '../types'
import { api } from '../services/api'

interface CartStore {
  cart: Cart | null
  isLoading: boolean
  error: string | null
  fetchCart: () => Promise<void>
  addToCart: (productId: string, quantity: number) => Promise<void>
  updateQuantity: (productId: string, quantity: number) => Promise<void>
  removeFromCart: (productId: string) => Promise<void>
  clearCart: () => Promise<void>
}

export const useCartStore = create<CartStore>((set) => ({
  cart: null,
  isLoading: false,
  error: null,
  fetchCart: async () => {
    try {
      set({ isLoading: true, error: null })
      const { data } = await api.get('/cart')
      set({ cart: data })
    } catch (error) {
      set({ error: 'Failed to fetch cart' })
    } finally {
      set({ isLoading: false })
    }
  },
  addToCart: async (productId, quantity) => {
    try {
      set({ isLoading: true, error: null })
      const { data } = await api.post('/cart/items', { productId, quantity })
      set({ cart: data })
    } catch (error) {
      set({ error: 'Failed to add item to cart' })
    } finally {
      set({ isLoading: false })
    }
  },
  updateQuantity: async (productId, quantity) => {
    try {
      set({ isLoading: true, error: null })
      const { data } = await api.put(`/cart/items/${productId}`, { quantity })
      set({ cart: data })
    } catch (error) {
      set({ error: 'Failed to update quantity' })
    } finally {
      set({ isLoading: false })
    }
  },
  removeFromCart: async (productId) => {
    try {
      set({ isLoading: true, error: null })
      const { data } = await api.delete(`/cart/items/${productId}`)
      set({ cart: data })
    } catch (error) {
      set({ error: 'Failed to remove item from cart' })
    } finally {
      set({ isLoading: false })
    }
  },
  clearCart: async () => {
    try {
      set({ isLoading: true, error: null })
      await api.delete('/cart')
      set({ cart: null })
    } catch (error) {
      set({ error: 'Failed to clear cart' })
    } finally {
      set({ isLoading: false })
    }
  },
}))
