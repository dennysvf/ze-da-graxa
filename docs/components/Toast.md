# Toast

## Descrição
O Toast é um componente de feedback não-intrusivo que exibe mensagens temporárias ao usuário. Suporta diferentes tipos de notificações, com ícones e estilos apropriados para cada contexto.

## Localização
`frontend/src/components/Toast/Toast.tsx`

## Props
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| id | string | Sim | - | Identificador único do toast |
| type | ToastType | Sim | - | Tipo da notificação |
| title | string | Não | - | Título opcional |
| message | string | Sim | - | Mensagem principal |
| duration | number | Não | 5000 | Duração em ms |
| onClose | (id: string) => void | Sim | - | Callback ao fechar |

### ToastType
```typescript
type ToastType = 'success' | 'error' | 'warning' | 'info'
```

## Tipos de Toast

### Success
- Cor: Verde
- Ícone: Check
- Uso: Ações completadas com sucesso

### Error
- Cor: Vermelho
- Ícone: X
- Uso: Erros e falhas

### Warning
- Cor: Amarelo
- Ícone: Exclamação
- Uso: Alertas e avisos

### Info
- Cor: Azul
- Ícone: Info
- Uso: Informações gerais

## Tokens de Design

### Layout
- `--toast-padding`: Espaçamento interno
- `--toast-margin`: Margem entre toasts
- `--toast-border-radius`: Arredondamento
- `--toast-min-width`: Largura mínima

### Cores
- `--toast-success-bg`: Fundo success
- `--toast-error-bg`: Fundo error
- `--toast-warning-bg`: Fundo warning
- `--toast-info-bg`: Fundo info

### Tipografia
- `--toast-title-size`: Tamanho do título
- `--toast-message-size`: Tamanho da mensagem
- `--toast-font-weight`: Peso da fonte

### Animação
- `--toast-animation-duration`: Duração
- `--toast-animation-timing`: Timing function

## Acessibilidade

1. **ARIA**
   - `role="alert"`: Indica notificação importante
   - Botão de fechar com aria-label
   - Anúncio automático por leitores

2. **Interação**
   - Fechamento automático
   - Botão de fechar visível
   - Feedback visual claro

3. **Visual**
   - Contraste adequado
   - Ícones significativos
   - Estados visíveis

## Exemplo de Uso
```tsx
import { Toast } from '@/components/Toast';

function App() {
  const handleClose = (id: string) => {
    // Lógica de remover toast
  };

  return (
    <Toast
      id="1"
      type="success"
      title="Sucesso!"
      message="Operação realizada com sucesso"
      duration={3000}
      onClose={handleClose}
    />
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Limite o número de toasts visíveis
   - Use duração apropriada ao contexto
   - Mantenha mensagens concisas
   - Posicione em local não-intrusivo

2. **Performance**
   - Use Portal para renderização
   - Limpe timeouts ao desmontar
   - Gerencie fila de toasts
   - Anime com CSS

3. **Acessibilidade**
   - Forneça contexto claro
   - Permita interação por teclado
   - Mantenha tempo suficiente
   - Use cores semânticas

4. **Implementação**
   - Use sistema de fila
   - Gerencie estado global
   - Implemente z-index adequado
   - Considere viewport

## Relacionamentos
- Usado por: Toda a aplicação
- Relacionado com: Alert, ErrorBoundary
- Gerenciado por: ToastProvider

## Considerações Técnicas

1. **Portal**
   - Renderização fora do DOM principal
   - Gestão de z-index
   - Limpeza ao desmontar
   - Posicionamento absoluto

2. **Animação**
   - Entrada suave
   - Saída com fade
   - Performance em lista
   - Gestão de timeouts

3. **Estado**
   - Fila de toasts
   - Limite máximo
   - Prioridade
   - Persistência

4. **Mobile**
   - Posicionamento adaptativo
   - Touch targets
   - Viewport awareness
   - Gestos de dismiss

## Variações de Layout

1. **Desktop**
   - Canto superior direito
   - Empilhamento vertical
   - Largura fixa
   - Margem do viewport

2. **Mobile**
   - Parte inferior
   - Largura total
   - Margem reduzida
   - Touch friendly
