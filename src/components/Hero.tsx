import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Star, MessageCircle, Phone, MapPin, Zap, Flame, ShieldCheck, Dumbbell } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (programName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-white/10">
      {/* Background ambient high-energy volt glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#ccff00]/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Statement, High-Energy Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Trust Indicator (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-zinc-300">
              <span className="flex items-center gap-1.5 font-bold text-[#ccff00]">
                <Star className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
                {GYM_INFO.rating} Rating
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-white font-medium">{GYM_INFO.reviewCount} Google Reviews</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Madhya Marg, Sector 9D</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] text-balance">
                Unleash Your Power at{' '}
                <span className="volt-gradient-text">Wao Fitness</span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-light leading-relaxed">
                Chandigarh's premier high-energy fitness destination in Sector 9D. Premium strength equipment, Olympic weights, heart-pounding CrossFit &amp; HIIT, exhilarating Zumba dance, and clinical sports nutrition.
              </p>
            </div>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* WhatsApp Free Trial Pass Button */}
              <a
                href={GYM_INFO.freePassWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl bg-[#ccff00] hover:bg-[#d9ff33] text-black transition-all shadow-lg shadow-[#ccff00]/25 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <Zap className="w-4 h-4 fill-black text-black" />
                <span>Claim Free Trial Pass</span>
              </a>

              {/* Direct Booking Modal trigger */}
              <button
                onClick={() => onOpenBooking('1-Day Free Trial Pass')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#141722] hover:bg-[#1c2130] text-white border border-white/15 transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Dumbbell className="w-4 h-4 text-[#ccff00]" />
                <span>Book Gym Tour</span>
              </button>

              {/* Phone Call */}
              <a
                href={`tel:${GYM_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold rounded-xl bg-[#0e1017] hover:bg-[#161a26] text-zinc-300 border border-white/10 hover:border-[#ccff00]/40 transition-colors whitespace-nowrap shrink-0"
                title={`Call ${GYM_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-[#ccff00]" />
                <span className="tabular-nums">Call {GYM_INFO.phone}</span>
              </a>
            </div>

            {/* Highlight bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>Top Hygiene &amp; Cleanliness</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>Elite Certified Coaches</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>Madhya Marg Service Parking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Canvas with User Image 1 */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#10121a] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              {/* Fallback container with energetic dark athletic gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0c10] via-[#141724] to-[#1e2316] flex items-center justify-center p-6 text-center">
                <div className="space-y-2 opacity-60">
                  <span className="font-display text-2xl font-bold uppercase text-[#ccff00]">Wao Fitness</span>
                  <p className="text-xs text-zinc-400">SCO 34-37, Madhya Marg, Sector 9D, Chandigarh</p>
                </div>
              </div>

              {/* Main Image 1 (Hero Banner / Main Interior) */}
              <img
                src={GYM_INFO.heroImage}
                alt="Wao Fitness Center Madhya Marg Sector 9D Chandigarh main gym interior and workout floor"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`relative z-10 w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Contrast Scrim */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

              {/* Floating Bottom Card Over Scrim */}
              <div className="absolute bottom-4 left-4 right-4 z-30 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide">Wao Fitness Center</p>
                  <p className="text-[11px] text-zinc-300">SCO 34-37, Sector 9D · Open 6:00 AM – 10:00 PM</p>
                </div>
                <a
                  href={GYM_INFO.freePassWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold bg-[#ccff00] text-black rounded-lg hover:bg-white transition-colors uppercase tracking-wider shrink-0"
                >
                  Free Pass
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quick Metric & Assurance Strip (Full Width Row Below Split) */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-[#ccff00] tabular-nums">
              4.9 ★
            </div>
            <p className="text-xs text-zinc-400">1.3k+ Verified Google Reviews</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
              SCO 34–37
            </div>
            <p className="text-xs text-zinc-400">Madhya Marg, Sector 9D, Chandigarh</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-white tabular-nums uppercase">
              6 AM – 10 PM
            </div>
            <p className="text-xs text-zinc-400">Open 7 Days a Week</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-[#ccff00] tabular-nums">
              6283117815
            </div>
            <p className="text-xs text-zinc-400">Direct WhatsApp &amp; Calls</p>
          </div>
        </div>
      </div>
    </section>
  );
};
