import React from 'react';
import { GYM_INFO, CORE_PROGRAM_CATEGORIES } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Star, Clock, Zap } from 'lucide-react';

interface FooterProps {
  onOpenBooking: (programName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-[#ccff00] flex items-center justify-center text-black font-display font-extrabold text-lg">
                W
              </span>
              <span className="font-display text-2xl font-black text-white tracking-tight uppercase">
                {GYM_INFO.name}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              {GYM_INFO.tagline}. Leading Chandigarh in progressive weight training, CrossFit functional fitness, HIIT conditioning, certified Zumba, and customized sports nutrition.
            </p>
            <div className="flex items-center gap-2 text-zinc-300">
              <Star className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
              <span className="font-bold text-white">{GYM_INFO.rating}★ Rated</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{GYM_INFO.reviewCountExact} Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Core Disciplines */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Training Disciplines
            </h4>
            <ul className="space-y-2">
              {CORE_PROGRAM_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#programs" className="hover:text-[#ccff00] transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#schedule" className="hover:text-[#ccff00] transition-colors">
                  Weekly Class Timetable
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Workouts */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Signature Programs
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenBooking('Weight Training')}
                  className="hover:text-[#ccff00] transition-colors text-left cursor-pointer"
                >
                  Weight Training &amp; Hypertrophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('CrossFit & Functional')}
                  className="hover:text-[#ccff00] transition-colors text-left cursor-pointer"
                >
                  CrossFit &amp; Functional Turf
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Zumba Dance Fitness')}
                  className="hover:text-[#ccff00] transition-colors text-left cursor-pointer"
                >
                  Zumba &amp; Dance Fitness
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('HIIT Exercise Classes')}
                  className="hover:text-[#ccff00] transition-colors text-left cursor-pointer"
                >
                  High-Intensity Interval Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Custom Nutrition Consulting')}
                  className="hover:text-[#ccff00] transition-colors text-left cursor-pointer"
                >
                  Custom Diet Plans &amp; Nutrition
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Gym Coordinates */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Madhya Marg Facility
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ccff00] shrink-0" />
                <a href={`tel:${GYM_INFO.phone}`} className="hover:text-white font-bold text-white tabular-nums">
                  {GYM_INFO.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={GYM_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold text-emerald-400"
                >
                  WhatsApp: {GYM_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>6:00 AM – 10:00 PM (Mon–Sat)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <p>© {new Date().getFullYear()} Wao Fitness Chandigarh. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#programs" className="hover:text-zinc-200">Programs</a>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <a href="#facility" className="hover:text-zinc-200">Facility Tour</a>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <a href="#location" className="hover:text-zinc-200">Location &amp; Map</a>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <a href={GYM_INFO.freePassWhatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] font-bold">
              Claim 1-Day Free Pass
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
