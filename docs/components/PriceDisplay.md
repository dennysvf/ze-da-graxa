# PriceDisplay

## Descrição
O componente PriceDisplay é responsável por exibir valores monetários de forma formatada e consistente em toda a aplicação. Ele utiliza a API Intl.NumberFormat para garantir a formatação correta de acordo com o locale do usuário, com suporte a diferentes tamanhos e opções de exibição.

## Propriedades
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| value | number | sim | - | Valor monetário a ser exibido |
| size | 'small' \| 'medium' \| 'large' | não | 'medium' | Tamanho do texto |
| showCurrency | boolean | não | true | Se deve exibir o símbolo da moeda |

## Tokens de Design

### Cores
- `$text-primary`: Cor do texto do preço

### Tipografia
- `$font-family-primary`: Fonte do preço
- `$font-size-body`: Tamanho para variante small
- `$font-size-large`: Tamanho para variante medium
- `$font-size-xlarge`: Tamanho para variante large
- `$font-weight-bold`: Peso da fonte

## Variantes de Tamanho

### Small
- Uso: Preços secundários, unitários
- Font-size: $font-size-body
- Contexto: Listas, detalhes

### Medium
- Uso: Preços padrão
- Font-size: $font-size-large
- Contexto: Cards, resumos

### Large
- Uso: Preços em destaque
- Font-size: $font-size-xlarge
- Contexto: Headers, CTAs

## Formatação

### Padrão (showCurrency: true)
- Formato: R$ X.XXX,XX
- Locale: pt-BR
- Símbolo: R$
- Separador decimal: vírgula
- Separador de milhar: ponto

### Sem Moeda (showCurrency: false)
- Formato: X.XXX,XX
- Sempre 2 casas decimais
- Mantém separadores

## Acessibilidade

1. **Semântica**
   - Uso de tag span
   - Valores legíveis por leitores de tela
   - Formatação consistente

2. **Visual**
   - Contraste adequado
   - Tamanhos legíveis
   - Hierarquia clara

## Exemplos de Uso

```tsx
// Preço padrão
<PriceDisplay 
  value={99.90} 
/>

// Preço pequeno sem moeda
<PriceDisplay 
  value={29.90}
  size="small"
  showCurrency={false}
/>

// Preço em destaque
<PriceDisplay 
  value={1299.90}
  size="large"
/>

// Em um produto
<ProductCard>
  <ProductTitle>Produto Exemplo</ProductTitle>
  <PriceDisplay 
    value={product.price}
    size="medium"
  />
</ProductCard>

// Preço unitário
<CartItem>
  <span>Valor unitário: </span>
  <PriceDisplay 
    value={item.price}
    size="small"
    showCurrency={true}
  />
</CartItem>
```

## Boas Práticas

1. **Formatação**
   - Use Intl.NumberFormat para internacionalização
   - Mantenha precisão decimal
   - Trate valores nulos/indefinidos
   - Valide entrada numérica

2. **Performance**
   - Memoize formatação quando necessário
   - Evite re-renders desnecessários
   - Cache resultados frequentes
   - Otimize para listas longas

3. **Manutenção**
   - Centralize lógica de formatação
   - Documente casos especiais
   - Use constantes para configuração
   - Mantenha consistência

4. **Usabilidade**
   - Mantenha alinhamento consistente
   - Use espaçamento adequado
   - Preserve hierarquia visual
   - Adapte para diferentes contextos

## Componentes Relacionados
- `ProductPrice`: Preço em cards de produto
- `CartItemPrice`: Preço em itens do carrinho
- `OrderTotal`: Total do pedido
- `DiscountPrice`: Preço com desconto
- `InstallmentPrice`: Preço parcelado

## Considerações de Implementação

1. **Internacionalização**
   - Suporte diferentes locales
   - Mantenha formatação consistente
   - Trate diferentes moedas
   - Valide formatos regionais

2. **Validação**
   - Trate valores negativos
   - Valide precisão decimal
   - Lide com valores zerados
   - Previna erros de arredondamento

3. **Estilização**
   - Use variáveis CSS
   - Mantenha responsividade
   - Suporte temas escuros
   - Permita customização

4. **Testes**
   - Teste diferentes valores
   - Verifique formatação
   - Valide props
   - Teste performance
