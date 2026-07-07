import { useState } from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function ContactButton({
  label = 'CONTACT ME',
  onClick,
  className = '',
}: ContactButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-full font-medium uppercase tracking-widest text-white transition-all duration-300 active:scale-95 cursor-none select-none overflow-hidden group/cbtn px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 flex items-center justify-center gap-2 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: hovered
          ? '0 6px 20px rgba(181, 1, 167, 0.4), inset 4px 4px 12px #7721B1'
          : '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
        maxWidth: '90vw',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Conic Border Animation on Hover */}
      <span className="absolute -inset-[2px] opacity-0 group-hover/cbtn:opacity-100 transition-opacity duration-300 z-0 overflow-hidden rounded-full pointer-events-none">
        <span
          className="absolute top-1/2 left-1/2 w-[220%] h-[220%] animate-border-spin"
          style={{
            background: 'conic-gradient(from 0deg, #B600A8, #7621B0, #BE4C00, #B600A8)',
          }}
        />
      </span>

      {/* Hover inner gradient mask */}
      <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-r from-[#18011F] via-[#7621B0] to-[#BE4C00] opacity-0 group-hover/cbtn:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />

      {/* Normal Border outline offset */}
      <span className="absolute inset-[3px] rounded-full border border-white/60 opacity-100 group-hover/cbtn:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

      {/* Stable Text and single arrow transition */}
      <div className="relative z-10 flex items-center justify-center gap-1.5 overflow-hidden">
        <span>{label}</span>
        <span
          className="transition-transform duration-300 ease-out"
          style={{
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          →
        </span>
      </div>

      {/* Light Overlay hover */}
      <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-200 hover:opacity-10 z-0" />
    </button>
  );
}
