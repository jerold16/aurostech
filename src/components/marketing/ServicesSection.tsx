import React, { useState } from 'react';
import { SERVICES } from '../../data/mockData';
import { ServiceItem } from '../../types';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';

import customerSoftware from '../../serviceImg/customsoftware.png';
import webDevelopmentImg from '../../serviceImg/webDevelopment.png';
import appDevelopment from '../../serviceImg/appDevelopment.png';
import cloudSolutionsImg from '../../serviceImg/cloudComputing.png';
import aiAutomation from '../../serviceImg/AIautomation.png';
import itconsultingImg from '../../serviceImg/Itconsulting.png';

import {
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  Globe,
  Compass,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestProposal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestProposal,
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
          glow: 'from-blue-500/10 to-transparent',
          fontcolor: 'text-blue-400',
          firstName: 'Software',
          lastName: 'Development',
          img: customerSoftware,
          css1: 'bg-blue-200/20',
          bg2: " bg-blue-200/40 border-blue-200/70 ",
          glossColor: 'rgba(96, 165, 250, 0.11)',
        };

      case 'mobile-app':
        return {
          icon: <Smartphone className="w-6 h-6 text-[#06B6D4]" />,
          iconBg: 'bg-cyan-50 text-[#06B6D4] border-cyan-200/80',
          accentColor: '#06B6D4',
          badge: 'iOS & Android',
          glow: 'from-cyan-500/10 to-transparent',
          fontcolor: 'text-teal-400',
          firstName: 'App',
          lastName: 'Development',
          img: appDevelopment,
          css1: 'bg-teal-100/20',
          bg2: " bg-teal-200/40 border-teal-200/70 ",

          glossColor: 'rgba(34, 211, 238, 0.10)',
        };

      case 'cloud-solutions':
        return {
          icon: <Cloud className="w-6 h-6 text-[#007BFF]" />,
          iconBg: 'bg-blue-50 text-[#007BFF] border-blue-200/80',
          accentColor: '#007BFF',
          badge: 'Multi-Cloud & K8s',
          glow: 'from-blue-600/10 to-transparent',
          fontcolor: 'text-violet-400',
          firstName: 'Cloud',
          lastName: 'Solutions',
          img: cloudSolutionsImg,
          css1: 'bg-violet-100/40',
          bg2: " bg-violet-200/40 border-violet-200/70 ",

          glossColor: 'rgba(96, 165, 250, 0.10)',
        };

      case 'ai-automation':
        return {
          icon: <Cpu className="w-6 h-6 text-[#8B5CF6]" />,
          iconBg: 'bg-purple-50 text-[#8B5CF6] border-purple-200/80',
          accentColor: '#8B5CF6',
          badge: 'Agentic AI / LLMs',
          glow: 'from-purple-500/10 to-transparent',
          fontcolor: 'text-yellow-400',
          firstName: 'AI',
          lastName: 'Automation',
          img: aiAutomation,
          bg2: " bg-yellow-200/40 border-yellow-200/70 ",

          css1: 'bg-yellow-200/20',
          glossColor: 'rgba(192, 132, 252, 0.11)',
        };

      case 'web-development':
        return {
          icon: <Globe className="w-6 h-6 text-[#007BFF]" />,
          iconBg: 'bg-blue-50 text-[#007BFF] border-blue-200/80',
          accentColor: '#007BFF',
          badge: 'Next.js & React',
          glow: 'from-blue-400/10 to-transparent',
          fontcolor: 'text-violet-400',
          firstName: 'Web',
          lastName: 'Development',
          img: webDevelopmentImg,
          css1: 'bg-violet-200/30',
          bg2: " bg-violet-200/40 border-violet-200/70 ",

          glossColor: 'rgba(96, 165, 250, 0.10)',
        };

      case 'it-consulting':
        return {
          icon: <Compass className="w-6 h-6 text-[#06B6D4]" />,
          iconBg: 'bg-cyan-50 text-[#06B6D4] border-cyan-200/80',
          accentColor: '#06B6D4',
          badge: 'SOC 2 & CTO Advisory',
          glow: 'from-cyan-600/10 to-transparent',
          fontcolor: 'text-blue-400',
          firstName: 'IT',
          lastName: 'Consulting',
          img: itconsultingImg,
          bg2: " bg-blue-200/40 border-blue-200/70 ",

          css1: 'bg-blue-200/30',
          glossColor: 'rgba(34, 211, 238, 0.10)',
        };

      default:
        return {
          icon: <Code2 className="w-6 h-6 text-[#007BFF]" />,
          iconBg: 'bg-blue-50 text-[#007BFF] border-blue-200/80',
          accentColor: '#007BFF',
          badge: 'Enterprise Core',
          glow: 'from-blue-500/10 to-transparent',
          fontcolor: 'text-blue-400',
          firstName: '',
          lastName: '',
          img: '',
          css1: '',
          glossColor: 'rgba(96, 165, 250, 0.10)',
        };
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
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
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {SERVICES.map((service, idx) => {
            const visual = getServiceVisual(service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectService(service)}

                className={`
                  group
                  relative
                  ${visual.css1}
                  rounded-2xl
                  p-4

                  border
                  border-white/80

                  shadow-[0_4px_18px_rgba(15,23,42,0.045)]
                  hover:shadow-[0_8px_24px_rgba(15,23,42,0.07)]

                  transition-all
                  duration-300
                  transform-gpu
                  hover:-translate-y-2

                  cursor-pointer
                  overflow-hidden
                  backdrop-blur-[2px]
                `}
              >

                {/* ========================================= */}
                {/* Glossy Color Finish */}
                {/* ========================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    pointer-events-none
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 12% 0%,
                        ${visual.glossColor},
                        transparent 48%
                      ),
                      linear-gradient(
                        135deg,
                        rgba(255,255,255,0.58) 0%,
                        rgba(255,255,255,0.16) 42%,
                        rgba(255,255,255,0) 75%
                      )
                    `,
                  }}
                />

                {/* ========================================= */}
                {/* Soft Gloss Highlight */}
                {/* ========================================= */}

                <div
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-44
                    h-44
                    rounded-full
                    bg-white/20
                    blur-3xl
                    pointer-events-none
                  "
                />

                {/* ========================================= */}
                {/* Hover Color Glow */}
                {/* ========================================= */}

                <motion.div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    pointer-events-none
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: hoveredId === service.id ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  style={{
                    background: `radial-gradient(
                      circle at 50% 0%,
                      ${visual.glossColor},
                      transparent 55%
                    )`,
                  }}
                />

                {/* ========================================= */}
                {/* Card Content */}
                {/* ========================================= */}

                <div className="relative z-10">

                  {/* Image + Title */}
                  <div className="items-start gap-4">

                    <img
                      src={visual.img}
                      alt={service.title}
                      className="
                        w-[10rem]
                        transition-transform
                        duration-300
                        group-hover:scale-[1.02]
                      "
                    />

                    <div className="flex-1">

                      <h3
                        className="
                          text-2xl
                          mt-2
                          font-extrabold
                          text-[#0F172A]
                          mb-2
                          leading-tight
                        "
                      >
                        <span className={visual.fontcolor}>
                          {visual.firstName}
                        </span>{' '}
                        {visual.lastName}
                      </h3>

                      <p className="text-sm text-slate-600 line-clamp-5 mb-4 max-w-xl">
                        {service.description}
                      </p>

                    </div>

                    {/* Badge */}
                    <div className={` ml-2 text-xs font-semibold
                        text-slate-500 rounded-full
                        px-3 py-1 hidden sm:inline-flex
                        items-center  `}
                      style={{
                        background: 'rgba(243,244,246,0.75)',
                      }}>
                      {visual.badge}
                    </div>

                  </div>

                  {/* Capabilities */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    {service.capabilities
                      .slice(0, 3)
                      .map((cap, capIdx) => (
                        <motion.span
                          key={capIdx}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: 0.12 + capIdx * 0.04,
                          }}
                          className={` text-[13px] px-3 py-1 rounded-full
                           ${visual.bg2} text-slate-700 border
                            font-medium `}>
                          {cap}
                        </motion.span>
                      ))}

                  </div>

                  {/* Bottom Action */}
                  <div
                    className=" mt-6 pt-6
                      border-t border-white/70 flex items-center justify-between ">
                    <button
                      className={` text-sm font-semibold
                        ${visual.fontcolor} flex items-center gap-2 transition-all duration-300 group-hover:gap-3
                      `}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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