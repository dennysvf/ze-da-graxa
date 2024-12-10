# CheckboxGroup

O componente CheckboxGroup é usado para gerenciar um grupo de checkboxes relacionados, permitindo seleção múltipla de opções.

## Importação

```tsx
import { CheckboxGroup } from '@/components/Checkbox';
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|---------|-----------|
| name | string | - | Nome do grupo para formulários |
| value | string[] | - | Valores selecionados |
| onChange | (value: string[]) => void | - | Callback quando a seleção muda |
| label | string | - | Rótulo do grupo |
| hint | string | - | Texto de ajuda |
| error | boolean | false | Se o grupo está em estado de erro |
| disabled | boolean | false | Se o grupo está desabilitado |
| required | boolean | false | Se o grupo é obrigatório |
| children | ReactNode | - | Checkboxes filhos |
| className | string | - | Classes CSS adicionais |

## Tokens de Design

O componente CheckboxGroup utiliza os seguintes tokens de design:

### Cores
- `$text`: Cor do texto principal
- `$text-secondary`: Cor do texto secundário
- `$error`: Cor de erro
- `$disabled`: Cor quando desabilitado

### Tipografia
- `$font-size-body`: Tamanho da fonte do label
- `$font-size-small`: Tamanho da fonte da dica
- `$font-weight-medium`: Peso da fonte do label
- `$line-height-tight`: Altura da linha do label
- `$line-height-relaxed`: Altura da linha da dica

### Espaçamento
- `$spacing-xxs`: Espaçamento mínimo
- `$spacing-xs`: Espaçamento pequeno
- `$spacing-sm`: Espaçamento entre checkboxes

## Acessibilidade

O componente CheckboxGroup segue as melhores práticas de acessibilidade:

1. **Roles e Atributos ARIA**
   - Usa `role="group"` para agrupar checkboxes relacionados
   - `aria-labelledby` para associar o label ao grupo
   - `aria-describedby` para mensagens de erro/dica
   - `aria-required` para campos obrigatórios

2. **Gerenciamento de Foco**
   - Navegação por teclado entre checkboxes
   - Foco visível em cada checkbox
   - Ordem de tabulação lógica

3. **Contraste e Legibilidade**
   - Alto contraste para textos
   - Tamanhos de fonte adequados
   - Espaçamento suficiente entre opções

## Exemplos de Uso

### Grupo Básico de Checkboxes

```tsx
<CheckboxGroup
  label="Notificações"
  value={selectedOptions}
  onChange={setSelectedOptions}
>
  <Checkbox value="email" label="Email" />
  <Checkbox value="sms" label="SMS" />
  <Checkbox value="push" label="Push" />
</CheckboxGroup>
```

### Grupo com Erro

```tsx
<CheckboxGroup
  label="Termos"
  value={accepted}
  onChange={setAccepted}
  error
  hint="Você precisa aceitar pelo menos um termo"
  required
>
  <Checkbox value="privacy" label="Política de Privacidade" />
  <Checkbox value="terms" label="Termos de Uso" />
</CheckboxGroup>
```

### Grupo Desabilitado

```tsx
<CheckboxGroup
  label="Opções"
  value={options}
  onChange={setOptions}
  disabled
  hint="Opções indisponíveis no momento"
>
  <Checkbox value="option1" label="Opção 1" />
  <Checkbox value="option2" label="Opção 2" />
</CheckboxGroup>
```

## Considerações

1. **Performance**
   - Use `value` e `onChange` para controle de estado
   - Evite re-renders desnecessários
   - Gerencie estado eficientemente

2. **UX**
   - Agrupe checkboxes logicamente relacionados
   - Forneça labels claros e descritivos
   - Use hints para explicar opções complexas
   - Mantenha ordem consistente das opções
   - Considere estado inicial apropriado

3. **Acessibilidade**
   - Use labels descritivos para o grupo
   - Mantenha ordem lógica de tabulação
   - Forneça feedback claro de erros
   - Teste com leitores de tela
   - Garanta navegação por teclado
