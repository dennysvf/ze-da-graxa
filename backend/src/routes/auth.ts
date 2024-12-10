import express from 'express';
import jwt from 'jsonwebtoken';
import { users } from '../mocks/users.mock';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Em produção, verificar senha com bcrypt
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid credentials'
    });
  }

  // Gerar token JWT
  const token = jwt.sign(
    { 
      userId: user.id,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    },
    token
  });
});

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Verificar se usuário já existe
  if (users.some(u => u.email === email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Email already registered'
    });
  }

  // Em produção, hash da senha com bcrypt
  const newUser: User = {
    id: String(users.length + 1),
    name,
    email,
    role: 'customer',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  users.push(newUser);

  // Gerar token JWT
  const token = jwt.sign(
    { 
      userId: newUser.id,
      email: newUser.email,
      role: newUser.role
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.status(201).json({
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    },
    token
  });
});

export default router;
