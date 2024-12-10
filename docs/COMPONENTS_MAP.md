# Mapeamento de Componentes do Projeto

## 1. Componentes de UI Base

### Button
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}
```
**Localização**: `src/components/Button`

### Input
```typescript
interface InputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
```
**Localização**: `src/components/Input`

### Select
```typescript
interface SelectProps {
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}
```
**Localização**: `src/components/Select`

### Checkbox
```typescript
interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
}
```
**Localização**: `src/components/Checkbox`

### Radio
```typescript
interface RadioProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  name: string;
  disabled?: boolean;
}
```
**Localização**: `src/components/Radio`

## 2. Componentes de Layout

### Header
```typescript
interface HeaderProps {
  user?: User;
  cartItemsCount: number;
  onSearchSubmit: (query: string) => void;
}
```
**Localização**: `src/components/Header`

### Footer
```typescript
interface FooterProps {
  showNewsletter?: boolean;
  showSocialLinks?: boolean;
}
```
**Localização**: `src/components/Footer`

### NavigationMenu
```typescript
interface NavigationMenuProps {
  items: MenuItem[];
  orientation?: 'horizontal' | 'vertical';
}
```
**Localização**: `src/components/NavigationMenu`

### Breadcrumb
```typescript
interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}
```
**Localização**: `src/components/Breadcrumb`

## 3. Componentes de Produto

### ProductCard
```typescript
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    brand: string;
    inStock: boolean;
  };
  onAddToCart: (productId: string) => void;
}
```
**Localização**: `src/components/ProductCard`

### ProductGrid
```typescript
interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  columns?: 2 | 3 | 4;
}
```
**Localização**: `src/components/ProductGrid`

### ProductFilters
```typescript
interface ProductFiltersProps {
  filters: Filter[];
  selectedFilters: SelectedFilters;
  onFilterChange: (filters: SelectedFilters) => void;
}
```
**Localização**: `src/components/ProductFilters`

### ProductSort
```typescript
interface ProductSortProps {
  value: string;
  onChange: (value: string) => void;
  options: SortOption[];
}
```
**Localização**: `src/components/ProductSort`

## 4. Componentes de Carrinho

### CartItem
```typescript
interface CartItemProps {
  item: CartProduct;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}
```
**Localização**: `src/components/CartItem`

### CartSummary
```typescript
interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  discount?: number;
  total: number;
}
```
**Localização**: `src/components/CartSummary`

### ShippingCalculator
```typescript
interface ShippingCalculatorProps {
  onCalculate: (cep: string) => Promise<ShippingOption[]>;
  onSelect: (option: ShippingOption) => void;
}
```
**Localização**: `src/components/ShippingCalculator`

## 5. Componentes de Pedido

### OrderCard
```typescript
interface OrderCardProps {
  order: Order;
  showDetails?: boolean;
}
```
**Localização**: `src/components/OrderCard`

### OrderList
```typescript
interface OrderListProps {
  orders: Order[];
  loading?: boolean;
}
```
**Localização**: `src/components/OrderList`

### OrderTimeline
```typescript
interface OrderTimelineProps {
  events: OrderEvent[];
  currentStatus: OrderStatus;
}
```
**Localização**: `src/components/OrderTimeline`

## 6. Componentes de Feedback

### Alert
```typescript
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}
```
**Localização**: `src/components/Alert`

### Toast
```typescript
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}
```
**Localização**: `src/components/Toast`

### LoadingSpinner
```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}
```
**Localização**: `src/components/LoadingSpinner`

## 7. Componentes de Formulário

### SearchInput
```typescript
interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}
```
**Localização**: `src/components/SearchInput`

### DateRangePicker
```typescript
interface DateRangePickerProps {
  startDate: Date;
  endDate: Date;
  onChange: (dates: { start: Date; end: Date }) => void;
  minDate?: Date;
  maxDate?: Date;
}
```
**Localização**: `src/components/DateRangePicker`

### QuantitySelector
```typescript
interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}
```
**Localização**: `src/components/QuantitySelector`

## 8. Componentes de Exibição

### PriceDisplay
```typescript
interface PriceDisplayProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  showCurrency?: boolean;
  oldPrice?: number;
}
```
**Localização**: `src/components/PriceDisplay`

### Divider
```typescript
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'md' | 'lg';
  color?: string;
}
```
**Localização**: `src/components/Divider`

### Modal
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
```
**Localização**: `src/components/Modal`
