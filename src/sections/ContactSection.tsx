import React, { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import MagnetButton from '../components/MagnetButton';
import InteractiveBackground from '../components/InteractiveBackground';
import ScrollRevealHeading from '../components/ScrollRevealHeading';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const servicesList = [
    'Graphic Design',
    'Video Editing',
    'Web Development',
    'AI / Machine Learning',
    'WhatsApp Chatbots',
    'Workflow Automation',
    'On-Location Video Shooting',
    'Other / Consultation',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setStatus('loading');

    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', whatsapp: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-white/5 px-6 md:px-10 py-24 md:py-36 overflow-hidden z-[1]"
      style={{ background: '#0C0C0C' }}
    >
      <InteractiveBackground theme="dark" />
      {/* CONTACT section ambient orb */}
      <div
        className="absolute top-[40%] right-[-60px] w-[380px] h-[380px] rounded-full blur-[80px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 240, 0.09) 0%, transparent 70%)',
        }}
      />
      <div className="global-container relative z-10">
        {/* Section Label */}
        <div className="flex justify-start mb-6">
          <SectionLabel text="Get In Touch" />
        </div>

        {/* Headline */}
        <div className="mb-16 md:mb-24 text-left">
          <ScrollRevealHeading
            text="Let's Build"
            className="font-clash font-bold leading-none tracking-tight uppercase heading-gradient text-left"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            align="left"
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <h3 className="font-clash font-bold text-xl sm:text-2xl text-text uppercase tracking-wider mb-4">
                Let&apos;s start a project
              </h3>
              <p className="font-outfit font-light text-sm sm:text-base text-text-muted leading-relaxed max-w-[380px]">
                Have an idea, need a custom automation workflow, or want to outsource design assets? Drop a message.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Email</span>
                <a
                  href="mailto:contact@gurunanakenterprises.com"
                  className="font-clash text-lg text-text hover:text-primary transition-colors cursor-none"
                >
                  contact@gurunanakenterprises.com
                </a>
              </div>

              {/* WhatsApp / Call */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">WhatsApp / Call</span>
                <a
                  href="https://wa.me/917527829448?text=Hi%20Raj%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20working%20together%20on%20a%20project!"
                  target="_blank"
                  rel="noreferrer"
                  className="font-clash text-lg text-text hover:text-primary transition-colors cursor-none"
                >
                  Chat with Raj
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Studio Location</span>
                <span className="font-clash text-lg text-text">Chandigarh / Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full bg-bg/50 border border-white/5 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-surface2 border border-white/5 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors cursor-none"
                    placeholder="e.g. Harpreet Singh"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-surface2 border border-white/5 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors cursor-none"
                    placeholder="e.g. harpreet@gmail.com"
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full bg-surface2 border border-white/5 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors cursor-none"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    Required Service
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-surface2 border border-white/5 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors cursor-none appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  Project Details <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-surface2 border border-white/5 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors cursor-none resize-none"
                  placeholder="Describe your design needs, web projects, or automation bottlenecks..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-2">
                <MagnetButton strength={3.5} padding={80}>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-10 py-3.5 sm:px-12 sm:py-4 rounded-full font-clash text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-primary-dim via-primary to-accent shadow-[0_0_20px_var(--primary-glow)] hover:shadow-[0_0_30px_var(--primary-glow)] disabled:opacity-50 transition-all duration-300 cursor-none border-none"
                  >
                    {status === 'loading'
                      ? 'Sending...'
                      : status === 'success'
                      ? 'Sent successfully!'
                      : 'Send Message →'}
                  </button>
                </MagnetButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
