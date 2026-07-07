import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollRevealHeading from '../components/ScrollRevealHeading';
import LazyImage from '../components/LazyImage';

interface ProjectItem {
  num: string;
  category: string;
  name: string;
  link: string;
  col1_1: string;
  col1_2: string;
  col2: string;
  aspectClass?: string;
  fit?: 'cover' | 'contain';
}

export default function ProjectsSection() {

  const projects: ProjectItem[] = [
    {
      num: '01',
      category: 'Graphic Design & Illustration',
      name: 'Visual Branding & Ad Campaigns',
      link: '#',
      col1_1: '/graphic-design-logo.jpg',
      col1_2: '/graphic-design-donut.jpg',
      col2: '/graphic-design-doodle-creative.png',
      aspectClass: 'aspect-[3/4]',
      fit: 'cover',
    },
    {
      num: '02',
      category: '3D Design',
      name: '3D Asset Design & Environments',
      link: '#',
      col1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1_2: '/3d-design-car.jpg',
      col2: '/3d-design-robot.jpg',
      aspectClass: 'aspect-[3/4]',
      fit: 'cover',
    },
    {
      num: '03',
      category: 'Video Editing',
      name: 'Dynamic Reels & Motion Graphics',
      link: '#',
      col1_1: '/video-editing-setup.jpg',
      col1_2: '/video-editing-laptop.jpg',
      col2: '/video-editing-timeline.jpg',
      aspectClass: 'aspect-[3/4]',
      fit: 'cover',
    },
  ];

  return (
    <section
      id="projects"
      className="text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-[1] pb-20 w-full"
      style={{ background: '#0C0C0C' }}
    >
      <InteractiveBackground theme="dark" />
      {/* PROJECTS section ambient orb */}
      <div
        className="absolute bottom-[20%] left-[-80px] w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, transparent 70%)',
        }}
      />
      <div className="global-container px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 relative z-10">
        <div className="overflow-hidden mb-12 sm:mb-16 md:mb-20 text-center">
          <ScrollRevealHeading
            text="Project"
            className="hero-heading font-black uppercase leading-none tracking-[0.08em] text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          />
        </div>

          <div id="projectsStack" className="space-y-[30vh] sm:space-y-[40vh] md:space-y-[45vh] max-w-5xl mx-auto pb-10">
            {projects.map((proj, idx) => (
              <ProjectCard key={proj.num} project={proj} index={idx} total={projects.length} />
            ))}
          </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: ProjectItem; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  const aspect = project.aspectClass || 'aspect-[4/3]';
  const fit = project.fit || 'cover';

  return (
    <div
      ref={cardRef}
      className="sticky w-full"
      style={{
        top: index * 28 + 120, // offset sticky position
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        className="project-sticky-card w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-8 shadow-2xl origin-top"
      >
        {/* Top Metadata Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 text-left">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 80px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#D7E2EA]/50 uppercase tracking-widest">
                {project.category}
              </span>
              <h3
                className="font-bold uppercase tracking-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(0.9rem, 2.5vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.link} label="Live Project" className="flex-shrink-0" />
        </div>

        {/* Image Grid Row — compact 3-col thumbnail on all sizes */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full">
          <LazyImage
            src={project.col1_1}
            alt="Project screen 1"
            className={`w-full rounded-[12px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] border border-white/5 ${aspect}`}
            fit={fit}
          />
          <LazyImage
            src={project.col1_2}
            alt="Project screen 2"
            className={`w-full rounded-[12px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] border border-white/5 ${aspect}`}
            fit={fit}
          />
          <LazyImage
            src={project.col2}
            alt="Project screen 3"
            className={`w-full rounded-[12px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] border border-white/5 ${aspect}`}
            fit={fit}
          />
        </div>
      </motion.div>
    </div>
  );
}
