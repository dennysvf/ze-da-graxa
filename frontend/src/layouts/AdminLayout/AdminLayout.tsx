import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AdminHeader } from '../../components/AdminHeader';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Container } from '../../components/layout/Container';
import { Stack } from '../../components/layout/Stack';
import { Breadcrumb } from '../../components/Breadcrumb';
import styles from './AdminLayout.module.scss';

interface AdminLayoutProps {
  children: React.ReactNode
  currentPath?: string
}

const adminMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
  { id: 'financeiro', label: 'Financeiro', icon: 'payments', href: '/admin/financeiro' },
  { id: 'pedidos', label: 'Pedidos', icon: 'shopping_cart', href: '/admin/pedidos' },
  { id: 'produtos', label: 'Produtos', icon: 'inventory', href: '/admin/produtos' },
  { id: 'clientes', label: 'Clientes', icon: 'group', href: '/admin/clientes' },
]

export function AdminLayout({ children, currentPath }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  // Controla o colapso do sidebar baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth <= 1024);
    };

    handleResize(); // Checa o tamanho inicial
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearch = (query: string) => {
    // TODO: Implementar lógica de busca
    console.log('Search query:', query);
  };

  return (
    <div className={styles.layout}>
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        collapsed={isSidebarCollapsed}
        items={adminMenuItems}
        activeItem={currentPath}
        onItemClick={(item) => navigate(item.href || '#')}
      />
      <div className={`${styles.content} ${isSidebarCollapsed ? styles.contentExpanded : ''}`}>
        <AdminHeader
          onMenuClick={() => setIsSidebarOpen(true)}
          onSearch={handleSearch}
        />
        <main className={styles.main}>
          <Container>
            <Stack spacing="lg">
              <Breadcrumb />
              <div className={styles.content}>
                {children}
              </div>
            </Stack>
          </Container>
        </main>
      </div>
    </div>
  )
}
