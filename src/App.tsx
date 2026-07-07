import { useState, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import MarqueeSection from './sections/MarqueeSection';
import ProjectsSection from './sections/ProjectsSection';
import MyWorkSection from './sections/MyWorkSection';
import MyWorkPreview from './sections/MyWorkPreview';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';
import CustomCursor from './components/CustomCursor';
import WorkNavbar from './components/WorkNavbar';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const openDrawer = (service: string = '') => {
    const baseUrl = "https://wa.me/917527829448";
    const text = service 
      ? `Hi Raj, I came across your portfolio and I am interested in your ${service} service. Let's discuss working together!`
      : "Hi Raj, I came across your portfolio and would love to discuss working together on a project!";
    const encodedText = encodeURIComponent(text);
    window.open(`${baseUrl}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const progressBar = document.querySelector('.scroll-progress-bar') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Normalize pathname based on Vite base URL
  const getRelativePath = (path: string) => {
    const base = import.meta.env.BASE_URL; // '/My-Portfolio/' or '/'
    if (base === '/') return path;
    if (path.startsWith(base)) {
      const relative = path.slice(base.length);
      return relative.startsWith('/') ? relative : '/' + relative;
    }
    return path;
  };

  const relativePath = getRelativePath(currentPath);

  // Simple client-side subpath routing
  if (relativePath !== '/' && relativePath !== '/index.html' && relativePath !== '/home' && relativePath !== '/work') {
    return <NotFound />;
  }

  // Work Subpage Router Render
  if (relativePath === '/work') {
    return (
      <div className="main-wrapper bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit">
        <CustomCursor />
        <div className="scroll-progress-bar" />
        <WorkNavbar onContactClick={() => openDrawer('')} />
        <MyWorkSection />
        <Footer onContactClick={() => openDrawer('')} />
        
        {/* WhatsApp Fixed Button */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group whatsapp-button">
          <div className="absolute inset-0 rounded-full w-14 h-14 bg-emerald-500/30 animate-ping" />
          <div className="absolute inset-0 rounded-full w-14 h-14 bg-emerald-500/10 animate-pulse" />
          <a
            href="https://wa.me/917527829448?text=Hi%20Raj%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20working%20together%20on%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 1.7.46 3.3 1.34 4.7l-.95 3.48 3.61-.95zm10.518-5.767c-.29-.145-1.72-.85-1.98-.946-.26-.096-.45-.145-.64.145-.19.29-.735.946-.9 1.14-.165.19-.33.21-.62.065-.29-.145-1.226-.45-2.336-1.44-.863-.77-1.446-1.72-1.615-2.01-.17-.29-.018-.448.127-.592.13-.13.29-.338.435-.507.145-.17.193-.29.29-.483.097-.19.048-.36-.024-.507-.07-.145-.64-1.544-.88-2.12-.23-.556-.47-.48-.64-.488H8.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39s1.02 2.78 1.16 2.97c.14.195 2 3.05 4.85 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.72-.7 1.96-1.38.25-.68.25-1.26.17-1.38-.07-.115-.26-.145-.55-.29z" />
            </svg>
          </a>
        </div>

        <BackToTop />
      </div>
    );
  }

  return (
    <div className="main-wrapper bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit">
      <CustomCursor />
      <div className="scroll-progress-bar" />
      {/* 
        Modified Section Flow:
        1. Hero
        2. About me
        3. Projects (Moved immediately after about me)
        4. Marquee
        5. Services (Moved to the bottom)
        6. My Work Preview (curated featured reference redirecting to /work)
        7. Footer
      */}
      <HeroSection onContactClick={() => openDrawer('')} />
      <AboutSection onContactClick={() => openDrawer('')} />
      <ProjectsSection />
      <MarqueeSection />
      <ServicesSection onContactClick={openDrawer} />
      <MyWorkPreview />
      <Footer onContactClick={() => openDrawer('')} />

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group whatsapp-button">
        <div className="absolute inset-0 rounded-full w-14 h-14 bg-emerald-500/30 animate-ping" />
        <div className="absolute inset-0 rounded-full w-14 h-14 bg-emerald-500/10 animate-pulse" />
        <a
          href="https://wa.me/917527829448?text=Hi%20Raj%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20working%20together%20on%20a%20project!"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 1.7.46 3.3 1.34 4.7l-.95 3.48 3.61-.95zm10.518-5.767c-.29-.145-1.72-.85-1.98-.946-.26-.096-.45-.145-.64.145-.19.29-.735.946-.9 1.14-.165.19-.33.21-.62.065-.29-.145-1.226-.45-2.336-1.44-.863-.77-1.446-1.72-1.615-2.01-.17-.29-.018-.448.127-.592.13-.13.29-.338.435-.507.145-.17.193-.29.29-.483.097-.19.048-.36-.024-.507-.07-.145-.64-1.544-.88-2.12-.23-.556-.47-.48-.64-.488H8.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39s1.02 2.78 1.16 2.97c.14.195 2 3.05 4.85 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.72-.7 1.96-1.38.25-.68.25-1.26.17-1.38-.07-.115-.26-.145-.55-.29z" />
          </svg>
        </a>
      </div>

      {/* Floating Back to Top with Scroll Progress Ring */}
      <BackToTop />
    </div>
  );
}
