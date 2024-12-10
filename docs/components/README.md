# Documentação de Componentes

## Visão Geral
Este documento fornece uma visão geral da arquitetura de componentes do projeto Zé da Graxa, detalhando a estrutura, organização e principais padrões utilizados.

## Estrutura de Componentes

### 1. Layout
Componentes que definem a estrutura base das páginas.

- **AppLayout**: Layout base da aplicação
- **Header**: Cabeçalho principal e administrativo
- **Footer**: Rodapé da aplicação
- **Sidebar**: Barras laterais (filtros e admin)

### 2. Navegação
Componentes para navegação e orientação do usuário.

- **NavigationMenu**: Menu principal de navegação
- **Breadcrumb**: Trilha de navegação
- **Pagination**: Paginação de listas e grids

### 3. Produtos
Componentes relacionados à exibição e gerenciamento de produtos.

- **ProductGrid**: Grid responsivo de produtos
- **ProductCard**: Card individual de produto
- **ProductDetails**: Detalhes completos do produto
- **ProductFilters**: Filtros de busca e categorização

### 4. Carrinho
Componentes para gerenciamento do carrinho de compras.

- **CartItem**: Item individual no carrinho
- **CartSummary**: Resumo do carrinho
- **QuantitySelector**: Seletor de quantidade

### 5. Pedidos
Componentes para visualização e gestão de pedidos.

- **OrderCard**: Card de pedido
- **OrderTimeline**: Linha do tempo do pedido
- **OrderDetails**: Detalhes do pedido

### 6. Formulários
Componentes de entrada e interação.

- **Input**: Campo de entrada de texto
- **Select**: Seleção de opções
- **Checkbox**: Caixa de seleção
- **Radio**: Botão de opção
- **Button**: Botão de ação

### 7. Feedback
Componentes para feedback ao usuário.

- **Alert**: Mensagens de alerta
- **Loading**: Indicadores de carregamento
- **Toast**: Notificações temporárias

### 8. Tipografia
Componentes para formatação de texto.

- **Typography**: Componente base para textos
  - Variantes: h1, h2, body1, body2, caption

### 9. Dados (Admin)
Componentes para visualização de dados.

- **StatCard**: Cards de estatísticas
- **DataTable**: Tabela de dados
- **Charts**: Gráficos e visualizações

## Padrões e Boas Práticas

### 1. Estrutura de Arquivos
```
components/
  ├── ComponentName/
  │   ├── ComponentName.tsx
  │   ├── ComponentName.module.scss
  │   ├── index.ts
  │   └── ComponentName.test.tsx
  └── ...
```

### 2. Convenções de Nomenclatura
- **Componentes**: PascalCase (ex: ProductCard)
- **Arquivos**: PascalCase para componentes
- **Estilos**: camelCase para classes
- **Props**: camelCase para props

### 3. Otimizações de Performance
- Lazy loading para componentes pesados
- Memoização de componentes frequentes
- Virtualização para listas longas
- Otimização de imagens e assets

### 4. Acessibilidade
- ARIA labels e roles apropriados
- Suporte a navegação por teclado
- Estados visuais claros
- Mensagens de feedback

### 5. Responsividade
- Design mobile-first
- Breakpoints consistentes
- Layouts adaptativos
- Touch targets adequados

### 6. Design System
- Tokens de design centralizados
- Componentes reutilizáveis
- Consistência visual
- Documentação detalhada

## Áreas da Aplicação

### 1. Área do Cliente
- Landing Page
- Listagem de Produtos
- Carrinho de Compras
- Histórico de Pedidos
- Lista de Favoritos

### 2. Área Administrativa
- Dashboard
- Gestão de Produtos
- Gestão de Pedidos
- Relatórios e Análises

## Dependências Principais

### 1. UI/UX
- React Router para navegação
- SCSS Modules para estilos
- Framer Motion para animações

### 2. Estado
- React Context para estado global
- React Query para cache e dados
- Local Storage para persistência

### 3. Formulários
- React Hook Form para validação
- Yup para schemas
- Masked Input para formatação

### 4. Dados
- Axios para requisições
- React Query para cache
- React Table para tabelas

## Considerações de Desenvolvimento

### 1. Performance
- Code splitting por rota
- Lazy loading de imagens
- Caching apropriado
- Bundle optimization

### 2. Testes
- Jest para testes unitários
- Testing Library para testes de componentes
- Cypress para E2E
- MSW para mocks

### 3. CI/CD
- ESLint para linting
- Prettier para formatação
- Husky para hooks
- GitHub Actions para CI

### 4. Monitoramento
- Error Boundary para erros
- Analytics para uso
- Logging para debug
- Performance metrics

## Próximos Passos
1. Expandir cobertura de testes
2. Melhorar documentação de componentes
3. Implementar mais otimizações de performance
4. Adicionar mais recursos de acessibilidade
