import { CheckoutData } from '../types/checkout';
import { Order } from '../types/order';
import { delay } from '../utils/delay';

export const checkoutService = {
  async createOrder(checkoutData: CheckoutData): Promise<Order> {
    await delay(1000); // Simula delay da rede

    // Simula criação do pedido
    const order: Order = {
      id: `ORDER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      userId: '1', // Usuário mockado
      items: checkoutData.items,
      shipping: {
        ...checkoutData.shipping,
        address: checkoutData.address,
        trackingCode: undefined,
        estimatedDelivery: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 dias
      },
      payment: {
        method: checkoutData.payment.method,
        status: 'pending',
        total: checkoutData.total,
        paidAt: undefined,
      },
      status: 'pending',
      timeline: [
        {
          status: 'pending',
          date: new Date(),
          description: 'Pedido realizado',
        },
      ],
      subtotal: checkoutData.subtotal,
      total: checkoutData.total,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Simula processamento do pagamento
    if (checkoutData.payment.method === 'pix') {
      await delay(1500);
      order.payment.status = 'success';
      order.payment.paidAt = new Date();
      order.status = 'confirmed';
      order.timeline.push({
        status: 'confirmed',
        date: new Date(),
        description: 'Pagamento confirmado via PIX',
      });
    } else if (checkoutData.payment.method === 'credit_card') {
      await delay(2000);
      order.payment.status = 'success';
      order.payment.paidAt = new Date();
      order.status = 'confirmed';
      order.timeline.push({
        status: 'confirmed',
        date: new Date(),
        description: 'Pagamento confirmado via Cartão de Crédito',
      });
    }

    return order;
  },
};
