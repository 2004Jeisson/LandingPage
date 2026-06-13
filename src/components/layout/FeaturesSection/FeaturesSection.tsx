import FadeUp from '../../ui/FadeUp/FadeUp';
import FeatureCard from './FeatureCard';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <FadeUp className="section-label">Características</FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="section-title gradient-text">Diseñado para la Excelencia</h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="section-sub">
          Cada componente elegido para superar los límites de la comunicación en ruta.
        </p>
      </FadeUp>

      <div className="features-grid">
        <FeatureCard
          delay={0.0}
          icon="🎧"
          title="Cancelación de Ruido Activa"
          desc="Algoritmo de IA que elimina el ruido del viento y el motor. Tu voz, clara y nítida a 130 km/h."
        />
        <FeatureCard
          delay={0.12}
          icon="📡"
          title="Alcance de 500mts"
          desc="Protocolo de radio avanzado que mantiene la señal en montañas, túneles y zonas sin cobertura."
        />
        <FeatureCard
          delay={0.24}
          icon="🔋"
          title="24 Horas de Autonomía"
          desc="Batería de 1200 mAh con carga rápida USB-C. Desde cero al 80 % en solo 40 minutos."
        />
        <FeatureCard
          delay={0.0}
          icon="🌧️"
          title="Certificado IP67"
          desc="Resistente al agua y al polvo. Construido para sobrevivir desde el desierto hasta la lluvia torrencial."
        />
        <FeatureCard
          delay={0.12}
          icon="🔊"
          title="Altavoz HD 40mm"
          desc="Altavoces de alta fidelidad integrados. Músca y comunicaciones con calidad de estudio."
        />
        <FeatureCard
          delay={0.24}
          icon="📲"
          title="App Companion"
          desc="Control total desde tu smartphone. Ajusta canales, EQ y grupos de hasta 8 personas en tiempo real."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
