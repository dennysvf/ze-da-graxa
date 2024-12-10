# Alert

O componente Alert é usado para exibir mensagens de feedback, avisos ou informações importantes para o usuário.

## Variantes

- **success**: Feedback positivo, confirmações
- **error**: Erros, problemas críticos
- **warning**: Avisos, alertas
- **info**: Informações gerais

## Tamanhos

- **sm**: Alertas compactos
- **md**: Tamanho padrão
- **lg**: Alertas com mais destaque

## Props

```typescript
interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  title?: string
  description?: string
  icon?: ReactNode
  closable?: boolean
  onClose?: () => void
  className?: string
  children?: ReactNode
}
```

## Exemplo de Uso

```tsx
import { Alert } from './Alert'

function Example() {
  return (
    <div>
      {/* Alerta básico */}
      <Alert variant="info" title="Informação">
        Esta é uma mensagem informativa.
      </Alert>

      {/* Alerta com título e descrição */}
      <Alert
        variant="success"
        title="Pedido realizado"
        description="Seu pedido foi realizado com sucesso e será entregue em breve."
      />

      {/* Alerta com botão de fechar */}
      <Alert
        variant="warning"
        title="Atenção"
        description="Seu carrinho está prestes a expirar."
        closable
        onClose={() => console.log('Alert fechado')}
      />

      {/* Alerta com ícone personalizado */}
      <Alert
        variant="error"
        title="Erro"
        description="Não foi possível processar sua solicitação."
        icon={<CustomIcon />}
      />
    </div>
  )
}
```

## Tokens de Design

O componente Alert utiliza os seguintes tokens:

### Cores
- `--success`: Verde para feedbacks positivos
- `--error`: Vermelho para erros
- `--warning`: Laranja para avisos
- `--info`: Azul para informações

### Tipografia
- `--font-family-primary`: Font family principal
- `--font-size-xs`: 12px (sm)
- `--font-size-sm`: 14px (md)
- `--font-size-base`: 16px (lg)
- `--font-weight-semibold`: 600 (título)

### Espaçamento
- `--spacing-unit`: 4px
- `--spacing-xs`: 8px
- `--spacing-sm`: 16px
- `--spacing-md`: 24px
- `--spacing-lg`: 32px

### Bordas
- `--radius-md`: Border radius médio

### Transições
- `--transition-fast`: 150ms
- `--transition-normal`: 250ms

## Acessibilidade

- Utiliza o atributo `role="alert"` para screen readers
- Cores seguem contraste WCAG 2.1
- Botão de fechar tem aria-label
- Ícones são decorativos (aria-hidden)

## Responsividade

O componente se adapta automaticamente à largura do container pai. Em telas menores:
- Mantém a legibilidade do texto
- Preserva espaçamentos proporcionais
- Adapta tamanho do ícone
