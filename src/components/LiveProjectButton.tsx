

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function LiveProjectButton({
  label = 'Live Project',
  onClick,
  href,
  className = '',
}: LiveProjectButtonProps) {
  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {label}
    </span>
  );

  const classes = `inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 transition-all duration-300 hover:bg-[#D7E2EA]/10 cursor-none select-none ${className}`;

  const styleObj: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
    maxWidth: '90vw',
    whiteSpace: 'nowrap',
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={styleObj}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={styleObj}>
      {content}
    </button>
  );
}
