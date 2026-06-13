import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="intro-section">
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
        <a href="https://wa.me/573208700771?text=Hola%20somos%20Castrillon%20Conect" target="_blank" rel="noopener noreferrer" className="buy-btn-hero">Ordenar Ahora — $90.000</a>
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
