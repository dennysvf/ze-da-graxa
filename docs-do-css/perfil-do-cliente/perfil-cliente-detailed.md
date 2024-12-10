# Perfil do Cliente

## 1. Visão Geral
- **Objetivo**: Permitir que os clientes gerenciem seus dados, pedidos e preferências
- **Usuários**: Clientes autenticados
- **Fluxo**: Acessado via header do site ou após login

## 2. Layout

### 2.1 Estrutura Visual
- **Container Principal (1200x900px)**
  - Background: var(--background-white)
  - Padding: var(--spacing-6)
  - Border-radius: var(--radius-lg)

- **Header (1200x80px)**
  - Avatar (48x48px)
  - Nome do usuário
  - Menu de navegação
  - Background: var(--background-secondary)
  - Border-bottom: 1px solid var(--border-color)

- **Sidebar (280x820px)**
  - Navigation menu
  - Background: var(--background-white)
  - Border-right: 1px solid var(--border-color)
  - Padding: var(--spacing-4)

- **Área de Conteúdo (920x820px)**
  - Padding: var(--spacing-6)
  - Background: var(--background-white)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Menu em bottom navigation
  - Conteúdo em tela cheia
  - Forms em coluna única
  - Avatar menor (32x32px)

- **Tablet** (768px - 1024px)
  - Sidebar colapsável
  - Grid adaptativo
  - Layout híbrido

- **Desktop** (> 1024px)
  - Layout completo
  - Sidebar fixa
  - Multi-column forms
  - Rich interactions

## 3. Componentes do Design System

### 3.1 Navegação
- **ProfileNav**
  - Props:
    - `items`: MenuItem[]
    - `activeItem`: string
    - `onItemClick`: (item: string) => void
    - `variant`: "sidebar" | "bottom"
  - Sections:
    - Meus Dados
    - Pedidos
    - Endereços
    - Favoritos
    - Cartões
    - Preferências
    - Sair

### 3.2 Dados Pessoais
- **ProfileForm**
  - Props:
    - `user`: User
    - `onSubmit`: (data: UserData) => void
    - `loading`: boolean
    - `error`: string
    - `success`: string

- **AvatarUpload**
  - Props:
    - `url`: string
    - `onUpload`: (file: File) => void
    - `size`: "sm" | "md" | "lg"
    - `editable`: boolean

### 3.3 Endereços
- **AddressList**
  - Props:
    - `addresses`: Address[]
    - `onEdit`: (id: string) => void
    - `onDelete`: (id: string) => void
    - `onSetDefault`: (id: string) => void
    - `loading`: boolean

- **AddressForm**
  - Props:
    - `address`: Address
    - `onSubmit`: (data: Address) => void
    - `onCancel`: () => void
    - `loading`: boolean
    - `type`: "billing" | "shipping"

### 3.4 Pedidos
- **OrderHistory**
  - Props:
    - `orders`: Order[]
    - `loading`: boolean
    - `pagination`: PaginationProps
    - `filters`: OrderFilter[]
    - `onOrderClick`: (id: string) => void

- **OrderDetails**
  - Props:
    - `order`: Order
    - `onTrackOrder`: () => void
    - `onReorder`: () => void
    - `onSupport`: () => void

### 3.5 Cartões
- **PaymentMethods**
  - Props:
    - `cards`: Card[]
    - `onAddCard`: () => void
    - `onRemoveCard`: (id: string) => void
    - `onSetDefault`: (id: string) => void
    - `loading`: boolean

- **CardForm**
  - Props:
    - `onSubmit`: (data: CardData) => void
    - `loading`: boolean
    - `error`: string
    - `type`: "credit" | "debit"

## 4. Interações e Estados

### 4.1 Ações do Usuário
- [ ] Dados Pessoais
  - [ ] Atualizar perfil
  - [ ] Trocar senha
  - [ ] Upload de avatar
  - [ ] Preferências

- [ ] Endereços
  - [ ] Adicionar endereço
  - [ ] Editar endereço
  - [ ] Remover endereço
  - [ ] Definir padrão

- [ ] Pedidos
  - [ ] Visualizar histórico
  - [ ] Filtrar pedidos
  - [ ] Ver detalhes
  - [ ] Rastrear entrega
  - [ ] Recomprar

- [ ] Pagamento
  - [ ] Adicionar cartão
  - [ ] Remover cartão
  - [ ] Cartão padrão
  - [ ] Histórico

### 4.2 Feedback Visual
- [ ] Loading States
  - [ ] Form submission
  - [ ] Data fetching
  - [ ] Image upload
  - [ ] Card processing

- [ ] Validações
  - [ ] Campos obrigatórios
  - [ ] Formatos válidos
  - [ ] Dados sensíveis
  - [ ] Confirmações

- [ ] Notificações
  - [ ] Sucesso
  - [ ] Erro
  - [ ] Alertas
  - [ ] Updates

## 5. Aspectos Técnicos

### 5.1 Integração com APIs
```typescript
interface ProfileAPI {
  // Dados do Usuário
  getProfile: () => Promise<User>;
  updateProfile: (data: UserData) => Promise<User>;
  updateAvatar: (file: File) => Promise<string>;
  changePassword: (data: PasswordData) => Promise<void>;
  
  // Endereços
  getAddresses: () => Promise<Address[]>;
  addAddress: (data: Address) => Promise<Address>;
  updateAddress: (id: string, data: Address) => Promise<Address>;
  deleteAddress: (id: string) => Promise<void>;
  setDefaultAddress: (id: string, type: AddressType) => Promise<void>;
  
  // Pedidos
  getOrders: (filters: OrderFilter) => Promise<OrderResponse>;
  getOrderDetails: (id: string) => Promise<Order>;
  reorder: (id: string) => Promise<Order>;
  cancelOrder: (id: string) => Promise<void>;
  
  // Pagamentos
  getCards: () => Promise<Card[]>;
  addCard: (data: CardData) => Promise<Card>;
  removeCard: (id: string) => Promise<void>;
  setDefaultCard: (id: string) => Promise<void>;
  
  // Preferências
  getPreferences: () => Promise<Preferences>;
  updatePreferences: (data: Preferences) => Promise<Preferences>;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  document: {
    type: 'cpf' | 'cnpj';
    number: string;
  };
  preferences: Preferences;
  createdAt: Date;
  updatedAt: Date;
}

interface Address {
  id: string;
  type: 'billing' | 'shipping';
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipcode: string;
  isDefault: boolean;
  label?: string;
}

interface Order {
  id: string;
  number: string;
  status: OrderStatus;
  items: OrderItem[];
  shipping: {
    address: Address;
    method: string;
    price: number;
    tracking?: string;
  };
  payment: {
    method: string;
    card?: Card;
    installments: number;
    total: number;
  };
  dates: {
    created: Date;
    approved?: Date;
    shipped?: Date;
    delivered?: Date;
    cancelled?: Date;
  };
  total: number;
}

interface Card {
  id: string;
  brand: string;
  last4: string;
  holderName: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault: boolean;
}

interface Preferences {
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  marketing: {
    email: boolean;
    sms: boolean;
  };
  privacy: {
    shareData: boolean;
    analytics: boolean;
  };
}

type OrderStatus = 
  | 'pending'
  | 'approved'
  | 'shipped'
  | 'delivered'
  | 'cancelled';
```

### 5.2 Performance
- **Otimizações**:
  - [ ] Data Fetching
    - [ ] Lazy loading
    - [ ] Pagination
    - [ ] Caching
    - [ ] Prefetch
  
  - [ ] Assets
    - [ ] Image optimization
    - [ ] Lazy images
    - [ ] CDN delivery
    - [ ] Compression
  
  - [ ] Forms
    - [ ] Debounce
    - [ ] Validation cache
    - [ ] Auto-save
    - [ ] Optimistic UI

## 6. Variáveis de Estilo
```scss
// Cores do Tema
$profile-primary: var(--primary-500);
$profile-secondary: var(--secondary-500);
$profile-background: var(--background-white);
$profile-surface: var(--surface-white);

// Status
$status-success: var(--success-500);
$status-warning: var(--warning-500);
$status-error: var(--error-500);
$status-info: var(--info-500);

// Navegação
$nav-background: var(--background-white);
$nav-border: var(--border-color);
$nav-active: var(--primary-100);
$nav-hover: var(--primary-50);

// Cards
$card-background: var(--background-white);
$card-border: var(--border-color);
$card-shadow: var(--shadow-sm);
$card-radius: var(--radius-lg);

// Forms
$input-border: var(--border-color);
$input-focus: var(--primary-500);
$input-error: var(--error-500);
$input-disabled: var(--gray-300);

// Espaçamentos
$header-height: 80px;
$sidebar-width: 280px;
$content-padding: var(--spacing-6);
$form-gap: var(--spacing-4);
$section-gap: var(--spacing-6);

// Tipografia
$title-text: var(--font-xl);
$subtitle-text: var(--font-lg);
$body-text: var(--font-md);
$helper-text: var(--font-sm);
$error-text: var(--font-sm);

// Dimensões
$avatar-lg: 48px;
$avatar-md: 40px;
$avatar-sm: 32px;
$button-height: 40px;
$input-height: 40px;

// Breakpoints
$mobile: 768px;
$tablet: 1024px;
$desktop: 1280px;

// Animações
$transition-quick: 0.2s ease;
$transition-medium: 0.3s ease;
$slide-up: translateY(20px);
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] Perfil
  - [ ] Atualização de dados
  - [ ] Upload de avatar
  - [ ] Troca de senha
  - [ ] Preferências

- [ ] Endereços
  - [ ] CRUD completo
  - [ ] Validação de CEP
  - [ ] Endereço padrão
  - [ ] Múltiplos endereços

- [ ] Pedidos
  - [ ] Listagem e filtros
  - [ ] Detalhes do pedido
  - [ ] Rastreamento
  - [ ] Recompra

- [ ] Pagamentos
  - [ ] Adição de cartão
  - [ ] Remoção de cartão
  - [ ] Cartão padrão
  - [ ] Validações

## 8. Checklist de Implementação
- [ ] Setup Inicial
  - [ ] Rotas protegidas
  - [ ] Layout base
  - [ ] Providers
  - [ ] Guards

- [ ] Dados Pessoais
  - [ ] Formulário de perfil
  - [ ] Upload de avatar
  - [ ] Troca de senha
  - [ ] Preferências

- [ ] Endereços
  - [ ] Lista de endereços
  - [ ] CRUD de endereço
  - [ ] Validação de CEP
  - [ ] Maps integration

- [ ] Pedidos
  - [ ] Histórico
  - [ ] Detalhes
  - [ ] Rastreamento
  - [ ] Recompra

- [ ] Pagamentos
  - [ ] Lista de cartões
  - [ ] Adicionar cartão
  - [ ] Remover cartão
  - [ ] Gateway integration

- [ ] UX/UI
  - [ ] Loading states
  - [ ] Error handling
  - [ ] Success feedback
  - [ ] Animações

- [ ] Testes
  - [ ] Unit tests
  - [ ] Integration tests
  - [ ] E2E tests
  - [ ] Performance tests

- [ ] Documentação
  - [ ] API docs
  - [ ] User guide
  - [ ] Security guide
  - [ ] Flow diagrams
