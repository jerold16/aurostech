import React from 'react';
import { TRUSTED_BRANDS } from '../../data/mockData';
import { motion } from 'motion/react';

export const ClientStrip: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-6"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            TRUSTED BY INNOVATIVE BRANDS
          </span>
        </motion.div>

        <div className="flex items-center justify-between sm:justify-center gap-6 sm:gap-10 lg:gap-14 overflow-x-auto py-2 no-scrollbar">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="flex items-center gap-2 flex-shrink-0 cursor-default grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              {brand.name === 'Microsoft' && (
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4 mr-1">
                  <div className="bg-[#F25022] rounded-xs" />
                  <div className="bg-[#7FBA00] rounded-xs" />
                  <div className="bg-[#00A4EF] rounded-xs" />
                  <div className="bg-[#FFB900] rounded-xs" />
                </div>
              )}
              {brand.name === 'AWS' && (
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">
                  aws
                </span>
              )}
              {brand.name === 'TATA' && (
                <span className="w-5 h-5 rounded-full border border-blue-900 text-[10px] font-black flex items-center justify-center text-blue-900 mr-0.5">
                  T
                </span>
              )}
              {brand.name === 'wipro' && (
                <span className="w-4 h-4 rounded-full border-2 border-purple-600 flex items-center justify-center mr-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
              )}
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-700">
                {brand.logoText}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
