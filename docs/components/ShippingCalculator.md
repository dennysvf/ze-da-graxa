# ShippingCalculator

## Descrição
O ShippingCalculator é um componente que permite calcular opções de frete através do CEP. Ele gerencia a entrada do CEP, validação, cálculo de opções de frete e seleção da opção desejada.

## Localização
`frontend/src/components/ShippingCalculator/ShippingCalculator.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| onSelect | (option: ShippingOption) => void | Sim | Callback quando uma opção é selecionada |
| onCalculate | (cep: string) => Promise<ShippingOption[]> | Sim | Callback assíncrono para calcular opções de frete |

### Interface ShippingOption
```typescript
interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: number;
}
```

## Estados

### Input
- Valor do CEP
- Formatação automática
- Validação em tempo real
- Máximo 8 dígitos

### Loading
- Botão desabilitado
- Texto "Calculando..."
- Feedback visual
- Estado de espera

### Erro
- Mensagem de erro
- Validação do CEP
- Erro de API
- Feedback visual

### Opções
- Lista de opções
- Preço formatado
- Prazo de entrega
- Seleção interativa

## Tokens de Design

### Layout
- `--calculator-padding`: Espaçamento interno
- `--input-height`: Altura do input
- `--button-height`: Altura dos botões
- `--options-gap`: Espaço entre opções

### Cores
- `--input-border`: Cor da borda do input
- `--button-bg`: Cor do botão
- `--error-color`: Cor de erro
- `--option-hover`: Cor de hover das opções
- `--link-color`: Cor do link

### Tipografia
- `--input-size`: Tamanho do input
- `--button-text`: Tamanho do texto do botão
- `--error-size`: Tamanho do erro
- `--option-name`: Tamanho do nome da opção
- `--price-size`: Tamanho do preço

## Acessibilidade

1. **Semântica**
   - Labels descritivos
   - Roles apropriados
   - Estados ARIA
   - Mensagens claras

2. **Navegação**
   - Focável por teclado
   - Tab order lógico
   - Enter para submit
   - Focus management

3. **Feedback**
   - Mensagens de erro
   - Status de loading
   - Resultados anunciados
   - Estados claros

## Exemplo de Uso
```tsx
import { ShippingCalculator } from '@/components/ShippingCalculator';

function Cart() {
  const handleShippingSelect = (option: ShippingOption) => {
    // Atualizar opção selecionada
  };

  const calculateShipping = async (cep: string) => {
    // Chamar API de cálculo de frete
    const response = await api.shipping.calculate(cep);
    return response.options;
  };

  return (
    <ShippingCalculator
      onSelect={handleShippingSelect}
      onCalculate={calculateShipping}
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Formatação automática
   - Feedback imediato
   - Estados claros
   - Link para busca de CEP

2. **Performance**
   - Debounce no input
   - Cache de resultados
   - Loading states
   - Error handling

3. **Validação**
   - CEP formato correto
   - Input sanitizado
   - Erro tratado
   - Feedback claro

4. **Integração**
   - API robusta
   - Retry logic
   - Timeout handling
   - Cache strategy

## Relacionamentos
- Usado por: CartSummary, Checkout
- Relacionado com: PriceDisplay, Button

## Considerações Técnicas

1. **Input**
   - Máscara de CEP
   - Validação regex
   - Sanitização
   - Formatação

2. **API**
   - Timeout
   - Retry
   - Error handling
   - Cache

3. **Estado**
   - Loading state
   - Error state
   - Options state
   - Selection state

4. **Performance**
   - Debounce
   - Memoização
   - Cache
   - Otimizações

## Variações de Layout

1. **Desktop**
   - Layout horizontal
   - Opções em grid
   - Hover states
   - Tooltips

2. **Mobile**
   - Layout vertical
   - Opções em lista
   - Touch targets
   - Bottom sheet

3. **Tablet**
   - Layout adaptativo
   - Grid responsivo
   - Touch friendly
   - Modal opcional

## Otimizações

1. **Performance**
   - Debounce input
   - Cache results
   - Memo components
   - Lazy loading

2. **UX**
   - Auto format
   - Instant feedback
   - Clear errors
   - Loading states

3. **Validação**
   - CEP format
   - API errors
   - Timeout
   - Retry logic

## Integrações

1. **Correios**
   - API dos Correios
   - Busca CEP
   - Validação
   - Prazos

2. **Transportadoras**
   - Multiple carriers
   - Price comparison
   - SLA tracking
   - Coverage check

3. **Analytics**
   - Usage tracking
   - Error tracking
   - Performance
   - Conversion
