import { User } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@zedagraxa.com',
    role: 'admin',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  {
    id: '2',
    name: 'João Cliente',
    email: 'joao@email.com',
    role: 'customer',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  // Adicione mais usuários mockados aqui
];
