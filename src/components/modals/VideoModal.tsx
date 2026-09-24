import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { AureosLogo } from '../ui/AureosLogo';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: 'The Genesis', time: '0:00 - 1:15', desc: 'From boutique architecture research to global delivery authority.' },
    { title: 'The Engineering Core', time: '1:16 - 2:40', desc: 'Zero-tolerance reliability & multi-cloud distributed systems.' },
    { title: 'Autonomous Intelligence', time: '2:41 - 4:10', desc: 'Enterprise LLMs, agentic workflows, and predictive analytics.' },
    { title: 'Global Impact', time: '4:11 - 5:30', desc: 'Transforming 200+ visionary clients worldwide.' }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="AUREOSTECH: Build • Innovate • Grow"
      subtitle="Corporate documentary and architectural manifesto (5 min runtime)"
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Cinematic Video Player Stage */}
        <div className="relative aspect-video w-full rounded-2xl bg-[#0B1528] border border-slate-800 overflow-hidden flex flex-col justify-between p-6 group shadow-lg">
          {/* Animated Video Canvas Simulation */}
          <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#007BFF]/30 via-[#06B6D4]/20 to-[#8B5CF6]/30 animate-pulse" />

          {/* Top Video Overlay Bar */}
          <div className="z-10 flex items-center justify-between">
            <AureosLogo size="sm" inverted />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                4K UHD // {chapters[activeChapter].title}
              </span>
            </div>
          </div>

          {/* Center Visual Play State */}
          <div className="z-10 text-center py-6 flex flex-col items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full brand-gradient text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            >
              {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
            </button>
            <p className="text-sm font-semibold text-white mt-4 max-w-md drop-shadow">
              "{chapters[activeChapter].desc}"
            </p>
          </div>

          {/* Bottom Player Controls */}
          <div className="z-10 flex items-center justify-between gap-4 pt-4 border-t border-white/10 bg-[#0B1528]/80 backdrop-blur-sm -mx-6 -mb-6 px-6 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-[#007BFF] cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-[#007BFF] cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs font-mono text-slate-300">02:14 / 05:30</span>
            </div>

            {/* Fake progress bar */}
            <div className="flex-1 mx-4 h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer">
              <div className="h-full brand-gradient w-2/5" />
            </div>

            <Maximize2 className="w-4 h-4 text-slate-300 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Chapters Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {chapters.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => setActiveChapter(idx)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeChapter === idx
                  ? 'bg-blue-50 border-2 border-[#007BFF] shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
              }`}
            >
              <div className="text-[10px] font-mono font-bold text-[#007BFF] mb-0.5">{ch.time}</div>
              <div className="text-xs font-bold truncate text-[#0F172A]">{ch.title}</div>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};
