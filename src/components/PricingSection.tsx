import React from 'react';
import { MEMBERSHIP_PLANS, GYM_INFO } from '../data/gymData';
import { Zap, CheckCircle2, ShieldCheck, Flame, Crown } from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#08090c] border-b border-white/10 relative overflow-hidden">
      {/* Decorative high-energy glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.22em] text-[#ccff00] font-bold">
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Membership Plans &amp; Rates
          </h2>
          <p className="text-sm text-zinc-300">
            No hidden admission fees. All plans include full gym floor access, locker access, and unlimited group fitness classes in Chandigarh.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`energy-card rounded-2xl p-6 flex flex-col justify-between relative ${
                plan.popular
                  ? 'border-2 border-[#ccff00] bg-gradient-to-b from-[#141820] to-[#0d0f15] shadow-xl shadow-[#ccff00]/10'
                  : 'bg-[#0f1118]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                    {plan.duration}
                  </span>
                  {plan.popular ? (
                    <Flame className="w-5 h-5 text-[#ccff00]" />
                  ) : (
                    <Crown className="w-5 h-5 text-zinc-600" />
                  )}
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">{plan.name}</h3>
                  <p className="text-xs text-[#ccff00] font-medium mt-0.5">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl sm:text-4xl font-black text-white tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">/ duration</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">{plan.billingText}</p>
                </div>

                {/* Features */}
                <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-zinc-300">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => onOpenBooking(plan.name)}
                  className={`w-full py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#ccff00] hover:bg-[#d9ff33] text-black shadow-md shadow-[#ccff00]/20'
                      : 'bg-[#181b26] hover:bg-[#232738] text-white border border-white/10'
                  }`}
                >
                  Join / Claim Trial
                </button>

                <a
                  href={`https://wa.me/916283117815?text=Hello%20Wao%20Fitness!%20I%20am%20interested%20in%20the%20*${encodeURIComponent(
                    plan.name
                  )}*%20(${encodeURIComponent(plan.price)})%20membership%20at%20Sector%209D%20Chandigarh.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[11px] text-zinc-400 hover:text-[#ccff00] transition-colors"
                >
                  Inquire on WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free Pass Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#10121a] border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-display text-lg font-bold uppercase text-white">Want to experience Wao Fitness first?</h4>
            <p className="text-xs text-zinc-400">
              Claim a 100% complimentary 1-Day Trial Pass. No commitment required.
            </p>
          </div>
          <a
            href={GYM_INFO.freePassWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#ccff00] hover:bg-[#d9ff33] text-black font-black uppercase tracking-wider text-xs shadow-lg shadow-[#ccff00]/20 transition-all shrink-0 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>Claim Free Trial Pass</span>
          </a>
        </div>
      </div>
    </section>
  );
};
