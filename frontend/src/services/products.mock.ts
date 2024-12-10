import { Product } from '../types/product';
import { delay } from '../utils/delay';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Filtro de Óleo Premium',
    description: 'Filtro de óleo de alta qualidade para diversos modelos',
    price: 39.90,
    images: ['/products/oil-filter.jpg'],
    category: {
      id: '1',
      name: 'Filtros',
      slug: 'filtros'
    },
    stock: 50,
    sku: 'FLT-001',
    brand: 'TechFilter',
    featured: true
  },
  {
    id: '2',
    name: 'Kit Pastilha de Freio',
    description: 'Kit completo de pastilhas de freio para eixo dianteiro',
    price: 129.90,
    images: ['/products/brake-pads.jpg'],
    category: {
      id: '2',
      name: 'Freios',
      slug: 'freios'
    },
    stock: 30,
    sku: 'FRE-001',
    brand: 'BrakeMaster',
    featured: true
  },
  {
    id: '3',
    name: 'Óleo Motor 5W30 Sintético',
    description: 'Óleo sintético de alta performance',
    price: 159.90,
    images: ['/products/engine-oil.jpg'],
    category: {
      id: '3',
      name: 'Óleos e Lubrificantes',
      slug: 'oleos'
    },
    stock: 100,
    sku: 'OLE-001',
    brand: 'PowerOil',
    featured: true
  },
  {
    id: '4',
    name: 'Amortecedor Dianteiro',
    description: 'Amortecedor de alta durabilidade',
    price: 299.90,
    images: ['/products/shock-absorber.jpg'],
    category: {
      id: '4',
      name: 'Suspensão',
      slug: 'suspensao'
    },
    stock: 20,
    sku: 'SUS-001',
    brand: 'ShockPro',
    featured: true
  }
];

export const productsService = {
  async getFeaturedProducts(): Promise<Product[]> {
    await delay(800);
    return mockProducts.filter(product => product.featured);
  },

  async getProductById(id: string): Promise<Product | null> {
    await delay(500);
    return mockProducts.find(product => product.id === id) || null;
  },

  async getProducts(params: {
    category?: string;
    search?: string;
    sort?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';
    page?: number;
    perPage?: number;
  }): Promise<{ products: Product[]; total: number }> {
    await delay(800);

    let filtered = [...mockProducts];

    // Aplicar filtros
    if (params.category) {
      filtered = filtered.filter(
        product => product.category.slug === params.category
      );
    }

    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    // Aplicar ordenação
    if (params.sort) {
      filtered.sort((a, b) => {
        switch (params.sort) {
          case 'price_asc':
            return a.price - b.price;
          case 'price_desc':
            return b.price - a.price;
          case 'name_asc':
            return a.name.localeCompare(b.name);
          case 'name_desc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
    }

    // Aplicar paginação
    const page = params.page || 1;
    const perPage = params.perPage || 12;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return {
      products: filtered.slice(start, end),
      total: filtered.length,
    };
  },
};
