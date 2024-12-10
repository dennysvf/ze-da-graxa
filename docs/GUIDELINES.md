# Zé da Graxa - Diretrizes de Desenvolvimento Frontend

## Visão Geral
Este documento fornece diretrizes para o desenvolvimento frontend do projeto Zé da Graxa, garantindo consistência e reusabilidade em todas as páginas.

## Estrutura do Projeto
```
frontend/
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── layouts/       # Layouts compartilhados
│   ├── styles/        # Estilos globais e temas
│   └── utils/         # Funções utilitárias
└── docs/             # Documentação
```

## Design System

### Cores
```css
:root {
  /* Cores Principais */
  --primary: #3FB87A;
  --secondary: #2C3E50;
  --accent: #E67E22;
  
  /* Background */
  --bg-main: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --bg-tertiary: #E9ECEF;
  
  /* Texto */
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-disabled: #999999;
  
  /* Estados */
  --border: #E1E1E1;
  --error: #DC3545;
  --success: #28A745;
  --warning: #FFC107;
  --info: #17A2B8;
}
```

### Tipografia
```css
:root {
  /* Font Family */
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Roboto', sans-serif;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.25rem;    /* 20px */
  --text-xl: 1.5rem;     /* 24px */
  
  /* Font Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}
```

### Espaçamento
```css
:root {
  /* Spacing Scale */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  
  /* Container */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}
```

### Bordas e Sombras
```css
:root {
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

### Transições
```css
:root {
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}
```

## Componentes

### 1. Layout
- **AppLayout**: Container principal com header e footer
- **Header**: Navegação principal e busca
- **Footer**: Links e informações do site
- **NavigationMenu**: Menu de navegação customizável
- **Breadcrumb**: Navegação hierárquica
- **HeroSection**: Seção principal da página inicial

### 2. Feedback
- **Alert**: Mensagens de feedback ao usuário
- **LoadingSpinner**: Indicador de carregamento
- **Toast**: Notificações temporárias
- **Modal**: Janelas modais
- **ErrorBoundary**: Tratamento de erros em componentes

### 3. Formulários
- **Button**: Botões com variantes
- **Input**: Campos de entrada
- **SearchInput**: Campo de busca com autocompletar
- **DateRangePicker**: Seletor de intervalo de datas

### 4. Produtos
- **ProductCard**: Card de produto
- **ProductGrid**: Grid de produtos
- **ProductFilters**: Filtros de produto
- **ProductSort**: Ordenação de produtos
- **FeaturedProducts**: Produtos em destaque

### 5. Carrinho e Pedidos
- **CartItem**: Item do carrinho
- **CartSummary**: Resumo do carrinho
- **OrderCard**: Card de pedido
- **OrderList**: Lista de pedidos
- **OrderTimeline**: Timeline do pedido
- **ShippingCalculator**: Cálculo de frete

### 6. Interface
- **Divider**: Linha divisória
- **Pagination**: Controle de paginação

## Boas Práticas

### 1. Estrutura de Componentes
```typescript
// ComponentName.tsx
import styles from './ComponentName.module.scss';

interface ComponentNameProps {
  // Props tipadas
}

export const ComponentName: React.FC<ComponentNameProps> = ({ ...props }) => {
  // 1. Hooks
  // 2. Derived state
  // 3. Event handlers
  // 4. Render
};
```

### 2. Estilos
```scss
// ComponentName.module.scss
.root {
  // Estilos base
}

.variant {
  // Variações
}

.state {
  // Estados (hover, active, disabled)
}

@media (max-width: var(--container-md)) {
  // Responsividade
}
```

### 3. Acessibilidade
- Usar tags semânticas (header, nav, main, footer)
- Incluir atributos ARIA apropriados
- Garantir navegação por teclado
- Manter contraste adequado
- Fornecer textos alternativos
- Implementar redução de movimento

### 4. Performance
- Lazy loading para imagens e rotas
- Memoização de componentes pesados
- Otimização de re-renders
- Code splitting
- Prefetch de dados
- Caching apropriado

### 5. Testes
- Testes unitários para lógica
- Testes de integração para fluxos
- Testes de acessibilidade
- Testes de performance
- Testes de regressão visual

## Padrões de Desenvolvimento

### 1. Componentes React

#### 1.1 Estrutura de Componentes
```tsx
// ProductCard/index.tsx
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  onAddToCart
}) => {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{formatPrice(price)}</p>
      <button onClick={onAddToCart} className={styles.button}>
        Adicionar ao Carrinho
      </button>
    </article>
  );
};
```

#### 1.2 Hooks Personalizados
```tsx
// hooks/useCart.ts
export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addToCart = useCallback((product: Product) => {
    setItems(prev => [...prev, { ...product, quantity: 1 }]);
  }, []);
  
  const removeFromCart = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);
  
  return { items, addToCart, removeFromCart };
};
```

### 2. Estilos

#### 2.1 CSS Modules
```scss
// ProductCard.module.scss
.card {
  border-radius: var(--radius-md);
  padding: var(--space-md);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  .image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
  
  .title {
    @include typography-h3;
    margin-top: var(--space-sm);
  }
  
  .price {
    @include typography-lg;
    color: var(--color-primary);
  }
  
  .button {
    @include button-primary;
    width: 100%;
    margin-top: var(--space-md);
  }
}
```

#### 2.2 Mixins Utilitários
```scss
// styles/mixins/_typography.scss
@mixin typography-base {
  font-family: var(--font-primary);
  line-height: 1.5;
}

@mixin typography-h1 {
  @include typography-base;
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
}

@mixin typography-body {
  @include typography-base;
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
}
```

### 3. Performance

#### 3.1 Otimização de Imagens
- Usar next/image para otimização automática
- Definir width e height para evitar CLS
- Implementar lazy loading
- Usar formatos modernos (WebP)

#### 3.2 Code Splitting
- Lazy loading de rotas
- Componentes dinâmicos
- Chunking adequado
- Prefetch estratégico

#### 3.3 Memoização
```tsx
// Componentes pesados
const HeavyComponent = memo(({ data }) => {
  // Renderização complexa
});

// Callbacks em listas
const handleClick = useCallback((id) => {
  // Ação do click
}, []);

// Cálculos caros
const expensiveValue = useMemo(() => {
  return heavyCalculation(props.data);
}, [props.data]);
```

### 4. Testes

#### 4.1 Testes Unitários
```tsx
// ProductCard.test.tsx
describe('ProductCard', () => {
  it('deve renderizar corretamente', () => {
    const { getByText } = render(
      <ProductCard
        title="Produto Teste"
        price={99.90}
        image="/test.jpg"
        onAddToCart={() => {}}
      />
    );
    
    expect(getByText('Produto Teste')).toBeInTheDocument();
  });
  
  it('deve chamar onAddToCart ao clicar no botão', () => {
    const onAddToCart = jest.fn();
    const { getByText } = render(
      <ProductCard
        title="Produto Teste"
        price={99.90}
        image="/test.jpg"
        onAddToCart={onAddToCart}
      />
    );
    
    fireEvent.click(getByText('Adicionar ao Carrinho'));
    expect(onAddToCart).toHaveBeenCalled();
  });
});
```

#### 4.2 Testes E2E
```typescript
// cypress/e2e/carrinho.cy.ts
describe('Carrinho de Compras', () => {
  it('deve adicionar produto ao carrinho', () => {
    cy.visit('/produtos');
    cy.get('[data-testid="product-card"]').first().within(() => {
      cy.get('button').click();
    });
    cy.get('[data-testid="cart-count"]').should('have.text', '1');
  });
});
```

### 5. Acessibilidade

#### 5.1 Semântica
- Usar tags HTML semânticas
- Implementar ARIA labels
- Manter hierarquia de headings
- Fornecer textos alternativos

#### 5.2 Navegação
- Suporte a teclado
- Skip links
- Focus visible
- Ordem de tabulação lógica

#### 5.3 ARIA
```tsx
// Exemplo de uso correto de ARIA
<button
  aria-label="Fechar modal"
  aria-expanded={isOpen}
  onClick={onClose}
>
  <Icon name="close" aria-hidden="true" />
</button>
```

### 6. Segurança

#### 6.1 XSS Prevention
- Sanitização de inputs
- Escape de conteúdo dinâmico
- CSP adequado
- Validação de dados

#### 6.2 CSRF Protection
- Tokens CSRF
- SameSite cookies
- Validação de origem

#### 6.3 Dados Sensíveis
- Não expor dados sensíveis no frontend
- Mascarar informações críticas
- Limpar dados ao logout
- Usar HTTPS sempre

### 7. Convenções de Código

#### 7.1 Imports
```tsx
// 1. React e hooks
import React, { useState, useEffect } from 'react';

// 2. Bibliotecas externas
import { motion } from 'framer-motion';

// 3. Componentes
import { Button } from '@/components/Button';

// 4. Hooks e utils
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/utils/format';

// 5. Tipos
import type { Product } from '@/types';

// 6. Estilos
import styles from './styles.module.scss';
```

#### 7.2 Props Ordering
```tsx
// 1. Props obrigatórias
// 2. Props opcionais
// 3. Event handlers
// 4. Render props
// 5. Estilização
interface ButtonProps {
  // 1. Required
  children: ReactNode;
  type: 'button' | 'submit';
  
  // 2. Optional
  disabled?: boolean;
  loading?: boolean;
  
  // 3. Events
  onClick?: () => void;
  onFocus?: () => void;
  
  // 4. Render
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  
  // 5. Styling
  className?: string;
  style?: CSSProperties;
}
```

## Processo de Desenvolvimento

### 1. Git Flow
1. Criar branch feature/
2. Desenvolver com commits atômicos
3. Testar localmente
4. Criar Pull Request
5. Code Review
6. Merge após aprovação

### 2. Code Review
- Verificar padrões de código
- Testar funcionalidade
- Revisar performance
- Validar acessibilidade
- Confirmar responsividade

### 3. Deploy
1. Build de produção
2. Testes automatizados
3. Deploy staging
4. Testes em staging
5. Deploy produção

## Manutenção
- Revisar e atualizar componentes periodicamente
- Documentar mudanças significativas
- Manter consistência com o design system
