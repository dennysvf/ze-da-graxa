# OrderList

## Descrição
O OrderList é um componente que gerencia a exibição de uma lista de pedidos, incluindo estados de carregamento e lista vazia. Ele utiliza o OrderCard para renderizar cada pedido individualmente.

## Localização
`frontend/src/components/OrderList/OrderList.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| orders | Order[] | Sim | Array de pedidos a serem exibidos |
| loading | boolean | Não | Estado de carregamento (default: false) |
| emptyMessage | string | Não | Mensagem quando não há pedidos (default: 'Nenhum pedido encontrado') |

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
```

## Estados

### Loading
- Spinner de carregamento
- Mensagem de feedback
- Animação suave
- Layout centralizado

### Lista Vazia
- Mensagem customizável
- Layout centralizado
- Estilo distintivo
- Feedback claro

### Lista com Pedidos
- Grid responsivo
- Espaçamento adequado
- Ordenação cronológica
- Scroll infinito (opcional)

## Tokens de Design

### Layout
- `--list-gap`: Espaçamento entre cards
- `--list-padding`: Padding da lista
- `--empty-spacing`: Espaço para mensagem vazia
- `--loading-spacing`: Espaço para loading

### Cores
- `--list-bg`: Cor de fundo
- `--empty-text`: Cor do texto vazio
- `--loading-text`: Cor do texto loading
- `--spinner-color`: Cor do spinner

### Tipografia
- `--message-size`: Tamanho das mensagens
- `--message-weight`: Peso das mensagens
- `--loading-size`: Tamanho do texto loading

## Acessibilidade

1. **Semântica**
   - Lista semântica
   - Roles apropriados
   - Estados ARIA
   - Mensagens claras

2. **Loading**
   - Aria-busy
   - Role status
   - Feedback sonoro
   - Progress indicator

3. **Vazio**
   - Role status
   - Live region
   - Mensagem clara
   - Feedback apropriado

## Exemplo de Uso
```tsx
import { OrderList } from '@/components/OrderList';

function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <OrderList
      orders={orders}
      loading={loading}
      emptyMessage="Você ainda não fez nenhum pedido"
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Feedback imediato
   - Estados claros
   - Transições suaves
   - Layout consistente

2. **Performance**
   - Virtualização para listas grandes
   - Lazy loading
   - Memoização de cards
   - Paginação eficiente

3. **Manutenção**
   - Props tipadas
   - Estados isolados
   - Lógica modular
   - Reutilização

4. **Responsividade**
   - Grid adaptativo
   - Breakpoints
   - Mobile first
   - Touch friendly

## Relacionamentos
- Contém: OrderCard
- Usado por: OrdersPage, AccountPage
- Relacionado com: OrderFilters, Pagination

## Considerações Técnicas

1. **Performance**
   - Virtualização
   - Paginação
   - Infinite scroll
   - Cache

2. **Estado**
   - Loading state
   - Empty state
   - Error state
   - Data sync

3. **Dados**
   - Ordenação
   - Filtros
   - Busca
   - Refresh

4. **Layout**
   - Grid system
   - Responsividade
   - Spacing
   - Alignment

## Variações de Layout

1. **Desktop**
   - Grid multi-coluna
   - Cards maiores
   - Mais informações
   - Scroll vertical

2. **Mobile**
   - Lista única
   - Cards compactos
   - Informações essenciais
   - Scroll vertical

3. **Tablet**
   - Grid adaptativo
   - Cards médios
   - Informações balanceadas
   - Touch optimized

## Otimizações

1. **Performance**
   - React.memo para cards
   - useCallback em handlers
   - Lazy loading de imagens
   - Virtualização de lista

2. **UX**
   - Skeleton loading
   - Pull to refresh
   - Infinite scroll
   - Smooth transitions

3. **Dados**
   - Cache local
   - Prefetch
   - Optimistic updates
   - Error boundaries
