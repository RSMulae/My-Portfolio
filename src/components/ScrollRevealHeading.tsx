import { motion } from 'framer-motion';

interface ScrollRevealHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  align?: 'center' | 'left';
}

export default function ScrollRevealHeading({ text, className = '', style, align = 'center' }: ScrollRevealHeadingProps) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const justify = align === 'left' ? 'flex-start' : 'center';

  return (
    <motion.h2
      className={className}
      style={{
        ...style,
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: justify,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block overflow-hidden py-1 mr-[0.25em]" style={{ display: 'inline-block' }}>
          <motion.span
            variants={wordVariants}
            className="inline-block"
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
