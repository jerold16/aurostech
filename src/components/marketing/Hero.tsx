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
      className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50/40"
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
            className="lg:col-span-7 flex flex-col items-start z-10"
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
              BUILDING TOMORROW
            </motion.div>

            {/* Large Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#0F172A] tracking-tight leading-[1.12] mb-6"
            >
              Smart Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#06B6D4] to-[#8B5CF6]">
                for a Digital World
              </span>
            </motion.h1>

            {/* Supporting Copy from Section 10 Draft */}
            <AnimatedParagraph
              text="We build practical, scalable software solutions that help businesses improve, grow and adapt in a changing digital world."
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8"
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
                className="w-full sm:w-auto text-base group"
              >
                Explore Our Services
              </Button>

              <button
                onClick={onOpenContact || onWatchStory}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#007BFF]/50 transition-all shadow-xs cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#007BFF] group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
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
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/15 to-[#8B5CF6]/15 rounded-3xl blur-2xl transform scale-95" />

            {/* Main Interactive Technology Narrative Card */}
            <div className="relative w-full max-w-lg bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-500 ml-2">aureos.kernel.sys</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* High-Contrast Interactive Visual Topology Sandbox */}
              <div className="relative h-48 w-full rounded-xl bg-[#0B1528] border border-slate-800 flex items-center justify-center overflow-hidden mb-5 group shadow-inner">
                {/* SVG Digital Network & Orbit Ring */}
                <svg className="w-full h-full" viewBox="0 0 360 200" fill="none">
                  {/* Orbit circles */}
                  <circle cx="180" cy="100" r="72" stroke="#007BFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <circle cx="180" cy="100" r="46" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.6" />
                  <circle cx="180" cy="100" r="24" stroke="#06B6D4" strokeWidth="1.5" opacity="0.8" />

                  {/* Connected Node Lines */}
                  <line x1="60" y1="50" x2="180" y2="100" stroke="#007BFF" strokeWidth="1" opacity="0.4" />
                  <line x1="300" y1="50" x2="180" y2="100" stroke="#8B5CF6" strokeWidth="1" opacity="0.4" />
                  <line x1="120" y1="160" x2="180" y2="100" stroke="#06B6D4" strokeWidth="1" opacity="0.5" />
                  <line x1="250" y1="150" x2="180" y2="100" stroke="#007BFF" strokeWidth="1" opacity="0.5" />

                  {/* Nodes */}
                  <circle cx="60" cy="50" r="4.5" fill="#007BFF" />
                  <circle cx="300" cy="50" r="4.5" fill="#8B5CF6" />
                  <circle cx="120" cy="160" r="4" fill="#06B6D4" />
                  <circle cx="250" cy="150" r="4" fill="#10B981" />
                  <circle cx="180" cy="100" r="9" fill="#06B6D4" />
                  <circle cx="180" cy="100" r="16" stroke="#007BFF" strokeWidth="1.5" opacity="0.7" />
                </svg>

                {/* Overlay Floating Central Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-[#06152F]/90 border border-[#007BFF]/60 text-xs font-bold text-white shadow-lg flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
                    AUREOS NEURAL ENGINE
                  </div>
                  <span className="text-[10px] text-cyan-300 mt-1 font-mono">1.2M events/sec • latency 1.4ms</span>
                </div>
              </div>

              {/* Telemetry Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-slate-500 font-medium">Distributed Nodes</span>
                    <Server className="w-3.5 h-3.5 text-[#007BFF]" />
                  </div>
                  <div className="text-base font-bold text-[#0F172A]">48 Clusters</div>
                  <div className="text-[10px] text-emerald-600 font-mono mt-0.5 font-semibold">● 100% Operational</div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-slate-500 font-medium">Active Pipelines</span>
                    <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  </div>
                  <div className="text-base font-bold text-[#0F172A]">340 Pipelines</div>
                  <div className="text-[10px] text-[#007BFF] font-mono mt-0.5 font-semibold">+18% this month</div>
                </div>
              </div>

              {/* Direct SaaS Launch Interactive Bar */}
              <div
                onClick={onExploreSaas}
                className="group/cta bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border border-blue-200/80 rounded-xl p-3 flex items-center justify-between cursor-pointer transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-[#0F172A]">
                    Live Enterprise Platform Active
                  </span>
                </div>
                <div className="inline-flex items-center text-xs font-bold text-[#007BFF] group-hover/cta:translate-x-1 transition-transform">
                  Launch Demo <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
