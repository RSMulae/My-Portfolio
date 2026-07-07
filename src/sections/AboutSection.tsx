import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollRevealHeading from '../components/ScrollRevealHeading';
import CountUp from '../components/CountUp';

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  const rajText =
    "I'm Raj — a Robotics & AI Engineer and founder of Guru Nanak Enterprises. I specialize in designing and engineering custom digital solutions, including premium graphic design, responsive web development, AI chatbots, and automated workflows that streamline operations. By blending creative design with intelligent automation, I help businesses scale efficiently, automate repetitive tasks, and establish a powerful brand identity. Let's build something incredible together!";

  const stats = [
    { end: 120, label: "Projects Completed", suffix: "+" },
    { end: 3, label: "Years Experience", suffix: "+" },
    { end: 24, label: "Support Available", suffix: "/7" },
    { end: 50, label: "Happy Clients", suffix: "+" },
  ];

  const skills = [
    { name: "Graphic Design", level: 95 },
    { name: "Web Development", level: 85 },
    { name: "AI/ML", level: 78 },
    { name: "Motion Design", level: 88 },
  ];

  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 text-center z-[1]"
      style={{ background: '#0C0C0C', overflow: 'clip' }}
    >
      <InteractiveBackground theme="dark" />
      {/* Corner floating 3D objects */}
      <div className="absolute inset-0 pointer-events-none z-[6]">
        {/* ABOUT section ambient orb */}
        <div
          className="absolute top-[30%] right-[-100px] w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          }}
        />
        {/* Top-left: Moon icon */}
        <FadeIn
          delay={0.1}
          x={-20}
          y={0}
          duration={0.9}
          className="absolute top-[4%] left-[0%] sm:left-[2%] md:left-[4%] select-none pointer-events-none deco-3d"
        >
          <div className="moon-float">
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
              alt="moon"
              className="w-[70px] sm:w-[130px] md:w-[210px] h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>

        {/* Bottom-left: 3D object */}
        <FadeIn
          delay={0.25}
          x={-20}
          y={0}
          duration={0.9}
          className="absolute top-[50%] left-[0%] sm:left-[4%] md:left-[10%] select-none pointer-events-none deco-3d"
        >
          <div className="wireframe-float">
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
              alt="wire"
              className="w-[55px] sm:w-[100px] md:w-[180px] h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>

        {/* Top-right: Lego icon */}
        <FadeIn
          delay={0.15}
          x={20}
          y={0}
          duration={0.9}
          className="absolute top-[10%] right-[0%] sm:right-[2%] md:right-[4%] select-none pointer-events-none deco-3d"
        >
          <div className="lego-float">
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
              alt="lego"
              className="w-[70px] sm:w-[130px] md:w-[210px] h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>

        {/* Bottom-right: 3D group */}
        <FadeIn
          delay={0.3}
          x={20}
          y={0}
          duration={0.9}
          className="absolute bottom-[8%] right-[0%] sm:right-[4%] md:right-[10%] select-none pointer-events-none deco-3d"
        >
          <div className="ring-float">
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
              alt="ring"
              className="w-[75px] sm:w-[130px] md:w-[220px] h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
      </div>

      {/* About Content Block */}
      <div className="global-container relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center w-full">
          <ScrollRevealHeading
            text="About me"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          />

          <div className="h-6 sm:h-10 md:h-16 w-full" />

          <div className="w-full max-w-[560px] mx-auto text-left sm:text-center">
            <AnimatedText
              text={rajText}
              className="font-medium text-left sm:text-center leading-relaxed text-white"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
            />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mx-auto mt-8 sm:mt-12 md:mt-14 mb-6 sm:mb-8 md:mb-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-350 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-white">
                  <CountUp end={stat.end} />
                  <span className="text-[#B600A8] ml-0.5">{stat.suffix}</span>
                </span>
                <span className="text-[10px] md:text-xs text-[#D7E2EA]/50 uppercase tracking-widest mt-2 font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Skills List */}
          <div ref={skillsRef} className="w-full max-w-2xl mx-auto my-10 flex flex-col gap-6 text-left px-4">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs md:text-sm font-semibold uppercase tracking-wider text-white">
                  <span>{skill.name}</span>
                  <span className="text-[#C4B5FD]">
                    {skillsInView ? <CountUp end={skill.level} /> : 0}%
                  </span>
                </div>
                <div className="w-full h-[6px] bg-[#D7E2EA]/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="h-4 sm:h-6 md:h-10 w-full" />

          <FadeIn delay={0.2} y={30}>
            <ContactButton label="Let's build together" onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
