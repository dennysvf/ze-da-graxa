# Guia de Desenvolvimento para IA

## Objetivo deste Guia
Este documento serve como um guia completo para orientar o desenvolvimento do projeto usando ferramentas de IA, mantendo a consistência e qualidade do código. É essencial ler e seguir estas diretrizes antes de qualquer interação com o código.

## Ordem de Leitura da Documentação

1. **Primeiro, sempre consulte:**
   - Este guia (AI_DEVELOPMENT_GUIDE.md)
   - PROJECT_GUIDE.md para contexto geral
   - GUIDELINES.md para padrões técnicos

2. **Para desenvolvimento de componentes:**
   - COMPONENTS_MAP.md
   - COMPONENTS.md
   - FIGMA_MAPPING.md

3. **Para criação de páginas:**
   - LAYOUTS.md
   - PAGE_TEMPLATES.md
   - CONVERSION_TEMPLATE.md

## Ferramentas de IA Aprovadas

### Copilot
- **Uso Recomendado**:
  - Autocompletar código repetitivo
  - Gerar testes unitários
  - Sugerir documentação
  - Refatorar código existente
- **Limitações**:
  - Não confiar cegamente nas sugestões
  - Validar código gerado
  - Manter estilo consistente

### ChatGPT/Claude
- **Uso Recomendado**:
  - Debugging
  - Revisão de código
  - Explicações conceituais
  - Sugestões de arquitetura
- **Limitações**:
  - Não compartilhar código sensível
  - Verificar respostas com documentação
  - Adaptar sugestões ao contexto

## Pontos Críticos de Atenção

### Design System
- Sempre consultar tokens definidos em GUIDELINES.md
- Nunca criar novas cores ou medidas sem aprovação
- Manter consistência visual com Figma
- Seguir padrões de espaçamento e tipografia

### Desenvolvimento com IA
- Validar código gerado por IA
- Manter consistência com padrões existentes
- Documentar uso de ferramentas de IA
- Revisar sugestões automatizadas

### Documentação
- Atualizar documentação ao criar/modificar componentes
- Documentar decisões técnicas importantes
- Manter rastreabilidade de mudanças
- Incluir contexto para futuras interações com IA

## Processo de Desenvolvimento com IA

### 1. Planejamento
- Definir escopo claro
- Identificar componentes existentes
- Consultar documentação relevante
- Preparar prompts específicos

### 2. Desenvolvimento
- Usar IA para tarefas apropriadas
- Validar e testar código gerado
- Manter consistência com padrões
- Documentar decisões importantes

### 3. Revisão
- Verificar qualidade do código
- Validar acessibilidade
- Confirmar responsividade
- Atualizar documentação

## Checklist de Qualidade

### Código Gerado por IA
- [ ] Segue padrões TypeScript
- [ ] Usa CSS Modules corretamente
- [ ] Implementa responsividade
- [ ] Otimizado para performance
- [ ] Acessível (WCAG)
- [ ] Testado adequadamente
- [ ] Documentado apropriadamente

### Design e UX
- [ ] Segue design system
- [ ] Mobile-first
- [ ] Consistente com Figma
- [ ] Interações fluidas
- [ ] Feedback visual adequado
- [ ] Acessibilidade implementada

### Documentação
- [ ] Documentação atualizada
- [ ] Mudanças registradas
- [ ] Decisões documentadas
- [ ] Contexto preservado
- [ ] Prompts documentados

## Restrições e Boas Práticas

### Nunca
- Confiar cegamente em código gerado por IA
- Ignorar padrões estabelecidos
- Pular documentação
- Compartilhar dados sensíveis com IA
- Fazer alterações não rastreáveis

### Sempre
- Validar sugestões de IA
- Seguir design system
- Manter modularidade
- Documentar mudanças
- Considerar acessibilidade
- Testar código gerado

## Ferramentas e Recursos

### Desenvolvimento
- TypeScript + React
- CSS Modules
- Jest + Testing Library
- ESLint + Prettier
- Storybook

### IA e Automação
- GitHub Copilot
- ChatGPT/Claude
- Codeium
- Tabnine

### Design e UX
- Figma
- Design System
- Componentes Base
- Tokens CSS

## Métricas e Qualidade

### Performance
- Lighthouse scores
- Bundle size
- Time to Interactive
- First Contentful Paint

### Qualidade
- Cobertura de testes
- Complexidade ciclomática
- Duplicação de código
- Débito técnico

### Acessibilidade
- WCAG 2.1
- Testes de contraste
- Navegação por teclado
- Screen readers

## Code Review com IA

### Processo
1. Auto-review com ferramentas de IA
2. Revisão manual do código
3. Testes automatizados
4. Validação de acessibilidade
5. Verificação de performance

### Checklist de Review
- [ ] Código segue padrões
- [ ] Testes adequados
- [ ] Documentação atualizada
- [ ] Performance otimizada
- [ ] Acessibilidade implementada
- [ ] Design system seguido
- [ ] Responsividade testada

## Melhoria Contínua

### Feedback Loop
1. Coletar métricas
2. Analisar resultados
3. Identificar melhorias
4. Implementar mudanças
5. Documentar aprendizados

### Documentação
- Manter guias atualizados
- Documentar casos de uso
- Registrar lições aprendidas
- Compartilhar boas práticas
