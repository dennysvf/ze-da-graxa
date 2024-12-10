# Header

## Descrição
O Header é o componente de cabeçalho principal da aplicação, contendo a navegação principal, logo, carrinho de compras e menu do usuário. Ele fornece acesso rápido às principais funcionalidades do sistema.

## Localização
`frontend/src/components/Header/Header.tsx`

## Estado
O componente gerencia os seguintes estados:
- `isDropdownOpen`: Controla a visibilidade do menu dropdown do usuário
- `isAuthenticated`: Estado global da autenticação (via useAuthStore)
- `user`: Dados do usuário autenticado (via useAuthStore)
- `cart`: Estado do carrinho de compras (via useCartStore)

## Funcionalidades
1. **Navegação Principal**
   - Link para Produtos
   - Link para Serviços
   - Link para Sobre
   - Link para Contato

2. **Carrinho de Compras**
   - Exibe contador de itens
   - Link direto para página do carrinho

3. **Menu do Usuário**
   - Exibe nome do usuário quando autenticado
   - Dropdown com opções:
     - Meu Perfil
     - Meus Pedidos
     - Sair
   - Link de "Entrar" quando não autenticado

## Tokens de Design
- Layout
  - `--header-height`: Altura do cabeçalho
  - `--header-padding`: Espaçamento interno
- Cores
  - `--header-bg`: Cor de fundo
  - `--header-text`: Cor do texto
  - `--header-link`: Cor dos links
  - `--header-link-hover`: Cor dos links em hover

## Acessibilidade
- Utiliza tag semântica `<header>`
- Links com textos descritivos
- Menu dropdown acessível via teclado
- Contraste adequado entre texto e fundo

## Exemplo de Uso
```tsx
import { Header } from '@/components/Header';

function AppLayout() {
  return (
    <div>
      <Header />
      {/* resto do conteúdo */}
    </div>
  );
}
```

## Dependências
- React Router Dom para navegação
- Zustand para gerenciamento de estado (auth e cart stores)

## Boas Práticas
1. Manter o menu do usuário focado em ações relacionadas ao perfil
2. Garantir que o carrinho seja sempre visível e atualizado
3. Manter a navegação principal simples e direta
4. Usar ícones com textos alternativos adequados

## Relacionamentos
- Usado por: AppLayout
- Depende de: AuthStore, CartStore
- Relacionado com: CartItem, UserProfile

## Variações de Estado
1. Usuário não autenticado
   - Mostra link "Entrar"
   - Esconde menu do usuário
2. Usuário autenticado
   - Mostra nome do usuário
   - Exibe menu dropdown com opções
3. Carrinho
   - Vazio: apenas ícone
   - Com itens: ícone + contador
