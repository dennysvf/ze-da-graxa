# Modal

## Descrição
O Modal é um componente de diálogo que aparece em primeiro plano, bloqueando a interação com o resto da aplicação até que seja fechado. É usado para focar a atenção do usuário em uma ação específica ou exibir conteúdo importante.

## Localização
`frontend/src/components/Modal/Modal.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| isOpen | boolean | Sim | Controla a visibilidade do modal |
| onClose | () => void | Sim | Função chamada ao fechar o modal |
| title | string | Não | Título opcional do modal |
| children | ReactNode | Sim | Conteúdo do modal |

## Comportamento

### Abertura
- Renderiza via Portal no fim do body
- Bloqueia scroll da página
- Foca primeiro elemento interativo
- Animação de fade in

### Fechamento
- Clique no overlay fecha o modal
- Botão de fechar no header
- Tecla ESC fecha o modal
- Animação de fade out
- Restaura scroll da página

## Tokens de Design

### Layout
- `--modal-padding`: Espaçamento interno
- `--modal-border-radius`: Arredondamento
- `--modal-max-width`: Largura máxima
- `--modal-min-width`: Largura mínima

### Cores
- `--modal-bg`: Cor de fundo do modal
- `--modal-overlay`: Cor do overlay
- `--modal-border`: Cor da borda
- `--modal-shadow`: Sombra do modal

### Tipografia
- `--modal-title-size`: Tamanho do título
- `--modal-title-weight`: Peso da fonte do título
- `--modal-content-size`: Tamanho do conteúdo

### Animação
- `--modal-animation-duration`: Duração
- `--modal-animation-timing`: Timing function

## Acessibilidade

1. **ARIA**
   - `role="dialog"`
   - `aria-modal="true"`
   - `aria-labelledby` para título
   - `aria-describedby` para conteúdo

2. **Foco**
   - Trap focus dentro do modal
   - Restaura foco ao fechar
   - Ordem de tabulação lógica
   - Foco inicial automático

3. **Teclado**
   - ESC fecha o modal
   - Tab navega elementos
   - Enter/Space ativa botões
   - Sem escape do modal

## Exemplo de Uso
```tsx
import { Modal } from '@/components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmação"
      >
        <p>Tem certeza que deseja continuar?</p>
        <div className="actions">
          <button onClick={() => setIsOpen(false)}>
            Cancelar
          </button>
          <button onClick={handleConfirm}>
            Confirmar
          </button>
        </div>
      </Modal>
    </>
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Mantenha conteúdo conciso
   - Use títulos descritivos
   - Forneça ações claras
   - Mantenha hierarquia visual

2. **Performance**
   - Use Portal para renderização
   - Evite modais aninhados
   - Limpe listeners ao fechar
   - Gerencie scroll com cuidado

3. **Acessibilidade**
   - Mantenha foco gerenciado
   - Use semântica correta
   - Forneça alternativas de fechamento
   - Mantenha contraste adequado

4. **Responsividade**
   - Adapte tamanho ao viewport
   - Considere mobile first
   - Mantenha padding responsivo
   - Ajuste interações touch

## Relacionamentos
- Usado por: Toda a aplicação
- Relacionado com: Alert, Toast
- Contém: Qualquer conteúdo React

## Considerações Técnicas

1. **Portal**
   - Renderização fora da hierarquia
   - Gestão de eventos
   - Z-index adequado
   - Limpeza ao desmontar

2. **Scroll**
   - Bloqueio do body
   - Scroll interno quando necessário
   - Restauração do estado
   - Prevenção de jump

3. **Foco**
   - Focus trap
   - Restauração
   - Ordem lógica
   - Estados do teclado

4. **Animação**
   - Entrada/saída suave
   - Performance CSS
   - Hardware acceleration
   - Fallbacks adequados

## Variações de Layout

1. **Desktop**
   - Centralizado
   - Largura máxima
   - Padding adequado
   - Overlay com blur

2. **Mobile**
   - Full screen opcional
   - Bottom sheet opcional
   - Touch friendly
   - Safe areas
