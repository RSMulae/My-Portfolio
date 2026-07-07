import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charGlobalIndex = 0;

  return (
    <p ref={containerRef} className={className} style={{ ...style, display: 'inline-block' }}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        
        return (
          <span
            key={wordIndex}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            {wordChars.map((char) => {
              const index = charGlobalIndex++;
              const start = (index / totalChars) * 0.7;
              const end = start + 0.3;
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <span
                  key={index}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <span style={{ opacity: 0.2 }}>{char}</span>
                  <motion.span
                    style={{
                      opacity,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
            {/* Add space after the word, except for the last word */}
            {wordIndex < words.length - 1 && (
              <span className="select-none" style={{ display: 'inline-block', width: '0.25em' }}>&nbsp;</span>
            )}
          </span>
        );
      })}
    </p>
  );
}
