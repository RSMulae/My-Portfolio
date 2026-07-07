import SectionLabel from '../components/SectionLabel';
import FadeIn from '../components/FadeIn';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollRevealHeading from '../components/ScrollRevealHeading';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      desc: 'Free 30-minute call to understand your vision, goals, and constraints. No jargon, no fluff — just absolute clarity.',
      time: 'Day 1',
    },
    {
      num: '02',
      title: 'Proposal & Scope',
      desc: 'Detailed scope document mapping out timelines, features, milestones, and a fully transparent quote delivered in 24 hours.',
      time: 'Day 2',
    },
    {
      num: '03',
      title: 'Kickoff & Design',
      desc: '50% advance locks your slot. We map out wireframes, visual guides, and system designs for client review.',
      time: 'Day 3 - 5',
    },
    {
      num: '04',
      title: 'Development & Build',
      desc: 'We write clean code, model 3D assets, script automation bots, or compile ML modules, keeping you updated weekly.',
      time: 'Week 1 - 2',
    },
    {
      num: '05',
      title: 'Testing & Iteration',
      desc: 'Rigorous staging reviews, debugging, edge-case validation, and feedback collection to polish the final deliverable.',
      time: 'Week 3',
    },
    {
      num: '06',
      title: 'Launch & Handover',
      desc: 'Production deployment, bot hosting transfers, asset handovers, and a tutorial walk-through call to guarantee smooth setup.',
      time: 'Day 21+',
    },
  ];

  const benefits = [
    '24/7 Slack / WhatsApp Updates',
    'Full IP & Code Ownership',
    'Post-Launch Technical Support',
    'High-Performance Implementations',
    'Detailed Loom Tutorials Provided',
  ];

  return (
    <section
      id="process"
      className="relative w-full border-t border-b border-white/5 px-6 md:px-10 py-24 md:py-32 overflow-hidden z-[1]"
      style={{ background: '#0C0C0C' }}
    >
      <InteractiveBackground theme="dark" />
      <div className="global-container relative z-10">
        {/* Section Label */}
        <div className="flex justify-start mb-6">
          <SectionLabel text="How It Works" />
        </div>

        {/* Heading */}
        <div className="mb-16 md:mb-24 text-left">
          <ScrollRevealHeading
            text="Process"
            className="font-clash font-bold leading-none tracking-tight uppercase heading-gradient text-left"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            align="left"
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Vertical Stepper */}
          <div className="lg:col-span-7 flex flex-col relative pl-6 sm:pl-8 border-l border-white/10 gap-10">
            {/* Stretched Vertical Line */}
            <div className="absolute left-[-1px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-cyan to-transparent pointer-events-none" />

            {steps.map((step, idx) => (
              <FadeIn
                key={step.num}
                delay={idx * 0.08}
                y={20}
                x={10}
                className="relative flex flex-col gap-1 text-left group"
              >
                {/* Step indicator dot */}
                <div className="absolute left-[-31px] sm:left-[-41px] top-[6px] w-[11px] h-[11px] rounded-full bg-bg border-2 border-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_var(--primary-glow)]" />

                {/* Eyebrow info */}
                <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold mb-1">
                  Step {step.num}
                </span>

                {/* Step Title */}
                <h3 className="font-clash font-bold text-xl sm:text-2xl text-text group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-outfit font-light text-sm sm:text-base text-text-muted mt-2 max-w-[480px] leading-relaxed">
                  {step.desc}
                </p>

                {/* Time Badge */}
                <div className="flex items-center gap-1.5 mt-3 px-3.5 py-1.5 border border-white/5 bg-surface2 rounded-full w-fit">
                  <span className="text-xs">⏱</span>
                  <span className="font-mono text-[10px] tracking-wide text-text-muted">{step.time}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right Column: Sticky Benefits Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeIn delay={0.2} y={30}>
              <div className="bg-surface2 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                {/* Decorative glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                <h3 className="font-clash font-bold text-lg sm:text-xl text-text uppercase tracking-wider mb-6 pb-4 border-b border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" /> The GNE Guarantee
                </h3>

                <ul className="flex flex-col gap-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-sm mt-0.5">✓</span>
                      <span className="font-outfit text-sm text-text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
