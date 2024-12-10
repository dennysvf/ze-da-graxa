# Documentação das APIs - Zé da Graxa

## 1. AUTENTICAÇÃO

### 1.1 Login
```typescript
POST /api/auth/login
```
**Request:**
```typescript
interface LoginRequest {
  email: string;
  password: string;
}
```
**Response:**
```typescript
interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  };
  token: string;
}
```
**Usado em:**
- Página de Login
- Modal de Login
- Checkout (guest)

### 1.2 Registro
```typescript
POST /api/auth/register
```
**Request:**
```typescript
interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
```
**Response:**
```typescript
interface RegisterResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}
```
**Usado em:**
- Página de Registro
- Modal de Registro
- Checkout (guest)

### 1.3 Recuperação de Senha
```typescript
POST /api/auth/forgot-password
POST /api/auth/reset-password
```

## 2. PRODUTOS

### 2.1 Listagem de Produtos
```typescript
GET /api/products
```
**Query Params:**
```typescript
interface ProductsQuery {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';
}
```
**Response:**
```typescript
interface ProductsResponse {
  items: Product[];
  total: number;
  page: number;
  totalPages: number;
}
```
**Usado em:**
- Landing Page
- Página de Produtos
- Busca

### 2.2 Detalhes do Produto
```typescript
GET /api/products/:id
```
**Response:**
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  variants?: ProductVariant[];
  stock: number;
  specifications: Record<string, string>;
  relatedProducts: Product[];
}
```
**Usado em:**
- Página de Detalhes do Produto
- Quick View (modal)

### 2.3 Gestão de Produtos (Admin)
```typescript
POST /api/admin/products
PUT /api/admin/products/:id
DELETE /api/admin/products/:id
```

## 3. CARRINHO

### 3.1 Carrinho
```typescript
GET /api/cart
POST /api/cart/items
PUT /api/cart/items/:id
DELETE /api/cart/items/:id
```
**Add Item Request:**
```typescript
interface AddCartItemRequest {
  productId: string;
  quantity: number;
  variantId?: string;
}
```
**Cart Response:**
```typescript
interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount?: number;
  total: number;
}
```
**Usado em:**
- Mini Carrinho
- Página do Carrinho
- Checkout

### 3.2 Checkout
```typescript
POST /api/checkout
```
**Request:**
```typescript
interface CheckoutRequest {
  items: CartItem[];
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: PaymentMethod;
  couponCode?: string;
}
```
**Response:**
```typescript
interface CheckoutResponse {
  orderId: string;
  status: OrderStatus;
  paymentUrl?: string;
}
```

## 4. PEDIDOS

### 4.1 Pedidos do Cliente
```typescript
GET /api/orders
GET /api/orders/:id
```
**Response:**
```typescript
interface Order {
  id: string;
  items: OrderItem[];
  status: OrderStatus;
  shipping: ShippingInfo;
  payment: PaymentInfo;
  timeline: OrderEvent[];
  total: number;
  createdAt: Date;
}
```
**Usado em:**
- Lista de Pedidos
- Detalhes do Pedido

### 4.2 Gestão de Pedidos (Admin)
```typescript
GET /api/admin/orders
PUT /api/admin/orders/:id/status
```
**Update Status Request:**
```typescript
interface UpdateOrderStatusRequest {
  status: OrderStatus;
  comment?: string;
}
```

## 5. CLIENTES

### 5.1 Perfil
```typescript
GET /api/profile
PUT /api/profile
```
**Update Profile Request:**
```typescript
interface UpdateProfileRequest {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  currentPassword?: string;
}
```

### 5.2 Endereços
```typescript
GET /api/addresses
POST /api/addresses
PUT /api/addresses/:id
DELETE /api/addresses/:id
```
**Address:**
```typescript
interface Address {
  id: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault?: boolean;
}
```

### 5.3 Favoritos
```typescript
GET /api/favorites
POST /api/favorites/:productId
DELETE /api/favorites/:productId
```

## 6. ADMIN

### 6.1 Dashboard
```typescript
GET /api/admin/dashboard
```
**Response:**
```typescript
interface DashboardData {
  metrics: {
    totalSales: number;
    totalOrders: number;
    averageOrderValue: number;
    newCustomers: number;
  };
  charts: {
    salesByDay: ChartData[];
    ordersByStatus: ChartData[];
    topProducts: ChartData[];
    topCategories: ChartData[];
  };
}
```

### 6.2 Relatórios
```typescript
GET /api/admin/reports/sales
GET /api/admin/reports/products
GET /api/admin/reports/customers
```
**Query Params:**
```typescript
interface ReportQuery {
  startDate: string;
  endDate: string;
  groupBy?: 'day' | 'week' | 'month';
  format?: 'json' | 'csv' | 'pdf';
}
```

### 6.3 Configurações
```typescript
GET /api/admin/settings
PUT /api/admin/settings
```
**Settings:**
```typescript
interface Settings {
  store: {
    name: string;
    logo: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
  };
  payment: {
    methods: PaymentMethod[];
    gateway: {
      key: string;
      sandbox: boolean;
    };
  };
  shipping: {
    methods: ShippingMethod[];
    zones: ShippingZone[];
  };
  email: {
    templates: EmailTemplate[];
    smtp: SmtpConfig;
  };
}
```

## 7. WEBHOOKS

### 7.1 Pagamento
```typescript
POST /api/webhooks/payment
```
**Payload:**
```typescript
interface PaymentWebhook {
  type: 'payment.success' | 'payment.failed' | 'payment.refunded';
  orderId: string;
  paymentId: string;
  amount: number;
  status: PaymentStatus;
}
```

### 7.2 Frete
```typescript
POST /api/webhooks/shipping
```
**Payload:**
```typescript
interface ShippingWebhook {
  type: 'tracking.update' | 'delivery.success' | 'delivery.failed';
  orderId: string;
  trackingCode: string;
  status: ShippingStatus;
  location?: string;
}
```

## 8. TIPOS COMPARTILHADOS

```typescript
type UserRole = 'admin' | 'customer' | 'guest';

type OrderStatus = 
  | 'pending_payment'
  | 'paid'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

type PaymentStatus =
  | 'pending'
  | 'processing'
  | 'success'
  | 'failed'
  | 'refunded';

type ShippingStatus =
  | 'pending'
  | 'processing'
  | 'in_transit'
  | 'delivered'
  | 'failed';

interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  variant?: ProductVariant;
  price: number;
  subtotal: number;
}

interface OrderItem extends CartItem {
  priceSnapshot: number;
}

interface PaymentMethod {
  id: string;
  name: string;
  type: 'credit_card' | 'pix' | 'boleto';
  enabled: boolean;
}

interface ShippingMethod {
  id: string;
  name: string;
  type: 'correios' | 'custom';
  price?: number;
  estimatedDays: number;
}
```

## 9. CONSIDERAÇÕES TÉCNICAS

### 9.1 Segurança
- Autenticação JWT
- Rate limiting
- CORS configurado
- Validação de entrada
- Sanitização de dados
- Logs de auditoria

### 9.2 Performance
- Caching (Redis)
- Paginação
- Query optimization
- Compressão
- CDN para assets

### 9.3 Monitoramento
- Logs estruturados
- Métricas de performance
- Alertas
- Rastreamento de erros

### 9.4 Testes
- Testes unitários
- Testes de integração
- Testes E2E
- Testes de carga
