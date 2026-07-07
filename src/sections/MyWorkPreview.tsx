import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import WorkLightbox from '../components/WorkLightbox';
import InteractiveBackground from '../components/InteractiveBackground';
import LazyImage from '../components/LazyImage';
import { workData, type WorkItem } from '../data/workData';


export default function MyWorkPreview() {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const handleNavigateToWork = () => {
    window.history.pushState(null, '', `${import.meta.env.BASE_URL}work`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="my-work-preview" className="bg-[#0C0C0C] py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-10 relative z-20 border-t border-white/5 overflow-hidden">
      <InteractiveBackground theme="dark" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="overflow-hidden mb-4 text-center">
            <h2 
              className="hero-heading font-black uppercase leading-none tracking-[0.08em] text-center" 
              style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
            >
              Featured Work
            </h2>
          </div>
          <p className="text-center text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-xs font-semibold mb-12 max-w-xl mx-auto leading-relaxed">
            A handpicked selection of design, video, web, and branding projects.
          </p>
        </FadeIn>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {workData.slice(0, 4).map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08} y={30}>
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

                {/* Gradient Overlay and Title (Desktop) */}
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
            </FadeIn>
          ))}
        </div>

        {/* View All Button */}
        <FadeIn delay={0.2} y={30} className="flex justify-center mt-12">
          <button
            onClick={handleNavigateToWork}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-none select-none relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 15px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </button>
        </FadeIn>
      </div>

      {/* Lightbox Modal */}
      <WorkLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
