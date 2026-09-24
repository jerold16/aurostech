import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { TestimonialItem } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';
import { Star, Quote, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-4">
            CLIENT FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Partnering for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#06B6D4] to-[#8B5CF6]">
              Real Business Outcomes
            </span>
          </h2>
          <AnimatedParagraph
            text="How we collaborate with businesses to understand requirements, turn challenges into practical digital solutions, and provide dependable support."
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
            delay={0.25}
            wordDelay={0.02}
          />
        </motion.div>

        {/* Featured Testimonial Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-sm mb-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 8 cols: Quote & Author info */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-600 ml-2 font-mono">5.0 / 5.0 VERIFIED REVIEW</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl text-[#0F172A] font-medium leading-relaxed mb-8"
                >
                  "{current.quote}"
                </motion.blockquote>
              </AnimatePresence>

              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-lg font-bold text-[#0F172A]">{current.name}</div>
                  <div className="text-sm font-medium text-slate-600">{current.role}</div>
                  <div className="text-xs font-semibold text-[#007BFF]">{current.company}</div>
                </div>
              </div>
            </div>

            {/* Right 4 cols: Project specs & metrics card */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  PROJECT SPECIFICATIONS
                </div>
                <div className="text-base font-bold text-[#0F172A] mb-4">
                  {current.projectDelivered}
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 font-medium mb-4">
                  <div className="font-bold text-[#007BFF] mb-1">Domain & Sector</div>
                  <div>{current.industry}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-700 font-medium">
                  <div className="font-bold text-emerald-700 mb-1">Delivered Impact</div>
                  <div className="font-mono font-bold text-emerald-800 text-sm">
                    {current.metricHighlight}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200">
                <span className="text-xs font-mono font-semibold text-slate-500">
                  {activeIndex + 1} of {TESTIMONIALS.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-[#007BFF] transition-colors shadow-xs cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-[#007BFF] transition-colors shadow-xs cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Multi-card Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={() => setActiveIndex(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                activeIndex === idx
                  ? 'bg-blue-50/50 border-[#007BFF] shadow-md ring-1 ring-[#007BFF]'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 line-clamp-4 leading-relaxed mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-[#0F172A] truncate">{t.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{t.company.split('(')[0]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
