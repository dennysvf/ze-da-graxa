# HeroSection

## Descrição
O HeroSection é o componente principal da página inicial, apresentando uma seção de destaque com título, subtítulo, barra de pesquisa e categorias populares. Ele combina elementos visuais e funcionais para engajar o usuário e facilitar a navegação inicial.

## Localização
`frontend/src/components/HeroSection/HeroSection.tsx`

## Funcionalidades

### Pesquisa
- Barra de pesquisa integrada
- Navegação automática
- Placeholder informativo
- URL encoding

### Categorias
- Tags clicáveis
- Navegação direta
- Categorias populares
- Layout flexível

### Visual
- Imagem de destaque
- Título impactante
- Subtítulo explicativo
- Layout responsivo

## Tokens de Design

### Layout
- `--hero-height`: Altura da seção
- `--content-width`: Largura do conteúdo
- `--image-size`: Tamanho da imagem
- `--spacing`: Espaçamentos internos
- `--gap`: Espaço entre elementos

### Cores
- `--title-color`: Cor do título
- `--subtitle-color`: Cor do subtítulo
- `--tag-bg`: Cor de fundo das tags
- `--tag-text`: Cor do texto das tags
- `--section-bg`: Cor de fundo da seção

### Tipografia
- `--title-size`: Tamanho do título
- `--subtitle-size`: Tamanho do subtítulo
- `--tag-size`: Tamanho das tags
- `--title-weight`: Peso do título
- `--subtitle-weight`: Peso do subtítulo

## Estados

### Default
- Título e subtítulo visíveis
- Imagem carregada
- Tags clicáveis
- Search ativo

### Loading
- Imagem loading
- Skeleton content
- Tags disabled
- Loading states

### Interactive
- Hover em tags
- Focus no search
- Click feedback
- Transições suaves

## Acessibilidade

1. **Semântica**
   - Section tag
   - Heading hierarchy
   - Alt text
   - Button roles

2. **Navegação**
   - Tab order
   - Focus visible
   - Skip links
   - Keyboard nav

3. **Screen Readers**
   - Aria labels
   - Image descriptions
   - Button labels
   - Section context

## Exemplo de Uso
```tsx
import { HeroSection } from '@/components/HeroSection';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
    </main>
  );
}
```

## Boas Práticas

1. **UX/UI**
   - Mensagem clara
   - Call-to-action óbvio
   - Navegação intuitiva
   - Feedback visual

2. **Performance**
   - Imagem otimizada
   - Lazy loading
   - Preload crítico
   - Cache eficiente

3. **SEO**
   - Heading structure
   - Alt texts
   - Meta tags
   - Schema markup

4. **Responsividade**
   - Mobile first
   - Breakpoints
   - Fluid typography
   - Flexible layout

## Relacionamentos
- Contém: SearchInput
- Usado por: HomePage
- Relacionado com: Categories, Navigation

## Considerações Técnicas

1. **Imagens**
   - Otimização
   - Responsividade
   - Art direction
   - Loading strategy

2. **Navegação**
   - Client-side
   - URL params
   - History API
   - Deep linking

3. **Performance**
   - Core Web Vitals
   - LCP optimization
   - CLS prevention
   - FID improvement

4. **SEO**
   - Semantic HTML
   - Meta tags
   - Structured data
   - Open Graph

## Variações de Layout

1. **Desktop**
   - Layout horizontal
   - Large image
   - Expanded content
   - Grid system

2. **Mobile**
   - Layout vertical
   - Stacked content
   - Adapted image
   - Full width

3. **Tablet**
   - Hybrid layout
   - Balanced content
   - Responsive image
   - Touch friendly

## Otimizações

1. **Performance**
   - Next/Image
   - Font loading
   - Asset preload
   - Code splitting

2. **UX**
   - Loading states
   - Animations
   - Transitions
   - Feedback

3. **Analytics**
   - Click tracking
   - Search events
   - Category clicks
   - Engagement

## Marketing

1. **SEO**
   - Title tags
   - Meta description
   - Keywords
   - Rich snippets

2. **Conversão**
   - A/B testing
   - CTAs
   - Value prop
   - User flow

3. **Branding**
   - Visual identity
   - Tone of voice
   - Brand values
   - Consistency

## Manutenção

1. **Código**
   - Clean code
   - TypeScript
   - Comments
   - Tests

2. **Assets**
   - Image versions
   - Asset pipeline
   - CDN config
   - Cache policy

3. **Analytics**
   - Event tracking
   - Error tracking
   - Performance
   - User behavior

## Integrações

1. **Search**
   - Algolia
   - Elasticsearch
   - Autocomplete
   - Filters

2. **Analytics**
   - Google Analytics
   - GTM
   - Custom events
   - Heatmaps

3. **Marketing**
   - A/B platform
   - CMS
   - Personalization
   - Campaign tracking
