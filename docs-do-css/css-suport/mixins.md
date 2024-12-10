# Mixins CSS

## Layout e Posicionamento

```scss
// Flexbox
@mixin flex($direction: row, $justify: flex-start, $align: stretch, $wrap: nowrap) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  flex-wrap: $wrap;
}

// Grid
@mixin grid($columns: 1, $gap: $spacing-4) {
  display: grid;
  grid-template-columns: repeat($columns, minmax(0, 1fr));
  gap: $gap;
}

// Posicionamento Absoluto
@mixin absolute($top: auto, $right: auto, $bottom: auto, $left: auto) {
  position: absolute;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
}

// Centralização
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Tipografia

```scss
// Texto Truncado
@mixin truncate($lines: 1) {
  @if $lines == 1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

// Tipografia Responsiva
@mixin fluid-type($min-vw, $max-vw, $min-size, $max-size) {
  font-size: $min-size;
  
  @media screen and (min-width: $min-vw) {
    font-size: calc(#{$min-size} + #{strip-unit($max-size - $min-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
  }
  
  @media screen and (min-width: $max-vw) {
    font-size: $max-size;
  }
}
```

## Interações

```scss
// Hover com Transição
@mixin hover-transition($property: all, $duration: 200ms, $timing: ease-in-out) {
  transition: $property $duration $timing;
  
  &:hover {
    @content;
  }
}

// Focus Ring
@mixin focus-ring($color: $primary, $offset: 2px) {
  &:focus {
    outline: none;
    box-shadow: 0 0 0 $offset rgba($color, 0.5);
  }
}

// Ripple Effect
@mixin ripple($color: currentColor) {
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba($color, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  
  &:active::after {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: all 0.6s ease-out;
  }
}
```

## Responsividade

```scss
// Container Responsivo
@mixin container($padding: $spacing-4) {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: $padding;
  padding-left: $padding;
  
  @include sm {
    max-width: $container-sm;
  }
  
  @include md {
    max-width: $container-md;
  }
  
  @include lg {
    max-width: $container-lg;
  }
  
  @include xl {
    max-width: $container-xl;
  }
}

// Hide/Show Responsivo
@mixin hide-until($breakpoint) {
  display: none;
  
  @include $breakpoint {
    display: block;
  }
}

@mixin show-until($breakpoint) {
  display: block;
  
  @include $breakpoint {
    display: none;
  }
}
```

## Elementos Visuais

```scss
// Card
@mixin card($padding: $spacing-4, $radius: $border-radius-base, $shadow: $shadow-base) {
  background-color: $bg-primary;
  border-radius: $radius;
  box-shadow: $shadow;
  padding: $padding;
}

// Botão Base
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-2 $spacing-4;
  border-radius: $border-radius-base;
  font-weight: $font-weight-medium;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Gradiente
@mixin gradient($start-color, $end-color, $direction: to right) {
  background: linear-gradient($direction, $start-color, $end-color);
}
```

## Utilitários

```scss
// Aspect Ratio
@mixin aspect-ratio($width, $height) {
  position: relative;
  
  &::before {
    content: '';
    display: block;
    padding-top: ($height / $width) * 100%;
  }
  
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

// Scrollbar Personalizada
@mixin custom-scrollbar($width: 8px, $track-color: $gray-200, $thumb-color: $gray-400) {
  &::-webkit-scrollbar {
    width: $width;
  }
  
  &::-webkit-scrollbar-track {
    background: $track-color;
  }
  
  &::-webkit-scrollbar-thumb {
    background: $thumb-color;
    border-radius: $width / 2;
  }
}

// Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
```

## Animações

```scss
// Fade In
@mixin fade-in($duration: 300ms, $delay: 0ms) {
  opacity: 0;
  animation: fadeIn $duration ease-in-out forwards $delay;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

// Slide In
@mixin slide-in($direction: 'up', $distance: 20px, $duration: 300ms, $delay: 0ms) {
  opacity: 0;
  
  @if $direction == 'up' {
    transform: translateY($distance);
  } @else if $direction == 'down' {
    transform: translateY(-$distance);
  } @else if $direction == 'left' {
    transform: translateX($distance);
  } @else if $direction == 'right' {
    transform: translateX(-$distance);
  }
  
  animation: slideIn $duration ease-out forwards $delay;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translate(0);
    }
  }
}
```

## Debug

```scss
// Outline Debug
@mixin debug-outline($color: red) {
  * {
    outline: 1px solid $color;
  }
}

// Grid Debug
@mixin debug-grid($columns: 12, $gap: $spacing-4) {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: repeating-linear-gradient(
      to right,
      rgba(red, 0.1),
      rgba(red, 0.1) calc((100% - (#{$gap} * (#{$columns} - 1))) / #{$columns}),
      transparent calc((100% - (#{$gap} * (#{$columns} - 1))) / #{$columns}),
      transparent calc((100% - (#{$gap} * (#{$columns} - 1))) / #{$columns} + #{$gap})
    );
    pointer-events: none;
  }
}
```
