import React from 'react';
import { OrderTimeline as OrderTimelineType } from '../../types/order';
import styles from './OrderTimeline.module.scss';

export interface OrderTimelineProps {
  timeline: OrderTimelineType[];
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
};

const getStatusIcon = (status: OrderTimelineType['status']) => {
  switch (status) {
    case 'pending':
      return '⏳';
    case 'confirmed':
      return '✅';
    case 'processing':
      return '🔧';
    case 'shipped':
      return '📦';
    case 'delivered':
      return '🎉';
    case 'cancelled':
      return '❌';
    default:
      return '•';
  }
};

export const OrderTimeline: React.FC<OrderTimelineProps> = ({ timeline }) => {
  return (
    <div className={styles.timeline}>
      {timeline.map((event, index) => (
        <div
          key={`${event.status}-${index}`}
          className={`${styles.event} ${
            index === timeline.length - 1 ? styles.current : ''
          }`}
        >
          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              {getStatusIcon(event.status)}
            </span>
            {index < timeline.length - 1 && (
              <div className={styles.line} />
            )}
          </div>

          <div className={styles.content}>
            <div className={styles.status}>
              {event.description}
            </div>
            <time className={styles.date}>
              {formatDate(event.date)}
            </time>
          </div>
        </div>
      ))}
    </div>
  );
};
