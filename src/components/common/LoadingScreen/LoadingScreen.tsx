import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../../../context/LoadingContext';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="loading-content">
            <motion.img
              src="/carga/mascota.webp"
              alt="Cargando..."
              className="loading-mascot"
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="loading-spinner-container"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="loading-spinner"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
