import { createContext, forwardRef, HTMLAttributes, useId } from 'react'
import styles from './Radio.module.scss'

interface RadioGroupContextType {
  name: string
  value: string
  error?: string
  onChange: (value: string) => void
}

export const RadioGroupContext = createContext<RadioGroupContextType | null>(null)

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  name: string
  value: string
  error?: string
  hint?: string
  required?: boolean
  orientation?: 'horizontal' | 'vertical'
  onChange: (value: string) => void
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ 
    label,
    name,
    value,
    error,
    hint,
    required,
    orientation = 'vertical',
    onChange,
    className,
    children,
    id: providedId,
    ...props 
  }, ref) => {
    const generatedId = useId()
    const id = providedId || generatedId
    const labelId = `${id}-label`
    const hintId = `${id}-hint`
    const errorId = `${id}-error`
    const hasHintOrError = !!(hint || error)
    const ariaDescribedby = hasHintOrError ? (error ? errorId : hintId) : undefined

    const groupClasses = [
      styles.group,
      styles[orientation],
      className
    ]
      .filter(Boolean)
      .join(' ')

    const contextValue = {
      name,
      value,
      error,
      onChange
    }

    return (
      <div 
        ref={ref}
        className={styles.container}
        role="radiogroup"
        aria-labelledby={labelId}
        aria-describedby={ariaDescribedby}
        aria-required={required}
        aria-invalid={!!error}
        {...props}
      >
        <span id={labelId} className={styles.groupLabel}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </span>
        <div className={groupClasses}>
          <RadioGroupContext.Provider value={contextValue}>
            {children}
          </RadioGroupContext.Provider>
        </div>
        {error && <span id={errorId} className={styles.errorMessage} role="alert">{error}</span>}
        {!error && hint && <span id={hintId} className={styles.hint}>{hint}</span>}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
