import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import FadeIn from '../components/FadeIn';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollRevealHeading from '../components/ScrollRevealHeading';

export default function SkillsSection() {
  const skills = [
    { name: 'Graphic Design', pct: 95 },
    { name: 'Video Editing', pct: 90 },
    { name: 'React / Next.js', pct: 85 },
    { name: 'Node.js / Express', pct: 82 },
    { name: 'UI / UX Design', pct: 88 },
    { name: 'Python & ML', pct: 78 },
    { name: 'WhatsApp Chatbots', pct: 88 },
    { name: 'Automation / n8n', pct: 80 },
  ];

  const milestones = [
    { year: '2020', text: '90.2% in 12th Grade — Physics, Chemistry, Maths' },
    { year: '2022', text: 'Started B.Tech in Robotics & AI — Chandigarh Engineering College' },
    { year: '2023', text: 'GEMS Seminar at IIT Ropar — Robotics & AI research insights' },
    { year: '2023', text: 'Smart India Hackathon Participant — AI-based solutions' },
    { year: '2023', text: 'Built SmartVisionAI — Real-time YOLOv3/v4 surveillance system' },
    { year: '2024', text: '3× AICTE Internships — AI/Cloud (IBM), Generative AI, Python/WebApps' },
    { year: '2024', text: 'GFG Branding Volunteer + Internshala Campus Ambassador' },
    { year: '2024', text: 'Postman API Expert · Cisco Python Essentials · ISRO AIML Certificate' },
    { year: '2025', text: 'Founded Guru Nanak Enterprises — Full freelance studio launched' },
    { year: '2026', text: '120+ Projects delivered. Still building.' },
  ];

  return (
    <section
      id="skills"
      className="relative w-full px-6 md:px-10 py-20 md:py-28 overflow-hidden z-[1]"
      style={{ background: '#0C0C0C' }}
    >
      <InteractiveBackground theme="dark" />
      <div className="global-container relative z-10">
        {/* Section Label */}
        <div className="flex justify-start mb-6">
          <SectionLabel text="Tech Stack & Skills" />
        </div>

        {/* Heading */}
        <div className="mb-16 text-left">
          <ScrollRevealHeading
            text="Skills & Stack"
            className="font-clash font-bold leading-none tracking-tight uppercase heading-gradient text-left"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            align="left"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column: Skill Bars */}
          <div className="flex flex-col gap-8">
            <h3 className="font-clash font-semibold text-lg text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Expertise Level
            </h3>

            <div className="flex flex-col gap-6">
              {skills.map((skill, i) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-outfit font-medium text-text">{skill.name}</span>
                    <span className="font-mono text-primary font-semibold">{skill.pct}%</span>
                  </div>
                  <div className="w-full h-[3px] bg-surface2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-primary to-cyan rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="flex flex-col gap-8 relative">
            <h3 className="font-clash font-semibold text-lg text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Journey So Far
            </h3>

            <div className="relative pl-6 md:pl-8 border-l border-primary/20 flex flex-col gap-8 py-2">
              {/* Timeline Line gradient glow */}
              <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-cyan to-transparent pointer-events-none" />

              {milestones.map((item, idx) => (
                <FadeIn
                  key={idx}
                  delay={idx * 0.08}
                  y={20}
                  x={10}
                  className="relative flex flex-col gap-1 text-left group"
                >
                  {/* Circle dot on line */}
                  <div className="absolute left-[-31px] md:left-[-39px] top-[6px] w-[9px] h-[9px] rounded-full bg-primary border border-bg group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_var(--primary-glow)]" />

                  {/* Year Tag */}
                  <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                    {item.year}
                  </span>

                  {/* Text Description */}
                  <p className="font-outfit text-sm text-text-muted group-hover:text-text transition-colors duration-300 leading-relaxed">
                    {item.text}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
