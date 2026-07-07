import { useEffect, useRef, useState } from 'react';
import InteractiveBackground from '../components/InteractiveBackground';

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Images = [
    'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
    'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
    'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  ];

  const row2Images = [
    'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
    'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
    'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
    'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
    'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
    'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
    'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
    'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
  ];

  // Triple items for continuous scrolling loop
  const row1Tripled = [...row1Images, ...row1Images, ...row1Images];
  const row2Tripled = [...row2Images, ...row2Images, ...row2Images];

  return (
    <div
      ref={sectionRef}
      id="marqueeContainer"
      className="pt-10 sm:pt-20 md:pt-40 pb-6 sm:pb-10 w-full overflow-hidden relative z-[1]"
      style={{ background: '#0C0C0C' }}
    >
      <InteractiveBackground theme="dark" />
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: moves RIGHT (translateX(offset - 200)) */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div
            className="flex gap-3 inline-flex marquee-row transition-transform duration-75 ease-out"
            style={{
              transform: `translate3d(${scrollOffset - 200}px, 0px, 0px)`,
              willChange: 'transform',
            }}
          >
            {row1Tripled.map((url, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10"
              >
                <img
                  src={url}
                  alt="Motion preview"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: moves LEFT (translateX(-(offset - 200))) */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div
            className="flex gap-3 inline-flex marquee-row transition-transform duration-75 ease-out"
            style={{
              transform: `translate3d(${-(scrollOffset - 200)}px, 0px, 0px)`,
              willChange: 'transform',
            }}
          >
            {row2Tripled.map((url, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10"
              >
                <img
                  src={url}
                  alt="Motion preview"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
