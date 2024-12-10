export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
  stock: number;
  specifications: Record<string, string>;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
}
