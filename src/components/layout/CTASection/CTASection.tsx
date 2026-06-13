import FadeUp from '../../ui/FadeUp/FadeUp';
import './CTASection.css';

const CTASection = () => {
  return (
    <section id="buy" className="cta-section">
      <div className="cta-glow" />
      <FadeUp className="cta-content glass-panel">
        <span className="section-label">Disponible Ahora</span>
        <h2 className="gradient-text">Lleva tu viaje al siguiente nivel.</h2>
        <p>Envío gratis · Garantía de 2 años · Devolución en 30 días</p>
        <a href="https://wa.me/573208700771?text=Hola%20somos%20Castrillon%20Conect" target="_blank" rel="noopener noreferrer" className="buy-btn-large">Comprar Ahora — $90.000 COP</a>
      </FadeUp>
    </section>
  );
};

export default CTASection;
