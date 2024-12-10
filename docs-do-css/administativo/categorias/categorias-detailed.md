# Gestão de Categorias (Admin)

## 1. Visão Geral
- **Objetivo**: Gerenciar categorias e subcategorias de produtos
- **Usuários**: Administradores e equipe de catálogo
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

- **Lista de Categorias (1200xAuto)**
  - Display: grid
  - Grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  - Gap: var(--spacing-4)
  - Padding: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Filtros em accordion
  - Cards de categoria ocupam largura total
  - Informações condensadas
  - Ações em menu dropdown
- **Tablet** (768px - 1024px)
  - Grid de 2 colunas para cards
  - Filtros em linha com scroll horizontal
  - Informações essenciais visíveis
  - Ações principais visíveis
- **Desktop** (> 1024px)
  - Layout padrão com sidebar
  - Grid de 3 colunas para cards em tela cheia
  - Todas as informações visíveis
  - Todas as ações visíveis

## 3. Componentes do Design System

### 3.1 Navegação
- **NavigationMenu**
  - Props:
    - `orientation`: "vertical"
    - `items`: MenuItem[]
    - `activeItem`: "categorias"
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

### 3.4 Lista de Categorias
- **CategoryList**
  - Props:
    - `categories`: Category[]
    - `onCategoryClick`: CategoryClickHandler
    - `loading`: boolean
    - `layout`: "grid" | "list" | "tree"
    - `pagination`: PaginationProps
    - `selection`: SelectionProps
    - `sortable`: boolean
    - `draggable`: boolean

- **CategoryCard**
  - Props:
    - `category`: Category
    - `onClick`: ClickHandler
    - `onAction`: ActionHandler
    - `variant`: "compact" | "detailed" | "admin"
    - `showProducts`: boolean
    - `showStats`: boolean
    - `showActions`: boolean

- **CategoryTree**
  - Props:
    - `categories`: Category[]
    - `selectedId`: string
    - `onSelect`: SelectHandler
    - `expandedIds`: string[]
    - `onExpand`: ExpandHandler
    - `draggable`: boolean
    - `onDrop`: DropHandler

### 3.5 Elementos de Interface
- **Container**
  - Props:
    - `variant`: "card" | "section"
    - `padding`: "sm" | "md" | "lg"
    - `elevation`: "none" | "sm" | "md"

- **CategoryForm**
  - Props:
    - `category`: Category
    - `onSubmit`: SubmitHandler
    - `loading`: boolean
    - `error`: Error
    - `mode`: "create" | "edit"

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
- [ ] Criar categoria
- [ ] Editar categoria
- [ ] Excluir categoria
- [ ] Reordenar categorias
- [ ] Gerenciar hierarquia
- [ ] Associar produtos
- [ ] Definir imagens
- [ ] Configurar SEO
- [ ] Definir atributos
- [ ] Exportar dados

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
interface CategoriesAPI {
  listCategories: (filters: CategoryFilters) => Promise<CategoryResponse>;
  getCategory: (id: string) => Promise<Category>;
  createCategory: (data: CategoryInput) => Promise<Category>;
  updateCategory: (id: string, data: Partial<CategoryInput>) => Promise<Category>;
  deleteCategory: (id: string) => Promise<void>;
  reorderCategories: (orders: CategoryOrder[]) => Promise<void>;
  exportCategories: (filters: CategoryFilters) => Promise<Blob>;
  getCategoryProducts: (id: string) => Promise<ProductResponse>;
  updateCategoryImage: (id: string, image: File) => Promise<Category>;
  updateCategorySEO: (id: string, seo: SEOData) => Promise<Category>;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId: string | null;
  level: number;
  order: number;
  image: {
    url: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  attributes: CategoryAttribute[];
  stats: {
    totalProducts: number;
    activeProducts: number;
    totalSales: number;
  };
  status: CategoryStatus;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryInput {
  name: string;
  slug?: string;
  description: string;
  parentId?: string;
  order?: number;
  image?: {
    url: string;
    alt: string;
  };
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
  attributes?: CategoryAttribute[];
  status: CategoryStatus;
}

interface CategoryFilters {
  parentId?: string;
  level?: number;
  search?: string;
  status?: CategoryStatus[];
  hasProducts?: boolean;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

interface CategoryResponse {
  categories: Category[];
  total: number;
  page: number;
  totalPages: number;
  stats: {
    totalCategories: number;
    totalProducts: number;
    averageProductsPerCategory: number;
    maxDepth: number;
  };
}

interface CategoryAttribute {
  name: string;
  type: 'text' | 'number' | 'boolean' | 'select';
  required: boolean;
  options?: string[];
  default?: any;
}

interface CategoryOrder {
  id: string;
  parentId: string | null;
  order: number;
}

type CategoryStatus = 'active' | 'inactive' | 'draft';
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
$category-primary: var(--primary-500);
$category-secondary: var(--secondary-500);
$category-background: var(--background-primary);

// Status
$status-active: var(--success-500);
$status-inactive: var(--error-500);
$status-draft: var(--warning-500);

// Hierarquia
$level-line: var(--border-color);
$level-indicator: var(--primary-300);
$drag-indicator: var(--primary-500);

// Espaçamentos
$card-padding: var(--spacing-4);
$list-gap: var(--spacing-4);
$section-gap: var(--spacing-6);
$action-gap: var(--spacing-3);
$tree-indent: var(--spacing-6);

// Tipografia
$category-title: var(--font-lg);
$category-subtitle: var(--font-md);
$category-text: var(--font-sm);
$stat-value: var(--font-lg);
$stat-label: var(--font-sm);

// Dimensões
$card-min-width: 300px;
$card-max-width: 400px;
$image-size: 120px;
$thumbnail-size: 48px;
$tree-line: 2px;
$status-icon: 24px;
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] CRUD de categorias
- [ ] Hierarquia e ordenação
- [ ] Gestão de imagens
- [ ] Configuração de SEO
- [ ] Gestão de atributos
- [ ] Associação de produtos
- [ ] Exportação de dados
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
  - [ ] Busca de categorias
  - [ ] Gestão de hierarquia
  - [ ] Gestão de imagens
  - [ ] Configuração de SEO
  - [ ] Gestão de atributos
  - [ ] Associação de produtos
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
