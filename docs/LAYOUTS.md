# Layouts - Zé da Graxa

## 1. Layout Base

### 1.1 AppLayout
```tsx
interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
  showBreadcrumb?: boolean;
}
```

O AppLayout é o layout base da aplicação, fornecendo a estrutura comum para todas as páginas.

**Características**:
- Header com logo, busca e menu do usuário
- Navegação principal
- Container principal responsivo
- Footer com informações institucionais

**Exemplo de Uso**:
```tsx
<AppLayout>
  <ProductGrid products={products} />
</AppLayout>
```

### 1.2 Variantes de Layout

#### Layout Público (PublicLayout)
- **Uso**: Home, Produtos, Categorias
- **Características**:
  - Header com navegação e busca
  - Menu de categorias horizontal
  - Breadcrumb
  - Footer completo
- **Props**:
  ```tsx
  interface PublicLayoutProps {
    children: ReactNode;
    showBreadcrumb?: boolean;
    showHero?: boolean;
    showFeaturedProducts?: boolean;
    pageTitle?: string;
    pageDescription?: string;
  }
  ```

#### Layout de Autenticação (AuthLayout)
- **Uso**: Login, Cadastro, Recuperação de senha
- **Características**:
  - Header simplificado
  - Sem navegação
  - Formulário centralizado
  - Footer minimalista
- **Props**:
  ```tsx
  interface AuthLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    showLogo?: boolean;
    redirectPath?: string;
  }
  ```

#### Layout da Área do Cliente (CustomerLayout)
- **Uso**: Minha Conta, Pedidos, Crédito
- **Características**:
  - Header com menu do usuário
  - Menu lateral de navegação
  - Breadcrumb
  - Área de conteúdo
- **Props**:
  ```tsx
  interface CustomerLayoutProps {
    children: ReactNode;
    activeMenu: 'profile' | 'orders' | 'credit' | 'addresses' | 'wishlist';
    showBreadcrumb?: boolean;
    pageTitle?: string;
  }
  ```

#### Layout de Checkout (CheckoutLayout)
- **Uso**: Processo de compra
- **Características**:
  - Header minimalista
  - Barra de progresso
  - Layout em duas colunas (desktop)
  - Footer simplificado
- **Props**:
  ```tsx
  interface CheckoutLayoutProps {
    children: ReactNode;
    step: 'cart' | 'address' | 'payment' | 'confirmation';
    orderSummary: ReactNode;
    showLoginPrompt?: boolean;
  }
  ```

## 2. Estruturas de Grid

### 2.1 Container
```scss
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-md);
  
  @media (min-width: $breakpoint-sm) {
    max-width: $container-sm; // 640px
  }
  
  @media (min-width: $breakpoint-md) {
    max-width: $container-md; // 768px
  }
  
  @media (min-width: $breakpoint-lg) {
    max-width: $container-lg; // 1024px
  }
  
  @media (min-width: $breakpoint-xl) {
    max-width: $container-xl; // 1280px
  }
}
```

### 2.2 Grid System
Utilizamos CSS Grid para criar layouts responsivos:

```scss
.grid {
  display: grid;
  gap: var(--space-md);
  
  // Grid de 1 coluna (mobile)
  grid-template-columns: 1fr;
  
  // Grid de 2 colunas (tablet)
  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  // Grid de 3 colunas (desktop)
  @media (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  // Grid de 4 colunas (desktop large)
  @media (min-width: $breakpoint-xl) {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 3. Breakpoints
```scss
$breakpoint-sm: 640px;  // Mobile landscape
$breakpoint-md: 768px;  // Tablet
$breakpoint-lg: 1024px; // Desktop
$breakpoint-xl: 1280px; // Large desktop
```

## 4. Boas Práticas

1. **Mobile First**
   - Sempre desenvolva pensando primeiro no mobile
   - Use media queries para adaptar para telas maiores
   - Evite media queries para telas menores

2. **Performance**
   - Evite aninhamento excessivo de layouts
   - Use CSS Grid e Flexbox para layouts responsivos
   - Prefira CSS Modules para evitar conflitos de estilo

3. **Acessibilidade**
   - Use landmarks semânticos (header, main, nav, footer)
   - Mantenha uma hierarquia clara de headings
   - Garanta que o conteúdo seja acessível via teclado
