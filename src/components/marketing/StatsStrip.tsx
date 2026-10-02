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
        return <ThumbsUp className="w-6 h-6 text-[#8B5CF6]" />;

      case 'Users':
        return <Users className="w-6 h-6 text-[#06B6D4]" />;

      case 'Award':
        return <Award className="w-6 h-6 text-[#007BFF]" />;

      default:
        return <CheckCircle2 className="w-6 h-6 text-[#007BFF]" />;
    }
  };

  const getIconBackground = (name: string) => {
    switch (name) {
      case 'CheckCircle2':
        return 'bg-blue-50/80 border-blue-100';

      case 'ThumbsUp':
        return 'bg-purple-50/80 border-purple-100';

      case 'Users':
        return 'bg-cyan-50/80 border-cyan-100';

      case 'Award':
        return 'bg-blue-50/80 border-blue-100';

      default:
        return 'bg-blue-50/80 border-blue-100';
    }
  };

  return (
    <section
      className=" relative z-20 py-6
        sm:py-7 bg-white  border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className=" grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4">
          {METRICS.map((metric, idx) => (
            <motion.div key={metric.id}
              initial={{ opacity: 0, y: 20,}}
              whileInView={{opacity: 1,y: 0,}}
              viewport={{once: true,amount: 0.2,}}
              transition={{duration: 0.55,delay: idx * 0.08,ease: [0.21, 0.47, 0.32, 0.98],}}
              className={`relative flex items-center gap-4
                px-5 lg:px-6 py-5 group
            
              `}>
              {/* Icon  
                  ${idx !== 0 ? 'lg:border-l lg:border-slate-200' : ''}
                ${idx === 2? 'sm:border-l sm:border-slate-200': ''}
                ${idx === 1  ? 'sm:border-l sm:border-slate-200 lg:border-l-0': ''}
              */}
              <div
                className={` relative flex-shrink-0
                  w-14 h-14 rounded-full
                  ${getIconBackground(metric.iconName)} flex items-center justify-center
                  transition-transform duration-300 group-hover:scale-105`}>

                {/* Soft glow */}
                <div className=" absolute inset-1 rounded-full
                    bg-white/50 blur-md"/>
                <div className="relative z-10">
                  {getIcon(metric.iconName)}
                </div>

              </div>

              {/* Content */}
              <div className="min-w-0">

                <div
                  className=" text-[15px] sm:text-base font-bold text-[#0F172A]
                    tracking-tight leading-tight">
                  {metric.label}
                </div>

                {metric.subtext && (
                  <div
                    className=" text-xs sm:text-[13px]
                      text-slate-500 mt-1 leading-relaxed">
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