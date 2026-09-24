import React from 'react';
import { motion } from 'motion/react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { ServiceItem } from '../../types';
import { CheckCircle2, Layers, Cpu, FileCode, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestEngagement: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestEngagement
}) => {
  if (!service) return null;

  return (
    <Modal
      isOpen={!!service}
      onClose={onClose}
      title={service.title}
      subtitle="Complete Architecture Blueprint, Deliverables, & Engineering Scope"
      maxWidth="2xl"
    >
      <div className="space-y-6">
        <p className="text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>

        {/* Core Capabilities */}
        <div>
          <h4 className="text-xs font-mono font-bold text-[#007BFF] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#007BFF]" />
            Core Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-xs font-mono font-bold text-[#8B5CF6] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#8B5CF6]" />
            Verified Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + idx * 0.04 }}
                className="px-3 py-1 rounded-lg bg-blue-50/70 border border-blue-200 text-xs font-mono font-semibold text-[#007BFF]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <h4 className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
            <FileCode className="w-4 h-4 text-emerald-600" />
            Client Deliverables & IP Transfer
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((del, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + idx * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{del}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 hover:text-[#0F172A] cursor-pointer"
          >
            Back to Overview
          </button>
          <Button
            size="md"
            withArrow
            onClick={() => {
              onClose();
              onRequestEngagement(service.title);
            }}
          >
            Initiate {service.title.split(' ')[0]} Engagement
          </Button>
        </div>
      </div>
    </Modal>
  );
};
