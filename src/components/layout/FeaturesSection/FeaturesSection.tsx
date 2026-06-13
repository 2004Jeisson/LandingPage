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
          title="Cancelación de Ruido"
          desc="Cancelación activa que elimina el ruido del viento y el motor. Tu voz, clara y nítida a 130 km/h."
        />
        <FeatureCard
          delay={0.12}
          icon="📡"
          title="Alcance de 500mts"
          desc="Protocolo de radio avanzado que mantiene la señal estable en rutas abiertas y paseos grupales."
        />
        <FeatureCard
          delay={0.24}
          icon="🔋"
          title="24 Horas de Autonomía"
          desc="Batería de larga duración optimizada para viajes largos. Olvídate de cargarlo a mitad de camino."
        />
        <FeatureCard
          delay={0.0}
          icon="🌧️"
          title="Certificado IP67"
          desc="Resistente al agua y al polvo. Construido para sobrevivir desde el desierto hasta la lluvia torrencial."
        />
        <FeatureCard
          delay={0.12}
          icon="🔦"
          title="Linterna LED"
          desc="Linterna integrada de alta potencia para emergencias, asistencia nocturna o señalización en carretera."
        />
        <FeatureCard
          delay={0.24}
          icon="💾"
          title="Ranura Micro SD"
          desc="Soporte para tarjeta Micro SD propia. Escucha y disfruta de toda tu música favorita de forma 100% independiente."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;