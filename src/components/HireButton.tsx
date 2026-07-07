import MagnetButton from './MagnetButton';

interface HireButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function HireButton({
  label = 'Hire Me →',
  onClick,
  href,
  className = '',
}: HireButtonProps) {
  const style: React.CSSProperties = {
    background: 'linear-gradient(125deg, #3B0764 8%, #7C3AED 38%, #A855F7 68%, #F59E0B 100%)',
    boxShadow: 'inset 0 2px 12px rgba(168,85,247,0.4), 0 0 0 2px rgba(168,85,247,0.2)',
    outline: '2px solid rgba(255,255,255,0.12)',
    outlineOffset: '-4px',
    color: 'white',
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    borderRadius: '9999px',
    padding: '0.75rem 2rem',
    cursor: 'none',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    border: 'none',
    display: 'inline-block',
    fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
    whiteSpace: 'nowrap',
  };

  const content = href ? (
    <a
      href={href}
      style={style}
      className={`hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] ${className}`}
    >
      {label}
    </a>
  ) : (
    <button
      onClick={onClick}
      style={style}
      className={`hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] ${className}`}
    >
      {label}
    </button>
  );

  return (
    <MagnetButton strength={4} padding={60}>
      {content}
    </MagnetButton>
  );
}
