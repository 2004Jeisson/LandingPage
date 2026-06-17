import FadeUp from '../../ui/FadeUp/FadeUp';
import './CTASection.css';

// Mensaje pre-llenado con opciones de compra
const WA_MESSAGE = encodeURIComponent(
  `¡Hola! 👋 Estoy interesado en el Intercomunicador Q58-Max de Castrillón Connect. ¿Me pueden dar información sobre lo siguiente?\n\n` +
  `1️⃣ *Precio* — ¿Cuál es el precio actual?\n` +
  `2️⃣ *Especificaciones* — Alcance, batería, impermeabilidad, Bluetooth.\n` +
  `3️⃣ *Costo de envío* — ¿Cuánto cuesta el envío a mi ciudad?\n` +
  `4️⃣ *Tipos de pago* — ¿Qué métodos de pago aceptan?\n\n` +
  `¡Gracias! 🏍️`
);

const WA_URL = `https://wa.me/573208700771?text=${WA_MESSAGE}`;

const CTASection = () => {
  return (
    <section id="buy" className="cta-section">
      <div className="cta-glow" />
      <FadeUp className="cta-content glass-panel">
        <span className="section-label">Disponible Ahora</span>
        <h2 className="gradient-text">Lleva tu viaje al siguiente nivel.</h2>
        <p className="cta-sub">Escríbenos por WhatsApp y te respondemos de inmediato con precio, envío y métodos de pago.</p>

        {/* Info chips */}
        <div className="cta-chips">
          <div className="cta-chip">
            <span className="cta-chip-icon">💰</span>
            <div>
              <span className="cta-chip-label">Precio</span>
              <span className="cta-chip-value">$90.000 COP</span>
            </div>
          </div>
          <div className="cta-chip">
            <span className="cta-chip-icon">🚚</span>
            <div>
              <span className="cta-chip-label">Envío</span>
              <span className="cta-chip-value">Gratis Bogotá y Soacha</span>
            </div>
          </div>
          <div className="cta-chip">
            <span className="cta-chip-icon">💳</span>
            <div>
              <span className="cta-chip-label">Pago</span>
              <span className="cta-chip-value">Efectivo · Nequi · Bancolombia</span>
            </div>
          </div>
          <div className="cta-chip">
            <span className="cta-chip-icon">🛡️</span>
            <div>
              <span className="cta-chip-label">Garantía</span>
              <span className="cta-chip-value">3 meses</span>
            </div>
          </div>
        </div>

        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="buy-btn-large">
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="wa-icon"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Comprar por WhatsApp — $90.000 COP
        </a>

        <p className="cta-footnote">Al hacer clic te enviamos a WhatsApp con un mensaje con todas tus dudas listo para enviar 💬</p>
      </FadeUp>
    </section>
  );
};

export default CTASection;

