# CartSummary

## Descrição
O CartSummary é um componente que exibe o resumo do carrinho de compras, incluindo subtotal, frete e total. Integra-se com o calculador de frete e fornece o botão de finalização da compra.

## Localização
`frontend/src/components/CartSummary/CartSummary.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| cart | Cart | Sim | Dados do carrinho |
| onShippingSelect | (option: ShippingOption) => void | Sim | Callback de seleção de frete |
| onCheckout | () => void | Sim | Callback de finalização |
| onCalculateShipping | (cep: string) => Promise<ShippingOption[]> | Sim | Callback de cálculo de frete |

### Interfaces
```typescript
interface Cart {
  subtotal: number;
  shipping?: ShippingOption;
  total: number;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  deadline: string;
}
```

## Seções

### Subtotal
- Valor dos produtos
- Formatação monetária
- Atualização dinâmica

### Frete
- Calculador integrado
- Opções de envio
- Preço do frete
- Estado de cálculo

### Total
- Soma de subtotal e frete
- Destaque visual
- Formatação especial
- Atualização automática

## Tokens de Design

### Layout
- `--summary-padding`: Espaçamento interno
- `--summary-gap`: Espaçamento entre itens
- `--summary-border-radius`: Arredondamento
- `--row-spacing`: Espaço entre linhas

### Cores
- `--summary-bg`: Cor de fundo
- `--summary-border`: Cor da borda
- `--text-primary`: Cor do texto principal
- `--text-secondary`: Cor do texto secundário

### Tipografia
- `--title-size`: Tamanho do título
- `--price-size`: Tamanho dos preços
- `--total-size`: Tamanho do total
- `--button-text`: Texto do botão

## Estados

### Normal
- Todos valores visíveis
- Frete não calculado
- Botão desabilitado

### Com Frete
- Frete selecionado
- Total atualizado
- Botão habilitado
- Opções de envio

### Loading
- Calculando frete
- Feedback visual
- Botão desabilitado
- Spinner no cálculo

## Acessibilidade

1. **Semântica**
   - Estrutura hierárquica
   - Labels descritivos
   - Valores formatados
   - Estados claros

2. **Interação**
   - Botões focáveis
   - Estados do botão
   - Feedback de ações
   - Mensagens claras

3. **Visual**
   - Contraste adequado
   - Hierarquia clara
   - Estados visíveis
   - Feedback de erro

## Exemplo de Uso
```tsx
import { CartSummary } from '@/components/CartSummary';

function CartPage() {
  const handleShippingSelect = (option: ShippingOption) => {
    // Atualizar frete selecionado
  };

  const handleCheckout = () => {
    // Iniciar checkout
  };

  const calculateShipping = async (cep: string) => {
    // Calcular opções de frete
    return shippingOptions;
  };

  return (
    <CartSummary
      cart={cart}
      onShippingSelect={handleShippingSelect}
      onCheckout={handleCheckout}
      onCalculateShipping={calculateShipping}
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Valores claros
   - Atualizações suaves
   - Feedback imediato
   - Estados óbvios

2. **Performance**
   - Cálculos otimizados
   - Cache de frete
   - Debounce em cálculos
   - Memoização de valores

3. **Validação**
   - CEP válido
   - Frete obrigatório
   - Total correto
   - Estados consistentes

4. **Implementação**
   - Código limpo
   - Responsabilidades claras
   - Reutilização
   - Manutenibilidade

## Relacionamentos
- Contém: PriceDisplay, ShippingCalculator
- Usado por: CartPage, CheckoutPage
- Relacionado com: CartItem, CheckoutForm

## Considerações Técnicas

1. **Cálculos**
   - Precisão decimal
   - Arredondamento
   - Validações
   - Cache

2. **Estado**
   - Gerenciamento de frete
   - Sincronização
   - Persistência
   - Limpeza

3. **API**
   - Chamadas assíncronas
   - Tratamento de erros
   - Retry logic
   - Timeout

4. **Responsividade**
   - Layout adaptativo
   - Breakpoints
   - Touch targets
   - Mobile first

## Variações de Layout

1. **Desktop**
   - Layout em coluna
   - Espaçamento amplo
   - Botão grande
   - Informações detalhadas

2. **Mobile**
   - Layout compacto
   - Bottom sheet opcional
   - Botão full width
   - Scroll quando necessário
