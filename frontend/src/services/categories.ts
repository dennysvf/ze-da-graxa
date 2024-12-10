import { api } from './api';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
}

export const categoriesService = {
  async getCategories(): Promise<Category[]> {
    const { data } = await api.get('/categories');
    return data;
  },

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    const { data } = await api.get(`/categories/${slug}`);
    return data;
  }
};
