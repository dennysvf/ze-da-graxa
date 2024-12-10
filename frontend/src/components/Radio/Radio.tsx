import { forwardRef, InputHTMLAttributes, useContext, useId } from 'react'
import { RadioGroupContext } from './RadioGroup'
import styles from './Radio.module.scss'

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
  label: string
  value: string
  error?: string
  hint?: string
  required?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    label, 
    value,
    error, 
    hint,
    required,
    checked: controlledChecked, 
    defaultChecked,
    onChange,
    className,
    disabled,
    id: providedId,
    name: providedName,
    ...props 
  }, ref) => {
    const generatedId = useId()
    const id = providedId || generatedId
    const hintId = `${id}-hint`
    const errorId = `${id}-error`
    const hasHintOrError = !!(hint || error)
    const ariaDescribedby = hasHintOrError ? (error ? errorId : hintId) : undefined

    // Get context from RadioGroup if present
    const group = useContext(RadioGroupContext)
    const isChecked = group ? group.value === value : controlledChecked
    const name = group ? group.name : providedName
    const groupError = group?.error
    const finalError = error || groupError

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (group) {
        group.onChange(value)
      } else {
        onChange?.(e.target.checked)
      }
    }

    const radioClasses = [
      styles.radio,
      finalError && styles.error,
      disabled && styles.disabled,
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={styles.container}>
        <label className={styles.wrapper} htmlFor={id}>
          <div className={styles.inputWrapper}>
            <input
              type="radio"
              ref={ref}
              id={id}
              name={name}
              value={value}
              className={radioClasses}
              checked={isChecked}
              defaultChecked={defaultChecked}
              onChange={handleChange}
              disabled={disabled}
              aria-invalid={!!finalError}
              aria-describedby={ariaDescribedby}
              aria-required={required}
              role="radio"
              aria-checked={isChecked}
              {...props}
            />
            <div 
              className={styles.customRadio}
              aria-hidden="true"
            >
              {isChecked && (
                <div className={styles.dot} />
              )}
            </div>
            <span className={styles.label}>
              {label}
              {required && <span className={styles.required} aria-hidden="true">*</span>}
            </span>
          </div>
        </label>
        {!group && (
          <>
            {error && <span id={errorId} className={styles.errorMessage} role="alert">{error}</span>}
            {!error && hint && <span id={hintId} className={styles.hint}>{hint}</span>}
          </>
        )}
      </div>
    )
  }
)

Radio.displayName = 'Radio'
