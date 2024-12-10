# Gestão de Pedidos (Admin)

## 1. Visão Geral
- **Objetivo**: Gerenciar e processar pedidos dos clientes
- **Usuários**: Administradores e equipe de vendas
- **Fluxo**: Acessado via menu lateral do painel administrativo

## 2. Layout

### 2.1 Estrutura Visual
- **Container Principal (1200x900px)**
  - Background: var(--background-primary)
  - Padding: var(--spacing-6)

- **Header (1200x80px)**
  - Background: var(--background-secondary)
  - Border-bottom: 1px solid var(--border-color)
  - Padding: var(--spacing-4)

- **Área de Ações (1200x60px)**
  - Display: flex
  - Justify-content: space-between
  - Margin-bottom: var(--spacing-4)
  - Gap: var(--spacing-4)

- **Área de Filtros (1200x120px)**
  - Background: var(--background-white)
  - Border-radius: var(--radius-md)
  - Padding: var(--spacing-4)
  - Border: 1px solid var(--border-color)
  - Display: flex
  - Gap: var(--spacing-4)
  - Flex-wrap: wrap

- **Lista de Pedidos (1200xAuto)**
  - Display: grid
  - Grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))
  - Gap: var(--spacing-4)
  - Padding: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Filtros em accordion
  - Cards de pedido ocupam largura total
  - Informações condensadas
  - Ações em menu dropdown
- **Tablet** (768px - 1024px)
  - Grid de 2 colunas para cards
  - Filtros em linha com scroll horizontal
  - Informações essenciais visíveis
  - Ações principais visíveis
- **Desktop** (> 1024px)
  - Layout padrão com sidebar
  - Grid de 3 colunas para cards em tela cheia
  - Todas as informações visíveis
  - Todas as ações visíveis

## 3. Componentes do Design System

### 3.1 Navegação
- **NavigationMenu**
  - Props:
    - `orientation`: "vertical"
    - `items`: MenuItem[]
    - `activeItem`: "pedidos"
    - `onItemClick`: (item: MenuItem) => void

### 3.2 Ações
- **ActionBar**
  - Props:
    - `primaryAction`: ActionButton
    - `secondaryActions`: ActionButton[]
    - `layout`: "row" | "column"
    - `responsive`: boolean

- **Button**
  - Props:
    - `variant`: "primary" | "secondary" | "danger"
    - `size`: "sm" | "md" | "lg"
    - `icon`: IconName
    - `loading`: boolean
    - `disabled`: boolean

### 3.3 Filtros e Busca
- **SearchInput**
  - Props:
    - `placeholder`: string
    - `value`: string
    - `onChange`: ChangeHandler
    - `onSearch`: SearchHandler
    - `loading`: boolean
    - `debounce`: number

- **FilterBar**
  - Props:
    - `filters`: Filter[]
    - `selectedFilters`: SelectedFilters
    - `onChange`: FilterChangeHandler
    - `onClear`: ClearHandler
    - `layout`: "row" | "column"
    - `collapsible`: boolean

- **DateRangeFilter**
  - Props:
    - `startDate`: Date
    - `endDate`: Date
    - `onChange`: DateChangeHandler
    - `presets`: DatePreset[]
    - `maxRange`: number

### 3.4 Lista de Pedidos
- **OrderList**
  - Props:
    - `orders`: Order[]
    - `onOrderClick`: OrderClickHandler
    - `loading`: boolean
    - `layout`: "grid" | "list"
    - `pagination`: PaginationProps
    - `selection`: SelectionProps
    - `sortable`: boolean

- **OrderCard**
  - Props:
    - `order`: Order
    - `onClick`: ClickHandler
    - `onAction`: ActionHandler
    - `variant`: "compact" | "detailed" | "admin"
    - `showCustomer`: boolean
    - `showItems`: boolean
    - `showActions`: boolean

- **OrderTimeline**
  - Props:
    - `events`: OrderEvent[]
    - `orientation`: "vertical" | "horizontal"
    - `variant`: "compact" | "detailed"
    - `interactive`: boolean

### 3.5 Elementos de Interface
- **Container**
  - Props:
    - `variant`: "card" | "section"
    - `padding`: "sm" | "md" | "lg"
    - `elevation`: "none" | "sm" | "md"

- **OrderSummary**
  - Props:
    - `order`: Order
    - `showItems`: boolean
    - `showPayment`: boolean
    - `showShipping`: boolean
    - `variant`: "compact" | "detailed"

- **Pagination**
  - Props:
    - `page`: number
    - `totalPages`: number
    - `onPageChange`: PageChangeHandler
    - `itemsPerPage`: number
    - `totalItems`: number
    - `variant`: "simple" | "detailed"

## 4. Interações e Estados

### 4.1 Ações do Usuário
- [ ] Filtrar pedidos por status
- [ ] Buscar pedido por número/cliente
- [ ] Visualizar detalhes do pedido
- [ ] Atualizar status do pedido
- [ ] Gerenciar pagamentos
- [ ] Gerenciar envios
- [ ] Adicionar notas/observações
- [ ] Visualizar histórico
- [ ] Imprimir documentos
- [ ] Exportar dados

### 4.2 Feedback Visual
- [ ] Loading states
- [ ] Skeleton loading
- [ ] Toast notifications
- [ ] Confirmações de ação
- [ ] Indicadores de status
- [ ] Progress indicators
- [ ] Validação em tempo real
- [ ] Dicas de interface
- [ ] Alertas de atividade

## 5. Aspectos Técnicos

### 5.1 Integração com APIs
```typescript
interface OrdersAPI {
  listOrders: (filters: OrderFilters) => Promise<OrderResponse>;
  getOrder: (id: string) => Promise<Order>;
  updateOrder: (id: string, data: Partial<Order>) => Promise<Order>;
  cancelOrder: (id: string, reason: string) => Promise<Order>;
  exportOrders: (filters: OrderFilters) => Promise<Blob>;
  getOrderDetails: (id: string) => Promise<OrderDetails>;
  getOrderHistory: (id: string) => Promise<OrderHistory>;
  addOrderNote: (id: string, note: OrderNote) => Promise<OrderNote>;
  updatePayment: (id: string, payment: OrderPayment) => Promise<Order>;
  updateShipping: (id: string, shipping: OrderShipping) => Promise<Order>;
  generateInvoice: (id: string) => Promise<Blob>;
  generateLabel: (id: string) => Promise<Blob>;
}

interface Order {
  id: string;
  number: string;
  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  items: OrderItem[];
  payment: {
    method: PaymentMethod;
    status: PaymentStatus;
    amount: number;
    installments: number;
    dueDate: Date;
  };
  shipping: {
    method: ShippingMethod;
    status: ShippingStatus;
    address: Address;
    tracking: string;
    cost: number;
    estimatedDate: Date;
  };
  status: OrderStatus;
  subtotal: number;
  discount: number;
  total: number;
  notes: OrderNote[];
  history: OrderEvent[];
  createdAt: Date;
  updatedAt: Date;
}

interface OrderFilters {
  status?: OrderStatus[];
  dateRange?: DateRange;
  paymentStatus?: PaymentStatus[];
  shippingStatus?: ShippingStatus[];
  customerIds?: string[];
  search?: string;
  minTotal?: number;
  maxTotal?: number;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

interface OrderResponse {
  orders: Order[];
  total: number;
  page: number;
  totalPages: number;
  stats: {
    totalOrders: number;
    totalRevenue: number;
    averageOrderValue: number;
    statusBreakdown: {
      [key in OrderStatus]: number;
    };
  };
}

interface OrderEvent {
  id: string;
  type: OrderEventType;
  status: OrderStatus;
  description: string;
  metadata: Record<string, any>;
  createdAt: Date;
  createdBy: string;
}

type OrderEventType =
  | 'created'
  | 'updated'
  | 'status_changed'
  | 'payment_updated'
  | 'shipping_updated'
  | 'note_added'
  | 'cancelled';

type OrderStatus =
  | 'pending'
  | 'processing'
  | 'confirmed'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'returned';

type PaymentStatus =
  | 'pending'
  | 'authorized'
  | 'paid'
  | 'failed'
  | 'refunded'
  | 'chargedback';

type ShippingStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'returned';
```

### 5.2 Performance
- **Otimizações**:
  - [ ] Paginação server-side
  - [ ] Lazy loading de dados
  - [ ] Debounce na busca
  - [ ] Cache de filtros
  - [ ] Memoização de componentes
  - [ ] Virtualização de listas
  - [ ] Otimização de queries
  - [ ] Indexação de busca
  - [ ] Compressão de dados

## 6. Variáveis de Estilo
```scss
// Cores do Tema
$order-primary: var(--primary-500);
$order-secondary: var(--secondary-500);
$order-background: var(--background-primary);

// Status do Pedido
$status-pending: var(--warning-500);
$status-processing: var(--primary-500);
$status-confirmed: var(--info-500);
$status-shipped: var(--primary-700);
$status-delivered: var(--success-500);
$status-cancelled: var(--error-500);
$status-returned: var(--error-700);

// Status do Pagamento
$payment-pending: var(--warning-500);
$payment-authorized: var(--info-500);
$payment-paid: var(--success-500);
$payment-failed: var(--error-500);
$payment-refunded: var(--warning-700);
$payment-chargedback: var(--error-700);

// Status do Envio
$shipping-pending: var(--warning-500);
$shipping-processing: var(--primary-500);
$shipping-shipped: var(--info-500);
$shipping-delivered: var(--success-500);
$shipping-returned: var(--error-500);

// Espaçamentos
$card-padding: var(--spacing-4);
$list-gap: var(--spacing-4);
$section-gap: var(--spacing-6);
$action-gap: var(--spacing-3);
$timeline-gap: var(--spacing-2);

// Tipografia
$order-title: var(--font-lg);
$order-subtitle: var(--font-md);
$order-text: var(--font-sm);
$status-text: var(--font-sm);
$timeline-text: var(--font-sm);
$note-text: var(--font-sm);

// Dimensões
$card-min-width: 400px;
$card-max-width: 500px;
$timeline-dot: 12px;
$timeline-line: 2px;
$status-icon: 24px;
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] CRUD de pedidos
- [ ] Filtros e busca
- [ ] Gestão de status
- [ ] Gestão de pagamentos
- [ ] Gestão de envios
- [ ] Notas e observações
- [ ] Histórico de eventos
- [ ] Documentos (invoice/etiquetas)
- [ ] Exportação de dados
- [ ] Responsividade
- [ ] Performance
- [ ] Cache e persistência
- [ ] Validações de formulário
- [ ] Tratamento de erros
- [ ] Permissões de acesso

## 8. Checklist de Implementação
- [ ] Estrutura base
  - [ ] Layout responsivo
  - [ ] Componentes do design system
  - [ ] Integração com API
- [ ] Funcionalidades
  - [ ] Sistema de filtros
  - [ ] Busca de pedidos
  - [ ] Gestão de status
  - [ ] Gestão de pagamentos
  - [ ] Gestão de envios
  - [ ] Notas e observações
  - [ ] Histórico de eventos
  - [ ] Documentos
  - [ ] Exportação
- [ ] UI/UX
  - [ ] Estados de loading
  - [ ] Feedback visual
  - [ ] Animações
  - [ ] Temas (claro/escuro)
  - [ ] Acessibilidade
  - [ ] Responsividade
- [ ] Performance
  - [ ] Otimização de dados
  - [ ] Caching
  - [ ] Lazy loading
  - [ ] Virtualização
  - [ ] Indexação
- [ ] Testes
  - [ ] Unitários
  - [ ] Integração
  - [ ] E2E
  - [ ] Performance
  - [ ] Acessibilidade
- [ ] Documentação
  - [ ] Comentários no código
  - [ ] README atualizado
  - [ ] Storybook components
  - [ ] Guia de contribuição
  - [ ] Documentação de API
