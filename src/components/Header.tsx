import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Phone, Menu, X, Dumbbell, Zap } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (programName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#08090c]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single Brand Wordmark in display face */}
          <a href="#" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
            <span className="w-10 h-10 rounded-xl bg-[#ccff00] flex items-center justify-center text-black font-display font-extrabold text-xl shadow-lg shadow-[#ccff00]/20 group-hover:scale-105 transition-transform">
              W
            </span>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-white group-hover:text-[#ccff00] transition-colors uppercase">
                WAO FITNESS
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-zinc-400 font-sans font-medium">
                Madhya Marg · Sector 9D
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-zinc-300">
            <a href="#programs" className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0">
              Programs
            </a>
            <a href="#facility" className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0">
              Facility &amp; Gear
            </a>
            <a href="#schedule" className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0">
              Class Schedule
            </a>
            <a href="#pricing" className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0">
              Membership
            </a>
            <a href="#reviews" className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0">
              Reviews (4.9★)
            </a>
            <a href="#location" className="hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0">
              Location
            </a>
          </nav>

          {/* Zone 3: Primary action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-[#141720] hover:bg-[#1b202c] border border-white/10 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Call Wao Fitness"
            >
              <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
              <span className="tabular-nums">{GYM_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenBooking('1-Day Free Trial Pass')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#d9ff33] rounded-lg shadow-md shadow-[#ccff00]/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer uppercase tracking-wider"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Claim Free Pass</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking('1-Day Free Trial Pass')}
              className="px-3 py-1.5 text-xs font-black text-black bg-[#ccff00] rounded-lg uppercase tracking-wide cursor-pointer"
            >
              Free Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg bg-[#141720] border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e14] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-zinc-200">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#181b26] hover:text-[#ccff00]"
            >
              Core Programs (Strength, HIIT, Zumba, Diet)
            </a>
            <a
              href="#facility"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#181b26] hover:text-[#ccff00]"
            >
              Facility &amp; Workout Area
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#181b26] hover:text-[#ccff00]"
            >
              Interactive Class Timetable
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#181b26] hover:text-[#ccff00]"
            >
              Membership Plans &amp; Rates
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#181b26] hover:text-[#ccff00]"
            >
              1.3k+ Google Reviews (4.9★)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#181b26] hover:text-[#ccff00]"
            >
              SCO 34-37, Madhya Marg, Sector 9D
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-4 text-xs font-bold rounded-lg bg-[#ccff00] hover:bg-[#d9ff33] text-black uppercase tracking-wider shadow-lg shadow-[#ccff00]/20"
            >
              Claim 1-Day Free Trial Pass (WhatsApp)
            </a>
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#141720] text-zinc-300 border border-white/10"
            >
              Call Front Desk: {GYM_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
