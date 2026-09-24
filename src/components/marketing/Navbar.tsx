import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onExploreSaas: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeSection,
  onNavigate,
  onExploreSaas
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'SaaS Platform', id: 'technologies' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Why Us', id: 'trust' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py- '
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: AUREOSTECH Logo (Image/Emblem only, no text) */}
        <div className="flex items-center">
          <button
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center p-1 rounded-xl transition-all duration-200 hover:bg-slate-50 focus:outline-hidden cursor-pointer"
            aria-label="AureosTech Home"
          >
            <img
              src="/aureostechS.png"
              alt="AureosTech Logo"
              className="h-full w-60 my-2 object-contain transition-transform duration-300 drop-shadow-xs"
            />
          </button>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer ${
                  isActive
                    ? 'text-[#007BFF] font-semibold'
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 brand-gradient rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
        

          <Button
            size="sm"
            withArrow
            onClick={onOpenContact}
            className="group"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            size="sm"
            onClick={onOpenContact}
            className="text-xs px-2.5 py-1.5"
          >
            Contact
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0F172A] rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 flex items-center justify-between cursor-pointer"
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="w-2 h-2 rounded-full bg-[#007BFF]" />
              )}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
           
            <Button
              size="md"
              withArrow
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="w-full justify-center"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
