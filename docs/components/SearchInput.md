# SearchInput

## Descrição
O SearchInput é um componente de entrada de texto otimizado para buscas, com debounce integrado para evitar requisições excessivas e ícone de busca incorporado. Fornece uma interface limpa e eficiente para pesquisas em tempo real.

## Localização
`frontend/src/components/SearchInput/SearchInput.tsx`

## Props
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| onSearch | (value: string) => void | Sim | - | Callback de busca |
| placeholder | string | Não | 'Buscar...' | Texto placeholder |
| className | string | Não | - | Classes CSS adicionais |

## Funcionalidades

### Debounce
- Delay de 300ms
- Evita requisições em excesso
- Otimiza performance
- Melhora UX

### Estado Local
- Controle do valor interno
- Atualização imediata
- Feedback visual
- Sincronização com parent

## Tokens de Design

### Layout
- `--input-height`: Altura do input
- `--input-padding`: Espaçamento interno
- `--input-border-radius`: Arredondamento
- `--icon-size`: Tamanho do ícone

### Cores
- `--input-bg`: Cor de fundo
- `--input-border`: Cor da borda
- `--input-text`: Cor do texto
- `--icon-color`: Cor do ícone

### Tipografia
- `--input-font-size`: Tamanho da fonte
- `--input-font-family`: Família da fonte
- `--placeholder-color`: Cor do placeholder

## Estados

### Input
1. Default
   - Borda neutra
   - Ícone visível
   
2. Focus
   - Borda destacada
   - Outline visual
   
3. Hover
   - Feedback visual
   - Cursor text
   
4. Filled
   - Texto visível
   - Ícone mantido

### Ícone
1. Default
   - Cor neutra
   - Posição fixa
   
2. Active
   - Cor destacada
   - Animação sutil

## Acessibilidade

1. **ARIA**
   - `role="search"`
   - Labels adequados
   - Estados claros
   - Feedback para screen readers

2. **Navegação**
   - Focável por teclado
   - Tab navigation
   - Clear feedback
   - Estados visíveis

3. **Visual**
   - Contraste adequado
   - Tamanho de fonte legível
   - Espaçamento adequado
   - Feedback claro

## Exemplo de Uso
```tsx
import { SearchInput } from '@/components/SearchInput';

function ProductSearch() {
  const handleSearch = (value: string) => {
    // Lógica de busca
    console.log('Searching for:', value);
  };

  return (
    <SearchInput
      onSearch={handleSearch}
      placeholder="Buscar produtos..."
      className="custom-search"
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Feedback imediato
   - Debounce apropriado
   - Placeholder claro
   - Ícone significativo

2. **Performance**
   - Debounce otimizado
   - Memoização de callbacks
   - Renderização eficiente
   - Estado controlado

3. **Acessibilidade**
   - Labels descritivos
   - Estados claros
   - Navegação por teclado
   - Feedback adequado

4. **Implementação**
   - Código limpo
   - Props tipadas
   - Debounce configurável
   - Estilos modulares

## Relacionamentos
- Usado por: Header, ProductList, SearchPage
- Relacionado com: ProductFilters, SearchResults

## Considerações Técnicas

1. **Debounce**
   - Implementação lodash
   - Cleanup adequado
   - Tempo configurável
   - Memoização

2. **Estado**
   - Controlled vs Uncontrolled
   - Sincronização
   - Performance
   - Limpeza

3. **Estilização**
   - CSS Modules
   - Responsividade
   - Customização
   - Temas

4. **Bundle**
   - Importação lodash
   - SVG otimizado
   - CSS minificado
   - Tree shaking

## Variações de Layout

1. **Desktop**
   - Tamanho confortável
   - Ícone à direita
   - Hover states
   - Focus visible

2. **Mobile**
   - Touch friendly
   - Teclado virtual
   - Ícone proporcional
   - Clear button

## Otimizações

1. **Performance**
   - Debounce configurável
   - Memoização de handlers
   - Renderização eficiente
   - Cleanup de listeners

2. **Bundle Size**
   - Importação seletiva lodash
   - SVG otimizado
   - CSS minificado
   - Code splitting

3. **UX**
   - Feedback imediato
   - Loading states
   - Error handling
   - Clear feedback
