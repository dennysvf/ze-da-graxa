# Biblioteca de Componentes - Zé da Graxa

## 1. COMPONENTES GLOBAIS

### 1.1 Layout & Estrutura

#### AppLayout
```typescript
interface AppLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  showSidebar?: boolean;
}
```
- **Uso**: Layout base da aplicação
- **Telas**: Todas as telas (100% de reuso)
- **Subcomponentes**:
  - Header
  - Footer
  - Sidebar
  - MainContent

#### Header
```typescript
interface HeaderProps {
  user?: User;
  cartItemCount?: number;
  onSearch?: (query: string) => void;
  isAdmin?: boolean;
}
```
- **Variações**: 
  - ClientHeader (Landing, Produtos, Carrinho, Pedidos, Favoritos, Perfil)
  - AdminHeader (Dashboard, Produtos Admin, Clientes, Pedidos Admin, Configurações)

#### Sidebar
```typescript
interface SidebarProps {
  items: MenuItem[];
  activeItem: string;
  collapsed?: boolean;
  onToggle?: () => void;
}
```
- **Variações**:
  - AdminSidebar (Todas as telas admin)
  - FilterSidebar (Produtos)

### 1.2 Navegação

#### NavigationMenu
```typescript
interface NavigationMenuProps {
  items: MenuItem[];
  orientation: 'horizontal' | 'vertical';
  activeItem?: string;
  onItemClick: (item: MenuItem) => void;
}
```

#### Breadcrumb
```typescript
interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}
```

#### Pagination
```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
}
```

### 1.3 Formulários

#### FormField
```typescript
interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea' | 'select' | 'radio' | 'checkbox';
  value: any;
  onChange: (value: any) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  options?: SelectOption[];
}
```

#### SearchInput
```typescript
interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  autoComplete?: boolean;
  suggestions?: string[];
}
```

#### FilterGroup
```typescript
interface FilterGroupProps {
  title: string;
  filters: Filter[];
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
  collapsible?: boolean;
}
```

### 1.4 Feedback & Estado

#### LoadingSpinner
```typescript
interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  fullScreen?: boolean;
}
```

#### Toast
```typescript
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
```

#### Modal
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  closeOnOverlayClick?: boolean;
}
```

### 1.5 Botões & Ações

#### Button
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'outline' | 'text' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}
```

#### IconButton
```typescript
interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  tooltip?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}
```

## 2. COMPONENTES ESPECÍFICOS

### 2.1 Produtos

#### ProductCard
```typescript
interface ProductCard {
  product: Product;
  onAddToCart?: () => void;
  onAddToFavorites?: () => void;
  showActions?: boolean;
  variant?: 'grid' | 'list';
}
```
- **Telas**: Landing Page, Produtos, Favoritos

#### ProductGrid
```typescript
interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  columns?: number;
  gap?: number;
}
```
- **Telas**: Landing Page, Produtos, Favoritos

#### ProductDetails
```typescript
interface ProductDetailsProps {
  product: Product;
  onVariantChange?: (variant: ProductVariant) => void;
  onQuantityChange?: (quantity: number) => void;
  onAddToCart: () => void;
}
```
- **Telas**: Detalhes do Produto

### 2.2 Carrinho

#### CartItem
```typescript
interface CartItemProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}
```
- **Telas**: Carrinho

#### CartSummary
```typescript
interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  discount?: number;
  total: number;
  onCheckout?: () => void;
}
```
- **Telas**: Carrinho

### 2.3 Pedidos

#### OrderCard
```typescript
interface OrderCardProps {
  order: Order;
  showDetails?: boolean;
  onStatusChange?: (status: OrderStatus) => void;
  isAdmin?: boolean;
}
```
- **Telas**: Pedidos, Pedidos Admin

#### OrderTimeline
```typescript
interface OrderTimelineProps {
  events: OrderEvent[];
  currentStatus: OrderStatus;
}
```
- **Telas**: Pedidos, Pedidos Admin

### 2.4 Admin

#### DataTable
```typescript
interface DataTableProps {
  columns: TableColumn[];
  data: any[];
  sortable?: boolean;
  selectable?: boolean;
  pagination?: boolean;
  actions?: TableAction[];
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  onRowSelect?: (selectedRows: string[]) => void;
}
```
- **Telas**: Produtos Admin, Clientes, Pedidos Admin

#### Dashboard
```typescript
interface DashboardProps {
  metrics: Metric[];
  charts: Chart[];
  period: 'day' | 'week' | 'month' | 'year';
  onPeriodChange: (period: string) => void;
}
```
- **Telas**: Dashboard Admin

#### StatCard
```typescript
interface StatCardProps {
  title: string;
  value: number | string;
  change?: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}
```
- **Telas**: Dashboard Admin

## 3. HOOKS COMPARTILHADOS

### 3.1 Dados & Estado

```typescript
// Gerenciamento de Estado
const useCart = () => {
  // Lógica do carrinho
}

const useFavorites = () => {
  // Lógica dos favoritos
}

const useAuth = () => {
  // Lógica de autenticação
}

// Dados
const useProducts = (filters?: ProductFilters) => {
  // Busca de produtos
}

const useOrders = (filters?: OrderFilters) => {
  // Busca de pedidos
}

// UI
const useModal = () => {
  // Controle de modal
}

const useToast = () => {
  // Sistema de notificações
}

const useForm = (schema: ValidationSchema) => {
  // Validação e gerenciamento de formulários
}
```

## 4. CONTEXTOS GLOBAIS

```typescript
// Autenticação
const AuthContext = createContext<AuthContextType | null>(null);

// Carrinho
const CartContext = createContext<CartContextType | null>(null);

// Favoritos
const FavoritesContext = createContext<FavoritesContextType | null>(null);

// Tema
const ThemeContext = createContext<ThemeContextType | null>(null);

// UI
const UIContext = createContext<UIContextType | null>(null);
```

## 5. TIPOS COMPARTILHADOS

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  variants?: ProductVariant[];
  stock: number;
  rating?: number;
}

interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  shipping: ShippingInfo;
  payment: PaymentInfo;
  createdAt: Date;
  updatedAt: Date;
}

interface CartItem {
  productId: string;
  quantity: number;
  variant?: string;
}

type UserRole = 'admin' | 'customer' | 'guest';
type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
```

## 6. DESIGN TOKENS

```typescript
const tokens = {
  colors: {
    primary: '#58D899',
    secondary: '#1E1E2D',
    text: '#616161',
    background: '#FFFFFF',
    error: '#F44336',
    success: '#4CAF50',
    warning: '#FFC107',
    info: '#2196F3',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: '25px',
      h2: '20px',
      h3: '16px',
      body: '14px',
      small: '12px',
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  shadows: {
    card: '0 2px 4px rgba(0, 0, 0, 0.1)',
    dropdown: '0 4px 6px rgba(0, 0, 0, 0.1)',
    modal: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },
};
```

## 7. ESTRUTURA DE DIRETÓRIOS

```
src/
  components/
    common/
      Button/
      FormField/
      Modal/
      ...
    layout/
      AppLayout/
      Header/
      Sidebar/
      ...
    products/
      ProductCard/
      ProductGrid/
      ...
    cart/
      CartItem/
      CartSummary/
      ...
    orders/
      OrderCard/
      OrderTimeline/
      ...
    admin/
      DataTable/
      Dashboard/
      ...
  hooks/
    useAuth.ts
    useCart.ts
    useFavorites.ts
    ...
  context/
    AuthContext.tsx
    CartContext.tsx
    ...
  types/
    index.ts
  styles/
    tokens.ts
    global.css
  utils/
    formatters.ts
    validators.ts
    ...
```

## 8. CONSIDERAÇÕES DE IMPLEMENTAÇÃO

### 8.1 Performance
- Lazy loading para componentes pesados
- Memoização de componentes frequentemente renderizados
- Virtualização para listas longas
- Otimização de imagens e assets

### 8.2 Acessibilidade
- Suporte a navegação por teclado
- ARIA labels e roles
- Contraste de cores adequado
- Feedback sonoro e visual
- Suporte a screen readers

### 8.3 Responsividade
- Design mobile-first
- Breakpoints consistentes
- Layouts flexíveis
- Imagens responsivas
- Touch targets adequados

### 8.4 Testes
- Testes unitários para componentes
- Testes de integração
- Testes de acessibilidade
- Testes de performance
- Testes de compatibilidade

### 8.5 Manutenção
- Documentação detalhada
- Padrões de código
- Versionamento semântico
- Changelog
- Storybook para documentação visual
