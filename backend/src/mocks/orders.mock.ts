import { Order, OrderStatus } from '../types/order';

// Mock orders data
const generateMockOrders = (count: number): Order[] => {
  const orders: Order[] = [];
  const statuses: OrderStatus[] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
  const products = [
    { id: 'PROD-001', name: 'Oil Filter', price: 15.99 },
    { id: 'PROD-002', name: 'Air Filter', price: 25.99 },
    { id: 'PROD-003', name: 'Brake Pads', price: 45.99 },
    { id: 'PROD-004', name: 'Spark Plugs', price: 12.99 },
    { id: 'PROD-005', name: 'Motor Oil', price: 35.99 },
  ];

  for (let i = 0; i < count; i++) {
    const itemCount = Math.floor(Math.random() * 3) + 1;
    const items = Array.from({ length: itemCount }, () => {
      const product = products[Math.floor(Math.random() * products.length)];
      const quantity = Math.floor(Math.random() * 3) + 1;
      return {
        ...product,
        quantity,
      };
    });

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    
    // Generate a date within the last 30 days
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));

    orders.push({
      id: `ORD-${String(i + 1).padStart(3, '0')}`,
      userId: `USR-001`,
      status,
      items,
      total,
      createdAt: date,
      updatedAt: date,
    });
  }

  return orders;
};

interface GetOrdersParams {
  searchTerm?: string;
  dateRange?: {
    start: Date | null;
    end: Date | null;
  };
  sortBy?: 'date' | 'total';
  status?: OrderStatus;
  page?: number;
  perPage?: number;
}

export const getOrders = async (params: GetOrdersParams = {}): Promise<{ orders: Order[]; total: number }> => {
  const allOrders = generateMockOrders(50);
  let filteredOrders = [...allOrders];

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

  // Apply pagination
  const page = params.page || 1;
  const perPage = params.perPage || 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    orders: filteredOrders.slice(start, end),
    total: filteredOrders.length,
  };
};

export const getOrderById = async (orderId: string): Promise<Order | null> => {
  const orders = generateMockOrders(50);
  return orders.find((order) => order.id === orderId) || null;
};

export const ordersService = {
  getOrders,
  getOrderById,
};
