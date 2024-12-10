# Variáveis Globais de CSS

## Cores
```scss
// Cores Principais
$primary: #58D899;
$secondary: #616161;
$accent: #F5FBF3;

// Tons de Cinza
$gray-100: #F5F5F5;
$gray-200: #EEEEEE;
$gray-300: #E0E0E0;
$gray-400: #BDBDBD;
$gray-500: #9E9E9E;
$gray-600: #757575;
$gray-700: #616161;
$gray-800: #424242;
$gray-900: #212121;

// Estados
$success: #4CAF50;
$warning: #FFC107;
$error: #F44336;
$info: #2196F3;

// Backgrounds
$bg-primary: #FFFFFF;
$bg-secondary: #F5F5F5;
$bg-tertiary: #F5FBF3;

// Texto
$text-primary: #212121;
$text-secondary: #616161;
$text-disabled: #9E9E9E;
```

## Tipografia
```scss
// Família de Fontes
$font-primary: 'Inter', sans-serif;
$font-secondary: 'Roboto', sans-serif;

// Tamanhos
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-2xl: 1.5rem;    // 24px
$font-size-3xl: 1.875rem;  // 30px
$font-size-4xl: 2.25rem;   // 36px

// Pesos
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Altura da Linha
$line-height-tight: 1.25;
$line-height-normal: 1.5;
$line-height-relaxed: 1.75;
```

## Espaçamento
```scss
// Base
$spacing-unit: 0.25rem;  // 4px

// Escala
$spacing-0: 0;
$spacing-1: $spacing-unit;        // 4px
$spacing-2: $spacing-unit * 2;    // 8px
$spacing-3: $spacing-unit * 3;    // 12px
$spacing-4: $spacing-unit * 4;    // 16px
$spacing-5: $spacing-unit * 5;    // 20px
$spacing-6: $spacing-unit * 6;    // 24px
$spacing-8: $spacing-unit * 8;    // 32px
$spacing-10: $spacing-unit * 10;  // 40px
$spacing-12: $spacing-unit * 12;  // 48px
$spacing-16: $spacing-unit * 16;  // 64px
$spacing-20: $spacing-unit * 20;  // 80px
$spacing-24: $spacing-unit * 24;  // 96px
```

## Bordas
```scss
// Raios
$border-radius-sm: 0.125rem;    // 2px
$border-radius-base: 0.25rem;   // 4px
$border-radius-md: 0.375rem;    // 6px
$border-radius-lg: 0.5rem;      // 8px
$border-radius-xl: 0.75rem;     // 12px
$border-radius-2xl: 1rem;       // 16px
$border-radius-full: 9999px;

// Larguras
$border-width-0: 0px;
$border-width-1: 1px;
$border-width-2: 2px;
$border-width-4: 4px;
$border-width-8: 8px;
```

## Sombras
```scss
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

## Grid
```scss
// Containers
$container-sm: 640px;
$container-md: 768px;
$container-lg: 1024px;
$container-xl: 1280px;
$container-2xl: 1440px;

// Grid
$grid-columns: 12;
$grid-gutter: $spacing-4;
```

## Z-Index
```scss
$z-index-0: 0;
$z-index-10: 10;
$z-index-20: 20;
$z-index-30: 30;
$z-index-40: 40;
$z-index-50: 50;
$z-index-auto: auto;

// Específicos
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-fixed: 1030;
$z-index-modal-backdrop: 1040;
$z-index-modal: 1050;
$z-index-popover: 1060;
$z-index-tooltip: 1070;
```

## Transições
```scss
// Durações
$duration-75: 75ms;
$duration-100: 100ms;
$duration-150: 150ms;
$duration-200: 200ms;
$duration-300: 300ms;
$duration-500: 500ms;
$duration-700: 700ms;
$duration-1000: 1000ms;

// Timing Functions
$ease-linear: linear;
$ease-in: cubic-bezier(0.4, 0, 1, 1);
$ease-out: cubic-bezier(0, 0, 0.2, 1);
$ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

## Media Queries
```scss
// Breakpoints
$screen-sm: 640px;
$screen-md: 768px;
$screen-lg: 1024px;
$screen-xl: 1280px;
$screen-2xl: 1440px;

// Mixins
@mixin sm {
  @media (min-width: $screen-sm) { @content; }
}

@mixin md {
  @media (min-width: $screen-md) { @content; }
}

@mixin lg {
  @media (min-width: $screen-lg) { @content; }
}

@mixin xl {
  @media (min-width: $screen-xl) { @content; }
}

@mixin 2xl {
  @media (min-width: $screen-2xl) { @content; }
}
```
