# Auditoria de Design Tokens

## Metodologia
1. Extrair tokens de cada documento
2. Categorizar por tipo (cor, tipografia, espaçamento, etc)
3. Identificar duplicatas e inconsistências
4. Propor padronização

## 1. Cores

### 1.1 Cores Primárias
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--primary-500` | #FF4400 | Botões, Links, Destaques | Manter |
| `--primary-hover` | #E63E00 | Estados hover | Renomear para `--primary-600` |
| `--primary-active` | #CC3700 | Estados active | Renomear para `--primary-700` |

### 1.2 Cores Secundárias
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--secondary-500` | #0066FF | Ícones, Badges | Manter |
| `--secondary-hover` | #005CE6 | Estados hover | Renomear para `--secondary-600` |
| `--secondary-active` | #0052CC | Estados active | Renomear para `--secondary-700` |

### 1.3 Cores de Feedback
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--success` | #00CC66 | Mensagens de sucesso | Renomear para `--success-500` |
| `--error` | #FF3333 | Mensagens de erro | Renomear para `--error-500` |
| `--warning` | #FFCC00 | Alertas | Renomear para `--warning-500` |
| `--info` | #0099FF | Informações | Renomear para `--info-500` |

### 1.4 Cores Neutras
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--background` | #FFFFFF | Fundo geral | Renomear para `--neutral-100` |
| `--surface` | #F5F5F5 | Cards, Containers | Renomear para `--neutral-200` |
| `--border` | #E0E0E0 | Bordas | Renomear para `--neutral-300` |
| `--text` | #333333 | Texto principal | Renomear para `--neutral-900` |

## 2. Tipografia

### 2.1 Famílias
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--font-primary` | 'Inter' | Textos gerais | Manter |
| `--font-secondary` | 'Roboto' | Títulos | Manter |

### 2.2 Tamanhos
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--text-xs` | 0.75rem | Texto pequeno | Renomear para `--font-size-xs` |
| `--text-sm` | 0.875rem | Texto secundário | Renomear para `--font-size-sm` |
| `--text-md` | 1rem | Texto padrão | Renomear para `--font-size-md` |
| `--text-lg` | 1.25rem | Subtítulos | Renomear para `--font-size-lg` |
| `--text-xl` | 1.5rem | Títulos | Renomear para `--font-size-xl` |

### 2.3 Pesos
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--regular` | 400 | Texto normal | Renomear para `--font-weight-regular` |
| `--medium` | 500 | Destaque médio | Renomear para `--font-weight-medium` |
| `--bold` | 700 | Títulos, destaques | Renomear para `--font-weight-bold` |

## 3. Espaçamento

### 3.1 Escala Base
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--spacing-1` | 0.25rem | Espaçamento mínimo | Manter |
| `--spacing-2` | 0.5rem | Espaçamento pequeno | Manter |
| `--spacing-3` | 0.75rem | Espaçamento médio-pequeno | Manter |
| `--spacing-4` | 1rem | Espaçamento base | Manter |
| `--spacing-5` | 1.5rem | Espaçamento médio | Manter |
| `--spacing-6` | 2rem | Espaçamento grande | Manter |

### 3.2 Layout
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--container` | 1200px | Container máximo | Renomear para `--container-max` |
| `--container-sm` | 640px | Container pequeno | Manter |
| `--container-md` | 768px | Container médio | Manter |
| `--container-lg` | 1024px | Container grande | Manter |

## 4. Efeitos

### 4.1 Sombras
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | Sombra sutil | Manter |
| `--shadow-md` | 0 4px 6px rgba(0,0,0,0.1) | Sombra média | Manter |
| `--shadow-lg` | 0 10px 15px rgba(0,0,0,0.1) | Sombra grande | Manter |

### 4.2 Bordas
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--radius-sm` | 0.25rem | Borda sutil | Manter |
| `--radius-md` | 0.5rem | Borda média | Manter |
| `--radius-lg` | 1rem | Borda grande | Manter |
| `--radius-full` | 9999px | Borda circular | Manter |

## 5. Breakpoints

### 5.1 Responsividade
| Token Atual | Valor | Usado em | Proposta de Padronização |
|------------|-------|----------|-------------------------|
| `--mobile` | 640px | Mobile | Renomear para `--breakpoint-sm` |
| `--tablet` | 768px | Tablet | Renomear para `--breakpoint-md` |
| `--desktop` | 1024px | Desktop | Renomear para `--breakpoint-lg` |
| `--wide` | 1280px | Wide Desktop | Renomear para `--breakpoint-xl` |

## Próximos Passos

1. **Validação**
   - [ ] Revisar tokens com time de design
   - [ ] Validar nomenclatura proposta
   - [ ] Confirmar valores e usos

2. **Implementação**
   - [ ] Criar arquivo SCSS com novos tokens
   - [ ] Documentar migrações necessárias
   - [ ] Definir estratégia de deprecação

3. **Documentação**
   - [ ] Criar guia de uso
   - [ ] Exemplos de implementação
   - [ ] Regras de composição
