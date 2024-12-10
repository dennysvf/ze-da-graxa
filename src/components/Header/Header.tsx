import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  ShoppingCartIcon, 
  UserIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Button } from '../Button'
import { Input } from '../Input'
import { Typography } from '../Typography'
import styles from './Header.module.css'

interface HeaderProps {
  cartItemsCount?: number
  isLoggedIn?: boolean
  onOpenMenu?: () => void
  userName?: string
}

export function Header({ 
  cartItemsCount = 0, 
  isLoggedIn = false,
  onOpenMenu,
  userName
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileSearchOpen(false)
  }, [location])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsMobileSearchOpen(false)
    }
  }

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen)
  }

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMobileSearchOpen ? styles.searchOpen : ''}`}
      role="banner"
    >
      <div className={styles.container}>
        <div className={styles.start}>
          <button 
            className={styles.menuButton}
            onClick={onOpenMenu}
            aria-label="Abrir menu de navegação"
          >
            <Bars3Icon className={styles.icon} />
          </button>
          
          <Link 
            to="/" 
            className={styles.logo}
            aria-label="Zé da Graxa - Página inicial"
          >
            <img 
              src="/logo.svg" 
              alt="" 
              width={120} 
              height={40}
              role="presentation"
            />
          </Link>
        </div>

        <form 
          className={`${styles.search} ${styles.desktopSearch}`}
          onSubmit={handleSearch}
          role="search"
        >
          <Input
            type="search"
            placeholder="Buscar peças e acessórios..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<MagnifyingGlassIcon className={styles.icon} />}
            fullWidth
            aria-label="Campo de busca"
          />
        </form>

        <div className={styles.actions}>
          <button 
            className={`${styles.mobileSearchButton} ${isMobileSearchOpen ? styles.active : ''}`}
            onClick={toggleMobileSearch}
            aria-label={isMobileSearchOpen ? "Fechar busca" : "Abrir busca"}
            aria-expanded={isMobileSearchOpen}
          >
            {isMobileSearchOpen ? (
              <XMarkIcon className={styles.icon} />
            ) : (
              <MagnifyingGlassIcon className={styles.icon} />
            )}
          </button>

          {isLoggedIn ? (
            <Link 
              to="/minha-conta"
              className={styles.accountLink}
            >
              <Button
                variant="text"
                leftIcon={<UserIcon className={styles.icon} />}
                aria-label="Acessar minha conta"
              >
                <span className={styles.buttonText}>
                  {userName ? (
                    <>
                      <Typography variant="caption" color="secondary">Olá,</Typography>
                      <Typography variant="body2">{userName}</Typography>
                    </>
                  ) : (
                    'Minha Conta'
                  )}
                </span>
              </Button>
            </Link>
          ) : (
            <Link 
              to="/entrar"
              className={styles.accountLink}
            >
              <Button
                variant="text"
                leftIcon={<UserIcon className={styles.icon} />}
                aria-label="Fazer login"
              >
                <span className={styles.buttonText}>Entrar</span>
              </Button>
            </Link>
          )}

          <Link 
            to="/carrinho" 
            className={styles.cart}
            aria-label={`Carrinho de compras${cartItemsCount > 0 ? `, ${cartItemsCount} ${cartItemsCount === 1 ? 'item' : 'itens'}` : ''}`}
          >
            <Button
              variant="text"
              leftIcon={<ShoppingCartIcon className={styles.icon} />}
            >
              <span className={styles.buttonText}>Carrinho</span>
              {cartItemsCount > 0 && (
                <span className={styles.cartBadge} aria-hidden="true">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Search Form */}
      <form 
        className={`${styles.search} ${styles.mobileSearch} ${isMobileSearchOpen ? styles.open : ''}`}
        onSubmit={handleSearch}
        role="search"
      >
        <Input
          type="search"
          placeholder="Buscar peças e acessórios..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          leftIcon={<MagnifyingGlassIcon className={styles.icon} />}
          fullWidth
          aria-label="Campo de busca móvel"
        />
      </form>
    </header>
  )
}
