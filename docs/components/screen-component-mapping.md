# Mapeamento Telas x Componentes

## 1. ÁREA DO CLIENTE

### 1.1 Landing Page
```typescript
interface LandingPageComponents {
  layout: {
    AppLayout: true;
    Header: true;
    Footer: true;
  };
  hero: {
    HeroSection: true;
  };
  featured: {
    FeaturedProducts: true;
  };
  products: {
    ProductGrid: true;
    ProductCard: true;
  };
  feedback: {
    Alert: true;
    LoadingSpinner: true;
    Toast: true;
  };
  typography: {
    Typography: true;
  };
  forms: {
    SearchInput: true;
    Button: true;
  };
  utils: {
    ErrorBoundary: true;
  };
}
```

### 1.2 Produtos
```typescript
interface ProductsPageComponents {
  layout: {
    AppLayout: true;
    Header: true;
    Footer: true;
    Sidebar: true;
  };
  navigation: {
    Breadcrumb: true;
    Pagination: true;
  };
  products: {
    ProductGrid: true;
    ProductCard: true;
    ProductFilters: true;
    ProductSort: true;
  };
  forms: {
    SearchInput: true;
    Select: true;
    Checkbox: true;
    Radio: true;
    Button: true;
    DateRangePicker: true;
  };
  feedback: {
    Alert: true;
    LoadingSpinner: true;
    Toast: true;
  };
  typography: {
    Typography: true;
  };
  utils: {
    Divider: true;
    ErrorBoundary: true;
  };
}
```

### 1.3 Carrinho
```typescript
interface CartPageComponents {
  layout: {
    AppLayout: true;
    Header: true;
    Footer: true;
  };
  cart: {
    CartItem: true;
    CartSummary: true;
    ShippingCalculator: true;
  };
  forms: {
    Input: true;
    Button: true;
  };
  feedback: {
    Alert: true;
    LoadingSpinner: true;
    Toast: true;
    Modal: true;
  };
  typography: {
    Typography: true;
  };
  utils: {
    Divider: true;
    ErrorBoundary: true;
  };
}
```

### 1.4 Pedidos
```typescript
interface OrdersPageComponents {
  layout: {
    AppLayout: true;
    Header: true;
    Footer: true;
  };
  orders: {
    OrderList: true;
    OrderCard: true;
    OrderTimeline: true;
  };
  navigation: {
    Pagination: true;
    Breadcrumb: true;
  };
  forms: {
    SearchInput: true;
    DateRangePicker: true;
    Select: true;
    Button: true;
  };
  feedback: {
    Alert: true;
    LoadingSpinner: true;
    Toast: true;
    Modal: true;
  };
  typography: {
    Typography: true;
  };
  utils: {
    Divider: true;
    ErrorBoundary: true;
  };
}
```

### 1.5 Favoritos
```typescript
interface FavoritesPageComponents {
  layout: {
    AppLayout: true;
    Header: true;
    Footer: true;
  };
  products: {
    ProductGrid: true;
    ProductCard: true;
  };
  feedback: {
    Alert: true;
    Loading: true;
  };
  typography: {
    Typography: true; // h1, body1
  };
  forms: {
    Button: true;
  };
}
```

## 2. ÁREA ADMINISTRATIVA

### 2.1 Dashboard
```typescript
interface DashboardComponents {
  layout: {
    AppLayout: true;
    Header: true; // AdminHeader
    Sidebar: true; // AdminSidebar
  };
  data: {
    StatCard: true;
    DataTable: true;
    Charts: true;
  };
  forms: {
    Select: true; // Período
    Button: true;
  };
  feedback: {
    Alert: true;
    Loading: true;
  };
  typography: {
    Typography: true; // h1, h2, body1, body2, caption
  };
}
```

### 2.2 Produtos Admin
```typescript
interface ProductsAdminComponents {
  layout: {
    AppLayout: true;
    Header: true; // AdminHeader
    Sidebar: true; // AdminSidebar
  };
  data: {
    DataTable: true;
  };
  forms: {
    Input: true;
    Select: true;
    Button: true;
  };
  feedback: {
    Alert: true;
    Loading: true;
  };
  typography: {
    Typography: true; // h1, h2, body1, body2
  };
}
```

### 2.3 Pedidos Admin
```typescript
interface OrdersAdminComponents {
  layout: {
    AppLayout: true;
    Header: true; // AdminHeader
    Sidebar: true; // AdminSidebar
  };
  data: {
    DataTable: true;
  };
  orders: {
    OrderCard: true;
    OrderTimeline: true;
  };
  forms: {
    Select: true;
    Button: true;
  };
  feedback: {
    Alert: true;
    Loading: true;
  };
  typography: {
    Typography: true; // h1, h2, body1, body2, caption
  };
}
```

## 3. COMPONENTES MAIS UTILIZADOS

### 3.1 Por Frequência de Uso
1. Typography (100% das telas)
2. Button (100% das telas)
3. Alert (100% das telas)
4. Loading (100% das telas)
5. AppLayout (100% das telas)
6. Header (100% das telas)
7. Input (70% das telas)
8. Select (50% das telas)
9. ProductCard (30% das telas)
10. DataTable (30% das telas)

### 3.2 Por Complexidade
1. DataTable (Alta)
2. ProductDetails (Alta)
3. OrderTimeline (Alta)
4. Charts (Alta)
5. ProductFilters (Média)
6. Select (Média)
7. Alert (Média)
8. Button (Baixa)
9. Typography (Baixa)
10. Loading (Baixa)

## 4. CONSIDERAÇÕES DE DESENVOLVIMENTO

### 4.1 Priorização de Desenvolvimento
1. Componentes Globais (maior reuso)
   - Typography
   - Button
   - Input
   - Select
   - Alert
   - Loading

2. Componentes de Layout
   - AppLayout
   - Header
   - Sidebar
   - Footer

3. Componentes de Produto
   - ProductCard
   - ProductDetails
   - ProductFilters
   - ProductGrid

4. Componentes de Dados
   - DataTable
   - Charts
   - StatCard

### 4.2 Dependências entre Componentes
- ProductCard depende de Typography, Button
- ProductDetails depende de Typography, Button, Input, Select
- DataTable depende de Typography, Button, Select
- OrderTimeline depende de Typography, Alert

### 4.3 Otimizações
- Lazy loading para Charts e DataTable
- Memoização para ProductCard e Typography
- Virtualização para ProductGrid e DataTable
