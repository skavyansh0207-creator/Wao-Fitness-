import React, { useState } from 'react';
import { GYM_INFO, FACILITY_HIGHLIGHTS } from '../data/gymData';
import { Eye, X, Zap, MapPin, Dumbbell, ShieldCheck, Flame, Music, Activity, Award } from 'lucide-react';

export const FeatureGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ url: string; title: string; desc: string; tag: string } | null>(null);

  const galleryItems = [
    {
      id: 'main-interior',
      url: GYM_INFO.heroImage,
      title: 'Main Gym Floor & Strength Training Arena',
      desc: 'Spacious high-ceiling facility equipped with commercial plate-loaded machines, Olympic power racks, and deadlift platforms at Madhya Marg.',
      tag: 'Main Floor & Free Weights',
      span: 'md:col-span-2'
    },
    {
      id: 'workout-area',
      url: GYM_INFO.facilityImage,
      title: 'Functional Workout Area & Cardio Theater',
      desc: 'High-octane conditioning zone with sprint turf, battle ropes, commercial treadmills, assault bikes, and kettlebells.',
      tag: 'Functional Zone & Cardio',
      span: 'md:col-span-1'
    }
  ];

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#ccff00]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-400" />;
      case 'Music':
        return <Music className="w-5 h-5 text-pink-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#ccff00]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="facility" className="py-16 lg:py-24 bg-[#08090c] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.22em] text-[#ccff00] font-bold">
            World-Class Infrastructure
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Facility &amp; Workout Area Tour
          </h2>
          <p className="text-sm text-zinc-300">
            Take a visual tour inside Wao Fitness at SCO 34-37, Madhya Marg, Sector 9D, Chandigarh. Designed for serious lifters, athletes, and fitness enthusiasts.
          </p>
        </div>

        {/* Gallery Showcase Cards featuring the 2 user images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#12141c] border border-white/10 hover:border-[#ccff00]/60 transition-all cursor-pointer aspect-[16/10] flex flex-col justify-end ${item.span}`}
            >
              {/* Fallback pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#090a0f] via-[#12141c] to-[#1c2214] -z-10 flex items-center justify-center p-4">
                <span className="font-display text-base uppercase text-[#ccff00]/50">{item.title}</span>
              </div>

              {/* Photo */}
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Card Information */}
              <div className="relative z-10 p-5 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#ccff00] font-bold">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#ccff00] transition-colors flex items-center justify-between uppercase">
                  <span>{item.title}</span>
                  <Eye className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Key Facility Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITY_HIGHLIGHTS.map((h, idx) => (
            <div
              key={idx}
              className="energy-card rounded-xl p-5 flex flex-col space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#181b26] border border-white/10 flex items-center justify-center shrink-0">
                {getHighlightIcon(h.icon)}
              </div>
              <h4 className="font-display text-lg font-bold text-white uppercase">
                {h.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Experience in Person Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-[#101218] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#ccff00] shrink-0" />
            <div>
              <p className="font-bold text-white uppercase tracking-wide">Tour Wao Fitness Today</p>
              <p className="text-zinc-400">{GYM_INFO.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ccff00] hover:bg-[#d9ff33] text-black rounded-lg font-bold uppercase tracking-wider text-xs transition-colors shrink-0 shadow-md shadow-[#ccff00]/20"
            >
              <Zap className="w-3.5 h-3.5 fill-black text-black" />
              <span>Claim Free 1-Day Trial Pass</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#12141c] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 space-y-2 bg-[#12141c]">
              <span className="text-[10px] font-bold text-[#ccff00] uppercase tracking-wider">
                {activeImage.tag}
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase">{activeImage.title}</h3>
              <p className="text-sm text-zinc-300">{activeImage.desc}</p>
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 mt-3">
                <span className="text-xs text-zinc-400">SCO 34-37, Madhya Marg, Sector 9D, Chandigarh</span>
                <a
                  href={GYM_INFO.freePassWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#ccff00] text-black rounded-lg hover:bg-white transition-colors text-center"
                >
                  Claim 1-Day Pass (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
