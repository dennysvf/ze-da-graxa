import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Activity } from '../../services/dashboard.mock';
import styles from './ActivityList.module.scss';

interface ActivityListProps {
  activities: Activity[];
  loading?: boolean;
}

const getActivityIcon = (type: string): string => {
  switch (type) {
    case 'order_created':
      return '📝';
    case 'order_updated':
      return '✏️';
    case 'order_completed':
      return '✅';
    case 'product_updated':
      return '📦';
    case 'customer_registered':
      return '👤';
    case 'payment_received':
      return '💰';
    default:
      return '📌';
  }
};

export const ActivityList: React.FC<ActivityListProps> = ({ activities, loading = false }) => {
  if (loading) {
    return <div className={styles.loading}>Carregando atividades...</div>;
  }

  return (
    <div className={styles.activityList}>
      <h3 className={styles.title}>Atividades Recentes</h3>
      {activities.length === 0 ? (
        <p className={styles.empty}>Nenhuma atividade recente</p>
      ) : (
        <ul className={styles.list}>
          {activities.map((activity) => (
            <li key={activity.id} className={styles.item}>
              <span className={styles.icon}>{getActivityIcon(activity.type)}</span>
              <div className={styles.content}>
                <h4 className={styles.activityTitle}>{activity.title}</h4>
                <p className={styles.description}>{activity.description}</p>
                <span className={styles.timestamp}>
                  {formatDistanceToNow(new Date(activity.timestamp), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
