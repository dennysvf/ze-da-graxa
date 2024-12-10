import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Order } from '../../types/order';
import { OrderCard } from '../../components/OrderCard';
import { OrderTimeline } from '../../components/OrderTimeline';
import { Button } from '../../components/Button';
import { ordersService } from '../../services/orders.mock';
import styles from './OrderDetails.module.scss';

export const OrderDetails: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
      return;
    }

    const fetchOrder = async () => {
      if (!orderId) return;

      setLoading(true);
      setError(null);

      try {
        const orderData = await ordersService.getOrderById(orderId);
        if (!orderData) {
          setError('Pedido não encontrado');
          return;
        }
        setOrder(orderData);
      } catch (err) {
        setError('Erro ao carregar o pedido');
        console.error('Erro ao carregar pedido:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, user, navigate]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Carregando detalhes do pedido...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className={styles.error}>
        <h2>{error || 'Pedido não encontrado'}</h2>
        <Button variant="primary" onClick={() => navigate('/orders')}>
          Voltar para Meus Pedidos
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Button
          variant="text"
          onClick={() => navigate('/orders')}
          className={styles.backButton}
        >
          ← Voltar para Meus Pedidos
        </Button>
        <h1 className={styles.title}>Detalhes do Pedido #{order.id}</h1>
      </header>

      <div className={styles.content}>
        <section className={styles.mainInfo}>
          <OrderCard order={order} />
        </section>

        <section className={styles.timeline}>
          <h2 className={styles.sectionTitle}>Status do Pedido</h2>
          <OrderTimeline timeline={order.timeline} />
        </section>

        <section className={styles.details}>
          <div className={styles.shippingInfo}>
            <h2 className={styles.sectionTitle}>Informações de Entrega</h2>
            <div className={styles.infoCard}>
              <p>
                <strong>Método de Entrega:</strong> {order.shipping.method}
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
              {order.shipping.trackingCode && (
                <p>
                  <strong>Código de Rastreio:</strong> {order.shipping.trackingCode}
                </p>
              )}
              <p>
                <strong>Previsão de Entrega:</strong>{' '}
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(order.shipping.estimatedDelivery)
                )}
              </p>
            </div>
          </div>

          <div className={styles.paymentInfo}>
            <h2 className={styles.sectionTitle}>Informações de Pagamento</h2>
            <div className={styles.infoCard}>
              <p>
                <strong>Método de Pagamento:</strong>{' '}
                {order.paymentMethod === 'credit_card'
                  ? 'Cartão de Crédito'
                  : 'PIX'}
              </p>
              <p>
                <strong>Status:</strong>{' '}
                {order.payment.status === 'success' ? 'Aprovado' : 'Pendente'}
              </p>
              {order.payment.paidAt && (
                <p>
                  <strong>Data do Pagamento:</strong>{' '}
                  {new Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  }).format(new Date(order.payment.paidAt))}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
