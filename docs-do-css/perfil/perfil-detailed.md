# Documentação Técnica - Perfil do Usuário

## 1. ANÁLISE INICIAL

### Seções da Interface
- Header (Navegação Principal)
- Profile Header (Cabeçalho do Perfil)
- Navigation Tabs (Abas de Navegação)
- Personal Info (Informações Pessoais)
- Address Section (Endereços)
- Payment Methods (Métodos de Pagamento)
- Preferences (Preferências)

### Componentes Reutilizáveis
- ProfileAvatar
- TabNavigator
- FormSection
- AddressCard
- PaymentCard
- EditButton
- SaveButton
- InputField

### Hierarquia de Elementos
```
└── Main Container (1440px)
    ├── Header
    │   ├── Logo
    │   ├── Navigation Menu
    │   └── User Actions
    ├── Profile Content
    │   ├── Profile Header
    │   │   ├── Avatar
    │   │   ├── User Name
    │   │   └── Member Since
    │   ├── Navigation Tabs
    │   │   ├── Personal Info
    │   │   ├── Addresses
    │   │   ├── Payment Methods
    │   │   └── Preferences
    │   └── Content Section
    │       ├── Form Fields
    │       ├── Address Cards
    │       ├── Payment Methods
    │       └── Preference Options
    └── Action Buttons
        ├── Save
        └── Cancel
```

### Sistema de Grid/Layout
- Container principal: 1440px
- Layout de duas colunas
- Espaçamento entre elementos: 24px

## 2. DESIGN TOKENS

### Cores
```css
:root {
  /* Cores Principais */
  --color-primary: #58D899;
  --color-text: #616161;
  --color-background: #FFFFFF;
  --color-border: #EDEDED;
  
  /* Estados */
  --color-error: #FF5252;
  --color-success: #4CAF50;
  --color-info: #2196F3;
  
  /* Variações */
  --color-background-light: #F5F5F5;
  --color-text-light: #9E9E9E;
  --color-disabled: #E0E0E0;
}
```

### Tipografia
```css
:root {
  /* Família */
  --font-family: 'Inter', sans-serif;
  
  /* Tamanhos */
  --font-size-h1: 25px;
  --font-size-h2: 20px;
  --font-size-body: 14px;
  --font-size-small: 12px;
  
  /* Pesos */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  
  /* Espaçamento */
  --letter-spacing: 0.2px;
}
```

### Espaçamento
```css
:root {
  /* Containers */
  --container-max-width: 1440px;
  --container-padding: 120px;
  
  /* Elementos */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  
  /* Formulários */
  --input-height: 40px;
  --input-spacing: 16px;
}
```

### Efeitos
```css
:root {
  /* Bordas */
  --border-radius: 5px;
  --border-width: 1px;
  
  /* Sombras */
  --shadow-card: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-dropdown: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* Transições */
  --transition-default: all 0.3s ease;
  --transition-input: border-color 0.2s ease;
}
```

## 3. COMPONENTES

### ProfileForm
```typescript
interface ProfileFormProps {
  user: User;
  onSubmit: (data: UserData) => Promise<void>;
  onCancel: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  user,
  onSubmit,
  onCancel,
}) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: user,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formSection}>
        <InputField
          label="Nome Completo"
          {...register('fullName', { required: true })}
          error={errors.fullName}
        />
        <InputField
          label="E-mail"
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          error={errors.email}
        />
        <InputField
          label="Telefone"
          {...register('phone', { required: true })}
          error={errors.phone}
        />
      </div>
      <div className={styles.actions}>
        <Button type="submit" variant="primary">Salvar</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};
```

### AddressCard
```typescript
interface AddressCardProps {
  address: Address;
  isDefault: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  isDefault,
  onEdit,
  onDelete,
  onSetDefault,
}) => {
  return (
    <div className={styles.addressCard}>
      {isDefault && (
        <Badge className={styles.defaultBadge}>
          Endereço Principal
        </Badge>
      )}
      <div className={styles.content}>
        <h3>{address.label}</h3>
        <p>{address.street}, {address.number}</p>
        <p>{address.neighborhood}</p>
        <p>{address.city} - {address.state}</p>
        <p>{address.zipCode}</p>
      </div>
      <div className={styles.actions}>
        <IconButton
          icon="edit"
          onClick={() => onEdit(address.id)}
          aria-label="Editar endereço"
        />
        <IconButton
          icon="delete"
          onClick={() => onDelete(address.id)}
          aria-label="Remover endereço"
        />
        {!isDefault && (
          <Button
            variant="text"
            onClick={() => onSetDefault(address.id)}
          >
            Definir como Principal
          </Button>
        )}
      </div>
    </div>
  );
};
```

## 4. FUNCIONALIDADES

### Interações do Usuário
- Editar informações pessoais
- Gerenciar endereços
- Gerenciar métodos de pagamento
- Alterar preferências
- Upload de foto de perfil
- Alterar senha

### Estados
```typescript
interface ProfileState {
  user: User;
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  preferences: UserPreferences;
  loading: {
    profile: boolean;
    address: boolean;
    payment: boolean;
  };
  error: string | null;
}
```

### Comportamentos
- Validação em tempo real
- Auto-save de preferências
- Confirmação para ações destrutivas
- Feedback visual de ações

## 5. ASSETS

### Imagens
- Ícones do sistema (SVG)
  - edit.svg
  - delete.svg
  - add.svg
  - check.svg
- Placeholders
  - avatar-placeholder.svg
  - card-placeholder.svg

### Ícones
- Material Icons
  - person
  - location_on
  - credit_card
  - settings

## 6. ACESSIBILIDADE

### Semântica HTML
```html
<main role="main">
  <h1>Meu Perfil</h1>
  <nav role="tablist">
    <!-- Navigation Tabs -->
  </nav>
  <form role="form">
    <!-- Form Fields -->
  </form>
</main>
```

### ARIA Labels
```html
<button aria-label="Editar foto de perfil">
<input aria-invalid="true" aria-describedby="error-message">
<div role="alert" aria-live="polite">
```

### Navegação por Teclado
- Tab order lógico
- Atalhos de teclado
- Focus visível
- Skip links

## 7. ESTRUTURA REACT

### Árvore de Componentes
```
src/
  components/
    profile/
      ProfileForm.tsx
      AddressForm.tsx
      PaymentForm.tsx
      PreferencesForm.tsx
      AddressCard.tsx
      PaymentCard.tsx
  hooks/
    useProfile.ts
    useAddresses.ts
    usePaymentMethods.ts
  context/
    ProfileContext.tsx
  services/
    profile.service.ts
```

### Context API
```typescript
const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
```

## 8. CONSIDERAÇÕES TÉCNICAS

### Performance
- Debounce em inputs
- Lazy loading de seções
- Otimização de re-renders
- Cache de dados do perfil

### Testes
```typescript
describe('ProfileForm', () => {
  it('should validate required fields');
  it('should handle form submission');
  it('should display error messages');
});

describe('AddressCard', () => {
  it('should handle address actions');
  it('should display default badge');
});
```

### Edge Cases
- Dados inválidos
- Falha na API
- Conflito de sessão
- Upload de arquivo grande

## 9. EXEMPLOS DE USO

### Básico
```typescript
<Profile userId={currentUserId} />
```

### Completo
```typescript
<ProfileProvider>
  <Profile
    userId={currentUserId}
    initialTab="personal"
    onProfileUpdate={handleProfileUpdate}
    onAddressChange={handleAddressChange}
    onPaymentMethodChange={handlePaymentMethodChange}
    onPreferencesChange={handlePreferencesChange}
    onError={handleError}
  />
</ProfileProvider>
```
