# Footer

## Descrição
O Footer é o componente de rodapé da aplicação que fornece informações institucionais, links úteis, informações de contato e links para redes sociais. Ele aparece na parte inferior de todas as páginas.

## Localização
`frontend/src/components/Footer/Footer.tsx`

## Seções
1. **Sobre Nós**
   - Breve descrição da empresa
   - Proposta de valor

2. **Links Rápidos**
   - Produtos
   - Serviços
   - Sobre
   - Contato

3. **Contato**
   - Endereço
   - Telefone
   - Email

4. **Redes Sociais**
   - Facebook
   - Instagram
   - Twitter

## Tokens de Design
- Layout
  - `--footer-padding`: Espaçamento interno
  - `--footer-grid-gap`: Espaçamento entre seções
- Cores
  - `--footer-bg`: Cor de fundo
  - `--footer-text`: Cor do texto
  - `--footer-link`: Cor dos links
  - `--footer-link-hover`: Cor dos links em hover
- Tipografia
  - `--footer-heading-size`: Tamanho dos títulos
  - `--footer-text-size`: Tamanho do texto

## Acessibilidade
- Utiliza tag semântica `<footer>`
- Links com textos descritivos
- Estrutura hierárquica com headings
- Links externos com atributos de segurança
- Alto contraste entre texto e fundo

## Exemplo de Uso
```tsx
import { Footer } from '@/components/Footer';

function AppLayout() {
  return (
    <div>
      {/* conteúdo principal */}
      <Footer />
    </div>
  );
}
```

## Boas Práticas
1. Manter informações de contato atualizadas
2. Garantir que todos os links externos abram em nova aba
3. Usar atributos de segurança (noopener, noreferrer) em links externos
4. Atualizar o ano do copyright automaticamente

## Estrutura do Grid
- Layout responsivo em grid
- 4 colunas em desktop
- 2 colunas em tablet
- 1 coluna em mobile

## Relacionamentos
- Usado por: AppLayout
- Relacionado com: NavigationMenu (links compartilhados)

## Variações
1. Desktop
   - Grid de 4 colunas
   - Todos os elementos visíveis
2. Tablet
   - Grid de 2 colunas
   - Elementos reorganizados
3. Mobile
   - Layout em coluna única
   - Elementos empilhados

## Considerações de Performance
- Ícones de redes sociais podem ser SVGs inline
- Links podem ser pré-carregados
- Copyright atualizado via JavaScript
