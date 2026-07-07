import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function ContactDrawer({ isOpen, onClose, prefilledService = '' }: ContactDrawerProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    details: '',
  });

  const services = [
    'Graphic Design',
    'Video Editing',
    'Web Development',
    'AI & Machine Learning',
    'WhatsApp Chatbots',
    'Workflow Automation',
    'Video Shooting',
    'Other / Consultation',
  ];

  // Sync prefilled service when drawer opens or service changes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      if (prefilledService) {
        setFormData((prev) => ({ ...prev, service: prefilledService }));
      } else {
        setFormData((prev) => ({ ...prev, service: '' }));
      }
    }
  }, [isOpen, prefilledService]);

  const handleNext = () => {
    if (step === 1 && (!formData.name.trim() || !formData.email.trim())) {
      alert('Please fill in your name and email address.');
      return;
    }
    if (step === 2 && !formData.service) {
      alert('Please select a service you are interested in.');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.details.trim()) {
      alert('Please provide some project details.');
      return;
    }
    setStep(4); // Success step
  };

  const progressPercentage = (step / 3) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-none"
          />

          {/* Drawer Wrapper */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[90%] sm:w-[500px] h-full bg-[#121212] border-l border-white/10 shadow-2xl z-[101] flex flex-col font-kanit text-[#D7E2EA] contact-drawer"
          >
            {/* Header */}
            <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[#171717]">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-white">
                  Let&apos;s Build Together
                </h3>
                <p className="text-xs text-[#D7E2EA]/50 mt-1">
                  Guru Nanak Enterprises Specialist Team
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-none bg-transparent border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            {step <= 3 && (
              <div className="w-full h-1 bg-white/5 relative">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            )}

            {/* Form Fields Area */}
            <div className="flex-grow p-6 overflow-y-auto flex flex-col justify-between">
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-4 text-left"
                    >
                      <div className="mb-2">
                        <span className="font-mono text-xs text-primary uppercase">Step 01 / 03</span>
                        <h4 className="text-lg font-medium text-white mt-1">Introduce Yourself</h4>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs uppercase text-[#D7E2EA]/50 tracking-wider">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-[#B600A8] transition-colors cursor-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs uppercase text-[#D7E2EA]/50 tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-[#B600A8] transition-colors cursor-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-4 text-left"
                    >
                      <div className="mb-2">
                        <span className="font-mono text-xs text-primary uppercase">Step 02 / 03</span>
                        <h4 className="text-lg font-medium text-white mt-1">Select Service & Contact</h4>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs uppercase text-[#D7E2EA]/50 tracking-wider">Required Service *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-[#B600A8] transition-colors cursor-none"
                        >
                          <option value="">Choose a capability...</option>
                          {services.map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs uppercase text-[#D7E2EA]/50 tracking-wider">WhatsApp Number (Optional)</label>
                        <input
                          type="text"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-[#B600A8] transition-colors cursor-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-4 text-left"
                    >
                      <div className="mb-2">
                        <span className="font-mono text-xs text-primary uppercase">Step 03 / 03</span>
                        <h4 className="text-lg font-medium text-white mt-1">Describe Project Scope</h4>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs uppercase text-[#D7E2EA]/50 tracking-wider">Project Details *</label>
                        <textarea
                          rows={6}
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Tell us about the project goals, budget, timelines..."
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-[#B600A8] transition-colors cursor-none resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-10 gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-3xl">
                        ✓
                      </div>
                      <h4 className="text-2xl font-bold uppercase tracking-wide text-white">Project Received!</h4>
                      <p className="text-sm text-[#D7E2EA]/60 max-w-[360px] leading-relaxed">
                        Thank you, <strong>{formData.name}</strong>. Raj or our team from Guru Nanak Enterprises will review details and email you shortly at <em>{formData.email}</em>.
                      </p>
                      <button
                        onClick={onClose}
                        className="mt-4 px-6 py-2.5 rounded-full border border-white/25 hover:border-white text-xs uppercase tracking-wider text-[#D7E2EA] transition-colors cursor-none bg-transparent"
                      >
                        Close Drawer
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Action buttons */}
              {step <= 3 && (
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/5">
                  {step > 1 ? (
                    <button
                      onClick={handleBack}
                      className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-text cursor-none bg-transparent"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      onClick={handleNext}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-xs font-bold uppercase tracking-widest text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-none border-none"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] text-xs font-bold uppercase tracking-widest text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-none border-none"
                    >
                      Submit Project 🚀
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
