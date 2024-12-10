# Button

## Descrição
O componente Button é um elemento interativo fundamental que segue o design system do Zé da Graxa. Ele oferece uma experiência consistente e acessível, com suporte a diferentes variantes, tamanhos, estados e interações.

## Propriedades
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| variant | 'primary' \| 'secondary' \| 'outline' \| 'text' \| 'danger' | não | 'primary' | Estilo visual do botão |
| size | 'sm' \| 'md' \| 'lg' | não | 'md' | Tamanho do botão |
| fullWidth | boolean | não | false | Se verdadeiro, o botão ocupa 100% da largura do container |
| disabled | boolean | não | false | Estado desabilitado do botão |
| loading | boolean | não | false | Exibe um spinner de carregamento |
| leftIcon | ReactNode | não | - | Ícone exibido à esquerda do texto |
| rightIcon | ReactNode | não | - | Ícone exibido à direita do texto |
| iconOnly | boolean | não | false | Se verdadeiro, otimiza o botão para exibir apenas ícone |
| active | boolean | não | false | Estado ativo para botões toggle |
| type | 'button' \| 'submit' \| 'reset' | não | 'button' | Tipo do botão |
| onClick | (event: MouseEvent) => void | não | - | Função chamada ao clicar no botão |
| children | ReactNode | não | - | Conteúdo do botão |

## Tokens de Design

### Cores
- `--color-primary`: Cor principal do botão primário
- `--color-primary-dark`: Cor hover do botão primário
- `--color-primary-darker`: Cor active do botão primário
- `--color-secondary`: Cor do botão secundário
- `--color-error`: Cor do botão danger
- `--color-background`: Cor de fundo padrão
- `--color-background-hover`: Cor de fundo no hover
- `--color-background-active`: Cor de fundo quando ativo
- `--color-text-primary`: Cor do texto principal
- `--color-text-secondary`: Cor do texto secundário
- `--color-border`: Cor da borda padrão
- `--color-white`: Cor branca para contraste

### Tipografia
- `--font-family`: Fonte do botão
- `--font-size-sm`: Tamanho do texto pequeno (14px)
- `--font-size-md`: Tamanho do texto médio (16px)
- `--font-size-lg`: Tamanho do texto grande (18px)
- `--font-weight-medium`: Peso da fonte (500)

### Espaçamento
- `--spacing-2`: Espaçamento pequeno (8px)
- `--spacing-3`: Espaçamento médio (12px)
- `--spacing-4`: Espaçamento grande (16px)
- `--spacing-5`: Espaçamento extra grande (20px)

### Efeitos
- `--border-radius-sm`: Borda arredondada pequena (6px)
- `--border-radius-md`: Borda arredondada média (8px)
- `--border-radius-lg`: Borda arredondada grande (12px)

## Variantes

### Primary
- Uso: Ações principais e call-to-actions
- Fundo: var(--color-primary)
- Texto: var(--color-white)
- Hover: var(--color-primary-dark)
- Active: var(--color-primary-darker)

### Secondary
- Uso: Ações secundárias e complementares
- Fundo: var(--color-secondary)
- Texto: var(--color-white)
- Hover: var(--color-secondary-dark)
- Active: var(--color-secondary-darker)

### Outline
- Uso: Ações alternativas e menos enfáticas
- Borda: var(--color-border)
- Texto: var(--color-text-primary)
- Hover: var(--color-background-hover)
- Active: var(--color-background-active)

### Text
- Uso: Ações sutis e navegação
- Texto: var(--color-text-primary)
- Hover: var(--color-background-hover)
- Active: var(--color-background-active)

### Danger
- Uso: Ações destrutivas ou de alerta
- Fundo: var(--color-error)
- Texto: var(--color-white)
- Hover: var(--color-error-dark)
- Active: var(--color-error-darker)

## Tamanhos

### Small (sm)
- Altura: 32px
- Padding: 0 12px
- Font-size: var(--font-size-sm)
- Border-radius: var(--border-radius-sm)

### Medium (md)
- Altura: 40px
- Padding: 0 16px
- Font-size: var(--font-size-md)
- Border-radius: var(--border-radius-md)

### Large (lg)
- Altura: 48px
- Padding: 0 20px
- Font-size: var(--font-size-lg)
- Border-radius: var(--border-radius-lg)

## Acessibilidade

1. **Roles e Estados**
   - Elemento nativo `<button>`
   - `aria-disabled` quando desabilitado
   - `aria-busy` durante loading
   - `aria-label` para botões icon-only
   - `aria-pressed` para botões toggle

2. **Navegação**
   - Focável via teclado (Tab)
   - Ativação via Enter/Space
   - Focus visible aprimorado
   - Ordem de tabulação lógica

3. **Visual**
   - Alto contraste (WCAG AA)
   - Estados visuais distintos
   - Área mínima clicável (32px)
   - Feedback visual de interação
   - Suporte para redução de movimento

## Estados

### Default
- Estado padrão do botão
- Cursor: pointer
- Transições suaves

### Hover
- Feedback visual ao passar o mouse
- Transformação sutil (translateY)
- Mudança de cor/opacidade

### Active
- Feedback ao clicar/pressionar
- Transformação reversa
- Cor mais escura/intensa

### Focus
- Outline visível
- Alto contraste
- Não depende de hover

### Disabled
- Opacidade reduzida (0.6)
- Cursor: not-allowed
- Interações desabilitadas

### Loading
- Spinner centralizado
- Conteúdo invisível
- Cursor: wait
- Interações bloqueadas

## Exemplos de Uso

```tsx
// Botão primário básico
<Button variant="primary">
  Confirmar Pedido
</Button>

// Botão secundário com ícone
<Button 
  variant="secondary"
  leftIcon={<ShoppingCartIcon />}
>
  Adicionar ao Carrinho
</Button>

// Botão de loading
<Button 
  variant="primary" 
  loading
>
  Processando...
</Button>

// Botão outline full width
<Button 
  variant="outline"
  fullWidth
>
  Ver Mais Produtos
</Button>

// Botão icon-only
<Button
  variant="text"
  iconOnly
  aria-label="Buscar"
>
  <SearchIcon />
</Button>

// Botão danger
<Button 
  variant="danger"
  leftIcon={<TrashIcon />}
>
  Excluir Item
</Button>
```

## Boas Práticas

1. **UX/UI**
   - Use texto claro e acionável
   - Mantenha hierarquia visual
   - Agrupe botões relacionados
   - Indique estados de loading
   - Forneça feedback visual
   - Use ícones com propósito

2. **Acessibilidade**
   - Forneça labels descritivos
   - Mantenha contraste adequado
   - Suporte navegação por teclado
   - Indique estados via ARIA
   - Respeite preferências de movimento

3. **Performance**
   - Evite re-renders desnecessários
   - Use React.memo quando apropriado
   - Otimize assets (ícones)
   - Minimize mudanças de layout

4. **Manutenção**
   - Siga padrões de nomenclatura
   - Documente props não óbvias
   - Use design tokens
   - Mantenha consistência
   - Teste todas as variantes

## Componentes Relacionados
- `IconButton`: Versão especializada para ícones
- `LinkButton`: Botão com comportamento de link
- `ButtonGroup`: Grupo de botões relacionados
- `ToggleButton`: Botão com estado toggle
- `DropdownButton`: Botão com menu dropdown
