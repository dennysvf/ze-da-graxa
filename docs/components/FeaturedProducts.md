# FeaturedProducts

## Descrição
O FeaturedProducts é um componente de seção que exibe uma grade de produtos em destaque, com título, subtítulo opcional e um botão para ver todos os produtos. É comumente usado na página inicial para destacar produtos específicos.

## Localização
`frontend/src/components/FeaturedProducts/FeaturedProducts.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| title | string | Sim | Título da seção |
| subtitle | string | Não | Subtítulo opcional da seção |
| products | Product[] | Sim | Array de produtos a serem exibidos |

### Interface Product
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  // ... outras propriedades do produto
}
```

## Seções

### Header
- Título principal
- Subtítulo opcional
- Espaçamento adequado
- Tipografia hierárquica

### Grid
- Grade de produtos
- Layout responsivo
- Componente ProductGrid
- Espaçamento uniforme

### Actions
- Botão "Ver Todos"
- Posicionamento centralizado
- Call-to-action claro
- Link para catálogo

## Tokens de Design

### Layout
- `--section-padding`: Padding da seção
- `--header-spacing`: Espaço após header
- `--grid-gap`: Gap entre produtos
- `--actions-spacing`: Espaço antes das ações

### Cores
- `--title-color`: Cor do título
- `--subtitle-color`: Cor do subtítulo
- `--button-bg`: Cor do botão
- `--button-text`: Cor do texto do botão
- `--section-bg`: Cor de fundo da seção

### Tipografia
- `--title-size`: Tamanho do título
- `--subtitle-size`: Tamanho do subtítulo
- `--button-text-size`: Tamanho do texto do botão
- `--title-weight`: Peso do título
- `--subtitle-weight`: Peso do subtítulo

## Estados

### Loading
- Skeleton loader
- Animação suave
- Placeholder grid
- Dimensões mantidas

### Empty
- Mensagem informativa
- Layout preservado
- Feedback claro
- Call-to-action

### Error
- Mensagem de erro
- Retry option
- Fallback content
- User guidance

## Acessibilidade

1. **Semântica**
   - Tag section
   - Headings hierárquicos
   - Landmarks
   - Button role

2. **Navegação**
   - Tab order
   - Focus management
   - Skip links
   - Keyboard nav

3. **Screen Readers**
   - Seção descritiva
   - Grid anunciado
   - Produtos rotulados
   - Ações claras

## Exemplo de Uso
```tsx
import { FeaturedProducts } from '@/components/FeaturedProducts';

function HomePage() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Produto Destaque 1',
      price: 99.90,
      images: ['url/imagem1.jpg'],
      description: 'Descrição do produto'
    },
    // ... mais produtos
  ];

  return (
    <FeaturedProducts
      title="Produtos em Destaque"
      subtitle="Confira nossa seleção especial"
      products={featuredProducts}
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Produtos relevantes
   - Layout claro
   - Call-to-action óbvio
   - Loading states

2. **Performance**
   - Lazy loading
   - Image optimization
   - Grid virtualization
   - Efficient updates

3. **Manutenção**
   - Props tipadas
   - Componente modular
   - Reutilização
   - Documentação

4. **SEO**
   - Semantic HTML
   - Meta tags
   - Rich snippets
   - Structured data

## Relacionamentos
- Contém: ProductGrid
- Usado por: HomePage, CategoryPage
- Relacionado com: ProductCard, ProductList

## Considerações Técnicas

1. **Performance**
   - Image loading
   - Grid rendering
   - State updates
   - Navigation

2. **SEO**
   - Schema markup
   - Meta tags
   - Link structure
   - Content hierarchy

3. **Analytics**
   - Click tracking
   - View tracking
   - Conversion
   - Engagement

4. **Cache**
   - Product data
   - Images
   - Static content
   - User preferences

## Variações de Layout

1. **Desktop**
   - Grid multi-coluna
   - Hover effects
   - Large images
   - Expanded info

2. **Mobile**
   - Single column
   - Swipe gestures
   - Compact cards
   - Touch targets

3. **Tablet**
   - Adaptive grid
   - Touch/mouse
   - Medium cards
   - Balanced layout

## Otimizações

1. **Performance**
   - Lazy images
   - Virtual scroll
   - Memo components
   - Bundle split

2. **UX**
   - Smooth load
   - Quick actions
   - Clear paths
   - Feedback

3. **Analytics**
   - View tracking
   - Click rates
   - Engagement
   - Conversion

## Integrações

1. **Backend**
   - Product API
   - Cache layer
   - Real-time updates
   - Fallbacks

2. **Analytics**
   - GTM events
   - Custom events
   - User journey
   - Conversion

3. **Marketing**
   - A/B testing
   - Personalization
   - Campaign tags
   - UTM tracking
