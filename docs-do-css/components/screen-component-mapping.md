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
  navigation: {
    NavigationMenu: true;
  };
  products: {
    ProductGrid: true;
    ProductCard: true;
  };
  feedback: {
    Toast: true;
  };
  forms: {
    SearchInput: true;
  };
}

// Referência: landding-page-detailed.md
```

### 1.2 Produtos
```typescript
interface ProductsPageComponents {
  layout: {
    AppLayout: true;
    Header: true;
    Footer: true;
    Sidebar: true; // FilterSidebar
  };
  navigation: {
    Breadcrumb: true;
    Pagination: true;
  };
  products: {
    ProductGrid: true;
    ProductCard: true;
    ProductDetails: true;
  };
  forms: {
    SearchInput: true;
    FilterGroup: true;
  };
  feedback: {
    Toast: true;
    LoadingSpinner: true;
  };
}

// Referência: produtos/produtos-detailed.md
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
  };
  buttons: {
    Button: true;
    IconButton: true;
  };
  feedback: {
    Toast: true;
    Modal: true; // Confirmação de remoção
  };
}

// Referência: carrinho/carrinho-detailed.md
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
    OrderCard: true;
    OrderTimeline: true;
  };
  navigation: {
    Pagination: true;
  };
  feedback: {
    LoadingSpinner: true;
  };
}

// Referência: pedidos/pedidos-detailed.md
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
    ProductCard: true;
    ProductGrid: true;
  };
  buttons: {
    IconButton: true;
  };
  feedback: {
    Toast: true;
  };
}

// Referência: favoritos/favoritos-detailed.md
```

### 1.6 Perfil
```typescript
interface ProfilePageComponents {
  layout: {
    AppLayout: true;
    Header: true;
    Footer: true;
  };
  forms: {
    FormField: true;
  };
  buttons: {
    Button: true;
  };
  feedback: {
    Toast: true;
    Modal: true;
  };
}

// Referência: perfil/perfil-detailed.md
```

## 2. ÁREA ADMINISTRATIVA

### 2.1 Dashboard
```typescript
interface DashboardPageComponents {
  layout: {
    AppLayout: true;
    AdminHeader: true;
    AdminSidebar: true;
  };
  admin: {
    Dashboard: true;
    StatCard: true;
  };
  feedback: {
    LoadingSpinner: true;
  };
}

// Referência: admin/dashboard/dashboard-detailed.md
```

### 2.2 Produtos (Admin)
```typescript
interface AdminProductsPageComponents {
  layout: {
    AppLayout: true;
    AdminHeader: true;
    AdminSidebar: true;
  };
  admin: {
    DataTable: true;
  };
  forms: {
    FormField: true;
    SearchInput: true;
  };
  feedback: {
    Modal: true;
    Toast: true;
  };
  buttons: {
    Button: true;
    IconButton: true;
  };
}

// Referência: admin/produtos/produtos-admin-detailed.md
```

### 2.3 Clientes
```typescript
interface AdminCustomersPageComponents {
  layout: {
    AppLayout: true;
    AdminHeader: true;
    AdminSidebar: true;
  };
  admin: {
    DataTable: true;
  };
  forms: {
    SearchInput: true;
    FilterGroup: true;
  };
  feedback: {
    Modal: true;
    Toast: true;
  };
}

// Referência: admin/clientes/clientes-admin-detailed.md
```

### 2.4 Pedidos (Admin)
```typescript
interface AdminOrdersPageComponents {
  layout: {
    AppLayout: true;
    AdminHeader: true;
    AdminSidebar: true;
  };
  admin: {
    DataTable: true;
  };
  orders: {
    OrderTimeline: true;
  };
  forms: {
    SearchInput: true;
    FilterGroup: true;
  };
  feedback: {
    Modal: true;
    Toast: true;
  };
}

// Referência: admin/pedidos/pedidos-admin-detailed.md
```

### 2.5 Configurações
```typescript
interface AdminSettingsPageComponents {
  layout: {
    AppLayout: true;
    AdminHeader: true;
    AdminSidebar: true;
  };
  forms: {
    FormField: true;
  };
  buttons: {
    Button: true;
  };
  feedback: {
    Toast: true;
    Modal: true;
  };
}

// Referência: admin/configuracoes/configuracoes-admin-detailed.md
```

## 3. MATRIZ DE REUSO DE COMPONENTES

### 3.1 Componentes Mais Reutilizados

1. **Layout (100% das telas)**
   - AppLayout
   - Header (Cliente/Admin)
   - Footer

2. **Feedback (100% das telas)**
   - Toast
   - LoadingSpinner
   - Modal

3. **Formulários (90% das telas)**
   - FormField
   - SearchInput
   - FilterGroup

4. **Botões (80% das telas)**
   - Button
   - IconButton

### 3.2 Componentes Específicos

1. **Área do Cliente**
   - ProductCard
   - ProductGrid
   - CartItem
   - CartSummary

2. **Área Administrativa**
   - DataTable
   - Dashboard
   - StatCard
   - OrderTimeline

## 4. CONSIDERAÇÕES DE IMPLEMENTAÇÃO

### 4.1 Priorização de Desenvolvimento
1. Componentes Globais (maior reuso)
2. Componentes de Layout
3. Componentes de Feedback
4. Componentes de Formulário
5. Componentes Específicos

### 4.2 Estratégia de Testes
- Priorizar testes em componentes mais reutilizados
- Criar testes de integração para fluxos comuns
- Testar variações e props em componentes complexos

### 4.3 Documentação
- Manter Storybook atualizado
- Documentar props e variações
- Incluir exemplos de uso
- Documentar dependências entre componentes
