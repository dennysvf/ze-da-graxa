# Documentação Técnica - Página de Produtos

## 1. Análise Inicial

### 1.1 Seções da Interface
- Header com navegação de categorias
- Visualização principal do produto
  - Imagem em destaque
  - Informações do produto
  - Preço e opções de compra
- Detalhes técnicos do produto
- Produtos similares
- Avaliações e comentários

### 1.2 Hierarquia Visual
1. Imagem do produto (área focal principal)
2. Título e informações essenciais do produto
3. Preço e botões de ação
4. Detalhes técnicos
5. Produtos relacionados
6. Avaliações

## 2. Design Tokens

### 2.1 Cores
- **Primária**: #58D899 (verde botões)
- **Texto**: #616161 (cinza escuro)
- **Backgrounds**:
  - Principal: #FFFFFF (branco)
  - Secundário: #F5F5F5 (cinza claro)
- **Bordas**: #EDEDED (cinza claro)

### 2.2 Tipografia
- **Família**: Inter
- **Pesos**:
  - Regular (400)
  - Semibold (600)
- **Tamanhos**:
  - Título do produto: 25px
  - Subtítulos: 20px
  - Texto padrão: 14px
- **Espaçamento entre letras**: 0.20px

### 2.3 Espaçamentos
- **Padding Container**: 120px (laterais)
- **Gap entre elementos**: 16px
- **Margens internas**: 
  - Componentes: 15px - 25px
  - Seções: 30px - 50px

### 2.4 Efeitos
- **Border Radius**: 5px
- **Sombras**: Não aplicável
- **Bordas**: 1px sólida (#EDEDED)

## 3. Componentes

### 3.1 Navegação de Categorias
```jsx
interface CategoryNavProps {
  categories: string[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => {
  // Implementação
}
```

**Estilo**:
- Altura: 83px
- Borda superior e inferior: 1px #F5FBF3
- Espaçamento entre itens: 50px
- Texto: 14px, Inter Regular

### 3.2 Visualização do Produto
```jsx
interface ProductViewProps {
  images: string[];
  title: string;
  brand: string;
  code: string;
  price: number;
  installments: number;
}

const ProductView: React.FC<ProductViewProps> = ({ /* props */ }) => {
  // Implementação
}
```

**Estilo**:
- Container imagem: 491px x 534px
- Background imagem: #F5F5F5
- Imagem principal: 375px x 423px

### 3.3 Card de Produto Similar
```jsx
interface SimilarProductProps {
  image: string;
  title: string;
  price: number;
  installments: number;
}

const SimilarProductCard: React.FC<SimilarProductProps> = ({ /* props */ }) => {
  // Implementação
}
```

**Estilo**:
- Dimensões: 288px x 562px
- Imagem: 208px x 175px
- Background: #F5F5F5
- Botão: #58D899 (verde)

## 4. Funcionalidades

### 4.1 Interações
- Zoom na imagem do produto
- Troca de imagens na galeria
- Seleção de quantidade
- Adição ao carrinho
- Cálculo de frete
- Favoritar produto

### 4.2 Estados
- **Loading**:
  - Skeleton para imagens
  - Placeholder para textos
- **Erro**:
  - Mensagem amigável
  - Opção de retry
- **Sucesso**:
  - Feedback visual para ações
  - Animações suaves

## 5. Assets

### 5.1 Imagens
- Fotos do produto em alta resolução
- Ícones:
  - Favorito
  - Carrinho
  - Compartilhar
  - Setas de navegação

### 5.2 Ícones
- **Sistema**: Material Icons ou Font Awesome
- **Tamanhos**: 18px - 24px
- **Cores**: #616161

## 6. Acessibilidade

### 6.1 Semântica
- Uso apropriado de headings (h1-h6)
- Landmarks para regiões principais
- Labels descritivos para botões e inputs

### 6.2 ARIA
```html
<button aria-label="Adicionar ao carrinho">
<img alt="Foto principal do produto [nome]">
<div role="region" aria-label="Detalhes do produto">
```

### 6.3 Navegação
- Tab index lógico
- Skip links quando necessário
- Focus visível em todos elementos interativos

## 7. Estrutura React

### 7.1 Componentes
```typescript
src/
  components/
    product/
      ProductView.tsx
      ProductGallery.tsx
      ProductInfo.tsx
      SimilarProducts.tsx
      ProductDetails.tsx
```

### 7.2 Hooks
```typescript
const useProductData = (productId: string) => {
  // Lógica de fetch e estado
}

const useProductGallery = (images: string[]) => {
  // Lógica de controle da galeria
}
```

## 8. Considerações Técnicas

### 8.1 Performance
- Lazy loading para imagens
- Memoização de componentes pesados
- Otimização de imagens
- Cache de dados do produto

### 8.2 SEO
- Meta tags dinâmicas
- Schema.org markup
- URLs amigáveis
- Sitemap atualizado

### 8.3 Testes
```typescript
describe('ProductView', () => {
  it('should render product information correctly')
  it('should handle image gallery navigation')
  it('should calculate installments correctly')
})
```

## 9. Exemplos de Uso

### 9.1 Básico
```jsx
<ProductView 
  productId="123"
  initialImage="product-main.jpg"
/>
```

### 9.2 Completo
```jsx
<ProductView
  productId="123"
  images={['main.jpg', 'detail1.jpg']}
  title="Bomba de Alta Pressão CP3"
  brand="Ford"
  code="AF-0445020175"
  price={1299.90}
  installments={12}
  onAddToCart={(quantity) => {}}
  onFavorite={() => {}}
/>
```
