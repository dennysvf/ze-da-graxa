# CartItem

## Descrição
O componente CartItem é responsável por exibir um item do carrinho de compras, oferecendo uma interface rica e interativa para visualização e manipulação dos produtos selecionados. Ele inclui funcionalidades como alteração de quantidade, remoção do item, exibição de status de estoque e navegação para detalhes do produto.

## Localização
`src/components/Cart/CartItem/CartItem.tsx`

## Propriedades
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| item | CartProduct | sim | - | Item do carrinho contendo informações do produto |
| onQuantityChange | (productId: string, quantity: number) => void | sim | - | Callback chamado quando a quantidade é alterada |
| onRemove | (productId: string) => void | sim | - | Callback chamado quando o item é removido |
| className | string | não | - | Classe CSS adicional |

## Interface CartProduct
```typescript
interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  images: string[];
  category: {
    name: string;
    slug: string;
  };
}
```

## Tokens de Design

### Cores
- `--color-background`: Cor de fundo do item
- `--color-background-alt`: Cor de fundo alternativa para imagem
- `--color-border`: Cor da borda do item
- `--color-border-hover`: Cor da borda no hover
- `--color-text-primary`: Cor do texto principal
- `--color-text-secondary`: Cor do texto secundário
- `--color-primary`: Cor de destaque para interações
- `--color-error`: Cor para estados de erro
- `--color-error-light`: Cor de fundo para estados de erro
- `--color-warning`: Cor para estados de aviso
- `--color-warning-light`: Cor de fundo para estados de aviso

### Tipografia
- `--font-size-sm`: Tamanho de texto pequeno
- `--font-size-lg`: Tamanho de texto grande
- `--font-weight-bold`: Peso da fonte em negrito

### Espaçamento
- `--spacing-1`: Espaçamento extra pequeno (4px)
- `--spacing-2`: Espaçamento pequeno (8px)
- `--spacing-3`: Espaçamento médio (12px)
- `--spacing-4`: Espaçamento grande (16px)

### Efeitos
- `--border-radius-sm`: Borda arredondada pequena
- `--border-radius-md`: Borda arredondada média
- `--border-radius-lg`: Borda arredondada grande
- `--shadow-sm`: Sombra sutil para hover

## Variações

### Produto Normal
- Exibição padrão com todas as funcionalidades
- Controles de quantidade habilitados
- Preço e total calculados normalmente

### Produto Indisponível
- Visual desabilitado
- Controles de quantidade bloqueados
- Mensagem de indisponibilidade
- Opção de remoção disponível

### Produto com Estoque Baixo
- Alerta visual de quantidade limitada
- Controles de quantidade com máximo limitado
- Mensagem informativa sobre estoque

## Comportamento

### Interações
1. **Alteração de Quantidade**
   - Cliques nos botões +/-
   - Input direto de quantidade
   - Validação de estoque
   - Feedback visual imediato

2. **Remoção do Item**
   - Confirmação antes de remover
   - Animação de saída
   - Feedback de sucesso

3. **Navegação**
   - Link para detalhes do produto
   - Link para categoria
   - Preservação do estado do carrinho

### Estados
1. **Default**
   - Informações básicas visíveis
   - Controles habilitados
   - Links interativos

2. **Hover**
   - Sombra no container
   - Escala na imagem
   - Destaque nos links

3. **Focus**
   - Outline nos controles
   - Alto contraste
   - Indicadores visuais

## Acessibilidade

### Semântica
- [ ] Uso de tags semânticas (article, h3)
- [ ] Links descritivos
- [ ] Alt text em imagens
- [ ] ARIA labels apropriados

### Navegação
- [ ] Ordem de tabulação lógica
- [ ] Foco visível
- [ ] Atalhos de teclado
- [ ] Estados disabled corretos

### Screen Readers
- [ ] Textos alternativos
- [ ] Anúncios de mudanças
- [ ] Descrições de ações
- [ ] Feedback de erros

## Exemplos de Uso

```tsx
// Exemplo básico
<CartItem
  item={{
    id: "1",
    name: "Produto Exemplo",
    price: 99.90,
    quantity: 1,
    stock: 10,
    images: ["/images/produto.jpg"],
    category: {
      name: "Categoria",
      slug: "categoria"
    }
  }}
  onQuantityChange={(id, qty) => console.log(id, qty)}
  onRemove={(id) => console.log(id)}
/>

// Com estoque baixo
<CartItem
  item={{
    ...produto,
    stock: 2,
    quantity: 1
  }}
  onQuantityChange={handleQuantityChange}
  onRemove={handleRemove}
/>

// Produto indisponível
<CartItem
  item={{
    ...produto,
    stock: 0
  }}
  onQuantityChange={handleQuantityChange}
  onRemove={handleRemove}
/>
```

## Considerações

### Performance
- Otimização de imagens
- Minimização de reflows
- Lazy loading apropriado
- Gestão eficiente de estados

### Manutenção
- Código modular
- Testes unitários
- Documentação atualizada
- Versionamento semântico

### Segurança
- Validação de inputs
- Sanitização de dados
- Prevenção de XSS
- Rate limiting em ações
