import React from 'react';
import { MainTab, DomainType } from '../types';
import { ShoppingCart, Wifi, WifiOff, Sparkles, BookOpen, Layers, Dna, Bot, Shield, Video, GraduationCap, DollarSign } from 'lucide-react';
import { ENamadBadge } from './ENamadBadge';

interface HeaderProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  activeDomain: DomainType;
  setActiveDomain: (domain: DomainType) => void;
  cartCount: number;
  openCart: () => void;
  isOfflineMode: boolean;
  setIsOfflineMode: (offline: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  activeDomain,
  setActiveDomain,
  cartCount,
  openCart,
  isOfflineMode,
  setIsOfflineMode,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('overview')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
            CRISPR Tri-Domain Ecosystem
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs font-mono text-slate-400">
            .ir
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
          <button
            onClick={() => {
              setActiveDomain('crisprmart');
              setActiveTab('marketplace');
            }}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'marketplace' ? 'text-emerald-700 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
            }`}
          >
            crisprmart.ir
          </button>

          <button
            onClick={() => {
              setActiveDomain('aicrispr');
              setActiveTab('ai-agents');
            }}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'ai-agents' ? 'text-cyan-700 font-semibold underline underline-offset-8 decoration-2 decoration-cyan-600' : ''
            }`}
          >
            aicrispr.ir
          </button>

          <button
            onClick={() => {
              setActiveDomain('crisprtech');
              setActiveTab('digital-library');
            }}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'digital-library' ? 'text-indigo-700 font-semibold underline underline-offset-8 decoration-2 decoration-indigo-600' : ''
            }`}
          >
            crisprtech.ir
          </button>

          <button
            onClick={() => setActiveTab('edtech-analysis')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'edtech-analysis' ? 'text-emerald-700 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
            }`}
          >
            EdTech Analysis
          </button>

          <button
            onClick={() => setActiveTab('viral-scriptwriter')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'viral-scriptwriter' ? 'text-emerald-700 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
            }`}
          >
            Viral Scripts
          </button>

          <button
            onClick={() => setActiveTab('sgrna-tool')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'sgrna-tool' || activeTab === 'agro-simulator' || activeTab === 'vet-diagnostics'
                ? 'text-emerald-700 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600'
                : ''
            }`}
          >
            Offline Micro-Apps
          </button>

          <button
            onClick={() => setActiveTab('subscriptions')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'subscriptions' ? 'text-emerald-700 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
            }`}
          >
            Pricing & Plans
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Offline PWA Toggle Indicator */}
          <button
            onClick={() => setIsOfflineMode(!isOfflineMode)}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-mono transition-colors border cursor-pointer ${
              isOfflineMode
                ? 'border-amber-300 bg-amber-50 text-amber-800'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
            title="Toggle simulated Offline PWA Cache Mode"
          >
            {isOfflineMode ? (
              <>
                <WifiOff className="h-3.5 w-3.5 text-amber-600" />
                <span className="hidden sm:inline">PWA Offline Active</span>
              </>
            ) : (
              <>
                <Wifi className="h-3.5 w-3.5 text-emerald-600" />
                <span className="hidden sm:inline">Online (NIN Sync)</span>
              </>
            )}
          </button>

          {/* E-Namad Trust Badge */}
          <div className="hidden lg:block">
            <ENamadBadge compact />
          </div>

          {/* Cart Button with Count */}
          <button
            onClick={openCart}
            className="relative flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
