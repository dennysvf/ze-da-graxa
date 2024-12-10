import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './Breadcrumb.module.scss';

export interface BreadcrumbItem {
  /** Identificador único do item */
  id: string;
  /** Texto do item */
  label: string;
  /** Link opcional (se não fornecido, é o item atual) */
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Array de itens do breadcrumb */
  items: BreadcrumbItem[];
  /** Separador entre itens */
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className,
  ...props
}) => {
  return (
    <nav 
      aria-label="Navegação estrutural" 
      className={clsx(styles.breadcrumb, className)}
      {...props}
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li 
              key={item.id}
              className={styles.item}
            >
              {item.href ? (
                <>
                  <Link 
                    to={item.href}
                    className={styles.link}
                  >
                    {item.label}
                  </Link>
                  {!isLast && (
                    <span 
                      className={styles.separator}
                      aria-hidden="true"
                    >
                      {separator}
                    </span>
                  )}
                </>
              ) : (
                <span 
                  className={styles.current}
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
