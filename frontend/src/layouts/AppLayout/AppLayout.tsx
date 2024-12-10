import { ReactNode } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from './AppLayout.module.scss'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
