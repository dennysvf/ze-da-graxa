# OrderTimeline

## Descrição
O OrderTimeline é um componente que exibe a progressão de status de um pedido em formato de linha do tempo vertical. Cada evento é representado por um ícone, descrição e data/hora, conectados por uma linha visual.

## Localização
`frontend/src/components/OrderTimeline/OrderTimeline.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| timeline | OrderTimelineType[] | Sim | Array de eventos do pedido |

### Interface OrderTimelineType
```typescript
interface OrderTimelineType {
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: Date;
  description: string;
}
```

## Status e Ícones
| Status | Ícone | Descrição |
|--------|-------|-----------|
| pending | ⏳ | Pedido pendente |
| confirmed | ✅ | Pedido confirmado |
| processing | 🔧 | Em processamento |
| shipped | 📦 | Enviado |
| delivered | 🎉 | Entregue |
| cancelled | ❌ | Cancelado |

## Tokens de Design

### Layout
- `--timeline-gap`: Espaço entre eventos
- `--line-width`: Espessura da linha
- `--icon-size`: Tamanho dos ícones
- `--content-spacing`: Espaço entre ícone e conteúdo

### Cores
- `--line-color`: Cor da linha conectora
- `--icon-bg`: Cor de fundo do ícone
- `--current-color`: Cor do status atual
- `--text-primary`: Cor do texto principal
- `--text-secondary`: Cor do texto secundário

### Tipografia
- `--status-size`: Tamanho do texto de status
- `--date-size`: Tamanho da data
- `--icon-font`: Fonte dos ícones
- `--description-size`: Tamanho da descrição

## Estados

### Normal
- Eventos em sequência
- Linhas conectoras
- Ícones padrão
- Datas formatadas

### Current
- Último evento destacado
- Sem linha conectora
- Estilo diferenciado
- Feedback visual

### Interativo (opcional)
- Hover states
- Tooltips
- Expandir detalhes
- Animações

## Acessibilidade

1. **Semântica**
   - Lista ordenada
   - Roles ARIA
   - Tags time
   - Landmarks

2. **Visual**
   - Contraste adequado
   - Ícones significativos
   - Estados visíveis
   - Hierarquia clara

3. **Screen Readers**
   - Descrições ARIA
   - Status atual
   - Ordem lógica
   - Labels claros

## Exemplo de Uso
```tsx
import { OrderTimeline } from '@/components/OrderTimeline';

function OrderDetails() {
  const timeline = [
    {
      status: 'confirmed',
      date: new Date('2024-01-15T10:30:00'),
      description: 'Pedido confirmado'
    },
    {
      status: 'processing',
      date: new Date('2024-01-15T14:45:00'),
      description: 'Em preparação'
    }
  ];

  return <OrderTimeline timeline={timeline} />;
}
```

## Boas Práticas

1. **UX/UI**
   - Feedback visual claro
   - Progressão lógica
   - Datas legíveis
   - Ícones intuitivos

2. **Performance**
   - Memoização de eventos
   - Formatação eficiente
   - Ícones otimizados
   - Renderização eficiente

3. **Manutenção**
   - Status enumerados
   - Funções utilitárias
   - Constantes extraídas
   - Tipos definidos

4. **Internacionalização**
   - Datas localizadas
   - Textos traduzíveis
   - RTL suporte
   - Formatos flexíveis

## Relacionamentos
- Usado por: OrderCard, OrderDetails
- Relacionado com: OrderStatus, OrderProgress

## Considerações Técnicas

1. **Formatação**
   - Datas localizadas
   - Timezone handling
   - Status mapping
   - Descrições dinâmicas

2. **Layout**
   - Linha conectora
   - Posicionamento
   - Responsividade
   - Overflow

3. **Animações**
   - Transições suaves
   - Progress indicators
   - Status updates
   - Hover effects

4. **Estado**
   - Status atual
   - Histórico
   - Updates
   - Validações

## Variações de Layout

1. **Desktop**
   - Layout vertical
   - Espaçamento amplo
   - Informações detalhadas
   - Hover interactions

2. **Mobile**
   - Layout compacto
   - Scroll vertical
   - Touch targets
   - Informações essenciais

3. **Horizontal (opcional)**
   - Layout horizontal
   - Scroll horizontal
   - Stepper style
   - Compact view

## Otimizações

1. **Performance**
   - Memo para eventos
   - Cache de formatação
   - Lazy icons
   - Efficient updates

2. **UX**
   - Smooth transitions
   - Loading states
   - Error handling
   - Interactive feedback

3. **Acessibilidade**
   - High contrast
   - Keyboard navigation
   - Screen reader
   - Focus management
