import { Globe, Mail, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brandInfo}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}></span>
            Seu Site Online
          </div>
          <p className={styles.description}>
            Transformando a presença digital de empresas em todo o Brasil através de sites profissionais por assinatura.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="WhatsApp">
              <MessageCircle size={24} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <Globe size={24} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.linksTitle}>Links Rápidos</h4>
          <ul className={styles.linksList}>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#vantagens">Vantagens</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.linksTitle}>Legal</h4>
          <ul className={styles.linksList}>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Seu Site Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
