import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  // Substitua pelo número real do WhatsApp
  const whatsappNumber = "5575982448129"; 
  const message = encodeURIComponent("Olá! Gostaria de falar com o desenvolvedor sobre o projeto Seu Site Online.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.whatsappButton}
      aria-label="Falar com Desenvolvedor no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Falar com o Dev</span>
    </a>
  );
}
