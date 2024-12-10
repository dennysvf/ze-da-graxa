import { CSSProperties } from 'react'
import styles from './Divider.module.scss'
import clsx from 'clsx'

interface Props {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed'
  color?: 'light' | 'medium' | 'dark'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
  style?: CSSProperties
}

export const Divider = ({
  orientation = 'horizontal',
  variant = 'solid',
  color = 'medium',
  spacing = 'md',
  className,
  style,
}: Props) => {
  const dividerClass = clsx(
    styles.divider,
    styles[orientation],
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    styles[`spacing-${spacing}`],
    className
  )

  return (
    <hr
      className={dividerClass}
      style={style}
      role="separator"
      aria-orientation={orientation}
    />
  )
}
