interface SectionLabelProps {
  text: string;
  dark?: boolean; // true = for white-bg sections
}

export default function SectionLabel({ text, dark = false }: SectionLabelProps) {
  const color = dark ? 'rgba(124,58,237,0.9)' : 'var(--primary)';
  const lineColor = dark ? 'rgba(124,58,237,0.6)' : 'var(--primary)';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: '"Fira Code", monospace',
        fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color,
        marginBottom: 16,
      }}
    >
      <span style={{ width: 28, height: 1, background: lineColor, flexShrink: 0 }} />
      {text}
      <span style={{ width: 28, height: 1, background: lineColor, flexShrink: 0 }} />
    </div>
  );
}
