import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, service, message }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || `Submission failed (${response.status})`);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(err?.message || 'Something went wrong. Please try again.');
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

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/20 transition-all disabled:opacity-60';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Get in Touch"
      subtitle="Tell us about your project and we'll get back to you within one business day."
      maxWidth="lg"
    >
      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-[#0F172A]">Message Received!</h4>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thanks, <span className="font-semibold text-[#0F172A]">{name}</span>! We've received your enquiry and will be in touch shortly.
          </p>
          <div className="pt-4">
            <Button size="md" onClick={handleReset}>Done</Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Error banner */}
          {errorMessage && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-semibold block mb-0.5">Error</span>
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

          {/* Row 1: Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                Full Name <span className="text-[#007BFF]">*</span>
              </label>
              <input
                type="text"
                required
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                Phone Number <span className="text-[#007BFF]">*</span>
              </label>
              <input
                type="tel"
                required
                disabled={loading}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2: Email + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                Email Address <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="email"
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                Company / Organisation <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                disabled={loading}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company name"
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 3: Service (full width) */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Service You're Looking For
            </label>
            <select
              disabled={loading}
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={inputClass}
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>

          {/* Row 4: Message */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Tell Us About Your Project <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <textarea
              rows={4}
              disabled={loading}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe what you're looking to build, solve, or improve..."
              className={inputClass}
            />
          </div>

          {/* Footer */}
          <div className="pt-1 flex items-center justify-between gap-4">
            <span className="text-[11px] text-slate-400 leading-snug">
              🔒 Your information is kept private and never shared.
            </span>
            <Button size="md" type="submit" isLoading={loading} withArrow>
              {loading ? 'Sending…' : 'Send Enquiry'}
            </Button>
          </div>

        </form>
      )}
    </Modal>
  );
};
