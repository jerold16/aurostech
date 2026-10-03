import React, { useState } from 'react';
import { INDUSTRIES } from '../../data/mockData';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';
import {
  Activity,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Factory,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface IndustrySectionProps {
  onContactIndustry: (industryTitle: string) => void;
}

export const IndustrySection: React.FC<IndustrySectionProps> = ({
  onContactIndustry
}) => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);
  const selectedIndustry = INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#10B981]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#007BFF]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#06B6D4]" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Activity className="w-5 h-5 text-[#007BFF]" />;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-white relative border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

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
            INDUSTRY SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Digital Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#8B5CF6]">
              Key Industry Sectors
            </span>
          </h2>
          <AnimatedParagraph
            text="We bring together technical expertise, creative thinking and a strong understanding of business requirements to build solutions that are designed for today and ready for tomorrow."
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
            delay={0.25}
            wordDelay={0.02}
          />
        </motion.div>

        {/* Tab Selector Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {INDUSTRIES.map((ind) => {
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-[#007BFF] border-2 border-[#007BFF] shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:text-[#0F172A] border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {getIcon(ind.iconName)}
                <span>{ind.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Industry Detail Card with bottom entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E6F0FF] to-[#F0F7FF] border border-slate-100 flex items-center justify-center shadow-sm">
                  {getIcon(selectedIndustry.iconName)}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    {selectedIndustry.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#007BFF] mt-2">
                    {selectedIndustry.tagline}
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {selectedIndustry.description}
              </p>

              {/* Core capabilities list as pill chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {selectedIndustry.features.map((feat, idx) => (
                  <motion.div
                    key={`${selectedIndustry.id}-feat-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="flex items-center gap-3 text-sm font-medium text-slate-800 bg-white rounded-full px-4 py-3 border border-slate-100 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#EFF8FF] flex items-center justify-center text-[#007BFF]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <button
                  onClick={() => onContactIndustry(selectedIndustry.title)}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white text-base font-semibold bg-gradient-to-r from-[#007BFF] to-[#8B5CF6] shadow-[0_10px_30px_rgba(99,102,241,0.15)]"
                >
                  <span>Consult with {selectedIndustry.title.split(' ')[0]} Lead</span>
                  <ArrowRight className="w-4 h-4 opacity-90" />
                </button>
              </div>
            </div>

            {/* Right Metrics & Topology Column (5 cols) */}
            <div className="lg:col-span-5 p-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 h-full flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">DOMAIN METRICS & COMPLIANCE</span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  {selectedIndustry.metrics.map((m, idx) => (
                    <motion.div
                      key={`${selectedIndustry.id}-metric-${idx}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.36, delay: 0.08 + idx * 0.06 }}
                      className="p-4 rounded-xl bg-white border border-slate-100 flex items-center justify-between shadow-sm"
                    >
                      <span className="text-sm font-semibold text-slate-700">{m.label}</span>
                      <span className="text-xl font-extrabold text-[#007BFF] font-mono">
                        {m.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 text-xs font-medium text-slate-700 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
                  <span>Audited for international privacy standards & low-latency execution.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
