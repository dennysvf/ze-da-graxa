# Documentação Técnica - Pedidos

## 1. ANÁLISE INICIAL

### Seções da Interface
- Header (Navegação Principal)
- Orders List (Lista de Pedidos)
- Order Details (Detalhes do Pedido)
- Filter Section (Filtros de Pedidos)
- Status Timeline (Linha do Tempo)

### Componentes Reutilizáveis
- OrderCard
- StatusBadge
- Timeline
- FilterDropdown
- SearchInput
- Pagination
- DatePicker

### Hierarquia de Elementos
```
└── Main Container (1440px)
    ├── Header
    │   ├── Logo
    │   ├── Navigation Menu
    │   └── User Actions
    │       ├── Search
    │       ├── Account
    │       └── Cart
    ├── Orders Content
    │   ├── Filter Section
    │   │   ├── Search Input
    │   │   ├── Date Filter
    │   │   └── Status Filter
    │   ├── Orders List
    │   │   └── OrderCard (repetido)
    │   │       ├── Order Number
    │   │       ├── Date
    │   │       ├── Status
    │   │       └── Total
    │   └── Order Details
    │       ├── Customer Info
    │       ├── Products List
    │       ├── Payment Info
    │       └── Status Timeline
    └── Pagination
```

### Sistema de Grid/Layout
- Container principal: 1440px
- Grid responsivo
- Espaçamento entre elementos: 24px

## 2. DESIGN TOKENS

### Cores
```css
:root {
  /* Cores Principais */
  --color-primary: #58D899;
  --color-text: #616161;
  --color-background: #FFFFFF;
  --color-border: #EDEDED;
  
  /* Status */
  --color-pending: #FFC107;
  --color-processing: #2196F3;
  --color-completed: #4CAF50;
  --color-cancelled: #F44336;
  
  /* Variações */
  --color-background-light: #F5F5F5;
  --color-text-light: #9E9E9E;
}
```

### Tipografia
```css
:root {
  /* Família */
  --font-family: 'Inter', sans-serif;
  
  /* Tamanhos */
  --font-size-h1: 25px;
  --font-size-h2: 20px;
  --font-size-body: 14px;
  --font-size-small: 12px;
  
  /* Pesos */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  
  /* Espaçamento */
  --letter-spacing: 0.2px;
}
```

### Espaçamento
```css
:root {
  /* Containers */
  --container-max-width: 1440px;
  --container-padding: 120px;
  
  /* Elementos */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  
  /* Grid */
  --grid-gap: 24px;
}
```

### Efeitos
```css
:root {
  /* Bordas */
  --border-radius: 5px;
  --border-width: 1px;
  
  /* Sombras */
  --shadow-card: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* Transições */
  --transition-default: all 0.3s ease;
}
```

## 3. COMPONENTES

### OrderCard
```typescript
interface OrderCardProps {
  id: string;
  number: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
  onClick: (id: string) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  id,
  number,
  date,
  status,
  total,
  items,
  onClick,
}) => {
  return (
    <div className={styles.orderCard} onClick={() => onClick(id)}>
      <div className={styles.header}>
        <span className={styles.number}>Pedido #{number}</span>
        <StatusBadge status={status} />
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{formatDate(date)}</span>
        <span className={styles.items}>{items.length} itens</span>
        <span className={styles.total}>
          <PriceDisplay value={total} />
        </span>
      </div>
    </div>
  );
};
```

### StatusTimeline
```typescript
interface TimelineProps {
  events: TimelineEvent[];
  currentStatus: OrderStatus;
}

const StatusTimeline: React.FC<TimelineProps> = ({
  events,
  currentStatus,
}) => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          date={event.date}
          status={event.status}
          description={event.description}
          isActive={event.status === currentStatus}
        />
      ))}
    </div>
  );
};
```

## 4. FUNCIONALIDADES

### Interações do Usuário
- Visualizar lista de pedidos
- Filtrar por status/data
- Buscar pedido específico
- Ver detalhes do pedido
- Acompanhar status
- Cancelar pedido (quando possível)

### Estados
```typescript
interface OrdersState {
  orders: Order[];
  selectedOrder: Order | null;
  filters: {
    status: OrderStatus[];
    dateRange: DateRange;
    search: string;
  };
  pagination: {
    page: number;
    perPage: number;
    total: number;
  };
  loading: boolean;
  error: string | null;
}
```

### Comportamentos
- Atualização em tempo real
- Paginação infinita
- Filtros persistentes
- Cache de dados

## 5. ASSETS

### Imagens
- Ícones do sistema (SVG)
  - search.svg
  - filter.svg
  - calendar.svg
  - arrow-right.svg
- Status Icons
  - pending.svg
  - processing.svg
  - completed.svg
  - cancelled.svg

### Ícones
- Material Icons
  - shopping_bag
  - access_time
  - check_circle
  - cancel

## 6. ACESSIBILIDADE

### Semântica HTML
```html
<main role="main">
  <h1>Meus Pedidos</h1>
  <section aria-label="Filtros">
    <!-- Filters -->
  </section>
  <section aria-label="Lista de Pedidos">
    <!-- OrderCards -->
  </section>
</main>
```

### ARIA Labels
```html
<button aria-label="Ver detalhes do pedido">
<div role="status" aria-live="polite">
<input aria-label="Buscar pedidos" type="search">
```

### Navegação por Teclado
- Tab order lógico
- Atalhos de teclado
- Focus visível

## 7. ESTRUTURA REACT

### Árvore de Componentes
```
src/
  components/
    orders/
      OrderCard.tsx
      OrderDetails.tsx
      StatusTimeline.tsx
      FilterSection.tsx
      OrdersList.tsx
  hooks/
    useOrders.ts
    useOrderFilters.ts
  context/
    OrdersContext.tsx
  services/
    orders.service.ts
```

### Context API
```typescript
const OrdersContext = createContext<OrdersContextType | null>(null);

export const OrdersProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, initialState);
  
  return (
    <OrdersContext.Provider value={{ state, dispatch }}>
      {children}
    </OrdersContext.Provider>
  );
};
```

## 8. CONSIDERAÇÕES TÉCNICAS

### Performance
- Virtualização da lista
- Lazy loading de detalhes
- Debounce em filtros
- Cache de pedidos

### Testes
```typescript
describe('OrderCard', () => {
  it('should display order information correctly');
  it('should handle click events');
  it('should show correct status');
});

describe('OrdersContext', () => {
  it('should filter orders correctly');
  it('should handle pagination');
});
```

### Edge Cases
- Pedidos sem itens
- Status inválidos
- Erro na API
- Timeout em requisições

## 9. EXEMPLOS DE USO

### Básico
```typescript
<Orders orders={ordersList} />
```

### Completo
```typescript
<OrdersProvider>
  <Orders
    orders={ordersList}
    filters={activeFilters}
    pagination={paginationConfig}
    onOrderSelect={handleOrderSelect}
    onFilterChange={handleFilterChange}
    onPageChange={handlePageChange}
    onStatusUpdate={handleStatusUpdate}
    onOrderCancel={handleOrderCancel}
  />
</OrdersProvider>
```
