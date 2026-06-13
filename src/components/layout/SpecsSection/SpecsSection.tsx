import FadeUp from '../../ui/FadeUp/FadeUp';
import './SpecsSection.css';

const specs = [
  { label: 'Frecuencia', value: '462–467 MHz' },
  { label: 'Alcance', value: '500 mts' },
  { label: 'Batería', value: '1200 mAh / 24 h' },
  { label: 'Resistencia', value: 'IP67 Waterproof' },
  { label: 'Conexión', value: 'Bluetooth 5.2' },
  { label: 'Canales', value: '22 canales + subtonos' },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="specs-section">
      <FadeUp className="section-label">Especificaciones Técnicas</FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="section-title gradient-text">Los números no mienten</h2>
      </FadeUp>
      <div className="specs-grid">
        {specs.map(({ label, value }, i) => (
          <FadeUp key={label} delay={i * 0.07}>
            <div className="spec-item glass-panel">
              <span className="spec-value">{value}</span>
              <span className="spec-label">{label}</span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default SpecsSection;
