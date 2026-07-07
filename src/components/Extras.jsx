import { Bot, MessageCircle, BrainCircuit, ShoppingBag, CalendarClock, TrendingUp } from 'lucide-react';
import styles from './Extras.module.css';

export const EXTRAS_LIST = [
  {
    id: 'bot_whatsapp',
    name: 'Bot para WhatsApp',
    price: 99,
    description: 'Atendimento automático para clientes.',
    icon: <MessageCircle size={24} />
  },
  {
    id: 'bot_telegram',
    name: 'Bot para Telegram',
    price: 49,
    description: 'Automatize seu canal de atendimento.',
    icon: <Bot size={24} />
  },
  {
    id: 'ia',
    name: 'Inteligência Artificial',
    price: 199,
    description: 'Atenda clientes automaticamente utilizando IA.',
    icon: <BrainCircuit size={24} />
  },
  {
    id: 'loja',
    name: 'Loja Virtual',
    price: 149,
    description: 'Venda produtos online.',
    icon: <ShoppingBag size={24} />
  },
  {
    id: 'agendamento',
    name: 'Sistema de Agendamento',
    price: 49,
    description: 'Ideal para clínicas, salões e consultórios.',
    icon: <CalendarClock size={24} />
  },
  {
    id: 'seo',
    name: 'SEO Avançado',
    price: 99,
    description: 'Melhore seu posicionamento no Google.',
    icon: <TrendingUp size={24} />
  }
];

export default function Extras({ selectedExtras, onToggleExtra }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Adicione mais recursos ao seu plano</h2>
          <p className={styles.subtitle}>Escale seu negócio com ferramentas poderosas.</p>
        </div>

        <div className={styles.grid}>
          {EXTRAS_LIST.map((extra, index) => {
            const isSelected = selectedExtras.includes(extra.id);
            return (
              <div 
                key={extra.id} 
                className={`${styles.card} ${isSelected ? styles.selected : ''} animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={styles.iconWrapper}>{extra.icon}</div>
                <h3 className={styles.name}>{extra.name}</h3>
                <p className={styles.desc}>{extra.description}</p>
                <div className={styles.price}>R$ {extra.price}/mês</div>
                
                <button 
                  onClick={() => onToggleExtra(extra.id)}
                  className={isSelected ? 'btn-secondary' : 'btn-primary'}
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  {isSelected ? 'Remover' : 'Adicionar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
