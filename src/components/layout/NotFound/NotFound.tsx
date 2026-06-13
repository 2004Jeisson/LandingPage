import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <motion.div 
        className="not-found-content glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img 
          src="/carga/mascota.webp" 
          alt="Mascota Perdida" 
          className="not-found-mascot"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">¡Ups! Parece que te perdiste en el camino</h2>
        <p className="not-found-text">
          La ruta que buscas no existe o ha sido movida. Pero no te preocupes, nuestra mascota te guiará de vuelta.
        </p>
        <a href="/" className="back-home-btn">
          Volver al Inicio
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
