import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_ACCOUNTS } from '../../data/mockData';

export const BrandSection: React.FC = () => {
  return (
    <section id="brand" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-4">
            OUR WORK & PARTNERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Trusted by enterprise teams</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">Logos, brand treatments and product screenshots from recent engagements.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center"
        >
          {CLIENT_ACCOUNTS.map((c) => (
            <div key={c.id} className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-sm font-bold text-slate-700">{c.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
