# Mapeamento API x Interface

## 1. ÁREA DO CLIENTE

### 1.1 Landing Page
- **APIs Utilizadas**:
  - `GET /api/products` (produtos em destaque)
  - `GET /api/categories` (menu de categorias)
  - `POST /api/cart/items` (adicionar ao carrinho)
  - `POST /api/favorites/:productId` (adicionar aos favoritos)

### 1.2 Produtos
- **APIs Utilizadas**:
  - `GET /api/products` (listagem com filtros)
  - `GET /api/products/:id` (detalhes)
  - `GET /api/categories` (filtro por categoria)
  - `POST /api/cart/items` (adicionar ao carrinho)
  - `POST /api/favorites/:productId` (adicionar aos favoritos)

### 1.3 Carrinho
- **APIs Utilizadas**:
  - `GET /api/cart` (carregar carrinho)
  - `PUT /api/cart/items/:id` (atualizar quantidade)
  - `DELETE /api/cart/items/:id` (remover item)
  - `GET /api/shipping/calculate` (cálculo de frete)
  - `POST /api/checkout` (finalizar compra)

### 1.4 Pedidos
- **APIs Utilizadas**:
  - `GET /api/orders` (listagem)
  - `GET /api/orders/:id` (detalhes)
  - `GET /api/orders/:id/tracking` (rastreamento)

### 1.5 Favoritos
- **APIs Utilizadas**:
  - `GET /api/favorites` (listagem)
  - `DELETE /api/favorites/:productId` (remover)
  - `POST /api/cart/items` (mover para carrinho)

### 1.6 Perfil
- **APIs Utilizadas**:
  - `GET /api/profile` (dados do perfil)
  - `PUT /api/profile` (atualizar dados)
  - `GET /api/addresses` (endereços)
  - `POST /api/addresses` (novo endereço)
  - `PUT /api/addresses/:id` (editar endereço)
  - `DELETE /api/addresses/:id` (remover endereço)

## 2. ÁREA ADMINISTRATIVA

### 2.1 Dashboard
- **APIs Utilizadas**:
  - `GET /api/admin/dashboard` (métricas)
  - `GET /api/admin/reports/sales` (gráficos de vendas)
  - `GET /api/admin/reports/products` (produtos mais vendidos)
  - `GET /api/admin/reports/customers` (novos clientes)

### 2.2 Produtos
- **APIs Utilizadas**:
  - `GET /api/admin/products` (listagem)
  - `POST /api/admin/products` (criar)
  - `PUT /api/admin/products/:id` (editar)
  - `DELETE /api/admin/products/:id` (remover)
  - `POST /api/admin/products/import` (importar)
  - `GET /api/admin/products/export` (exportar)

### 2.3 Clientes
- **APIs Utilizadas**:
  - `GET /api/admin/customers` (listagem)
  - `GET /api/admin/customers/:id` (detalhes)
  - `GET /api/admin/customers/:id/orders` (pedidos)
  - `PUT /api/admin/customers/:id` (editar)
  - `POST /api/admin/customers/export` (exportar)

### 2.4 Pedidos
- **APIs Utilizadas**:
  - `GET /api/admin/orders` (listagem)
  - `GET /api/admin/orders/:id` (detalhes)
  - `PUT /api/admin/orders/:id/status` (atualizar status)
  - `POST /api/admin/orders/:id/refund` (reembolso)
  - `POST /api/admin/orders/export` (exportar)

### 2.5 Configurações
- **APIs Utilizadas**:
  - `GET /api/admin/settings` (carregar)
  - `PUT /api/admin/settings` (salvar)
  - `POST /api/admin/settings/backup` (backup)
  - `POST /api/admin/settings/restore` (restaurar)

## 3. INTEGRAÇÕES EXTERNAS

### 3.1 Pagamento
- Gateway de Pagamento
  - Webhook: `POST /api/webhooks/payment`
  - Notificações por email
  - Atualização de status do pedido

### 3.2 Frete
- Correios/Transportadoras
  - Webhook: `POST /api/webhooks/shipping`
  - Rastreamento automático
  - Atualização de status de entrega

### 3.3 Email
- Serviço de Email
  - Confirmação de pedido
  - Status de entrega
  - Recuperação de senha
  - Marketing (opcional)

## 4. FLUXOS PRINCIPAIS

### 4.1 Fluxo de Compra
1. Adicionar ao carrinho (`POST /api/cart/items`)
2. Atualizar carrinho (`PUT /api/cart/items/:id`)
3. Calcular frete (`GET /api/shipping/calculate`)
4. Iniciar checkout (`POST /api/checkout`)
5. Processar pagamento (Gateway)
6. Confirmar pedido (Webhook)
7. Enviar email (Serviço de Email)

### 4.2 Fluxo de Entrega
1. Pedido confirmado
2. Gerar etiqueta (`POST /api/admin/orders/:id/label`)
3. Atualizar rastreamento (Webhook)
4. Notificar cliente (Email)
5. Confirmar entrega (Webhook)

### 4.3 Fluxo de Devolução
1. Solicitar devolução (`POST /api/orders/:id/return`)
2. Aprovar devolução (Admin)
3. Gerar etiqueta de retorno
4. Processar reembolso
5. Atualizar estoque

## 5. CONSIDERAÇÕES DE IMPLEMENTAÇÃO

### 5.1 Cache
- Redis para:
  - Carrinho
  - Sessões
  - Produtos populares
  - Configurações

### 5.2 Filas
- Processamento assíncrono para:
  - Emails
  - Relatórios
  - Importação/Exportação
  - Webhooks

### 5.3 Real-time
- WebSocket para:
  - Status de pedido
  - Notificações admin
  - Chat de suporte (futuro)

### 5.4 Storage
- CDN/S3 para:
  - Imagens de produtos
  - Documentos
  - Backups
  - Relatórios
