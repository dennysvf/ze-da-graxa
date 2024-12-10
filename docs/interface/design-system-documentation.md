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
$text-secondary: #757575;
$text-placeholder: #9998A5;
$text-disabled: #BDBDBD;

// Feedback Colors
$success: #4CAF50;
$error: #F44336;
$warning: #FF9800;
$info: #2196F3;

// State Colors
$hover-opacity: 0.8;
$disabled-opacity: 0.5;
$focus-ring: rgba(88, 216, 153, 0.4);
```

### Typography

```scss
// Font Family
$font-family-primary: 'Inter', sans-serif;
$font-family-secondary: 'Roboto', sans-serif;

// Font Sizes
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-2xl: 1.5rem;    // 24px

// Font Weights
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Line Heights
$line-height-tight: 1.25;
$line-height-base: 1.5;
$line-height-relaxed: 1.75;
```

### Spacing

```scss
// Base spacing unit (4px)
$spacing-unit: 0.25rem;

// Spacing scale
$spacing-xs: $spacing-unit;      // 4px
$spacing-sm: $spacing-unit * 2;  // 8px
$spacing-md: $spacing-unit * 4;  // 16px
$spacing-lg: $spacing-unit * 6;  // 24px
$spacing-xl: $spacing-unit * 8;  // 32px
$spacing-2xl: $spacing-unit * 12;// 48px

// Component specific spacing
$button-padding-x: $spacing-md;
$button-padding-y: $spacing-sm;
$input-padding: $spacing-sm;
$card-padding: $spacing-md;
$section-margin: $spacing-2xl;
```

### Effects

```scss
// Shadows
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

// Transitions
$transition-fast: 150ms ease-in-out;
$transition-normal: 250ms ease-in-out;
$transition-slow: 350ms ease-in-out;

// Border Radius
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-radius-full: 9999px;
```

### Z-Index Scale

```scss
$z-index-base: 0;
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-fixed: 1030;
$z-index-modal-backdrop: 1040;
$z-index-modal: 1050;
$z-index-popover: 1060;
$z-index-tooltip: 1070;
```

## Components Library

### Form Components
- [Button](../components/Button.md)
- [Input](../components/Input.md)
- [Select](../components/Select.md)
- [Checkbox](../components/Checkbox.md)
- [Radio](../components/Radio.md)

### Feedback Components
- [Alert](../components/Alert.md)
- [Toast](../components/Toast.md)
- [Modal](../components/Modal.md)
- [Spinner](../components/Spinner.md)

### Layout Components
- [Card](../components/Card.md)
- [Grid](../components/Grid.md)
- [Container](../components/Container.md)
- [Divider](../components/Divider.md)

## Implementation Guide

### Component Structure

All components should follow this basic structure:
1. **Props Interface** - Define TypeScript interface for component props
2. **Component Definition** - Use functional components with proper type annotations
3. **Styles** - Use SCSS modules with design tokens
4. **Tests** - Include unit tests and accessibility tests
5. **Documentation** - Update component documentation

Example:
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  disabled,
  onClick,
}) => {
  // Component implementation
};
```

### Code Standards

1. **Naming Conventions**
   - Components: PascalCase
   - Files: kebab-case
   - CSS Classes: BEM methodology
   - Props: camelCase

2. **File Organization**
   ```
   components/
   ├── Button/
   │   ├── Button.tsx
   │   ├── Button.module.scss
   │   ├── Button.test.tsx
   │   └── index.ts
   ```

3. **Testing Requirements**
   - Unit tests for all components
   - Integration tests for complex interactions
   - Accessibility tests (ARIA, keyboard navigation)
   - Visual regression tests for UI changes

4. **Performance Guidelines**
   - Lazy load components when possible
   - Optimize bundle size
   - Use React.memo for expensive renders
   - Implement proper error boundaries

## Page Templates

### Common Layouts
1. **Product List**
   - Grid layout
   - Filtering sidebar
   - Sort controls
   - Pagination

2. **Product Detail**
   - Image gallery
   - Product info
   - Add to cart
   - Related products

3. **Checkout Flow**
   - Cart review
   - Shipping info
   - Payment info
   - Order confirmation

## Best Practices

### 1. Component Development
- Single responsibility principle
- Prop type validation
- Error boundary implementation
- Loading state handling
- Empty state handling

### 2. State Management
- Local state when possible
- Context for shared state
- Redux for complex state
- Proper error handling
- Loading indicators

### 3. Testing Strategy
- Unit tests for logic
- Integration tests for flows
- E2E tests for critical paths
- Visual regression tests
- Accessibility tests

### 4. Documentation
- Component API
- Usage examples
- Props documentation
- Accessibility notes
- Performance considerations

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
