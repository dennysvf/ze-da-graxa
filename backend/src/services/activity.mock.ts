import { Activity } from '../types/activity';

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'order_created',
    title: 'Novo pedido recebido',
    description: 'Pedido #12345 criado por João Silva',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 min ago
    metadata: {
      orderId: '12345',
      customerId: 'cust_123',
      amount: 150.00
    }
  },
  {
    id: '2',
    type: 'payment_received',
    title: 'Pagamento confirmado',
    description: 'Pagamento do pedido #12340 confirmado',
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1h ago
    metadata: {
      orderId: '12340',
      amount: 299.90
    }
  },
  {
    id: '3',
    type: 'order_completed',
    title: 'Pedido finalizado',
    description: 'Pedido #12338 foi marcado como concluído',
    timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(), // 1.5h ago
    metadata: {
      orderId: '12338'
    }
  },
  {
    id: '4',
    type: 'product_updated',
    title: 'Produto atualizado',
    description: 'Estoque do produto "Óleo 5W30" atualizado',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2h ago
    metadata: {
      productId: 'prod_789'
    }
  },
  {
    id: '5',
    type: 'customer_registered',
    title: 'Novo cliente registrado',
    description: 'Maria Oliveira criou uma nova conta',
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3h ago
    metadata: {
      customerId: 'cust_124'
    }
  }
];

export const getRecentActivities = (limit: number = 5): Activity[] => {
  return mockActivities.slice(0, limit);
};
