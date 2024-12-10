# Gestão de Marcas (Admin)

## 1. Visão Geral
- **Objetivo**: Gerenciar marcas e fabricantes dos produtos
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

- **Lista de Marcas (1200xAuto)**
  - Display: grid
  - Grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  - Gap: var(--spacing-4)
  - Padding: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Filtros em accordion
  - Cards de marca ocupam largura total
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
    - `activeItem`: "marcas"
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

### 3.4 Lista de Marcas
- **BrandList**
  - Props:
    - `brands`: Brand[]
    - `onBrandClick`: BrandClickHandler
    - `loading`: boolean
    - `layout`: "grid" | "list"
    - `pagination`: PaginationProps
    - `selection`: SelectionProps
    - `sortable`: boolean

- **BrandCard**
  - Props:
    - `brand`: Brand
    - `onClick`: ClickHandler
    - `onAction`: ActionHandler
    - `variant`: "compact" | "detailed" | "admin"
    - `showProducts`: boolean
    - `showStats`: boolean
    - `showActions`: boolean

- **BrandGallery**
  - Props:
    - `brand`: Brand
    - `images`: BrandImage[]
    - `onImageUpload`: UploadHandler
    - `onImageDelete`: DeleteHandler
    - `loading`: boolean

### 3.5 Elementos de Interface
- **Container**
  - Props:
    - `variant`: "card" | "section"
    - `padding`: "sm" | "md" | "lg"
    - `elevation`: "none" | "sm" | "md"

- **BrandForm**
  - Props:
    - `brand`: Brand
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
- [ ] Criar marca
- [ ] Editar marca
- [ ] Excluir marca
- [ ] Gerenciar imagens
- [ ] Associar produtos
- [ ] Configurar SEO
- [ ] Definir informações de contato
- [ ] Gerenciar certificações
- [ ] Definir região de atuação
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
interface BrandsAPI {
  listBrands: (filters: BrandFilters) => Promise<BrandResponse>;
  getBrand: (id: string) => Promise<Brand>;
  createBrand: (data: BrandInput) => Promise<Brand>;
  updateBrand: (id: string, data: Partial<BrandInput>) => Promise<Brand>;
  deleteBrand: (id: string) => Promise<void>;
  exportBrands: (filters: BrandFilters) => Promise<Blob>;
  getBrandProducts: (id: string) => Promise<ProductResponse>;
  updateBrandLogo: (id: string, logo: File) => Promise<Brand>;
  updateBrandImages: (id: string, images: File[]) => Promise<Brand>;
  updateBrandSEO: (id: string, seo: SEOData) => Promise<Brand>;
}

interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: {
    url: string;
    alt: string;
  };
  images: BrandImage[];
  website: string;
  contact: {
    email: string;
    phone: string;
    address: Address;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  certifications: string[];
  regions: string[];
  stats: {
    totalProducts: number;
    activeProducts: number;
    totalSales: number;
  };
  status: BrandStatus;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface BrandInput {
  name: string;
  slug?: string;
  description: string;
  logo?: {
    url: string;
    alt: string;
  };
  website?: string;
  contact?: {
    email: string;
    phone: string;
    address: Address;
  };
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
  certifications?: string[];
  regions?: string[];
  status: BrandStatus;
  featured?: boolean;
}

interface BrandFilters {
  search?: string;
  status?: BrandStatus[];
  featured?: boolean;
  hasProducts?: boolean;
  regions?: string[];
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

interface BrandResponse {
  brands: Brand[];
  total: number;
  page: number;
  totalPages: number;
  stats: {
    totalBrands: number;
    totalProducts: number;
    averageProductsPerBrand: number;
    featuredBrands: number;
  };
}

interface BrandImage {
  id: string;
  url: string;
  alt: string;
  type: 'logo' | 'banner' | 'gallery';
  order: number;
}

type BrandStatus = 'active' | 'inactive' | 'draft';
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
$brand-primary: var(--primary-500);
$brand-secondary: var(--secondary-500);
$brand-background: var(--background-primary);

// Status
$status-active: var(--success-500);
$status-inactive: var(--error-500);
$status-draft: var(--warning-500);

// Destaques
$featured-background: var(--warning-100);
$featured-border: var(--warning-500);
$featured-icon: var(--warning-700);

// Espaçamentos
$card-padding: var(--spacing-4);
$list-gap: var(--spacing-4);
$section-gap: var(--spacing-6);
$action-gap: var(--spacing-3);
$gallery-gap: var(--spacing-2);

// Tipografia
$brand-title: var(--font-lg);
$brand-subtitle: var(--font-md);
$brand-text: var(--font-sm);
$stat-value: var(--font-lg);
$stat-label: var(--font-sm);

// Dimensões
$card-min-width: 300px;
$card-max-width: 400px;
$logo-size: 120px;
$thumbnail-size: 48px;
$gallery-thumb: 80px;
$status-icon: 24px;
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] CRUD de marcas
- [ ] Gestão de imagens
- [ ] Configuração de SEO
- [ ] Gestão de contatos
- [ ] Gestão de certificações
- [ ] Gestão de regiões
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
  - [ ] Busca de marcas
  - [ ] Gestão de imagens
  - [ ] Configuração de SEO
  - [ ] Gestão de contatos
  - [ ] Gestão de certificações
  - [ ] Gestão de regiões
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
