import React, { useMemo } from 'react';
import { Calendar, Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart, Sparkles, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactFooterProps {
  onOpenBooking: () => void;
  onOpenPitchModal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenBooking, onOpenPitchModal }) => {
  // Calculate live clinic opening status based on Brisbane / Queensland AEST time (UTC+10)
  const clinicStatus = useMemo(() => {
    try {
      const now = new Date();
      // Get current day and hour in Australia/Brisbane timezone
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
      const decimalTime = hour + minute / 60;

      if (weekday === 'Sunday') {
        return { isOpen: false, text: 'Closed today (Reopens Monday 8:30 AM)' };
      }
      if (weekday === 'Saturday') {
        if (decimalTime >= 8.5 && decimalTime <= 12.5) {
          return { isOpen: true, text: 'Open now (Closes 12:30 PM)' };
        }
        return { isOpen: false, text: 'Closed (Reopens Monday 8:30 AM)' };
      }
      // Monday to Friday
      if (decimalTime >= 8.5 && decimalTime <= 17.0) {
        return { isOpen: true, text: 'Open now (Closes 5:00 PM)' };
      }
      return { isOpen: false, text: 'Currently closed (Opens 8:30 AM)' };
    } catch {
      return { isOpen: true, text: 'Mon–Fri 8:30am–5pm · Sat 8:30am–12:30pm' };
    }
  }, []);

  return (
    <div>
      {/* 11. Strong Final CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#2C2A4A] via-[#353357] to-[#2C2A4A] text-white text-center relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,19,114,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B91372] text-white mx-auto">
            <Heart className="w-3.5 h-3.5" />
            <span>Gentle, Unhurried Family Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance">
            Let’s make your next dental visit a comfortable one.
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you need a routine family checkup, gentle anxiety-free sedation, or prompt emergency pain relief, our team at Southridge is ready to care for you.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#B91372] hover:bg-[#9F0F61] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-[#2C2A4A] bg-white hover:bg-slate-100 transition-colors shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B91372]" />
              <span>Call Our Team: (07) 4659 7347</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <span>✓ Ample free parking at Southridge</span>
            <span>✓ Ceiling TVs in every room</span>
            <span>✓ Happy Gas available</span>
            <span>✓ $249 New Patient Special</span>
          </div>
        </div>
      </section>

      {/* 12. Contact & Location Information */}
      <section id="contact" className="py-16 lg:py-20 bg-white text-slate-800 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
            
            {/* Column 1: Clinic Coordinates & Live Status */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#B91372] uppercase tracking-wider">
                  Southridge Centre, Toowoomba
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C2A4A] tracking-tight mt-1">
                  Middle Ridge Family Dental
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Conveniently situated right beside FoodWorks in the Southridge shopping complex with step-free entrance and effortless parking.
                </p>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <span className={`w-2 h-2 rounded-full ${clinicStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                <span>{clinicStatus.text}</span>
              </div>

              {/* Contact Direct Links */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-[#B91372] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">{CLINIC_INFO.address}</span>
                    <span className="text-slate-500">{CLINIC_INFO.suburb} {CLINIC_INFO.state} {CLINIC_INFO.postcode}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">Beside FoodWorks · Pram & wheelchair accessible</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-[#B91372] shrink-0" />
                  <div>
                    <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="font-semibold hover:text-[#B91372]">
                      {CLINIC_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-400 ml-2">or 0449 936 809</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-[#B91372] shrink-0" />
                  <a href={`mailto:${CLINIC_INFO.email}`} className="font-semibold hover:text-[#B91372] truncate">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/place/Middle+Ridge+Family+Dental/@-27.6037,151.9683,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#2C2A4A] bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#B91372]" />
                  <span>Get Driving Directions</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#B91372] hover:bg-[#9F0F61] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>

            {/* Column 2: Hours Table */}
            <div className="lg:col-span-3 bg-[#FAF9FD] rounded-2xl p-6 border border-slate-100 text-xs">
              <h4 className="font-bold text-[#2C2A4A] text-sm mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B91372]" />
                <span>Practice Opening Hours</span>
              </h4>
              <div className="space-y-2.5 divide-y divide-slate-100">
                {CLINIC_INFO.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center pt-2 first:pt-0">
                    <span className="font-semibold text-slate-700">{h.day}</span>
                    <span className={h.isOpen ? 'text-slate-600 font-medium' : 'text-rose-500 font-semibold'}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500 leading-normal">
                Appointments required. Early morning & evening slots available upon inquiry.
              </div>
            </div>

            {/* Column 3: Visual Map Card */}
            <div className="lg:col-span-4 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xs relative aspect-[4/3] flex flex-col justify-end p-4">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=-27.6037,151.9683&zoom=15&size=600x400&sensor=false')" }}>
                {/* Fallback styling if map static key is unavailable */}
                <div className="w-full h-full bg-[#E5E9EE] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#B91372] mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-[#2C2A4A] text-sm">Southridge Shopping Centre</h5>
                  <p className="text-xs text-slate-600 mt-1">Shop 3, 343 Mackenzie St, Middle Ridge</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Next to FoodWorks</p>
                </div>
              </div>

              <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#2C2A4A]">Navigate to Clinic</p>
                  <p className="text-[11px] text-slate-500">Google Maps Navigation</p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Middle+Ridge+Family+Dental/@-27.6037,151.9683,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#B91372] hover:bg-[#9F0F61]"
                >
                  Directions
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Legal & Pitch Identity */}
      <footer className="bg-[#2C2A4A] text-white py-12 px-4 sm:px-6 lg:px-8 text-left text-xs border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="Middle Ridge Family Dental"
                className="h-9 w-auto rounded bg-white p-1"
              />
              <div>
                <span className="font-bold text-base tracking-tight block">Middle Ridge Family Dental</span>
                <span className="text-white/60 text-xs">Caring Dentist Toowoomba · Southridge Shopping Centre</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-white/80">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#comfort" className="hover:text-white transition-colors">Patient Comfort</a>
              <a href="#team" className="hover:text-white transition-colors">Dental Team</a>
              <a href="#offer" className="hover:text-white transition-colors">$249 Special</a>
              <a href="#health-funds" className="hover:text-white transition-colors">Health Funds</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/60 text-[11px] leading-relaxed">
            <div>
              <p className="mb-2">
                <strong>Medical Disclaimer:</strong> Information published on this website is for educational and general informational purposes only and does not constitute individual clinical diagnosis or medical advice. Please consult Dr. Anish, Dr. Neha, Dr. Pooja, Dr. Erick or your registered dental practitioner to discuss your specific oral health needs.
              </p>
              <p>
                © {new Date().getFullYear()} Middle Ridge Family Dental. All rights reserved.
              </p>
            </div>

            <div className="space-y-2 md:text-right">
              <div className="inline-block p-3 rounded-xl bg-white/5 border border-white/10 text-left md:text-right">
                <p className="font-semibold text-white">Independent Redesign Concept Pitch</p>
                <p className="text-white/70">
                  Crafted as an unofficial, award-calibre digital redesign showcasing human-centered healthcare UX, genuine clinic photography, and high-conversion patient workflows.
                </p>
                <button
                  onClick={onOpenPitchModal}
                  className="mt-2 text-xs font-bold text-[#f6e1ff] hover:text-white underline cursor-pointer"
                >
                  View Agency Pitch Case Study & Transformation Notes →
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
