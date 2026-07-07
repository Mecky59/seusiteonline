import styles from './Niches.module.css';

const niches = [
  "Barbearia", "Restaurante", "Cardápio Digital", "Imobiliária",
  "Advocacia", "Clínica Médica", "Estética", "Loja Virtual",
  "Consultoria", "Portfólio", "Landing Page", "Blog",
  "Barbearia", "Restaurante", "Cardápio Digital", "Imobiliária",
  "Advocacia", "Clínica Médica", "Estética", "Loja Virtual"
];

export default function Niches() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h3 className={styles.title}>Criamos sites perfeitos para o seu negócio:</h3>
      </div>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {niches.map((niche, i) => (
            <div key={i} className={styles.nicheBadge}>
              {niche}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
