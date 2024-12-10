# Gestão de Crédito do Zé (Admin)

## 1. Visão Geral
- **Objetivo**: Gerenciar o sistema de créditos e fidelidade dos clientes
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

- **Dashboard de Créditos (1200x300px)**
  - Display: grid
  - Grid-template-columns: repeat(4, 1fr)
  - Gap: var(--spacing-4)
  - Margin-bottom: var(--spacing-6)

- **Lista de Transações (1200xAuto)**
  - Display: flex
  - Flex-direction: column
  - Gap: var(--spacing-4)
  - Padding: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Filtros em accordion
  - Cards de estatística em grid 2x2
  - Lista de transações em cards
  - Ações em menu dropdown
- **Tablet** (768px - 1024px)
  - Grid de 2 colunas para cards
  - Filtros em linha com scroll horizontal
  - Cards de estatística em grid 2x2
  - Lista de transações em tabela compacta
- **Desktop** (> 1024px)
  - Layout padrão com sidebar
  - Cards de estatística em linha
  - Lista de transações em tabela completa
  - Todas as ações visíveis

## 3. Componentes do Design System

### 3.1 Navegação
- **NavigationMenu**
  - Props:
    - `orientation`: "vertical"
    - `items`: MenuItem[]
    - `activeItem`: "credito-do-ze"
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

### 3.4 Dashboard de Créditos
- **CreditStatsCard**
  - Props:
    - `title`: string
    - `value`: number
    - `trend`: number
    - `period`: "day" | "week" | "month"
    - `loading`: boolean
    - `variant`: "primary" | "secondary"

- **CreditChart**
  - Props:
    - `data`: CreditChartData[]
    - `type`: "line" | "bar"
    - `period`: "day" | "week" | "month" | "year"
    - `loading`: boolean
    - `height`: number

### 3.5 Lista de Transações
- **TransactionList**
  - Props:
    - `transactions`: Transaction[]
    - `onTransactionClick`: TransactionClickHandler
    - `loading`: boolean
    - `layout`: "table" | "cards"
    - `pagination`: PaginationProps
    - `selection`: SelectionProps
    - `sortable`: boolean

- **TransactionCard**
  - Props:
    - `transaction`: Transaction
    - `onClick`: ClickHandler
    - `onAction`: ActionHandler
    - `variant`: "compact" | "detailed" | "admin"
    - `showCustomer`: boolean
    - `showDetails`: boolean
    - `showActions`: boolean

### 3.6 Elementos de Interface
- **Container**
  - Props:
    - `variant`: "card" | "section"
    - `padding`: "sm" | "md" | "lg"
    - `elevation`: "none" | "sm" | "md"

- **CreditForm**
  - Props:
    - `customer`: Customer
    - `onSubmit`: SubmitHandler
    - `loading`: boolean
    - `error`: Error
    - `mode`: "add" | "subtract"

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
- [ ] Visualizar saldo de créditos
- [ ] Adicionar créditos
- [ ] Subtrair créditos
- [ ] Visualizar histórico
- [ ] Filtrar transações
- [ ] Exportar relatórios
- [ ] Configurar regras
- [ ] Gerenciar pontos
- [ ] Definir níveis
- [ ] Gerar cupons

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
interface CreditsAPI {
  getCreditsOverview: () => Promise<CreditsOverview>;
  listTransactions: (filters: TransactionFilters) => Promise<TransactionResponse>;
  getTransaction: (id: string) => Promise<Transaction>;
  addCredits: (data: CreditOperation) => Promise<Transaction>;
  subtractCredits: (data: CreditOperation) => Promise<Transaction>;
  exportTransactions: (filters: TransactionFilters) => Promise<Blob>;
  getRules: () => Promise<CreditRules>;
  updateRules: (rules: CreditRules) => Promise<CreditRules>;
  getLevels: () => Promise<CreditLevels>;
  updateLevels: (levels: CreditLevels) => Promise<CreditLevels>;
  generateCoupon: (data: CouponData) => Promise<Coupon>;
}

interface CreditsOverview {
  totalCredits: number;
  activeCustomers: number;
  averageBalance: number;
  monthlyTransactions: number;
  stats: {
    creditsByPeriod: {
      period: string;
      amount: number;
      count: number;
    }[];
    transactionsByType: {
      type: TransactionType;
      amount: number;
      count: number;
    }[];
    customersByLevel: {
      level: string;
      customers: number;
      totalCredits: number;
    }[];
  };
}

interface Transaction {
  id: string;
  customer: {
    id: string;
    name: string;
    email: string;
  };
  type: TransactionType;
  amount: number;
  balance: number;
  description: string;
  reference?: {
    type: ReferenceType;
    id: string;
  };
  metadata: Record<string, any>;
  createdAt: Date;
  createdBy: string;
}

interface CreditOperation {
  customerId: string;
  amount: number;
  description: string;
  reference?: {
    type: ReferenceType;
    id: string;
  };
  metadata?: Record<string, any>;
}

interface TransactionFilters {
  customerId?: string;
  type?: TransactionType[];
  dateRange?: DateRange;
  minAmount?: number;
  maxAmount?: number;
  reference?: ReferenceType;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

interface TransactionResponse {
  transactions: Transaction[];
  total: number;
  page: number;
  totalPages: number;
  stats: {
    totalTransactions: number;
    totalAmount: number;
    averageAmount: number;
  };
}

interface CreditRules {
  earnRules: {
    purchase: {
      type: 'percentage' | 'fixed';
      value: number;
      minPurchase?: number;
    };
    referral: {
      referrer: number;
      referred: number;
    };
    events: {
      signup: number;
      birthday: number;
      review: number;
    };
  };
  spendRules: {
    minAmount: number;
    maxAmount: number;
    expirationDays: number;
    restrictions: string[];
  };
}

interface CreditLevels {
  levels: {
    id: string;
    name: string;
    minCredits: number;
    benefits: {
      multiplier: number;
      perks: string[];
    };
  }[];
}

type TransactionType = 
  | 'earn_purchase'
  | 'earn_referral'
  | 'earn_event'
  | 'spend'
  | 'expire'
  | 'adjust';

type ReferenceType = 
  | 'order'
  | 'referral'
  | 'event'
  | 'manual';
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
$credit-primary: var(--primary-500);
$credit-secondary: var(--secondary-500);
$credit-background: var(--background-primary);

// Tipos de Transação
$transaction-earn: var(--success-500);
$transaction-spend: var(--warning-500);
$transaction-expire: var(--error-500);
$transaction-adjust: var(--info-500);

// Níveis
$level-bronze: var(--bronze-500);
$level-silver: var(--silver-500);
$level-gold: var(--gold-500);
$level-platinum: var(--platinum-500);

// Tendências
$trend-positive: var(--success-500);
$trend-negative: var(--error-500);
$trend-neutral: var(--warning-500);

// Espaçamentos
$card-padding: var(--spacing-4);
$list-gap: var(--spacing-4);
$section-gap: var(--spacing-6);
$action-gap: var(--spacing-3);
$stats-gap: var(--spacing-2);

// Tipografia
$credit-title: var(--font-lg);
$credit-subtitle: var(--font-md);
$credit-text: var(--font-sm);
$stat-value: var(--font-xl);
$stat-label: var(--font-sm);
$trend-text: var(--font-xs);

// Dimensões
$card-min-width: 280px;
$card-max-width: 320px;
$chart-height: 300px;
$icon-size: 24px;
$badge-size: 20px;
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] Operações de crédito
- [ ] Histórico de transações
- [ ] Regras de pontuação
- [ ] Níveis de fidelidade
- [ ] Geração de cupons
- [ ] Relatórios e exportação
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
  - [ ] Operações de crédito
  - [ ] Histórico de transações
  - [ ] Regras de pontuação
  - [ ] Níveis de fidelidade
  - [ ] Geração de cupons
  - [ ] Relatórios
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
