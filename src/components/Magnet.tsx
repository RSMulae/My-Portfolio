import React, { useRef, useState, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
  className?: string;
}

export default function Magnet({
  children,
  strength = 3,
  padding = 150,
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < rect.width / 2 + padding) {
        setActive(true);
        const tx = dx / strength;
        const ty = dy / strength;
        setTransform(`translate3d(${tx}px, ${ty}px, 0px)`);
      } else {
        setActive(false);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    },
    [strength, padding]
  );

  const handleMouseLeave = useCallback(() => {
    setActive(false);
    setTransform('translate3d(0px, 0px, 0px)');
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnet-container ${active ? 'magnet-active' : ''} ${className}`}
      style={{
        transform,
        transition: active
          ? 'transform 0.3s ease-out'
          : 'transform 0.6s ease-in-out',
        willChange: 'transform',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
}
