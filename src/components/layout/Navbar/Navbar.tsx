import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="logo-container">
        <img src="/products/loguito.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#features">Características</a>
        <a href="#specs">Especificaciones</a>
        <a href="https://wa.me/573208700771?text=Hola%20somos%20Castrillon%20Conect" target="_blank" rel="noopener noreferrer" className="buy-btn">Comprar Ahora</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
