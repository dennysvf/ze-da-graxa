# Select

O componente Select permite que o usuário escolha uma opção de uma lista de opções predefinidas.

## Importação

```tsx
import { Select } from '@/components/Select';
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|---------|-----------|
| label | string | - | Rótulo do select |
| options | SelectOption[] | - | Lista de opções |
| placeholder | string | - | Texto do placeholder |
| error | boolean | false | Se está em estado de erro |
| hint | string | - | Texto de ajuda ou erro |
| required | boolean | false | Se é obrigatório |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Tamanho do select |
| disabled | boolean | false | Se está desabilitado |
| value | string | - | Valor selecionado |
| onChange | (value: string) => void | - | Callback quando o valor muda |
| className | string | - | Classes CSS adicionais |

### Interface SelectOption

```tsx
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Tokens de Design

### Cores
- `$text-primary`: Cor do texto principal (#616161)
- `$text-secondary`: Cor do texto secundário (#757575)
- `$text-placeholder`: Cor do placeholder (#9998A5)
- `$text-disabled`: Cor do texto desabilitado (#BDBDBD)
- `$primary-green`: Cor de destaque (#58D899)
- `$error`: Cor de erro (#F44336)
- `$border`: Cor da borda (#EDEDED)
- `$white`: Cor de fundo (#FFFFFF)
- `$background`: Cor de fundo desabilitado (#F5F5F5)

### Tipografia
- `$font-family-primary`: Fonte do select ('Inter', sans-serif)
- `$font-size-sm`: Tamanho do texto (14px)
- `$font-size-xs`: Tamanho do texto de hint/erro (12px)
- `$font-weight-regular`: Peso da fonte do texto (400)
- `$font-weight-medium`: Peso da fonte do label (500)

### Espaçamento
- `$spacing-unit`: Espaçamento base (4px)
- `$spacing-xs`: Espaçamento entre elementos (4px)
- `$spacing-sm`: Padding interno (8px)
- `$spacing-md`: Margem entre componentes (16px)

### Efeitos
- `$border-radius-md`: Borda arredondada (8px)
- `$transition-fast`: Transição entre estados (150ms ease-in-out)
- `$shadow-sm`: Sombra sutil no hover
- `$shadow-md`: Sombra do dropdown (0 4px 6px rgba(0, 0, 0, 0.1))
- `$focus-ring`: Anel de foco para acessibilidade

## Variantes de Tamanho

### Small (sm)
- Altura: 32px
- Font-size: $font-size-xs (12px)
- Padding interno: $spacing-sm (8px)
- Border-radius: $border-radius-sm (4px)

### Medium (md)
- Altura: 40px
- Font-size: $font-size-sm (14px)
- Padding interno: $spacing-md (16px)
- Border-radius: $border-radius-md (8px)

### Large (lg)
- Altura: 48px
- Font-size: $font-size-md (16px)
- Padding interno: $spacing-lg (24px)
- Border-radius: $border-radius-lg (12px)

## Estados

### Default
- Borda: $border
- Texto: $text-primary
- Background: $white

### Hover
- Sombra: $shadow-sm
- Opacidade: $hover-opacity (0.8)

### Focused
- Anel de foco: $focus-ring
- Borda: $primary-green

### Disabled
- Background: $background
- Texto: $text-disabled
- Opacidade: $disabled-opacity (0.5)

### Error
- Borda: $error
- Texto de erro: $error

## Dropdown
- Background: $white
- Sombra: $shadow-md
- Border-radius: Igual ao input
- Max-height: 300px
- Z-index: $z-index-dropdown (1000)

### Opção
- Padding: $spacing-sm $spacing-md
- Hover background: $background
- Selected: Background com $primary-green em 10% de opacidade
- Disabled: Texto em $text-disabled

## Acessibilidade

O componente Select segue as melhores práticas de acessibilidade:

1. **Roles e Atributos ARIA**
   - Usa elemento nativo `<select>`
   - `aria-invalid` para estado de erro
   - `aria-describedby` para mensagens de erro/dica
   - `aria-required` para campos obrigatórios

2. **Gerenciamento de Foco**
   - Focável via teclado (Tab)
   - Feedback visual de foco
   - Navegação por setas
   - Seleção por espaço/enter

3. **Contraste e Legibilidade**
   - Alto contraste entre estados
   - Tamanhos de fonte legíveis
   - Espaçamento adequado
   - Indicadores visuais claros

## Exemplos de Uso

### Select Básico

```tsx
<Select
  label="Estado"
  options={[
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de Janeiro' },
    { value: 'mg', label: 'Minas Gerais' }
  ]}
  onChange={(value) => console.log('Estado:', value)}
/>
```

### Select com Placeholder

```tsx
<Select
  label="Categoria"
  placeholder="Selecione uma categoria"
  options={[
    { value: '1', label: 'Categoria 1' },
    { value: '2', label: 'Categoria 2' }
  ]}
/>
```

### Select com Erro

```tsx
<Select
  label="País"
  error
  hint="Selecione um país válido"
  required
  options={[
    { value: 'br', label: 'Brasil' },
    { value: 'us', label: 'Estados Unidos' }
  ]}
/>
```

### Select com Opções Desabilitadas

```tsx
<Select
  label="Plano"
  options={[
    { value: 'free', label: 'Gratuito' },
    { value: 'pro', label: 'Pro', disabled: true },
    { value: 'enterprise', label: 'Enterprise' }
  ]}
/>
```

### Select de Tamanho Pequeno

```tsx
<Select
  label="Idioma"
  size="sm"
  options={[
    { value: 'pt', label: 'Português' },
    { value: 'en', label: 'English' }
  ]}
/>
```

## Testing

### Cenários Principais
1. **Renderização**
   - Renderiza com label e opções
   - Renderiza com placeholder
   - Renderiza em diferentes tamanhos
   - Renderiza opções desabilitadas

2. **Interatividade**
   - Abre dropdown ao clicar
   - Seleciona opção corretamente
   - Fecha ao selecionar opção
   - Mantém estado quando controlado

3. **Acessibilidade**
   - Navegação por teclado
   - Atributos ARIA corretos
   - Mensagens de erro anunciadas
   - Focus trap no dropdown

### Exemplo de Teste

```tsx
describe('Select', () => {
  const options = [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' },
    { value: '3', label: 'Opção 3', disabled: true }
  ];

  it('deve selecionar opção ao clicar', async () => {
    const onChange = jest.fn();
    render(
      <Select
        label="Test"
        options={options}
        onChange={onChange}
      />
    );
    
    const select = screen.getByRole('combobox');
    await userEvent.click(select);
    
    const option = screen.getByText('Opção 1');
    await userEvent.click(option);
    
    expect(onChange).toHaveBeenCalledWith('1');
    expect(select).toHaveValue('1');
  });

  it('não deve permitir selecionar opção desabilitada', async () => {
    const onChange = jest.fn();
    render(
      <Select
        label="Test"
        options={options}
        onChange={onChange}
      />
    );
    
    const select = screen.getByRole('combobox');
    await userEvent.click(select);
    
    const disabledOption = screen.getByText('Opção 3');
    await userEvent.click(disabledOption);
    
    expect(onChange).not.toHaveBeenCalled();
    expect(select).not.toHaveValue('3');
  });
});
```

## Componentes Relacionados

- `MultiSelect`: Para seleção múltipla
- `Combobox`: Select com busca
- `AutoComplete`: Select com sugestões
- `DropdownButton`: Para ações em menu

## Variantes

### Tamanho
- `sm`: 32px altura (formulários densos)
- `md`: 40px altura (padrão)
- `lg`: 48px altura (maior destaque)

### Estilo
- `outline`: Borda visível (padrão)
- `filled`: Fundo preenchido
- `flushed`: Apenas borda inferior

### Features
- `searchable`: Com campo de busca
- `creatable`: Permite criar novas opções
- `clearable`: Botão para limpar seleção
- `loading`: Estado de carregamento

## Boas Práticas

1. **UX**
   - Ordene opções logicamente
   - Limite número de opções visíveis
   - Use Combobox para listas longas
   - Mantenha labels concisas
   - Forneça feedback de seleção

2. **Performance**
   - Virtualize listas longas
   - Lazy load opções remotas
   - Debounce em busca
   - Memoize opções estáticas

3. **Manutenção**
   - Centralize opções comuns
   - Valide valores permitidos
   - Documente opções especiais
   - Use enums/constantes
   - Mantenha tipos atualizados

4. **Acessibilidade**
   - Suporte navegação completa por teclado
   - Anuncie mudanças de seleção
   - Mantenha foco ao fechar
   - Forneça textos descritivos
   - Teste com screen readers

## Exemplos Avançados

### Select com Busca e Criação

```tsx
<Select
  label="Tags"
  placeholder="Busque ou crie tags"
  options={tags}
  searchable
  creatable
  onCreate={(newTag) => {
    setTags([...tags, { value: newTag, label: newTag }]);
  }}
  onSearch={(query) => {
    // Filtra ou busca tags remotamente
    return filterTags(query);
  }}
/>
```

### Select com Opções Agrupadas

```tsx
<Select
  label="Produto"
  options={[
    {
      label: 'Óleos',
      options: [
        { value: 'oil1', label: 'Óleo Sintético' },
        { value: 'oil2', label: 'Óleo Mineral' }
      ]
    },
    {
      label: 'Filtros',
      options: [
        { value: 'filter1', label: 'Filtro de Óleo' },
        { value: 'filter2', label: 'Filtro de Ar' }
      ]
    }
  ]}
  renderOption={(option) => (
    <div className={styles.productOption}>
      <img src={option.image} alt="" />
      <div>
        <strong>{option.label}</strong>
        <small>{option.description}</small>
      </div>
      <span className={styles.price}>{option.price}</span>
    </div>
  )}
/>
```

## Considerações

1. **Performance**
   - Use `value` e `onChange` para controle de estado
   - Evite re-renders desnecessários
   - Limite o número de opções quando possível

2. **UX**
   - Use labels descritivos
   - Agrupe opções relacionadas
   - Ordene opções de forma lógica
   - Use placeholder quando apropriado
   - Considere estados vazios

3. **Acessibilidade**
   - Forneça labels descritivos
   - Use mensagens de erro claras
   - Teste navegação por teclado
   - Verifique contraste de cores
   - Suporte leitores de tela
