import { motion } from 'framer-motion';
import Hyperspeed from '../../Hyperspeed/Hyperspeed';
import './HeroSection.css';

const HeroSection = () => {
  const hyperspeedOptions = {
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [12, 80],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131313,
      brokenLines: 0x131313,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3
    }
  };

  return (
    <section className="intro-section">
      <Hyperspeed effectOptions={hyperspeedOptions} />

      <motion.div
        className="intro-eyebrow"
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        animate={{ opacity: 1, letterSpacing: '0.25em' }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        Nuevo · Q58-Max Pro
      </motion.div>

      <motion.h1
        className="intro-headline gradient-text"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        El intercomunicador<br />que lo cambia todo.
      </motion.h1>

      <motion.p
        className="intro-sub"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Audio de referencia profesional · Alcance de 500mts · Diseño sellado IP67
      </motion.p>

      <motion.div
        className="intro-actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <a href="https://wa.me/573208700771?text=Hola%20somos%20Castrillon%20Conect" target="_blank" rel="noopener noreferrer" className="buy-btn-hero">Ordenar Ahora — $90.000 COP</a>
        <a href="#features" className="ghost-btn">Ver características ↓</a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-hint-line" />
        <span>Desplázate para descubrir</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
