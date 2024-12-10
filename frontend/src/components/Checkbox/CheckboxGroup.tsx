import React, { createContext, useContext, useCallback } from 'react';
import classNames from 'classnames';
import styles from './CheckboxGroup.module.scss';

interface CheckboxGroupContextValue {
  name?: string;
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
  error?: boolean;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | undefined>(undefined);

export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error('useCheckboxGroup must be used within a CheckboxGroup');
  }
  return context;
};

export interface CheckboxGroupProps {
  /**
   * Name for the checkbox group (used in forms)
   */
  name?: string;
  /**
   * Selected values
   */
  value: string[];
  /**
   * Callback when selection changes
   */
  onChange: (value: string[]) => void;
  /**
   * Label for the group
   */
  label?: string;
  /**
   * Helper text
   */
  hint?: string;
  /**
   * Whether the group is in an error state
   */
  error?: boolean;
  /**
   * Whether the group is disabled
   */
  disabled?: boolean;
  /**
   * Whether the group is required
   */
  required?: boolean;
  /**
   * Child checkboxes
   */
  children: React.ReactNode;
  /**
   * Additional CSS class names
   */
  className?: string;
}

export const CheckboxGroup = ({
  name,
  value,
  onChange,
  label,
  hint,
  error,
  disabled,
  required,
  children,
  className,
}: CheckboxGroupProps) => {
  const handleChange = useCallback(
    (newValue: string[]) => {
      onChange(newValue);
    },
    [onChange]
  );

  const contextValue: CheckboxGroupContextValue = {
    name,
    value,
    onChange: handleChange,
    disabled,
    error,
  };

  return (
    <div
      className={classNames(
        styles.group,
        {
          [styles.disabled]: disabled,
          [styles.error]: error,
        },
        className
      )}
      role="group"
      aria-labelledby={label ? 'group-label' : undefined}
      aria-describedby={hint ? 'group-hint' : undefined}
    >
      {label && (
        <div id="group-label" className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </div>
      )}
      <div className={styles.options}>
        <CheckboxGroupContext.Provider value={contextValue}>
          {children}
        </CheckboxGroupContext.Provider>
      </div>
      {hint && (
        <div id="group-hint" className={styles.hint}>
          {hint}
        </div>
      )}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
