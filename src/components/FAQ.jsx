import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Sim, não há fidelidade. Você pode cancelar a qualquer momento diretamente pelo painel do Mercado Pago ou solicitando ao nosso suporte.'
  },
  {
    question: 'O domínio é meu?',
    answer: 'Sim! Se você já tem um domínio, nós apontamos para o seu novo site. Se não tem, no Plano Profissional nós registramos e pagamos a anuidade para você. O domínio fica no seu nome.'
  },
  {
    question: 'Quanto tempo leva para entregar?',
    answer: 'Após o envio de todas as informações (briefing, textos e logo), entregamos a primeira versão em até 7 dias úteis.'
  },
  {
    question: 'O que acontece se eu atrasar um pagamento?',
    answer: 'Seu site fica suspenso após 5 dias de atraso e volta ao ar imediatamente após a confirmação do pagamento. O sistema avisará por e-mail e WhatsApp antes da suspensão.'
  },
  {
    question: 'Posso trocar de plano?',
    answer: 'Sim, você pode fazer um upgrade ou downgrade a qualquer momento. O valor será ajustado proporcionalmente na sua próxima fatura.'
  },
  {
    question: 'Tenho suporte?',
    answer: 'Com certeza! Oferecemos suporte via WhatsApp e e-mail para todos os clientes, auxiliando em dúvidas ou pequenas alterações no site.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Perguntas Frequentes</h2>
          <p className={styles.subtitle}>Tudo o que você precisa saber antes de assinar.</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown size={20} className={styles.icon} />
              </button>
              <div 
                className={styles.answerWrapper}
                style={{ height: openIndex === index ? 'auto' : 0 }}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
