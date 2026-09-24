import React from 'react';
import { Button } from '../ui/Button';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#007BFF]/10 to-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#007BFF]" />
          BUILDING TOMORROW
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-6"
        >
          Let’s Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#06B6D4] to-[#8B5CF6]">
            Great Together
          </span>
        </motion.h2>

        <AnimatedParagraph
          text="Have an idea, a business challenge or a technology project in mind? Let’s discuss what you need and explore how the right technology solution can help your business move forward."
          className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          delay={0.25}
          wordDelay={0.02}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            withArrow
            onClick={onOpenContact}
            className="text-base px-8 py-4 group"
          >
            Get in Touch
          </Button>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-slate-600">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Practical & Scalable Approach</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Clear & Transparent Communication</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Long-Term Support & Evolution</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
