import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

interface WorkNavbarProps {
  onContactClick: () => void;
}

export default function WorkNavbar({ onContactClick }: WorkNavbarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToHomeSection = (id: string) => {
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    setIsMenuOpen(false);

    // Scroll to section after path updates
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          el.classList.add('section-transition');
          const handleAnimationEnd = () => {
            el.classList.remove('section-transition');
            el.removeEventListener('animationend', handleAnimationEnd);
          };
          el.addEventListener('animationend', handleAnimationEnd);
        }
      }
    }, 120);
  };

  return (
    <>
      <FadeIn
        delay={0}
        y={-16}
        as="nav"
        className={`fixed top-0 left-0 w-full z-[50] transition-all duration-355 ${
          isSticky
            ? 'backdrop-blur-[18px] py-4 bg-[#0C0C0C]/82 border-b border-[#8B5CF6]/12 shadow-md'
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="global-container">
          <div className="flex justify-between items-center w-full px-6 md:px-12">
            {/* Logo RAJ */}
            <button
              onClick={() => handleNavigateToHomeSection('home')}
              className="font-extrabold uppercase tracking-wider text-white logo-text bg-transparent border-none cursor-none text-left"
              style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)' }}
            >
              <span
                className="text-[#EC4899] font-black mr-0.5"
                style={{ textShadow: '0 0 12px rgba(240,171,252,0.6)' }}
              >
                R
              </span>
              AJ
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-6 sm:gap-8 md:gap-12 items-center">
              {[
                { label: 'HOME', id: 'home' },
                { label: 'ABOUT', id: 'about' },
                { label: 'SERVICES', id: 'services' },
                { label: 'PROJECTS', id: 'projects' },
              ].map((link, idx) => (
                <FadeIn key={link.label} delay={0.1 + idx * 0.06} y={-16} duration={0.55}>
                  <button
                    onClick={() => handleNavigateToHomeSection(link.id)}
                    className="nav-link-custom font-semibold uppercase tracking-widest text-[#D7E2EA]/85 hover:text-white bg-transparent border-none cursor-none"
                    style={{ fontSize: 'clamp(0.8rem, 2vw, 1.4rem)' }}
                  >
                    {link.label}
                  </button>
                </FadeIn>
              ))}
              <FadeIn delay={0.1 + 4 * 0.06} y={-16} duration={0.55}>
                <ContactButton
                  label="CONTACT ME"
                  onClick={onContactClick}
                  className="!px-5 !py-2 md:!px-6 md:!py-2.5 shadow-sm"
                />
              </FadeIn>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8 bg-transparent border-none cursor-none z-[60] relative"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 hamburger-line ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 hamburger-line ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 hamburger-line ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="fixed inset-0 bg-[#0C0C0C]/98 backdrop-blur-xl z-[55] flex flex-col justify-center items-center"
            >
              <div className="flex flex-col gap-8 text-center items-center">
                {[
                  { label: 'HOME', id: 'home' },
                  { label: 'ABOUT', id: 'about' },
                  { label: 'SERVICES', id: 'services' },
                  { label: 'PROJECTS', id: 'projects' },
                ].map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + idx * 0.08 }}
                  >
                    <button
                      onClick={() => handleNavigateToHomeSection(link.id)}
                      className="text-2xl font-bold uppercase tracking-widest bg-transparent border-none cursor-none text-[#D7E2EA]/85 hover:text-white"
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + 4 * 0.08 }}
                >
                  <ContactButton
                    label="CONTACT ME"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onContactClick();
                    }}
                    className="!px-6 !py-2.5"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </FadeIn>
      <div className="h-20 sm:h-24 w-full bg-[#0C0C0C]" />
    </>
  );
}
