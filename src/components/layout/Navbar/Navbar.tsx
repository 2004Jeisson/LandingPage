import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '../../../context/LoadingContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { triggerLoading } = useLoading();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    triggerLoading(800); // Trigger loading for 800ms
    
    // Delay the scroll to happen slightly after the loading screen appears
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }, 400);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="logo-container">
        <a href="/" onClick={(e) => {
          if (window.location.pathname !== '/') return; // Default behavior if not home
          e.preventDefault();
          triggerLoading(800);
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 400);
        }}>
          <img src="/products/loguito.png" alt="Logo" />
        </a>
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
          onClick={(e) => handleNavClick(e, 'features')}
        >
          Características
        </a>
        <a 
          href="#testimonials" 
          onClick={(e) => handleNavClick(e, 'testimonials')}
        >
          Opiniones
        </a>
        <a 
          href="https://wa.me/573208700771?text=Hola%20somos%20Castrillon%20Conect" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="buy-btn"
          onClick={() => {
            setIsOpen(false);
            triggerLoading(1000);
          }}
        >
          Comprar Ahora
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
