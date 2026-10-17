import React from 'react';
import { DomainType, MainTab } from '../types';
import { ECOSYSTEM_DOMAINS } from '../data/mockData';
import { ExternalLink, ShieldCheck, Cpu, Library, ShoppingBag, ArrowRight } from 'lucide-react';

interface DomainSwitcherProps {
  activeDomain: DomainType;
  setActiveDomain: (domain: DomainType) => void;
  setActiveTab: (tab: MainTab) => void;
}

export const DomainSwitcher: React.FC<DomainSwitcherProps> = ({
  activeDomain,
  setActiveDomain,
  setActiveTab,
}) => {
  return (
    <div className="w-full border-b border-slate-200 bg-slate-50/70 py-4 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>IRANIAN BIOTECHNOLOGY TRI-DOMAIN ARCHITECTURE</span>
              <span>·</span>
              <span className="text-emerald-700 font-semibold">ECOSYSTEM HUB</span>
            </div>
            <h2 className="text-sm font-semibold text-slate-800 mt-0.5">
              Three Unified Domains — Physical Marketplace, Autonomous AI Agents & Digital Archive
            </h2>
          </div>

          {/* Quick Tab Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {ECOSYSTEM_DOMAINS.map((dom) => {
              const isActive = activeDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  onClick={() => {
                    setActiveDomain(dom.id as DomainType);
                    if (dom.id === 'crisprmart') setActiveTab('marketplace');
                    else if (dom.id === 'aicrispr') setActiveTab('ai-agents');
                    else if (dom.id === 'crisprtech') setActiveTab('digital-library');
                  }}
                  className={`flex items-center justify-between gap-3 rounded-lg border p-2.5 text-left transition-all cursor-pointer ${
                    isActive
                      ? dom.id === 'crisprmart'
                        ? 'border-emerald-500 bg-white shadow-xs ring-1 ring-emerald-500'
                        : dom.id === 'aicrispr'
                        ? 'border-cyan-500 bg-white shadow-xs ring-1 ring-cyan-500'
                        : 'border-indigo-500 bg-white shadow-xs ring-1 ring-indigo-500'
                      : 'border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {dom.id === 'crisprmart' && (
                      <div className="flex h-7 w-7 items-center justify-center rounded bg-emerald-100 text-emerald-700">
                        <ShoppingBag className="h-4 w-4" />
                      </div>
                    )}
                    {dom.id === 'aicrispr' && (
                      <div className="flex h-7 w-7 items-center justify-center rounded bg-cyan-100 text-cyan-700">
                        <Cpu className="h-4 w-4" />
                      </div>
                    )}
                    {dom.id === 'crisprtech' && (
                      <div className="flex h-7 w-7 items-center justify-center rounded bg-indigo-100 text-indigo-700">
                        <Library className="h-4 w-4" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 font-mono">
                          {dom.domain}
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate max-w-[150px]">
                        {dom.titleFa}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`h-3.5 w-3.5 ${isActive ? 'text-slate-900' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
