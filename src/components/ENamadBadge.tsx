import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Award, FileText, CheckCircle2, X } from 'lucide-react';
import { LEGAL_COMPLIANCE_INFO } from '../data/mockData';

interface ENamadBadgeProps {
  compact?: boolean;
}

export const ENamadBadge: React.FC<ENamadBadgeProps> = ({ compact = false }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`group flex items-center gap-2 rounded border border-slate-200 bg-white p-1.5 transition-colors hover:border-emerald-500 hover:bg-emerald-50/30 text-left cursor-pointer ${
          compact ? 'px-2 py-1' : 'px-3 py-1.5'
        }`}
        title="Verified E-Namad Trust Seal & Biosafety Certificate"
      >
        <div className="relative flex h-7 w-7 items-center justify-center rounded bg-emerald-600 text-white font-bold text-xs shadow-xs">
          <ShieldCheck className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-amber-400 text-[8px] font-bold text-slate-900">
            ★2
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 group-hover:text-emerald-700">
            <span>اینماد ۲ ستاره رسمی</span>
            <span className="text-[10px] text-emerald-600 font-mono">E-Namad Verified</span>
          </div>
          {!compact && (
            <span className="text-[10px] text-slate-500">
              مجوز تجارت الکترونیک و ایمنی زیستی
            </span>
          )}
        </div>
      </button>

      {/* Official Certificate Verification Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  شناسنامه اصالت و نماد اعتماد الکترونیکی (اینماد)
                </h3>
                <p className="text-xs text-slate-500">
                  Electronic Commerce Trust Certificate & Legal Biotechnology Status
                </p>
              </div>
            </div>

            <div className="my-4 space-y-3 text-xs text-slate-600">
              <div className="grid grid-cols-2 gap-2 rounded-lg bg-slate-50 p-3 font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">BUSINESS IDENTIFIER:</span>
                  <span className="font-semibold text-slate-800">{LEGAL_COMPLIANCE_INFO.eNamadCode}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">COMMERCIAL REGISTRATION:</span>
                  <span className="font-semibold text-slate-800">{LEGAL_COMPLIANCE_INFO.registrationNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">NATIONAL COMPANY ID:</span>
                  <span className="font-semibold text-slate-800">{LEGAL_COMPLIANCE_INFO.nationalId}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">SHAPARAK GATEWAY:</span>
                  <span className="font-semibold text-emerald-700">Authorized & Encrypted</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-800">Ministry of Industry, Mine and Trade (وزارت صمت):</span>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      Fully registered e-commerce store authorized to sell biological reagents, digital bioinformatics tools, and lab kits under Iranian E-Commerce Law.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-800">National Biosafety Council Compliance (شورای ملی ایمنی زیستی):</span>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      All CRISPR reagents and design guides adhere strictly to Class-I research protocols and SDN-1 guidelines. Reagents are labeled strictly for research and veterinary in vitro diagnostics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-800">Health & Biotech Advertising Code (مقررات تبلیغات سلامت):</span>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      Zero unverified clinical claims. Clear distinction between research-grade tools and human medical therapies in compliance with Iranian FDA regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-[11px] text-slate-400 font-mono">
                HOSTED ON NATIONAL NETWORK (NIN)
              </span>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
