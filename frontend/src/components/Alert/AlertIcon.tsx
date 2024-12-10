import React from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { AlertProps } from './Alert';
import styles from './Alert.module.scss';

interface AlertIconProps {
  variant: NonNullable<AlertProps['variant']>;
}

export const AlertIcon = ({ variant }: AlertIconProps) => {
  const iconProps = {
    className: styles.icon,
    'aria-hidden': true,
  };

  switch (variant) {
    case 'success':
      return <CheckCircleIcon {...iconProps} />;
    case 'error':
      return <XCircleIcon {...iconProps} />;
    case 'warning':
      return <ExclamationTriangleIcon {...iconProps} />;
    case 'info':
      return <InformationCircleIcon {...iconProps} />;
    default:
      return null;
  }
};

AlertIcon.displayName = 'AlertIcon';
