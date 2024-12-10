# Gestão de Produtos (Admin)

## 1. Visão Geral
- **Objetivo**: Gerenciar catálogo de produtos e estoque
- **Usuários**: Administradores e gestores de produtos
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

- **Lista de Produtos (1200xAuto)**
  - Display: grid
  - Grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  - Gap: var(--spacing-4)
  - Padding: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Filtros em accordion
  - Cards de produto ocupam largura total
  - Imagens otimizadas para mobile
  - Ações em menu dropdown
- **Tablet** (768px - 1024px)
  - Grid de 2 colunas para cards
  - Filtros em linha com scroll horizontal
  - Imagens em resolução média
  - Ações principais visíveis
- **Desktop** (> 1024px)
  - Layout padrão com sidebar
  - Grid de 3 colunas para cards em tela cheia
  - Imagens em alta resolução
  - Todas as ações visíveis

## 3. Componentes do Design System

### 3.1 Navegação
- **NavigationMenu**
  - Props:
    - `orientation`: "vertical"
    - `items`: MenuItem[]
    - `activeItem`: "produtos"
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

- **CategoryFilter**
  - Props:
    - `categories`: Category[]
    - `selected`: string[]
    - `onChange`: CategoryChangeHandler
    - `multiSelect`: boolean
    - `showCount`: boolean

### 3.4 Lista de Produtos
- **ProductList**
  - Props:
    - `products`: Product[]
    - `onProductClick`: ProductClickHandler
    - `loading`: boolean
    - `layout`: "grid" | "list"
    - `pagination`: PaginationProps
    - `selection`: SelectionProps
    - `sortable`: boolean

- **ProductCard**
  - Props:
    - `product`: Product
    - `onClick`: ClickHandler
    - `onAction`: ActionHandler
    - `variant`: "compact" | "detailed" | "admin"
    - `showStock`: boolean
    - `showPrice`: boolean
    - `showActions`: boolean
    - `imageSize`: "sm" | "md" | "lg"

- **StockIndicator**
  - Props:
    - `quantity`: number
    - `threshold`: StockThreshold
    - `variant`: "badge" | "text" | "icon"
    - `showQuantity`: boolean

### 3.5 Elementos de Interface
- **Container**
  - Props:
    - `variant`: "card" | "section"
    - `padding`: "sm" | "md" | "lg"
    - `elevation`: "none" | "sm" | "md"

- **ImageUpload**
  - Props:
    - `images`: Image[]
    - `onChange`: ImageChangeHandler
    - `maxSize`: number
    - `aspectRatio`: number
    - `multiple`: boolean
    - `preview`: boolean

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
- [ ] Adicionar novo produto
- [ ] Filtrar produtos por categoria/status
- [ ] Buscar produto por nome/SKU
- [ ] Editar informações do produto
- [ ] Gerenciar estoque
- [ ] Exportar catálogo
- [ ] Gerenciar imagens
- [ ] Definir variações
- [ ] Configurar preços
- [ ] Gerenciar categorias

### 4.2 Feedback Visual
- [ ] Loading states
- [ ] Skeleton loading
- [ ] Toast notifications
- [ ] Confirmações de ação
- [ ] Indicadores de estoque
- [ ] Progress indicators
- [ ] Validação em tempo real
- [ ] Preview de imagens
- [ ] Dicas de interface

## 5. Aspectos Técnicos

### 5.1 Integração com APIs
```typescript
interface ProductsAPI {
  listProducts: (filters: ProductFilters) => Promise<ProductResponse>;
  createProduct: (data: NewProduct) => Promise<Product>;
  updateProduct: (id: string, data: Partial<Product>) => Promise<Product>;
  deleteProduct: (id: string) => Promise<void>;
  updateStock: (id: string, quantity: number) => Promise<StockUpdate>;
  uploadImages: (id: string, images: File[]) => Promise<Image[]>;
  updateVariations: (id: string, variations: ProductVariation[]) => Promise<Product>;
  exportCatalog: (filters: ExportFilters) => Promise<Blob>;
  importProducts: (file: File) => Promise<ImportResult>;
}

interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  price: {
    base: number;
    sale?: number;
    wholesale?: number;
  };
  stock: {
    quantity: number;
    threshold: number;
    reserved: number;
  };
  category: Category[];
  images: Image[];
  variations: ProductVariation[];
  status: ProductStatus;
  metadata: {
    weight: number;
    dimensions: Dimensions;
    brand?: string;
    supplier?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface ProductFilters {
  categories?: string[];
  status?: ProductStatus[];
  stock?: StockStatus;
  price?: PriceRange;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

interface ProductResponse {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}

interface StockUpdate {
  productId: string;
  quantity: number;
  type: 'increment' | 'decrement' | 'set';
  reason: string;
  timestamp: Date;
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
  - [ ] Otimização de assets
  - [ ] Indexação de busca

## 6. Variáveis de Estilo
```scss
// Cores do Tema
$product-primary: var(--primary-500);
$product-secondary: var(--secondary-500);
$product-background: var(--background-primary);

// Status de Estoque
$stock-low: var(--error-500);
$stock-medium: var(--warning-500);
$stock-high: var(--success-500);
$stock-out: var(--error-700);

// Status de Produto
$status-active: var(--success-500);
$status-draft: var(--warning-500);
$status-inactive: var(--error-500);
$status-archived: var(--neutral-500);

// Espaçamentos
$card-padding: var(--spacing-4);
$list-gap: var(--spacing-4);
$section-gap: var(--spacing-6);
$action-gap: var(--spacing-3);
$image-gap: var(--spacing-2);

// Tipografia
$product-title: var(--font-lg);
$product-subtitle: var(--font-md);
$product-text: var(--font-sm);
$price-text: var(--font-lg);
$stock-text: var(--font-sm);
$category-text: var(--font-sm);

// Dimensões
$image-preview: 120px;
$image-thumbnail: 80px;
$card-min-width: 300px;
$card-max-width: 400px;
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] CRUD de produtos
- [ ] Upload e gestão de imagens
- [ ] Gestão de variações
- [ ] Gestão de estoque
- [ ] Filtros e busca
- [ ] Exportação e importação
- [ ] Responsividade
- [ ] Performance
- [ ] Cache e persistência
- [ ] Validações de formulário
- [ ] Tratamento de erros
- [ ] Otimização de imagens

## 8. Checklist de Implementação
- [ ] Estrutura base
  - [ ] Layout responsivo
  - [ ] Componentes do design system
  - [ ] Integração com API
- [ ] Funcionalidades
  - [ ] CRUD de produtos
  - [ ] Sistema de filtros
  - [ ] Gestão de estoque
  - [ ] Gestão de imagens
  - [ ] Variações de produto
  - [ ] Importação/Exportação
- [ ] UI/UX
  - [ ] Estados de loading
  - [ ] Feedback visual
  - [ ] Animações
  - [ ] Temas (claro/escuro)
  - [ ] Acessibilidade
  - [ ] Responsividade
- [ ] Performance
  - [ ] Otimizações de imagem
  - [ ] Caching
  - [ ] Lazy loading
  - [ ] Virtualização
  - [ ] SEO
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
