# Documentação Técnica - Favoritos

## 1. ANÁLISE INICIAL

### Seções da Interface
- Header (Navegação Principal)
- Favorites Grid (Grid de Produtos Favoritos)
- Empty State (Estado Vazio)
- Filter Section (Filtros)
- Product Actions (Ações de Produto)

### Componentes Reutilizáveis
- ProductCard
- EmptyState
- FilterBar
- ActionButton
- SortDropdown
- Pagination
- SearchInput

### Hierarquia de Elementos
```
└── Main Container (1440px)
    ├── Header
    │   ├── Logo
    │   ├── Navigation Menu
    │   └── User Actions
    │       ├── Search
    │       ├── Account
    │       └── Cart
    ├── Favorites Content
    │   ├── Filter Section
    │   │   ├── Search Input
    │   │   ├── Sort Dropdown
    │   │   └── Category Filter
    │   ├── Favorites Grid
    │   │   └── ProductCard (repetido)
    │   │       ├── Product Image
    │   │       ├── Product Info
    │   │       ├── Price
    │   │       └── Actions
    │   └── Empty State
    │       ├── Illustration
    │       ├── Message
    │       └── CTA Button
    └── Pagination
```

### Sistema de Grid/Layout
- Container principal: 1440px
- Grid de produtos: 4 colunas
- Espaçamento entre elementos: 16px

## 2. DESIGN TOKENS

### Cores
```css
:root {
  /* Cores Principais */
  --color-primary: #58D899;
  --color-text: #616161;
  --color-background: #FFFFFF;
  --color-border: #EDEDED;
  
  /* Ações */
  --color-favorite: #FF4081;
  --color-hover: #F5F5F5;
  
  /* Variações */
  --color-background-light: #F5F5F5;
  --color-text-light: #9E9E9E;
}
```

### Tipografia
```css
:root {
  /* Família */
  --font-family: 'Inter', sans-serif;
  
  /* Tamanhos */
  --font-size-h1: 25px;
  --font-size-h2: 20px;
  --font-size-body: 14px;
  --font-size-small: 12px;
  
  /* Pesos */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  
  /* Espaçamento */
  --letter-spacing: 0.2px;
}
```

### Espaçamento
```css
:root {
  /* Containers */
  --container-max-width: 1440px;
  --container-padding: 120px;
  
  /* Elementos */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  
  /* Grid */
  --grid-gap: 16px;
}
```

### Efeitos
```css
:root {
  /* Bordas */
  --border-radius: 5px;
  --border-width: 1px;
  
  /* Sombras */
  --shadow-card: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* Transições */
  --transition-default: all 0.3s ease;
  --transition-favorite: transform 0.2s ease;
}
```

## 3. COMPONENTES

### ProductCard
```typescript
interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  onRemove: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  onRemove,
  onAddToCart,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <button
          className={styles.favoriteButton}
          onClick={() => onRemove(id)}
          aria-label="Remover dos favoritos"
        >
          <HeartIcon filled />
        </button>
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <PriceDisplay value={price} />
        <button
          className={styles.cartButton}
          onClick={() => onAddToCart(id)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};
```

### EmptyState
```typescript
interface EmptyStateProps {
  title: string;
  message: string;
  actionLabel: string;
  onAction: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  actionLabel,
  onAction,
}) => {
  return (
    <div className={styles.emptyState}>
      <img
        src="/images/empty-favorites.svg"
        alt="Nenhum favorito"
        className={styles.illustration}
      />
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  );
};
```

## 4. FUNCIONALIDADES

### Interações do Usuário
- Adicionar/Remover favoritos
- Adicionar ao carrinho
- Filtrar produtos
- Ordenar produtos
- Buscar produtos
- Navegar entre páginas

### Estados
```typescript
interface FavoritesState {
  items: FavoriteItem[];
  filters: {
    search: string;
    sort: SortOption;
    category: string[];
  };
  pagination: {
    page: number;
    perPage: number;
    total: number;
  };
  loading: boolean;
  error: string | null;
}
```

### Comportamentos
- Persistência de favoritos
- Animação ao remover
- Feedback visual
- Cache de dados

## 5. ASSETS

### Imagens
- Ícones do sistema (SVG)
  - heart-filled.svg
  - heart-outline.svg
  - cart.svg
  - search.svg
- Ilustrações
  - empty-favorites.svg
  - no-results.svg

### Ícones
- Material Icons
  - favorite
  - favorite_border
  - shopping_cart
  - sort

## 6. ACESSIBILIDADE

### Semântica HTML
```html
<main role="main">
  <h1>Meus Favoritos</h1>
  <section aria-label="Filtros">
    <!-- Filters -->
  </section>
  <section aria-label="Produtos Favoritos">
    <!-- ProductCards -->
  </section>
</main>
```

### ARIA Labels
```html
<button aria-label="Remover dos favoritos">
<button aria-label="Adicionar ao carrinho">
<div role="status" aria-live="polite">
```

### Navegação por Teclado
- Tab order lógico
- Atalhos de teclado
- Focus visível

## 7. ESTRUTURA REACT

### Árvore de Componentes
```
src/
  components/
    favorites/
      ProductCard.tsx
      EmptyState.tsx
      FilterBar.tsx
      FavoritesGrid.tsx
  hooks/
    useFavorites.ts
    useFilters.ts
  context/
    FavoritesContext.tsx
  services/
    favorites.service.ts
```

### Context API
```typescript
const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  
  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
```

## 8. CONSIDERAÇÕES TÉCNICAS

### Performance
- Virtualização do grid
- Lazy loading de imagens
- Debounce em filtros
- Cache de favoritos

### Testes
```typescript
describe('ProductCard', () => {
  it('should handle remove from favorites');
  it('should handle add to cart');
  it('should display product information');
});

describe('FavoritesContext', () => {
  it('should manage favorites state');
  it('should persist favorites');
});
```

### Edge Cases
- Lista vazia
- Erro ao carregar
- Produto indisponível
- Limite de favoritos

## 9. EXEMPLOS DE USO

### Básico
```typescript
<Favorites items={favoriteItems} />
```

### Completo
```typescript
<FavoritesProvider>
  <Favorites
    items={favoriteItems}
    filters={activeFilters}
    pagination={paginationConfig}
    onRemove={handleRemove}
    onAddToCart={handleAddToCart}
    onFilterChange={handleFilterChange}
    onSortChange={handleSortChange}
    onPageChange={handlePageChange}
  />
</FavoritesProvider>
```

## 10. ATUALIZAÇÕES

### 10.1 Atualização da Documentação
- Adicionado novos componentes e funcionalidades
- Melhorias na estrutura e organização da documentação

### 10.2 Atualização do Design System
- Novos tokens de design para cores, tipografia e espaçamento
- Melhorias na acessibilidade e responsividade

### 10.3 Atualização da Estrutura React
- Novos hooks e context para gerenciamento de estado
- Melhorias na performance e otimização de código

### 10.4 Atualização dos Testes
- Novos testes para componentes e funcionalidades
- Melhorias na cobertura de testes e confiabilidade
