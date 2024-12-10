import express from 'express';
import { auth } from '../middleware/auth';
import { orders } from '../mocks/orders.mock';
import { products } from '../mocks/products.mock';
import { users } from '../mocks/users.mock';
import { getRecentActivities } from '../services/activity.mock';

const router = express.Router();

// GET /api/dashboard/metrics
router.get('/metrics', auth, (req, res) => {
  // Calcular métricas dos últimos 30 dias
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentOrders = orders.filter(order => 
    new Date(order.createdAt) >= thirtyDaysAgo && 
    order.status !== 'cancelled'
  );

  const lastMonthOrders = orders.filter(order => 
    new Date(order.createdAt) >= new Date(thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)) &&
    new Date(order.createdAt) < thirtyDaysAgo &&
    order.status !== 'cancelled'
  );

  // Calcular totais
  const totalSales = recentOrders.reduce((sum, order) => sum + order.total, 0);
  const lastMonthSales = lastMonthOrders.reduce((sum, order) => sum + order.total, 0);
  const salesTrend = lastMonthSales ? ((totalSales - lastMonthSales) / lastMonthSales) * 100 : 0;

  // Calcular ticket médio
  const averageTicket = totalSales / recentOrders.length || 0;
  const lastMonthTicket = lastMonthSales / lastMonthOrders.length || 0;
  const ticketTrend = lastMonthTicket ? ((averageTicket - lastMonthTicket) / lastMonthTicket) * 100 : 0;

  // Contagem de pedidos
  const orderCount = recentOrders.length;
  const lastMonthCount = lastMonthOrders.length;
  const ordersTrend = lastMonthCount ? ((orderCount - lastMonthCount) / lastMonthCount) * 100 : 0;

  // Clientes ativos (com pedidos nos últimos 30 dias)
  const activeCustomers = new Set(recentOrders.map(order => order.userId)).size;
  const lastMonthCustomers = new Set(lastMonthOrders.map(order => order.userId)).size;
  const customersTrend = lastMonthCustomers ? ((activeCustomers - lastMonthCustomers) / lastMonthCustomers) * 100 : 0;

  res.json({
    metrics: {
      totalSales: {
        value: totalSales,
        trend: salesTrend
      },
      orderCount: {
        value: orderCount,
        trend: ordersTrend
      },
      averageTicket: {
        value: averageTicket,
        trend: ticketTrend
      },
      activeCustomers: {
        value: activeCustomers,
        trend: customersTrend
      }
    }
  });
});

// Endpoint para buscar atividades recentes
router.get('/activities', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 5;
  const activities = getRecentActivities(limit);
  res.json(activities);
});

// GET /api/dashboard/charts/sales
router.get('/charts/sales', auth, (req, res) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  // Agrupar vendas por dia
  const salesByDay = orders
    .filter(order => new Date(order.createdAt) >= thirtyDaysAgo && order.status !== 'cancelled')
    .reduce((acc, order) => {
      const date = new Date(order.createdAt).toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + order.total;
      return acc;
    }, {} as Record<string, number>);

  res.json({ salesByDay });
});

// GET /api/dashboard/charts/products
router.get('/charts/products', auth, (req, res) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  // Agrupar produtos mais vendidos
  const productSales = orders
    .filter(order => new Date(order.createdAt) >= thirtyDaysAgo && order.status !== 'cancelled')
    .flatMap(order => order.items)
    .reduce((acc, item) => {
      acc[item.productId] = (acc[item.productId] || 0) + item.quantity;
      return acc;
    }, {} as Record<string, number>);

  // Pegar os 5 produtos mais vendidos
  const topProducts = Object.entries(productSales)
    .map(([productId, quantity]) => ({
      product: products.find(p => p.id === productId)!,
      quantity
    }))
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);

  res.json({ topProducts });
});

export default router;
