import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Niches from './components/Niches';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Extras from './components/Extras';
import Cart from './components/Cart';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState('profissional');
  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = (extraId) => {
    setSelectedExtras(prev => 
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  useEffect(() => {
    const handleScrollAnim = () => {
      const elements = document.querySelectorAll('.animate-fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.style.animationPlayState = 'running';
          el.style.opacity = '1';
        }
      });
    };

    // Initially pause animations so they only run when in view (except Hero)
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach(el => {
      if (!el.closest('header') && !el.closest('section:first-of-type')) {
        el.style.animationPlayState = 'paused';
        el.style.opacity = '0';
      }
    });

    window.addEventListener('scroll', handleScrollAnim);
    handleScrollAnim();
    return () => window.removeEventListener('scroll', handleScrollAnim);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Niches />
        <HowItWorks />
        <Pricing onSelectPlan={setSelectedPlanId} />
        <Extras selectedExtras={selectedExtras} onToggleExtra={toggleExtra} />
        <Cart 
          selectedPlanId={selectedPlanId} 
          selectedExtras={selectedExtras}
          onSelectPlan={setSelectedPlanId}
          onToggleExtra={toggleExtra}
        />
        <Comparison />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
