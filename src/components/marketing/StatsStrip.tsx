import React from 'react';
import { METRICS } from '../../data/mockData';
import { CheckCircle2, ThumbsUp, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const StatsStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#007BFF]" />;
      case 'ThumbsUp':
        return <ThumbsUp className="w-6 h-6 text-[#06B6D4]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#F59E0B]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#007BFF]" />;
    }
  };

  return (
    <section className="relative z-20 py-10 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-[#007BFF]/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                {getIcon(metric.iconName)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-700 mt-0.5">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <div className="text-xs text-slate-500 mt-0.5 hidden sm:block">
                    {metric.subtext}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
