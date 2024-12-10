# Template para Conversão de Página

## Instruções de Uso
Para solicitar a conversão de uma página HTML para React, forneça as seguintes informações:

```markdown
# Solicitação de Conversão de Página

## 1. Informações Básicas
- **Nome da Página**: [Nome descritivo da página]
- **Arquivo HTML Base**: [Caminho do arquivo HTML]
- **Layout Desejado**: [PublicLayout/AdminLayout/AuthLayout]
- **Prioridade**: [Alta/Média/Baixa]

## 2. Funcionalidades Necessárias
- [ ] Funcionalidade 1
- [ ] Funcionalidade 2
- [ ] Funcionalidade 3

## 3. Componentes Existentes a Serem Utilizados
- [ ] Componente 1 (razão do uso)
- [ ] Componente 2 (razão do uso)
- [ ] Componente 3 (razão do uso)

## 4. Novos Componentes Necessários
- [ ] Novo Componente 1 (descrição breve)
- [ ] Novo Componente 2 (descrição breve)
- [ ] Novo Componente 3 (descrição breve)

## 5. Integrações
- [ ] API 1
- [ ] API 2
- [ ] Serviço 1

## 6. Considerações Especiais
- Requisito especial 1
- Requisito especial 2
- Requisito especial 3

## 7. Referências
- Link do Figma (se aplicável)
- Documentação relevante
- Outros recursos

## 8. Observações Adicionais
[Qualquer informação adicional relevante para a conversão]
```

### Exemplo de Uso:

```markdown
# Solicitação de Conversão de Página

## 1. Informações Básicas
- **Nome da Página**: Página de Produto
- **Arquivo HTML Base**: src/docs/templates/product-page.html
- **Layout Desejado**: PublicLayout
- **Prioridade**: Alta

## 2. Funcionalidades Necessárias
- [ ] Galeria de imagens com zoom
- [ ] Seletor de quantidade
- [ ] Botão de adicionar ao carrinho
- [ ] Avaliações dos clientes

## 3. Componentes Existentes a Serem Utilizados
- [ ] Button (para ações principais)
- [ ] ProductCard (para produtos relacionados)
- [ ] Rating (para exibir avaliações)

## 4. Novos Componentes Necessários
- [ ] ImageGallery (para exibição das fotos do produto)
- [ ] QuantitySelector (para selecionar quantidade)
- [ ] ProductSpecs (para especificações técnicas)

## 5. Integrações
- [ ] API de produtos
- [ ] API de avaliações
- [ ] Serviço de carrinho

## 6. Considerações Especiais
- Precisa ser responsivo
- Deve ter lazy loading nas imagens
- SEO otimizado

## 7. Referências
- Figma: [link]
- Documentação da API: [link]
- Exemplos de implementação: [links]

## 8. Observações Adicionais
A página precisa ser otimizada para carregamento rápido e ter uma boa experiência mobile.
```

## Dicas para Preenchimento

1. **Seja Específico**
   - Forneça caminhos exatos dos arquivos
   - Descreva funcionalidades claramente
   - Liste todos os componentes necessários

2. **Priorize Claramente**
   - Indique o que é essencial vs. desejável
   - Especifique dependências entre componentes
   - Destaque requisitos críticos

3. **Forneça Contexto**
   - Inclua links relevantes
   - Explique casos especiais
   - Mencione limitações conhecidas

4. **Considere a Manutenção**
   - Pense na reutilização
   - Documente decisões importantes
   - Preveja necessidades futuras

## Fluxo de Trabalho Recomendado

1. Copie o template
2. Preencha todas as seções relevantes
3. Revise para garantir que nada foi esquecido
4. Submeta a solicitação
5. Acompanhe o progresso da conversão
