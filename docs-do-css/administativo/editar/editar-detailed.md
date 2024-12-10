# Gestão de Conteúdo (Admin)

## 1. Visão Geral
- **Objetivo**: Gerenciar conteúdo do site, incluindo banners e textos
- **Usuários**: Administradores e equipe de marketing
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

- **Área de Navegação (1200x50px)**
  - Background: var(--background-white)
  - Border-radius: var(--radius-md)
  - Padding: var(--spacing-4)
  - Border-bottom: 2px solid var(--border-color)

- **Área de Conteúdo (1200xAuto)**
  - Display: flex
  - Flex-direction: column
  - Gap: var(--spacing-6)
  - Padding: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Preview em modal
  - Editor simplificado
  - Ações em menu dropdown
- **Tablet** (768px - 1024px)
  - Layout em duas colunas
  - Preview ao lado do editor
  - Editor com ferramentas essenciais
- **Desktop** (> 1024px)
  - Layout completo
  - Preview em tempo real
  - Editor com todas as ferramentas
  - Todas as ações visíveis

## 3. Componentes do Design System

### 3.1 Navegação
- **NavigationMenu**
  - Props:
    - `orientation`: "vertical"
    - `items`: MenuItem[]
    - `activeItem`: "editar"
    - `onItemClick`: (item: MenuItem) => void

- **TabNavigation**
  - Props:
    - `tabs`: Tab[]
    - `activeTab`: string
    - `onChange`: TabChangeHandler
    - `variant`: "primary" | "secondary"

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

### 3.3 Gestão de Banners
- **BannerList**
  - Props:
    - `banners`: Banner[]
    - `onBannerClick`: BannerClickHandler
    - `loading`: boolean
    - `layout`: "grid" | "list"
    - `sortable`: boolean
    - `selection`: SelectionProps

- **BannerEditor**
  - Props:
    - `banner`: Banner
    - `onSave`: SaveHandler
    - `loading`: boolean
    - `error`: Error
    - `mode`: "create" | "edit"

- **ImageUploader**
  - Props:
    - `images`: Image[]
    - `onUpload`: UploadHandler
    - `onDelete`: DeleteHandler
    - `maxSize`: number
    - `allowedTypes`: string[]
    - `multiple`: boolean

### 3.4 Gestão de Textos
- **TextList**
  - Props:
    - `texts`: Text[]
    - `onTextClick`: TextClickHandler
    - `loading`: boolean
    - `layout`: "grid" | "list"
    - `filterable`: boolean

- **TextEditor**
  - Props:
    - `content`: string
    - `onChange`: ChangeHandler
    - `toolbarConfig`: ToolbarConfig
    - `plugins`: Plugin[]
    - `placeholder`: string
    - `readOnly`: boolean

- **VersionHistory**
  - Props:
    - `versions`: Version[]
    - `currentVersion`: string
    - `onRevert`: RevertHandler
    - `loading`: boolean

### 3.5 Preview
- **ContentPreview**
  - Props:
    - `content`: PreviewContent
    - `device`: "mobile" | "tablet" | "desktop"
    - `zoom`: number
    - `showGrid`: boolean

- **DeviceFrame**
  - Props:
    - `type`: "mobile" | "tablet" | "desktop"
    - `orientation`: "portrait" | "landscape"
    - `scale`: number

### 3.6 Elementos de Interface
- **Container**
  - Props:
    - `variant`: "card" | "section"
    - `padding`: "sm" | "md" | "lg"
    - `elevation`: "none" | "sm" | "md"

- **DragHandle**
  - Props:
    - `axis`: "x" | "y" | "both"
    - `onDrag`: DragHandler
    - `disabled`: boolean

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
- [ ] Gerenciar banners
  - [ ] Criar banner
  - [ ] Editar banner
  - [ ] Excluir banner
  - [ ] Reordenar banners
  - [ ] Agendar publicação
- [ ] Gerenciar textos
  - [ ] Criar texto
  - [ ] Editar texto
  - [ ] Versionar texto
  - [ ] Reverter versão
  - [ ] Publicar texto
- [ ] Gerenciar mídia
  - [ ] Upload de imagens
  - [ ] Otimizar imagens
  - [ ] Organizar galeria
  - [ ] Definir alt text
- [ ] Configurações
  - [ ] Definir layouts
  - [ ] Configurar SEO
  - [ ] Definir dispositivos

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
interface ContentAPI {
  // Banners
  listBanners: (filters: BannerFilters) => Promise<BannerResponse>;
  getBanner: (id: string) => Promise<Banner>;
  createBanner: (data: BannerInput) => Promise<Banner>;
  updateBanner: (id: string, data: Partial<BannerInput>) => Promise<Banner>;
  deleteBanner: (id: string) => Promise<void>;
  reorderBanners: (orders: BannerOrder[]) => Promise<void>;
  scheduleBanner: (id: string, schedule: Schedule) => Promise<Banner>;

  // Textos
  listTexts: (filters: TextFilters) => Promise<TextResponse>;
  getText: (id: string) => Promise<Text>;
  createText: (data: TextInput) => Promise<Text>;
  updateText: (id: string, data: Partial<TextInput>) => Promise<Text>;
  deleteText: (id: string) => Promise<void>;
  getTextVersions: (id: string) => Promise<Version[]>;
  revertTextVersion: (id: string, version: string) => Promise<Text>;

  // Mídia
  uploadImage: (file: File, options: ImageOptions) => Promise<Image>;
  optimizeImage: (id: string, options: OptimizeOptions) => Promise<Image>;
  deleteImage: (id: string) => Promise<void>;
  updateImageMeta: (id: string, meta: ImageMeta) => Promise<Image>;
}

interface Banner {
  id: string;
  title: string;
  description: string;
  image: {
    desktop: Image;
    tablet?: Image;
    mobile?: Image;
  };
  link: {
    url: string;
    target: '_self' | '_blank';
  };
  position: number;
  schedule?: {
    start: Date;
    end?: Date;
  };
  status: ContentStatus;
  stats: {
    views: number;
    clicks: number;
    ctr: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface Text {
  id: string;
  key: string;
  title: string;
  content: string;
  format: 'plain' | 'html' | 'markdown';
  versions: Version[];
  meta: {
    author: string;
    lastEditor: string;
    publishedAt?: Date;
  };
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
}

interface Image {
  id: string;
  url: string;
  filename: string;
  alt: string;
  size: number;
  dimensions: {
    width: number;
    height: number;
  };
  format: string;
  meta: ImageMeta;
  variations: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
  createdAt: Date;
}

interface Version {
  id: string;
  content: string;
  meta: {
    author: string;
    comment?: string;
  };
  createdAt: Date;
}

interface BannerFilters {
  search?: string;
  status?: ContentStatus[];
  dateRange?: DateRange;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

interface TextFilters {
  search?: string;
  key?: string;
  status?: ContentStatus[];
  author?: string;
  dateRange?: DateRange;
  page?: number;
  limit?: number;
}

interface ImageMeta {
  alt: string;
  title?: string;
  description?: string;
  tags?: string[];
  credit?: string;
  license?: string;
}

interface OptimizeOptions {
  quality?: number;
  format?: string;
  width?: number;
  height?: number;
  fit?: 'cover' | 'contain' | 'fill';
}

type ContentStatus = 
  | 'draft'
  | 'published'
  | 'scheduled'
  | 'archived';
```

### 5.2 Performance
- **Otimizações**:
  - [ ] Lazy loading de imagens
  - [ ] Compressão de imagens
  - [ ] Cache de conteúdo
  - [ ] Versionamento eficiente
  - [ ] Preview otimizado
  - [ ] Debounce em edições
  - [ ] Autosave
  - [ ] Upload em chunks
  - [ ] CDN para mídia

## 6. Variáveis de Estilo
```scss
// Cores do Tema
$content-primary: var(--primary-500);
$content-secondary: var(--secondary-500);
$content-background: var(--background-primary);

// Status
$status-draft: var(--warning-500);
$status-published: var(--success-500);
$status-scheduled: var(--info-500);
$status-archived: var(--error-500);

// Editor
$editor-toolbar: var(--background-secondary);
$editor-border: var(--border-color);
$editor-active: var(--primary-500);
$editor-hover: var(--primary-100);

// Preview
$preview-background: var(--background-white);
$preview-border: var(--border-color);
$preview-shadow: var(--shadow-lg);
$grid-lines: var(--border-color);

// Espaçamentos
$toolbar-height: 40px;
$editor-padding: var(--spacing-4);
$preview-padding: var(--spacing-4);
$content-gap: var(--spacing-4);
$version-gap: var(--spacing-2);

// Tipografia
$content-title: var(--font-lg);
$content-subtitle: var(--font-md);
$content-text: var(--font-sm);
$editor-text: var(--font-md);
$toolbar-text: var(--font-sm);
$version-text: var(--font-xs);

// Dimensões
$toolbar-icon: 20px;
$preview-mobile: 320px;
$preview-tablet: 768px;
$preview-desktop: 1200px;
$image-thumbnail: 80px;
$drag-handle: 24px;
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] Gestão de banners
- [ ] Editor de texto
- [ ] Upload de imagens
- [ ] Otimização de mídia
- [ ] Versionamento
- [ ] Agendamento
- [ ] Preview responsivo
- [ ] Performance
- [ ] Cache e persistência
- [ ] Validações de conteúdo
- [ ] Tratamento de erros
- [ ] Permissões de acesso

## 8. Checklist de Implementação
- [ ] Estrutura base
  - [ ] Layout responsivo
  - [ ] Componentes do design system
  - [ ] Integração com API
- [ ] Funcionalidades
  - [ ] Gestão de banners
  - [ ] Editor de texto
  - [ ] Versionamento
  - [ ] Upload de mídia
  - [ ] Otimização de imagens
  - [ ] Preview responsivo
  - [ ] Agendamento
  - [ ] SEO
- [ ] UI/UX
  - [ ] Estados de loading
  - [ ] Feedback visual
  - [ ] Animações
  - [ ] Temas (claro/escuro)
  - [ ] Acessibilidade
  - [ ] Responsividade
- [ ] Performance
  - [ ] Otimização de mídia
  - [ ] Caching
  - [ ] Lazy loading
  - [ ] Autosave
  - [ ] CDN
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
