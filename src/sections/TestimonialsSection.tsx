import SectionLabel from '../components/SectionLabel';
import GlowCard from '../components/GlowCard';
import FadeIn from '../components/FadeIn';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollRevealHeading from '../components/ScrollRevealHeading';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Harpreet Singh',
      role: 'Director, HS Logistics',
      quote: 'Raj built a customized WhatsApp chatbot and customer pipeline that completely automated our bookings. Guru Nanak Enterprises is our go-to partner for all things tech.',
      rating: 5,
    },
    {
      name: 'Sandeep Sharma',
      role: 'Founder, Chandigarh Agency',
      quote: 'The level of skill Raj brings in both UI design and automation is rare. He helped us automate client report generation, saving us 15 hours of manual work every week.',
      rating: 5,
    },
    {
      name: 'Gurpreet Kaur',
      role: 'Product Lead, EdTech Startup',
      quote: 'His work on the Plant Disease ML model was top-notch. Clean architecture, high-accuracy training, and a super intuitive web front-end. Absolute recommendation!',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      role: 'Marketing Head',
      quote: 'Excellent video editing and graphic work. He delivered our corporate product reel right on schedule with clean visual graphics and stellar color grading.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full px-6 md:px-10 py-24 md:py-32 overflow-hidden z-[1]"
      style={{ background: '#0C0C0C' }}
    >
      <InteractiveBackground theme="dark" />
      <div className="global-container relative z-10">
        {/* Section Label */}
        <div className="flex justify-center mb-6">
          <SectionLabel text="Feedback" />
        </div>

        {/* Heading */}
        <div className="mb-16 md:mb-24 text-center">
          <ScrollRevealHeading
            text="Testimonials"
            className="font-clash font-bold leading-none tracking-tight uppercase heading-gradient text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            align="center"
          />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((rev, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} y={30}>
              <GlowCard className="p-6 sm:p-8 flex flex-col justify-between gap-6 h-full text-left">
                {/* Quote Text */}
                <p className="font-outfit font-light text-sm sm:text-base text-text-muted leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                {/* Stars and User details */}
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-clash font-bold text-sm text-text uppercase tracking-wider">
                      {rev.name}
                    </span>
                    <span className="font-mono text-[10px] text-primary">
                      {rev.role}
                    </span>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-0.5 text-accent text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
