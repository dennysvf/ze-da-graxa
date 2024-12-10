import React from 'react';
import { Order } from '../../types/order';
import { OrderCard } from '../OrderCard';
import styles from './OrderList.module.scss';

export interface OrderListProps {
  orders: Order[];
  loading?: boolean;
  emptyMessage?: string;
}

export const OrderList: React.FC<OrderListProps> = ({
  orders,
  loading = false,
  emptyMessage = 'Nenhum pedido encontrado',
}) => {
  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Carregando pedidos...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className={styles.empty}>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};
