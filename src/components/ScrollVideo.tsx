import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './ScrollVideo.css';

const FRAME_COUNT = 240;

const getFramePath = (index: number) =>
  `/products/frames/${index.toString().padStart(4, '0')}.jpg`;

// Scroll-triggered text panels that appear beside the video
const SCROLL_PANELS = [
  {
    tag: 'Q58-MAX',
    headline: 'Comunicación\nSin Límites',
    body: 'El intercomunicador definitivo para motociclistas de élite. Audio profesional, diseño indestructible.',
    at: 0,
  },
  {
    tag: 'Tecnología Militar',
    headline: 'Alcance de\n2 Kilómetros',
    body: 'Señal de largo alcance con protocolo de comunicación avanzado. Permanece conectado en cualquier terreno.',
    at: 0.35,
  },
  {
    tag: 'IA Integrada',
    headline: 'Silencio\nAbsoluto',
    body: 'Cancelación activa de ruido con inteligencia artificial. Escucha y sé escuchado con claridad cristalina.',
    at: 0.7,
  },
];

const ScrollVideo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [activePanel, setActivePanel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Preload all frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadCount++;
        if (loadCount === FRAME_COUNT) setLoaded(true);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Drive canvas from smoothProgress
  useEffect(() => {
    if (!loaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    return smoothProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v * (FRAME_COUNT - 1)), FRAME_COUNT - 1);
      const img = images[idx];
      if (!img) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // Detect active text panel based on progress
      let panel = 0;
      for (let i = SCROLL_PANELS.length - 1; i >= 0; i--) {
        if (v >= SCROLL_PANELS[i].at) { panel = i; break; }
      }
      setActivePanel(panel);
    });
  }, [loaded, images, smoothProgress]);

  const panel = SCROLL_PANELS[activePanel];

  return (
    <div ref={containerRef} className="scroll-video-root">
      {/* Sticky viewport */}
      <div className="scroll-video-sticky">

        {/* Loading overlay */}
        {!loaded && (
          <div className="sv-loading">
            <span className="sv-loading-dot" />
            <span className="sv-loading-dot" style={{ animationDelay: '0.2s' }} />
            <span className="sv-loading-dot" style={{ animationDelay: '0.4s' }} />
          </div>
        )}

        {/* Left — animated text panel */}
        <div className="sv-text-side">
          <motion.div
            key={activePanel}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="sv-text-inner"
          >
            <span className="sv-tag">{panel.tag}</span>
            <h2 className="sv-headline">
              {panel.headline.split('\n').map((line, i) => (
                <span key={i} className="sv-headline-line">{line}</span>
              ))}
            </h2>
            <p className="sv-body">{panel.body}</p>
          </motion.div>

          {/* Progress dots */}
          <div className="sv-dots">
            {SCROLL_PANELS.map((_, i) => (
              <div key={i} className={`sv-dot ${i === activePanel ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        {/* Right — product showcase frame + canvas */}
        <div className="sv-product-side">
          {/* Glow behind device */}
          <div className="sv-glow" />

          {/* Device frame */}
          <div className="sv-device-frame">
            <div className="sv-device-screen">
              <canvas ref={canvasRef} className="sv-canvas" />
            </div>
            {/* Reflection overlay */}
            <div className="sv-reflection" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollVideo;
