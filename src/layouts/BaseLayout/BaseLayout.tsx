import { type ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from './BaseLayout.module.css'

interface BaseLayoutProps {
  children: ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
