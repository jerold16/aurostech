import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';
import {
  Play,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Server
} from 'lucide-react';
import bannerImg from '../../serviceImg/bannerImg.png'
interface HeroProps {
  onExploreServices: () => void;
  onWatchStory: () => void;
  onExploreSaas: () => void;
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onWatchStory,
  onExploreSaas,
  onOpenContact
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex 
      items-center bg-gradient-to-b from-slate-50 via-white to-slate-50/40"
    >
      {/* Luminous Background Ambient Highlights */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#007BFF]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#8B5CF6]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#06B6D4]/10 rounded-full blur-[120px]" />

        {/* Subtle geometric dot grid for light canvas */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(#007BFF 1.5px, transparent 1.5px), linear-gradient(to right, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '36px 36px, 72px 72px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 flex flex-col items-start z-10"
          >
            {/* Eyebrow badge from Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold tracking-wider text-[#007BFF] uppercase mb-5 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse" />
              BUILDING A SMARTER TOMORROW
            </motion.div>

            {/* Large Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] mb-6"
            >
              Smart Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#06B6D4] to-[#8B5CF6]">
                for a Digital World
              </span>
            </motion.h1>

            {/* Supporting Copy from Section 10 Draft */}
            <AnimatedParagraph
              text="We build practical, scalable software solutions that help businesses improve, grow and adapt in a changing digital world."
              className="text-lg text-slate-600 font-medium max-w-2xl mb-8"
              delay={0.35}
              wordDelay={0.02}
            />

            {/* Primary & Secondary Actions from Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <Button
                size="lg"
                withArrow
                onClick={onExploreServices}
                className="w-full sm:w-auto  rounded-full! text-sm group"
              >
                Explore Our Services
              </Button>

              <button
                onClick={onOpenContact || onWatchStory}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full! text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#007BFF]/50 transition-all shadow-xs cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#007BFF] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                </div>
                <span>Get in Touch</span>
              </button>
            </motion.div>

            {/* Micro-trust indicators based on values */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 text-xs font-medium text-slate-600">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Practical & Scalable</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-[#007BFF]" />
                <span>Outcome-Focused</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-[#8B5CF6]" />
                <span>Long-Term Support</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Technology Narrative Stage (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <img src={bannerImg} alt="" className=' w-full ' />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
