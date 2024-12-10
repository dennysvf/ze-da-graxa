import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Óleo Motor 5W30 Sintético',
    description: 'Óleo de motor sintético de alta performance',
    price: 35.90,
    images: [
      'https://placeholder.com/oil-5w30-1.jpg',
      'https://placeholder.com/oil-5w30-2.jpg'
    ],
    category: {
      id: '1',
      name: 'Óleos',
      slug: 'oleos'
    },
    stock: 100,
    specifications: {
      'Viscosidade': '5W30',
      'Tipo': 'Sintético',
      'Volume': '1L'
    },
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  {
    id: '2',
    name: 'Filtro de Óleo Universal',
    description: 'Filtro de óleo compatível com diversos modelos',
    price: 25.90,
    images: [
      'https://placeholder.com/filter-1.jpg',
      'https://placeholder.com/filter-2.jpg'
    ],
    category: {
      id: '2',
      name: 'Filtros',
      slug: 'filtros'
    },
    stock: 150,
    specifications: {
      'Tipo': 'Universal',
      'Compatibilidade': 'Múltiplos modelos'
    },
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  {
    id: '3',
    name: 'Kit Pastilha de Freio',
    description: 'Kit completo de pastilhas de freio para eixo dianteiro',
    price: 129.90,
    images: [
      'https://placeholder.com/brake-pads-1.jpg',
      'https://placeholder.com/brake-pads-2.jpg'
    ],
    category: {
      id: '3',
      name: 'Freios',
      slug: 'freios'
    },
    stock: 50,
    specifications: {
      'Posição': 'Dianteira',
      'Compatibilidade': 'Múltiplos modelos'
    },
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  {
    id: '4',
    name: 'Amortecedor Dianteiro',
    description: 'Amortecedor de alta durabilidade',
    price: 299.90,
    images: [
      'https://placeholder.com/shock-1.jpg',
      'https://placeholder.com/shock-2.jpg'
    ],
    category: {
      id: '4',
      name: 'Suspensão',
      slug: 'suspensao'
    },
    stock: 30,
    specifications: {
      'Posição': 'Dianteira',
      'Tipo': 'Pressurizado'
    },
    featured: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  }
  // Adicione mais produtos mockados aqui
];
