# Componentes Base CSS

## Botões

```scss
// Variáveis
$button-height: 40px;
$button-padding: 0 16px;
$button-border-radius: 4px;
$button-transition: all 0.2s ease-in-out;

// Estilos Base
.btn {
  height: $button-height;
  padding: $button-padding;
  border-radius: $button-border-radius;
  font-weight: 500;
  cursor: pointer;
  transition: $button-transition;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Variantes
.btn-primary {
  @extend .btn;
  background-color: $primary;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: darken($primary, 10%);
  }
}

.btn-secondary {
  @extend .btn;
  background-color: $secondary;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: darken($secondary, 10%);
  }
}

.btn-outline {
  @extend .btn;
  border: 1px solid $primary;
  color: $primary;
  background: transparent;
  
  &:hover:not(:disabled) {
    background-color: rgba($primary, 0.1);
  }
}
```

## Inputs

```scss
// Variáveis
$input-height: 40px;
$input-padding: 0 12px;
$input-border: 1px solid $gray-300;
$input-border-radius: 4px;
$input-transition: all 0.2s ease-in-out;

// Estilos Base
.input {
  height: $input-height;
  padding: $input-padding;
  border: $input-border;
  border-radius: $input-border-radius;
  transition: $input-transition;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: $primary;
    box-shadow: 0 0 0 2px rgba($primary, 0.2);
  }
  
  &:disabled {
    background-color: $gray-100;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: $gray-400;
  }
}

// Variantes
.input-error {
  @extend .input;
  border-color: $error;
  
  &:focus {
    border-color: $error;
    box-shadow: 0 0 0 2px rgba($error, 0.2);
  }
}

.input-success {
  @extend .input;
  border-color: $success;
  
  &:focus {
    border-color: $success;
    box-shadow: 0 0 0 2px rgba($success, 0.2);
  }
}
```

## Cards

```scss
// Variáveis
$card-padding: 16px;
$card-border-radius: 8px;
$card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
$card-transition: all 0.3s ease-in-out;

// Estilos Base
.card {
  padding: $card-padding;
  border-radius: $card-border-radius;
  background-color: white;
  box-shadow: $card-shadow;
  transition: $card-transition;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

// Variantes
.card-interactive {
  @extend .card;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
  }
}

.card-bordered {
  @extend .card;
  border: 1px solid $gray-200;
  box-shadow: none;
  
  &:hover {
    border-color: $primary;
  }
}
```

## Badges

```scss
// Variáveis
$badge-padding: 4px 8px;
$badge-border-radius: 12px;
$badge-font-size: 12px;

// Estilos Base
.badge {
  display: inline-flex;
  align-items: center;
  padding: $badge-padding;
  border-radius: $badge-border-radius;
  font-size: $badge-font-size;
  font-weight: 500;
  line-height: 1;
}

// Variantes
.badge-primary {
  @extend .badge;
  background-color: rgba($primary, 0.1);
  color: $primary;
}

.badge-error {
  @extend .badge;
  background-color: rgba($error, 0.1);
  color: $error;
}

.badge-success {
  @extend .badge;
  background-color: rgba($success, 0.1);
  color: $success;
}
```

## Alerts

```scss
// Variáveis
$alert-padding: 12px 16px;
$alert-border-radius: 4px;
$alert-border-width: 1px;

// Estilos Base
.alert {
  padding: $alert-padding;
  border-radius: $alert-border-radius;
  border-left: 4px solid;
  display: flex;
  align-items: center;
  gap: 12px;
  
  .alert-icon {
    flex-shrink: 0;
  }
  
  .alert-content {
    flex: 1;
  }
  
  .alert-close {
    flex-shrink: 0;
    cursor: pointer;
  }
}

// Variantes
.alert-info {
  @extend .alert;
  background-color: rgba($info, 0.1);
  border-left-color: $info;
  color: darken($info, 20%);
}

.alert-success {
  @extend .alert;
  background-color: rgba($success, 0.1);
  border-left-color: $success;
  color: darken($success, 20%);
}

.alert-warning {
  @extend .alert;
  background-color: rgba($warning, 0.1);
  border-left-color: $warning;
  color: darken($warning, 20%);
}

.alert-error {
  @extend .alert;
  background-color: rgba($error, 0.1);
  border-left-color: $error;
  color: darken($error, 20%);
}
```

## Modal

```scss
// Variáveis
$modal-padding: 24px;
$modal-border-radius: 8px;
$modal-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
$modal-backdrop: rgba(0, 0, 0, 0.5);

// Estilos Base
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $modal-backdrop;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $z-index-modal-backdrop;
}

.modal {
  background-color: white;
  border-radius: $modal-border-radius;
  box-shadow: $modal-shadow;
  max-width: 500px;
  width: 90%;
  z-index: $z-index-modal;
  
  .modal-header {
    padding: $modal-padding;
    border-bottom: 1px solid $gray-200;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .modal-content {
    padding: $modal-padding;
  }
  
  .modal-footer {
    padding: $modal-padding;
    border-top: 1px solid $gray-200;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
  }
}
```

## Spinner

```scss
// Variáveis
$spinner-size: 24px;
$spinner-border-width: 2px;
$spinner-animation-duration: 0.8s;

// Estilos Base
.spinner {
  width: $spinner-size;
  height: $spinner-size;
  border: $spinner-border-width solid $gray-200;
  border-top-color: $primary;
  border-radius: 50%;
  animation: spin $spinner-animation-duration linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// Variantes
.spinner-sm {
  @extend .spinner;
  width: 20px;
  height: 20px;
}

.spinner-lg {
  @extend .spinner;
  width: 32px;
  height: 32px;
}
```

## Tabs

```scss
// Variáveis
$tab-height: 40px;
$tab-padding: 0 16px;
$tab-border-radius: 4px;

// Estilos Base
.tabs {
  display: flex;
  border-bottom: 1px solid $gray-200;
  
  .tab {
    height: $tab-height;
    padding: $tab-padding;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    color: $gray-600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.2s ease-in-out;
    }
    
    &:hover {
      color: $primary;
    }
    
    &.active {
      color: $primary;
      
      &::after {
        background-color: $primary;
      }
    }
  }
}

.tab-content {
  padding: 16px 0;
}
```

## Tooltip

```scss
// Variáveis
$tooltip-bg: $gray-900;
$tooltip-color: white;
$tooltip-padding: 8px 12px;
$tooltip-border-radius: 4px;
$tooltip-font-size: 12px;

// Estilos Base
.tooltip {
  position: relative;
  display: inline-block;
  
  &::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: $tooltip-padding;
    background-color: $tooltip-bg;
    color: $tooltip-color;
    font-size: $tooltip-font-size;
    border-radius: $tooltip-border-radius;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
  }
  
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
}
```

## Dropdown

```scss
// Variáveis
$dropdown-width: 200px;
$dropdown-padding: 8px 0;
$dropdown-border-radius: 4px;
$dropdown-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

// Estilos Base
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: $dropdown-width;
  padding: $dropdown-padding;
  background-color: white;
  border-radius: $dropdown-border-radius;
  box-shadow: $dropdown-shadow;
  z-index: $z-index-dropdown;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.2s ease-in-out;
  
  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.dropdown-item {
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: $gray-100;
  }
}
```

## Checkbox e Radio

```scss
// Variáveis
$control-size: 20px;
$control-border: 2px solid $gray-400;
$control-border-radius: 4px;

// Estilos Base
.control {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .control-indicator {
    width: $control-size;
    height: $control-size;
    border: $control-border;
    margin-right: 8px;
    transition: all 0.2s ease-in-out;
  }
}

// Checkbox
.checkbox {
  @extend .control;
  
  .control-indicator {
    border-radius: $control-border-radius;
  }
  
  input:checked ~ .control-indicator {
    background-color: $primary;
    border-color: $primary;
    
    &::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 3px;
      width: 6px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}

// Radio
.radio {
  @extend .control;
  
  .control-indicator {
    border-radius: 50%;
  }
  
  input:checked ~ .control-indicator {
    border-color: $primary;
    
    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 4px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: $primary;
    }
  }
}
```
