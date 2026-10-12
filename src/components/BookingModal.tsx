import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, ExternalLink, ShieldAlert, Sparkles, User, Mail, MessageSquare, Clock } from 'lucide-react';
import { CLINIC_INFO, DENTISTS } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDoctor?: string;
  preSelectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedDoctor = '',
  preSelectedService = '',
}) => {
  const [tab, setTab] = useState<'request' | 'direct'>('request');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preSelectedService || '$249 New Patient Special');
  const [doctor, setDoctor] = useState(preSelectedDoctor || 'First Available Dentist');
  const [preferredTime, setPreferredTime] = useState('Morning (8:30 AM – 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preSelectedDoctor) setDoctor(preSelectedDoctor);
    if (preSelectedService) setService(preSelectedService);
  }, [preSelectedDoctor, preSelectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setErrorMessage('Please provide a valid Australian telephone number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Demo-safe submission
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E2DAEB] text-left p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="space-y-1.5 mb-6 pr-8">
              <span className="text-[11px] font-bold text-[#533675] uppercase tracking-wider bg-[#EBE3F2] px-2.5 py-1 rounded-md inline-block">
                Middle Ridge Appointments
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F172C] tracking-tight">
                Book your dental visit
              </h3>
              <p className="text-xs sm:text-sm text-[#5C506F]">
                Choose between booking directly in the live clinic calendar or sending an enquiry to the Southridge reception team.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="grid grid-cols-2 p-1 bg-[#FAF8FC] rounded-xl mb-6 border border-[#E2DAEB]">
              <button
                type="button"
                onClick={() => setTab('request')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  tab === 'request'
                    ? 'bg-white text-[#1F172C] shadow-xs'
                    : 'text-[#5C506F] hover:text-[#1F172C]'
                }`}
              >
                1. Appointment Request
              </button>
              <button
                type="button"
                onClick={() => setTab('direct')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  tab === 'direct'
                    ? 'bg-white text-[#1F172C] shadow-xs'
                    : 'text-[#5C506F] hover:text-[#1F172C]'
                }`}
              >
                2. Live Calendar Portal
              </button>
            </div>

            {tab === 'direct' ? (
              <div className="space-y-6 py-4 text-center">
                <div className="p-6 rounded-2xl bg-[#FAF8FC] border border-[#E2DAEB] space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EBE3F2] text-[#533675] flex items-center justify-center mx-auto">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-xl font-normal text-[#1F172C]">Official Live Booking System</h4>
                  <p className="text-xs sm:text-sm text-[#5C506F] max-w-sm mx-auto">
                    Middle Ridge Family Dental utilizes the <strong>Dentr Cloud Portal</strong> for real-time live appointment scheduling with Dr. Anish, Dr. Neha, Dr. Pooja & Dr. Erick.
                  </p>
                  <div className="pt-2">
                    <a
                      href={CLINIC_INFO.officialBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-all shadow-md hover:shadow-lg"
                    >
                      <span>Open Live Dentr Booking Portal</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Links directly to: middleridgefamilydental.dentr.net
                  </p>
                </div>

                <div className="pt-2 text-xs text-[#5C506F] flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#533675]" />
                  <span>Or call reception: <strong>(07) 4659 7347</strong></span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Treatment Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#1F172C] uppercase tracking-wider mb-1.5">
                    Select Treatment or Reason
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E2DAEB] text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#533675] focus:outline-none"
                  >
                    <option value="$249 New Patient Special">$249 New Patient Special (Exam, Clean, X-Rays, Fluoride)</option>
                    <option value="Comprehensive Checkup & Gentle Clean">Comprehensive Checkup & Gentle Clean</option>
                    <option value="Same-Day Emergency Dental / Toothache">Same-Day Emergency Dental / Severe Toothache</option>
                    <option value="Children’s Dentistry & Bulk-Billed CDBS">Children’s Dentistry (CDBS Bulk-Billed)</option>
                    <option value="Nitrous Oxide (Happy Gas) Sedation Visit">Nitrous Oxide (Happy Gas) Calming Visit</option>
                    <option value="Clear Aligners (Invisalign / Spark / Angel)">Clear Aligners Consultation (Invisalign / Spark)</option>
                    <option value="TMJ Disorders & Jaw Pain / Night Guard">TMJ Jaw Pain & Custom Night Guard</option>
                    <option value="Root Canal Therapy Consultation">Root Canal Therapy Consultation</option>
                    <option value="Crowns, Bridges or Dental Implants">Crowns, Bridges or Dental Implants</option>
                    <option value="Cosmetic Whitening or Veneers">Teeth Whitening or Porcelain Veneers</option>
                  </select>
                </div>

                {/* Preferred Clinician */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#1F172C] uppercase tracking-wider mb-1.5">
                      Preferred Dentist
                    </label>
                    <select
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2DAEB] text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#533675] focus:outline-none"
                    >
                      <option value="First Available Dentist">First Available Dentist</option>
                      {DENTISTS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.role})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F172C] uppercase tracking-wider mb-1.5">
                      Preferred Time of Day
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2DAEB] text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#533675] focus:outline-none"
                    >
                      <option value="Morning (8:30 AM – 12:00 PM)">Morning (8:30 AM – 12:00 PM)</option>
                      <option value="Early Afternoon (12:00 PM – 3:00 PM)">Early Afternoon (12:00 PM – 3:00 PM)</option>
                      <option value="Late Afternoon (3:00 PM – 5:00 PM)">Late Afternoon (3:00 PM – 5:00 PM)</option>
                      <option value="Saturday Morning (8:30 AM – 12:30 PM)">Saturday Morning (8:30 AM – 12:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Patient Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-[#1F172C] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2DAEB] text-xs sm:text-sm focus:ring-2 focus:ring-[#533675] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F172C] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0412 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E2DAEB] text-xs sm:text-sm focus:ring-2 focus:ring-[#533675] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F172C] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E2DAEB] text-xs sm:text-sm focus:ring-2 focus:ring-[#533675] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F172C] uppercase tracking-wider mb-1.5">
                    Notes or Specific Concerns (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. A bit nervous, would love roof-TV streaming or information on Happy Gas..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E2DAEB] text-xs sm:text-sm focus:ring-2 focus:ring-[#533675] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Submit Appointment Request
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  Private pitch demo concept. Submissions are simulated for preview purposes and are not stored or transmitted externally.
                </p>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#EBE3F2] text-[#533675] flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#533675] bg-[#EBE3F2] px-3 py-1 rounded-full uppercase tracking-wider">
                Request Registered (Demo Concept)
              </span>
              <h3 className="font-display text-2xl font-normal text-[#1F172C]">
                Thank you, {fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-[#5C506F] max-w-sm mx-auto">
                In production, Middle Ridge Family Dental reception will contact you at <strong>{phone}</strong> to confirm your slot.
              </p>
            </div>

            {/* Simulated Booking Summary */}
            <div className="bg-[#FAF8FC] rounded-2xl p-5 border border-[#E2DAEB] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-[#E2DAEB] pb-2">
                <span className="text-[#5C506F]">Service:</span>
                <span className="font-bold text-[#1F172C]">{service}</span>
              </div>
              <div className="flex justify-between border-b border-[#E2DAEB] pb-2">
                <span className="text-[#5C506F]">Dentist:</span>
                <span className="font-bold text-[#1F172C]">{doctor}</span>
              </div>
              <div className="flex justify-between border-b border-[#E2DAEB] pb-2">
                <span className="text-[#5C506F]">Time Preference:</span>
                <span className="font-bold text-[#1F172C]">{preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C506F]">Location:</span>
                <span className="font-semibold text-[#1F172C]">Shop 3, Southridge Centre, Middle Ridge</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CLINIC_INFO.officialBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-xs text-white bg-[#533675] hover:bg-[#3D275A] transition-colors"
              >
                <span>Visit Live Booking Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-xs text-[#1F172C] bg-[#FAF8FC] hover:bg-[#EBE3F2] transition-colors"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
