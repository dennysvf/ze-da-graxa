# Estrutura do Projeto - Zé da Graxa E-commerce

## 1. Visão Geral
E-commerce especializado em peças automotivas com funcionalidades específicas para clientes PF e PJ, incluindo um sistema de crédito interno.

## 2. Estrutura de Diretórios

```
ze-da-graxa/
├── frontend/              # Aplicação frontend
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── layouts/      # Layouts base da aplicação
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── services/     # Serviços e APIs
│   │   ├── stores/       # Gerenciamento de estado
│   │   ├── styles/       # Estilos globais
│   │   ├── types/        # Tipos TypeScript
│   │   ├── utils/        # Funções utilitárias
│   │   ├── hooks/        # Custom hooks
│   │   └── assets/       # Recursos estáticos
│   │
│   ├── public/           # Arquivos públicos
│   └── package.json      # Dependências frontend
│
├── backend/              # Aplicação backend
│
├── docs/                 # Documentação
│   ├── components/       # Docs de componentes
│   └── interface/        # Docs de interface
│
└── package.json         # Dependências do projeto
```

## 3. Diretórios Principais

### 3.1 Components (/frontend/src/components)
Componentes React reutilizáveis organizados por domínio:
- **Cart/**: Componentes do carrinho de compras
- **Product/**: Cards e detalhes de produtos
- **Form/**: Inputs, selects e controles de formulário
- **Layout/**: Headers, footers e navegação
- **UI/**: Componentes base como Button, Input, Modal

### 3.2 Layouts (/frontend/src/layouts)
Estruturas base para diferentes tipos de páginas:
- **AppLayout/**: Layout principal com header e footer
- **AuthLayout/**: Layout para páginas de autenticação
- **AdminLayout/**: Layout para área administrativa

### 3.3 Pages (/frontend/src/pages)
Páginas da aplicação organizadas por rota:
- **Home/**: Página inicial
- **Products/**: Listagem de produtos
- **Cart/**: Carrinho de compras
- **Checkout/**: Processo de compra
- **Account/**: Área do cliente

### 3.4 Services (/frontend/src/services)
Integrações com APIs e serviços externos:
- **api/**: Configuração do axios
- **auth/**: Autenticação
- **products/**: Endpoints de produtos
- **orders/**: Endpoints de pedidos

### 3.5 Stores (/frontend/src/stores)
Gerenciamento de estado global:
- **cart/**: Estado do carrinho
- **auth/**: Estado de autenticação

### 3.6 Styles (/frontend/src/styles)
Estilos globais e tokens de design:
- **tokens/**: Design tokens (cores, tipografia)
- **globals/**: Estilos globais
- **mixins/**: Mixins SCSS reutilizáveis

### 3.7 Types (/frontend/src/types)
Definições de tipos TypeScript:
- **product.ts**: Tipos relacionados a produtos
- **user.ts**: Tipos de usuário
- **cart.ts**: Tipos do carrinho
- **order.ts**: Tipos de pedidos

## 4. Documentação

### 4.1 Componentes (/docs/components)
Documentação detalhada de cada componente:
- Propriedades
- Exemplos de uso
- Variações
- Acessibilidade

### 4.2 Interface (/docs/interface)
Documentação da interface do usuário:
- Design tokens
- Padrões de layout
- Guias de estilo

## 5. Convenções

### 5.1 Nomenclatura
- **Componentes**: PascalCase (ProductCard.tsx)
- **Hooks**: camelCase com prefixo use (useCart.ts)
- **Serviços**: camelCase (productService.ts)
- **Tipos**: PascalCase (ProductType.ts)
- **Estilos**: kebab-case para classes CSS

### 5.2 Organização de Arquivos
- Cada componente em sua própria pasta
- Index.tsx para exportação principal
- Styles.module.scss para estilos
- Types.ts para tipos locais

### 5.3 Imports
- Paths absolutos usando @/
- Agrupamento por tipo de import
- Ordem: React, libs, componentes, utils

## 6. Scripts Principais

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx",
    "test": "jest",
    "preview": "vite preview"
  }
}
```

## 7. Dependências Principais

- **React**: Framework UI
- **TypeScript**: Tipagem estática
- **Vite**: Build tool
- **SCSS**: Estilização
- **Axios**: Requisições HTTP
- **React Router**: Roteamento
- **Jest**: Testes unitários
