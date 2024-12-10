# Checkbox

O componente Checkbox permite que o usuário selecione uma ou mais opções de um conjunto. É comumente usado em formulários e filtros.

## Importação

```tsx
import { Checkbox } from '@/components/Checkbox';
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|---------|-----------|
| checked | boolean | false | Estado de seleção do checkbox |
| defaultChecked | boolean | false | Estado inicial de seleção |
| disabled | boolean | false | Se o checkbox está desabilitado |
| error | boolean | false | Se o checkbox está em estado de erro |
| required | boolean | false | Se o checkbox é obrigatório |
| label | string | - | Texto do label do checkbox |
| hint | string | - | Texto de dica/ajuda |
| name | string | - | Nome do campo para formulários |
| value | string | - | Valor do checkbox |
| onChange | (checked: boolean) => void | - | Função chamada quando o estado muda |
| className | string | - | Classes CSS adicionais |

## Tokens de Design

O componente Checkbox utiliza os seguintes tokens de design:

### Cores
- `$primary-green`: Cor principal quando selecionado
- `$error`: Cor de erro (#F44336)
- `$text-disabled`: Cor quando desabilitado
- `$border`: Cor da borda padrão
- `$background`: Cor de fundo
- `$text-primary`: Cor do texto principal

### Tipografia
- `$font-size-sm`: Tamanho da fonte do label (14px)
- `$font-size-xs`: Tamanho da fonte da dica (12px)
- `$font-family-primary`: Família da fonte
- `$font-weight-regular`: Peso da fonte do label

### Espaçamento
- `$spacing-unit`: Espaçamento interno do checkbox (4px)
- `$spacing-xs`: Espaçamento entre checkbox e label (4px)
- `$spacing-sm`: Espaçamento para dica/erro (8px)
- `$spacing-md`: Margem vertical entre checkboxes (16px)

### Efeitos
- `$border-radius-sm`: Borda arredondada do checkbox (4px)
- `$transition-fast`: Transição de estados (150ms ease-in-out)
- `$shadow-sm`: Sombra sutil no hover
- `$focus-ring`: Anel de foco para acessibilidade

## Acessibilidade

O componente Checkbox segue as melhores práticas de acessibilidade:

1. **Roles e Atributos ARIA**
   - Usa elemento nativo `<input type="checkbox">`
   - `aria-checked` para estado de seleção
   - `aria-disabled` quando desabilitado
   - `aria-invalid` para estado de erro
   - `aria-describedby` para mensagens de erro/dica

2. **Gerenciamento de Foco**
   - Focável via teclado (Tab)
   - Feedback visual de foco
   - Ativação via espaço/enter
   - Suporte a grupos de checkboxes

3. **Contraste e Legibilidade**
   - Alto contraste entre estados
   - Tamanho mínimo para área clicável (44x44px)
   - Indicadores visuais claros
   - Mensagens de erro/dica legíveis

## Exemplos de Uso

### Checkbox Básico

```tsx
<Checkbox
  label="Aceito os termos de uso"
  onChange={(checked) => console.log('Checkbox:', checked)}
/>
```

### Checkbox com Estado Inicial

```tsx
<Checkbox
  label="Newsletter"
  defaultChecked
  onChange={(checked) => console.log('Newsletter:', checked)}
/>
```

### Checkbox Desabilitado

```tsx
<Checkbox
  label="Opção indisponível"
  disabled
/>
```

### Checkbox com Erro

```tsx
<Checkbox
  label="Termos obrigatórios"
  error
  hint="Você precisa aceitar os termos para continuar"
  required
/>
```

### Grupo de Checkboxes

```tsx
<div role="group" aria-label="Notificações">
  <Checkbox
    name="notifications"
    value="email"
    label="Email"
  />
  <Checkbox
    name="notifications"
    value="sms"
    label="SMS"
  />
  <Checkbox
    name="notifications"
    value="push"
    label="Push"
  />
</div>
```

## Testing

### Cenários Principais
1. **Renderização**
   - Renderiza corretamente com label
   - Renderiza com estado inicial checked/unchecked
   - Renderiza em estado desabilitado
   - Renderiza com mensagem de erro

2. **Interatividade**
   - Alterna estado ao clicar
   - Alterna estado com tecla espaço
   - Mantém estado quando desabilitado
   - Exibe feedback visual no hover/focus

3. **Acessibilidade**
   - Navegável por teclado
   - Atributos ARIA corretos
   - Labels associados corretamente
   - Mensagens de erro anunciadas

### Exemplo de Teste

```tsx
describe('Checkbox', () => {
  it('deve alternar estado ao clicar', () => {
    const onChange = jest.fn();
    render(<Checkbox label="Test" onChange={onChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    
    expect(onChange).toHaveBeenCalledWith(true);
    expect(checkbox).toBeChecked();
  });
});
```

## Componentes Relacionados

- `CheckboxGroup`: Para gerenciar múltiplos checkboxes relacionados
- `RadioButton`: Quando apenas uma opção pode ser selecionada
- `Switch`: Para alternar entre dois estados
- `Form`: Para uso em formulários

## Variantes

### Tamanho
- `sm`: 16x16px (padrão para formulários densos)
- `md`: 20x20px (padrão)
- `lg`: 24x24px (maior área de toque)

### Estilo
- `default`: Estilo padrão com borda
- `filled`: Fundo colorido quando selecionado
- `custom`: Suporte para ícones personalizados

```tsx
<Checkbox
  label="Checkbox grande"
  size="lg"
  variant="filled"
/>
```

## Variantes de Tamanho

### Small (sm)
- Tamanho do checkbox: 16px
- Font-size: $font-size-xs (12px)
- Espaçamento interno: $spacing-unit (4px)

### Medium (md)
- Tamanho do checkbox: 20px
- Font-size: $font-size-sm (14px)
- Espaçamento interno: $spacing-xs (4px)

### Large (lg)
- Tamanho do checkbox: 24px
- Font-size: $font-size-md (16px)
- Espaçamento interno: $spacing-sm (8px)

## Considerações

1. **Performance**
   - Use `defaultChecked` para estado inicial não controlado
   - Evite re-renders desnecessários no `onChange`
   - Agrupe checkboxes relacionados

2. **UX**
   - Use labels claros e descritivos
   - Mantenha área clicável adequada
   - Forneça feedback visual imediato
   - Agrupe opções relacionadas
   - Use dicas para explicar opções complexas

3. **Acessibilidade**
   - Sempre use labels descritivos
   - Mantenha ordem de tabulação lógica
   - Forneça mensagens de erro claras
   - Teste com leitores de tela
   - Suporte navegação por teclado
