import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const isMobile = useRef(false);
  const [isOverServices, setIsOverServices] = useState(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
    if (isMobile.current) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest('#services')) {
        setIsOverServices(true);
      } else {
        setIsOverServices(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [dotX, dotY]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  // Adaptive cursor color based on active section context
  const dotColor = isOverServices ? '#1E3A8A' : 'var(--primary)'; // Dark blue over white Services, purple elsewhere

  return (
    <motion.div
      style={{
        x: dotX,
        y: dotY,
        translateX: '-50%',
        translateY: '-50%',
        position: 'fixed',
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: dotColor,
        pointerEvents: 'none',
        zIndex: 99999,
      }}
    />
  );
}
