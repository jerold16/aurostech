import React, { useState } from 'react';
import { SERVICES } from '../../data/mockData';
import { ServiceItem } from '../../types';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';
import {
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  Globe,
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestProposal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestProposal
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getServiceVisual = (id: string) => {
    switch (id) {
      case 'custom-software':
        return {
          icon: <Code2 className="w-6 h-6 text-[#007BFF]" />,
          iconBg: 'bg-blue-50 text-[#007BFF] border-blue-200/80',
          accentColor: '#007BFF',
          badge: 'High Throughput',
          glow: 'from-blue-500/10 to-transparent'
        };
      case 'mobile-app':
        return {
          icon: <Smartphone className="w-6 h-6 text-[#06B6D4]" />,
          iconBg: 'bg-cyan-50 text-[#06B6D4] border-cyan-200/80',
          accentColor: '#06B6D4',
          badge: 'iOS & Android',
          glow: 'from-cyan-500/10 to-transparent'
        };
      case 'cloud-solutions':
        return {
          icon: <Cloud className="w-6 h-6 text-[#007BFF]" />,
          iconBg: 'bg-blue-50 text-[#007BFF] border-blue-200/80',
          accentColor: '#007BFF',
          badge: 'Multi-Cloud & K8s',
          glow: 'from-blue-600/10 to-transparent'
        };
      case 'ai-automation':
        return {
          icon: <Cpu className="w-6 h-6 text-[#8B5CF6]" />,
          iconBg: 'bg-purple-50 text-[#8B5CF6] border-purple-200/80',
          accentColor: '#8B5CF6',
          badge: 'Agentic AI / LLMs',
          glow: 'from-purple-500/10 to-transparent'
        };
      case 'web-development':
        return {
          icon: <Globe className="w-6 h-6 text-[#007BFF]" />,
          iconBg: 'bg-blue-50 text-[#007BFF] border-blue-200/80',
          accentColor: '#007BFF',
          badge: 'Next.js & React',
          glow: 'from-blue-400/10 to-transparent'
        };
      case 'it-consulting':
        return {
          icon: <Compass className="w-6 h-6 text-[#06B6D4]" />,
          iconBg: 'bg-cyan-50 text-[#06B6D4] border-cyan-200/80',
          accentColor: '#06B6D4',
          badge: 'SOC 2 & CTO Advisory',
          glow: 'from-cyan-600/10 to-transparent'
        };
      default:
        return {
          icon: <Code2 className="w-6 h-6 text-[#007BFF]" />,
          iconBg: 'bg-blue-50 text-[#007BFF] border-blue-200/80',
          accentColor: '#007BFF',
          badge: 'Enterprise Core',
          glow: 'from-blue-500/10 to-transparent'
        };
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Reference Sheet 2 & 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-4">
              OUR SERVICES
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Practical, Scalable Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#06B6D4] to-[#8B5CF6]">
                Solutions for Your Business
              </span>
            </h2>

            <AnimatedParagraph
              text="From strategy to development and ongoing support, AureosTech helps businesses turn technology into a practical advantage. Our services cover custom software, web and mobile development, cloud solutions, AI and automation, and IT consulting."
              className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl"
              delay={0.25}
              wordDelay={0.02}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <Button
              size="md"
              withArrow
              onClick={onRequestProposal}
              className="w-full sm:w-auto text-sm"
            >
              Request Custom Proposal
            </Button>
          </motion.div>
        </div>

        {/* 6 Grid Service Cards matching Reference 3 (Services Page) & Reference 1 Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => {
            const visual = getServiceVisual(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectService(service)}
                className="group relative bg-white border border-slate-200 hover:border-[#007BFF]/60 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-xl hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Luminous hover top-edge glow */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[${visual.accentColor}] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${visual.iconBg} border flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                      {visual.icon}
                    </div>

                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                      {visual.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#007BFF] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Capabilities Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.capabilities.slice(0, 3).map((cap, capIdx) => (
                      <motion.span
                        key={capIdx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.15 + capIdx * 0.05 }}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 font-medium"
                      >
                        {cap}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Trigger matching reference Learn More -> */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#007BFF] group-hover:text-[#0064D6]">
                  <span className="tracking-wide">Learn More</span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
