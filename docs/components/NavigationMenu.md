# NavigationMenu

## Descrição
O NavigationMenu é um componente flexível de navegação que pode ser usado tanto na horizontal quanto na vertical. Suporta ícones, estados ativos e é totalmente customizável através de props.

## Localização
`frontend/src/components/NavigationMenu/NavigationMenu.tsx`

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| items | MenuItem[] | Sim | Array de itens do menu |
| orientation | 'horizontal' \| 'vertical' | Sim | Orientação do menu |
| activeItem | string | Não | ID do item ativo |
| onItemClick | (item: MenuItem) => void | Sim | Função chamada ao clicar em um item |

### Interface MenuItem
```typescript
interface MenuItem {
  id: string;      // Identificador único do item
  label: string;   // Texto do item
  href?: string;   // Link opcional
  icon?: ReactNode; // Ícone opcional
}
```

## Tokens de Design
- Layout
  - `--menu-padding`: Espaçamento interno
  - `--menu-gap`: Espaçamento entre itens
  - `--menu-item-height`: Altura dos itens
- Cores
  - `--menu-bg`: Cor de fundo
  - `--menu-text`: Cor do texto
  - `--menu-active-bg`: Cor de fundo do item ativo
  - `--menu-active-text`: Cor do texto do item ativo
  - `--menu-hover-bg`: Cor de fundo no hover
- Ícones
  - `--menu-icon-size`: Tamanho dos ícones
  - `--menu-icon-gap`: Espaçamento entre ícone e texto

## Acessibilidade
- Utiliza tag semântica `<nav>`
- Botões com textos descritivos
- Suporte a navegação por teclado
- Estados ativos claramente indicados
- Contraste adequado entre texto e fundo

## Exemplo de Uso
```tsx
import { NavigationMenu } from '@/components/NavigationMenu';

const menuItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'products', label: 'Produtos', icon: '🛍️' },
  { id: 'services', label: 'Serviços', icon: '🔧' },
];

function Sidebar() {
  const handleItemClick = (item: MenuItem) => {
    // Lógica de navegação
  };

  return (
    <NavigationMenu
      items={menuItems}
      orientation="vertical"
      activeItem="home"
      onItemClick={handleItemClick}
    />
  );
}
```

## Variações
1. Horizontal
   - Ideal para headers
   - Itens alinhados em linha
   - Responsivo com scroll horizontal em telas pequenas

2. Vertical
   - Ideal para sidebars
   - Itens empilhados
   - Melhor visualização de múltiplos itens

## Estados
1. Normal
   - Cor de fundo padrão
   - Texto padrão

2. Hover
   - Cor de fundo alterada
   - Possível animação suave

3. Ativo
   - Destaque visual
   - Indicador de seleção
   - Cor de texto diferenciada

## Boas Práticas
1. Manter labels curtos e descritivos
2. Usar ícones consistentes
3. Limitar número de itens para melhor usabilidade
4. Garantir feedback visual adequado
5. Manter hierarquia visual clara

## Relacionamentos
- Usado por: Header, Sidebar
- Relacionado com: AppLayout

## Considerações de Performance
- Ícones devem ser otimizados (SVG ou fonte de ícones)
- Evitar re-renders desnecessários
- Usar memo para itens estáticos
- Transições CSS para melhor performance
