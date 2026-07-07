import { ArrowRight } from 'lucide-react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Coloque sua empresa na internet hoje mesmo.</h2>
          <p className={styles.text}>
            Assine agora e deixe toda a parte técnica conosco enquanto você cuida do crescimento do seu negócio.
          </p>
          <a href="#monte-sua-assinatura" className={`btn-primary ${styles.btn}`}>
            Quero Meu Site <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
