# Componentes React - Zé da Graxa

## Índice
1. [Componentes Base](#componentes-base)
2. [Componentes de Produto](#componentes-de-produto)
3. [Componentes de Carrinho](#componentes-de-carrinho)
4. [Componentes de Formulário](#componentes-de-formulário)
5. [Componentes de Feedback](#componentes-de-feedback)
6. [Hooks Personalizados](#hooks-personalizados)
7. [Boas Práticas](#boas-práticas)

## Componentes Base

### Button
- **Localização**: `src/components/Button/index.tsx`
- **Descrição**: Botão reutilizável com variantes
- **Props**:
  ```typescript
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
  }
  ```
- **Exemplo**:
  ```tsx
  <Button
    variant="primary"
    size="md"
    loading={isLoading}
    onClick={handleClick}
  >
    Adicionar ao Carrinho
  </Button>
  ```

### Input
- **Localização**: `src/components/Input/index.tsx`
- **Descrição**: Campo de entrada com suporte a máscaras
- **Props**:
  ```typescript
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    mask?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    helperText?: string;
  }
  ```
- **Exemplo**:
  ```tsx
  <Input
    label="Telefone"
    mask="(99) 99999-9999"
    error={errors.phone}
    value={phone}
    onChange={handlePhoneChange}
  />
  ```

### Select
- **Localização**: `src/components/Select/index.tsx`
- **Descrição**: Campo de seleção com suporte a múltipla escolha
- **Props**:
  ```typescript
  interface SelectProps {
    options: Option[];
    value: string | string[];
    onChange: (value: string | string[]) => void;
    multiple?: boolean;
    label?: string;
    error?: string;
    loading?: boolean;
    searchable?: boolean;
  }
  ```

### Card
- **Localização**: `src/components/Card/index.tsx`
- **Descrição**: Container com elevação e variantes
- **Props**:
  ```typescript
  interface CardProps {
    variant?: 'default' | 'outlined' | 'elevated';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    children: ReactNode;
    onClick?: () => void;
    hoverable?: boolean;
  }
  ```

## Componentes de Produto

### ProductCard
- **Localização**: `src/components/Product/ProductCard/index.tsx`
- **Descrição**: Card para exibição de produto
- **Props**:
  ```typescript
  interface ProductCardProps {
    product: Product;
    variant?: 'grid' | 'list' | 'compact';
    onAddToCart?: () => void;
    onAddToWishlist?: () => void;
    showActions?: boolean;
  }
  ```

### ProductGrid
- **Localização**: `src/components/Product/ProductGrid/index.tsx`
- **Descrição**: Grid responsivo de produtos
- **Props**:
  ```typescript
  interface ProductGridProps {
    products: Product[];
    loading?: boolean;
    columns?: number;
    gap?: 'sm' | 'md' | 'lg';
    showPagination?: boolean;
    onPageChange?: (page: number) => void;
    totalPages?: number;
  }
  ```

### ProductFilters
- **Localização**: `src/components/Product/ProductFilters/index.tsx`
- **Descrição**: Filtros avançados para produtos
- **Props**:
  ```typescript
  interface ProductFiltersProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    categories: Category[];
    brands: Brand[];
    priceRange: PriceRange;
    loading?: boolean;
  }
  ```

## Componentes de Carrinho

### CartItem
- **Localização**: `src/components/Cart/CartItem/index.tsx`
- **Descrição**: Item individual do carrinho
- **Props**:
  ```typescript
  interface CartItemProps {
    item: CartItem;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
    editable?: boolean;
  }
  ```

### CartSummary
- **Localização**: `src/components/Cart/CartSummary/index.tsx`
- **Descrição**: Resumo do carrinho com totais
- **Props**:
  ```typescript
  interface CartSummaryProps {
    subtotal: number;
    discount?: number;
    shipping?: number;
    total: number;
    showCheckoutButton?: boolean;
  }
  ```

## Componentes de Formulário

### Form
- **Localização**: `src/components/Form/index.tsx`
- **Descrição**: Container de formulário com validação
- **Props**:
  ```typescript
  interface FormProps {
    onSubmit: (data: any) => void;
    validationSchema?: any;
    children: ReactNode;
    defaultValues?: any;
  }
  ```

### FormField
- **Localização**: `src/components/Form/FormField/index.tsx`
- **Descrição**: Campo de formulário com label e erro
- **Props**:
  ```typescript
  interface FormFieldProps {
    name: string;
    label?: string;
    children: ReactNode;
    required?: boolean;
    hint?: string;
  }
  ```

## Componentes de Feedback

### Toast
- **Localização**: `src/components/Toast/index.tsx`
- **Descrição**: Notificação temporária
- **Props**:
  ```typescript
  interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  }
  ```

### LoadingSpinner
- **Localização**: `src/components/LoadingSpinner/index.tsx`
- **Descrição**: Indicador de carregamento
- **Props**:
  ```typescript
  interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    fullScreen?: boolean;
  }
  ```

## Hooks Personalizados

### useDebounce
```typescript
function useDebounce<T>(value: T, delay: number): T;
```
- **Uso**: Debounce de valores para inputs de busca

### useLocalStorage
```typescript
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void];
```
- **Uso**: Persistência de dados no localStorage

### useCart
```typescript
function useCart(): {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  total: number;
  itemsCount: number;
};
```
- **Uso**: Gerenciamento do carrinho de compras

## Boas Práticas

### 1. Performance
- Usar `memo` para componentes que recebem as mesmas props frequentemente
- Implementar `loading states` para feedback visual
- Lazy loading de imagens e componentes pesados
- Evitar re-renders desnecessários

### 2. Acessibilidade
- Seguir WAI-ARIA guidelines
- Implementar navegação por teclado
- Fornecer textos alternativos para imagens
- Manter contraste adequado

### 3. Testes
- Testes unitários para lógica de negócio
- Testes de integração para fluxos complexos
- Testes de snapshot para UI
- Testes de acessibilidade

### 4. Estilização
- Usar CSS Modules para escopo local
- Seguir metodologia BEM
- Implementar design system tokens
- Manter consistência visual

### 5. Código
- TypeScript para type safety
- Props documentation com JSDoc
- Componentização modular
- Clean Code principles

## Tipos TypeScript

```typescript
interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  brand: string
  stock: number
}

interface CartItem {
  product: Product
  quantity: number
}

interface User {
  id: string
  name: string
  email: string
  type: 'PF' | 'PJ'
  credit: number
}

interface Category {
  id: string
  name: string
  slug: string
}

interface Brand {
  id: string
  name: string
  slug: string
}

interface FilterParams {
  category?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  sort?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc'
}

interface BreadcrumbItem {
  label: string
  href?: string
}

interface OrderStatus {
  label: string
  value: string
  date: Date
  completed: boolean
}

interface ShippingResult {
  carrier: string
  price: number
  deliveryTime: number
}

interface MenuItem {
  label: string
  href: string
  icon?: ReactNode
  children?: MenuItem[]
}

interface SortOption {
  label: string
  value: string
}

interface Order {
  id: string
  date: Date
  status: string
  total: number
  items: CartItem[]
  shipping: ShippingInfo
}

interface ShippingInfo {
  address: string
  city: string
  state: string
  zipCode: string
  carrier: string
  trackingCode?: string
}
