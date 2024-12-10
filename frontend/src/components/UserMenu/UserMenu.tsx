import React, { useState } from 'react';
import { useAuthStore } from '../../stores/auth';
import { NavigationMenu } from '../NavigationMenu';
import { Button } from '../Button';
import styles from './UserMenu.module.scss';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface UserMenuProps {
  /** Dados do usuário */
  user: User;
}

export const UserMenu = ({ user }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthStore();

  const menuItems = [
    { id: 'profile', label: 'Meu Perfil', icon: 'person', path: '/admin/profile' },
    { id: 'settings', label: 'Configurações', icon: 'settings', path: '/admin/settings' },
    { id: 'logout', label: 'Sair', icon: 'logout', onClick: logout },
  ];

  return (
    <div className={styles.container}>
      <Button
        variant="outline"
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {user.avatar ? (
          <img 
            src={user.avatar} 
            alt={`Avatar de ${user.name}`} 
            className={styles.avatar}
          />
        ) : (
          <span className="material-icons">account_circle</span>
        )}
        <span className={styles.userName}>{user.name}</span>
      </Button>

      {isOpen && (
        <>
          <div 
            className={styles.overlay} 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div 
            className={styles.menu} 
            role="menu"
            aria-label="Menu do usuário"
          >
            <NavigationMenu
              items={menuItems}
              orientation="vertical"
              onItemClick={(item) => {
                if (item.onClick) {
                  item.onClick();
                }
                setIsOpen(false);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
