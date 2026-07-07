import { Check, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { PLANS, EXTRAS_LIST } from '../constants/data';
import { createSubscription } from '../services/mercadoPago';
import styles from './Cart.module.css';

export default function Cart({ selectedPlanId, selectedExtras, onSelectPlan, onToggleExtra }) {
  const [isLoading, setIsLoading] = useState(false);
  
  const selectedPlan = PLANS.find(p => p.id === selectedPlanId) || PLANS[1]; // default to profissional
  const selectedExtrasData = selectedExtras.map(id => EXTRAS_LIST.find(e => e.id === id));
  
  const total = selectedPlan.price + selectedExtrasData.reduce((acc, extra) => acc + extra.price, 0);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // Chamando o serviço mockado para gerar a URL de pagamento
      const response = await createSubscription(
        { planId: selectedPlanId, extras: selectedExtras, totalAmount: total },
        { name: 'Cliente Teste', email: 'teste@email.com' } // Em produção, coletaríamos isso num form antes
      );
      
      // Redireciona o usuário (simulação)
      window.location.href = response.initPoint;
    } catch (error) {
      alert('Erro ao tentar assinar. Tente novamente mais tarde.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="monte-sua-assinatura" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Monte sua assinatura</h2>
          <p className={styles.subtitle}>Personalize o pacote ideal para as suas necessidades.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.builder}>
            <div className={styles.step}>
              <h3>1. Escolha o plano</h3>
              <div className={styles.planOptions}>
                {PLANS.map(plan => (
                  <button
                    key={plan.id}
                    className={`${styles.planBtn} ${selectedPlanId === plan.id ? styles.planActive : ''}`}
                    onClick={() => onSelectPlan(plan.id)}
                  >
                    <span>{plan.name}</span>
                    <span className={styles.planPrice}>R$ {plan.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.step}>
              <h3>2. Adicione recursos extras</h3>
              <div className={styles.extraOptions}>
                {EXTRAS_LIST.map(extra => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <label key={extra.id} className={`${styles.extraLabel} ${isChecked ? styles.extraActive : ''}`}>
                      <div className={styles.checkboxWrapper}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => onToggleExtra(extra.id)}
                          className={styles.checkbox}
                        />
                        <div className={styles.customCheckbox}>
                          {isChecked && <Check size={14} color="#fff" />}
                        </div>
                      </div>
                      <span className={styles.extraName}>{extra.name}</span>
                      <span className={styles.extraPrice}>+ R$ {extra.price}/mês</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.summaryBox}>
            <h3 className={styles.summaryTitle}>Resumo do Pedido</h3>
            
            <div className={styles.summaryItems}>
              <div className={styles.summaryItem}>
                <span className={styles.itemName}>{selectedPlan.name}</span>
                <span className={styles.itemValue}>R$ {selectedPlan.price}</span>
              </div>
              
              {selectedExtrasData.map(extra => (
                <div key={extra.id} className={styles.summaryItem}>
                  <span className={styles.itemName}>{extra.name}</span>
                  <span className={styles.itemValue}>R$ {extra.price}</span>
                </div>
              ))}
            </div>

            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalValue}>R$ {total}<span>/mês</span></span>
            </div>

            <button onClick={handleCheckout} disabled={isLoading} className={`btn-primary ${styles.checkoutBtn}`}>
              {isLoading ? (
                <>Processando... <Loader2 size={20} className={styles.spin} /></>
              ) : (
                <>Continuar para Assinatura <ArrowRight size={20} /></>
              )}
            </button>
            <p className={styles.secureText}>🔒 Pagamento 100% seguro via Mercado Pago</p>
          </div>
        </div>
      </div>
    </section>
  );
}
