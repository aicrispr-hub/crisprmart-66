import React from 'react';
import { MainTab, DomainType } from '../types';
import { ENamadBadge } from './ENamadBadge';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_COMPLIANCE_INFO } from '../data/mockData';

interface FooterProps {
  setActiveTab: (tab: MainTab) => void;
  setActiveDomain: (domain: DomainType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, setActiveDomain }) => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white pt-12 pb-8 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          {/* Brand & Ecosystem */}
          <div className="space-y-3 md:col-span-1">
            <span className="text-base font-bold text-slate-900 block">
              CRISPR Tri-Domain Ecosystem
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Unified biotechnology infrastructure bridging e-commerce marketplace (crisprmart.ir), autonomous AI agents (aicrispr.ir), and digital scientific protocols (crisprtech.ir).
            </p>
            <div className="pt-2">
              <ENamadBadge />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Ecosystem Domains
            </span>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => {
                    setActiveDomain('crisprmart');
                    setActiveTab('marketplace');
                  }}
                  className="hover:text-emerald-700 cursor-pointer text-slate-600"
                >
                  crisprmart.ir — Marketplace & Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveDomain('aicrispr');
                    setActiveTab('ai-agents');
                  }}
                  className="hover:text-cyan-700 cursor-pointer text-slate-600"
                >
                  aicrispr.ir — Autonomous AI Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveDomain('crisprtech');
                    setActiveTab('digital-library');
                  }}
                  className="hover:text-indigo-700 cursor-pointer text-slate-600"
                >
                  crisprtech.ir — Scientific Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('subscriptions')}
                  className="hover:text-slate-900 cursor-pointer text-slate-600"
                >
                  Pricing & Shetab Subscriptions
                </button>
              </li>
            </ul>
          </div>

          {/* Tools & Analysis */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Tools & Deliverables
            </span>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => setActiveTab('edtech-analysis')}
                  className="hover:text-slate-900 cursor-pointer text-slate-600"
                >
                  EdTech Market Gap Analysis & 6 Modules
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('viral-scriptwriter')}
                  className="hover:text-slate-900 cursor-pointer text-slate-600"
                >
                  Viral Science Video Scriptwriter (Persian)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('sgrna-tool')}
                  className="hover:text-slate-900 cursor-pointer text-slate-600"
                >
                  Offline PWA sgRNA & PAM Targeter
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('agro-simulator')}
                  className="hover:text-slate-900 cursor-pointer text-slate-600"
                >
                  Agro-Genetics Drought & Salinity Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('vet-diagnostics')}
                  className="hover:text-slate-900 cursor-pointer text-slate-600"
                >
                  Veterinary Lateral Flow Biosensors
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Compliance & E-Commerce Law */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Legal & Biosafety Compliance
            </span>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Operating in full compliance with the E-Commerce Law of the Islamic Republic of Iran, Ministry of Industry, Mine & Trade (وزارت صمت), and National Biosafety Council (شورای ملی ایمنی زیستی).
            </p>
            <div className="text-[11px] font-mono text-slate-400 space-y-0.5">
              <div>Reg: {LEGAL_COMPLIANCE_INFO.registrationNumber}</div>
              <div>National ID: {LEGAL_COMPLIANCE_INFO.nationalId}</div>
              <div>Network: National Information Network (NIN)</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} crisprmart.ir · aicrispr.ir · crisprtech.ir. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>SDN-1 Research Exemption Validated</span>
            <span>·</span>
            <span>Shaparak Encrypted Payment Gateway</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
