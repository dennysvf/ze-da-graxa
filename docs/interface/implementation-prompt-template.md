# Template de Prompt para Implementação de Interfaces

Este documento fornece um template estruturado para solicitar a implementação de interfaces baseadas na documentação do sistema.

## Prompt Base

```
Preciso que você crie a implementação da [NOME_DA_INTERFACE] do Zé da Graxa, seguindo exatamente as especificações do arquivo de documentação em [CAMINHO_DO_ARQUIVO_DE_DOCUMENTACAO].

Por favor:
1. Crie os arquivos HTML e CSS necessários
2. Use os design tokens especificados (cores, fontes, espaçamentos)
3. Implemente todos os componentes descritos na documentação
4. Garanta que a interface seja responsiva conforme as breakpoints definidos
5. Implemente os estados e interações documentados
6. Siga as diretrizes de acessibilidade mencionadas
7. Otimize o código seguindo as considerações de performance listadas

A implementação deve ser moderna e utilizar:
- HTML5 semântico
- CSS moderno (Flexbox/Grid)
- Design responsivo
- Boas práticas de acessibilidade
- JavaScript para interatividade (opcional: framework de sua preferência)

Importante manter a consistência visual com o resto do sistema, usando os tokens de design especificados.
```

## Exemplos de Uso

### Para Página de Produtos
```
Preciso que você crie a implementação da página de produtos do Zé da Graxa, seguindo exatamente as especificações do arquivo de documentação em docs-do-css/produtos/produtos-detailed.md.
[... resto do template ...]
```

### Para Carrinho/Checkout
```
Preciso que você crie a implementação da página do carrinho de compras e checkout do Zé da Graxa, seguindo exatamente as especificações do arquivo de documentação em docs-do-css/carrinho-checkout/carrinho-checkout-detailed.md.
[... resto do template ...]
```

## Parâmetros Adicionais (Opcionais)

Você pode adicionar parâmetros específicos dependendo da necessidade:

### Para Frameworks Específicos
```
Utilize [NOME_DO_FRAMEWORK] para a implementação, seguindo as melhores práticas do framework.
```

### Para Integrações
```
Implemente as integrações com:
- [API/SERVIÇO_1]
- [API/SERVIÇO_2]
Seguindo a documentação de integração disponível em [CAMINHO_DA_DOC_DE_INTEGRACAO].
```

### Para Testes
```
Inclua testes:
- Unitários para componentes
- E2E para fluxos críticos
- Testes de acessibilidade
- Testes de performance
```

## Observações

1. Sempre especifique o caminho exato do arquivo de documentação
2. Ajuste os parâmetros adicionais conforme necessidade específica da interface
3. Mantenha a consistência com o design system existente
4. Considere as dependências e integrações necessárias
5. Lembre-se de solicitar documentação do código quando necessário
