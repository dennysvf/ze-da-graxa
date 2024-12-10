import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import cartRoutes from '../routes/cart';
import { products } from '../mocks/products.mock';
import { cartData } from '../mocks/cart.mock';

const app = express();
app.use(express.json());
app.use('/api/cart', cartRoutes);

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Helper para gerar token JWT para testes
const generateTestToken = (userId: string = '2') => {
  return jwt.sign({ userId, email: 'test@example.com', role: 'customer' }, JWT_SECRET);
};

describe('Cart Routes', () => {
  beforeEach(() => {
    // Resetar dados do carrinho antes de cada teste
    Object.keys(cartData).forEach(key => delete cartData[key]);
    cartData['2'] = { items: [] };
  });

  describe('GET /api/cart', () => {
    it('should return empty cart for new user', async () => {
      const token = generateTestToken();
      const res = await request(app)
        .get('/api/cart')
        .set('Authorization', `Bearer ${token}`);
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('items');
      expect(res.body.items).toHaveLength(0);
      expect(res.body.subtotal).toBe(0);
    });

    it('should return 401 without authentication', async () => {
      const res = await request(app).get('/api/cart');
      expect(res.status).toBe(401);
    });
  });

  describe('POST /api/cart/items', () => {
    it('should add item to cart', async () => {
      const token = generateTestToken();
      const productId = products[0].id;
      
      const res = await request(app)
        .post('/api/cart/items')
        .set('Authorization', `Bearer ${token}`)
        .send({
          productId,
          quantity: 2
        });
      
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('status', 'success');

      // Verificar se o item foi adicionado
      const cartRes = await request(app)
        .get('/api/cart')
        .set('Authorization', `Bearer ${token}`);
      
      expect(cartRes.body.items).toHaveLength(1);
      expect(cartRes.body.items[0].productId).toBe(productId);
      expect(cartRes.body.items[0].quantity).toBe(2);
    });

    it('should return 404 for invalid product', async () => {
      const token = generateTestToken();
      
      const res = await request(app)
        .post('/api/cart/items')
        .set('Authorization', `Bearer ${token}`)
        .send({
          productId: 'invalid-id',
          quantity: 1
        });
      
      expect(res.status).toBe(404);
    });
  });

  describe('PUT /api/cart/items/:productId', () => {
    it('should update item quantity', async () => {
      const token = generateTestToken();
      const productId = products[0].id;
      
      // Primeiro adicionar um item
      await request(app)
        .post('/api/cart/items')
        .set('Authorization', `Bearer ${token}`)
        .send({ productId, quantity: 1 });
      
      // Depois atualizar a quantidade
      const res = await request(app)
        .put(`/api/cart/items/${productId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ quantity: 3 });
      
      expect(res.status).toBe(200);
      
      // Verificar se a quantidade foi atualizada
      const cartRes = await request(app)
        .get('/api/cart')
        .set('Authorization', `Bearer ${token}`);
      
      expect(cartRes.body.items[0].quantity).toBe(3);
    });

    it('should remove item when quantity is 0', async () => {
      const token = generateTestToken();
      const productId = products[0].id;
      
      // Primeiro adicionar um item
      await request(app)
        .post('/api/cart/items')
        .set('Authorization', `Bearer ${token}`)
        .send({ productId, quantity: 1 });
      
      // Depois definir quantidade como 0
      const res = await request(app)
        .put(`/api/cart/items/${productId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ quantity: 0 });
      
      expect(res.status).toBe(200);
      
      // Verificar se o item foi removido
      const cartRes = await request(app)
        .get('/api/cart')
        .set('Authorization', `Bearer ${token}`);
      
      expect(cartRes.body.items).toHaveLength(0);
    });
  });

  describe('DELETE /api/cart/items/:productId', () => {
    it('should remove item from cart', async () => {
      const token = generateTestToken();
      const productId = products[0].id;
      
      // Primeiro adicionar um item
      await request(app)
        .post('/api/cart/items')
        .set('Authorization', `Bearer ${token}`)
        .send({ productId, quantity: 1 });
      
      // Depois remover o item
      const res = await request(app)
        .delete(`/api/cart/items/${productId}`)
        .set('Authorization', `Bearer ${token}`);
      
      expect(res.status).toBe(200);
      
      // Verificar se o item foi removido
      const cartRes = await request(app)
        .get('/api/cart')
        .set('Authorization', `Bearer ${token}`);
      
      expect(cartRes.body.items).toHaveLength(0);
    });
  });
});
