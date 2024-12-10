# Gestão de Fornecedores (Admin)

## 1. Visão Geral
- **Objetivo**: Gerenciar relacionamento com fornecedores e compras
- **Usuários**: Administradores e equipe de compras
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

- **Lista de Fornecedores (1200xAuto)**
  - Display: grid
  - Grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))
  - Gap: var(--spacing-4)
  - Padding: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Filtros em accordion
  - Cards de fornecedor ocupam largura total
  - Ações em menu dropdown
- **Tablet** (768px - 1024px)
  - Grid de 2 colunas para cards
  - Filtros em linha com scroll horizontal
  - Ações principais visíveis
- **Desktop** (> 1024px)
  - Layout padrão com sidebar
  - Grid de 3 colunas para cards em tela cheia
  - Todas as ações visíveis

## 3. Componentes do Design System

### 3.1 Navegação
- **NavigationMenu**
  - Props:
    - `orientation`: "vertical"
    - `items`: MenuItem[]
    - `activeItem`: "fornecedores"
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

### 3.3 Filtros e Busca
- **SearchInput**
  - Props:
    - `placeholder`: string
    - `value`: string
    - `onChange`: ChangeHandler
    - `onSearch`: SearchHandler
    - `loading`: boolean

- **FilterBar**
  - Props:
    - `filters`: Filter[]
    - `selectedFilters`: SelectedFilters
    - `onChange`: FilterChangeHandler
    - `onClear`: ClearHandler
    - `layout`: "row" | "column"

### 3.4 Lista de Fornecedores
- **SupplierList**
  - Props:
    - `suppliers`: Supplier[]
    - `onSupplierClick`: SupplierClickHandler
    - `loading`: boolean
    - `layout`: "grid" | "list"
    - `pagination`: PaginationProps

- **SupplierCard**
  - Props:
    - `supplier`: Supplier
    - `onClick`: ClickHandler
    - `onAction`: ActionHandler
    - `variant`: "compact" | "detailed"
    - `rating`: RatingProps
    - `status`: StatusProps

### 3.5 Elementos de Interface
- **Container**
  - Props:
    - `variant`: "card" | "section"
    - `padding`: "sm" | "md" | "lg"
    - `elevation`: "none" | "sm" | "md"

- **Pagination**
  - Props:
    - `page`: number
    - `totalPages`: number
    - `onPageChange`: PageChangeHandler
    - `itemsPerPage`: number
    - `totalItems`: number

## 4. Interações e Estados

### 4.1 Ações do Usuário
- [ ] Adicionar novo fornecedor
- [ ] Filtrar por categoria/status
- [ ] Buscar fornecedor por nome/CNPJ
- [ ] Editar informações do fornecedor
- [ ] Avaliar fornecedor
- [ ] Visualizar histórico de compras
- [ ] Exportar dados
- [ ] Gerenciar documentos

### 4.2 Feedback Visual
- [ ] Loading states
- [ ] Skeleton loading
- [ ] Toast notifications
- [ ] Confirmações de ação
- [ ] Indicadores de status
- [ ] Badges de rating
- [ ] Progress indicators

## 5. Aspectos Técnicos

### 5.1 Integração com APIs
```typescript
interface SuppliersAPI {
  listSuppliers: (filters: SupplierFilters) => Promise<SupplierResponse>;
  createSupplier: (data: NewSupplier) => Promise<Supplier>;
  updateSupplier: (id: string, data: Partial<Supplier>) => Promise<Supplier>;
  deleteSupplier: (id: string) => Promise<void>;
  rateSupplier: (id: string, rating: SupplierRating) => Promise<RatingResponse>;
  getPurchaseHistory: (id: string) => Promise<PurchaseHistory>;
  uploadDocument: (id: string, file: File) => Promise<Document>;
  exportData: (filters: ExportFilters) => Promise<Blob>;
}

interface Supplier {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  address: Address;
  category: string[];
  status: SupplierStatus;
  rating: number;
  documents: Document[];
  createdAt: Date;
  updatedAt: Date;
}

interface SupplierFilters {
  categories?: string[];
  status?: SupplierStatus[];
  rating?: number;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

interface SupplierResponse {
  suppliers: Supplier[];
  total: number;
  page: number;
  totalPages: number;
}
```

### 5.2 Performance
- **Otimizações**:
  - [ ] Paginação server-side
  - [ ] Lazy loading de imagens
  - [ ] Debounce na busca
  - [ ] Cache de filtros
  - [ ] Memoização de componentes
  - [ ] Compressão de imagens
  - [ ] Virtualização de listas

## 6. Variáveis de Estilo
```scss
// Cores do Tema
$supplier-primary: var(--primary-500);
$supplier-secondary: var(--secondary-500);
$supplier-background: var(--background-primary);

// Rating
$rating-low: var(--error-500);
$rating-medium: var(--warning-500);
$rating-high: var(--success-500);

// Status
$status-active: var(--success-500);
$status-inactive: var(--error-500);
$status-pending: var(--warning-500);
$status-blocked: var(--error-700);

// Espaçamentos
$card-padding: var(--spacing-4);
$list-gap: var(--spacing-4);
$section-gap: var(--spacing-6);
$action-gap: var(--spacing-3);

// Tipografia
$supplier-title: var(--font-lg);
$supplier-subtitle: var(--font-md);
$supplier-text: var(--font-sm);
$rating-text: var(--font-md);
$status-text: var(--font-sm);
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] CRUD de fornecedores
- [ ] Filtros e busca
- [ ] Sistema de rating
- [ ] Upload de documentos
- [ ] Exportação de dados
- [ ] Responsividade
- [ ] Performance
- [ ] Cache e persistência
- [ ] Validações de formulário
- [ ] Tratamento de erros

## 8. Checklist de Implementação
- [ ] Estrutura base
  - [ ] Layout responsivo
  - [ ] Componentes do design system
  - [ ] Integração com API
- [ ] Funcionalidades
  - [ ] CRUD de fornecedores
  - [ ] Sistema de filtros
  - [ ] Sistema de rating
  - [ ] Histórico de compras
  - [ ] Gestão de documentos
  - [ ] Exportação de dados
- [ ] UI/UX
  - [ ] Estados de loading
  - [ ] Feedback visual
  - [ ] Animações
  - [ ] Temas (claro/escuro)
  - [ ] Acessibilidade
- [ ] Performance
  - [ ] Otimizações de imagem
  - [ ] Caching
  - [ ] Lazy loading
  - [ ] Virtualização
- [ ] Testes
  - [ ] Unitários
  - [ ] Integração
  - [ ] E2E
  - [ ] Performance
- [ ] Documentação
  - [ ] Comentários no código
  - [ ] README atualizado
  - [ ] Storybook components
  - [ ] Guia de contribuição
