import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { SERVICES } from '../../data/mockData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillInterest?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillInterest = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(prefillInterest || SERVICES[0].title);
  const [budget, setBudget] = useState('$50k - $150k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          budget,
          service,
          message,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || `Submission failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(
        err?.message || 'Unable to deliver your brief right now. Please verify your details and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Initiate Project Engagement"
      subtitle="Connect directly with an AUREOSTECH principal architect within 24 hours."
      maxWidth="lg"
    >
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-[#0F172A]">Consultation Requested</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-[#0F172A] font-bold">{name}</span>. An
            AUREOSTECH engagement partner and technical architect have received your brief.
            Expect an NDA and initial scoping assessment shortly at{' '}
            <span className="text-[#007BFF] font-medium">{email}</span>.
          </p>
          <div className="pt-4">
            <Button size="md" onClick={handleReset}>
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-semibold block mb-0.5">Submission Error</span>
                <span>{errorMessage}</span>
              </div>
              <button
                type="button"
                onClick={() => setErrorMessage(null)}
                className="text-red-400 hover:text-red-600 cursor-pointer text-xs font-bold"
                aria-label="Dismiss error"
              >
                ✕
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Johnathan Vance"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johnathan@company.com"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                disabled={loading}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +1 (555) 019-2834"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                disabled={loading}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Health Corp"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Primary Service of Interest
              </label>
              <select
                disabled={loading}
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Multi-Service Enterprise Program">Multi-Service Enterprise Program</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Target Budget Range
              </label>
              <select
                disabled={loading}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60"
              >
                <option value="< $50k">&lt; $50k (Sprint Audit / Prototype)</option>
                <option value="$50k - $150k">$50k - $150k (Custom MVP / Module)</option>
                <option value="$150k - $500k">$150k - $500k (Full Platform Build)</option>
                <option value="$500k+">$500k+ (Multi-Year Enterprise Program)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Project Overview & Objectives
            </label>
            <textarea
              rows={3}
              disabled={loading}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Briefly describe your systems challenge, timeline constraints, or architectural objectives..."
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-medium">
              🔒 Protected by mutual non-disclosure standard.
            </span>
            <Button
              size="md"
              type="submit"
              isLoading={loading}
              withArrow
            >
              {loading ? 'Sending Brief...' : 'Submit Brief'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
