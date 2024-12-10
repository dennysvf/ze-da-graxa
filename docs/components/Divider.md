# Divider

## Descrição
O Divider é um componente visual que cria uma linha divisória entre elementos. Ele é altamente customizável, suportando diferentes orientações, estilos, cores e espaçamentos.

## Localização
`frontend/src/components/Divider/Divider.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| orientation | 'horizontal' \| 'vertical' | Não | Orientação da linha (default: 'horizontal') |
| variant | 'solid' \| 'dashed' | Não | Estilo da linha (default: 'solid') |
| color | 'light' \| 'medium' \| 'dark' | Não | Intensidade da cor (default: 'medium') |
| spacing | 'none' \| 'sm' \| 'md' \| 'lg' | Não | Espaçamento ao redor (default: 'md') |
| className | string | Não | Classe CSS adicional |
| style | CSSProperties | Não | Estilos inline adicionais |

## Variantes

### Orientação
- **horizontal**: Linha horizontal, separa elementos verticalmente
- **vertical**: Linha vertical, separa elementos horizontalmente

### Estilo
- **solid**: Linha sólida contínua
- **dashed**: Linha tracejada

### Cor
- **light**: Cor suave para separações sutis
- **medium**: Cor padrão para uso geral
- **dark**: Cor forte para separações enfáticas

### Espaçamento
- **none**: Sem margem
- **sm**: Margem pequena
- **md**: Margem média
- **lg**: Margem grande

## Tokens de Design

### Layout
- `--divider-thickness`: Espessura da linha
- `--divider-length`: Comprimento (100% default)
- `--spacing-sm`: Espaçamento pequeno
- `--spacing-md`: Espaçamento médio
- `--spacing-lg`: Espaçamento grande

### Cores
- `--color-light`: Tom suave
- `--color-medium`: Tom médio
- `--color-dark`: Tom forte
- `--color-opacity`: Opacidade base

### Variantes
- `--dash-length`: Tamanho do traço
- `--dash-gap`: Espaço entre traços
- `--vertical-height`: Altura vertical
- `--horizontal-width`: Largura horizontal

## Acessibilidade

1. **Semântica**
   - Tag hr semântica
   - Role separator
   - Aria-orientation
   - Significado visual

2. **Visual**
   - Contraste adequado
   - Espessura visível
   - Espaçamento claro
   - Propósito óbvio

3. **Screen Readers**
   - Anúncio apropriado
   - Contexto mantido
   - Navegação lógica
   - Estrutura clara

## Exemplo de Uso
```tsx
import { Divider } from '@/components/Divider';

function ProductSection() {
  return (
    <div>
      <h2>Produtos em Destaque</h2>
      <Divider
        orientation="horizontal"
        variant="solid"
        color="medium"
        spacing="md"
      />
      <ProductList />
    </div>
  );
}

// Uso vertical
function SidePanel() {
  return (
    <div className="flex">
      <Navigation />
      <Divider
        orientation="vertical"
        variant="dashed"
        color="light"
        spacing="none"
      />
      <Content />
    </div>
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Uso consistente
   - Propósito claro
   - Espaçamento adequado
   - Contraste apropriado

2. **Performance**
   - Componente leve
   - Renderização eficiente
   - Estilos otimizados
   - Classes dinâmicas

3. **Manutenção**
   - Props tipadas
   - Valores default
   - Código limpo
   - Documentação clara

4. **Composição**
   - Flexibilidade
   - Reutilização
   - Customização
   - Integração

## Relacionamentos
- Usado por: Layout, Card, Section
- Relacionado com: Spacing, Typography

## Considerações Técnicas

1. **CSS**
   - Flexbox/Grid
   - Box model
   - Border styles
   - Margin collapse

2. **Renderização**
   - Performance
   - Reflow
   - Repaint
   - Layout shift

3. **Responsividade**
   - Breakpoints
   - Orientação
   - Espaçamento
   - Adaptação

4. **Customização**
   - Theming
   - CSS-in-JS
   - Variables
   - Overrides

## Variações de Layout

1. **Content**
   - Entre seções
   - Entre cards
   - Em listas
   - Em forms

2. **Navigation**
   - Menu items
   - Breadcrumbs
   - Tabs
   - Steps

3. **Custom**
   - Com texto
   - Com ícones
   - Gradientes
   - Animados

## Otimizações

1. **Performance**
   - CSS classes
   - Memoização
   - Bundle size
   - Render count

2. **Estilo**
   - CSS modules
   - Scoped styles
   - Variables
   - Themes

3. **Reutilização**
   - Props default
   - Composição
   - Extensibilidade
   - Consistência

## Design System

1. **Tokens**
   - Cores
   - Espaçamentos
   - Espessuras
   - Variantes

2. **Padrões**
   - Uso consistente
   - Combinações
   - Hierarquia
   - Semântica

3. **Guidelines**
   - Quando usar
   - Como usar
   - Exemplos
   - Anti-patterns
