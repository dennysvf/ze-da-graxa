# Padrões de Implementação - Zé da Graxa

## Regras Gerais

### 1. Design System
- Todo componente DEVE seguir o design system documentado em `design-system-documentation.md`
- Tokens de design (cores, tipografia, espaçamentos) DEVEM ser utilizados via variáveis SCSS
- Novos componentes DEVEM ser documentados e adicionados ao design system
- Componentes existentes NÃO DEVEM ser duplicados
- Todas as modificações no design system DEVEM ser documentadas

### 2. Mocks e Dados
- Todos os mocks DEVEM estar no backend 
- Frontend NÃO DEVE conter dados mockados
- Novos mocks DEVEM seguir o padrão TypeScript existente
- Tipos DEVEM ser compartilhados entre frontend e backend

### 3. Documentação
Cada página da aplicação TEM sua documentação em `/docs-do-css` contendo:
- Estrutura de componentes
- Regras de negócio
- Fluxos de usuário
- Requisitos de acessibilidade
- Integrações necessárias

a criacao de uma nova página deve seguir o padrão de documentação descrito em `/docs-do-css/implementation-prompt-template.md`

## Documentação de Páginas

### Páginas Implementadas
1. **Home** (`/docs-do-css/landding-page-detailed.md`)
   - Hero Section
   - Featured Products
   - Categories Grid
   - Benefits Section

2. **Categorias** (`/docs-do-css/categorias-produtos-detailed.md`)
   - Lista de categorias
   - Filtros
   - Navegação

### Páginas Pendentes
1. **Produtos** (`/docs-do-css/produtos/produtos-detailed.md`)
   - Listagem de produtos
   - Filtros
   - Ordenação
   - Paginação

2. **Detalhes do Produto** (`/docs-do-css/produtos/produto-detalhes-detailed.md`)
   - Galeria de imagens
   - Informações do produto
   - Especificações
   - Produtos relacionados

3. **Carrinho** (`/docs-do-css/carrinho/carrinho-detailed.md`)
   - Lista de itens
   - Resumo
   - Ações

4. **Checkout** (`/docs-do-css/sistema-de-checkout/checkout-detailed.md`)
   - Endereço
   - Pagamento
   - Confirmação

5. **Login/Registro** (`/docs-do-css/sistema-de-login-e-registro/auth-detailed.md`)
   - Formulários
   - Validações
   - Recuperação de senha

6. **Perfil** (`/docs-do-css/perfil-do-cliente/perfil-detailed.md`)
   - Dados pessoais
   - Endereços
   - Pedidos
   - Favoritos

7. **Admin** (`/docs-do-css/admin/admin-detailed.md`)
   - Dashboard
   - Gestão de produtos
   - Gestão de pedidos
   - Relatórios

## Processo de Implementação

1. **Antes de Implementar**
   - Verificar documentação da página
   - Identificar componentes necessários
   - Validar design system
   - Confirmar endpoints da API

2. **Durante a Implementação**
   - Seguir padrões de código
   - Usar componentes existentes
   - Manter consistência visual
   - Documentar decisões importantes

3. **Após a Implementação**
   - Atualizar documentação
   - Validar acessibilidade
   - Testar responsividade
   - Verificar performance
