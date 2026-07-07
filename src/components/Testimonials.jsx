import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendes',
    role: 'Dono de Clínica',
    content: 'O processo foi incrivelmente simples. Em poucos dias meu site estava no ar e os pacientes começaram a agendar pelo sistema integrado. Vale cada centavo da assinatura!',
    image: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    id: 2,
    name: 'Ana Silva',
    role: 'Consultora Financeira',
    content: 'Ter um site profissional mudou a percepção dos meus clientes. O design é impecável, super moderno, e o suporte me ajudou em todas as dúvidas prontamente.',
    image: 'https://i.pravatar.cc/150?u=ana'
  },
  {
    id: 3,
    name: 'Roberto Gomes',
    role: 'Proprietário de Loja Virtual',
    content: 'Adicionei a loja virtual e o bot de WhatsApp. Minhas vendas aumentaram muito porque o sistema automatizou o atendimento noturno. Excelente plataforma!',
    image: 'https://i.pravatar.cc/150?u=roberto'
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>O que nossos clientes dizem</h2>
          <p className={styles.subtitle}>Empresas reais que transformaram sua presença digital.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.card} animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={18} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <p className={styles.content}>"{testimonial.content}"</p>
              
              <div className={styles.author}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.avatar} />
                <div>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
