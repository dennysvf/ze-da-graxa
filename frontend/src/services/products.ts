import { Product } from '../types/product';
import { api } from './api';

export const productsService = {
  async getFeaturedProducts(): Promise<Product[]> {
    const { data } = await api.get('/products/featured');
    return data;
  },

  async getProductById(id: string): Promise<Product | null> {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },

  async getProducts(params: {
    category?: string;
    search?: string;
    sort?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';
    page?: number;
    perPage?: number;
  }): Promise<{ products: Product[]; total: number }> {
    const { data } = await api.get('/products', { params });
    return data;
  },
};
