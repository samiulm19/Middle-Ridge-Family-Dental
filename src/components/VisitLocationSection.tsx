import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface VisitLocationSectionProps {
  onOpenBooking: () => void;
}

export const VisitLocationSection: React.FC<VisitLocationSectionProps> = ({ onOpenBooking }) => {
  // Compute real-time status in Queensland AEST timezone
  const status = useMemo(() => {
    try {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Australia/Brisbane',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-AU', options);
      const parts = formatter.formatToParts(now);
      const weekday = parts.find((p) => p.type === 'weekday')?.value || '';
      const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
      const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
      const decTime = hour + minute / 60;

      if (weekday === 'Sunday') {
        return { isOpen: false, text: 'Closed today · Reopens Monday 8:30 AM' };
      }
      if (weekday === 'Saturday') {
        if (decTime >= 8.5 && decTime <= 12.5) {
          return { isOpen: true, text: 'Open now · Closes 12:30 PM today' };
        }
        return { isOpen: false, text: 'Closed · Reopens Monday 8:30 AM' };
      }
      if (decTime >= 8.5 && decTime <= 17.0) {
        return { isOpen: true, text: 'Open now · Closes 5:00 PM today' };
      }
      return { isOpen: false, text: 'Closed · Reopens 8:30 AM' };
    } catch {
      return { isOpen: true, text: 'Mon–Fri 8:30am–5pm · Sat 8:30am–12:30pm' };
    }
  }, []);

  return (
    <section id="visit" className="py-20 lg:py-28 bg-white border-b border-[#E2DAEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Visit Main Card (Deep Plum #2C2A4A) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#2C2A4A] text-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between space-y-8 shadow-[0_18px_40px_-22px_rgba(44,42,74,0.35)]"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#CBB9DE] uppercase tracking-widest block">
                Southridge Location
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Visit us in Middle Ridge
              </h2>
              <p className="text-[#E4DBED] text-base leading-relaxed max-w-xl">
                Conveniently located in Southridge Centre next to FoodWorks with plenty of free parking directly in front. Pram-friendly and completely wheelchair accessible.
              </p>
            </div>

            {/* Contact Rows */}
            <div className="space-y-4 pt-2 border-t border-white/15 text-sm">
              <div className="space-y-0.5">
                <small className="font-semibold text-[11px] tracking-wider uppercase text-[#CBB9DE] block">
                  Address
                </small>
                <span className="text-white font-medium text-base">
                  3/343 Mackenzie Street, Middle Ridge QLD 4350
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-0.5">
                  <small className="font-semibold text-[11px] tracking-wider uppercase text-[#CBB9DE] block">
                    Phone
                  </small>
                  <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-white font-medium text-base hover:underline block">
                    (07) 4659 7347
                  </a>
                </div>

                <div className="space-y-0.5">
                  <small className="font-semibold text-[11px] tracking-wider uppercase text-[#CBB9DE] block">
                    Mobile
                  </small>
                  <a href={`tel:${CLINIC_INFO.mobilePhoneRaw}`} className="text-white font-medium text-base hover:underline block">
                    0449 936 809
                  </a>
                </div>
              </div>

              <div className="space-y-0.5">
                <small className="font-semibold text-[11px] tracking-wider uppercase text-[#CBB9DE] block">
                  Email
                </small>
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-white font-medium text-base hover:underline block truncate">
                  reception@middleridgefamilydental.com.au
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full font-semibold text-sm text-[#2C2A4A] bg-white hover:bg-[#EBE3F2] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book online</span>
              </button>

              <a
                href="https://www.google.com/maps/place/Middle+Ridge+Family+Dental/@-27.6037,151.9683,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get directions</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Hours Table & Amenities Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#FAF8FC] rounded-3xl p-8 sm:p-10 border border-[#E2DAEB] flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-2xl font-normal text-[#1F172C]">
                  Opening hours
                </h3>

                {/* Live Status Badge */}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`} />
                  <span>{status.isOpen ? 'Open' : 'Closed'}</span>
                </span>
              </div>

              <p className="text-xs text-[#5C506F] mb-5">
                {status.text}
              </p>

              {/* Hours Table */}
              <table className="w-full text-sm divide-y divide-[#E2DAEB] font-variant-numeric tabular-nums">
                <tbody>
                  <tr className="py-2.5 flex justify-between">
                    <td className="py-2 text-[#1F172C] font-medium">Monday</td>
                    <td className="py-2 text-[#5C506F]">8:30am – 5:00pm</td>
                  </tr>
                  <tr className="py-2.5 flex justify-between">
                    <td className="py-2 text-[#1F172C] font-medium">Tuesday</td>
                    <td className="py-2 text-[#5C506F]">8:30am – 5:00pm</td>
                  </tr>
                  <tr className="py-2.5 flex justify-between">
                    <td className="py-2 text-[#1F172C] font-medium">Wednesday</td>
                    <td className="py-2 text-[#5C506F]">8:30am – 5:00pm</td>
                  </tr>
                  <tr className="py-2.5 flex justify-between">
                    <td className="py-2 text-[#1F172C] font-medium">Thursday</td>
                    <td className="py-2 text-[#5C506F]">8:30am – 5:00pm</td>
                  </tr>
                  <tr className="py-2.5 flex justify-between">
                    <td className="py-2 text-[#1F172C] font-medium">Friday</td>
                    <td className="py-2 text-[#5C506F]">8:30am – 5:00pm</td>
                  </tr>
                  <tr className="py-2.5 flex justify-between">
                    <td className="py-2 text-[#1F172C] font-medium">Saturday</td>
                    <td className="py-2 text-[#5C506F]">8:30am – 12:30pm</td>
                  </tr>
                  <tr className="py-2.5 flex justify-between text-[#9A6B5B]">
                    <td className="py-2 font-medium">Sunday</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Access Amenity Chips */}
            <div className="pt-4 border-t border-[#E2DAEB] space-y-2">
              <span className="text-[11px] font-bold text-[#5C506F] uppercase tracking-wider block">
                Practice Amenities
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#E2DAEB] text-[#1F172C]">
                  Free parking
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#E2DAEB] text-[#1F172C]">
                  Wheelchair access
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#E2DAEB] text-[#1F172C]">
                  Pram-friendly
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#E2DAEB] text-[#1F172C]">
                  Kids' play area
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
