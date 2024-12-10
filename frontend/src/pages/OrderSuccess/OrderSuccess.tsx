import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Order } from '../../types/order';
import { ordersService } from '../../services/orders.mock';
import { Button } from '../../components/Button';
import { OrderTimeline } from '../../components/OrderTimeline';
import { PriceDisplay } from '../../components/PriceDisplay';
import styles from './OrderSuccess.module.scss';

export const OrderSuccess: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const loadOrder = async () => {
      if (!orderId) return;
      
      try {
        const orderData = await ordersService.getOrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error('Erro ao carregar pedido:', error);
      }
    };

    loadOrder();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const getPaymentInstructions = () => {
    if (order.payment.method === 'pix') {
      return (
        <div className={styles.pixInstructions}>
          <h3>Instruções de Pagamento - PIX</h3>
          <div className={styles.qrCodePlaceholder}>
            <div className={styles.qrCode} />
            <p>QR Code do PIX</p>
          </div>
          <ol>
            <li>Abra o app do seu banco</li>
            <li>Escolha pagar via PIX com QR Code</li>
            <li>Escaneie o código acima</li>
            <li>Confirme o pagamento</li>
          </ol>
          <p className={styles.warning}>
            O pedido será confirmado automaticamente após o pagamento
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.success}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.icon}>✓</div>
          <h1>Pedido Realizado com Sucesso!</h1>
          <p className={styles.orderId}>
            Pedido #{order.id}
          </p>
        </div>

        <div className={styles.summary}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span>Status</span>
              <strong className={styles[order.status]}>
                {order.timeline[order.timeline.length - 1].description}
              </strong>
            </div>
            <div className={styles.infoItem}>
              <span>Data do Pedido</span>
              <strong>
                {new Intl.DateTimeFormat('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date(order.createdAt))}
              </strong>
            </div>
            <div className={styles.infoItem}>
              <span>Valor Total</span>
              <strong>
                <PriceDisplay value={order.total} />
              </strong>
            </div>
          </div>

          <div className={styles.timeline}>
            <h2>Acompanhe seu Pedido</h2>
            <OrderTimeline timeline={order.timeline} />
          </div>

          {getPaymentInstructions()}

          <div className={styles.shipping}>
            <h2>Entrega</h2>
            <div className={styles.shippingInfo}>
              <p>
                <strong>Método:</strong> {order.shipping.method}
              </p>
              <p>
                <strong>Previsão:</strong>{' '}
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(order.shipping.estimatedDelivery)
                )}
              </p>
              <p>
                <strong>Endereço:</strong>
                <br />
                {order.shipping.address.street}, {order.shipping.address.number}
                <br />
                {order.shipping.address.district}
                <br />
                {order.shipping.address.city} - {order.shipping.address.state}
                <br />
                CEP: {order.shipping.address.zipCode}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            variant="primary"
            onClick={() => navigate(`/orders/${order.id}`)}
          >
            Acompanhar Pedido
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/')}
          >
            Continuar Comprando
          </Button>
        </div>
      </div>
    </div>
  );
};
