import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NavigationMenu.module.scss';

export interface MenuItem {
  /** Identificador único do item */
  id: string;
  /** Texto do item */
  label: string;
  /** Ícone do item (material icons) */
  icon?: string;
  /** Se o item está desabilitado */
  disabled?: boolean;
  /** URL para navegação */
  href?: string;
  /** Callback quando o item é clicado */
  onClick?: () => void;
  /** Subitens do menu */
  children?: MenuItem[];
}

export interface NavigationMenuProps {
  /** Lista de itens do menu */
  items: MenuItem[];
  /** Orientação do menu */
  orientation?: 'horizontal' | 'vertical';
  /** Variante visual do menu */
  variant?: 'primary' | 'secondary';
  /** Tamanho dos itens */
  size?: 'small' | 'medium' | 'large';
  /** ID do item ativo */
  activeItem?: string;
  /** Callback quando um item é clicado */
  onItemClick?: (item: MenuItem) => void;
  /** Classe CSS adicional */
  className?: string;
}

export const NavigationMenu = ({
  items,
  orientation = 'horizontal',
  variant = 'primary',
  size = 'medium',
  activeItem,
  onItemClick,
  className,
}: NavigationMenuProps) => {
  const renderMenuItem = (item: MenuItem) => {
    const isActive = activeItem === item.id;
    const handleClick = () => {
      if (!item.disabled && onItemClick) {
        onItemClick(item);
      }
      item.onClick?.();
    };

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

    const itemClasses = clsx(
      styles.item,
      isActive && styles.active,
      item.disabled && styles.disabled
    );

    return (
      <li key={item.id} className={styles.listItem}>
        {item.href ? (
          <Link
            to={item.href}
            className={itemClasses}
            onClick={handleClick}
            aria-current={isActive ? 'page' : undefined}
            aria-disabled={item.disabled}
          >
            {itemContent}
          </Link>
        ) : (
          <button
            type="button"
            className={itemClasses}
            onClick={handleClick}
            disabled={item.disabled}
            aria-current={isActive ? 'true' : undefined}
          >
            {itemContent}
          </button>
        )}
        {item.children && (
          <ul className={styles.submenu}>
            {item.children.map(renderMenuItem)}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav
      className={clsx(
        styles.menu,
        styles[orientation],
        styles[variant],
        styles[size],
        className
      )}
      role="navigation"
    >
      <ul className={styles.list}>
        {items.map(renderMenuItem)}
      </ul>
    </nav>
  );
};
