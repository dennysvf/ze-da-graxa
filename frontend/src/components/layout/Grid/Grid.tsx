import { HTMLAttributes, forwardRef } from 'react'
import styles from './Grid.module.scss'

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: Columns
  spacing?: Spacing
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around'
  responsive?: boolean
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({
    children,
    className,
    columns = 12,
    spacing = 'md',
    alignItems,
    justifyContent,
    responsive = true,
    ...props
  }, ref) => {
    const gridClasses = [
      styles.grid,
      styles[`columns-${columns}`],
      styles[`spacing-${spacing}`],
      alignItems && styles[`align-${alignItems}`],
      justifyContent && styles[`justify-${justifyContent}`],
      responsive && styles.responsive,
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className={gridClasses} {...props}>
        {children}
      </div>
    )
  }
)

interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: Columns
  offset?: Columns
  sm?: Columns
  md?: Columns
  lg?: Columns
  xl?: Columns
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({
    children,
    className,
    span,
    offset,
    sm,
    md,
    lg,
    xl,
    ...props
  }, ref) => {
    const itemClasses = [
      styles.item,
      span && styles[`span-${span}`],
      offset && styles[`offset-${offset}`],
      sm && styles[`sm-${sm}`],
      md && styles[`md-${md}`],
      lg && styles[`lg-${lg}`],
      xl && styles[`xl-${xl}`],
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className={itemClasses} {...props}>
        {children}
      </div>
    )
  }
)
