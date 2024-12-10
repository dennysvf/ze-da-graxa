import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import authRoutes from '../routes/auth';
import { users } from '../mocks/users.mock';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

describe('Auth Routes', () => {
  describe('POST /api/auth/login', () => {
    it('should authenticate user with valid credentials', async () => {
      const testUser = users[0];
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: 'password123' // Em um cenário real, isso seria hasheado
        });
      
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('user');
      expect(res.body.user).toHaveProperty('id', testUser.id);
      expect(res.body.user).toHaveProperty('email', testUser.email);

      // Verificar se o token é válido
      const decoded = jwt.verify(res.body.token, JWT_SECRET) as any;
      expect(decoded).toHaveProperty('userId', testUser.id);
      expect(decoded).toHaveProperty('email', testUser.email);
    });

    it('should return 401 for invalid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'invalid@example.com',
          password: 'wrongpassword'
        });
      
      expect(res.status).toBe(401);
      expect(res.body).toHaveProperty('status', 'error');
      expect(res.body).toHaveProperty('message', 'Invalid credentials');
    });

    it('should validate required fields', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com'
          // password omitido
        });
      
      expect(res.status).toBe(400);
    });
  });

  describe('POST /api/auth/register', () => {
    const newUser = {
      name: 'New User',
      email: 'newuser@example.com',
      password: 'password123',
      confirmPassword: 'password123'
    };

    it('should register new user with valid data', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send(newUser);
      
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('user');
      expect(res.body.user).toHaveProperty('email', newUser.email);
      expect(res.body.user).toHaveProperty('name', newUser.name);

      // Verificar se o token é válido
      const decoded = jwt.verify(res.body.token, JWT_SECRET) as any;
      expect(decoded).toHaveProperty('email', newUser.email);
    });

    it('should return 400 for existing email', async () => {
      const existingUser = users[0];
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          ...newUser,
          email: existingUser.email
        });
      
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message', 'Email already registered');
    });

    it('should validate password confirmation', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          ...newUser,
          confirmPassword: 'differentpassword'
        });
      
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message', 'Passwords do not match');
    });

    it('should validate required fields', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          email: newUser.email,
          password: newUser.password
          // name omitido
        });
      
      expect(res.status).toBe(400);
    });
  });
});
