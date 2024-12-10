import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbItem {
  /** Identificador único do item */
  id: string;
  /** Texto do item */
  label: string;
  /** URL para navegação */
  href?: string;
  /** Ícone do item (material icons) */
  icon?: string;
  /** Callback quando o item é clicado */
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  /** Lista de itens do breadcrumb */
  items: BreadcrumbItem[];
  /** Separador entre os itens */
  separator?: string;
  /** Máximo de itens visíveis (os do meio são colapsados) */
  maxItems?: number;
  /** Classe CSS adicional */
  className?: string;
}

export const Breadcrumbs = ({
  items,
  separator = '/',
  maxItems = 0,
  className,
}: BreadcrumbsProps) => {
  const renderItems = () => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    const firstItems = items.slice(0, Math.ceil(maxItems / 2));
    const lastItems = items.slice(-(Math.floor(maxItems / 2)));

    return [
      ...firstItems,
      { id: 'ellipsis', label: '...', href: undefined },
      ...lastItems,
    ];
  };

  const renderItem = (item: BreadcrumbItem, index: number, array: BreadcrumbItem[]) => {
    const isLast = index === array.length - 1;
    const itemContent = (
      <>
        {item.icon && (
          <span className={clsx('material-icons', styles.icon)}>
            {item.icon}
          </span>
        )}
        <span className={styles.label}>{item.label}</span>
      </>
    );

    return (
      <li 
        key={item.id} 
        className={styles.item}
        aria-current={isLast ? 'page' : undefined}
      >
        {item.href ? (
          <Link 
            to={item.href}
            className={styles.link}
            onClick={item.onClick}
          >
            {itemContent}
          </Link>
        ) : (
          <span 
            className={clsx(styles.text, isLast && styles.current)}
            onClick={item.onClick}
            role={item.onClick ? 'button' : undefined}
            tabIndex={item.onClick ? 0 : undefined}
          >
            {itemContent}
          </span>
        )}
        {!isLast && (
          <span 
            className={styles.separator}
            aria-hidden="true"
          >
            {separator}
          </span>
        )}
      </li>
    );
  };

  return (
    <nav 
      className={clsx(styles.breadcrumbs, className)}
      aria-label="Navegação estrutural"
    >
      <ol className={styles.list}>
        {renderItems().map(renderItem)}
      </ol>
    </nav>
  );
};
