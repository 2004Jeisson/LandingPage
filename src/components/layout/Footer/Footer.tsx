import './Footer.css';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <img src="/products/loguito.png" alt="Castrillón Connect Logo" className="footer-logo" />
          <p className="footer-slogan">
            Elevando tu experiencia en dos ruedas con conectividad de vanguardia.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Enlaces</h4>
          <ul>
            <li><a href="#" onClick={(e) => handleNavClick(e, '')}>Inicio</a></li>
            <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Características</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Opiniones</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Soporte y Ventas</h4>
          
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div className="contact-details">
              <span className="contact-label">Ubicación</span>
              <span className="contact-value">Calle 6a #6a- 104</span>
            </div>
          </div>

          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div className="contact-details">
              <span className="contact-label">Contacto</span>
              <a href="https://wa.me/573208700771" target="_blank" rel="noopener noreferrer" className="contact-value link">320 8700771</a>
            </div>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Castrillón Connect. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
