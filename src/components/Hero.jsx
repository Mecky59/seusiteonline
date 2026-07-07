import { CheckCircle2, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`${styles.badges} animate-fade-in`}>
            <span className="badge">
              <HeartHandshake size={14} /> Atendimento Humanizado
            </span>
            <span className="badge">
              <ShieldCheck size={14} /> Pagamento Seguro
            </span>
            <span className="badge">
              <Zap size={14} /> Entrega Rápida
            </span>
          </div>
          
          <h1 className={`${styles.title} animate-fade-in delay-100`}>
            Seu site profissional por <span className={styles.highlight}>assinatura.</span>
          </h1>
          
          <p className={`${styles.subtitle} animate-fade-in delay-200`}>
            Tudo o que sua empresa precisa para estar presente na internet em um único plano mensal.
          </p>

          <ul className={`${styles.benefits} animate-fade-in delay-300`}>
            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Site profissional</li>
            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Hospedagem</li>
            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Manutenção</li>
            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Suporte</li>
            <li><CheckCircle2 size={18} className={styles.checkIcon} /> SSL</li>
            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Atualizações</li>
          </ul>

          <div className={`${styles.actions} animate-fade-in delay-300`}>
            <a href="#planos" className="btn-primary">Quero Assinar</a>
            <a href="#planos" className="btn-secondary">Ver Planos</a>
          </div>
        </div>

        <div className={`${styles.imageWrapper} animate-fade-in delay-200`}>
          <div className={styles.imageBackground}></div>
          <img src="/hero-illustration.png" alt="Site responsivo em vários dispositivos" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
