import React from 'react';
import { Link } from 'react-router-dom';
import { Order } from '../../types/order';
import { PriceDisplay } from '../PriceDisplay';
import { OrderTimeline } from '../OrderTimeline';
import styles from './OrderCard.module.scss';

export interface OrderCardProps {
  order: Order;
  showDetails?: boolean;
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
};

export const OrderCard: React.FC<OrderCardProps> = ({ order, showDetails = true }) => {
  const lastTimelineEvent = order.timeline[order.timeline.length - 1];

  return (
    <article className={styles.orderCard}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            Pedido #{order.id.slice(-6).toUpperCase()}
          </h3>
          <time className={styles.date}>
            {formatDate(order.createdAt)}
          </time>
        </div>
        {showDetails && (
          <Link
            to={`/minha-conta/pedidos/${order.id}`}
            className={styles.detailsButton}
          >
            Ver Detalhes
          </Link>
        )}
      </header>

      <OrderTimeline timeline={order.timeline} />

      <div className={styles.items}>
        {order.items.map((item) => (
          <div key={item.id} className={styles.item}>
            <img
              src={item.images[0]}
              alt={item.name}
              className={styles.itemImage}
            />
            <div className={styles.itemInfo}>
              <Link
                to={`/produtos/${item.id}`}
                className={styles.itemName}
              >
                {item.name}
              </Link>
              <span className={styles.itemQuantity}>
                Quantidade: {item.quantity}
              </span>
            </div>
            <PriceDisplay
              value={item.price * item.quantity}
              size="medium"
            />
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <div className={styles.shipping}>
          <span className={styles.shippingLabel}>
            {order.shipping.name}
          </span>
          <PriceDisplay value={order.shipping.price} size="small" />
        </div>

        <div className={styles.total}>
          <span>Total do Pedido</span>
          <PriceDisplay value={order.total} size="large" />
        </div>
      </footer>
    </article>
  );
};
