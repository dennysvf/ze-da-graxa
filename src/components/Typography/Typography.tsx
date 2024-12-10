import React from 'react';
import classNames from 'classnames';
import styles from './Typography.module.css';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
export type TypographyColor = 'primary' | 'secondary' | 'disabled' | 'error' | 'success' | 'warning' | 'info';
export type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
  /** The content to be rendered */
  children: React.ReactNode;
  /** The HTML element to render as */
  as?: keyof JSX.IntrinsicElements;
  /** The typography variant to use */
  variant?: TypographyVariant;
  /** The color of the text */
  color?: TypographyColor;
  /** The font weight of the text */
  weight?: TypographyWeight;
  /** The alignment of the text */
  align?: TypographyAlign;
  /** If true, the text will be truncated with an ellipsis */
  truncate?: boolean;
  /** If true, the text will not wrap */
  noWrap?: boolean;
  /** Additional class name */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

const variantMapping: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  as,
  variant = 'body1',
  color = 'primary',
  weight,
  align,
  truncate = false,
  noWrap = false,
  className,
  style,
  ...props
}) => {
  const Component = as || variantMapping[variant];

  const classes = classNames(
    styles.text,
    styles[variant],
    color && styles[color],
    weight && styles[weight],
    align && styles[align],
    {
      [styles.truncate]: truncate,
      [styles.noWrap]: noWrap,
    },
    className
  );

  return (
    <Component className={classes} style={style} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';
