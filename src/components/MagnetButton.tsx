import React, { useRef, useState, useCallback } from 'react';

interface MagnetButtonProps {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
  className?: string;
}

export default function MagnetButton({
  children,
  strength = 3.5,
  padding = 80,
  className = '',
}: MagnetButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < rect.width / 2 + padding) {
      setActive(true);
      setPos({ x: dx / strength, y: dy / strength });
    } else {
      setActive(false);
      setPos({ x: 0, y: 0 });
    }
  }, [strength, padding]);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
    setPos({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
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
