# Plano de Implementação V2 - Zé da Graxa

## Padrões e Documentação

Toda implementação DEVE seguir os padrões definidos em:
- `design-system-documentation.md`: Design System e componentes
- `implementation-standards.md`: Regras de implementação e documentação

### Regras Principais:
1. Todo mock DEVE estar no backend
2. Todo componente DEVE seguir o design system
3. Toda página DEVE ter documentação detalhada
4. Código duplicado NÃO DEVE existir

## FASE 0: ESTRUTURA BASE (1-2 semanas)

### 0.1 Backend (3-5 dias)
```bash
backend/
  ├── src/
  │   ├── controllers/      # Controladores da API
  │   ├── models/          # Modelos do banco de dados
  │   ├── services/        # Lógica de negócio
  │   ├── routes/          # Rotas da API
  │   ├── middlewares/     # Middlewares
  │   ├── config/          # Configurações
  │   ├── utils/           # Utilitários
  │   └── types/           # Tipos TypeScript
  ├── tests/               # Testes
  ├── prisma/              # Schema do banco
  ├── package.json
  └── tsconfig.json
```

#### Stack Backend
- Node.js + Express
- TypeScript
- Prisma (ORM)
- PostgreSQL
- Jest (testes)
- JWT (autenticação)

#### APIs Principais
1. **Autenticação**
   - Login
   - Registro
   - Recuperação de senha

2. **Produtos**
   - CRUD produtos
   - Categorias
   - Busca e filtros

3. **Pedidos**
   - Criação
   - Processamento
   - Status

4. **Usuários**
   - Perfil
   - Endereços
   - Favoritos

5. **Admin**
   - Dashboard
   - Relatórios
   - Configurações

### 0.2 Frontend (3-5 dias)
```bash
frontend/
  ├── src/
  │   ├── components/     # Componentes React
  │   │   ├── ui/        # Componentes base (Button, Input, etc)
  │   │   └── shared/    # Componentes compartilhados
  │   ├── pages/         # Páginas da aplicação
  │   ├── hooks/         # Custom hooks
  │   ├── contexts/      # Contextos React
  │   ├── services/      # Serviços de API
  │   ├── styles/        # Estilos globais
  │   │   ├── tokens/    # Design tokens (cores, espaçamentos, etc)
  │   │   ├── mixins/    # Mixins SCSS
  │   │   └── globals/   # Estilos globais
  │   ├── types/         # Tipos TypeScript
  │   └── utils/         # Utilitários
  ├── public/            # Assets estáticos
  ├── tests/             # Testes
  ├── package.json
  └── tsconfig.json
```

#### Stack Frontend
- Vite + React
- TypeScript
- CSS Modules + SASS
- React Query
- Zustand (estado global)
- Jest + Testing Library
- Storybook

#### Design System
1. **Tokens**
   ```scss
   // styles/tokens/_colors.scss
   $colors: (
     'primary': (
       50: #f5f8ff,
       100: #ebf1ff,
       // ...
     ),
     'neutral': (
       50: #f9fafb,
       100: #f3f4f6,
       // ...
     ),
     // ...
   );

   // styles/tokens/_spacing.scss
   $spacing: (
     1: 0.25rem,  // 4px
     2: 0.5rem,   // 8px
     3: 0.75rem,  // 12px
     4: 1rem,     // 16px
     // ...
   );

   // styles/tokens/_typography.scss
   $font-sizes: (
     'xs': 0.75rem,
     'sm': 0.875rem,
     'base': 1rem,
     'lg': 1.125rem,
     // ...
   );
   ```

2. **Mixins**
   ```scss
   // styles/mixins/_typography.scss
   @mixin heading-1 {
     font-size: map-get($font-sizes, '3xl');
     font-weight: 700;
     line-height: 1.2;
   }

   // styles/mixins/_responsive.scss
   @mixin mobile {
     @media (max-width: 768px) { @content; }
   }
   ```

#### Estrutura de Rotas
1. **Cliente**
   ```
   /                   # Landing
   /produtos           # Listagem
   /produtos/[id]      # Detalhes
   /carrinho           # Carrinho
   /checkout           # Checkout
   /perfil             # Área do cliente
   /perfil/pedidos     # Pedidos
   /perfil/favoritos   # Favoritos
   ```

2. **Admin**
   ```
   /admin              # Dashboard
   /admin/produtos     # Gestão de produtos
   /admin/pedidos      # Gestão de pedidos
   /admin/usuarios     # Gestão de usuários
   /admin/relatorios   # Relatórios
   ```

## FASE 1: IMPLEMENTAÇÃO DOS COMPONENTES BASE (1-2 semanas)

### 1.1 Design System Base
1. **Tokens**
   - Cores
   - Tipografia
   - Espaçamentos
   - Sombras
   - Breakpoints

2. **Componentes Base**
   - Button
   - Input
   - Select
   - Checkbox
   - Radio
   - Card
   - Modal
   - Alert
   - Toast

3. **Layouts**
   - Grid
   - Container
   - Stack
   - Flex

### 1.2 Componentes de Negócio
1. **Produto**
   - ProductCard
   - ProductGrid
   - ProductDetails
   - ProductImages
   - ProductFilters
   - ProductSort

2. **Carrinho**
   - CartItem
   - CartSummary
   - CartDrawer

3. **Checkout**
   - AddressForm
   - PaymentForm
   - OrderSummary
   - ShippingOptions

4. **Usuário**
   - UserProfile
   - AddressList
   - OrderHistory
   - FavoritesList

5. **Admin**
   - DataTable
   - Charts
   - StatusBadge
   - FileUpload

## FASE 2: IMPLEMENTAÇÃO DAS PÁGINAS (2-3 semanas)

### 2.1 Páginas Públicas
1. **Home**
   - Hero Section
   - Featured Products
   - Categories Grid
   - Benefits Section
   - Newsletter

2. **Listagem de Produtos**
   - Filtros
   - Ordenação
   - Grid de produtos
   - Paginação
   - Breadcrumb

3. **Detalhes do Produto**
   - Galeria de imagens
   - Informações
   - Especificações
   - Produtos relacionados
   - Reviews

4. **Carrinho**
   - Lista de itens
   - Resumo
   - Cupom
   - Cálculo de frete

5. **Checkout**
   - Endereço
   - Pagamento
   - Confirmação

### 2.2 Área do Cliente
1. **Login/Registro**
   - Formulários
   - Validação
   - Recuperação de senha

2. **Perfil**
   - Dados pessoais
   - Endereços
   - Pedidos
   - Favoritos

### 2.3 Área Admin
1. **Dashboard**
   - KPIs
   - Gráficos
   - Últimos pedidos
   - Alertas

2. **Gestão**
   - Produtos
   - Pedidos
   - Usuários
   - Configurações

## FASE 3: INTEGRAÇÃO E TESTES (1-2 semanas)

### 3.1 Integração
1. **API**
   - Endpoints
   - Autenticação
   - Cache
   - Upload de arquivos

2. **Banco de Dados**
   - Migrations
   - Seeds
   - Backup

### 3.2 Testes
1. **Frontend**
   - Unitários
   - Integração
   - E2E

2. **Backend**
   - Unitários
   - Integração
   - Stress

### 3.3 Deploy
1. **Ambiente de Staging**
   - Frontend
   - Backend
   - Banco de dados

2. **Ambiente de Produção**
   - Frontend
   - Backend
   - Banco de dados
   - CDN
   - SSL
