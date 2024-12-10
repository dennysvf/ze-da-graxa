# ProductFilters

## Descrição
O ProductFilters é um componente de filtro que permite aos usuários refinar a lista de produtos por categoria e faixa de preço. Oferece uma interface intuitiva para seleção de filtros e feedback visual do estado atual.

## Localização
`frontend/src/components/ProductFilters/ProductFilters.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| categories | Category[] | Sim | Lista de categorias disponíveis |
| selectedCategory | string | Não | Slug da categoria selecionada |
| minPrice | number | Não | Preço mínimo selecionado |
| maxPrice | number | Não | Preço máximo selecionado |
| onCategoryChange | (category: string) => void | Sim | Callback de mudança de categoria |
| onPriceChange | (min: number, max: number) => void | Sim | Callback de mudança de preço |

### Interface Category
```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
}
```

## Seções

### Categorias
- Lista de botões para cada categoria
- Botão "Todas" para limpar seleção
- Estado ativo visual
- Layout em grid/flex

### Preço
- Input para preço mínimo
- Input para preço máximo
- Labels descritivos
- Validação de números

## Tokens de Design

### Layout
- `--filters-padding`: Espaçamento interno
- `--filters-gap`: Espaçamento entre seções
- `--section-gap`: Espaçamento entre elementos

### Cores
- `--filters-bg`: Cor de fundo
- `--filters-border`: Cor da borda
- `--button-active`: Cor do botão ativo
- `--button-hover`: Cor do botão em hover

### Tipografia
- `--heading-size`: Tamanho dos títulos
- `--button-text`: Tamanho do texto dos botões
- `--input-text`: Tamanho do texto dos inputs

## Estados

### Botões de Categoria
1. Default
   - Cor de fundo neutra
   - Borda suave
   
2. Hover
   - Cor de fundo alterada
   - Cursor pointer
   
3. Active
   - Cor de destaque
   - Indicador visual
   
4. Focus
   - Outline visível
   - Navegável por teclado

### Inputs de Preço
1. Default
   - Placeholder visível
   - Borda neutra
   
2. Focus
   - Borda destacada
   - Feedback visual
   
3. Invalid
   - Feedback de erro
   - Borda vermelha
   
4. Filled
   - Valor formatado
   - Estado visível

## Acessibilidade

1. **Semântica**
   - Headings para seções
   - Labels para inputs
   - Botões com estados claros
   - Feedback visual adequado

2. **Navegação**
   - Ordem de tabulação lógica
   - Focus visível
   - Estados interativos claros
   - Agrupamento semântico

3. **Formulário**
   - Labels associados
   - Validação clara
   - Mensagens de erro
   - Inputs tipados

## Exemplo de Uso
```tsx
import { ProductFilters } from '@/components/ProductFilters';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  return (
    <ProductFilters
      categories={categories}
      selectedCategory={selectedCategory}
      minPrice={priceRange.min}
      maxPrice={priceRange.max}
      onCategoryChange={handleCategoryChange}
      onPriceChange={handlePriceChange}
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Feedback imediato
   - Estados claros
   - Validação em tempo real
   - Layout consistente

2. **Performance**
   - Debounce em inputs
   - Memoização de handlers
   - Otimização de re-renders
   - Cache de resultados

3. **Manutenção**
   - Props tipadas
   - Handlers isolados
   - Estados documentados
   - Validações centralizadas

4. **Responsividade**
   - Layout adaptativo
   - Touch targets adequados
   - Scroll quando necessário
   - Estados mobile-friendly

## Relacionamentos
- Usado por: ProductsPage, SearchResults
- Relacionado com: ProductGrid, ProductSort
- Afeta: ProductCard (via filtros)

## Considerações Técnicas

1. **Validação**
   - Números positivos
   - Min <= Max
   - Formatação de moeda
   - Feedback de erro

2. **Estado**
   - Controlled components
   - Prop drilling
   - Estado local vs global
   - Sincronização

3. **Performance**
   - Debounce de inputs
   - Memorização de listas
   - Otimização de renders
   - Cache de filtros

4. **Mobile**
   - Drawer/Modal em mobile
   - Touch friendly
   - Scroll vertical
   - Inputs adaptados
