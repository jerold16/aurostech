import React from 'react';
import { Target, Compass, HeartHandshake, Shield, Sparkles, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedParagraph } from '../ui/AnimatedText';
import { Button } from '../ui/Button';
import { AureosLogo } from '../ui/AureosLogo';
import { LEADERSHIP_TEAM } from '../../data/mockData';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const values = [
    {
      icon: <Shield className="w-5 h-5 text-[#007BFF]" />,
      title: 'Integrity',
      copy: 'We believe in clear communication, responsible delivery and building relationships based on trust.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#06B6D4]" />,
      title: 'Innovation',
      copy: 'We continuously explore better technologies and smarter ways to solve business problems.'
    },
    {
      icon: <Target className="w-5 h-5 text-[#8B5CF6]" />,
      title: 'Customer Focus',
      copy: "We start with the client's needs and design solutions around real business requirements."
    },
    {
      icon: <Award className="w-5 h-5 text-[#10B981]" />,
      title: 'Quality',
      copy: 'We pay attention to usability, reliability, performance and maintainability.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#F59E0B]" />,
      title: 'Long-Term Thinking',
      copy: 'We build with future growth, scalability and continued improvement in mind.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#007BFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Block: Corporate Overview & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Glass Modern HQ Architecture Visual with Aureostech Signage */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3 group">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900">
                {/* Modern Glass Facade Architectural HQ Image */}
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80"
                  alt="AUREOSTECH Corporate Innovation Headquarters"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Modern Blue/Navy Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/40 to-transparent" />

                {/* Glowing Corporate Building Signage Overlay replicating the reference */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <AureosLogo iconOnly size="sm" />
                    </div>
                    <div>
                      <div className="text-white font-extrabold tracking-wider text-base font-['Inter']">
                        AUREOSTECH
                      </div>
                      <div className="text-[10px] text-blue-200 font-mono tracking-widest uppercase">
                        IDEAS • TECHNOLOGY • IMPACT
                      </div>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-xs font-mono font-bold text-emerald-400">● DIGITAL SOLUTIONS</div>
                    <div className="text-[10px] text-slate-300">Practical & Scalable</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Innovation. Expertise. Lasting Impact narrative */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-4">
              ABOUT AUREOSTECH
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
              Practical, Scalable & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#06B6D4] to-[#8B5CF6]">
                Future-Ready Solutions
              </span>
            </h2>

            <AnimatedParagraph
              text="AureosTech is a next-generation software and technology company delivering digital solutions for businesses across different industries. We bring together technical expertise, creative thinking and a strong understanding of business requirements to build solutions that are designed for today and ready for tomorrow."
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4"
              delay={0.25}
              wordDelay={0.02}
            />

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              From an early-stage business looking to build its first digital product to an established organization looking to modernize its systems, we can work as a technology partner throughout the journey. Our focus is not simply on delivering software, but on creating solutions that are useful, maintainable and capable of growing with the business.
            </p>

            {/* Vision & Mission Pillars from Section 3 & 4 */}
            <div className="space-y-3 w-full mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5 hover:border-[#007BFF]/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center flex-shrink-0 text-[#007BFF] mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">Our Vision</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    To become a trusted technology partner for businesses by creating practical, innovative and future-ready digital solutions that make a meaningful difference.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5 hover:border-[#06B6D4]/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-200/80 flex items-center justify-center flex-shrink-0 text-[#06B6D4] mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">Our Mission</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Our mission is to help businesses turn ideas and challenges into dependable technology solutions. We aim to combine strong technical capabilities with a client-focused approach, clear communication and long-term support.
                  </p>
                </div>
              </motion.div>
            </div>

            <Button
              size="md"
              withArrow
              onClick={onLearnMore}
              className="text-sm"
            >
              Learn More About AureosTech
            </Button>
          </motion.div>
        </div>

        {/* Our Values Section - 5 Pillars from Section 5 */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-xs font-bold text-[#007BFF] uppercase tracking-widest">
              GUIDING PRINCIPLES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1">
              Our Values
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#007BFF]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] mb-1.5">{v.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Section — Editorial Style */}
        {(() => {
          const ceo = LEADERSHIP_TEAM[0];
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B192C] via-[#0F2440] to-[#0B192C] p-8 sm:p-12 lg:p-16"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#007BFF]/15 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Left: Avatar + Name block */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center text-white text-5xl sm:text-6xl font-black bg-gradient-to-br from-[#007BFF] to-[#06B6D4] shadow-xl shadow-blue-500/20 mb-6">
                    {ceo.name.charAt(0).toUpperCase()}
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {ceo.name}
                  </h4>
                  <div className="text-sm font-bold text-[#06B6D4] mt-1.5 tracking-wider uppercase">
                    {ceo.role}
                  </div>
                </div>

                {/* Right: Bio + Quote */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold text-blue-300 uppercase tracking-widest">
                    Meet Our Founder
                  </div>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    {ceo.bio}
                  </p>

                  <blockquote className="border-l-4 border-[#007BFF] pl-5 py-2">
                    <p className="text-lg sm:text-xl text-white font-medium italic leading-relaxed">
                      "Technology should solve a problem, improve an experience, or create a new opportunity."
                    </p>
                  </blockquote>

                  
                </div>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
};
