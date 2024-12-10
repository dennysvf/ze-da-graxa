# Mapeamento Figma → Estrutura do Projeto

## 1. Localização dos Arquivos Figma
**Diretório Principal**: `docs do css/`

### Páginas e Templates
- `landding page.html`: Template da página inicial
- `Categorias de produtos.html`: Layout da página de categorias
- `paginas de produtos.html`: Template de página de produto individual
- `Politica de privacidade.html`: Página de política de privacidade
- `politicas de troca de devolução.html`: Página de políticas de troca

### Sistemas e Áreas
- `sistema de checkout/`: Fluxo completo de checkout
- `sistema de login e registro/`: Fluxo de autenticação
- `perfil do cliente/`: Área do usuário
- `administativo/`: Painel administrativo

### Design System
- `css suport/`: Recursos base do design system
  - `buttons.html`: Definições de botões
  - `colors/`: Sistema de cores
  - `typograhy.html`: Sistema tipográfico

## 2. Páginas Principais

### Landing Page
**Arquivo Figma**: `landding page.html`
**Componentes Relacionados**:
- Header
- SearchBar
- HeroSection
- FeaturedProducts
- ProductsSection
- Footer

### Categorias de Produtos
**Arquivo Figma**: `Categorias de produtos.html`
**Componentes Relacionados**:
- ProductGrid
- ProductFilters
- ProductSort
- Pagination
- ProductCard
- Breadcrumb

### Página de Produto
**Arquivo Figma**: `paginas de produtos.html`
**Componentes Relacionados**:
- ProductGallery
- ProductInfo
- AddToCart
- ProductDetails
- ShippingCalculator
- Breadcrumb

### Sistema de Checkout
**Diretório Figma**: `sistema de checkout/`
**Componentes Relacionados**:
- CartItem
- CartSummary
- ShippingCalculator
- PaymentMethods
- OrderSummary
- DateRangePicker (para agendamento)

### Perfil do Cliente
**Diretório Figma**: `perfil do cliente/`
**Componentes Relacionados**:
- UserDashboard
- OrderList
- OrderCard
- OrderTimeline
- WishList
- AddressManagement
- CreditSystem

### Sistema de Login/Registro
**Diretório Figma**: `sistema de login e registro/`
**Componentes Relacionados**:
- LoginForm
- RegisterForm
- PasswordRecovery
- AccountTypeSelection

### Páginas Legais
- `Politica de privacidade.html`
- `politicas de troca de devolução.html`
**Componentes Relacionados**:
- LegalPage
- ContentSection

## 3. Estrutura de Implementação Sugerida

```
src/
├── pages/
│   ├── Home/                    # landding page.html
│   │   ├── HeroSection/
│   │   └── FeaturedProducts/
│   ├── Categories/              # Categorias de produtos.html
│   │   ├── ProductGrid/
│   │   ├── ProductFilters/
│   │   └── ProductSort/
│   ├── Product/                 # paginas de produtos.html
│   │   ├── ProductGallery/
│   │   └── ProductInfo/
│   ├── Checkout/               # sistema de checkout/*
│   │   ├── CartSummary/
│   │   └── ShippingCalculator/
│   ├── Account/                # perfil do cliente/*
│   │   ├── OrderList/
│   │   ├── OrderCard/
│   │   └── OrderTimeline/
│   ├── Auth/                   # sistema de login e registro/*
│   └── Legal/                  # Políticas e termos
│
├── components/
│   ├── layout/
│   │   ├── AppLayout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── NavigationMenu/
│   │   └── Breadcrumb/
│   │
│   ├── product/
│   │   ├── ProductCard/
│   │   ├── ProductGrid/
│   │   ├── ProductFilters/
│   │   ├── ProductSort/
│   │   └── FeaturedProducts/
│   │
│   ├── checkout/
│   │   ├── CartItem/
│   │   ├── CartSummary/
│   │   └── ShippingCalculator/
│   │
│   ├── order/
│   │   ├── OrderCard/
│   │   ├── OrderList/
│   │   └── OrderTimeline/
│   │
│   ├── feedback/
│   │   ├── Alert/
│   │   ├── LoadingSpinner/
│   │   ├── Toast/
│   │   ├── Modal/
│   │   └── ErrorBoundary/
│   │
│   └── common/
│       ├── Button/
│       ├── Input/
│       ├── SearchInput/
│       ├── DateRangePicker/
│       ├── Divider/
│       └── Pagination/
│
└── styles/
    ├── tokens/
    │   ├── colors.ts
    │   ├── typography.ts
    │   ├── spacing.ts
    │   └── breakpoints.ts
    │
    └── pages/
        ├── home.module.css
        ├── categories.module.css
        ├── product.module.css
        └── checkout.module.css
```

## 4. Design System Resources

### Componentes Base
- Button (variants: primary, secondary, outline)
- Input (variants: default, filled, outlined)
- SearchInput (com autocompletar)
- DateRangePicker
- Divider
- LoadingSpinner
- Modal
- Alert
- Toast

### Layout
- AppLayout
- Header
- Footer
- NavigationMenu
- Breadcrumb
- HeroSection

### Feedback
- Alert
- LoadingSpinner
- Toast
- Modal
- ErrorBoundary

### Produtos
- ProductCard
- ProductGrid
- ProductFilters
- ProductSort
- FeaturedProducts

### Carrinho e Pedidos
- CartItem
- CartSummary
- OrderCard
- OrderList
- OrderTimeline
- ShippingCalculator

## 5. Design Tokens

```typescript
const tokens = {
  colors: {
    primary: '#3FB87A',
    secondary: '#2C3E50',
    accent: '#E67E22',
    background: {
      main: '#FFFFFF',
      secondary: '#F8F9FA',
      tertiary: '#E9ECEF'
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999'
    },
    border: '#E1E1E1',
    error: '#DC3545',
    success: '#28A745',
    warning: '#FFC107',
    info: '#17A2B8'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Roboto', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem'
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)'
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
}
```

## 6. Observações Importantes

1. **CSS Support**
   - O diretório `css suport/` provavelmente contém estilos base e variáveis
   - Devemos migrar para um sistema de design tokens em CSS Modules

2. **Administrativo**
   - O diretório `administativo/` será tratado como um projeto separado
   - Requer um mapeamento específico posteriormente

3. **Responsividade**
   - Verificar breakpoints em cada template
   - Implementar abordagem mobile-first

4. **Componentização**
   - Identificar padrões repetidos nos templates
   - Criar componentes reutilizáveis
   - Manter consistência visual

## Guia de Conversão

### 1. Design Tokens

#### 1.1 Cores
```css
/* Cores do Figma → CSS Variables */
#58D899 → var(--primary)
#616161 → var(--text-primary)
#9998A5 → var(--text-secondary)
#F5F5F5 → var(--bg-secondary)
#EDEDED → var(--border-color)
```

#### 1.2 Tipografia
```css
/* Fontes do Figma → CSS Variables */
Inter Regular → var(--weight-regular)
Inter Medium → var(--weight-medium)
Inter SemiBold → var(--weight-semibold)

/* Tamanhos do Figma → CSS Variables */
13px → var(--text-xs)
14px → var(--text-sm)
16px → var(--text-base)
18px → var(--text-lg)
20px → var(--text-xl)
```

#### 1.3 Espaçamento
```css
/* Espaçamentos do Figma → CSS Variables */
4px → var(--space-xs)
8px → var(--space-sm)
16px → var(--space-md)
24px → var(--space-lg)
32px → var(--space-xl)
```

### 2. Componentes Base

#### 2.1 Button
**Figma**: `Button.fig`
```typescript
// React Component
<Button 
  variant="primary" 
  size="md"
  icon={<IconName />}
>
  Label
</Button>

// CSS Module
.button {
  font-family: var(--font-primary);
  font-weight: var(--weight-medium);
  border-radius: var(--radius-sm);
  padding: var(--space-sm) var(--space-md);
}
```

#### 2.2 Input
**Figma**: `Input.fig`
```typescript
// React Component
<Input
  label="Label"
  placeholder="Placeholder"
  error="Error message"
/>

// CSS Module
.input {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: var(--space-sm);
}
```

### 3. Layouts

#### 3.1 Header
**Figma**: `Header.fig`
```typescript
// React Component
<Header user={user} cartItemsCount={2} />

// CSS Module
.header {
  height: 80px;
  background: var(--bg-main);
  border-bottom: 1px solid var(--border-color);
}
```

#### 3.2 Footer
**Figma**: `Footer.fig`
```typescript
// React Component
<Footer />

// CSS Module
.footer {
  background: var(--bg-secondary);
  padding: var(--space-xl) 0;
}
```

### 4. Páginas

#### 4.1 Home
**Figma**: `Home.fig`
**Componentes**:
- Header
- HeroSection
- CategoryGrid
- ProductGrid
- Footer

#### 4.2 Categoria
**Figma**: `Category.fig`
**Componentes**:
- Header
- Breadcrumb
- ProductFilter
- ProductGrid
- Footer

#### 4.3 Produto
**Figma**: `Product.fig`
**Componentes**:
- Header
- Breadcrumb
- ProductGallery
- ProductInfo
- RelatedProducts
- Footer

#### 4.4 Carrinho
**Figma**: `Cart.fig`
**Componentes**:
- Header
- CartItemList
- CartSummary
- Footer

### 5. Componentes de Produto

#### 5.1 ProductCard
**Figma**: `ProductCard.fig`
```typescript
// React Component
<ProductCard
  product={product}
  onAddToCart={handleAddToCart}
  variant="grid"
/>

// CSS Module
.card {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}
```

#### 5.2 ProductGrid
**Figma**: `ProductGrid.fig`
```typescript
// React Component
<ProductGrid
  products={products}
  loading={loading}
  onPageChange={handlePageChange}
/>

// CSS Module
.grid {
  display: grid;
  gap: var(--gap-md);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

### 6. Componentes de Carrinho

#### 6.1 CartItem
**Figma**: `CartItem.fig`
```typescript
// React Component
<CartItem
  item={item}
  onUpdateQuantity={handleUpdateQuantity}
  onRemove={handleRemove}
/>

// CSS Module
.item {
  display: flex;
  padding: var(--space-md);
  border-bottom: 1px solid var(--border-color);
}
```

#### 6.2 CartSummary
**Figma**: `CartSummary.fig`
```typescript
// React Component
<CartSummary
  subtotal={subtotal}
  shipping={shipping}
  total={total}
  onCheckout={handleCheckout}
/>

// CSS Module
.summary {
  background: var(--bg-secondary);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
}
```

### 7. Responsividade

#### 7.1 Breakpoints
```css
/* Breakpoints do Figma → CSS Media Queries */
Mobile (< 768px) → @media (max-width: 47.9375em)
Tablet (≥ 768px) → @media (min-width: 48em)
Desktop (≥ 1024px) → @media (min-width: 64em)
```

#### 7.2 Grid
```css
/* Grid System */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 48em) {
  .container {
    padding: 0 var(--space-lg);
  }
}
```

### 8. Estados e Interações

#### 8.1 Hover
```css
/* Estados do Figma → CSS */
.button:hover {
  background: var(--hover);
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```

#### 8.2 Loading
```css
/* Loading States */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-secondary) 25%,
    var(--border-color) 50%,
    var(--bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}
```

### 9. Convenções

1. **Nomenclatura**
   - Nomes de componentes: PascalCase
   - Classes CSS: camelCase
   - Variáveis CSS: kebab-case

2. **Estrutura de Arquivos**
   - Um componente por arquivo
   - CSS Module junto com componente
   - Tipos em arquivo separado

3. **Responsividade**
   - Mobile First
   - Breakpoints consistentes
   - Unidades relativas (rem/em)

```
