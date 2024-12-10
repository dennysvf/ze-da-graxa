import React from 'react'
import { Stack } from '../layout/Stack'
import styles from './DashboardChart.module.scss'

interface DashboardChartProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function DashboardChart({
  title,
  children,
  className,
}: DashboardChartProps) {
  return (
    <div className={`${styles.chart} ${className || ''}`}>
      <Stack spacing="md">
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>
          {children}
        </div>
      </Stack>
    </div>
  )
}
