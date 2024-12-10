import { Link } from 'react-router-dom'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import { Button } from '../../components'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.logo}>
          Zé da Graxa
        </Link>

        <nav className={styles.nav}>
          <Link to="/catalogo" className={styles.navLink}>
            Catálogo
          </Link>
          <Link to="/promocoes" className={styles.navLink}>
            Promoções
          </Link>
          <Link to="/sobre" className={styles.navLink}>
            Sobre
          </Link>
          <Link to="/contato" className={styles.navLink}>
            Contato
          </Link>
        </nav>

        <div className={styles.actions}>
          <Button
            variant="secondary"
            icon={<ShoppingCartIcon width={20} />}
            aria-label="Carrinho"
          />
          <Button
            variant="primary"
            icon={<UserIcon width={20} />}
          >
            Entrar
          </Button>
        </div>
      </div>
    </header>
  )
}
