# Recuperação de Senha

### 1. Visão Geral
- **Objetivo**: Permitir que usuários recuperem acesso à conta através de redefinição de senha
- **Contexto**: Acessível via página de login
- **Usuários**: Clientes que esqueceram a senha

### 2. Layout

#### 2.1 Estrutura Visual
```ascii
+------------------+
|      Header      |
+------------------+
|                  |
|    Logo Zé       |
|                  |
| [Passo 1: Email] |
| +------------+   |
| |   Email    |   |
| +------------+   |
|                  |
| [Passo 2: Código]|
| +------------+   |
| |   Código   |   |
| +------------+   |
|                  |
| [Passo 3: Senha] |
| +------------+   |
| |Nova Senha  |   |
| +------------+   |
| |Confirmar   |   |
| |Nova Senha  |   |
| +------------+   |
|                  |
| [  Continuar  ]  |
|                  |
| Voltar ao login  |
|                  |
+------------------+
```

#### 2.2 Componentes React
```typescript
interface RecoveryFormProps {
  step: RecoveryStep;
  onSubmit: (data: RecoveryData) => Promise<void>;
  onCancel: () => void;
}

type RecoveryStep = 'email' | 'code' | 'password';

interface RecoveryData {
  email?: string;
  code?: string;
  password?: string;
  confirmPassword?: string;
}

interface RecoveryState {
  loading: boolean;
  error?: string;
  timeLeft?: number;
}
```

#### 2.3 Responsividade
- **Breakpoints**:
  - Mobile: < 768px
    - Formulário em tela cheia
    - Steps verticais
  - Tablet: 768px - 1024px
    - Formulário centralizado
    - Largura máxima 400px
  - Desktop: > 1024px
    - Layout em duas colunas
    - Steps horizontais

### 3. Interações

#### 3.1 Ações do Usuário
- [ ] Informar email
- [ ] Inserir código
- [ ] Criar nova senha
- [ ] Reenviar código
- [ ] Voltar ao login

#### 3.2 Feedback Visual
- [ ] Progress steps
- [ ] Loading states
- [ ] Contador reenvio
- [ ] Validação em tempo real
- [ ] Mensagens de erro/sucesso

#### 3.3 Validações
- [ ] Email
  - Formato válido
  - Cadastrado no sistema
- [ ] Código
  - 6 dígitos
  - Tempo válido
- [ ] Nova senha
  - Requisitos mínimos
  - Diferente da anterior

### 4. Aspectos Técnicos

#### 4.1 Integração com APIs
```typescript
interface RecoveryAPI {
  requestCode(email: string): Promise<{
    success: boolean;
    expiresIn: number;
  }>;
  validateCode(email: string, code: string): Promise<boolean>;
  resetPassword(email: string, code: string, password: string): Promise<void>;
}
```

#### 4.2 Componentes Base
- [ ] Step indicator
- [ ] Form container
- [ ] Text inputs
- [ ] Password input
- [ ] Code input
- [ ] Timer display
- [ ] Action buttons

#### 4.3 Performance
- **Otimizações**:
  - [ ] Validações client-side
  - [ ] Debounce em validações
  - [ ] Cache de estado
  - [ ] Timeout handling

#### 4.4 Segurança
- [ ] Rate limiting
- [ ] Código temporário
- [ ] Bloqueio após tentativas
- [ ] Notificação email
- [ ] Logging de tentativas

### 5. Assets Necessários

#### 5.1 Imagens
- [ ] Logo Zé
- [ ] Step icons
- [ ] Success/error icons

#### 5.2 Ícones
- [ ] Progress indicators
- [ ] Validation icons
- [ ] Timer icon
- [ ] Password visibility

### 6. Variáveis de Estilo

```scss
// Cores
$colors: (
  text: #616161,
  background: #FFFFFF,
  primary: #4CAF50,
  error: #F44336,
  success: #4CAF50,
  border: #E0E0E0,
  focus: #2196F3,
  step: (
    active: #4CAF50,
    complete: #81C784,
    inactive: #E0E0E0
  )
);

// Layout
$layout: (
  form-width: 400px,
  input-height: 48px,
  gap: 24px,
  border-radius: 4px,
  step-size: 32px
);

// Tipografia
$typography: (
  font-family: 'Inter',
  input: 16px,
  label: 14px,
  error: 12px,
  timer: 13px
);
```

### 7. Testes

#### 7.1 Casos de Teste
- [ ] Fluxo completo
- [ ] Email inválido
- [ ] Código expirado
- [ ] Reenvio de código
- [ ] Senha inválida
- [ ] Rate limiting
- [ ] Timeout handling

### 8. Checklist de Implementação

- [ ] Estrutura base
  - [ ] Multi-step form
  - [ ] Progress indicator
  - [ ] Timer component
  - [ ] Validation feedback
- [ ] Integrações
  - [ ] Email service
  - [ ] Recovery API
  - [ ] Validation service
- [ ] Segurança
  - [ ] Rate limiting
  - [ ] Code expiration
  - [ ] Activity logging
- [ ] UX
  - [ ] Clear feedback
  - [ ] Error handling
  - [ ] Loading states
  - [ ] Accessibility
- [ ] Testes
  - [ ] Unit tests
  - [ ] Flow tests
  - [ ] Security tests
