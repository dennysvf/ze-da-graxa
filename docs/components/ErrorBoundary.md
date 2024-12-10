# ErrorBoundary

## Descrição
O ErrorBoundary é um componente de classe React que captura erros de JavaScript em qualquer lugar na árvore de componentes filhos, registra esses erros e exibe uma UI de fallback em vez de travar a aplicação.

## Localização
`frontend/src/components/ErrorBoundary/ErrorBoundary.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| children | ReactNode | Sim | Componentes filhos a serem renderizados |
| fallback | ReactNode | Não | UI alternativa customizada para erro |
| onError | (error: Error, errorInfo: ErrorInfo) => void | Não | Callback chamado quando ocorre um erro |

## Estado Interno
```typescript
interface State {
  hasError: boolean;  // Indica se um erro foi capturado
  error: Error | null;  // O erro capturado, se houver
}
```

## Métodos do Ciclo de Vida

### getDerivedStateFromError
- Captura erros durante a renderização
- Atualiza o estado para indicar erro
- Retorna novo estado
- Método estático

### componentDidCatch
- Captura erros em métodos do ciclo de vida
- Registra erros no console
- Chama callback onError se fornecido
- Ideal para logging

## UI de Fallback

### Default
- Ícone de alerta
- Título informativo
- Mensagem amigável
- Botão de retry
- Stack trace (dev only)

### Custom
- Via prop fallback
- Completamente customizável
- Mantém contexto
- Preserva estado

## Tokens de Design

### Layout
- `--container-padding`: Espaçamento do container
- `--content-gap`: Espaço entre elementos
- `--icon-size`: Tamanho do ícone
- `--button-padding`: Padding do botão

### Cores
- `--error-bg`: Cor de fundo
- `--error-text`: Cor do texto
- `--icon-color`: Cor do ícone
- `--button-bg`: Cor do botão
- `--button-text`: Cor do texto do botão

### Tipografia
- `--title-size`: Tamanho do título
- `--message-size`: Tamanho da mensagem
- `--button-text-size`: Tamanho do texto do botão
- `--stack-size`: Tamanho do stack trace

## Acessibilidade

1. **Semântica**
   - Role alert
   - ARIA labels
   - Focus management
   - Keyboard navigation

2. **Visual**
   - Contraste adequado
   - Ícones claros
   - Texto legível
   - Estados visíveis

3. **Interação**
   - Botão focável
   - Mensagens claras
   - Ações óbvias
   - Feedback adequado

## Exemplo de Uso
```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

function App() {
  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    // Enviar erro para serviço de monitoramento
    logErrorToService(error, errorInfo);
  };

  return (
    <ErrorBoundary
      onError={handleError}
      fallback={<CustomErrorPage />}
    >
      <MainApp />
    </ErrorBoundary>
  );
}

// Uso com múltiplos boundaries
function ComplexApp() {
  return (
    <ErrorBoundary>
      <Header />
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  );
}
```

## Boas Práticas

1. **Granularidade**
   - Múltiplos boundaries
   - Isolamento de erros
   - Recovery points
   - Contexto mantido

2. **Error Handling**
   - Logging adequado
   - Error tracking
   - Recovery options
   - User feedback

3. **Performance**
   - Lightweight fallback
   - Minimal state
   - Efficient recovery
   - Clean cleanup

4. **UX**
   - Mensagens claras
   - Ações óbvias
   - Recovery fácil
   - Contexto preservado

## Relacionamentos
- Envolve: Qualquer componente
- Relacionado com: ErrorPage, Toast

## Considerações Técnicas

1. **Error Types**
   - Runtime errors
   - Render errors
   - Async errors
   - Event errors

2. **Recovery**
   - State reset
   - Props reset
   - Cache clear
   - Reload options

3. **Logging**
   - Error details
   - Component stack
   - User context
   - Environment

4. **Development**
   - Dev tools
   - Stack traces
   - Hot reload
   - Debug info

## Variações de Layout

1. **Full Page**
   - Erro crítico
   - Mensagem completa
   - Ações múltiplas
   - Branding

2. **Inline**
   - Erro local
   - Mensagem compacta
   - Ação única
   - Contextual

3. **Modal**
   - Erro modal
   - Blocking UI
   - Focused action
   - Overlay

## Otimizações

1. **Performance**
   - Lazy fallback
   - Minimal state
   - Clean recovery
   - Efficient logging

2. **UX**
   - Clear messages
   - Quick recovery
   - Context retention
   - User guidance

3. **Monitoring**
   - Error tracking
   - User impact
   - Recovery rate
   - Pattern analysis

## Integração

1. **Error Tracking**
   - Sentry
   - LogRocket
   - Analytics
   - Monitoring

2. **Recovery**
   - Cache reset
   - State reset
   - Re-fetch
   - Cleanup

3. **Feedback**
   - User messaging
   - Status updates
   - Recovery options
   - Help resources
