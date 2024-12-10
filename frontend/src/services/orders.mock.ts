import { Order, OrderStatus } from '../types/order';
import { delay } from '../utils/delay';

interface OrderFilters {
  status?: OrderStatus;
  startDate?: Date;
  endDate?: Date;
  search?: string;
  sortBy?: 'date' | 'total';
  sortOrder?: 'asc' | 'desc';
}

const generateMockOrders = (count: number): Order[] => {
  const statuses: OrderStatus[] = ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];
  const products = [
    { id: '1', name: 'Troca de Óleo', price: 35.90 },
    { id: '2', name: 'Alinhamento', price: 89.90 },
    { id: '3', name: 'Balanceamento', price: 49.90 },
    { id: '4', name: 'Revisão Completa', price: 299.90 }
  ];

  return Array.from({ length: count }, (_, index) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const createdAt = new Date();
    createdAt.setDate(createdAt.getDate() - Math.floor(Math.random() * 30));

    const items = Array.from(
      { length: Math.floor(Math.random() * 3) + 1 },
      () => {
        const product = products[Math.floor(Math.random() * products.length)];
        const quantity = Math.floor(Math.random() * 2) + 1;
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          total: product.price * quantity
        };
      }
    );

    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const shipping = {
      method: Math.random() > 0.5 ? 'SEDEX' : 'PAC',
      price: Math.random() > 0.5 ? 15.90 : 9.90,
      address: {
        street: 'Rua das Flores',
        number: '123',
        district: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01234-567'
      },
      estimatedDelivery: new Date(createdAt.getTime() + 1000 * 60 * 60 * 24 * (Math.floor(Math.random() * 5) + 3))
    };

    const timeline = [
      {
        status: 'pending',
        date: createdAt,
        description: 'Pedido realizado'
      }
    ];

    if (status !== 'pending') {
      timeline.push({
        status: 'confirmed',
        date: new Date(createdAt.getTime() + 1000 * 60 * 30),
        description: 'Pagamento confirmado'
      });
    }

    if (['processing', 'shipped', 'delivered'].includes(status)) {
      timeline.push({
        status: 'processing',
        date: new Date(createdAt.getTime() + 1000 * 60 * 60 * 2),
        description: 'Pedido em processamento'
      });
    }

    if (['shipped', 'delivered'].includes(status)) {
      timeline.push({
        status: 'shipped',
        date: new Date(createdAt.getTime() + 1000 * 60 * 60 * 24),
        description: 'Pedido enviado'
      });
    }

    if (status === 'delivered') {
      timeline.push({
        status: 'delivered',
        date: new Date(createdAt.getTime() + 1000 * 60 * 60 * 24 * 3),
        description: 'Pedido entregue'
      });
    }

    if (status === 'cancelled') {
      timeline.push({
        status: 'cancelled',
        date: new Date(createdAt.getTime() + 1000 * 60 * 60),
        description: 'Pedido cancelado'
      });
    }

    return {
      id: `ORDER-${(index + 1).toString().padStart(4, '0')}`,
      userId: '1',
      items,
      shipping,
      subtotal,
      total: subtotal + shipping.price,
      status,
      timeline,
      paymentMethod: Math.random() > 0.5 ? 'credit_card' : 'pix',
      createdAt,
      updatedAt: new Date()
    };
  });
};

interface GetOrdersParams {
  searchTerm?: string;
  dateRange?: {
    start: Date | null;
    end: Date | null;
  };
  sortBy?: 'date' | 'total';
  status?: OrderStatus;
}

const getOrders = async (params: GetOrdersParams = {}): Promise<Order[]> => {
  await delay(500); // Simulate network delay

  let filteredOrders = generateMockOrders(25);

  // Apply search filter
  if (params.searchTerm) {
    const searchLower = params.searchTerm.toLowerCase();
    filteredOrders = filteredOrders.filter(
      (order) =>
        order.id.toLowerCase().includes(searchLower) ||
        order.items.some((item) => item.name.toLowerCase().includes(searchLower))
    );
  }

  // Apply date range filter
  if (params.dateRange?.start || params.dateRange?.end) {
    filteredOrders = filteredOrders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const start = params.dateRange?.start;
      const end = params.dateRange?.end;

      if (start && end) {
        return orderDate >= start && orderDate <= end;
      } else if (start) {
        return orderDate >= start;
      } else if (end) {
        return orderDate <= end;
      }
      return true;
    });
  }

  // Apply status filter
  if (params.status) {
    filteredOrders = filteredOrders.filter((order) => order.status === params.status);
  }

  // Apply sorting
  if (params.sortBy) {
    filteredOrders.sort((a, b) => {
      if (params.sortBy === 'date') {
        return b.createdAt.getTime() - a.createdAt.getTime();
      } else {
        return b.total - a.total;
      }
    });
  }

  return filteredOrders;
};

const getOrderById = async (orderId: string): Promise<Order | null> => {
  await delay(300);
  const orders = generateMockOrders(25);
  return orders.find((order) => order.id === orderId) || null;
};

export const ordersService = {
  getOrders,
  getOrderById,
};
