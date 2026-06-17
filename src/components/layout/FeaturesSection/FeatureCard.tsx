import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Skip GPU-heavy blur on mobile
const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const FeatureCard = ({
  icon,
  title,
  desc,
  image,
  isActive,
  animateStyle,
  onClick,
  onImageClick
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  image?: string;
  isActive: boolean;
  animateStyle: { x: number; scale: number; opacity: number; filter: string; zIndex: number };
  onClick: () => void;
  onImageClick: (e: React.MouseEvent) => void;
}) => {
  return (
    <motion.div
      className={`feature-card glass-panel ${isActive ? 'active-card' : ''}`}
      onClick={onClick}
      animate={{
        x: animateStyle.x,
        scale: animateStyle.scale,
        opacity: animateStyle.opacity,
        filter: isMobile ? 'none' : animateStyle.filter,
      }}
      style={{ zIndex: animateStyle.zIndex }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {image && (
        <div className="feature-card-image" onClick={isActive ? onImageClick : undefined}>
          <img src={image} alt={title} loading="lazy" decoding="async" />
          {isActive && (
            <div className="image-overlay-hint">
              <span>Ver imagen</span>
            </div>
          )}
        </div>
      )}
      <div className="feature-card-content">
        <div className="icon-wrapper">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
