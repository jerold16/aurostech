import React from 'react';
import { TRUST_ITEMS } from '../../data/mockData';
import { Target, Users, Layers, TrendingUp, MessageSquare, Headphones, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';

export const TrustSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-6 h-6 text-[#007BFF]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#06B6D4]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#8B5CF6]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#10B981]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#007BFF]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#F59E0B]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#007BFF]" />;
    }
  };

  return (
    <section id="trust" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-4">
            WHY CHOOSE AUREOSTECH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Why Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#8B5CF6]">
              AureosTech
            </span>
          </h2>
          <AnimatedParagraph
            text="Our approach combines software development, modern technologies and business understanding to make digital solutions practical, reliable, and outcome-focused."
            className="mt-3 text-base text-slate-600 max-w-2xl mx-auto"
            delay={0.25}
            wordDelay={0.02}
          />
        </motion.div>

        {/* 6 item grid in 3 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: 0.08 + idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="bg-[#F8FAFC] border border-slate-200 hover:border-[#007BFF]/50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-5">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono font-semibold text-[#007BFF]">
                // CORE PRINCIPLE
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

