# Documentação Técnica - Carrinho

## 1. ANÁLISE INICIAL

### Seções da Interface
- Header (Navegação Principal)
- Cart Summary (Resumo do Carrinho)
- Product List (Lista de Produtos)
- Price Details (Detalhes de Preço)
- Checkout Section (Seção de Finalização)

### Componentes Reutilizáveis
- CartItem
- QuantitySelector
- PriceDisplay
- Button (Primary, Secondary)
- RemoveButton
- ShippingCalculator
- PriceSummary

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
    ├── Cart Content
    │   ├── Cart Summary
    │   │   ├── Total Items
    │   │   └── Total Price
    │   ├── Product List
    │   │   └── CartItem (repetido)
    │   │       ├── Product Image
    │   │       ├── Product Info
    │   │       ├── Quantity Selector
    │   │       └── Price
    │   └── Price Details
    │       ├── Subtotal
    │       ├── Shipping
    │       └── Total
    └── Checkout Section
        ├── Shipping Calculator
        └── Checkout Button
```

### Sistema de Grid/Layout
- Container principal: 1440px
- Grid de 2 colunas (70% produtos, 30% resumo)
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
  --color-error: #FF5252;
  
  /* Variações */
  --color-background-light: #F5F5F5;
  --color-text-light: #9E9E9E;
  --color-success: #4CAF50;
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
}
```

## 3. COMPONENTES

### CartItem
```typescript
interface CartItemProps {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  image,
  title,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className={styles.cartItem}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <QuantitySelector
          value={quantity}
          onChange={(value) => onQuantityChange(id, value)}
        />
        <PriceDisplay value={price * quantity} />
        <button onClick={() => onRemove(id)}>Remover</button>
      </div>
    </div>
  );
};
```

### PriceSummary
```typescript
interface PriceSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({
  subtotal,
  shipping,
  total,
}) => {
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>Subtotal</span>
        <PriceDisplay value={subtotal} />
      </div>
      <div className={styles.row}>
        <span>Frete</span>
        <PriceDisplay value={shipping} />
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <PriceDisplay value={total} />
      </div>
    </div>
  );
};
```

## 4. FUNCIONALIDADES

### Interações do Usuário
- Atualizar quantidade de produtos
- Remover produtos
- Calcular frete
- Aplicar cupom de desconto
- Finalizar compra

### Estados
```typescript
interface CartState {
  items: CartItem[];
  shipping: number;
  discount: number;
  loading: boolean;
  error: string | null;
}
```

### Comportamentos
- Atualização automática de preços
- Validação de estoque
- Persistência do carrinho
- Cálculo de frete em tempo real

## 5. ASSETS

### Imagens
- Ícones do sistema (SVG)
  - delete.svg
  - plus.svg
  - minus.svg
  - cart.svg
- Logos
  - logo-primary.svg
  - payment-methods.png

### Ícones
- Material Icons
  - shopping_cart
  - delete_outline
  - add
  - remove

## 6. ACESSIBILIDADE

### Semântica HTML
```html
<main role="main">
  <h1>Seu Carrinho</h1>
  <section aria-label="Lista de Produtos">
    <!-- CartItems -->
  </section>
  <aside aria-label="Resumo do Pedido">
    <!-- PriceSummary -->
  </aside>
</main>
```

### ARIA Labels
```html
<button aria-label="Remover item">
<input aria-label="Quantidade" type="number">
<div role="alert" aria-live="polite">
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
    cart/
      CartItem.tsx
      CartList.tsx
      PriceSummary.tsx
      ShippingCalculator.tsx
      QuantitySelector.tsx
  hooks/
    useCart.ts
    useShipping.ts
  context/
    CartContext.tsx
  services/
    cart.service.ts
    shipping.service.ts
```

### Context API
```typescript
const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
```

## 8. CONSIDERAÇÕES TÉCNICAS

### Performance
- Memoização de componentes
- Debounce em cálculos
- Cache de dados do carrinho
- Otimização de re-renders

### Testes
```typescript
describe('CartItem', () => {
  it('should update quantity correctly');
  it('should calculate total price');
  it('should handle remove action');
});

describe('CartContext', () => {
  it('should update cart state');
  it('should persist cart data');
});
```

### Edge Cases
- Produtos sem estoque
- Erro no cálculo de frete
- Timeout em requisições
- Conflito de sessão

## 9. EXEMPLOS DE USO

### Básico
```typescript
<Cart items={cartItems} onCheckout={handleCheckout} />
```

### Completo
```typescript
<CartProvider>
  <Cart
    items={cartItems}
    shipping={shipping}
    discount={discount}
    onQuantityChange={handleQuantityChange}
    onRemove={handleRemove}
    onShippingCalculate={handleShippingCalculate}
    onApplyDiscount={handleApplyDiscount}
    onCheckout={handleCheckout}
  />
</CartProvider>
```

# Carrinho de Compras

## 1. Visão Geral
- **Objetivo**: Permitir que os usuários gerenciem itens para compra e prossigam para o checkout
- **Usuários**: Todos os usuários (autenticados e não autenticados)
- **Fluxo**: Acessado via header do site ou após adicionar produto

## 2. Layout

### 2.1 Estrutura Visual
- **Container Principal (1200x900px)**
  - Background: var(--background-white)
  - Padding: var(--spacing-6)
  - Border-radius: var(--radius-lg)

- **Header (1200x80px)**
  - Título "Meu Carrinho"
  - Contador de itens
  - Botão continuar comprando
  - Background: var(--background-secondary)
  - Border-bottom: 1px solid var(--border-color)

- **Layout Split (1200xAuto)**
  - **Lista de Produtos (800xAuto)**
    - Gap: var(--spacing-4)
    - Padding-right: var(--spacing-6)
  
  - **Resumo (400xAuto)**
    - Background: var(--background-white)
    - Border: 1px solid var(--border-color)
    - Border-radius: var(--radius-lg)
    - Padding: var(--spacing-4)
    - Position: sticky
    - Top: var(--spacing-4)

### 2.2 Responsividade
- **Mobile** (< 768px)
  - Layout em coluna única
  - Resumo fixo no bottom
  - Cards simplificados
  - Ações em bottom sheet

- **Tablet** (768px - 1024px)
  - Layout flexível
  - Resumo em coluna lateral
  - Cards médios
  - Ações inline

- **Desktop** (> 1024px)
  - Layout split view
  - Resumo sticky
  - Cards completos
  - Ações expandidas

## 3. Componentes do Design System

### 3.1 Lista de Produtos
- **CartItemList**
  - Props:
    - `items`: CartItem[]
    - `onUpdateQuantity`: (id: string, qty: number) => void
    - `onRemove`: (id: string) => void
    - `onSaveForLater`: (id: string) => void
    - `loading`: boolean

- **CartItemCard**
  - Props:
    - `item`: CartItem
    - `onUpdateQuantity`: (qty: number) => void
    - `onRemove`: () => void
    - `onSaveForLater`: () => void
    - `loading`: boolean
    - `variant`: "compact" | "full"

### 3.2 Resumo e Checkout
- **CartSummary**
  - Props:
    - `subtotal`: number
    - `shipping`: number
    - `discount`: number
    - `total`: number
    - `onCheckout`: () => void
    - `loading`: boolean

- **PromoCode**
  - Props:
    - `onApply`: (code: string) => void
    - `loading`: boolean
    - `error`: string
    - `success`: string

### 3.3 Elementos de Interface
- **QuantitySelector**
  - Props:
    - `value`: number
    - `onChange`: (value: number) => void
    - `min`: number
    - `max`: number
    - `disabled`: boolean

- **PriceDisplay**
  - Props:
    - `value`: number
    - `size`: "sm" | "md" | "lg"
    - `variant`: "regular" | "discount"
    - `currency`: string

## 4. Interações e Estados

### 4.1 Ações do Usuário
- [ ] Gerenciamento de Itens
  - [ ] Adicionar item
  - [ ] Remover item
  - [ ] Atualizar quantidade
  - [ ] Salvar para depois

- [ ] Promoções
  - [ ] Aplicar cupom
  - [ ] Remover cupom
  - [ ] Ver descontos
  - [ ] Calcular frete

- [ ] Checkout
  - [ ] Revisar itens
  - [ ] Selecionar entrega
  - [ ] Aplicar cupom
  - [ ] Finalizar compra

### 4.2 Feedback Visual
- [ ] Loading States
  - [ ] Carregando carrinho
  - [ ] Atualizando quantidade
  - [ ] Aplicando cupom
  - [ ] Calculando frete

- [ ] Notificações
  - [ ] Item adicionado
  - [ ] Item removido
  - [ ] Cupom aplicado
  - [ ] Erro na ação

- [ ] Validações
  - [ ] Estoque disponível
  - [ ] Cupom válido
  - [ ] CEP válido
  - [ ] Valor mínimo

## 5. Aspectos Técnicos

### 5.1 Integração com APIs
```typescript
interface CartAPI {
  // Gerenciamento do Carrinho
  getCart: () => Promise<Cart>;
  addItem: (productId: string, quantity: number) => Promise<CartItem>;
  updateQuantity: (itemId: string, quantity: number) => Promise<CartItem>;
  removeItem: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  
  // Promoções e Frete
  applyPromoCode: (code: string) => Promise<Discount>;
  removePromoCode: (code: string) => Promise<void>;
  calculateShipping: (zipcode: string) => Promise<ShippingOption[]>;
  
  // Checkout
  validateCart: () => Promise<ValidationResult>;
  startCheckout: () => Promise<CheckoutSession>;
  saveForLater: (itemId: string) => Promise<void>;
}

interface Cart {
  id: string;
  items: CartItem[];
  summary: {
    subtotal: number;
    shipping: number;
    discount: number;
    total: number;
  };
  promoCode?: {
    code: string;
    discount: number;
    type: 'percentage' | 'fixed';
  };
  shipping?: {
    zipcode: string;
    method: string;
    price: number;
    estimate: {
      min: number;
      max: number;
    };
  };
}

interface CartItem {
  id: string;
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    originalPrice?: number;
    sku: string;
  };
  quantity: number;
  maxQuantity: number;
  price: number;
  total: number;
  attributes?: {
    [key: string]: string;
  };
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimate: {
    min: number;
    max: number;
  };
  carrier: string;
  method: string;
}

interface Discount {
  code: string;
  type: 'percentage' | 'fixed' | 'shipping';
  value: number;
  minValue?: number;
  maxDiscount?: number;
  expiresAt?: Date;
}

interface ValidationResult {
  valid: boolean;
  errors?: {
    itemId: string;
    type: 'stock' | 'price' | 'availability';
    message: string;
  }[];
}
```

### 5.2 Performance
- **Otimizações**:
  - [ ] Data Management
    - [ ] Local storage sync
    - [ ] Optimistic updates
    - [ ] Real-time stock
    - [ ] Price updates
  
  - [ ] Cálculos
    - [ ] Debounce quantity
    - [ ] Async shipping
    - [ ] Batch updates
    - [ ] Cache results
  
  - [ ] Assets
    - [ ] Image optimization
    - [ ] Lazy loading
    - [ ] Preload checkout
    - [ ] CDN delivery

## 6. Variáveis de Estilo
```scss
// Cores do Tema
$cart-primary: var(--primary-500);
$cart-secondary: var(--secondary-500);
$cart-background: var(--background-white);
$cart-surface: var(--surface-white);

// Status
$status-instock: var(--success-500);
$status-lowstock: var(--warning-500);
$status-outstock: var(--error-500);
$status-discount: var(--info-500);

// Cards
$card-background: var(--background-white);
$card-border: var(--border-color);
$card-shadow: var(--shadow-sm);
$card-radius: var(--radius-lg);

// Ações
$action-primary: var(--primary-500);
$action-secondary: var(--secondary-500);
$action-danger: var(--error-500);
$action-disabled: var(--gray-300);

// Espaçamentos
$header-height: 80px;
$summary-width: 400px;
$card-gap: var(--spacing-4);
$section-gap: var(--spacing-6);

// Tipografia
$title-text: var(--font-xl);
$subtitle-text: var(--font-lg);
$price-text: var(--font-lg);
$body-text: var(--font-md);
$meta-text: var(--font-sm);

// Dimensões
$item-image: 120px;
$quantity-width: 100px;
$button-height: 48px;
$input-height: 40px;

// Breakpoints
$mobile: 768px;
$tablet: 1024px;
$desktop: 1280px;

// Animações
$transition-quick: 0.2s ease;
$transition-medium: 0.3s ease;
$slide-up: translateY(20px);
```

## 7. Testes

### 7.1 Casos de Teste
- [ ] Gerenciamento
  - [ ] Adicionar item
  - [ ] Remover item
  - [ ] Atualizar quantidade
  - [ ] Limpar carrinho

- [ ] Promoções
  - [ ] Cupom válido
  - [ ] Cupom inválido
  - [ ] Múltiplos cupons
  - [ ] Regras de desconto

- [ ] Frete
  - [ ] Cálculo correto
  - [ ] CEP válido
  - [ ] Frete grátis
  - [ ] Restrições

- [ ] Validações
  - [ ] Estoque
  - [ ] Preços
  - [ ] Disponibilidade
  - [ ] Restrições

## 8. Checklist de Implementação
- [ ] Setup Inicial
  - [ ] Estado global
  - [ ] Persistência
  - [ ] API services
  - [ ] Types

- [ ] Componentes Core
  - [ ] Lista de itens
  - [ ] Resumo
  - [ ] Promoções
  - [ ] Frete

- [ ] Features
  - [ ] CRUD de itens
  - [ ] Cupons
  - [ ] Frete
  - [ ] Checkout

- [ ] Otimizações
  - [ ] Cache
  - [ ] Performance
  - [ ] Real-time
  - [ ] Offline

- [ ] UX/UI
  - [ ] Loading states
  - [ ] Animações
  - [ ] Responsividade
  - [ ] Acessibilidade

- [ ] Testes
  - [ ] Unit tests
  - [ ] Integration tests
  - [ ] E2E tests
  - [ ] Performance tests

- [ ] Documentação
  - [ ] API docs
  - [ ] Componentes
  - [ ] Fluxos
  - [ ] Guia de uso
