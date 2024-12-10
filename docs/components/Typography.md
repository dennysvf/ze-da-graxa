# Typography

O componente Typography é responsável por definir a hierarquia e os estilos tipográficos do design system.

## Variantes

### Headings

- **h1**: Títulos principais, usado em headers de página
  - Tamanho: 30px (desktop) / 20px (mobile)
  - Peso: Semibold
  - Tracking: -0.02em

- **h2**: Subtítulos importantes
  - Tamanho: 20px (desktop) / 18px (mobile) 
  - Peso: Semibold
  - Tracking: -0.01em

- **h3**: Títulos de seção
  - Tamanho: 18px (desktop) / 16px (mobile)
  - Peso: Medium

- **h4**: Subtítulos de seção
  - Tamanho: 16px (desktop) / 14px (mobile)
  - Peso: Medium

### Body Text

- **body1**: Texto principal
  - Tamanho: 16px
  - Peso: Regular
  - Line height: 1.5

- **body2**: Texto secundário
  - Tamanho: 14px
  - Peso: Regular
  - Line height: 1.5

- **caption**: Texto auxiliar
  - Tamanho: 12px
  - Peso: Regular
  - Line height: 1.5

## Cores

- **primary**: Texto principal
- **secondary**: Texto secundário
- **disabled**: Texto desabilitado

## Alinhamento

- **left**: Alinhado à esquerda
- **center**: Centralizado
- **right**: Alinhado à direita

## Exemplo de Uso

```tsx
import Typography from './Typography';

function Example() {
  return (
    <>
      <Typography variant="h1">Título Principal</Typography>
      <Typography variant="h2">Subtítulo</Typography>
      <Typography variant="body1">
        Este é um exemplo de texto principal usando a variante body1.
      </Typography>
      <Typography variant="body2" color="secondary">
        Este é um texto secundário usando a variante body2.
      </Typography>
      <Typography variant="caption" align="center">
        Este é um texto de caption centralizado.
      </Typography>
    </>
  );
}
```

## Tokens de Design

O componente Typography utiliza os seguintes tokens:

- **Font Family**: `--font-family-primary`
- **Font Sizes**: 
  - `--font-size-xs`: 12px
  - `--font-size-sm`: 14px
  - `--font-size-md`: 16px
  - `--font-size-lg`: 18px
  - `--font-size-xl`: 20px
- **Font Weights**:
  - `--font-weight-regular`: 400
  - `--font-weight-medium`: 500
  - `--font-weight-semibold`: 600
- **Colors**:
  - `--text-primary`
  - `--text-secondary`
  - `--text-disabled`

## Responsividade

O componente se adapta automaticamente em telas menores (< 768px):

- h1: reduz de 30px para 20px
- h2: reduz de 20px para 18px
- h3: reduz de 18px para 16px
- h4: reduz de 16px para 14px
