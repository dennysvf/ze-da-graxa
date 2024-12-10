# Breakpoints e Media Queries

## Breakpoints Base

```scss
// Breakpoints
$breakpoints: (
  'xs': 0,
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
  '2xl': 1440px
);

// Container Sizes
$container-max-widths: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
  '2xl': 1440px
);
```

## Mixins de Media Queries

```scss
// Mixin para Media Query acima de um breakpoint
@mixin breakpoint-up($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$breakpoint}' não encontrado no mapa $breakpoints.";
  }
}

// Mixin para Media Query abaixo de um breakpoint
@mixin breakpoint-down($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (max-width: map-get($breakpoints, $breakpoint) - 1) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$breakpoint}' não encontrado no mapa $breakpoints.";
  }
}

// Mixin para Media Query entre dois breakpoints
@mixin breakpoint-between($lower, $upper) {
  @if map-has-key($breakpoints, $lower) and map-has-key($breakpoints, $upper) {
    @media (min-width: map-get($breakpoints, $lower)) and (max-width: map-get($breakpoints, $upper) - 1) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$lower}' ou '#{$upper}' não encontrado no mapa $breakpoints.";
  }
}
```

## Uso dos Breakpoints

### 1. Layout Responsivo

```scss
.container {
  padding: 1rem;
  
  @include breakpoint-up('sm') {
    padding: 1.5rem;
  }
  
  @include breakpoint-up('md') {
    padding: 2rem;
  }
  
  @include breakpoint-up('lg') {
    padding: 2.5rem;
  }
}
```

### 2. Grid System

```scss
.grid {
  display: grid;
  gap: 1rem;
  
  // Mobile: 1 coluna
  grid-template-columns: 1fr;
  
  // Tablet: 2 colunas
  @include breakpoint-up('md') {
    grid-template-columns: repeat(2, 1fr);
  }
  
  // Desktop: 3 colunas
  @include breakpoint-up('lg') {
    grid-template-columns: repeat(3, 1fr);
  }
  
  // Wide Desktop: 4 colunas
  @include breakpoint-up('xl') {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### 3. Tipografia Responsiva

```scss
.heading {
  font-size: 1.5rem; // 24px
  
  @include breakpoint-up('md') {
    font-size: 2rem; // 32px
  }
  
  @include breakpoint-up('lg') {
    font-size: 2.5rem; // 40px
  }
}
```

### 4. Navegação Responsiva

```scss
.nav {
  // Mobile: Menu hamburguer
  @include breakpoint-down('md') {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    transition: right 0.3s ease;
    
    &.is-open {
      right: 0;
    }
  }
  
  // Desktop: Menu horizontal
  @include breakpoint-up('md') {
    position: static;
    height: auto;
    display: flex;
    gap: 2rem;
  }
}
```

### 5. Visibilidade Responsiva

```scss
// Classes utilitárias para visibilidade
.hide-sm {
  @include breakpoint-down('sm') {
    display: none !important;
  }
}

.hide-md {
  @include breakpoint-down('md') {
    display: none !important;
  }
}

.show-sm {
  @include breakpoint-up('sm') {
    display: block !important;
  }
}

.show-md {
  @include breakpoint-up('md') {
    display: block !important;
  }
}
```

## Orientação do Dispositivo

```scss
// Mixin para orientação do dispositivo
@mixin orientation($direction) {
  @media (orientation: $direction) {
    @content;
  }
}

// Exemplo de uso
.card {
  padding: 1rem;
  
  @include orientation('landscape') {
    padding: 2rem;
    flex-direction: row;
  }
  
  @include orientation('portrait') {
    padding: 1.5rem;
    flex-direction: column;
  }
}
```

## Aspect Ratio

```scss
// Mixin para aspect ratio específico
@mixin aspect-ratio($width, $height) {
  aspect-ratio: $width / $height;
  
  @supports not (aspect-ratio: 1) {
    &::before {
      float: left;
      padding-top: percentage($height / $width);
      content: '';
    }
    
    &::after {
      display: block;
      content: '';
      clear: both;
    }
  }
}

// Exemplo de uso
.video-container {
  @include aspect-ratio(16, 9);
  
  @include breakpoint-up('md') {
    @include aspect-ratio(21, 9);
  }
}
```

## Container Responsivo

```scss
// Mixin para container responsivo
@mixin make-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  
  @each $breakpoint, $container-max-width in $container-max-widths {
    @include breakpoint-up($breakpoint) {
      max-width: $container-max-width;
    }
  }
}

// Exemplo de uso
.container {
  @include make-container;
}
```

## Debug de Breakpoints

```scss
// Mixin para debug de breakpoints
@mixin debug-breakpoints {
  body::after {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0.5rem;
    background: black;
    color: white;
    font-size: 12px;
    z-index: 9999;
    
    @each $breakpoint, $value in $breakpoints {
      @include breakpoint-up($breakpoint) {
        content: "#{$breakpoint} (≥#{$value})";
      }
    }
  }
}

// Ativar apenas em desenvolvimento
@if $env == 'development' {
  @include debug-breakpoints;
}
```
