import { MousePointerClick, CreditCard, FileText, Rocket } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    id: 1,
    title: 'Escolha seu plano',
    description: 'Selecione o plano ideal para o momento da sua empresa e adicione extras se precisar.',
    icon: <MousePointerClick size={32} />
  },
  {
    id: 2,
    title: 'Faça a assinatura',
    description: 'Pagamento seguro e recorrente, sem surpresas no fim do mês.',
    icon: <CreditCard size={32} />
  },
  {
    id: 3,
    title: 'Envie as informações',
    description: 'Preencha um briefing rápido com os dados da sua empresa e logotipo.',
    icon: <FileText size={32} />
  },
  {
    id: 4,
    title: 'Receba seu site',
    description: 'Em poucos dias, seu site estará no ar, pronto para atrair clientes.',
    icon: <Rocket size={32} />
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={`section ${styles.section}`}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Como Funciona</h2>
          <p className={styles.subtitle}>Seu novo site no ar em 4 passos simples.</p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={step.id} className={`${styles.card} animate-fade-in`} style={{ animationDelay: `${index * 150}ms` }}>
              <div className={styles.iconWrapper}>
                {step.icon}
                <div className={styles.stepNumber}>{step.id}</div>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
