import React from 'react';
import { ShieldCheck, CreditCard, HeartHandshake, CheckCircle2, HelpCircle } from 'lucide-react';

interface HealthFundsSectionProps {
  onOpenBooking: () => void;
}

export const HealthFundsSection: React.FC<HealthFundsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="health-funds" className="py-20 lg:py-28 bg-[#FAF9FD] border-b border-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B91372] uppercase tracking-wider">
            <span>Financial Peace of Mind</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Fees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2A4A] tracking-tight leading-tight text-balance">
            Health funds, preferred providers & flexible payment plans.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe cost should never stand between your family and excellent dental health. We maximize your private health fund rebates with on-the-spot HICAPS claims and offer interest-free payment options.
          </p>
        </div>

        {/* 4 Preferred Health Funds Highlight */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xs mb-12 text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#B91372] uppercase tracking-wider">Maximum Rebates</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2C2A4A]">Our Preferred Provider Network</h3>
              <p className="text-xs sm:text-sm text-slate-600">As a preferred provider, our patients receive the highest possible rebates and lower gap fees.</p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-[#F6EEF9] px-3 py-1.5 rounded-lg shrink-0">
              Instant HICAPS On-The-Spot Claiming
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Defence Health */}
            <div className="p-5 rounded-2xl bg-[#FAF9FD] border border-slate-100 flex flex-col items-center justify-center h-28 text-center hover:bg-white hover:shadow-sm transition-all">
              <img
                src="/images/defence-health.svg"
                alt="Defence Health Preferred Provider"
                className="max-h-12 max-w-[130px] object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-bold text-slate-700 mt-2">Defence Health</span>
            </div>

            {/* NIB */}
            <div className="p-5 rounded-2xl bg-[#FAF9FD] border border-slate-100 flex flex-col items-center justify-center h-28 text-center hover:bg-white hover:shadow-sm transition-all">
              <img
                src="/images/nib.png"
                alt="NIB First Choice Preferred Provider"
                className="max-h-10 max-w-[110px] object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-bold text-slate-700 mt-2">NIB Network</span>
            </div>

            {/* CBHS */}
            <div className="p-5 rounded-2xl bg-[#FAF9FD] border border-slate-100 flex flex-col items-center justify-center h-28 text-center hover:bg-white hover:shadow-sm transition-all">
              <span className="text-xl font-black text-[#2C2A4A] tracking-wider">CBHS</span>
              <span className="text-xs font-bold text-slate-700 mt-1">CBHS Dental Choice</span>
            </div>

            {/* TUH */}
            <div className="p-5 rounded-2xl bg-[#FAF9FD] border border-slate-100 flex flex-col items-center justify-center h-28 text-center hover:bg-white hover:shadow-sm transition-all">
              <img
                src="/images/tuh.svg"
                alt="TUH Preferred Provider"
                className="max-h-10 max-w-[110px] object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-bold text-slate-700 mt-2">TUH Health Fund</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Government & Community Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
          
          {/* CDBS Medicare */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F0F4EE] flex items-center justify-center text-[#7B8F74] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#2C2A4A] mb-2">Medicare CDBS (Bulk-Billed)</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Eligible children aged 2–17 receive up to $1,095+ in dental benefits over two calendar years. We 100% bulk-bill checkups, cleans, x-rays, fillings, and fissure sealants with zero out-of-pocket costs.
              </p>
            </div>
            <span className="text-xs font-bold text-[#7B8F74]">100% Bulk-Billed for Eligible Kids</span>
          </div>

          {/* Smile.com.au Network */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6EEF9] flex items-center justify-center text-[#B91372] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#2C2A4A] mb-2">Smile.com.au Partner Practice</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                As a participating Smile.com.au dental practice, members benefit from guaranteed reduced dental fees capped up to 40% off across all general and major dental procedures.
              </p>
            </div>
            <span className="text-xs font-bold text-[#B91372]">Reduced & Capped Dental Fees</span>
          </div>

          {/* DVA Gold Card & Veterans */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF9FD] flex items-center justify-center text-[#2C2A4A] mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#2C2A4A] mb-2">Department of Veterans’ Affairs (DVA)</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                We proudly support our veterans and defense personnel. Eligible DVA cardholders are fully covered for clinically necessary dental treatments with direct billing.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-700">Direct DVA Billing Available</span>
          </div>

        </div>

        {/* Flexible Payment Plans Strip */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-lg font-bold text-[#2C2A4A]">Flexible Payment Options & Buy-Now-Pay-Later</h4>
              <p className="text-xs sm:text-sm text-slate-600">Spread the cost of treatment over time with zero interest financing options.</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="text-xs font-bold text-[#B91372] hover:underline cursor-pointer"
            >
              Inquire About Payment Plans →
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-2">
            <div className="h-9 px-3 bg-slate-50 border border-slate-200/60 rounded-lg flex items-center">
              <img src="/images/afterpay.png" alt="Afterpay" className="h-5 w-auto object-contain" />
            </div>
            <div className="h-9 px-3 bg-slate-50 border border-slate-200/60 rounded-lg flex items-center">
              <img src="/images/zip.png" alt="Zip Money" className="h-5 w-auto object-contain" />
            </div>
            <div className="h-9 px-3 bg-slate-50 border border-slate-200/60 rounded-lg flex items-center">
              <img src="/images/humm.jpg" alt="Humm" className="h-6 w-auto object-contain" />
            </div>
            <div className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/60">
              SuperCare (Early Super Access for Major Dental)
            </div>
            <div className="text-xs font-medium text-slate-500">
              All Major Cards · Amex · JCB · EFTPOS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
