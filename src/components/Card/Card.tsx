import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The content of the card */
  children: React.ReactNode;
  /** The visual style variant of the card */
  variant?: CardVariant;
  /** The amount of padding inside the card */
  padding?: CardPadding;
  /** Header content */
  header?: React.ReactNode;
  /** Header actions (e.g., buttons) */
  headerActions?: React.ReactNode;
  /** Media content (e.g., image) */
  media?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** If true, the card will be clickable */
  clickable?: boolean;
  /** If true, the card will be disabled */
  disabled?: boolean;
  /** If true, the card will be selected */
  selected?: boolean;
  /** If true, the card will show a loading state */
  loading?: boolean;
  /** Additional class name */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Click handler for clickable cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  header,
  headerActions,
  media,
  footer,
  clickable = false,
  disabled = false,
  selected = false,
  loading = false,
  className,
  style,
  onClick,
  ...props
}) => {
  const classes = classNames(
    styles.card,
    styles[variant],
    styles[padding],
    {
      [styles.clickable]: clickable || onClick,
      [styles.disabled]: disabled,
      [styles.selected]: selected,
      [styles.loading]: loading,
    },
    className
  );

  return (
    <div
      className={classes}
      style={style}
      onClick={!disabled ? onClick : undefined}
      role={clickable || onClick ? 'button' : undefined}
      tabIndex={clickable || onClick ? 0 : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {(header || headerActions) && (
        <div className={styles.header}>
          {header && <div className={styles.headerContent}>{header}</div>}
          {headerActions && <div className={styles.headerActions}>{headerActions}</div>}
        </div>
      )}
      {media && <div className={styles.media}>{media}</div>}
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

Card.displayName = 'Card';
