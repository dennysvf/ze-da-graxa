# Input

## Descrição
O componente Input é um campo de entrada de texto que segue o design system do Zé da Graxa. Ele oferece uma experiência rica e acessível, com suporte a diferentes estados, validação em tempo real, feedback visual e integração com formulários.

## Propriedades
| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|---------|-----------|
| label | string | sim | - | Rótulo do campo |
| name | string | sim | - | Nome do campo para formulários |
| type | 'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'search' | não | 'text' | Tipo do input |
| value | string | não | - | Valor controlado do input |
| defaultValue | string | não | - | Valor inicial não controlado |
| placeholder | string | não | - | Texto placeholder |
| error | string | não | - | Mensagem de erro |
| success | boolean | não | false | Indica estado de sucesso |
| warning | string | não | - | Mensagem de aviso |
| hint | string | não | - | Texto de ajuda |
| required | boolean | não | false | Se o campo é obrigatório |
| disabled | boolean | não | false | Se o campo está desabilitado |
| readOnly | boolean | não | false | Se o campo é somente leitura |
| clearable | boolean | não | false | Se mostra botão para limpar |
| leftIcon | ReactNode | não | - | Ícone à esquerda do input |
| rightIcon | ReactNode | não | - | Ícone à direita do input |
| onChange | (event: ChangeEvent<HTMLInputElement>) => void | não | - | Callback de mudança |
| onClear | () => void | não | - | Callback ao limpar o campo |
| onBlur | (event: FocusEvent<HTMLInputElement>) => void | não | - | Callback de blur |
| onFocus | (event: FocusEvent<HTMLInputElement>) => void | não | - | Callback de focus |
| onKeyDown | (event: KeyboardEvent<HTMLInputElement>) => void | não | - | Callback de tecla pressionada |
| inputRef | RefObject<HTMLInputElement> | não | - | Ref para o elemento input |

## Tokens de Design

### Cores
- `--color-primary`: Cor principal e foco (#58D899)
- `--color-success`: Cor de sucesso (#4CAF50)
- `--color-warning`: Cor de aviso (#FF9800)
- `--color-error`: Cor de erro (#F44336)
- `--color-text-primary`: Cor do texto (#1A1A1A)
- `--color-text-secondary`: Cor do texto secundário (#616161)
- `--color-text-placeholder`: Cor do placeholder (#9998A5)
- `--color-text-disabled`: Cor quando desabilitado (#BDBDBD)
- `--color-border`: Cor da borda padrão (#E0E0E0)
- `--color-border-hover`: Cor da borda no hover (#BDBDBD)
- `--color-border-focus`: Cor da borda em foco (#58D899)
- `--color-background`: Cor de fundo (#FFFFFF)
- `--color-background-disabled`: Cor de fundo desabilitado (#F5F5F5)

### Tipografia
- `--font-family`: Fonte do input ('Inter', sans-serif)
- `--font-size-xs`: Tamanho do texto pequeno (12px)
- `--font-size-sm`: Tamanho do texto médio (14px)
- `--font-size-md`: Tamanho do texto grande (16px)
- `--font-weight-regular`: Peso da fonte normal (400)
- `--font-weight-medium`: Peso da fonte média (500)
- `--line-height-normal`: Altura da linha padrão (1.5)
- `--letter-spacing-normal`: Espaçamento entre letras (0.15px)

### Espaçamento
- `--spacing-2`: Espaçamento pequeno (8px)
- `--spacing-3`: Espaçamento médio (12px)
- `--spacing-4`: Espaçamento grande (16px)
- `--spacing-5`: Espaçamento extra grande (20px)

### Efeitos
- `--border-radius-sm`: Borda arredondada pequena (6px)
- `--border-radius-md`: Borda arredondada média (8px)
- `--border-radius-lg`: Borda arredondada grande (12px)
- `--border-width`: Largura da borda (1px)
- `--shadow-sm`: Sombra sutil (0 2px 4px rgba(0, 0, 0, 0.05))
- `--shadow-md`: Sombra média (0 4px 6px rgba(0, 0, 0, 0.1))
- `--transition-fast`: Transição rápida (150ms ease-in-out)

## Estados

### Default
- Borda: var(--color-border)
- Fundo: var(--color-background)
- Texto: var(--color-text-primary)

### Hover
- Borda: var(--color-border-hover)
- Cursor: text
- Sombra: var(--shadow-sm)

### Focus
- Borda: var(--color-border-focus)
- Outline: 2px solid var(--color-border-focus)
- Outline-offset: 2px

### Disabled
- Fundo: var(--color-background-disabled)
- Texto: var(--color-text-disabled)
- Cursor: not-allowed
- Opacidade: 0.6

### Success
- Borda: var(--color-success)
- Ícone: CheckIcon (verde)

### Warning
- Borda: var(--color-warning)
- Ícone: WarningIcon (laranja)

### Error
- Borda: var(--color-error)
- Texto de erro: var(--color-error)
- Ícone: ErrorIcon (vermelho)

## Tamanhos

### Small (sm)
- Altura: 32px
- Padding: 0 12px
- Font-size: var(--font-size-xs)
- Border-radius: var(--border-radius-sm)

### Medium (md)
- Altura: 40px
- Padding: 0 16px
- Font-size: var(--font-size-sm)
- Border-radius: var(--border-radius-md)

### Large (lg)
- Altura: 48px
- Padding: 0 20px
- Font-size: var(--font-size-md)
- Border-radius: var(--border-radius-lg)

## Acessibilidade

1. **Roles e Estados**
   - Label associada via htmlFor e id único
   - aria-invalid para estado de erro
   - aria-describedby para mensagens
   - aria-required para campos obrigatórios
   - aria-label para inputs sem label visível

2. **Navegação**
   - Ordem de tabulação lógica
   - Focus visible aprimorado
   - Suporte a teclado nativo
   - Atalhos de teclado para limpar (Esc)

3. **Feedback**
   - Mensagens de erro anunciadas
   - Estados visuais distintos
   - Feedback tátil em mobile
   - Suporte para redução de movimento

## Exemplos de Uso

```tsx
// Input básico
<Input
  label="Nome completo"
  name="fullName"
  placeholder="Digite seu nome"
  required
/>

// Input com validação e sucesso
<Input
  label="Email"
  name="email"
  type="email"
  value={email}
  success={isValidEmail}
  error={emailError}
  onChange={handleEmailChange}
  onBlur={validateEmail}
/>

// Input de senha com toggle
<Input
  label="Senha"
  name="password"
  type={showPassword ? 'text' : 'password'}
  hint="Mínimo de 8 caracteres"
  rightIcon={
    <IconButton
      icon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
      onClick={togglePassword}
      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
    />
  }
/>

// Input com limpeza e formatação
<Input
  label="Telefone"
  name="phone"
  type="tel"
  value={phone}
  clearable
  onChange={handlePhoneChange}
  onClear={clearPhone}
  placeholder="(00) 00000-0000"
/>

// Input de busca
<Input
  type="search"
  name="search"
  placeholder="Buscar produtos..."
  leftIcon={<SearchIcon />}
  clearable
  onChange={handleSearch}
  onKeyDown={handleSearchKeyDown}
/>

// Input com aviso
<Input
  label="Nome de usuário"
  name="username"
  value={username}
  warning="Este nome de usuário está quase indisponível"
  onChange={handleUsernameChange}
/>
```

## Boas Práticas

1. **UX/UI**
   - Use labels descritivas
   - Forneça placeholders úteis
   - Mantenha feedback consistente
   - Valide em tempo real
   - Use ícones com propósito
   - Mantenha campos organizados

2. **Acessibilidade**
   - Forneça labels para tudo
   - Mantenha contraste adequado
   - Use mensagens descritivas
   - Suporte navegação por teclado
   - Respeite preferências de movimento

3. **Performance**
   - Evite re-renders desnecessários
   - Use debounce em buscas
   - Otimize validações
   - Minimize mudanças de layout
   - Lazy load ícones grandes

4. **Manutenção**
   - Documente validações complexas
   - Mantenha consistência
   - Use design tokens
   - Teste todos os estados
   - Mantenha props organizadas

## Componentes Relacionados
- `TextArea`: Campo de texto multilinha
- `Select`: Campo de seleção
- `Autocomplete`: Input com sugestões
- `PhoneInput`: Input formatado para telefone
- `SearchInput`: Input otimizado para busca
- `PasswordInput`: Input seguro para senhas
- `FormField`: Wrapper com label e mensagens
