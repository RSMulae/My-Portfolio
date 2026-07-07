import { useState, useRef, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollRevealHeading from '../components/ScrollRevealHeading';

interface ServiceItem {
  num: string;
  title: string;
  subtitle?: string;
  desc?: string;
  statNumber?: string;
  statLabel?: string;
  statSubtitle?: string;
  deliverables?: string[];
  isPlaceholder?: boolean;
}

export default function ServicesSection({ onContactClick: _onContactClick }: { onContactClick?: (service?: string) => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const services: ServiceItem[] = [
    {
      num: '01',
      title: 'Graphic Design',
      subtitle: 'Visual identity that builds instant trust.',
      desc: 'I create memorable logos, scroll-stopping social posts, and complete brand kits that make your business look professional—so your customers remember you instantly.',
      statNumber: '50+',
      statLabel: 'Projects Made',
      statSubtitle: 'Logos, flyers, & brand guides',
      deliverables: ['Vector logos', 'Branding guides', 'Social graphics'],
    },
    {
      num: '02',
      title: 'Video Editing',
      subtitle: 'Turn raw footage into engaging stories.',
      desc: 'I edit reels, commercials, and corporate videos to keep viewers watching longer. I add the right music, pacing, and effects so your message cuts through the noise.',
      statNumber: '200+',
      statLabel: 'Videos Created',
      statSubtitle: 'For YouTube, Instagram, & TikTok',
      deliverables: ['Reels & Shorts', 'Commercial Ads', 'Color & Sound FX'],
    },
    {
      num: '03',
      title: 'Web Development',
      subtitle: 'Websites that convert visitors into customers.',
      desc: 'I build fast, mobile-friendly websites that load in a flash and rank well on Google. No tech jargon—just a sleek online home for your business that actually brings in leads.',
      statNumber: '15+',
      statLabel: 'Websites Deployed',
      statSubtitle: 'Fast, clean, & mobile-ready code',
      deliverables: ['React & Next.js', 'Responsive UI', 'SEO & CMS sync'],
    },
    {
      num: '04',
      title: 'Logo Designing',
      subtitle: 'Stand out with a premium custom mark.',
      desc: 'I create 2D and 3D custom premium logos for companies and businesses that capture your business identity and look stunning on everything from business cards to billboards.',
      statNumber: '30+',
      statLabel: 'Logos Crafted',
      statSubtitle: 'Custom vector and 3D marks',
      deliverables: ['2D Vector Logos', '3D Renders', 'Full Source Files'],
    },
    {
      num: '05',
      title: 'AI & Machine Learning',
      subtitle: 'Smart tech to automate your brainwork.',
      desc: 'I build custom AI chatbots, smart image scanners, and data tools that do the heavy lifting for you—so you can focus on growing your business without the manual work.',
      statNumber: '5+',
      statLabel: 'AI Models Trained',
      statSubtitle: 'Custom image scan & chat agents',
      deliverables: ['Custom neural nets', 'YOLO object scan', 'Data analytics'],
    },
    {
      num: '06',
      title: 'WhatsApp Chatbots',
      subtitle: 'An automated worker that never sleeps.',
      desc: 'I build WhatsApp chat assistants that answer customer questions, gather leads, and sync info directly with your system 24/7 so you never miss a sale.',
      statNumber: '5+',
      statLabel: 'Chatbots Developed',
      statSubtitle: 'Smart automated reply setups',
      deliverables: ['Automated chat flows', 'CRM integration', 'Lead gen system'],
    },
    {
      num: '07',
      title: 'Workflow Automation',
      subtitle: 'Connect your tools and save days of work.',
      desc: 'I link your email, spreadsheet, and databases together so they talk to each other automatically. Stop wasting hours copying and pasting data.',
      statNumber: '10+',
      statLabel: 'Workflows Connected',
      statSubtitle: 'Email, sheet, & CRM sync setups',
      deliverables: ['Zapier & Make integrations', 'API script triggers', 'Database sync'],
    },
    {
      num: '08',
      title: 'Video Shooting',
      subtitle: 'Professional camera capture that shines.',
      desc: 'I provide on-location camera shooting for corporate events, product showcases, and promo reels with high-end lighting and audio gear.',
      statNumber: '10+',
      statLabel: 'Projects Filmed',
      statSubtitle: 'Punjab & Chandigarh coverage',
      deliverables: ['Camera & lighting rigs', 'Corporate filming', 'Raw & master files'],
    },
    {
      num: '09',
      title: 'Google & Meta Ads',
      subtitle: 'High-converting campaigns that scale.',
      desc: 'I set up, manage, and optimize paid ad campaigns on Facebook, Instagram, and Google to bring high-quality leads and sales directly to your business with maximum return on ad spend.',
      statNumber: '2x+',
      statLabel: 'Ad ROI Improvement',
      statSubtitle: 'Targeted lead & sales campaigns',
      deliverables: ['Ad Creative Design', 'Audience Targeting', 'Weekly ROI Reports'],
    },
    {
      num: '10',
      title: 'Cloud Architectures',
      isPlaceholder: true,
    },
    {
      num: '11',
      title: 'SaaS Platforms',
      isPlaceholder: true,
    },
    {
      num: '12',
      title: 'Mobile Applications',
      isPlaceholder: true,
    },
  ];

  return (
    <section
      id="services"
      className="text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-12 sm:py-20 md:py-32 relative z-20 w-full overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Light Particle Environment */}
      <InteractiveBackground theme="light" />

      {/* Floating 3D Octahedron Crystal Shape in Background */}
      <OctahedronCrystal />

      {/* Ambient Light Orbs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full blur-[70px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.10) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[360px] h-[360px] rounded-full blur-[60px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 65%)',
        }}
      />

      <div className="global-container relative z-10">
        <div className="overflow-hidden mb-16 sm:mb-20 md:mb-28 text-center">
          <ScrollRevealHeading
            text="Services"
            className="font-black uppercase leading-none tracking-[0.08em] text-[#0C0C0C] text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          />
        </div>

        {/* Isometric perspective container grid */}
        <div 
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-x-8 lg:gap-y-12 px-2 sm:px-4"
          style={isMobile ? {} : {
            transform: 'perspective(1400px) rotateY(1deg) rotateX(3.5deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {services.map((item, idx) => {
            // Stagger rows only on desktop
            const staggerClass = idx % 2 === 0 ? 'md:-translate-y-5' : 'md:translate-y-5';
            
            return (
              <div key={item.num} className={`transition-transform duration-500 ease-out ${staggerClass}`}>
                <FadeIn delay={idx * 0.08} y={30}>
                  <ServiceCard item={item} isMobile={isMobile} />
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  item: ServiceItem;
  isMobile?: boolean;
}

function ServiceCard({ item, isMobile = false }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse x relative to card
    const y = e.clientY - rect.top; // mouse y relative to card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxRot = 12; // Maximum rotation in degrees
    const rotateX = ((centerY - y) / centerY) * maxRot;
    const rotateY = ((x - centerX) / centerX) * maxRot;

    // Set custom properties for local light refraction highlight
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    });
    setHovered(false);
  };

  if (item.isPlaceholder) {
    return (
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`crystal-service-card placeholder-card relative w-full rounded-[32px] flex flex-col justify-center items-center select-none overflow-hidden ${isMobile ? 'h-[180px] p-3' : 'h-[390px] p-6'}`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Sparkle background particles */}
        {hovered && <Sparkles />}

        {/* Plus / Pulsing icon in the center */}
        <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full border border-violet-500/30 flex items-center justify-center bg-violet-500/10 animate-pulse relative`}>
          <span className="text-xl md:text-3xl text-violet-600 font-extralight">+</span>
          <div className="absolute inset-0 rounded-full border border-violet-500/20 scale-125 animate-ping opacity-30" />
        </div>

        {/* Text badges */}
        <div className={`absolute ${isMobile ? 'top-3 left-3' : 'top-6 left-6'} text-[9px] font-mono uppercase tracking-widest text-[#0C0C0C]/40`}>
          Service {item.num}
        </div>
        <div className="mt-3 md:mt-6 text-center">
          <h3 className={`font-clash font-bold text-black/60 uppercase tracking-wide ${isMobile ? 'text-xs' : 'text-lg'}`}>
            {item.title}
          </h3>
          {!isMobile && (
            <p className="text-xs text-[#0C0C0C]/40 mt-1 font-mono tracking-widest uppercase">
              Coming Soon
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`crystal-service-card relative w-full cursor-pointer select-none overflow-hidden ${isMobile ? 'h-auto min-h-[200px] p-3 pb-12' : 'h-[390px] p-6'}`}
      style={{
        ...tiltStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className={`flex flex-col h-full justify-between ${isMobile ? 'pb-10' : 'pb-8'}`}>
        <div>
          {/* Top Left Badge */}
          <div className="text-[9px] font-mono uppercase tracking-widest text-[#0C0C0C]/40 mb-1 md:mb-3">
            Service {item.num}
          </div>

          {/* Title & Subtitle */}
          <h3 className={`font-clash font-extrabold uppercase tracking-tight leading-tight bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900 bg-clip-text text-transparent ${isMobile ? 'text-sm' : 'text-2xl'}`}>
            {item.title}
          </h3>
          <p className={`font-bold text-violet-600 uppercase tracking-wider leading-none ${isMobile ? 'text-[8px] mt-0.5' : 'text-[10px] mt-1'}`}>
            {item.subtitle}
          </p>

          {/* Simple Description — hidden on mobile to save space */}
          {!isMobile && (
            <p className="text-xs font-light text-[#0C0C0C]/70 leading-relaxed mt-4">
              {item.desc}
            </p>
          )}
        </div>

        {/* Refractive Badge */}
        <div className="stat-badge relative z-10 mt-2 md:mt-4 self-start">
          <div className="flex items-baseline gap-1 md:gap-2">
            <span className={`stat-number font-clash font-extrabold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent ${isMobile ? 'text-xl' : 'text-3xl md:text-4xl'}`}>
              {item.statNumber}
            </span>
            <span className="stat-label text-[9px] uppercase tracking-wider text-black/50 font-bold font-mono">
              {item.statLabel}
            </span>
          </div>
          {!isMobile && (
            <p className="stat-subtitle text-[9px] text-black/45 font-medium mt-1 leading-none">
              {item.statSubtitle}
            </p>
          )}
          <div className="stat-glow absolute -left-3 top-0 w-12 h-6 rounded-full bg-cyan-400/8 blur-xl pointer-events-none animate-pulse" />
        </div>
      </div>

      {/* Float up Detail Pane — always visible on mobile, hover-only on desktop */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-10 md:h-16 bg-gradient-to-r from-violet-950 to-indigo-950 text-white flex flex-col justify-center items-start px-3 md:px-6 transition-transform duration-350 ease-out z-20 border-t border-white/10"
        style={{
          transform: (isMobile || hovered) ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <span className="text-[7px] md:text-[8px] font-mono uppercase tracking-wider text-white/40 leading-none">Deliverables</span>
        <span className="text-[9px] md:text-xs font-bold text-cyan-400 mt-1 truncate w-full text-left">
          {item.deliverables?.join(' · ')}
        </span>
      </div>
    </div>
  );
}

function Sparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping opacity-60" />
      <div className="absolute top-[60%] left-[75%] w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-40" />
      <div className="absolute top-[80%] left-[40%] w-1 h-1 rounded-full bg-purple-400 animate-ping opacity-80" />
    </div>
  );
}

function OctahedronCrystal() {
  return (
    <div className="absolute top-[35%] right-[2%] md:right-[5%] pointer-events-none z-0 animate-orb-float opacity-20 md:opacity-30">
      <div 
        className="relative w-12 h-12 md:w-24 md:h-24 animate-cube-spin" 
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Top pyramid faces */}
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(0deg) rotateX(35deg) translateZ(12px)', width: '100%', height: '100%' }} />
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(90deg) rotateX(35deg) translateZ(12px)', width: '100%', height: '100%' }} />
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(180deg) rotateX(35deg) translateZ(12px)', width: '100%', height: '100%' }} />
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(270deg) rotateX(35deg) translateZ(12px)', width: '100%', height: '100%' }} />
        {/* Bottom pyramid faces */}
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(0deg) rotateX(-35deg) translateZ(12px)', width: '100%', height: '100%' }} />
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(90deg) rotateX(-35deg) translateZ(12px)', width: '100%', height: '100%' }} />
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(180deg) rotateX(-35deg) translateZ(12px)', width: '100%', height: '100%' }} />
        <div className="absolute inset-0 border border-violet-500/20 bg-violet-500/5" style={{ transform: 'rotateY(270deg) rotateX(-35deg) translateZ(12px)', width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}
