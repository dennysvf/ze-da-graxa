# LoadingSpinner

## Descrição
O LoadingSpinner é um componente de feedback visual que indica um estado de carregamento ou processamento. É altamente customizável, oferecendo diferentes tamanhos e cores para se adequar a diversos contextos da aplicação.

## Localização
`frontend/src/components/LoadingSpinner/LoadingSpinner.tsx`

## Props
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| size | 'sm' \| 'md' \| 'lg' | Não | 'md' | Tamanho do spinner |
| color | 'primary' \| 'white' | Não | 'primary' | Cor do spinner |
| className | string | Não | - | Classes CSS adicionais |

## Variações

### Tamanhos
1. **Small (sm)**
   - Uso: Em botões, inputs, componentes pequenos
   - Dimensão: 16px

2. **Medium (md)**
   - Uso: Em cards, seções, componentes médios
   - Dimensão: 24px

3. **Large (lg)**
   - Uso: Em páginas, modais, carregamentos principais
   - Dimensão: 32px

### Cores
1. **Primary**
   - Uso: Em fundos claros
   - Cor: Variável primária do tema

2. **White**
   - Uso: Em fundos escuros
   - Cor: Branco

## Tokens de Design

### Tamanhos
- `--spinner-size-sm`: 16px
- `--spinner-size-md`: 24px
- `--spinner-size-lg`: 32px
- `--spinner-border-width`: 2px

### Cores
- `--spinner-color-primary`: Cor primária
- `--spinner-color-white`: #FFFFFF
- `--spinner-bg-opacity`: 0.2

### Animação
- `--spinner-animation-duration`: 0.8s
- `--spinner-animation-timing`: ease-in-out

## Acessibilidade
1. **ARIA**
   - `role="status"`: Indica elemento de status
   - Texto "Carregando..." oculto visualmente
   - Anúncio para leitores de tela

2. **Visual**
   - Animação suave
   - Contraste adequado
   - Tamanhos perceptíveis

## Exemplo de Uso
```tsx
// Spinner padrão
<LoadingSpinner />

// Spinner pequeno branco
<LoadingSpinner 
  size="sm"
  color="white"
/>

// Spinner grande com classe customizada
<LoadingSpinner
  size="lg"
  className="my-custom-spinner"
/>

// Em um botão
<button disabled>
  <LoadingSpinner size="sm" />
  Carregando...
</button>

// Em uma página
<div className="page-loading">
  <LoadingSpinner size="lg" />
</div>
```

## Boas Práticas

1. **UX/UI**
   - Use tamanhos apropriados ao contexto
   - Mantenha animação suave e não-intrusiva
   - Forneça feedback textual quando apropriado
   - Considere estados de carregamento parcial

2. **Performance**
   - Use CSS para animação
   - Evite animações complexas
   - Minimize reflows
   - Otimize para dispositivos móveis

3. **Acessibilidade**
   - Sempre inclua texto descritivo
   - Mantenha contraste adequado
   - Use ARIA roles apropriados
   - Considere preferências de redução de movimento

4. **Implementação**
   - Mantenha o componente simples
   - Use CSS Modules para isolamento
   - Siga padrões de design system
   - Documente variações

## Relacionamentos
- Usado por: Button, ProductGrid, PageLoader
- Relacionado com: Alert, ErrorBoundary

## Considerações Técnicas

1. **Animação**
   - CSS Animation vs Transform
   - Performance em diferentes browsers
   - Impacto em bateria mobile
   - Preferências de redução de movimento

2. **Responsividade**
   - Tamanhos relativos
   - Adaptação a containers
   - Touch feedback
   - Visibilidade em diferentes viewports

3. **Bundle**
   - Componente leve
   - Sem dependências externas
   - CSS modular
   - Otimização de assets

4. **Manutenção**
   - Props tipadas
   - Estilos encapsulados
   - Documentação clara
   - Testes de regressão visual
