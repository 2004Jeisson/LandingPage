import { useState, useEffect } from 'react';
import FadeUp from '../../ui/FadeUp/FadeUp';
import FeatureCard from './FeatureCard';
import './FeaturesSection.css';
import { Headphones, Radio, BatteryCharging, Droplets, Flashlight, Disc, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const featuresData = [
  {
    id: 0,
    icon: <Headphones size={28} strokeWidth={1.5} />,
    title: "Cancelación de Ruido",
    desc: "Cancelación activa que elimina el ruido del viento y el motor. Tu voz, clara y nítida.",
    image: "/products/frames/0024.jpg"
  },
  {
    id: 1,
    icon: <Radio size={28} strokeWidth={1.5} />,
    title: "Alcance de 500mts",
    desc: "Protocolo de radio avanzado que mantiene la señal estable en rutas abiertas y paseos a larga distancia.",
    image: "/caracterizticas/Alcance-de-500mts.webp"
  },
  {
    id: 2,
    icon: <BatteryCharging size={28} strokeWidth={1.5} />,
    title: "24 Horas de Autonomía",
    desc: "Batería de larga duración optimizada para viajes largos. Olvídate de cargarlo a mitad de camino.",
    image: "/caracterizticas/24-Horas-de-Autonomía.webp"
  },
  {
    id: 3,
    icon: <Droplets size={28} strokeWidth={1.5} />,
    title: "Certificado IP65",
    desc: "Resistente al agua y al polvo. Construido para sobrevivir desde el desierto hasta la lluvia torrencial.",
    image: "/caracterizticas/Certificado-IP65.webp"
  },
  {
    id: 4,
    icon: <Flashlight size={28} strokeWidth={1.5} />,
    title: "Linterna LED",
    desc: "Linterna integrada de alta potencia para emergencias, asistencia nocturna o señalización en carretera.",
    image: "/caracterizticas/Linterna LED.webp"
  },
  {
    id: 5,
    icon: <Disc size={28} strokeWidth={1.5} />,
    title: "Ranura Micro SD",
    desc: "Soporte para tarjeta Micro SD propia. Escucha y disfruta de toda tu música favorita de forma 100% independiente y sin conexion a internet.",
    image: "/caracterizticas/Ranura-Micro-SD.webp"
  }
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || isModalOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuresData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isModalOpen]);

  const activeFeature = featuresData[activeIndex];

  const getCardStyle = (idx: number) => {
    const total = featuresData.length;
    let relativeIndex = idx - activeIndex;

    // Make it infinite wrap-around
    const half = Math.floor(total / 2);
    if (relativeIndex > half) relativeIndex -= total;
    if (relativeIndex < -half + (total % 2 === 0 ? 1 : 0)) relativeIndex += total;

    const absDistance = Math.abs(relativeIndex);

    // Card spacing is 360px (320px width + 40px margin)
    const x = relativeIndex * 360;

    let scale = 1;
    let opacity = 1;
    let filter = 'blur(0px)';
    let zIndex = 10 - absDistance;

    if (absDistance === 1) {
      scale = 0.85;
      opacity = 0.6;
      filter = 'blur(4px)';
    } else if (absDistance >= 2) {
      scale = 0.7;
      opacity = 0.2;
      filter = 'blur(8px)';
    }

    return { x, scale, opacity, filter, zIndex };
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuresData.length) % featuresData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuresData.length);
  };

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

      <div
        className="features-carousel-viewport"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Anterior característica">
          <ChevronLeft size={32} />
        </button>

        <div className="features-carousel-track">
          {featuresData.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              image={feature.image}
              isActive={activeIndex === idx}
              animateStyle={getCardStyle(idx)}
              onClick={() => setActiveIndex(idx)}
              onImageClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>

        <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Siguiente característica">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <button className="lightbox-close" onClick={() => setIsModalOpen(false)}>
              <X size={32} />
            </button>
            <motion.img
              src={activeFeature.image}
              alt={activeFeature.title}
              className="lightbox-image"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturesSection;