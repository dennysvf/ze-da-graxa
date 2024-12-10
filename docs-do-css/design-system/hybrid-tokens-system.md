# Sistema Híbrido de Design Tokens

## 1. Estrutura Proposta

### 1.1 Arquivo Base (tokens.ts)
```typescript
// tokens.ts
export const tokens = {
  // Sistema novo (numérico)
  colors: {
    primary: {
      100: '#E3F2FD',
      200: '#BBDEFB',
      300: '#90CAF9',
      400: '#64B5F6',
      500: '#42A5F5',
      600: '#2196F3',
      700: '#1E88E5',
      800: '#1976D2',
      900: '#1565C0'
    },
    // ... outras cores
  },
  
  // Sistema legado (semântico)
  legacy: {
    colors: {
      primary: {
        main: '#42A5F5',    // referencia primary.500
        light: '#90CAF9',   // referencia primary.300
        dark: '#1E88E5',    // referencia primary.700
      }
    }
  }
};
```

### 1.2 Sistema de Aliases (aliases.scss)
```scss
// aliases.scss
:root {
  // Mapeamento automático do legado para o novo
  --primary-main: var(--primary-500);
  --primary-light: var(--primary-300);
  --primary-dark: var(--primary-700);
  
  --secondary-main: var(--secondary-500);
  --secondary-light: var(--secondary-300);
  --secondary-dark: var(--secondary-700);
  
  // ... outros mapeamentos
}
```

### 1.3 Utilitários de Compatibilidade (compatibility.ts)
```typescript
// compatibility.ts
export const getTokenValue = (token: string, format: 'legacy' | 'new' = 'new') => {
  const tokenMap = {
    'primary-main': 'primary-500',
    'primary-light': 'primary-300',
    'primary-dark': 'primary-700',
    // ... outros mapeamentos
  };

  return format === 'legacy' ? token : tokenMap[token] || token;
};
```

## 2. Uso nos Componentes

### 2.1 Componentes Novos
```scss
// Usando sistema novo
.new-component {
  background: var(--primary-500);
  color: var(--primary-100);
  border-color: var(--primary-700);
}
```

### 2.2 Componentes Legados
```scss
// Usando sistema legado
.legacy-component {
  background: var(--primary-main);
  color: var(--primary-light);
  border-color: var(--primary-dark);
}
```

### 2.3 Componentes Híbridos
```scss
// Suportando ambos os sistemas
.hybrid-component {
  // Preferência pelo novo, fallback para legado
  background: var(--primary-500, var(--primary-main));
  
  // Ou usando CSS custom property
  background: var(--component-bg, var(--primary-500));
}
```

## 3. Implementação

### 3.1 Setup Inicial
```typescript
// setup.ts
import { tokens } from './tokens';
import { generateCSSVariables } from './utils';

// Gera CSS variables para ambos os sistemas
const cssVariables = generateCSSVariables({
  // Sistema novo
  ...tokens.colors,
  
  // Sistema legado (com aliases)
  ...tokens.legacy.colors
});
```

### 3.2 Utilitários de Migração
```typescript
// migration-utils.ts
export const tokenMigrationHelper = {
  // Converte token legado para novo
  upgrade: (legacyToken: string) => {
    const mapping = {
      'primary-main': 'primary-500',
      // ... outros mapeamentos
    };
    return mapping[legacyToken] || legacyToken;
  },

  // Converte token novo para legado
  downgrade: (newToken: string) => {
    const mapping = {
      'primary-500': 'primary-main',
      // ... outros mapeamentos
    };
    return mapping[newToken] || newToken;
  }
};
```

## 4. Documentação

### 4.1 Uso em Componentes
```typescript
// Exemplo de componente com suporte híbrido
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  tokenFormat?: 'legacy' | 'new';
}

const Button = ({ variant = 'primary', tokenFormat = 'new' }) => {
  const getBackgroundColor = () => {
    const token = tokenFormat === 'new' 
      ? `--${variant}-500`
      : `--${variant}-main`;
    return `var(${token})`;
  };

  return (
    <button style={{ backgroundColor: getBackgroundColor() }}>
      Click me
    </button>
  );
};
```

### 4.2 Guia de Migração
```markdown
# Guia de Migração de Tokens

## Usando Tokens Legados
- Continue usando `--primary-main`, `--primary-light`, etc.
- Todos os componentes existentes continuarão funcionando

## Usando Tokens Novos
- Comece a usar `--primary-500`, `--primary-300`, etc.
- Beneficie-se da escala mais granular
- Melhor consistência com design systems modernos

## Migração Gradual
1. Identifique componentes para migração
2. Atualize tokens um componente por vez
3. Use utilitários de migração para ajuda
4. Teste visual após cada mudança
```

## 5. Vantagens do Sistema Híbrido

1. **Zero Breaking Changes**
   - Componentes existentes continuam funcionando
   - Migração opcional e gradual

2. **Flexibilidade**
   - Suporte a múltiplos padrões
   - Escolha por componente

3. **Manutenibilidade**
   - Sistema unificado de valores
   - Mapeamento automático

4. **Performance**
   - Sem overhead significativo
   - Reutilização de valores

## 6. Próximos Passos

1. **Implementação**
   - [ ] Criar estrutura de tokens
   - [ ] Implementar sistema de aliases
   - [ ] Desenvolver utilitários

2. **Documentação**
   - [ ] Guia de uso
   - [ ] Exemplos práticos
   - [ ] Patterns recomendados

3. **Ferramentas**
   - [ ] Helpers de migração
   - [ ] Linting customizado
   - [ ] Visual regression tests
