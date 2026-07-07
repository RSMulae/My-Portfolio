import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LazyImage from './LazyImage';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  description: string;
  link?: string;
}

interface WorkLightboxProps {
  item: WorkItem | null;
  onClose: () => void;
}

export default function WorkLightbox({ item, onClose }: WorkLightboxProps) {
  const getBaseMediaUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    const normalized = url.startsWith('/') ? url.slice(1) : url;
    return `${import.meta.env.BASE_URL}${normalized}`;
  };

  const finalMediaUrl = item ? getBaseMediaUrl(item.mediaUrl) : '';

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl w-full bg-[#121212] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white/80 hover:text-white transition-all cursor-none border border-white/5 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Media Section */}
              <div className="flex-1 bg-black/40 flex items-center justify-center p-4 min-h-[250px] md:min-h-[400px] max-h-[50vh] md:max-h-[70vh] relative overflow-hidden">
                {item.mediaType === 'video' ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {item.mediaUrl.includes('youtube.com') || item.mediaUrl.includes('youtu.be') || item.mediaUrl.includes('vimeo.com') ? (
                      <iframe
                        src={finalMediaUrl}
                        className="w-full aspect-video max-h-[45vh] md:max-h-[65vh] rounded-lg border-0 shadow-lg relative z-0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={item.title}
                      />
                    ) : (
                      <video
                        src={finalMediaUrl}
                        controls
                        autoPlay
                        loop
                        playsInline
                        className="max-h-[45vh] md:max-h-[65vh] w-full h-full object-contain rounded-lg relative z-0"
                      />
                    )}
                    {/* Repeating Diagonal Watermark Overlay for Videos */}
                    <div 
                      className="absolute inset-0 z-10 select-none pointer-events-none opacity-60 rounded-lg"
                      style={{
                        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJyB2aWV3Qm94PScwIDAgMjAwIDIwMCc+PHRleHQgeD0nMTAwJyB5PScxMDAnIGZpbGw9J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0nMTEnIGZvbnQtd2VpZ2h0PSdib2xkJyB0cmFuc2Zvcm09J3JvdGF0ZSgtMzAgMTAwIDEwMCknIHRleHQtYW5jaG9yPSdtaWRkbGUiPkdVUlUgTkFOQUsgRU5URVJQUklTRVM8L3RleHQ+PHRleHQgeD0nMTAwJyB5PScxMjAnIGZpbGw9J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSknIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0nOScgZm9udC13ZWlnaHQ9J2JvbGQnIHRyYW5zZm9ybT0icm90YXRlKC0zMCAxMDAgMTAwKScgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0FNUExFIC0gRE8gTk9UIFJFVVNFPC90ZXh0Pjwvc3ZnPg==')",
                        backgroundRepeat: 'repeat',
                      }}
                    />
                  </div>
                ) : (
                  <LazyImage
                    src={item.mediaUrl || item.thumbnail}
                    alt={item.title}
                    className="max-h-[45vh] md:max-h-[65vh] w-full h-full rounded-lg"
                    fit="contain"
                  />
                )}
              </div>

              {/* Info Section */}
              <div className="p-6 md:p-8 md:w-80 bg-[#161616] border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B600A8] font-bold font-mono">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mt-1 uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <div className="h-[1px] bg-white/10 my-4" />
                  <p className="text-[#D7E2EA]/70 text-xs md:text-sm leading-relaxed max-h-[150px] md:max-h-[280px] overflow-y-auto pr-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
