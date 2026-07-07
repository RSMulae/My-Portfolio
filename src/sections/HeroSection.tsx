import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';
import InteractiveBackground from '../components/InteractiveBackground';

const WORDS = ["I design", "I build", "I automate"];

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isNavbarLight, setIsNavbarLight] = useState(false);

  // Parallax / Spring motion values for Avatar
  const avatarX = useMotionValue(0);
  const avatarY = useMotionValue(0);
  const springX = useSpring(avatarX, { stiffness: 60, damping: 14 });
  const springY = useSpring(avatarY, { stiffness: 60, damping: 14 });
  const [avatarHovered, setAvatarHovered] = useState(false);

  // Typewriter state for subtitle
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  // Scroll active tracking & Hamburger state
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Wait for the fade-in animation to complete (1.2s total delay)
    const startTimeout = setTimeout(() => {
      setHasStartedTyping(true);
    }, 1200);
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -40% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStartedTyping) return;

    const currentWord = WORDS[currentWordIndex];
    let timer: number;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = window.setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 100); // 100ms typing speed
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // 1s pause
      }
    } else {
      if (displayText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // 50ms backspace speed
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
        }, 300); // 300ms pause after fully deleted
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, hasStartedTyping, currentWordIndex]);

  // Handle sticky nav scroll hook
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for detecting when navbar overlaps the white services section
  useEffect(() => {
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNavbarLight(true);
          } else {
            setIsNavbarLight(false);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '-80px 0px 0px 0px', // detects when it reaches navbar height
      }
    );

    observer.observe(servicesSection);
    return () => observer.disconnect();
  }, []);

  // Handle Avatar Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    // Drift at 1/12 delta
    avatarX.set(dx / 12);
    avatarY.set(dy / 12);
  };

  const handleMouseLeave = () => {
    // Springs back to origin
    avatarX.set(0);
    avatarY.set(0);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

      const triggerAnimation = () => {
        el.classList.add('section-transition');
        const handleAnimationEnd = () => {
          el.classList.remove('section-transition');
          el.removeEventListener('animationend', handleAnimationEnd);
        };
        el.addEventListener('animationend', handleAnimationEnd);
      };

      if ('onscrollend' in window) {
        const handleScrollEnd = () => {
          triggerAnimation();
          window.removeEventListener('scrollend', handleScrollEnd);
        };
        window.addEventListener('scrollend', handleScrollEnd);
      } else {
        setTimeout(triggerAnimation, 600); // fallback timeout
      }
    }
  };

  const skillsList = [
    '🎨 Design',
    '💻 Web Dev',
    '🤖 AI & ML',
    '💬 Chatbot',
    '⚡ Automation',
    '🎬 Video',
    '📱 Social Media',
  ];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="home"
      className="relative min-h-screen grid grid-rows-[auto_1fr] overflow-hidden bg-[#0C0C0C]"
    >
      {/* Interactive dynamic background environment */}
      <InteractiveBackground theme="dark" />

      {/* Layer 3: Three Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        {/* Orb A: Behind avatar right side */}
        <div
          className="absolute right-[-100px] top-[50%] w-[600px] h-[600px] rounded-full blur-[60px] animate-orb-breathe-right opacity-60 md:opacity-100"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)',
          }}
        />
        {/* Orb B: Behind heading left side */}
        <div
          className="absolute left-[-60px] top-[40%] w-[400px] h-[400px] rounded-full blur-[80px] animate-orb-breathe-left opacity-60 md:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Orb C: Top center subtle */}
        <div
          className="absolute left-[50%] top-[-100px] w-[300px] h-[300px] rounded-full blur-[100px] animate-orb-breathe-top opacity-60 md:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Layer 5: Floating 3D Geometric Objects */}
      <div className="absolute inset-0 pointer-events-none z-3">
        {/* Object 1: Wireframe Cube */}
        <FadeIn delay={1.2} y={-30} duration={0.8} className="absolute top-[22%] left-[4%]">
          <div
            className="relative animate-cube-spin"
            style={{
              transformStyle: 'preserve-3d',
              width: 'var(--cube-size)',
              height: 'var(--cube-size)',
              '--cube-size': 'clamp(30px, 6vw, 90px)',
            } as React.CSSProperties}
          >
            {/* Front */}
            <div
              className="absolute inset-0 border-[1.5px] border-primary/50 bg-[#8B5CF6]/5"
              style={{ transform: 'translateZ(calc(var(--cube-size) / 2))' }}
            />
            {/* Back */}
            <div
              className="absolute inset-0 border-[1.5px] border-primary/50 bg-[#8B5CF6]/5"
              style={{ transform: 'translateZ(calc(var(--cube-size) / -2))' }}
            />
            {/* Left */}
            <div
              className="absolute inset-0 border-[1.5px] border-primary/50 bg-[#8B5CF6]/5"
              style={{ transform: 'rotateY(-90deg) translateZ(calc(var(--cube-size) / 2))' }}
            />
            {/* Right */}
            <div
              className="absolute inset-0 border-[1.5px] border-primary/50 bg-[#8B5CF6]/5"
              style={{ transform: 'rotateY(90deg) translateZ(calc(var(--cube-size) / 2))' }}
            />
            {/* Top */}
            <div
              className="absolute inset-0 border-[1.5px] border-primary/50 bg-[#8B5CF6]/5"
              style={{ transform: 'rotateX(90deg) translateZ(calc(var(--cube-size) / 2))' }}
            />
            {/* Bottom */}
            <div
              className="absolute inset-0 border-[1.5px] border-primary/50 bg-[#8B5CF6]/5"
              style={{ transform: 'rotateX(-90deg) translateZ(calc(var(--cube-size) / 2))' }}
            />
          </div>
        </FadeIn>

        {/* Floating glowing orb with subtle rotating ring */}
        <div
          className="absolute top-[8%] md:top-[10%] right-[3%] md:right-[16%] z-5 pointer-events-none w-[clamp(24px,4vw,56px)] h-[clamp(24px,4vw,56px)] animate-orb-float"
        >
          {/* Inner Sphere Div */}
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 32%, #EDE9FE 0%, #A78BFA 18%, #7C3AED 45%, #4C1D95 72%, #1E0A3C 100%)',
              boxShadow: '0 0 0 1px rgba(167,139,250,0.15), 0 0 18px rgba(139,92,246,0.7), 0 0 48px rgba(139,92,246,0.35), inset 0 0 12px rgba(167,139,250,0.2)',
            }}
          />
          {/* Glow Halo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full blur-[16px] -z-10 animate-halo-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
            }}
          />
          {/* Subtle Rotating Ring */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] rounded-full border border-white/25 pointer-events-none z-10 animate-orbit-tilt"
            style={{
              transformStyle: 'preserve-3d',
            }}
          />
        </div>

        {/* Object 3: Torus Ring */}
        <FadeIn delay={1.6} y={15} className="absolute bottom-[18%] left-[2%] md:left-[3%]">
          <div
            className="w-[clamp(32px,5vw,80px)] h-[clamp(32px,5vw,80px)] rounded-full border-[clamp(6px,1.1vw,12px)] border-transparent animate-torus-spin"
            style={{
              borderTopColor: 'rgba(245,158,11,0.6)',
              borderRightColor: 'rgba(245,158,11,0.3)',
              boxShadow: '0 0 16px rgba(245,158,11,0.3)',
            }}
          />
        </FadeIn>

        {/* Object 4: Diamond Crystal */}
        <FadeIn delay={1.8} y={10} className="absolute top-[35%] md:top-[38%] right-[2%] md:right-[3%]">
          <div
            className="w-[clamp(24px,4vw,48px)] h-[clamp(24px,4vw,48px)] rounded-lg border-[1.5px] border-cyan/45 animate-diamond-spin"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(34,211,238,0.05) 100%)',
              boxShadow: '0 0 24px rgba(34,211,238,0.2)',
            }}
          />
        </FadeIn>
      </div>

      {/* Layer 10: Navbar (Sticky on scroll > 60px) */}
      <FadeIn
        delay={0}
        y={-16}
        as="nav"
        className={`fixed top-0 left-0 w-full z-[50] transition-all duration-350 ${
          isSticky
            ? `backdrop-blur-[18px] py-4 ${isNavbarLight ? 'navbar-light-mode' : 'bg-[#0C0C0C]/82 border-b border-[#8B5CF6]/12'}`
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="global-container">
          <div className="flex justify-between items-center w-full px-6 md:px-12">
            {/* Logo RAJ */}
            <div className="font-extrabold uppercase tracking-wider text-white logo-text" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)' }}>
              <span
                className="text-[#EC4899] font-black mr-0.5"
                style={{ textShadow: '0 0 12px rgba(240,171,252,0.6)' }}
              >
                R
              </span>
              AJ
            </div>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-6 sm:gap-8 md:gap-12 items-center">
              {[
                { label: 'ABOUT', id: 'about' },
                { label: 'SERVICES', id: 'services' },
                { label: 'PROJECTS', id: 'projects' },
                { label: 'MY WORK', id: 'work', isPage: true },
              ].map((link, idx) => (
                <FadeIn key={link.label} delay={0.1 + idx * 0.06} y={-16} duration={0.55}>
                  <button
                    onClick={() => {
                      if (link.isPage) {
                        window.history.pushState(null, '', `${import.meta.env.BASE_URL}work`);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        handleScrollTo(link.id!);
                      }
                    }}
                    className={`nav-link-custom font-semibold uppercase tracking-widest text-[#D7E2EA]/85 hover:text-white bg-transparent border-none cursor-none ${activeSection === link.id ? 'active' : ''}`}
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
              className="fixed inset-0 bg-[#0C0C0C]/98 backdrop-blur-xl z-[55] flex flex-col justify-center items-center overflow-hidden"
            >
              <div className="flex flex-col gap-8 text-center items-center">
                {[
                  { label: 'ABOUT', id: 'about' },
                  { label: 'SERVICES', id: 'services' },
                  { label: 'PROJECTS', id: 'projects' },
                  { label: 'MY WORK', id: 'work', isPage: true },
                ].map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + idx * 0.08 }}
                  >
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (link.isPage) {
                          window.history.pushState(null, '', `${import.meta.env.BASE_URL}work`);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          handleScrollTo(link.id!);
                        }
                      }}
                      className={`text-2xl font-bold uppercase tracking-widest bg-transparent border-none cursor-none transition-colors duration-200 ${activeSection === link.id ? 'text-[#B600A8]' : 'text-[#D7E2EA]/85 hover:text-white'}`}
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

      {/* Main Content Layout Grid */}
      <div className="global-container flex-grow flex flex-col justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 z-20 pt-1 md:pt-4 px-5 pb-8 md:py-6 md:px-10 lg:px-16 mt-12 md:mt-20">
          {/* Left Column: Heading, Descriptor, Skill tags */}
          <div className="flex flex-col justify-center gap-0 pt-4 md:pt-0 pb-6 md:pb-0 px-0 z-10 order-2 md:order-1 w-full text-center md:text-left items-center md:items-start">
            
            {/* Heading wrapper with smooth radial glow (No boxy rect shadow) */}
            <div className="heading-glow-container mb-3 flex flex-col gap-2 relative">
              <div className="overflow-hidden py-1">
                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  data-text="HI,"
                  className="hero-heading font-black uppercase tracking-tight leading-[0.85]"
                  style={{ fontSize: 'clamp(3rem, 13vw, 10rem)' }}
                >
                  HI,
                </motion.h1>
              </div>
              
              <div className="overflow-hidden py-1 relative">
                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  data-text="I'M RAJ"
                  className="hero-heading font-black uppercase tracking-tight leading-[0.85]"
                  style={{ fontSize: 'clamp(3rem, 13vw, 10rem)' }}
                >
                  I&apos;M RAJ
                </motion.h1>
              </div>
            </div>

            {/* Typewriter Line */}
            <FadeIn delay={1.2} y={16} duration={0.5}>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 mt-2 mb-4 min-h-[3rem] md:min-h-[4rem]">
                <span
                  className="text-white font-extrabold uppercase tracking-wide inline-block whitespace-nowrap"
                  style={{
                    fontFamily: 'inherit',
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    lineHeight: '1.1',
                  }}
                >
                  {displayText}
                </span>
                <span
                  className="text-[#A78BFA] ml-[3px] inline-block animate-blink-cursor"
                  style={{
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    lineHeight: '1.1',
                    fontWeight: 300
                  }}
                >
                  |
                </span>
              </div>
            </FadeIn>

            {/* Tagline Description */}
            <FadeIn delay={1.4} y={20} duration={0.6}>
              <div className="flex items-start gap-4">
                <span className="w-1.5 h-16 bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] rounded-full flex-shrink-0 mt-1" />
                <p
                  className="text-[#D7E2EA]/75 font-normal uppercase tracking-wider leading-relaxed max-w-[420px]"
                  style={{
                    fontSize: 'clamp(0.9rem, 1.6vw, 1.35rem)',
                  }}
                >
                  a freelance creative technologist driven by crafting striking and unforgettable projects
                </p>
              </div>
            </FadeIn>

            {/* Floating Skill Tags Strip (t=0.85s staggered) */}
            <div className="flex flex-wrap gap-2.5 max-w-[440px] mt-4 mb-6 justify-center md:justify-start">
              {skillsList.map((skill, index) => {
                const delay = 0.85 + index * 0.055;
                return (
                  <motion.span
                    key={skill}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/28 rounded-full px-3.5 py-1.5 text-[10px] md:text-[11px] font-medium uppercase tracking-wider text-[#C4B5FD]/90 hover:bg-[#8B5CF6]/22 hover:border-[#8B5CF6]/55 hover:-translate-y-[2px] transition-all duration-200 cursor-none"
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </div>

          {/* Right Column: Bottom Anchored Avatar (t=0.9s) */}
          <div className="flex flex-col items-center justify-end order-1 md:order-2 w-full h-full min-h-[250px] md:min-h-0 pb-0 relative z-20 mt-[-14px] md:mt-0">
            
            <div className="flex-grow flex items-end justify-center w-full relative pt-2">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setAvatarHovered(true)}
                onMouseLeave={() => setAvatarHovered(false)}
                style={{
                  x: springX,
                  y: springY,
                  willChange: 'transform',
                }}
                className="relative flex justify-center items-end w-[clamp(140px,42vw,220px)] md:w-[clamp(255px,35vw,360px)] lg:w-[clamp(340px,36vw,480px)] aspect-[4/5]"
              >
                {/* Frame Border (behind avatar) */}
                <div
                  className="absolute inset-x-0 bottom-0 top-[12%] border border-[#8B5CF6]/25 rounded-[32px] z-0 pointer-events-none"
                />

                {/* Corner brackets for the frame */}
                <div className="absolute top-[12%] left-0 w-6 h-6 border-t-2 border-l-2 border-[#A78BFA]/60 rounded-tl-lg z-20 pointer-events-none" />
                <div className="absolute top-[12%] right-0 w-6 h-6 border-t-2 border-r-2 border-[#A78BFA]/60 rounded-tr-lg z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#A78BFA]/60 rounded-br-lg z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#A78BFA]/60 rounded-bl-lg z-20 pointer-events-none" />

                {/* Soft background plate behind the avatar, inside the frame */}
                <div
                  className="absolute inset-x-[1px] bottom-[1px] top-[12%] rounded-[31px] z-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(160deg, rgba(139, 92, 246, 0.08) 0%, rgba(109, 40, 217, 0.04) 50%, transparent 100%)',
                  }}
                />

                {/* Image Clipper Container (overflow-hidden at bottom/sides, open at top) */}
                <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-b-[32px] z-10 pointer-events-none">
                  {/* Avatar image with rounded transparent corners */}
                  <img
                    src={`${import.meta.env.BASE_URL}raj-portrait.png`}
                    alt="Portrait Raj"
                    className="absolute bottom-0 left-0 w-full h-auto object-contain select-none pointer-events-auto rounded-b-[32px] transition-transform duration-400 group-hover:scale-104 cursor-none relative z-10"
                    style={{
                      transform: avatarHovered ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.4s ease',
                    }}
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';
                    }}
                  />
                </div>

                {/* Ambient Breathing Glow behind portrait */}
                <div
                  className={`absolute w-[280px] sm:w-[350px] aspect-square rounded-full bg-[#8B5CF6]/20 blur-[80px] pointer-events-none -z-10 transition-all duration-500 ${
                    avatarHovered ? 'scale-110 opacity-100 shadow-[0_0_80px_rgba(139,92,246,0.4)]' : 'scale-100 opacity-70'
                  }`}
                />

                {/* Avatar Ground Shadow */}
                <div
                  className="absolute bottom-[-8px] left-1/2 w-[180px] sm:w-[280px] h-[32px] rounded-full pointer-events-none animate-shadow-breathe -z-20"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(139,92,246,0.35) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
