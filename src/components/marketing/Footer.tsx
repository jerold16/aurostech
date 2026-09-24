import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Github, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <footer className="bg-[#F8FAFC] text-slate-600 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Motto Banner from Brand Identity Sheet */}
        {/* <div className="mb-14 py-4 px-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-black tracking-[0.22em] text-[#0B192C] uppercase font-['Inter']">
            <span>IDEAS</span>
            <svg viewBox="0 0 10 12" fill="#007BFF" className="w-2 h-2.5 flex-shrink-0">
              <polygon points="1,1 9,6 1,11" />
            </svg>
            <span>TECHNOLOGY</span>
            <svg viewBox="0 0 10 12" fill="#007BFF" className="w-2 h-2.5 flex-shrink-0">
              <polygon points="1,1 9,6 1,11" />
            </svg>
            <span>IMPACT</span>
          </div>
          <div className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
            Smart Solutions for a Brighter Tomorrow
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-200">
          {/* Left Column: Logo, Descriptor, Mission Statement (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <img
              src="/aureostechB.png"
              alt="AureosTech Logo"
              className="h-30 w-auto object-contain"
            />
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              AureosTech is a software and technology solutions company providing custom software development, web and mobile applications, cloud solutions, AI and automation, and IT consulting services. We help businesses use technology to improve operations, create better digital experiences and support growth.
            </p>

            {/* Contact details */}
            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#007BFF] flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                <span>info@aureostech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  Industry Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technologies')}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  SaaS Ecosystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('trust')}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  Careers & Culture
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer font-semibold"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider font-mono">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#007BFF] transition-colors text-left cursor-pointer"
                >
                  Custom Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#007BFF] transition-colors text-left cursor-pointer"
                >
                  Mobile App Development (iOS & Android)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#007BFF] transition-colors text-left cursor-pointer"
                >
                  Cloud Solutions & Kubernetes Orchestration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#007BFF] transition-colors text-left cursor-pointer"
                >
                  AI & Workflow Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#007BFF] transition-colors text-left cursor-pointer"
                >
                  Web Platforms & Enterprise Portals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#007BFF] transition-colors text-left cursor-pointer"
                >
                  Strategic IT Advisory & SOC 2 Diligence
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AureosTech — Ideas • Technology • Impact. All rights reserved. Technology solutions built around your business.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#terms"
              onClick={(e) => { e.preventDefault(); }}
              className="hover:text-[#007BFF] transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#privacy"
              onClick={(e) => { e.preventDefault(); }}
              className="hover:text-[#007BFF] transition-colors"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a
              href="#security"
              onClick={(e) => { e.preventDefault(); }}
              className="hover:text-[#007BFF] transition-colors"
            >
              Security Governance
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-slate-500">
            <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:text-[#007BFF] hover:border-[#007BFF] cursor-pointer transition-colors shadow-xs">
              <Linkedin className="w-4 h-4" />
            </span>
            <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:text-[#007BFF] hover:border-[#007BFF] cursor-pointer transition-colors shadow-xs">
              <Twitter className="w-4 h-4" />
            </span>
            <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:text-[#007BFF] hover:border-[#007BFF] cursor-pointer transition-colors shadow-xs">
              <Github className="w-4 h-4" />
            </span>
            <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:text-[#007BFF] hover:border-[#007BFF] cursor-pointer transition-colors shadow-xs">
              <Globe className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
