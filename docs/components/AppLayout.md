# AppLayout

## Descrição
O AppLayout é o componente principal de layout que envolve toda a aplicação. Ele fornece a estrutura básica para todas as páginas, incluindo o Header, Footer e o conteúdo principal.

## Localização
`frontend/src/layouts/AppLayout/AppLayout.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| children | ReactNode | Sim | Conteúdo a ser renderizado dentro do layout |

## Estrutura
O AppLayout é composto por:
- Header: Navegação principal e funcionalidades globais
- Main: Área de conteúdo principal
- Footer: Informações institucionais e links secundários

## Tokens de Design
- Layout
  - `--layout-max-width`: Largura máxima do conteúdo
  - `--layout-padding`: Espaçamento interno padrão
  - `--layout-gap`: Espaçamento entre elementos principais

## Acessibilidade
- Utiliza landmarks semânticos (`<header>`, `<main>`, `<footer>`)
- Garante uma estrutura de navegação consistente
- Mantém uma hierarquia clara de cabeçalhos

## Exemplo de Uso
```tsx
import { AppLayout } from '@/layouts/AppLayout';

function App() {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
}
```

## Boas Práticas
1. Mantenha o AppLayout focado apenas na estrutura principal
2. Evite adicionar lógica de negócio neste componente
3. Use os tokens de design para manter consistência visual
4. Garanta que o layout seja responsivo para todos os tamanhos de tela

## Relacionamentos
- Contém: Header, Footer
- Usado por: App.tsx
