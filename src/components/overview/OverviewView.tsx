import React from 'react';
import { MainTab, DomainType, ProductKit } from '../../types';
import { ECOSYSTEM_DOMAINS, LAB_HERO_IMAGE, WHEAT_DROUGHT_IMAGE, AI_AGENT_IMAGE } from '../../data/mockData';
import { ArrowRight, ShieldCheck, CheckCircle2, Cpu, Library, ShoppingCart, Zap, FileCode2, Award, Users } from 'lucide-react';
import { ENamadBadge } from '../ENamadBadge';

interface OverviewViewProps {
  setActiveTab: (tab: MainTab) => void;
  setActiveDomain: (domain: DomainType) => void;
  onAddToCart: (kit: ProductKit) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  setActiveTab,
  setActiveDomain,
  onAddToCart,
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800">
                <span className="font-semibold">IRANIAN AGRO-VETERINARY GENOMICS PLATFORM</span>
                <span>·</span>
                <span>E-NAMAD 2-STAR ACCREDITED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance leading-tight">
                Architected for Precision Biotechnology Across the Iranian Plateau.
              </h1>

              <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                A unified ecosystem merging an official E-Namad certified e-commerce marketplace (
                <strong className="text-slate-800">crisprmart.ir</strong>), autonomous polyploid AI agents (
                <strong className="text-slate-800">aicrispr.ir</strong>), and an open-access scientific protocol archive (
                <strong className="text-slate-800">crisprtech.ir</strong>). Designed to break research sanctions with offline PWA tools, local Shetab payments, and validated field kits.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveDomain('crisprmart');
                    setActiveTab('marketplace');
                  }}
                  className="flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Explore crisprmart.ir Marketplace</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={() => {
                    setActiveDomain('aicrispr');
                    setActiveTab('ai-agents');
                  }}
                  className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Cpu className="h-4 w-4 text-cyan-600" />
                  <span>Launch AI Agents (aicrispr.ir)</span>
                </button>

                <button
                  onClick={() => setActiveTab('sgrna-tool')}
                  className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50/50 px-4 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100/60 transition-colors cursor-pointer"
                >
                  <Zap className="h-4 w-4 text-emerald-600" />
                  <span>Launch Offline PWA sgRNA Tool</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>100% E-Namad & Shaparak Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-emerald-600" />
                  <span>National Biosafety Council SDN-1 Clearance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileCode2 className="h-4 w-4 text-emerald-600" />
                  <span>Zero-Latency Offline PWA Architecture</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Image Container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src={LAB_HERO_IMAGE}
                  alt="Iranian Biotechnology Research Laboratory"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                    <span>VERIFIED WET-LAB WORKFLOW</span>
                    <span>TEHRAN & SHIRAZ HUBS</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-100">
                    Hexaploid Wheat TaDREB2 Golden Gate Assembly Station
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Physical molecular cloning kits designed for Iranian agronomy, dispatched with cold-chain protection within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tri-Domain Architecture Deep Dive */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6">
          <div className="text-xs font-mono uppercase text-slate-500">SYSTEM ARCHITECTURE</div>
          <h2 className="text-2xl font-bold text-slate-900">
            Strategic Specialization Across Three Interconnected Domains
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Each domain solves a dedicated commercial, computational, or legal requirement while sharing a single unified authentication and billing core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ECOSYSTEM_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-slate-900">
                    {domain.domain}
                  </span>
                  <span className="text-xs font-medium text-slate-500 font-mono">
                    {domain.titleFa}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-800">
                    {domain.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-700 mt-0.5">
                    {domain.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {domain.description}
                </p>

                <div className="rounded-lg bg-slate-50 p-3 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Inventory/Scope:</span>
                    <span className="font-semibold text-slate-800">{domain.stats.products || domain.stats.activeModels || domain.stats.documents}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Operational Mode:</span>
                    <span className="font-semibold text-slate-800">{domain.stats.delivery || domain.stats.offlineCapability || domain.stats.accessMode}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {domain.complianceBadge}
                </span>
                <button
                  onClick={() => {
                    setActiveDomain(domain.id as DomainType);
                    if (domain.id === 'crisprmart') setActiveTab('marketplace');
                    else if (domain.id === 'aicrispr') setActiveTab('ai-agents');
                    else if (domain.id === 'crisprtech') setActiveTab('digital-library');
                  }}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700 cursor-pointer"
                >
                  <span>Enter</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audiences & Pain Points Summary */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase text-emerald-700">MARKET FOCUS & PENETRATION</div>
              <h2 className="text-2xl font-bold text-slate-900">
                Solving the 5 Critical Roadblocks of Iranian Biotech
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Between foreign exchange constraints, international payment gate closures, and fragile internet connectivity, Iranian researchers have struggled to transition theoretical knowledge into commercial field crops and livestock diagnostics.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Shetab Bank Gateway Integration:</strong> Full Rial & Toman pricing without foreign credit card hurdles.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Offline PWA Bio-Engines:</strong> Unaffected by international internet disruptions or latency.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Polyploid Native Crops:</strong> Algorithms tailored for Iranian hexaploid wheat, pistachio, and sheep breeds.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('edtech-analysis')}
                  className="flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
                >
                  <span>Read Full EdTech Market Gap Analysis & Curriculum</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Users className="h-4 w-4 text-emerald-600" />
                  <span>Graduate Students & Academia</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Stuck with theoretical webinars and blocked certificates. We provide verifiable accredited courses and affordable, subsidized master-mix packs.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Zap className="h-4 w-4 text-cyan-600" />
                  <span>Agricultural Seed Breeders</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Grappling with groundwater depletion in central Iran. We deliver dry-lab trait simulators and transgene-free SDN-1 protocols for wheat and barley.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-indigo-600" />
                  <span>Veterinary Diagnostic Labs</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Need 15-minute field strips for Avian Flu and Foot-and-Mouth Disease without requiring 150-million Toman thermal cyclers in remote farms.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Award className="h-4 w-4 text-amber-600" />
                  <span>Commercial Biotech Startups</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Require official E-Namad trust verification and National Biosafety Council dossier drafting to sell online compliantly in Iran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Tools Feature Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500">OFFLINE PWA & ONLINE PLUGINS</div>
            <h2 className="text-2xl font-bold text-slate-900">
              Interactive Micro-SaaS Applications Suite
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('subscriptions')}
            className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
          >
            View Subscription & Licensing Tiers →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 hover:border-emerald-300 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Offline sgRNA & PAM Targeter
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero-latency Cas9 (NGG) and Cas12a (TTTV) guide designer with Doench scoring, GC calculation, and Golden Gate primer synthesis export.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('sgrna-tool')}
              className="w-full rounded-lg bg-slate-900 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Launch sgRNA Tool
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 hover:border-cyan-300 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-800">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Agro-Genetics Trait Simulator
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Simulate drought and salinity stress on edited wheat (TaDREB2) vs wild-type across soil water potentials (-0.2 to -2.0 MPa).
              </p>
            </div>
            <button
              onClick={() => setActiveTab('agro-simulator')}
              className="w-full rounded-lg bg-slate-900 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Launch Trait Simulator
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 hover:border-indigo-300 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-800">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Veterinary Lateral Flow Configurator
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Configure Cas12a/Cas13a field detection cassettes for Avian Flu (H9N2), Bovine BVD, and FMD with instant pricing in Tomans.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('vet-diagnostics')}
              className="w-full rounded-lg bg-slate-900 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Launch Vet Configurator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
