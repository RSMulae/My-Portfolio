

import InteractiveBackground from '../components/InteractiveBackground';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const handleScrollTo = (id: string) => {
    const base = import.meta.env.BASE_URL;
    const isWorkPath = window.location.pathname.endsWith('/work') || window.location.pathname.endsWith('/work/');
    if (isWorkPath) {
      window.history.pushState(null, '', base);
      window.dispatchEvent(new PopStateEvent('popstate'));
      
      setTimeout(() => {
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
      }, 120);
    } else {
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
    }
  };

  return (
    <footer
      id="contact"
      className="border-t border-white/5 py-12 md:py-16 relative z-[1] w-full"
      style={{ background: '#0C0C0C' }}
    >
      <InteractiveBackground theme="dark" />
      <div className="global-container px-5 sm:px-8 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/5 pb-10">
          <div>
            <div className="font-black text-xl uppercase tracking-wider text-white">
              <span className="text-[#B600A8]">R</span>AJ
            </div>
            <p className="text-xs md:text-sm text-[#D7E2EA]/50 uppercase tracking-widest max-w-[280px] mt-2">
              Freelance Creative Technology & AI Specialist in Partnership with Guru Nanak Enterprises.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm uppercase font-semibold text-left">
            <button
              onClick={() => handleScrollTo('about')}
              className="text-left text-[#D7E2EA] hover:text-[#B600A8] transition-colors cursor-none bg-transparent border-none font-semibold"
            >
              About me
            </button>
            <button
              onClick={() => handleScrollTo('services')}
              className="text-left text-[#D7E2EA] hover:text-[#B600A8] transition-colors cursor-none bg-transparent border-none font-semibold"
            >
              Capabilities
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className="text-left text-[#D7E2EA] hover:text-[#B600A8] transition-colors cursor-none bg-transparent border-none font-semibold"
            >
              Recent Work
            </button>
            <button
              onClick={onContactClick}
              className="text-left text-[#D7E2EA] hover:text-[#B600A8] transition-colors cursor-none bg-transparent border-none font-semibold"
            >
              Hire Raj
            </button>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/unfiltered_raj__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:bg-white/5 cursor-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rajdeepsinghmulae/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:bg-white/5 cursor-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/rajdeepsingh006"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:bg-white/5 cursor-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-[#D7E2EA]/40">
          <div>© 2026 Guru Nanak Enterprises. All Rights Reserved.</div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-none group bg-transparent border-none font-medium text-xs uppercase"
          >
            Back To Top{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:-translate-y-0.5"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
