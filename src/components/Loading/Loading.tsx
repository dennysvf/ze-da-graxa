import React from 'react';
import classNames from 'classnames';
import styles from './Loading.module.css';

export type LoadingSize = 'sm' | 'md' | 'lg';
export type LoadingColor = 'primary' | 'secondary' | 'white';

export interface LoadingProps {
  /** The size of the loading spinner */
  size?: LoadingSize;
  /** The color of the loading spinner */
  color?: LoadingColor;
  /** Optional label to display next to the spinner */
  label?: string;
  /** If true, the loading spinner will take up the full width of its container */
  fullWidth?: boolean;
  /** If true, the loading spinner will take up the full height of its container */
  fullHeight?: boolean;
  /** If true, the loading spinner will be displayed in an overlay */
  overlay?: boolean;
  /** Additional class name */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  color = 'primary',
  label,
  fullWidth = false,
  fullHeight = false,
  overlay = false,
  className,
  style,
}) => {
  const containerClasses = classNames(
    styles.container,
    {
      [styles.fullWidth]: fullWidth,
      [styles.fullHeight]: fullHeight,
      [styles.overlay]: overlay,
    },
    className
  );

  const spinnerClasses = classNames(
    styles.spinner,
    styles[size],
    styles[color]
  );

  const spinner = (
    <div className={spinnerClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <div className={containerClasses} style={style}>
      {spinner}
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

Loading.displayName = 'Loading';
