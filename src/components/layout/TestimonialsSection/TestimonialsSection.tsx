import FadeUp from '../../ui/FadeUp/FadeUp';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Juan Camilo Castro.',
    city: 'Bogotá',
    rating: 5,
    comment: 'El alcance de 500 metros es real. He viajado con mi pareja y tambien con mi amigo y la comunicación es nítida sin interferencia. ¡100% recomendado!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Kevin Cante Rodríguez',
    city: 'Medellín',
    rating: 5,
    comment: 'La batería de 24 horas es una locura. Estuve de viaje todo el fin de semana y no tuve que cargarlo ni una vez.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    name: 'Lina Marcela Castrillon Acosta  .',
    city: 'Cali',
    rating: 5,
    comment: 'Excelente impermeabilidad IP65. Me cogió un aguacero terrible en carretera y el intercomunicador siguió perfecto.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Juan Andres Alzate.',
    city: 'Manizales',
    rating: 5,
    comment: 'La linterna LED integrada me salvó en una desvarada nocturna. El sonido es espectacular y súper potente. Finalmente destaco que tenga la opcion de Tarjeta SD para la musica sin conexion.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    name: 'Lady Johana Muñoz Rodriguez.',
    city: 'Bucaramanga',
    rating: 5,
    comment: 'El audio es súper nítido incluso a altas velocidades. Muy fácil de instalar en el casco y de usar con guantes.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Kevin Santiago Benavides.',
    city: 'Bogota',
    rating: 5,
    comment: 'El diseño es increíble, súper moderno y el Bluetooth conecta rápido con mi celular. Muy contento con la compra.',
    image: 'https://randomuser.me/api/portraits/men/55.jpg'
  }
];

const TestimonialsSection = () => {
  // Duplicamos los testimonios para el efecto de carrusel infinito
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="testimonials-section">
      <FadeUp className="section-label">Prueba Social</FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="section-title gradient-text">Opiniones de nuestros clientes</h2>
      </FadeUp>

      <div className="carousel-container">
        <div className="carousel-track">
          {carouselItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="testimonial-card glass-panel">
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="star-icon"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-comment">"{item.comment}"</p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} className="user-avatar-img" loading="lazy" />
                <div className="user-info">
                  <span className="user-name">{item.name}</span>
                  <span className="user-city">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

