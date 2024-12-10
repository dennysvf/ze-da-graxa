# DateRangePicker

## Descrição
O DateRangePicker é um componente que permite a seleção de um intervalo de datas através de dois inputs de data nativos. O componente gerencia automaticamente as restrições de datas mínimas e máximas entre os campos.

## Localização
`frontend/src/components/DateRangePicker/DateRangePicker.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| startDate | Date \| null | Sim | Data inicial selecionada |
| endDate | Date \| null | Sim | Data final selecionada |
| onStartDateChange | (date: Date \| null) => void | Sim | Callback de mudança da data inicial |
| onEndDateChange | (date: Date \| null) => void | Sim | Callback de mudança da data final |
| className | string | Não | Classe CSS adicional |

## Funcionalidades

### Validação de Datas
- Data final não pode ser anterior à inicial
- Data inicial não pode ser posterior à final
- Validação automática via atributos min/max
- Formatação consistente

### Formatação
- Formato ISO para inputs
- Suporte a localização
- Parsing robusto
- Handling de null

### Interação
- Seleção via calendário nativo
- Input manual permitido
- Clear implícito (input vazio)
- Feedback visual

## Tokens de Design

### Layout
- `--wrapper-gap`: Espaço entre campos
- `--field-gap`: Espaço entre label e input
- `--input-height`: Altura dos inputs
- `--input-padding`: Padding dos inputs

### Cores
- `--input-border`: Cor da borda
- `--input-bg`: Cor de fundo
- `--label-color`: Cor dos labels
- `--input-focus`: Cor de foco
- `--input-hover`: Cor de hover

### Tipografia
- `--label-size`: Tamanho dos labels
- `--input-size`: Tamanho do texto
- `--label-weight`: Peso dos labels
- `--input-font`: Fonte dos inputs

## Estados

### Normal
- Inputs habilitados
- Labels visíveis
- Valores formatados
- Restrições ativas

### Focus
- Highlight visual
- Calendário aberto
- Feedback tátil
- Ring de foco

### Disabled (opcional)
- Visual esmaecido
- Não interativo
- Valores preservados
- Cursor apropriado

## Acessibilidade

1. **Semântica**
   - Labels associados
   - Inputs nativos
   - IDs únicos
   - Roles corretos

2. **Navegação**
   - Tab order lógico
   - Focus management
   - Keyboard friendly
   - ARIA labels

3. **Screen Readers**
   - Descrições claras
   - Estados anunciados
   - Erros comunicados
   - Contexto mantido

## Exemplo de Uso
```tsx
import { DateRangePicker } from '@/components/DateRangePicker';

function OrderFilters() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      className="order-filters"
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Feedback imediato
   - Validação clara
   - Interface nativa
   - Estados óbvios

2. **Performance**
   - Parsing eficiente
   - Formatação otimizada
   - Memoização quando necessário
   - Renders minimizados

3. **Manutenção**
   - Código limpo
   - Tipos definidos
   - Funções puras
   - Responsabilidades claras

4. **Validação**
   - Datas válidas
   - Ranges lógicos
   - Feedback de erro
   - Estados consistentes

## Relacionamentos
- Usado por: OrderFilters, ReportGenerator
- Relacionado com: Calendar, DateInput

## Considerações Técnicas

1. **Data**
   - Timezone handling
   - ISO format
   - Locale support
   - Parse/Format

2. **Validação**
   - Range logic
   - Date bounds
   - Input format
   - Error states

3. **Browser**
   - Input type="date"
   - Native picker
   - Fallbacks
   - Polyfills

4. **Estado**
   - Controlled inputs
   - Null handling
   - Change events
   - Sync state

## Variações de Layout

1. **Desktop**
   - Layout horizontal
   - Native picker
   - Hover states
   - Tooltips

2. **Mobile**
   - Layout vertical
   - Touch friendly
   - Native picker
   - Full width

3. **Tablet**
   - Layout responsivo
   - Touch/Mouse
   - Adaptative UI
   - Native support

## Otimizações

1. **Performance**
   - Memo wrapper
   - Callback cache
   - Event throttle
   - Format cache

2. **UX**
   - Clear button
   - Presets
   - Quick select
   - Range preview

3. **Validação**
   - Range check
   - Format check
   - Bounds check
   - Error display

## Internacionalização

1. **Datas**
   - Locale format
   - RTL support
   - Custom format
   - Timezone

2. **Labels**
   - Translations
   - RTL layout
   - Cultural norms
   - Date patterns

3. **Formatos**
   - Input format
   - Display format
   - Parse rules
   - Validation
