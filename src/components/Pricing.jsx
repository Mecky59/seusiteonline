import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const plans = [
  {
    id: 'essencial',
    name: 'Plano Essencial',
    price: '79',
    description: 'Ideal para profissionais autônomos.',
    features: [
      'Landing page profissional',
      'Hospedagem',
      'SSL',
      'Botão do WhatsApp',
      'Formulário de contato',
      'Site responsivo'
    ],
    highlight: false
  },
  {
    id: 'profissional',
    name: 'Plano Profissional',
    price: '149',
    description: 'A solução completa para pequenas e médias empresas.',
    features: [
      'Tudo do Essencial, mais:',
      'Até 5 páginas',
      'Domínio personalizado incluso',
      'Google Maps',
      'SEO básico',
      'Integração com Instagram e Facebook',
      'Alterações mensais'
    ],
    highlight: true
  },
  {
    id: 'premium',
    name: 'Plano Premium',
    price: '249',
    description: 'Para empresas que buscam o mais alto nível.',
    features: [
      'Tudo do Profissional, mais:',
      'Blog',
      'Área administrativa quando aplicável',
      'Melhor desempenho',
      'Suporte prioritário',
      'Integrações personalizadas'
    ],
    highlight: false
  }
];

export default function Pricing({ onSelectPlan }) {
  const handleSelect = (planId) => {
    onSelectPlan(planId);
    document.getElementById('monte-sua-assinatura')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planos" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Planos que cabem no seu bolso</h2>
          <p className={styles.subtitle}>Escolha a melhor opção para colocar seu negócio na internet.</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`${styles.card} ${plan.highlight ? styles.highlightCard : ''} animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.highlight && <div className={styles.badge}>Mais Popular</div>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.priceContainer}>
                  <span className={styles.currency}>R$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>/mês</span>
                </div>
              </div>

              <div className={styles.features}>
                {plan.features.map((feature, i) => (
                  <div key={i} className={styles.featureItem}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSelect(plan.id)}
                className={plan.highlight ? 'btn-primary' : 'btn-secondary'} 
                style={{ width: '100%', marginTop: '2rem' }}
              >
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
