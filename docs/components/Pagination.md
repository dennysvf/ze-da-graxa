# Pagination

## Descrição
O Pagination é um componente de navegação que permite aos usuários navegar através de múltiplas páginas de conteúdo. Implementa uma interface intuitiva com números de página, ellipsis para páginas ocultas e botões de navegação anterior/próximo.

## Localização
`frontend/src/components/Pagination/Pagination.tsx`

## Props
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| currentPage | number | Sim | - | Página atual |
| totalPages | number | Sim | - | Total de páginas |
| onPageChange | (page: number) => void | Sim | - | Callback de mudança de página |
| itemsPerPage | number | Não | 10 | Itens por página |

## Comportamento

### Lógica de Exibição
- Sempre mostra primeira e última página
- Mostra até 5 páginas visíveis
- Usa ellipsis (...) para páginas ocultas
- Mantém página atual centralizada quando possível

### Navegação
- Botões anterior/próximo
- Clique direto em números
- Desabilita navegação inválida
- Feedback visual do estado atual

## Tokens de Design

### Layout
- `--pagination-height`: Altura dos botões
- `--pagination-spacing`: Espaçamento entre itens
- `--pagination-padding`: Padding dos botões
- `--pagination-border-radius`: Arredondamento

### Cores
- `--pagination-bg`: Cor de fundo
- `--pagination-active-bg`: Fundo do item ativo
- `--pagination-hover-bg`: Fundo no hover
- `--pagination-disabled-bg`: Fundo desabilitado

### Tipografia
- `--pagination-font-size`: Tamanho da fonte
- `--pagination-font-weight`: Peso da fonte
- `--pagination-active-weight`: Peso quando ativo

## Estados

### Botões de Página
1. Default
   - Cor de fundo neutra
   - Cursor pointer
   
2. Hover
   - Background mais escuro
   - Transição suave
   
3. Active
   - Destaque visual
   - Cor diferenciada
   
4. Disabled
   - Visual esmaecido
   - Cursor not-allowed

### Botões de Navegação
1. Enabled
   - Setas visíveis
   - Interativo
   
2. Disabled
   - Visual esmaecido
   - Não clicável

## Acessibilidade

1. **ARIA**
   - `aria-label` para navegação
   - `aria-current="page"` para página atual
   - `aria-hidden` para ellipsis
   - Labels descritivos para botões

2. **Navegação**
   - Focável por teclado
   - Ordem lógica de tab
   - Estados visíveis
   - Feedback claro

3. **Interação**
   - Clique e teclado
   - Área de clique adequada
   - Estados interativos claros
   - Feedback imediato

## Exemplo de Uso
```tsx
import { Pagination } from '@/components/Pagination';

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div>
      <ProductGrid page={currentPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={12}
      />
    </div>
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Mantenha consistência visual
   - Forneça feedback claro
   - Use números legíveis
   - Mantenha navegação intuitiva

2. **Performance**
   - Memoize handlers
   - Evite cálculos desnecessários
   - Otimize re-renders
   - Cache resultados quando possível

3. **Acessibilidade**
   - Use semântica correta
   - Mantenha foco gerenciado
   - Forneça alternativas de navegação
   - Mantenha contraste adequado

4. **Implementação**
   - Valide limites de página
   - Trate estados de erro
   - Mantenha lógica centralizada
   - Use tipos apropriados

## Relacionamentos
- Usado por: ProductGrid, OrderList, SearchResults
- Relacionado com: ProductFilters, DataTable

## Considerações Técnicas

1. **Cálculos**
   - Lógica de páginas visíveis
   - Validação de limites
   - Otimização de performance
   - Cache de resultados

2. **Estado**
   - Controlled component
   - Validação de props
   - Sincronização de estado
   - Feedback de mudanças

3. **Responsividade**
   - Adaptação mobile
   - Touch targets
   - Scroll horizontal
   - Breakpoints

4. **Manutenção**
   - Código modular
   - Lógica reutilizável
   - Testes unitários
   - Documentação clara

## Variações de Layout

1. **Desktop**
   - Todos números visíveis
   - Espaçamento confortável
   - Hover states
   - Ellipsis quando necessário

2. **Mobile**
   - Números reduzidos
   - Touch friendly
   - Scroll se necessário
   - Botões maiores
