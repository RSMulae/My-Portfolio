import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (height > 0) {
        setProgress(scrollY / height);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#121212] border border-white/10 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-none"
      style={{
        boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
      }}
      aria-label="Back to top"
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeDasharray="125.6"
          strokeDashoffset={125.6 * (1 - progress)}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-75"
        />
      </svg>
      <span className="relative z-10 text-lg">↑</span>
    </button>
  );
}
