# ProductSort

## Descrição
O ProductSort é um componente de seleção que permite aos usuários ordenar produtos por diferentes critérios, como nome e preço, em ordem ascendente ou descendente.

## Localização
`frontend/src/components/ProductSort/ProductSort.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| value | SortOption | Sim | Opção de ordenação selecionada |
| onChange | (value: SortOption) => void | Sim | Callback chamado quando a ordenação muda |

### Types
```typescript
type SortOption = 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';
```

## Opções de Ordenação
| Valor | Label | Descrição |
|-------|-------|-----------|
| name_asc | Nome (A-Z) | Ordem alfabética crescente |
| name_desc | Nome (Z-A) | Ordem alfabética decrescente |
| price_asc | Menor preço | Preço do menor para o maior |
| price_desc | Maior preço | Preço do maior para o menor |

## Tokens de Design

### Layout
- `--select-height`: Altura do select
- `--select-padding`: Padding interno
- `--label-spacing`: Espaço entre label e select
- `--option-padding`: Padding das options

### Cores
- `--select-bg`: Cor de fundo do select
- `--select-border`: Cor da borda
- `--select-text`: Cor do texto
- `--select-hover`: Cor de hover
- `--select-focus`: Cor de foco

### Tipografia
- `--label-size`: Tamanho do label
- `--select-size`: Tamanho do texto do select
- `--label-weight`: Peso do label
- `--option-size`: Tamanho das options

## Estados

### Normal
- Select padrão
- Label visível
- Opções disponíveis
- Cursor pointer

### Focus
- Borda destacada
- Ring de foco
- Feedback visual
- Navegação por teclado

### Disabled (opcional)
- Visual esmaecido
- Não interativo
- Feedback visual
- Cursor not-allowed

## Acessibilidade

1. **Semântica**
   - Label associado
   - Select nativo
   - ARIA roles
   - Descrições claras

2. **Navegação**
   - Focável por teclado
   - Tab order
   - Arrow keys
   - Enter/Space

3. **Screen Readers**
   - Labels descritivos
   - Roles corretos
   - Estados anunciados
   - Opções legíveis

## Exemplo de Uso
```tsx
import { ProductSort } from '@/components/ProductSort';

function ProductList() {
  const [sortOption, setSortOption] = useState<SortOption>('name_asc');

  const handleSortChange = (newSort: SortOption) => {
    setSortOption(newSort);
    // Reordenar produtos
  };

  return (
    <ProductSort
      value={sortOption}
      onChange={handleSortChange}
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Labels claros
   - Opções intuitivas
   - Feedback imediato
   - Consistência visual

2. **Performance**
   - Componente leve
   - Memoização se necessário
   - Callback otimizado
   - Renderização eficiente

3. **Manutenção**
   - Tipos definidos
   - Props documentadas
   - Código limpo
   - Reutilizável

4. **Internacionalização**
   - Labels traduzíveis
   - RTL suporte
   - Formatos flexíveis
   - Ordem adaptável

## Relacionamentos
- Usado por: ProductList, SearchResults
- Relacionado com: ProductGrid, ProductFilters

## Considerações Técnicas

1. **Estado**
   - Controlled component
   - Valor inicial
   - Mudanças síncronas
   - Validação

2. **Eventos**
   - onChange handler
   - Blur handling
   - Focus management
   - Form integration

3. **Validação**
   - Tipos corretos
   - Valores válidos
   - Fallbacks
   - Error handling

4. **Integração**
   - Form context
   - URL params
   - State management
   - API sorting

## Variações de Layout

1. **Desktop**
   - Select padrão
   - Label inline
   - Dropdown nativo
   - Hover states

2. **Mobile**
   - Select full width
   - Label block
   - Touch friendly
   - Native picker

3. **Custom (opcional)**
   - Estilo personalizado
   - Animações
   - Ícones
   - Dropdown custom

## Otimizações

1. **Performance**
   - React.memo
   - useCallback
   - Lazy options
   - Efficient updates

2. **UX**
   - Loading state
   - Error feedback
   - Clear selection
   - Instant feedback

3. **Acessibilidade**
   - ARIA labels
   - Keyboard nav
   - Focus visible
   - Voice control
