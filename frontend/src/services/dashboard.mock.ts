import { delay } from '../utils/delay';

interface DashboardMetric {
  value: number;
  trend: number;
}

interface DashboardMetrics {
  totalSales: DashboardMetric;
  orderCount: DashboardMetric;
  averageTicket: DashboardMetric;
  activeCustomers: DashboardMetric;
}

interface SalesChartData {
  salesByDay: Record<string, number>;
}

interface TopProduct {
  product: {
    id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

export interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
  metadata?: {
    orderId?: string;
    productId?: string;
    customerId?: string;
    amount?: number;
  };
}

// Dados mockados para desenvolvimento
const mockMetrics: DashboardMetrics = {
  totalSales: { value: 15789.50, trend: 12.5 },
  orderCount: { value: 142, trend: 8.3 },
  averageTicket: { value: 111.19, trend: -2.4 },
  activeCustomers: { value: 897, trend: 15.7 }
};

const mockSalesData: SalesChartData = {
  salesByDay: {
    '2024-01-01': 1250.90,
    '2024-01-02': 980.50,
    '2024-01-03': 1500.75,
    // ... mais dados
  }
};

const mockTopProducts: TopProduct[] = [
  { product: { id: '1', name: 'Troca de Óleo', price: 35.90 }, quantity: 45 },
  { product: { id: '2', name: 'Alinhamento', price: 89.90 }, quantity: 38 },
  { product: { id: '3', name: 'Balanceamento', price: 49.90 }, quantity: 32 },
  { product: { id: '4', name: 'Revisão Completa', price: 299.90 }, quantity: 28 },
  { product: { id: '5', name: 'Troca de Filtros', price: 79.90 }, quantity: 25 }
];

async function getDashboardMetrics(): Promise<DashboardMetrics> {
  await delay(500);
  return mockMetrics;
}

async function getSalesChartData(): Promise<SalesChartData> {
  await delay(500);
  return mockSalesData;
}

async function getTopProducts(): Promise<TopProduct[]> {
  await delay(500);
  return mockTopProducts;
}

export const getRecentActivities = async (limit: number = 5): Promise<Activity[]> => {
  const response = await fetch(`/api/dashboard/activities?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch activities');
  }
  return response.json();
};

export const dashboardService = {
  getDashboardMetrics,
  getSalesChartData,
  getTopProducts,
  getRecentActivities
};
