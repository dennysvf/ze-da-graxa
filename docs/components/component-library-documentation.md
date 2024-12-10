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

### 1.3 Formulários e Inputs

#### Button
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}
```

#### Input
```typescript
interface InputProps {
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}
```

#### Checkbox
```typescript
interface CheckboxProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  checked: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}
```

#### Radio
```typescript
interface RadioProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  checked: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}
```

#### Select
```typescript
interface SelectProps {
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  options: SelectOption[];
  value: string | string[];
  multiple?: boolean;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: string | string[]) => void;
}
```

#### Typography
```typescript
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption';
  component?: ElementType;
  color?: 'primary' | 'secondary' | 'disabled';
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}
```

### 1.4 Feedback & Notificações

#### Alert
```typescript
interface AlertProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
}
```

#### Toast
```typescript
interface ToastProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  message: string;
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
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
}
```

#### LoadingSpinner
```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  fullScreen?: boolean;
}
```

### 1.5 Produtos & E-commerce

#### ProductCard
```typescript
interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact' | 'featured';
  onAddToCart?: () => void;
  onFavorite?: () => void;
}
```

#### ProductGrid
```typescript
interface ProductGridProps {
  products: Product[];
  columns?: number;
  gap?: number;
  loading?: boolean;
}
```

#### ProductFilters
```typescript
interface ProductFiltersProps {
  filters: Filter[];
  selectedFilters: SelectedFilters;
  onFilterChange: (filters: SelectedFilters) => void;
}
```

#### ProductSort
```typescript
interface ProductSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}
```

#### FeaturedProducts
```typescript
interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}
```

### 1.6 Carrinho & Checkout

#### CartItem
```typescript
interface CartItemProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}
```

#### CartSummary
```typescript
interface CartSummaryProps {
  cart: Cart;
  onShippingSelect: (option: ShippingOption) => void;
  onCheckout: () => void;
  onCalculateShipping: (cep: string) => Promise<ShippingOption[]>;
}
```

#### ShippingCalculator
```typescript
interface ShippingCalculatorProps {
  onSelect: (option: ShippingOption) => void;
  onCalculate: (cep: string) => Promise<ShippingOption[]>;
}
```

### 1.7 Pedidos

#### OrderCard
```typescript
interface OrderCardProps {
  order: Order;
  showDetails?: boolean;
}
```

#### OrderList
```typescript
interface OrderListProps {
  orders: Order[];
  loading?: boolean;
  emptyMessage?: string;
}
```

#### OrderTimeline
```typescript
interface OrderTimelineProps {
  timeline: OrderTimelineType[];
}
```

### 1.8 Utilitários

#### DateRangePicker
```typescript
interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
  className?: string;
}
```

#### Divider
```typescript
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed';
  color?: 'light' | 'medium' | 'dark';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  style?: CSSProperties;
}
```

#### ErrorBoundary
```typescript
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
```

### 1.9 Landing Page

#### HeroSection
- Seção principal com título, subtítulo, barra de pesquisa e categorias populares
- Integração com SearchInput e navegação
- Layout responsivo com imagem de destaque

## 2. COMPONENTES DE PRODUTO

### ProductCard
```typescript
interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact' | 'horizontal';
  onAddToCart?: () => void;
  onFavorite?: () => void;
}
```

### ProductDetails
```typescript
interface ProductDetailsProps {
  product: Product;
  onAddToCart: () => void;
  onBuyNow: () => void;
}
```

### ProductFilters
```typescript
interface ProductFiltersProps {
  filters: Filter[];
  selectedFilters: SelectedFilters;
  onFilterChange: (filters: SelectedFilters) => void;
}
```

## 3. TOKENS DE DESIGN

### Cores
- **Primary**: `--color-primary`
- **Secondary**: `--color-secondary`
- **Success**: `--color-success`
- **Error**: `--color-error`
- **Warning**: `--color-warning`
- **Info**: `--color-info`

### Tipografia
- **Font Family**: `--font-family-primary`
- **Font Sizes**: 
  - `--font-size-xs`: 12px
  - `--font-size-sm`: 14px
  - `--font-size-md`: 16px
  - `--font-size-lg`: 18px
  - `--font-size-xl`: 20px
- **Font Weights**:
  - `--font-weight-regular`: 400
  - `--font-weight-medium`: 500
  - `--font-weight-semibold`: 600

### Espaçamento
- **Spacing**: 
  - `--spacing-xs`: 4px
  - `--spacing-sm`: 8px
  - `--spacing-md`: 16px
  - `--spacing-lg`: 24px
  - `--spacing-xl`: 32px

### Bordas
- **Border Radius**:
  - `--radius-sm`: 4px
  - `--radius-md`: 8px
  - `--radius-lg`: 12px
  - `--radius-full`: 9999px

### Sombras
- **Box Shadow**:
  - `--shadow-sm`
  - `--shadow-md`
  - `--shadow-lg`

## 4. ACESSIBILIDADE

### 4.1 Contraste e Cores
- Todas as cores seguem WCAG 2.1 Level AA
- Contraste mínimo de 4.5:1 para texto normal
- Contraste mínimo de 3:1 para texto grande

### 4.2 Navegação por Teclado
- Foco visível em todos os elementos interativos
- Ordem de tabulação lógica
- Atalhos de teclado para ações principais

### 4.3 Suporte a Screen Readers
- ARIA labels e roles apropriados
- Mensagens de erro e feedback acessíveis
- Textos alternativos para imagens

## 5. RESPONSIVIDADE

### 5.1 Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### 5.2 Layout
- Design mobile-first
- Grid system flexível
- Componentes adaptáveis

## 6. ESTRUTURA DE DIRETÓRIOS

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

## 7. CONSIDERAÇÕES DE IMPLEMENTAÇÃO

### 7.1 Performance
- Lazy loading para componentes pesados
- Memoização de componentes frequentemente renderizados
- Virtualização para listas longas
- Otimização de imagens e assets

### 7.2 Acessibilidade
- Suporte a navegação por teclado
- ARIA labels e roles
- Contraste de cores adequado
- Feedback sonoro e visual
- Suporte a screen readers

### 7.3 Responsividade
- Design mobile-first
- Breakpoints consistentes
- Layouts flexíveis
- Imagens responsivas
- Touch targets adequados

### 7.4 Testes
- Testes unitários para componentes
- Testes de integração
- Testes de acessibilidade
- Testes de performance
- Testes de compatibilidade

### 7.5 Manutenção
- Documentação detalhada
- Padrões de código
- Versionamento semântico
- Changelog
- Storybook para documentação visual
