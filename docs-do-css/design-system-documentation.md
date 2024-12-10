# Zé da Graxa - Design System Documentation

## Table of Contents
1. [Design Tokens](#design-tokens)
2. [Components Library](#components-library)
3. [Page Templates](#page-templates)
4. [Accessibility Guidelines](#accessibility-guidelines)
5. [Implementation Guide](#implementation-guide)

## Design Tokens

### Colors

```scss
// Brand Colors
$primary-green: #58D899;
$primary-text: #616161;

// Neutral Colors
$white: #FFFFFF;
$background: #F5F5F5;
$border: #EDEDED;

// Text Colors
$text-primary: #616161;
$text-placeholder: #9998A5;

// State Colors
$hover-opacity: 0.9;
$disabled-opacity: 0.7;
```

### Typography

```scss
// Font Family
$font-family-primary: 'Inter', sans-serif;

// Font Sizes
$font-size-h1: 25px;
$font-size-h2: 20px;
$font-size-button: 18px;
$font-size-body: 14px;
$font-size-small: 10px;

// Font Weights
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;

// Letter Spacing
$letter-spacing-default: 0.20px;
```

### Spacing

```scss
// Container
$container-width: 1440px;
$content-max-width: 1200px;

// Padding
$padding-container: (
  top: 77px,
  bottom: 369px,
  left: 172px,
  right: 902px
);

// Gaps
$gap-large: 138px;
$gap-medium: 97px;
$gap-small: 16px;

// Component Spacing
$input-padding: 19px;
$card-padding: 15px;
```

### Borders & Effects

```scss
// Border Radius
$border-radius-default: 5px;
$border-radius-large: 15px;

// Border Width
$border-width-default: 1px;

// Shadows
$shadow-card: 0px 2px 4px rgba(0, 0, 0, 0.05);
$shadow-dropdown: 0px 4px 6px rgba(0, 0, 0, 0.1);

// Transitions
$transition-default: all 0.3s ease;
$transition-fast: all 0.2s ease;
```

## Components Library

### 1. Form Elements

#### Input Field
```scss
.input-field {
  width: 366px;
  height: 55px;
  background: $white;
  border-radius: $border-radius-default;
  border: $border-width-default solid $border;
  padding: $input-padding;
  
  &__label {
    color: $text-primary;
    font-size: $font-size-body;
    font-weight: $font-weight-regular;
    letter-spacing: $letter-spacing-default;
  }
  
  &::placeholder {
    color: $text-placeholder;
  }
  
  &:focus {
    outline: 2px solid $primary-green;
    outline-offset: 2px;
  }
}
```

#### Button
```scss
.button {
  height: 55px;
  border-radius: $border-radius-default;
  font-weight: $font-weight-medium;
  letter-spacing: $letter-spacing-default;
  transition: $transition-fast;
  
  &--primary {
    background: $primary-green;
    color: $white;
    
    &:hover {
      opacity: $hover-opacity;
    }
  }
  
  &--secondary {
    background: $white;
    border: $border-width-default solid $border;
    color: $text-primary;
  }
}
```

### 2. Cards

#### Product Card
```scss
.product-card {
  width: 288px;
  
  &__image-container {
    height: 365px;
    background: $background;
    border-radius: $border-radius-default;
    border: $border-width-default solid $border;
  }
  
  &__content {
    height: 312px;
    background: $white;
    border-radius: $border-radius-default;
    border: $border-width-default solid $border;
    padding: $card-padding;
  }
  
  &__image {
    width: 208px;
    height: 175.34px;
    margin: 37px 40px;
  }
  
  &__favorite {
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
```

### 3. Navigation

#### Search Bar
```scss
.search-bar {
  width: 630px;
  height: 40px;
  background: $background;
  border-radius: $border-radius-large;
  padding: 12px 18px;
  
  &__input {
    border: none;
    background: transparent;
    width: 100%;
    
    &::placeholder {
      color: $text-placeholder;
    }
  }
  
  &__icon {
    width: 20px;
    height: 20px;
    color: $text-primary;
  }
}
```

## Page Templates

### 1. Authentication Pages
Common characteristics across login and registration:
- Centered layout
- Logo at top
- Form width: 366px
- White background
- Consistent spacing

### 2. Product Pages
Common characteristics:
- Grid layout
- 4 columns on desktop
- 16px gap between items
- Filters at top
- Pagination at bottom

### 3. Administrative Pages
Common characteristics:
- Sidebar navigation
- Top header with actions
- Content area with padding
- Data tables with consistent styling

## Accessibility Guidelines

### 1. Color Contrast
- Text on white: #616161 (meets WCAG AA)
- Buttons: white on #58D899 (meets WCAG AA)
- Focus states: 2px solid #58D899

### 2. Interactive Elements
```html
<!-- Buttons -->
<button class="button" aria-label="Action description">
  Button Text
</button>

<!-- Form Fields -->
<input 
  type="text"
  aria-label="Field description"
  aria-required="true"
/>

<!-- Icons -->
<button class="icon-button" aria-label="Icon action">
  <svg>...</svg>
</button>
```

### 3. Keyboard Navigation
- Tab order follows visual layout
- Focus visible on all interactive elements
- Skip links for main content
- Dropdown menus accessible via keyboard

## Implementation Guide

### 1. File Structure
```
src/
├── styles/
│   ├── tokens/
│   │   ├── colors.scss
│   │   ├── typography.scss
│   │   └── spacing.scss
│   ├── components/
│   │   ├── buttons.scss
│   │   ├── inputs.scss
│   │   └── cards.scss
│   └── pages/
│       ├── auth.scss
│       └── products.scss
├── components/
│   ├── Button/
│   ├── Input/
│   └── Card/
└── pages/
    ├── Auth/
    └── Products/
```

### 2. Component Implementation
```typescript
// Example Button Component
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'medium',
  children,
  onClick,
  disabled
}) => {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

### 3. Best Practices
1. Use design tokens instead of hard-coded values
2. Implement responsive designs using mixins
3. Follow BEM naming convention
4. Ensure accessibility compliance
5. Test across browsers
6. Optimize for performance

### 4. Quality Checklist
- [ ] Design tokens implemented
- [ ] Components responsive
- [ ] Accessibility tested
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] Documentation complete
