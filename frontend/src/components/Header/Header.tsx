import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'
import { useCartStore } from '../../stores/cart'
import styles from './Header.module.scss'

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuthStore()
  const { cart } = useCartStore()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Zé da Graxa
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link to="/products" className={styles.navLink}>
            Produtos
          </Link>
          <Link to="/services" className={styles.navLink}>
            Serviços
          </Link>
          <Link to="/about" className={styles.navLink}>
            Sobre
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contato
          </Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to="/cart" className={styles.cartButton}>
            🛒
            {cart?.items.length > 0 && (
              <span className={styles.cartCount}>{cart.items.length}</span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className={styles.userMenu}>
              <button
                className={styles.userButton}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                👤 {user?.name}
              </button>

              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <Link to="/profile" className={styles.dropdownItem}>
                    Meu Perfil
                  </Link>
                  <Link to="/orders" className={styles.dropdownItem}>
                    Meus Pedidos
                  </Link>
                  <button onClick={logout} className={styles.dropdownItem}>
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className={styles.navLink}>
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
