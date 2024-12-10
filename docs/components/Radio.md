# Radio

## Descrição
O componente Radio é um elemento de entrada que permite ao usuário selecionar uma única opção de um conjunto. Segue o design system do Zé da Graxa e oferece suporte a diferentes estados e variações.

## Propriedades
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| label | string | sim | - | Rótulo do radio |
| name | string | sim | - | Nome do campo para formulários |
| value | string | sim | - | Valor do radio |
| checked | boolean | não | false | Estado de seleção |
| defaultChecked | boolean | não | false | Estado inicial não controlado |
| error | string | não | - | Mensagem de erro |
| hint | string | não | - | Texto de ajuda |
| required | boolean | não | false | Se o campo é obrigatório |
| disabled | boolean | não | false | Se o campo está desabilitado |
| onChange | (checked: boolean) => void | não | - | Callback de mudança |
| onBlur | (event: FocusEvent) => void | não | - | Callback de blur |
| onFocus | (event: FocusEvent) => void | não | - | Callback de focus |

## Tokens de Design

### Cores
- `$primary-green`: Cor de destaque e foco (#58D899)
- `$text-primary`: Cor do texto (#616161)
- `$text-disabled`: Cor quando desabilitado (#BDBDBD)
- `$border`: Cor da borda (#EDEDED)
- `$error`: Cor de erro (#F44336)
- `$white`: Cor de fundo (#FFFFFF)
- `$background`: Cor de fundo desabilitado (#F5F5F5)

### Tipografia
- `$font-family-primary`: Fonte do radio ('Inter', sans-serif)
- `$font-size-sm`: Tamanho do texto (14px)
- `$font-size-xs`: Tamanho do texto de hint/erro (12px)
- `$font-weight-regular`: Peso da fonte do texto (400)
- `$font-weight-medium`: Peso da fonte do label (500)

### Espaçamento
- `$spacing-unit`: Espaçamento interno do radio (4px)
- `$spacing-xs`: Espaçamento entre radio e label (4px)
- `$spacing-sm`: Espaçamento para mensagens (8px)
- `$spacing-md`: Margem entre radios (16px)

### Efeitos
- `$border-radius-full`: Borda circular (9999px)
- `$transition-fast`: Transição entre estados (150ms ease-in-out)
- `$shadow-sm`: Sombra sutil no hover
- `$focus-ring`: Anel de foco para acessibilidade

## Variantes de Tamanho

### Small (sm)
- Tamanho do radio: 16px
- Font-size: $font-size-xs (12px)
- Espaçamento interno: $spacing-unit (4px)

### Medium (md)
- Tamanho do radio: 20px
- Font-size: $font-size-sm (14px)
- Espaçamento interno: $spacing-xs (4px)

### Large (lg)
- Tamanho do radio: 24px
- Font-size: $font-size-md (16px)
- Espaçamento interno: $spacing-sm (8px)

## Estados

### Default
- Borda: $border
- Texto: $text-primary
- Background: $white

### Hover
- Sombra: $shadow-sm
- Opacidade: $hover-opacity (0.8)

### Focused
- Anel de foco: $focus-ring
- Borda: $primary-green

### Checked
- Background interno: $primary-green
- Borda: $primary-green

### Disabled
- Background: $background
- Texto: $text-disabled
- Opacidade: $disabled-opacity (0.5)

### Error
- Borda: $error
- Texto de erro: $error

## Acessibilidade
- [x] Label associada via htmlFor
- [x] aria-invalid em caso de erro
- [x] aria-describedby para hint e erro
- [x] Role="radio" e aria-checked para estado
- [x] Estados de foco visíveis
- [x] Navegação por teclado (Tab, Espaço)
- [x] Mensagens de erro anunciadas por leitores de tela
- [x] Agrupamento em radiogroup com role e aria-labelledby

## Exemplos de Uso

```tsx
// Radio básico
<Radio
  label="Masculino"
  name="gender"
  value="male"
  required
/>

// Radio com erro
<Radio
  label="Plano Básico"
  name="plan"
  value="basic"
  error="Selecione um plano"
  checked={selectedPlan === 'basic'}
  onChange={handlePlanChange}
/>

// Radio com hint
<Radio
  label="Cartão de Crédito"
  name="payment"
  value="credit"
  hint="Pagamento processado em até 2 dias úteis"
/>

// Radio desabilitado
<Radio
  label="Plano indisponível"
  name="plan"
  value="premium"
  disabled
  checked={false}
/>

// Grupo de Radio
<RadioGroup
  label="Método de Pagamento"
  name="payment"
  value={selectedPayment}
  onChange={handlePaymentChange}
  error={paymentError}
>
  <Radio label="Cartão de Crédito" value="credit" />
  <Radio label="Boleto" value="boleto" />
  <Radio label="PIX" value="pix" />
</RadioGroup>
```

## Variações
- Radio padrão
- Radio selecionado
- Radio com erro
- Radio desabilitado
- Radio em grupo

## Comportamento
- Apenas um radio pode ser selecionado por grupo
- Seleção não pode ser desmarcada (use Checkbox para isso)
- Mantém estado de foco visível ao navegar por teclado
- Desabilita interações quando disabled
- Exibe feedback visual ao passar o mouse

## Considerações
- Use labels descritivas e concisas
- Agrupe radios relacionados em RadioGroup
- Ordene as opções de forma lógica
- Considere usar Select para muitas opções
- Use Checkbox para seleção múltipla

## Testing

### Cenários Principais
1. **Renderização**
   - Renderiza com label corretamente
   - Renderiza em estado selecionado/não selecionado
   - Renderiza em estado desabilitado
   - Renderiza com mensagem de erro

2. **Interatividade**
   - Alterna estado ao clicar
   - Responde a eventos de teclado (Space)
   - Dispara eventos onChange, onBlur, onFocus
   - Mantém estado quando em grupo

3. **Acessibilidade**
   - Atributos ARIA corretos
   - Navegação por teclado
   - Mensagens de erro anunciadas
   - Agrupamento correto

### Exemplo de Teste

```tsx
describe('Radio', () => {
  it('deve atualizar estado ao clicar', () => {
    const onChange = jest.fn();
    render(
      <Radio
        label="Opção 1"
        name="option"
        value="1"
        onChange={onChange}
      />
    );
    
    const radio = screen.getByRole('radio');
    userEvent.click(radio);
    
    expect(radio).toBeChecked();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('deve manter estado quando desabilitado', () => {
    const onChange = jest.fn();
    render(
      <Radio
        label="Opção 1"
        name="option"
        value="1"
        disabled
        onChange={onChange}
      />
    );
    
    const radio = screen.getByRole('radio');
    userEvent.click(radio);
    
    expect(radio).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();
  });
});
```

## Componentes Relacionados

- `RadioGroup`: Para gerenciar grupo de radios
- `Checkbox`: Quando múltipla seleção é permitida
- `Select`: Para listas longas de opções
- `ToggleButton`: Para opções visuais/icônicas

## Variantes

### Tamanho
- `sm`: 16px (formulários densos)
- `md`: 20px (padrão)
- `lg`: 24px (maior área de toque)

### Estilo
- `outline`: Borda visível (padrão)
- `filled`: Fundo preenchido quando selecionado
- `custom`: Suporte para ícones/imagens

### Layout
- `horizontal`: Opções em linha
- `vertical`: Opções empilhadas
- `grid`: Opções em grade (com imagens)

## Boas Práticas

1. **UX**
   - Use labels claras e concisas
   - Agrupe opções relacionadas
   - Limite número de opções (<7)
   - Ordene opções logicamente
   - Indique opção padrão quando apropriado

2. **Performance**
   - Use RadioGroup para estado
   - Evite re-renders desnecessários
   - Memoize handlers quando apropriado
   - Otimize imagens em custom radios

3. **Manutenção**
   - Centralize opções em constantes
   - Mantenha consistência nos valores
   - Documente regras de negócio
   - Use tipos TypeScript
   - Teste todas as opções

4. **Acessibilidade**
   - Agrupe com role="radiogroup"
   - Use labels descritivas
   - Mantenha foco visível
   - Suporte navegação por setas
   - Teste com leitores de tela

## Exemplos Avançados

### RadioGroup com Layout Customizado

```tsx
<RadioGroup
  name="plano"
  value={selectedPlan}
  onChange={handlePlanChange}
  layout="grid"
>
  <Radio
    value="basic"
    label="Plano Básico"
    description="Ideal para iniciantes"
    icon={<BasicIcon />}
  />
  <Radio
    value="pro"
    label="Plano Pro"
    description="Recursos avançados"
    icon={<ProIcon />}
  />
  <Radio
    value="enterprise"
    label="Enterprise"
    description="Para grandes equipes"
    icon={<EnterpriseIcon />}
  />
</RadioGroup>
```

### Radio com Validação Customizada

```tsx
<RadioGroup
  name="pagamento"
  value={paymentMethod}
  onChange={handlePaymentChange}
  error={errors.payment}
  required
  validate={(value) => {
    if (!value) return 'Selecione uma forma de pagamento';
    if (value === 'credit' && !hasLimit) return 'Limite indisponível';
    return '';
  }}
>
  <Radio value="credit" label="Cartão de Crédito" />
  <Radio value="debit" label="Cartão de Débito" />
  <Radio value="pix" label="PIX" />
</RadioGroup>
