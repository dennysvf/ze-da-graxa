# OrderCard

## Descrição
O OrderCard é um componente que exibe informações detalhadas de um pedido, incluindo número do pedido, data, status, itens, frete e total. Ele é usado principalmente na listagem de pedidos e na página de detalhes do pedido.

## Localização
`frontend/src/components/OrderCard/OrderCard.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| order | Order | Sim | Dados completos do pedido |
| showDetails | boolean | Não | Controla a exibição do botão "Ver Detalhes" (default: true) |

### Interface Order
```typescript
interface Order {
  id: string;
  createdAt: Date;
  items: OrderItem[];
  timeline: OrderEvent[];
  shipping: {
    name: string;
    price: number;
  };
  total: number;
}

interface OrderItem {
  id: string;
  name: string;
  images: string[];
  price: number;
  quantity: number;
}

interface OrderEvent {
  status: OrderStatus;
  date: Date;
  description: string;
}
```

## Seções

### Cabeçalho
- Número do pedido (últimos 6 dígitos)
- Data de criação formatada
- Botão "Ver Detalhes" (opcional)

### Timeline
- Exibe o progresso do pedido
- Integração com OrderTimeline
- Status atual em destaque

### Lista de Itens
- Imagem do produto
- Nome com link
- Quantidade
- Preço total do item

### Rodapé
- Informações do frete
- Total do pedido
- Preços formatados

## Tokens de Design

### Layout
- `--card-padding`: Espaçamento interno
- `--card-gap`: Espaçamento entre seções
- `--card-radius`: Arredondamento
- `--item-spacing`: Espaço entre itens

### Cores
- `--card-bg`: Cor de fundo
- `--card-border`: Cor da borda
- `--text-primary`: Texto principal
- `--text-secondary`: Texto secundário
- `--link-color`: Cor dos links

### Tipografia
- `--title-size`: Tamanho do título
- `--date-size`: Tamanho da data
- `--item-name-size`: Tamanho do nome do item
- `--price-size`: Tamanho dos preços

## Estados

### Normal
- Todas informações visíveis
- Links interativos
- Imagens carregadas

### Loading
- Skeleton loader
- Placeholders
- Animações suaves

### Erro
- Fallback de imagem
- Mensagem de erro
- Retry options

## Acessibilidade

1. **Semântica**
   - Tag article para o card
   - Cabeçalhos hierárquicos
   - Links descritivos
   - Data com tag time

2. **Navegação**
   - Links focáveis
   - Ordem de tabulação
   - Âncoras semânticas
   - Roles ARIA

3. **Visual**
   - Contraste adequado
   - Tamanhos legíveis
   - Estados visíveis
   - Espaçamento adequado

## Exemplo de Uso
```tsx
import { OrderCard } from '@/components/OrderCard';

function OrdersPage() {
  return (
    <div className="orders-list">
      {orders.map(order => (
        <OrderCard
          key={order.id}
          order={order}
          showDetails={true}
        />
      ))}
    </div>
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Informações claras
   - Hierarquia visual
   - Links óbvios
   - Feedback visual

2. **Performance**
   - Lazy loading de imagens
   - Memoização quando necessário
   - Otimização de re-renders
   - Cache de dados

3. **Manutenção**
   - Código modular
   - Props tipadas
   - Funções utilitárias
   - Constantes extraídas

4. **Responsividade**
   - Layout adaptativo
   - Imagens responsivas
   - Touch targets
   - Breakpoints

## Relacionamentos
- Contém: OrderTimeline, PriceDisplay
- Usado por: OrderList, OrderDetails
- Relacionado com: OrderStatus, OrderFilters

## Considerações Técnicas

1. **Formatação**
   - Datas localizadas
   - Números formatados
   - IDs truncados
   - Textos limitados

2. **Imagens**
   - Lazy loading
   - Fallbacks
   - Alt texts
   - Otimização

3. **Links**
   - Rotas dinâmicas
   - Estado preservado
   - Navegação limpa
   - SEO friendly

4. **Estado**
   - Props imutáveis
   - Dados consistentes
   - Cache eficiente
   - Updates otimizados

## Variações de Layout

1. **Desktop**
   - Layout horizontal
   - Informações expandidas
   - Imagens maiores
   - Mais detalhes

2. **Mobile**
   - Layout vertical
   - Informações condensadas
   - Imagens menores
   - Scroll vertical

3. **Tablet**
   - Layout híbrido
   - Informações balanceadas
   - Grid adaptativo
   - Touch friendly
