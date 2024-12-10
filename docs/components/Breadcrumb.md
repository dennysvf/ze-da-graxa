# Breadcrumb

## Descrição
O Breadcrumb é um componente de navegação que mostra a hierarquia e localização atual do usuário dentro da aplicação. Ele permite que os usuários naveguem facilmente para níveis anteriores da hierarquia.

## Localização
`frontend/src/components/Breadcrumb/Breadcrumb.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| items | BreadcrumbItem[] | Sim | Array de itens do breadcrumb |
| separator | ReactNode | Não | Separador entre itens (default: '/') |

### Interface BreadcrumbItem
```typescript
interface BreadcrumbItem {
  id: string;    // Identificador único do item
  label: string; // Texto do item
  href?: string; // Link opcional (se não fornecido, é o item atual)
}
```

## Tokens de Design
- Layout
  - `--breadcrumb-height`: Altura do componente
  - `--breadcrumb-padding`: Espaçamento interno
  - `--breadcrumb-gap`: Espaçamento entre itens
- Cores
  - `--breadcrumb-text`: Cor do texto
  - `--breadcrumb-link`: Cor dos links
  - `--breadcrumb-link-hover`: Cor dos links em hover
  - `--breadcrumb-separator`: Cor do separador
- Tipografia
  - `--breadcrumb-font-size`: Tamanho da fonte
  - `--breadcrumb-font-weight`: Peso da fonte

## Acessibilidade
- Utiliza tag semântica `<nav>` com `aria-label`
- Lista ordenada `<ol>` para estrutura semântica
- Item atual marcado com `aria-current="page"`
- Separadores marcados com `aria-hidden="true"`
- Links com textos descritivos

## Exemplo de Uso
```tsx
import { Breadcrumb } from '@/components/Breadcrumb';

const breadcrumbItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'products', label: 'Produtos', href: '/products' },
  { id: 'category', label: 'Peças de Motor', href: '/products/engine' },
  { id: 'product', label: 'Vela de Ignição' }, // Item atual
];

function ProductPage() {
  return (
    <Breadcrumb 
      items={breadcrumbItems}
      separator=">" // Opcional
    />
  );
}
```

## Estados
1. Link Normal
   - Cor padrão
   - Cursor pointer

2. Link Hover
   - Cor alterada
   - Possível sublinhado

3. Item Atual
   - Sem link
   - Estilo diferenciado
   - Cor diferente

## Boas Práticas
1. Manter labels curtos e descritivos
2. Limitar número de níveis (máximo 4-5)
3. Usar separador visual claro
4. Garantir que todos os links funcionem
5. Manter consistência com a estrutura do site

## Responsividade
1. Desktop
   - Todos os itens visíveis
   - Separadores claros

2. Tablet/Mobile
   - Truncar itens intermediários se necessário
   - Manter primeiro e último item visíveis
   - Considerar usar ellipsis (...) para itens ocultos

## Relacionamentos
- Usado por: Páginas de produto, categoria, etc.
- Relacionado com: NavigationMenu, AppLayout

## Considerações de Performance
- Componente leve
- Sem lógica complexa
- Links podem ser pré-carregados
- Evitar muitos níveis de profundidade
