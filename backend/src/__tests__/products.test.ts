import request from 'supertest';
import express from 'express';
import productRoutes from '../routes/products';
import { products } from '../mocks/products.mock';

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

describe('Product Routes', () => {
  describe('GET /api/products', () => {
    it('should return a list of products with pagination', async () => {
      const res = await request(app).get('/api/products');
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('items');
      expect(res.body).toHaveProperty('total');
      expect(res.body).toHaveProperty('page');
      expect(res.body).toHaveProperty('totalPages');
      expect(Array.isArray(res.body.items)).toBe(true);
    });

    it('should filter products by search term', async () => {
      const searchTerm = products[0].name.substring(0, 5);
      const res = await request(app)
        .get(`/api/products?search=${searchTerm}`);
      
      expect(res.status).toBe(200);
      expect(res.body.items.every((product: any) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )).toBe(true);
    });

    it('should filter products by price range', async () => {
      const minPrice = 20;
      const maxPrice = 50;
      const res = await request(app)
        .get(`/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}`);
      
      expect(res.status).toBe(200);
      expect(res.body.items.every((product: any) => 
        product.price >= minPrice && product.price <= maxPrice
      )).toBe(true);
    });

    it('should sort products by price ascending', async () => {
      const res = await request(app)
        .get('/api/products?sort=price_asc');
      
      expect(res.status).toBe(200);
      const prices = res.body.items.map((product: any) => product.price);
      expect(prices).toEqual([...prices].sort((a, b) => a - b));
    });
  });

  describe('GET /api/products/:id', () => {
    it('should return product details for valid ID', async () => {
      const productId = products[0].id;
      const res = await request(app)
        .get(`/api/products/${productId}`);
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('id', productId);
      expect(res.body).toHaveProperty('name');
      expect(res.body).toHaveProperty('price');
    });

    it('should return 404 for invalid product ID', async () => {
      const res = await request(app)
        .get('/api/products/invalid-id');
      
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('status', 'error');
      expect(res.body).toHaveProperty('message', 'Product not found');
    });
  });
});
