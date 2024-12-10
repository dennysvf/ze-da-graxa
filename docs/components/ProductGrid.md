# ProductGrid

## Descrição
O ProductGrid é um componente de layout responsável por exibir uma coleção de produtos em formato de grid ou lista. Ele gerencia estados de carregamento, lista vazia e renderiza ProductCards de forma otimizada.

## Localização
`frontend/src/components/ProductGrid/ProductGrid.tsx`

## Props
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| products | Product[] | Sim | - | Array de produtos a serem exibidos |
| loading | boolean | Não | false | Estado de carregamento |
| variant | 'grid' \| 'list' | Não | 'grid' | Layout dos produtos |
| onAddToCart | (productId: string) => void | Não | - | Callback ao adicionar ao carrinho |
| onAddToFavorites | (productId: string) => void | Não | - | Callback ao adicionar aos favoritos |

## Estados

### Loading
- Exibe spinner de carregamento
- Mensagem "Carregando produtos..."
- Layout centralizado

### Empty
- Mensagem "Nenhum produto encontrado"
- Layout centralizado
- Feedback visual claro

### Populated
- Grid/Lista de ProductCards
- Layout responsivo
- Espaçamento adequado

## Tokens de Design

### Layout
- `--grid-gap`: Espaçamento entre cards
- `--grid-columns`: Número de colunas
- `--grid-padding`: Espaçamento interno
- `--grid-max-width`: Largura máxima

### Loading
- `--spinner-size`: Tamanho do spinner
- `--spinner-color`: Cor do spinner
- `--loading-text`: Cor do texto de loading

### Empty
- `--empty-text`: Cor do texto vazio
- `--empty-spacing`: Espaçamento do estado vazio

## Variantes

### Grid
- Layout em grid responsivo
- Múltiplas colunas
- Cards com tamanho fixo
- Ideal para navegação rápida

### List
- Layout em lista vertical
- Uma coluna
- Cards expandidos
- Ideal para comparação detalhada

## Acessibilidade
1. **Estados**
   - Loading state anunciado
   - Empty state descritivo
   - Feedback para screen readers

2. **Navegação**
   - Ordem lógica de tabulação
   - Estrutura semântica
   - Landmarks apropriados

3. **Visual**
   - Contraste adequado
   - Estados visíveis
   - Loading state perceptível

## Exemplo de Uso
```tsx
import { ProductGrid } from '@/components/ProductGrid';

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (productId: string) => {
    // Lógica de adicionar ao carrinho
  };

  const handleAddToFavorites = (productId: string) => {
    // Lógica de adicionar aos favoritos
  };

  return (
    <ProductGrid
      products={products}
      loading={loading}
      variant="grid"
      onAddToCart={handleAddToCart}
      onAddToFavorites={handleAddToFavorites}
    />
  );
}
```

## Boas Práticas

1. **Performance**
   - Virtualização para listas longas
   - Lazy loading de imagens
   - Memoização de callbacks
   - Otimização de re-renders

2. **UX**
   - Loading states claros
   - Empty states informativos
   - Transições suaves
   - Feedback imediato

3. **Responsividade**
   - Grid adaptativo
   - Breakpoints consistentes
   - Touch targets adequados
   - Layout fluido

4. **Manutenção**
   - Props tipadas
   - Estados documentados
   - Variantes testadas
   - Código reutilizável

## Relacionamentos
- Contém: ProductCard
- Usado por: ProductsPage, SearchResults, CategoryPage
- Relacionado com: ProductFilters, Pagination

## Considerações Técnicas
1. **Grid Layout**
   - CSS Grid para layout
   - Media queries para responsividade
   - Gap para espaçamento
   - Auto-fill para colunas

2. **Loading State**
   - Spinner componentizado
   - Animação suave
   - Feedback não-bloqueante
   - Timeout para UX

3. **Empty State**
   - Mensagem clara
   - Possível CTA
   - Layout centralizado
   - Espaço adequado

4. **Lista Longa**
   - Considerar virtualização
   - Paginação ou infinite scroll
   - Otimização de performance
   - Gerenciamento de memória
