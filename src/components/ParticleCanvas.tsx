import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

interface ParticleCanvasProps {
  theme?: 'dark' | 'light';
  count?: number;
}

export default function ParticleCanvas({ theme = 'dark', count }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const N = count || (isMobile ? 25 : 55);

    // Set canvas dimensions to its display size
    const resizeCanvas = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();

    let W = canvas.width;
    let H = canvas.height;
    let animId: number;

    const particles: Particle[] = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25, // Very slow drift
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.6,
      alpha: Math.random() * 0.2 + 0.05,
    }));

    const onResize = () => {
      if (!canvas) return;
      resizeCanvas();
      W = canvas.width;
      H = canvas.height;
    };

    window.addEventListener('resize', onResize);

    const draw = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, W, H);

      // Colors based on theme
      // Dark sections: low-opacity purple/white dots. Light sections: faint grey/violet.
      const baseColor = theme === 'light' ? '109, 40, 217' : '167, 139, 250'; // Violet/Purple
      const particleAlphaMultiplier = theme === 'light' ? 0.25 : 0.15;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, ${p.alpha * particleAlphaMultiplier * 6})`;
        ctx.fill();
      }

      // Draw subtle links
      const maxDistance = 110;
      const lineOpacityMultiplier = theme === 'light' ? 0.07 : 0.04;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${baseColor}, ${(1 - dist / maxDistance) * lineOpacityMultiplier})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [theme, count]);

  return (
    <canvas
      ref={canvasRef}
      className="particles"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
