import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About */}
          <div className={styles.section}>
            <h3>Sobre Nós</h3>
            <p>
              Zé da Graxa é sua loja online de peças e serviços automotivos de confiança.
              Qualidade e preço justo para seu veículo.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3>Links Rápidos</h3>
            <ul className={styles.links}>
              <li>
                <Link to="/products">Produtos</Link>
              </li>
              <li>
                <Link to="/services">Serviços</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h3>Contato</h3>
            <ul className={styles.contact}>
              <li>Rua das Oficinas, 123</li>
              <li>São Paulo, SP</li>
              <li>Tel: (11) 1234-5678</li>
              <li>Email: contato@zedagraxa.com.br</li>
            </ul>
          </div>

          {/* Social */}
          <div className={styles.section}>
            <h3>Redes Sociais</h3>
            <div className={styles.social}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Zé da Graxa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
