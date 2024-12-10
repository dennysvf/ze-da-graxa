# ProductCard

## Descrição
O componente ProductCard é responsável por exibir informações de produtos em formato de card, com suporte a diferentes layouts (grid/list), ações interativas e estados de estoque. É um componente fundamental para listagens de produtos, oferecendo uma experiência rica e consistente.

## Propriedades

### ProductCardProps
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| product | Product | sim | - | Dados do produto |
| onAddToCart | () => void | não | - | Callback ao adicionar ao carrinho |
| onAddToFavorites | () => void | não | - | Callback ao adicionar aos favoritos |
| showActions | boolean | não | true | Se deve mostrar botões de ação |
| variant | 'grid' \| 'list' | não | 'grid' | Layout do card |

### Interface Product
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
  stock: number;
  specifications: Record<string, string>;
}
```

## Tokens de Design

### Cores
- `$white`: Cor de fundo do card
- `$border`: Cor da borda padrão
- `$primary-green`: Cor de destaque e hover
- `$text-primary`: Cor do texto principal
- `$text-secondary`: Cor do texto secundário
- `$background`: Cor de fundo da imagem

### Tipografia
- `$font-size-subtitle`: Tamanho do título
- `$font-size-body`: Tamanho da descrição
- `$font-size-small`: Tamanho do texto secundário
- `$font-weight-bold`: Peso da fonte do título
- `$line-height-body`: Altura da linha da descrição

### Espaçamento
- `$spacing-small`: Espaçamento pequeno
- `$spacing-medium`: Espaçamento médio
- `$spacing-large`: Espaçamento grande
- `$border-radius-default`: Arredondamento do card

### Efeitos
- `$transition-default`: Transição padrão
- `$shadow-hover`: Sombra no hover

## Variantes

### Grid
- Layout em coluna
- Imagem quadrada no topo
- Conteúdo abaixo da imagem
- Sem descrição visível
- Largura máxima: 280px

### List
- Layout horizontal
- Imagem à esquerda (200px)
- Conteúdo à direita
- Descrição visível
- Largura: 100%

## Estados

### Default
- Borda neutra
- Sem sombra
- Links interativos
- Botões visíveis

### Hover
- Borda destacada
- Sombra suave
- Elevação sutil
- Imagem com zoom

### Em Estoque
- Indicador "Em estoque"
- Botão de carrinho ativo
- Ações disponíveis

### Fora de Estoque
- Indicador "Fora de estoque"
- Botão de carrinho desabilitado
- Ações limitadas

## Acessibilidade

1. **Semântica**
   - Uso de article para o card
   - Links descritivos
   - Imagens com alt text
   - Botões com aria-label

2. **Navegação**
   - Links para produto e categoria
   - Foco visível
   - Ordem lógica de tabulação
   - Estados interativos claros

3. **Visual**
   - Contraste adequado
   - Estados visíveis
   - Feedback de interação
   - Indicadores de estoque

4. **Otimizações**
   - Lazy loading de imagens
   - Transições suaves
   - Performance em listas
   - Responsividade

## Exemplos de Uso

```tsx
// Card básico em grid
<ProductCard
  product={{
    id: "1",
    name: "Produto Exemplo",
    description: "Descrição do produto",
    price: 99.90,
    images: ["/imagem.jpg"],
    category: {
      id: "cat1",
      name: "Categoria",
      slug: "categoria"
    },
    stock: 10,
    specifications: {}
  }}
/>

// Card em lista com ações
<ProductCard
  product={product}
  variant="list"
  onAddToCart={() => handleAddToCart(product.id)}
  onAddToFavorites={() => handleAddToFavorites(product.id)}
/>

// Card sem ações
<ProductCard
  product={product}
  showActions={false}
  variant="grid"
/>
```

## Boas Práticas

1. **UX/UI**
   - Mantenha informações essenciais visíveis
   - Use imagens otimizadas
   - Forneça feedback claro
   - Indique estados de estoque
   - Mantenha ações acessíveis

2. **Performance**
   - Otimize imagens
   - Use lazy loading
   - Minimize reflows
   - Memoize handlers
   - Otimize para listas longas

3. **Manutenção**
   - Mantenha props consistentes
   - Documente variantes
   - Use tipos explícitos
   - Siga padrões do design system
   - Teste diferentes estados

4. **Responsividade**
   - Adapte layout para mobile
   - Mantenha touch targets adequados
   - Ajuste espaçamentos
   - Preserve funcionalidade

## Componentes Relacionados
- `ProductList`: Lista de produtos
- `ProductGrid`: Grid de produtos
- `CartItem`: Item no carrinho
- `WishlistItem`: Item na lista de desejos
- `ProductImage`: Componente de imagem
- `PriceDisplay`: Exibição de preço
- `StockIndicator`: Indicador de estoque

## Considerações de Implementação

1. **Imagens**
   - Otimize para performance
   - Use aspect-ratio
   - Forneça fallbacks
   - Suporte lazy loading

2. **Interatividade**
   - Trate estados de loading
   - Valide ações do usuário
   - Forneça feedback
   - Mantenha consistência

3. **Layout**
   - Suporte diferentes tamanhos
   - Mantenha proporções
   - Adapte para conteúdo
   - Use CSS Grid/Flexbox

4. **Estados**
   - Valide estoque
   - Atualize em tempo real
   - Mantenha cache
   - Sincronize dados
