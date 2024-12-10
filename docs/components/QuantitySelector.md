# QuantitySelector

## Descrição
O componente QuantitySelector é um controle numérico interativo que permite aos usuários selecionar uma quantidade através de botões de incremento/decremento ou entrada direta. Ele é otimizado para uso em interfaces de e-commerce, com suporte a limites mínimos e máximos, feedback visual e acessibilidade.

## Propriedades
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| value | number | sim | - | Valor atual do seletor |
| onChange | (value: number) => void | sim | - | Callback chamado quando o valor muda |
| min | number | não | 1 | Valor mínimo permitido |
| max | number | não | 99 | Valor máximo permitido |

## Tokens de Design

### Cores
- `$text-primary`: Cor do texto e botões
- `$text-placeholder`: Cor dos botões desabilitados
- `$primary-green`: Cor de hover dos botões
- `$border`: Cor da borda do container

### Tipografia
- `$font-family-primary`: Fonte do input
- `$font-size-body`: Tamanho do texto do input
- `$font-size-large`: Tamanho do texto dos botões

### Espaçamento
- `$spacing-small`: Espaçamento entre elementos
- `$border-radius-default`: Arredondamento das bordas

### Efeitos
- `$transition-default`: Transição padrão para interações

## Estados

### Default
- Container com borda neutra
- Botões com cor de texto padrão
- Input com valor centralizado

### Hover
- Botões mudam para cor primária
- Cursor pointer nos botões
- Feedback visual imediato

### Disabled
- Botões com cor atenuada
- Cursor not-allowed
- Interações desabilitadas

### Focus
- Input sem outline padrão
- Mantém funcionalidade do teclado
- Estados visuais preservados

## Acessibilidade

1. **Interatividade**
   - Botões com aria-label descritivo
   - Input com tipo numérico apropriado
   - Suporte a navegação por teclado

2. **Estados**
   - Estados disabled apropriados
   - Feedback visual consistente
   - Contraste adequado

3. **Usabilidade**
   - Entrada direta de valores
   - Validação de limites
   - Feedback imediato

## Exemplos de Uso

```tsx
// Seletor básico
<QuantitySelector
  value={1}
  onChange={(value) => console.log(`Nova quantidade: ${value}`)}
/>

// Com limites personalizados
<QuantitySelector
  value={5}
  min={2}
  max={10}
  onChange={(value) => handleQuantityChange(value)}
/>

// Em um formulário
<form onSubmit={handleSubmit}>
  <label htmlFor="quantity">Quantidade:</label>
  <QuantitySelector
    value={quantity}
    onChange={setQuantity}
    min={1}
    max={availableStock}
  />
</form>
```

## Boas Práticas

1. **UX/UI**
   - Forneça feedback visual imediato
   - Mantenha consistência nas interações
   - Use limites apropriados ao contexto
   - Indique claramente estados desabilitados

2. **Performance**
   - Evite re-renders desnecessários
   - Valide entrada eficientemente
   - Mantenha transições suaves
   - Otimize para dispositivos móveis

3. **Manutenção**
   - Mantenha validações centralizadas
   - Use tipos explícitos
   - Documente limites e comportamentos
   - Siga padrões do design system

4. **Responsividade**
   - Dimensione para toque em mobile
   - Mantenha interatividade em diferentes telas
   - Adapte espaçamentos conforme necessário
   - Preserve funcionalidade em todos dispositivos

## Componentes Relacionados
- `CartItem`: Item do carrinho com controle de quantidade
- `ProductQuantity`: Seletor de quantidade na página do produto
- `InventoryControl`: Controle de estoque no admin
- `NumberInput`: Input numérico base
- `StockDisplay`: Exibição de disponibilidade de estoque

## Considerações de Implementação

1. **Validação**
   - Sempre valide os limites min/max
   - Trate entrada direta de valores
   - Previna valores inválidos
   - Forneça feedback de erro

2. **Interação**
   - Suporte entrada por teclado
   - Permita incremento/decremento rápido
   - Mantenha feedback consistente
   - Preserve estado durante blur

3. **Estilização**
   - Use variáveis CSS para temas
   - Mantenha consistência visual
   - Adapte para diferentes tamanhos
   - Suporte customização via props

4. **Testes**
   - Teste limites de valores
   - Verifique interações do usuário
   - Valide comportamento em forms
   - Teste diferentes dispositivos
