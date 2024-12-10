# Carrinho de Compras

### 1. Visão Geral
- **Objetivo**: Permitir que usuários visualizem e gerenciem itens selecionados para compra
- **Contexto**: Acessível via ícone do carrinho no header ou após adicionar produtos
- **Usuários**: Clientes em processo de compra

### 2. Layout

#### 2.1 Estrutura Visual
```ascii
+------------------+
|      Header      |
+------------------+
|   Lista Itens    |
| +-------------+  |
| | Item 1      |  |
| |  - Qtd      |  |
| |  - Preço    |  |
| +-------------+  |
| +-------------+  |
| | Item 2      |  |
| +-------------+  |
|-----------------|
| Resumo Compra   |
|-----------------|
|  Botões Ação    |
+------------------+
```

#### 2.2 Componentes React
```typescript
interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
}

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  discounts?: {
    code: string;
    value: number;
  }[];
}
```

#### 2.3 Responsividade
- **Breakpoints**:
  - Mobile: < 768px
    - Lista em coluna única
    - Controles de quantidade compactos
  - Tablet: 768px - 1024px
    - Layout em grid 2x2
  - Desktop: > 1024px
    - Layout em lista horizontal
    - Resumo fixo à direita

### 3. Interações

#### 3.1 Ações do Usuário
- [ ] Alterar quantidade de itens
- [ ] Remover itens
- [ ] Aplicar cupom de desconto
- [ ] Calcular frete
- [ ] Prosseguir para checkout
- [ ] Continuar comprando

#### 3.2 Feedback Visual
- [ ] Loading states ao atualizar quantidades
- [ ] Animações de remoção de item
- [ ] Indicadores de estoque baixo
- [ ] Validação de cupom
- [ ] Atualização automática de valores

#### 3.3 Validações
- [ ] Quantidade máxima por estoque
- [ ] Quantidade mínima por item
- [ ] Formato de CEP
- [ ] Cupom válido

### 4. Aspectos Técnicos

#### 4.1 Integração com APIs
```typescript
interface CartAPI {
  updateQuantity(itemId: string, quantity: number): Promise<void>;
  removeItem(itemId: string): Promise<void>;
  applyCoupon(code: string): Promise<{
    valid: boolean;
    discount?: number;
    message?: string;
  }>;
  calculateShipping(zipCode: string): Promise<{
    options: ShippingOption[];
  }>;
}
```

#### 4.2 Componentes Base
- [ ] Quantity selector
- [ ] Price display
- [ ] Image thumbnail
- [ ] Input with mask (CEP)
- [ ] Action buttons
- [ ] Summary card

#### 4.3 Performance
- **Otimizações**:
  - [ ] Debounce em atualizações de quantidade
  - [ ] Lazy loading de imagens
  - [ ] Cache de cálculos de frete
  - [ ] Persistência local do carrinho

### 5. Assets Necessários

#### 5.1 Ícones
- [ ] Remover item
- [ ] Adicionar/diminuir quantidade
- [ ] Carrinho vazio
- [ ] Sucesso/erro validação

### 6. Variáveis de Estilo

```scss
// Cores
$colors: (
  text: #616161,
  background: #FFFFFF,
  divider: #F5FBF3,
  success: #4CAF50,
  error: #F44336,
  warning: #FFC107
);

// Layout
$layout: (
  item-gap: 16px,
  section-gap: 24px,
  border-radius: 8px
);
```

### 7. Testes

#### 7.1 Casos de Teste
- [ ] Adicionar/remover itens
- [ ] Atualizar quantidades
- [ ] Aplicar cupom válido/inválido
- [ ] Calcular frete
- [ ] Persistência após reload
- [ ] Limites de estoque
- [ ] Responsividade

### 8. Checklist de Implementação

- [ ] Estrutura base
  - [ ] Lista de itens
  - [ ] Controles de quantidade
  - [ ] Resumo de valores
  - [ ] Formulário de CEP
  - [ ] Campo de cupom
- [ ] Integrações
  - [ ] API de carrinho
  - [ ] API de frete
  - [ ] API de cupons
- [ ] Validações
  - [ ] Estoque
  - [ ] CEP
  - [ ] Cupom
- [ ] UX
  - [ ] Loading states
  - [ ] Mensagens de erro
  - [ ] Confirmações
  - [ ] Animações
