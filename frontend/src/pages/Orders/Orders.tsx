import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Order } from '../../types/order';
import { OrderList } from '../../components/OrderList';
import { Pagination } from '../../components/Pagination';
import { NavigationMenu } from '../../components/NavigationMenu';
import { SearchInput } from '../../components/SearchInput';
import { DateRangePicker } from '../../components/DateRangePicker';
import { ordersService } from '../../services/orders.mock';
import { debounce } from 'lodash';
import styles from './Orders.module.scss';

const ITEMS_PER_PAGE = 10;

interface OrdersFilter {
  status?: Order['status'];
  startDate?: Date;
  endDate?: Date;
  search?: string;
  sortBy?: 'date' | 'total';
  sortOrder?: 'asc' | 'desc';
}

export const Orders: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState<OrdersFilter>({
    sortBy: 'date',
    sortOrder: 'desc',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const filterItems = [
    { id: 'all', label: 'Todos os Pedidos' },
    { id: 'pending', label: 'Aguardando Pagamento' },
    { id: 'confirmed', label: 'Confirmado' },
    { id: 'processing', label: 'Em Processamento' },
    { id: 'shipped', label: 'Enviado' },
    { id: 'delivered', label: 'Entregue' },
    { id: 'cancelled', label: 'Cancelado' },
  ];

  const sortOptions = [
    { id: 'date-desc', label: 'Mais Recentes' },
    { id: 'date-asc', label: 'Mais Antigos' },
    { id: 'total-desc', label: 'Maior Valor' },
    { id: 'total-asc', label: 'Menor Valor' },
  ];

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const { orders: fetchedOrders, total } = await ordersService.getOrders(
        currentPage,
        {
          ...filter,
          search: searchTerm,
          startDate: dateRange.start,
          endDate: dateRange.end,
        }
      );
      setOrders(fetchedOrders);
      setTotalPages(Math.ceil(total / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
    } finally {
      setLoading(false);
    }
  }, [user, currentPage, filter, searchTerm, dateRange, navigate]);

  const debouncedFetchOrders = useCallback(
    debounce(() => {
      fetchOrders();
    }, 300),
    [fetchOrders]
  );

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
      return;
    }

    debouncedFetchOrders();
    return () => {
      debouncedFetchOrders.cancel();
    };
  }, [debouncedFetchOrders, user, navigate]);

  const handleFilterChange = (item: { id: string }) => {
    setFilter((prev) => ({
      ...prev,
      status: item.id === 'all' ? undefined : (item.id as Order['status']),
    }));
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortBy, sortOrder] = e.target.value.split('-') as ['date' | 'total', 'asc' | 'desc'];
    setFilter((prev) => ({ ...prev, sortBy, sortOrder }));
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleDateRangeChange = (start: Date | null, end: Date | null) => {
    setDateRange({ start, end });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.orders}>
      <header className={styles.header}>
        <h1 className={styles.title}>Meus Pedidos</h1>
        
        <div className={styles.filters}>
          <div className={styles.searchBar}>
            <SearchInput
              onSearch={handleSearch}
              placeholder="Buscar por número do pedido ou produto..."
              value={searchTerm}
            />
          </div>

          <div className={styles.filterBar}>
            <DateRangePicker
              startDate={dateRange.start}
              endDate={dateRange.end}
              onStartDateChange={(start) => handleDateRangeChange(start, dateRange.end)}
              onEndDateChange={(end) => handleDateRangeChange(dateRange.start, end)}
            />

            <select
              value={`${filter.sortBy}-${filter.sortOrder}`}
              onChange={handleSortChange}
              className={styles.sortSelect}
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <NavigationMenu
          items={filterItems}
          activeItem={filter.status || 'all'}
          onItemClick={handleFilterChange}
        />
      </header>

      <OrderList
        orders={orders}
        loading={loading}
        emptyMessage={
          searchTerm
            ? 'Nenhum pedido encontrado para esta busca'
            : filter.status
            ? 'Nenhum pedido encontrado com este status'
            : 'Você ainda não fez nenhum pedido'
        }
      />

      {!loading && orders.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
