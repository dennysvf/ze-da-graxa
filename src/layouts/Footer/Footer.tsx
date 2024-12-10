import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.section}>
          <h3>Institucional</h3>
          <div className={styles.links}>
            <Link to="/sobre" className={styles.link}>Sobre Nós</Link>
            <Link to="/politica-privacidade" className={styles.link}>Política de Privacidade</Link>
            <Link to="/termos-uso" className={styles.link}>Termos de Uso</Link>
            <Link to="/trabalhe-conosco" className={styles.link}>Trabalhe Conosco</Link>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Ajuda</h3>
          <div className={styles.links}>
            <Link to="/como-comprar" className={styles.link}>Como Comprar</Link>
            <Link to="/pagamentos" className={styles.link}>Formas de Pagamento</Link>
            <Link to="/entrega" className={styles.link}>Prazos e Entregas</Link>
            <Link to="/trocas" className={styles.link}>Trocas e Devoluções</Link>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Atendimento</h3>
          <div className={styles.links}>
            <a href="tel:0800123456" className={styles.link}>0800 123 456</a>
            <a href="mailto:contato@zedagraxa.com.br" className={styles.link}>
              contato@zedagraxa.com.br
            </a>
            <p className={styles.link}>Segunda a Sexta: 8h às 18h</p>
            <p className={styles.link}>Sábado: 8h às 12h</p>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Redes Sociais</h3>
          <div className={styles.social}>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Zé da Graxa - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
