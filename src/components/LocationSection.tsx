import React, { useState } from 'react';
import { GYM_INFO, GYM_FAQS } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Clock, ChevronDown, ChevronUp, Navigation, Car, Zap } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#08090c] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.22em] text-[#ccff00] font-bold">
            Prime Madhya Marg Location
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Location, Hours &amp; Directions
          </h2>
          <p className="text-sm text-zinc-300">
            Centrally situated on Madhya Marg in Sector 9D with extensive front service road parking and prompt public transit access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Card & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="energy-card rounded-2xl p-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#ccff00]">
                  Gym Coordinates
                </span>
                <h3 className="font-display text-3xl font-black text-white uppercase">
                  Wao Fitness
                </h3>
                <p className="text-xs text-zinc-400">
                  SCO 34, 35, 36, 37, Madhya Marg, Sector 9D, Chandigarh - 160009
                </p>
              </div>

              <div className="space-y-4 text-xs text-zinc-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-[#ccff00] shrink-0 mt-0.5 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Exact Address:
                    </strong>
                    <span>SCO 34, 35, 36, 37, Madhya Marg, Sector 9D, Chandigarh - 160009</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-[#ccff00] shrink-0 mt-0.5 border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Phone Call:
                    </strong>
                    <a href={`tel:${GYM_INFO.phone}`} className="text-[#ccff00] hover:underline font-bold text-sm tabular-nums">
                      {GYM_INFO.phoneFormatted} ({GYM_INFO.phone})
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 border border-white/10">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Direct WhatsApp:
                    </strong>
                    <a
                      href={GYM_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      wa.me/916283117815
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-[#ccff00] shrink-0 mt-0.5 border border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Gym Timings:
                    </strong>
                    <span className="block text-zinc-300 font-medium">{GYM_INFO.hoursWeekday}</span>
                    <span className="block text-zinc-400 font-medium">{GYM_INFO.hoursSunday}</span>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-[#ccff00] shrink-0 mt-0.5 border border-white/10">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Service Lane Parking:
                    </strong>
                    <span>Wide front service road on Madhya Marg with hassle-free parking for two-wheelers and cars.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ccff00] hover:bg-[#d9ff33] text-black font-black uppercase tracking-wider text-xs transition-colors shadow-md shadow-[#ccff00]/20"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={GYM_INFO.freePassWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1a1e2a] hover:bg-[#252b3d] text-white border border-white/10 font-bold uppercase tracking-wider text-xs transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>Claim Pass (WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & FAQs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Embedded Map Frame for SCO 34-37 Madhya Marg Sector 9D */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#12141c] h-72 sm:h-80 relative shadow-xl">
              <iframe
                title="Wao Fitness SCO 34-37 Madhya Marg Sector 9D Chandigarh Location Map"
                src="https://maps.google.com/maps?q=SCO%2034-37,%20Madhya%20Marg,%20Sector%209D,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-3 left-3 bg-[#0a0c12]/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] text-zinc-200 pointer-events-none font-medium">
                📍 SCO 34-37, Madhya Marg, Sector 9D, Chandigarh
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <h4 className="font-display text-xl font-bold uppercase text-white mb-2">
                Frequently Asked Questions
              </h4>

              {GYM_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#101218] border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-3.5 text-left text-xs font-bold text-white flex items-center justify-between hover:text-[#ccff00] transition-colors cursor-pointer uppercase tracking-wide"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#ccff00] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                    )}
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-4 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
