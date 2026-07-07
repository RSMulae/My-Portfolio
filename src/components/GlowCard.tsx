import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function GlowCard({ children, className = '', onClick, style }: GlowCardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`relative group overflow-hidden bg-surface border border-white/5 rounded-2xl transition-all duration-500 ease-[0.16,1,0.3,1] hover:border-primary/40 hover:shadow-[0_0_48px_rgba(168,85,247,0.1)] cursor-none ${className}`}
    >
      {/* Glow border effect on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  );
}
