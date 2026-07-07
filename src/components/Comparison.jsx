import { XCircle, CheckCircle2 } from 'lucide-react';
import styles from './Comparison.module.css';

const traditional = [
  'Alto investimento inicial',
  'Hospedagem separada',
  'Manutenção paga',
  'Suporte limitado',
  'Atualizações cobradas'
];

const subscription = [
  'Mensalidade acessível',
  'Hospedagem inclusa',
  'Atualizações inclusas',
  'Suporte contínuo',
  'Segurança',
  'Site sempre online'
];

export default function Comparison() {
  return (
    <section id="vantagens" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Por que assinar?</h2>
          <p className={styles.subtitle}>Veja a diferença entre o modelo antigo e a nossa solução inteligente.</p>
        </div>

        <div className={styles.grid}>
          {/* Card Tradicional */}
          <div className={`${styles.card} ${styles.cardTraditional} animate-fade-in`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Comprar um site tradicional</h3>
              <p className={styles.cardDesc}>O modelo antigo, cheio de custos extras.</p>
            </div>
            <ul className={styles.list}>
              {traditional.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <XCircle size={20} className={styles.iconX} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Assinatura (VS) */}
          <div className={styles.vsWrapper}>
            <div className={styles.vsBadge}>VS</div>
          </div>

          {/* Card Nosso Modelo */}
          <div className={`${styles.card} ${styles.cardSubscription} animate-fade-in delay-200`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Assinar Seu Site Online</h3>
              <p className={styles.cardDesc}>Tudo incluso, sem dor de cabeça.</p>
            </div>
            <ul className={styles.list}>
              {subscription.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <CheckCircle2 size={20} className={styles.iconCheck} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
