import { useEffect, useRef } from 'react';

interface InteractiveBackgroundProps {
  theme?: 'dark' | 'light';
}

export default function InteractiveBackground({ theme = 'dark' }: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let W = (canvas.width = rect.width || window.innerWidth);
    let H = (canvas.height = rect.height || window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;
    let animId: number;
    let gridOffset = { x: 0, y: 0 };

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      W = canvas.width = r.width || window.innerWidth;
      H = canvas.height = r.height || window.innerHeight;
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      
      // Update spotlight position
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--x', `${x}px`);
        spotlightRef.current.style.setProperty('--y', `${y}px`);
      }

      mouseX = x;
      mouseY = y;
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0) return;
      const touch = e.touches[0];
      const r = containerRef.current.getBoundingClientRect();
      const x = touch.clientX - r.left;
      const y = touch.clientY - r.top;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--x', `${x}px`);
        spotlightRef.current.style.setProperty('--y', `${y}px`);
      }

      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchstart', handleGlobalTouchMove, { passive: true });
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });

    const draw = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(draw);
        return;
      }

      // Performance check: only draw if section is visible in viewport
      if (containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        const isVisible = r.top < window.innerHeight && r.bottom > 0;
        if (!isVisible) {
          animId = requestAnimationFrame(draw);
          return;
        }
      }

      ctx.clearRect(0, 0, W, H);

      // Grid Pan Drift diagonal at 0.3px/frame
      gridOffset.x = (gridOffset.x + 0.3) % 36;
      gridOffset.y = (gridOffset.y + 0.3) % 36;

      const spacing = 36;
      const startX = -spacing + (gridOffset.x % spacing);
      const startY = -spacing + (gridOffset.y % spacing);

      for (let x = startX; x < W + spacing; x += spacing) {
        for (let y = startY; y < H + spacing; y += spacing) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let r = 0.8;
          let opacity = theme === 'light' ? 0.08 : 0.25;

          // spotlight ripple effect
          if (dist < 120) {
            const factor = 1 - dist / 120; // 1 at center, 0 at border
            r = 0.8 + (1.6 - 0.8) * factor;
            const targetMaxOpacity = theme === 'light' ? 0.32 : 0.7;
            const baseOpacity = theme === 'light' ? 0.08 : 0.25;
            opacity = baseOpacity + (targetMaxOpacity - baseOpacity) * factor;
          }

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          
          if (theme === 'light') {
            // Darker violet dots for light bg
            ctx.fillStyle = `rgba(109, 40, 217, ${opacity})`;
          } else {
            // Purple/violet dots for dark bg
            ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
          }
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchstart', handleGlobalTouchMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
    };
  }, [theme]);

  // Spotlight styles based on theme
  const spotlightStyle = theme === 'light' 
    ? {
        background: 'radial-gradient(circle 220px at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
      }
    : {
        background: 'radial-gradient(circle 220px at var(--x, 50%) var(--y, 50%), rgba(182, 0, 168, 0.22) 0%, rgba(0, 0, 0, 0) 100%)',
      };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[5]"
    >
      {/* Spotlight layer */}
      <div 
        ref={spotlightRef} 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{
          ...spotlightStyle,
          transition: 'background 0.05s linear',
          zIndex: 5,
        }}
      />
      {/* Canvas Dot-Grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
}
