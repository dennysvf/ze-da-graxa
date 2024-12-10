import express from 'express';
import { auth } from '../middleware/auth';
import { orders } from '../mocks/orders.mock';
import { cartData } from '../mocks/cart.mock';
import { products } from '../mocks/products.mock';
import { Order, OrderStatus } from '../types';

const router = express.Router();

// GET /api/orders
router.get('/', auth, (req, res) => {
  const userId = req.user!.userId;
  const userOrders = orders.filter(order => order.userId === userId);

  res.json({
    items: userOrders,
    total: userOrders.length
  });
});

// GET /api/orders/:id
router.get('/:id', auth, (req, res) => {
  const userId = req.user!.userId;
  const order = orders.find(
    order => order.id === req.params.id && order.userId === userId
  );

  if (!order) {
    return res.status(404).json({
      status: 'error',
      message: 'Order not found'
    });
  }

  res.json(order);
});

// POST /api/orders
router.post('/', auth, (req, res) => {
  const userId = req.user!.userId;
  const { shippingAddress, paymentMethod } = req.body;

  // Verificar se usuário tem itens no carrinho
  const cart = cartData[userId];
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Cart is empty'
    });
  }

  // Calcular totais
  const orderItems = cart.items.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) throw new Error('Product not found');

    return {
      productId: item.productId,
      quantity: item.quantity,
      price: product.price,
      total: product.price * item.quantity
    };
  });

  const subtotal = orderItems.reduce((sum, item) => sum + item.total, 0);
  const shippingPrice = 10.00; // Valor fixo para mock
  const total = subtotal + shippingPrice;

  // Criar pedido
  const newOrder: Order = {
    id: String(orders.length + 1),
    userId,
    items: orderItems,
    status: 'pending_payment',
    shipping: {
      address: shippingAddress,
      method: 'PAC',
      price: shippingPrice,
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // +7 dias
    },
    payment: {
      method: paymentMethod,
      status: 'pending',
      total
    },
    total,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // Adicionar pedido e limpar carrinho
  orders.push(newOrder);
  cartData[userId] = { items: [] };

  // Simular processamento assíncrono do pagamento
  setTimeout(() => {
    newOrder.status = 'paid';
    newOrder.payment.status = 'success';
    newOrder.payment.paidAt = new Date();
    newOrder.updatedAt = new Date();
  }, 2000);

  res.status(201).json({
    orderId: newOrder.id,
    status: newOrder.status
  });
});

// GET /api/orders/:id/tracking
router.get('/:id/tracking', auth, (req, res) => {
  const userId = req.user!.userId;
  const order = orders.find(
    order => order.id === req.params.id && order.userId === userId
  );

  if (!order) {
    return res.status(404).json({
      status: 'error',
      message: 'Order not found'
    });
  }

  // Mock do timeline de eventos
  const timeline = [
    {
      status: 'pending_payment',
      date: order.createdAt,
      description: 'Pedido realizado'
    }
  ];

  if (order.payment.status === 'success') {
    timeline.push({
      status: 'paid',
      date: order.payment.paidAt!,
      description: 'Pagamento confirmado'
    });
  }

  if (order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered') {
    timeline.push({
      status: 'processing',
      date: new Date(order.payment.paidAt!.getTime() + 24 * 60 * 60 * 1000),
      description: 'Pedido em separação'
    });
  }

  if (order.status === 'shipped' || order.status === 'delivered') {
    timeline.push({
      status: 'shipped',
      date: new Date(order.payment.paidAt!.getTime() + 2 * 24 * 60 * 60 * 1000),
      description: 'Pedido enviado',
      trackingCode: order.shipping.trackingCode
    });
  }

  if (order.status === 'delivered') {
    timeline.push({
      status: 'delivered',
      date: new Date(order.payment.paidAt!.getTime() + 7 * 24 * 60 * 60 * 1000),
      description: 'Pedido entregue'
    });
  }

  res.json({
    status: order.status,
    timeline,
    shipping: order.shipping
  });
});

export default router;
