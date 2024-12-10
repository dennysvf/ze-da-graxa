# Documentação Técnica - Landing Page

## 1. ANÁLISE INICIAL

### Seções da Interface
- Header (Navegação Principal)
- Search Section (Busca e Filtros)
- Ofertas Section
- Product Grid (Grid de Produtos)
- Footer (Rodapé)

### Componentes Reutilizáveis
- SearchBar
- ProductCard
- Button (Primary, Secondary)
- Dropdown (Filtros)
- IconButton (Favoritos, Carrinho)
- NavigationLink
- CategoryTag

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
    ├── Search Section
    │   ├── Search Bar
    │   └── Advanced Search
    │       ├── Brand Dropdown
    │       ├── Model Dropdown
    │       ├── Year Dropdown
    │       └── Version Dropdown
    ├── Ofertas Section
    │   ├── Title
    │   └── Subtitle
    ├── Product Grid
    │   └── ProductCard (repetido)
    └── Footer
        ├── Links Section
        ├── Social Media
        └── Copyright
```

### Sistema de Grid/Layout
- Container principal: 1440px
- Grid de produtos: 4 colunas
- Gutters: 16px
- Margins laterais: 120px
- Layout responsivo com breakpoints

## 2. DESIGN TOKENS

### 2.1 Sistema de Cores
```scss
// Cores principais
$primary: #58D899;
$secondary: #616161;
$background: #FFFFFF;
$surface: #F5F5F5;

// Variações
$primary-light: rgba(78, 191, 95, 0.20);
$border-color: #EDEDED;
$divider: #F5FBF3;

// Estados
$hover-primary: darken(#58D899, 5%);
$active-primary: darken(#58D899, 10%);
$disabled: #9998A5;

// Texto
$text-primary: #616161;
$text-secondary: #9998A5;
$text-on-primary: #FFFFFF;

// Gradientes
$surface-gradient: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
```

### 2.2 Tipografia
```scss
// Famílias
$font-primary: 'Inter', sans-serif;

// Tamanhos
$font-size: (
  'xs': 12px,
  'sm': 13px,
  'base': 14px,
  'lg': 16px,
  'xl': 20px,
  'xxl': 24px
);

// Pesos
$font-weight: (
  'regular': 400,
  'medium': 500,
  'semibold': 600
);

// Line-heights
$line-height: (
  'tight': 1.2,
  'base': 1.5,
  'relaxed': 1.75
);

// Hierarquia
h1 {
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
}

h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
}

body {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}
```

### 2.3 Espaçamentos
```scss
// Grid system
$grid-columns: 12;
$container-width: 1440px;
$container-padding: 120px;
$gutter: 16px;

// Margins/Paddings
$spacing: (
  'xs': 8px,
  'sm': 16px,
  'md': 24px,
  'lg': 32px,
  'xl': 48px
);

// Breakpoints
$breakpoints: (
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px,
  'xxl': 1440px
);
```

### 2.4 Efeitos
```scss
// Sombras
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

// Bordas
$border-radius: (
  'sm': 5px,
  'md': 10px,
  'lg': 15px
);

// Transições
$transition-base: all 0.2s ease-in-out;
$transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

// Opacidades
$opacity: (
  'light': 0.7,
  'medium': 0.5,
  'heavy': 0.3
);
```

## 3. COMPONENTES

### 3.1 SearchBar
#### Estrutura
```typescript
interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
  advanced?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
  advanced = false
}) => {
  const [query, setQuery] = useState('');
  
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.searchContainer}>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>
        <SearchIcon />
      </button>
      {advanced && <AdvancedSearch />}
    </div>
  );
};
```

#### Estilização
```scss
.searchContainer {
  width: 630px;
  height: 40px;
  position: relative;
  
  input {
    width: 100%;
    height: 100%;
    padding: 0 18px;
    border-radius: 15px;
    background: $surface;
    border: none;
    font-size: 14px;
    
    &::placeholder {
      color: $text-secondary;
    }
  }
  
  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    
    svg {
      fill: $secondary;
    }
  }
}
```

### 3.2 ProductCard
#### Estrutura
```typescript
interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  installments?: number;
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  installments = 12,
  onFavorite,
  onAddToCart
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <button onClick={onFavorite} className={styles.favoriteButton}>
          <HeartIcon />
        </button>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.price}>R$ {price.toFixed(2)}</p>
        <p className={styles.installments}>
          Em até {installments}x no cartão
        </p>
        <button onClick={onAddToCart} className={styles.addToCartButton}>
          Ver o produto
        </button>
      </div>
    </div>
  );
};
```

#### Estilização
```scss
.card {
  width: 288px;
  height: 562px;
  background: $background;
  border-radius: 5px;
  border: 1px solid $border-color;
  overflow: hidden;
  
  .imageContainer {
    width: 100%;
    height: 365px;
    background: $surface;
    position: relative;
    
    img {
      width: 208px;
      height: 175px;
      object-fit: contain;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    
    .favoriteButton {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 20px;
      height: 19px;
      background: none;
      border: none;
      cursor: pointer;
      
      svg {
        fill: $secondary;
      }
    }
  }
  
  .content {
    padding: 20px;
    
    h3 {
      font-size: 14px;
      color: $text-primary;
      margin-bottom: 8px;
    }
    
    .price {
      font-size: 16px;
      font-weight: 500;
      color: $text-primary;
      margin-bottom: 4px;
    }
    
    .installments {
      font-size: 12px;
      color: $text-secondary;
      margin-bottom: 16px;
    }
    
    .addToCartButton {
      width: 100%;
      height: 30px;
      background: $primary;
      border: none;
      border-radius: 5px;
      color: $text-on-primary;
      font-size: 14px;
      cursor: pointer;
      transition: $transition-base;
      
      &:hover {
        background: $hover-primary;
      }
    }
  }
}
```

## 4. FUNCIONALIDADES

### Busca
- **Gatilho**: Input no campo de busca ou clique no botão
- **Comportamento**: 
  - Atualiza resultados em tempo real
  - Mostra sugestões de busca
  - Permite busca avançada
- **Loading**: Spinner no botão de busca
- **Erro**: Mensagem abaixo do input
- **Feedback**: Highlight dos termos encontrados

### Favoritos
- **Gatilho**: Clique no ícone de coração
- **Comportamento**: 
  - Toggle estado de favorito
  - Atualiza contador no header
- **Loading**: Animação do ícone
- **Erro**: Toast notification
- **Feedback**: Preenchimento do ícone

### Carrinho
- **Gatilho**: Clique em "Ver o produto"
- **Comportamento**:
  - Adiciona produto ao carrinho
  - Atualiza contador
  - Mostra mini-carrinho
- **Loading**: Botão com spinner
- **Erro**: Toast notification
- **Feedback**: Animação do ícone do carrinho

## 5. ASSETS

### Imagens
- Logo (SVG, 120x40px)
- Product Images (208x175px, PNG)
- Category Icons (24x24px, SVG)

### Ícones
- Search (20x20px, SVG)
- Heart (20x19px, SVG)
  - Default: Outline
  - Active: Filled
- Cart (24x24px, SVG)
- Arrow (8x8px, SVG)

### Fontes
- Inter
  - Regular (400)
  - Medium (500)
  - SemiBold (600)

## 6. ACESSIBILIDADE

### Hierarquia de Headings
```html
<h1>Zé da Graxa - Autopeças</h1>
<h2>Ofertas</h2>
<h3>Nome do Produto</h3>
```

### ARIA Labels
```html
<button aria-label="Adicionar aos favoritos">
<input aria-label="Buscar produtos">
<div role="navigation" aria-label="Menu principal">
```

### Navegação por Teclado
- Tab: Navegação entre elementos interativos
- Enter/Space: Ativar botões
- Esc: Fechar modais
- Arrow Keys: Navegação em dropdowns

### Estados de Foco
- Outline visível
- Cor de contraste adequada
- Skip links para conteúdo principal

## 7. CÓDIGO REACT

### 7.1 Estrutura de Componentes
```typescript
// Exemplo do ProductGrid
interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onProductClick: (id: string) => void;
  onFavorite: (id: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  onProductClick,
  onFavorite
}) => {
  if (loading) return <LoadingGrid />;
  
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          onFavorite={() => onFavorite(product.id)}
          onClick={() => onProductClick(product.id)}
        />
      ))}
    </div>
  );
};
```

### 7.2 Estilos
```scss
// ProductGrid.module.scss
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $gutter;
  padding: 0 $container-padding;
  margin-top: $spacing-lg;
  
  @media (max-width: $breakpoints-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: $breakpoints-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: $breakpoints-sm) {
    grid-template-columns: 1fr;
  }
}
```

## 8. CONSIDERAÇÕES TÉCNICAS

### Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "next": "^13.0.0",
  "sass": "^1.55.0",
  "classnames": "^2.3.2"
}
```

### Hooks Customizados
```typescript
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};
```

### Otimizações
- Lazy loading de imagens
- Debounce na busca
- Virtualização do grid de produtos
- Memoização de componentes pesados
- Code splitting por rota

### Edge Cases
- Busca sem resultados
- Erro de carregamento de imagens
- Timeout na API
- Perda de conexão
- Cache invalidation

### Testes Necessários
```typescript
describe('ProductCard', () => {
  it('renders correctly', () => {
    // ...
  });
  
  it('handles favorite click', () => {
    // ...
  });
  
  it('shows loading state', () => {
    // ...
  });
});
```

## 9. EXEMPLOS DE USO

### Básico
```tsx
<ProductGrid
  products={products}
  onProductClick={handleProductClick}
  onFavorite={handleFavorite}
/>
```

### Completo
```tsx
<ProductGrid
  products={products}
  loading={isLoading}
  error={error}
  onProductClick={handleProductClick}
  onFavorite={handleFavorite}
  onRetry={handleRetry}
  layout="grid"
  columns={4}
  pagination={{
    page: 1,
    perPage: 20,
    total: 100
  }}
  filters={{
    category: 'acessorios',
    price: { min: 0, max: 1000 }
  }}
/>
```
