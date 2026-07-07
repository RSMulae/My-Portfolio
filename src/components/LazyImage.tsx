import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fit?: 'cover' | 'contain';
}

export default function LazyImage({ src, alt, className = '', style, fit = 'cover' }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Resolve base URL for local assets
  const getBaseSrc = (srcPath: string) => {
    if (!srcPath) return '';
    if (srcPath.startsWith('http://') || srcPath.startsWith('https://') || srcPath.startsWith('data:')) {
      return srcPath;
    }
    const normalized = srcPath.startsWith('/') ? srcPath.slice(1) : srcPath;
    return `${import.meta.env.BASE_URL}${normalized}`;
  };

  const finalSrc = getBaseSrc(src);

  useEffect(() => {
    const img = new Image();
    img.src = finalSrc;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [finalSrc]);

  // A very small, low-res base64 purple/grey gradient placeholder
  const placeholder = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23121212'/><rect width='100' height='100' fill='url(%23g)' opacity='0.2'/><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%23B600A8'/><stop offset='100%25' stop-color='%237621B0'/></linearGradient></defs></svg>";

  const fitClass = fit === 'contain' ? 'object-contain bg-[#121212]/70' : 'object-cover';

  // Base64-encoded diagonal repeating watermark: "GURU NANAK ENTERPRISES • SAMPLE - DO NOT REUSE"
  const watermarkPattern = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJyB2aWV3Qm94PScwIDAgMjAwIDIwMCc+PHRleHQgeD0nMTAwJyB5PScxMDAnIGZpbGw9J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0nMTEnIGZvbnQtd2VpZ2h0PSdib2xkJyB0cmFuc2Zvcm09J3JvdGF0ZSgtMzAgMTAwIDEwMCknIHRleHQtYW5jaG9yPSdtaWRkbGUiPkdVUlUgTkFOQUsgRU5URVJQUklTRVM8L3RleHQ+PHRleHQgeD0nMTAwJyB5PScxMjAnIGZpbGw9J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSknIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0nOScgZm9udC13ZWlnaHQ9J2JvbGQnIHRyYW5zZm9ybT0icm90YXRlKC0zMCAxMDAgMTAwKScgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0FNUExFIC0gRE8gTk9UIFJFVVNFPC90ZXh0Pjwvc3ZnPg==')";

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ ...style }}>
      {/* Low-res placeholder */}
      <img
        src={placeholder}
        alt="placeholder"
        className={`w-full h-full ${fitClass} transition-opacity duration-500 absolute inset-0 blur-lg scale-105 select-none pointer-events-none`}
        style={{ opacity: isLoaded ? 0 : 1 }}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      {/* High-res image */}
      <img
        src={finalSrc}
        alt={alt}
        loading="lazy"
        className={`w-full h-full ${fitClass} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} select-none pointer-events-none`}
        style={{ ...style }}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      
      {/* Click-blocking overlay layer */}
      <div 
        className="absolute inset-0 z-10 select-none pointer-events-auto cursor-default bg-transparent"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />

      {/* Repeating Diagonal Watermark Overlay */}
      <div 
        className="absolute inset-0 z-20 select-none pointer-events-none opacity-80"
        style={{
          backgroundImage: watermarkPattern,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
