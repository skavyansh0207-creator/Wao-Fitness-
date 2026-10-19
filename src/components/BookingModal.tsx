import React, { useState } from 'react';
import { GYM_INFO, CORE_PROGRAM_CATEGORIES } from '../data/gymData';
import { X, Calendar, Clock, User, Phone, MessageCircle, Zap, Dumbbell, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [passType, setPassType] = useState('1-Day Free Trial Pass');
  const [programInterest, setProgramInterest] = useState(
    preselectedService || 'Strength & Conditioning (Weight Training)'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [preferredSlot, setPreferredSlot] = useState('06:30 AM – 08:00 AM (Morning)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const workoutSlots = [
    '06:30 AM – 08:00 AM (Morning Batch)',
    '08:00 AM – 09:30 AM (Morning Peak)',
    '09:30 AM – 11:00 AM (Late Morning)',
    '12:00 PM – 02:00 PM (Afternoon)',
    '05:00 PM – 06:30 PM (Evening Batch)',
    '06:30 PM – 08:00 PM (Evening Peak)',
    '08:00 PM – 09:30 PM (Night Lifters)',
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = [
      `*New Free Trial Pass Request - Wao Fitness*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Member Name:* ${name || 'Fitness Guest'}`,
      `📞 *Phone Number:* ${phone || 'Not specified'}`,
      `🎫 *Request Type:* ${passType}`,
      `💪 *Program Interest:* ${programInterest}`,
      `📅 *Date:* ${preferredDate}`,
      `⏰ *Preferred Slot:* ${preferredSlot}`,
      notes ? `📝 *Fitness Goals / Notes:* ${notes}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Location:* SCO 34-37, Madhya Marg, Sector 9D, Chandigarh`,
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(formattedMessage);
    const url = `https://wa.me/916283117815?text=${encoded}`;
    window.location.href = url;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#10121a] rounded-2xl border border-[#ccff00]/40 shadow-2xl p-6 sm:p-8 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1b1e2a] text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#ccff00] font-bold">
            Zero Cost · Instant Pass
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase">
            Claim Your Free Trial Pass
          </h3>
          <p className="text-xs text-zinc-300">
            Wao Fitness · SCO 34-37, Madhya Marg, Sector 9D · WhatsApp: 6283117815
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-xs">
          {/* Pass Type Selector */}
          <div className="grid grid-cols-3 gap-2">
            {[
              '1-Day Free Trial Pass',
              'Personal Training Session',
              'Membership Inquiry',
            ].map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setPassType(type)}
                className={`py-2 px-2 text-[10px] font-bold rounded-lg border text-center transition-colors uppercase leading-tight cursor-pointer ${
                  passType === type
                    ? 'bg-[#ccff00] text-black border-[#ccff00]'
                    : 'bg-[#181a24] text-zinc-300 border-white/10 hover:border-white/30'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Program Selector */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5 text-[#ccff00]" />
              Select Primary Workout Interest
            </label>
            <select
              value={programInterest}
              onChange={(e) => setProgramInterest(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white outline-none focus:border-[#ccff00]"
            >
              <optgroup label="Strength & Conditioning" className="bg-[#10121a] text-zinc-300">
                <option value="Weight Training (Strength)">Weight Training (Free Weights & Machines)</option>
                <option value="CrossFit & Functional">CrossFit & Functional Conditioning</option>
                <option value="Personal Training (1-on-1)">Personal Training (1-on-1 Coaching)</option>
              </optgroup>
              <optgroup label="Cardio & Group Fitness" className="bg-[#10121a] text-zinc-300">
                <option value="HIIT Exercise Classes">HIIT Exercise Classes</option>
                <option value="Aerobics & Step">Aerobics & Step Conditioning</option>
                <option value="Kickboxing Conditioning">Kickboxing Conditioning</option>
              </optgroup>
              <optgroup label="Dance & Wellness" className="bg-[#10121a] text-zinc-300">
                <option value="Zumba Dance Fitness">Zumba Dance Fitness</option>
                <option value="Dance Fitness Classes">Dance Fitness Classes</option>
                <option value="Yoga Classes">Yoga Classes (Vinyasa & Mobility)</option>
              </optgroup>
              <optgroup label="Health & Diet" className="bg-[#10121a] text-zinc-300">
                <option value="Custom Nutrition Consulting">Custom Nutrition Consulting</option>
                <option value="Custom Diet Plans">Custom Diet Plans & Meal Charts</option>
              </optgroup>
            </select>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#ccff00]" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jaspreet Singh"
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white placeholder-zinc-500 outline-none focus:border-[#ccff00]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
                Contact Phone
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 6283117815"
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white placeholder-zinc-500 outline-none focus:border-[#ccff00]"
              />
            </div>
          </div>

          {/* Date & Preferred Workout Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#ccff00]" />
                Workout Date
              </label>
              <input
                type="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white outline-none focus:border-[#ccff00]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
                Preferred Time Slot
              </label>
              <select
                value={preferredSlot}
                onChange={(e) => setPreferredSlot(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white outline-none focus:border-[#ccff00]"
              >
                {workoutSlots.map((slot) => (
                  <option key={slot} value={slot} className="bg-[#10121a]">
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes / Fitness Goals */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-semibold">
              Fitness Goals or Existing Injury / Requirements (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Fat loss, muscle building, beginner to lifting, diet advice"
              className="w-full px-3.5 py-2 bg-[#181a24] border border-white/15 rounded-xl text-white placeholder-zinc-500 outline-none focus:border-[#ccff00]"
            />
          </div>

          {/* Submit CTAs */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#ccff00] hover:bg-[#d9ff33] text-black font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#ccff00]/25 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-black text-black" />
              <span>Confirm &amp; Send to WhatsApp (6283117815)</span>
            </button>

            <a
              href={`tel:${GYM_INFO.phone}`}
              className="w-full py-2.5 px-4 rounded-xl bg-[#181a24] hover:bg-[#202432] text-zinc-300 border border-white/10 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>Call Front Desk Direct: {GYM_INFO.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-zinc-400 text-center font-medium">
            100% Free · No credit card required · Instant WhatsApp confirmation
          </p>
        </form>
      </div>
    </div>
  );
};
