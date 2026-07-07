import { useEffect, useState } from 'react';

export default function NotFound() {
  const [displayText, setDisplayText] = useState('');
  const message = "This page doesn't exist... yet.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(message.slice(0, index + 1));
      index++;
      if (index >= message.length) {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const handleBackHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] flex flex-col justify-center items-center font-kanit p-6 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="z-10 text-center flex flex-col items-center gap-6">
        {/* Glitchy 404 Heading */}
        <h1
          className="font-black text-8xl md:text-9xl tracking-tighter uppercase glitch-text"
          style={{
            textShadow: '0.05em 0 0 rgba(182,0,168,0.75), -0.025em -0.05em 0 rgba(118,33,176,0.75), 0.025em 0.05em 0 rgba(190,76,0,0.75)',
          }}
        >
          404
        </h1>

        {/* Typewriter message */}
        <div className="min-h-[2rem] flex items-center justify-center">
          <p className="text-lg sm:text-xl font-medium tracking-wide text-white/80">
            {displayText}
            <span className="text-[#A78BFA] animate-blink-cursor">|</span>
          </p>
        </div>

        {/* Back Home Button */}
        <button
          onClick={handleBackHome}
          className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] font-bold uppercase tracking-widest text-xs text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-none border-none animate-pulse"
        >
          Back Home 🚀
        </button>
      </div>
    </div>
  );
}
