import { CSSProperties, ElementType, forwardRef, ReactNode } from 'react'
import styles from './Stack.module.scss'
import clsx from 'clsx'

type SpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Alignment = 'start' | 'center' | 'end' | 'stretch'

interface Props {
  as?: ElementType
  direction?: 'row' | 'column'
  spacing?: SpacingSize
  wrap?: boolean
  align?: Alignment
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  className?: string
  children: ReactNode
  fullWidth?: boolean
  style?: CSSProperties
}

export const Stack = forwardRef<HTMLElement, Props>(({
  as: Component = 'div',
  direction = 'column',
  spacing = 'md',
  wrap = false,
  align = 'stretch',
  justify = 'start',
  className,
  children,
  fullWidth = false,
  style,
  ...props
}, ref) => {
  const stackClass = clsx(
    styles.stack,
    styles[`direction-${direction}`],
    styles[`spacing-${spacing}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    {
      [styles.wrap]: wrap,
      [styles.fullWidth]: fullWidth,
    },
    className
  )

  return (
    <Component
      ref={ref}
      className={stackClass}
      style={style}
      {...props}
    >
      {children}
    </Component>
  )
})
