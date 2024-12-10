import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import orderRoutes from '../routes/orders';
import { orders } from '../mocks/orders.mock';
import { cartData } from '../mocks/cart.mock';
import { products } from '../mocks/products.mock';

const app = express();
app.use(express.json());
app.use('/api/orders', orderRoutes);

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const generateTestToken = (userId: string = '2') => {
  return jwt.sign({ userId, email: 'test@example.com', role: 'customer' }, JWT_SECRET);
};

describe('Order Routes', () => {
  beforeEach(() => {
    // Resetar dados do carrinho antes de cada teste
    Object.keys(cartData).forEach(key => delete cartData[key]);
    cartData['2'] = { 
      items: [
        { productId: products[0].id, quantity: 2 }
      ] 
    };
  });

  describe('GET /api/orders', () => {
    it('should return user orders', async () => {
      const token = generateTestToken();
      const res = await request(app)
        .get('/api/orders')
        .set('Authorization', `Bearer ${token}`);
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('items');
      expect(res.body).toHaveProperty('total');
      expect(Array.isArray(res.body.items)).toBe(true);
    });

    it('should return 401 without authentication', async () => {
      const res = await request(app).get('/api/orders');
      expect(res.status).toBe(401);
    });
  });

  describe('POST /api/orders', () => {
    const validAddress = {
      street: 'Rua Teste',
      number: '123',
      district: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567'
    };

    it('should create new order from cart', async () => {
      const token = generateTestToken();
      const res = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({
          shippingAddress: validAddress,
          paymentMethod: 'credit_card'
        });
      
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('orderId');
      expect(res.body).toHaveProperty('status');

      // Verificar se o carrinho foi limpo
      const cartRes = await request(app)
        .get('/api/cart')
        .set('Authorization', `Bearer ${token}`);
      
      expect(cartRes.body.items).toHaveLength(0);
    });

    it('should return 400 for empty cart', async () => {
      const token = generateTestToken();
      cartData['2'] = { items: [] };

      const res = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({
          shippingAddress: validAddress,
          paymentMethod: 'credit_card'
        });
      
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message', 'Cart is empty');
    });
  });

  describe('GET /api/orders/:id', () => {
    it('should return order details for valid ID', async () => {
      const token = generateTestToken();
      const orderId = orders[0].id;

      const res = await request(app)
        .get(`/api/orders/${orderId}`)
        .set('Authorization', `Bearer ${token}`);
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('id', orderId);
      expect(res.body).toHaveProperty('items');
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('shipping');
      expect(res.body).toHaveProperty('payment');
    });

    it('should return 404 for invalid order ID', async () => {
      const token = generateTestToken();
      
      const res = await request(app)
        .get('/api/orders/invalid-id')
        .set('Authorization', `Bearer ${token}`);
      
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('status', 'error');
      expect(res.body).toHaveProperty('message', 'Order not found');
    });
  });

  describe('GET /api/orders/:id/tracking', () => {
    it('should return order tracking information', async () => {
      const token = generateTestToken();
      const orderId = orders[0].id;

      const res = await request(app)
        .get(`/api/orders/${orderId}/tracking`)
        .set('Authorization', `Bearer ${token}`);
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('timeline');
      expect(Array.isArray(res.body.timeline)).toBe(true);
      expect(res.body).toHaveProperty('shipping');
    });

    it('should include all relevant tracking events', async () => {
      const token = generateTestToken();
      const orderId = orders[0].id;

      const res = await request(app)
        .get(`/api/orders/${orderId}/tracking`)
        .set('Authorization', `Bearer ${token}`);
      
      const timeline = res.body.timeline;
      const statuses = timeline.map((event: any) => event.status);

      // Verificar se contém os eventos básicos
      expect(statuses).toContain('pending_payment');
      if (res.body.status === 'delivered') {
        expect(statuses).toContain('delivered');
      }
    });
  });
});
