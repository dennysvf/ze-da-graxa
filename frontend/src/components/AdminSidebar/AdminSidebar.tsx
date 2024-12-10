import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from '../Button';
import styles from './AdminSidebar.module.scss';

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  path?: string;
  onClick?: () => void;
  children?: MenuItem[];
}

interface AdminSidebarProps {
  /** Lista de itens do menu */
  items: MenuItem[];
  /** Se o sidebar está aberto (mobile) */
  isOpen: boolean;
  /** Callback para fechar o sidebar */
  onClose: () => void;
  /** Se o sidebar está colapsado */
  collapsed?: boolean;
  /** URL do logo */
  logo?: string;
  /** Callback para click no logo */
  onLogoClick?: () => void;
}

export const AdminSidebar = ({
  items,
  isOpen,
  onClose,
  collapsed = false,
  logo = '/logo.svg',
  onLogoClick,
}: AdminSidebarProps) => {
  const location = useLocation();

  const renderMenuItem = (item: MenuItem) => {
    const isActive = item.path && location.pathname === item.path;
    const buttonContent = (
      <>
        {item.icon && (
          <span className={clsx('material-icons', styles.icon)}>
            {item.icon}
          </span>
        )}
        {!collapsed && (
          <span className={styles.label}>{item.label}</span>
        )}
      </>
    );

    return (
      <li key={item.id}>
        {item.path ? (
          <Button
            as={Link}
            to={item.path}
            variant="ghost"
            className={clsx(
              styles.menuItem,
              isActive && styles.active
            )}
            onClick={() => {
              if (isOpen) onClose();
              item.onClick?.();
            }}
          >
            {buttonContent}
          </Button>
        ) : (
          <Button
            variant="ghost"
            className={styles.menuItem}
            onClick={() => {
              if (isOpen) onClose();
              item.onClick?.();
            }}
          >
            {buttonContent}
          </Button>
        )}
        {item.children && !collapsed && (
          <ul className={styles.submenu}>
            {item.children.map(renderMenuItem)}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside 
        className={clsx(
          styles.sidebar,
          isOpen && styles.open,
          collapsed && styles.collapsed
        )}
        aria-hidden={!isOpen}
      >
        <div className={styles.header}>
          <Button
            variant="ghost"
            className={styles.logoButton}
            onClick={onLogoClick}
            aria-label="Ir para página inicial"
          >
            <img
              src={logo}
              alt="Logo"
              className={styles.logo}
            />
          </Button>

          {!collapsed && (
            <Button
              variant="ghost"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Fechar menu"
            >
              <span className="material-icons">close</span>
            </Button>
          )}
        </div>

        <nav className={styles.nav} role="navigation">
          <ul className={styles.menu}>
            {items.map(renderMenuItem)}
          </ul>
        </nav>
      </aside>
    </>
  );
};
