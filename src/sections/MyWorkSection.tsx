import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import WorkLightbox from '../components/WorkLightbox';
import InteractiveBackground from '../components/InteractiveBackground';
import LazyImage from '../components/LazyImage';
import { workData, type WorkItem } from '../data/workData';

const categories = ['All', '3D Models', 'Posters', 'Flyers', 'Illustrations', 'Videos', 'Logo'];

export default function MyWorkSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const filteredItems = activeFilter === 'All' 
    ? workData 
    : workData.filter(item => item.category === activeFilter);

  return (
    <section id="my-work" className="bg-[#0C0C0C] py-20 sm:py-24 px-5 sm:px-8 md:px-10 relative z-20 border-t border-white/5 overflow-hidden">
      <InteractiveBackground theme="dark" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="overflow-hidden mb-8 sm:mb-12 text-center">
            <h2 
              className="hero-heading font-black uppercase leading-none tracking-[0.08em] text-center" 
              style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
            >
              My Work
            </h2>
          </div>
        </FadeIn>

        {/* Filter Tabs — Scrollable horizontally on mobile */}
        <div className="flex justify-center w-full mt-4 mb-10">
          <div className="flex overflow-x-auto whitespace-nowrap gap-2 sm:gap-4 max-w-full px-2 py-1 no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-none select-none flex-shrink-0 ${
                  activeFilter === cat
                    ? 'text-white'
                    : 'bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
                style={activeFilter === cat ? {
                  background: 'linear-gradient(135deg, #B600A8 0%, #7621B0 100%)',
                  boxShadow: '0 4px 15px rgba(181, 1, 167, 0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div
                  onClick={() => setSelectedItem(item)}
                  className="relative group cursor-none overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-square shadow-lg transition-all duration-300 hover:border-violet-500/30 hover:shadow-violet-500/5 hover:-translate-y-1"
                >
                  {/* Thumbnail Image */}
                  <LazyImage
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  />

                  {/* Gradient Overlay and Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left pointer-events-none">
                    <span className="text-[9px] uppercase tracking-widest text-cyan-400 font-extrabold font-mono">
                      {item.category}
                    </span>
                    <h3 className="text-white font-extrabold text-xs md:text-sm mt-1 uppercase tracking-wider leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Mobile Static / Simple Badge (visible without hover) */}
                  <div className="absolute bottom-2 left-2 md:hidden bg-black/60 backdrop-blur-md rounded-lg px-2 py-1 text-left max-w-[90%] pointer-events-none border border-white/5">
                    <span className="text-[7px] uppercase tracking-widest text-cyan-400 font-bold block leading-none">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-[9px] truncate mt-0.5 max-w-full leading-none">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <WorkLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
