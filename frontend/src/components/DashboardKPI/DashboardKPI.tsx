import React from 'react'
import { Stack } from '../layout/Stack'
import { PriceDisplay } from '../PriceDisplay'
import styles from './DashboardKPI.module.scss'

interface DashboardKPIProps {
  title: string
  value: string | number
  trend?: number
  icon?: React.ReactNode
  isCurrency?: boolean
  className?: string
}

export function DashboardKPI({
  title,
  value,
  trend,
  icon,
  isCurrency = false,
  className,
}: DashboardKPIProps) {
  const trendClass = trend ? (trend > 0 ? styles.positive : styles.negative) : ''
  
  return (
    <div className={`${styles.kpi} ${className || ''}`}>
      <Stack spacing="sm">
        <div className={styles.header}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.value}>
            {isCurrency ? (
              <PriceDisplay value={Number(value)} size="large" />
            ) : (
              value
            )}
          </div>
          {trend && (
            <div className={`${styles.trend} ${trendClass}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </div>
          )}
        </div>
      </Stack>
    </div>
  )
}
