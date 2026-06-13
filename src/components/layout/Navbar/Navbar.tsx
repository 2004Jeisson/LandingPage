import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Hamburger button for mobile */}
      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Nav links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a 
          href="#features" 
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            const el = document.getElementById('features');
            if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
          }}
        >
          Características
        </a>
        <a 
          href="#specs" 
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            const el = document.getElementById('specs');
            if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
          }}
        >
          Especificaciones
        </a>
        <a 
          href="https://wa.me/573208700771?text=Hola%20somos%20Castrillon%20Conect" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="buy-btn"
          onClick={() => setIsOpen(false)}
        >
          Comprar Ahora
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
