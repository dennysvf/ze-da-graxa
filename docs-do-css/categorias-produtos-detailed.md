# Categorias de Produtos - Documentação Técnica

## 1. ANÁLISE INICIAL

### 1.1 Seções da Interface
- Header com logo e conta
- Menu de categorias
- Filtros laterais
- Grid de produtos
- Footer

### 1.2 Componentes Reutilizáveis
- Navigation Menu
- Product Card
- Filter Dropdown
- Account Widget
- Cart Widget

### 1.3 Hierarquia de Elementos
```
└── Main Container (1440px)
    ├── Header
    │   ├── Logo
    │   └── Account Section
    │       ├── My Account
    │       └── Cart
    ├── Categories Menu
    │   └── Category Items
    ├── Content Area
    │   ├── Sidebar Filters
    │   └── Product Grid
    └── Footer
```

### 1.4 Sistema de Grid
- Container width: 1440px
- Content padding: 120px (sides)
- Product grid: 3 columns
- Grid gap: 16px

## 2. DESIGN TOKENS

### 2.1 Sistema de Cores
```scss
// Brand Colors
$primary-green: #58D899;
$primary-text: #616161;

// UI Colors
$background-light: #F5F5F5;
$border-color: #EDEDED;
$divider-color: #F5FBF3;

// Text Colors
$text-primary: #616161;
$text-white: #FFFFFF;
```

### 2.2 Tipografia
```scss
// Font Family
$font-family: 'Inter', sans-serif;

// Font Sizes
$font-size-nav: 14px;
$font-size-body: 14px;
$font-size-small: 13px;

// Font Weights
$font-weight-regular: 400;
$font-weight-medium: 500;

// Line Heights
$line-height-nav: 14.91px;

// Letter Spacing
$letter-spacing: 0.20px;
```

### 2.3 Espaçamentos
```scss
// Container
$container-width: 1440px;
$content-padding: 120px;

// Navigation
$nav-gap: 50px;
$nav-padding-y: 34px;

// Components
$card-gap: 16px;
$filter-height: 40px;
```

### 2.4 Efeitos
```scss
// Borders
$border-radius: 5px;
$border-width: 1px;
$border-style: solid;

// Opacity
$footer-divider-opacity: 0.34;

// Badge
$badge-radius: 9999px;
```

## 3. COMPONENTES

### 3.1 Navigation Menu
```scss
.nav-menu {
  height: 83px;
  border-top: 1px solid $divider-color;
  border-bottom: 1px solid $divider-color;
  
  &__list {
    display: inline-flex;
    gap: $nav-gap;
    padding: $nav-padding-y 0;
  }
  
  &__item {
    color: $text-primary;
    font-size: $font-size-nav;
    font-weight: $font-weight-regular;
    line-height: $line-height-nav;
    letter-spacing: $letter-spacing;
  }
}
```

### 3.2 Account Widget
```scss
.account-widget {
  display: flex;
  align-items: center;
  gap: 35px;
  
  &__icon {
    width: 25px;
    height: 25px;
  }
  
  &__text {
    color: $text-primary;
    font-size: $font-size-nav;
    line-height: $line-height-nav;
  }
  
  &__badge {
    width: 10.71px;
    height: 10.71px;
    background: $primary-green;
    border-radius: $badge-radius;
    
    &-text {
      color: $text-white;
      font-size: 8px;
    }
  }
}
```

### 3.3 Filter Dropdown
```scss
.filter-dropdown {
  width: 288px;
  height: $filter-height;
  background: $background-light;
  border-radius: $border-radius;
  border: $border-width $border-style $border-color;
  padding: 11px 15px;
  
  &__text {
    color: $text-primary;
    font-size: $font-size-nav;
  }
  
  &__icon {
    width: 8px;
    height: 8px;
    position: absolute;
    right: 15px;
  }
}
```

## 4. FUNCIONALIDADES

### 4.1 Navegação por Categorias
- Hover states nos itens
- Indicador de categoria ativa
- Navegação por keyboard

### 4.2 Filtros
- Dropdown com opções
- Multi-seleção
- Clear filters
- Apply filters

### 4.3 Carrinho
- Badge com contador
- Quick view
- Update quantity
- Remove item

## 5. ASSETS

### 5.1 Imagens
- Logo (127x32px)
- Product images (208x175.34px)
- Placeholder images

### 5.2 Ícones
- User account (18.75x18.75px)
- Cart (25x25px)
- Favorite (20x18.99px)
- Dropdown arrow (8x8px)

## 6. ACESSIBILIDADE

### 6.1 Navegação
```html
<nav aria-label="Categorias de produtos">
  <ul role="menubar">
    <li role="menuitem">
      <a href="#acessorios">Acessórios</a>
    </li>
    <!-- More items -->
  </ul>
</nav>
```

### 6.2 Filtros
```html
<button 
  aria-haspopup="listbox"
  aria-expanded="false"
  aria-controls="marcas-listbox"
>
  Marcas
</button>
<ul 
  id="marcas-listbox"
  role="listbox"
  aria-label="Lista de marcas"
>
  <!-- Options -->
</ul>
```

### 6.3 Produtos
```html
<article aria-labelledby="product-title">
  <h2 id="product-title">Nome do Produto</h2>
  <img alt="Descrição do produto" />
  <button aria-label="Adicionar aos favoritos">
    <!-- Favorite icon -->
  </button>
</article>
```

## 7. RESPONSIVIDADE

### 7.1 Breakpoints
```scss
$breakpoints: (
  mobile: 320px,
  tablet: 768px,
  desktop: 1024px,
  wide: 1440px
);
```

### 7.2 Grid Adjustments
```scss
.product-grid {
  display: grid;
  gap: $card-gap;
  
  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: $tablet) and (max-width: $desktop) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: $desktop) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 8. ESTADOS E INTERAÇÕES

### 8.1 Hover States
```scss
.nav-item {
  &:hover {
    color: $primary-green;
  }
}

.product-card {
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-card;
  }
}
```

### 8.2 Active States
```scss
.filter-dropdown {
  &--active {
    border-color: $primary-green;
  }
}

.favorite-button {
  &--active {
    color: $primary-green;
  }
}
```

## 9. PERFORMANCE

### 9.1 Imagens
- Lazy loading para imagens de produto
- Placeholder durante carregamento
- Otimização de assets

### 9.2 Interações
- Debounce nos filtros
- Infinite scroll ou paginação
- Cache de resultados
