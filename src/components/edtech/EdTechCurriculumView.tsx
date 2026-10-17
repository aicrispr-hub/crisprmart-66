import React, { useState } from 'react';
import { 
  INTERNATIONAL_COURSE_COMPARISONS, 
  IRANIAN_MARKET_PAIN_POINTS, 
  PROPOSED_COURSE_MODULES 
} from '../../data/mockData';
import { CourseModule, MainTab, DomainType } from '../../types';
import { 
  GraduationCap, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Award,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface EdTechCurriculumViewProps {
  setActiveTab: (tab: MainTab) => void;
  setActiveDomain: (domain: DomainType) => void;
}

export const EdTechCurriculumView: React.FC<EdTechCurriculumViewProps> = ({
  setActiveTab,
  setActiveDomain,
}) => {
  const [selectedModule, setSelectedModule] = useState<CourseModule>(PROPOSED_COURSE_MODULES[0]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-12">
      {/* Executive Header */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span>EDTECH MARKET ANALYSIS & CURRICULUM ARCHITECTURE</span>
            <span>·</span>
            <span>IRANIAN BIOTECHNOLOGY ECOSYSTEM</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Market Gap Analysis & Localized Applied CRISPR Curriculum
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            A comprehensive strategic evaluation comparing top international Ivy League / edX courses against the Iranian educational vacuum. Solves the theory-to-wet-lab gap by bridging offline AI Dry-Lab PWA engines on <strong className="text-cyan-400">aicrispr.ir</strong> with physical Golden Gate kits on <strong className="text-emerald-400">crisprmart.ir</strong>.
          </p>
        </div>
      </div>

      {/* Part 1: Market Gap Analysis */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase text-slate-500">SECTION 01 · MARKET RESEARCH</div>
          <h2 className="text-2xl font-bold text-slate-900">
            Market Gap Analysis: Global Gene Editing Trends vs. Iranian Educational Vacuum
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            While global biotechnology education has shifted toward automated Dry-Lab computational workflows, CRISPR prime-editing, and non-transgenic crops, the Iranian market remains constrained by theoretical lectures and severe procurement isolation.
          </p>
        </div>

        {/* Gap Analysis Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-5 space-y-2">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase font-mono">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Critical Gaps in Current Iranian Offerings</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">›</span>
                <span><strong>The "Zero-Reagent" Dilemma:</strong> University biology curricula in Tehran, Shiraz, and Isfahan teach 90% theory. Students complete master's theses without holding a real Cas9 pipette due to prohibitive import channels.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">›</span>
                <span><strong>Isolated Payment Systems:</strong> International platforms (edX, Coursera) require Mastercard/Visa and charge $200–$300 USD (~18–27 million Tomans), locking out 95% of domestic Iranian researchers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">›</span>
                <span><strong>Neglect of Polyploid Agro-Genomics:</strong> Iranian staple crops (Bread wheat, hexaploid AABBDD) require specialized subgenome discrimination algorithms that generic human-focused MOOCs completely ignore.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">›</span>
                <span><strong>Fragmented Cloud Bioinformatics:</strong> Web-only tools (Benchling, NCBI) crash or stall during frequent internet throttling and bandwidth restrictions in regional research hubs.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase font-mono">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>How Our Ecosystem Fills the Gaps</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Closed-Loop Theory-to-Kit Bridge:</strong> Theory learned on <strong className="text-indigo-900">crisprtech.ir</strong> links directly to pre-configured Golden Gate cloning kits on <strong className="text-emerald-800">crisprmart.ir</strong> delivered via local courier.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Native Toman & Shetab Banking:</strong> 100% domestic payment integration, official tax invoices, and institutional group discounts without foreign credit cards.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Offline PWA Computational Engines:</strong> Zero-latency WebAssembly and client-side Cas9/Cas12 PAM targeters that work seamlessly even during complete disconnection from international gateways.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>National Biosafety Legal Clearance:</strong> Step-by-step guidance on securing SDN-1 non-transgenic approval from the Iranian National Biosafety Council.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Part 2: Top 3 International Courses vs. Iranian Reality */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase text-slate-500">SECTION 02 · BENCHMARK COMPARISON</div>
          <h2 className="text-2xl font-bold text-slate-900">
            Top 3 International Courses (Coursera / edX) vs. Available Local Reality
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Analyzing why elite global educational courses fail to produce tangible laboratory outcomes inside Iran without localized infrastructural support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INTERNATIONAL_COURSE_COMPARISONS.map((course, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{course.institution}</span>
                  <span className="font-semibold text-slate-800">{course.platform}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {course.courseName}
                </h3>

                <div className="rounded-lg bg-slate-50 p-2.5 font-mono text-xs flex justify-between">
                  <span className="text-slate-500">International Price:</span>
                  <span className="font-bold text-slate-900">${course.costUsd} USD (~{(course.costUsd * 90000).toLocaleString('fa-IR')} Toman)</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase font-mono">Academic Strengths:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {course.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-slate-400">·</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-rose-700 uppercase font-mono">Iranian Market Blockers:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {course.criticalLimitationsForIran.map((l, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-rose-900/80">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono flex items-center justify-between">
                <span className="text-slate-400">IRAN ACCESSIBILITY:</span>
                <span className="font-bold text-amber-700">{course.iranianAccessibilityScore} / 10.0</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 3: 5 Specific Iranian Pain Points */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase text-slate-500">SECTION 03 · RESEARCHER ROADBLOCKS</div>
          <h2 className="text-2xl font-bold text-slate-900">
            5 Specific Pain Points Faced by Iranian Biotech Students & Researchers
          </h2>
        </div>

        <div className="space-y-4">
          {IRANIAN_MARKET_PAIN_POINTS.map((pain, index) => (
            <div
              key={pain.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-mono font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    {pain.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {pain.titleFa}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {pain.description}
              </p>

              <div className="rounded-lg bg-emerald-50/60 border border-emerald-100 p-3 text-xs text-emerald-950 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-900 font-mono uppercase text-[11px] block">Tri-Domain Ecosystem Solution:</strong>
                  <span>{pain.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 4: Proposed Curriculum Breakthrough */}
      <section className="space-y-6">
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-slate-50 p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-800">
            <span>PROPOSED BREAKTHROUGH ACCREDITATION</span>
            <span>·</span>
            <span>HYBRID DRY-LAB & WET-LAB MASTERCLASS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Applied CRISPR & AI Agro-Genomics: From Gene Editing Blueprint to Field Validation
          </h2>

          <div className="text-xs font-mono text-slate-600">
            عنوان دوره: <span className="font-bold text-slate-900">کریسپر کاربردی و هوش مصنوعی ژنومیک کشاورزی: از طراحی محاسباتی تا آزمایش مزرعه‌ای</span>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-white p-5 shadow-xs space-y-2">
            <div className="text-xs font-bold text-emerald-900 uppercase font-mono">
              UNIQUE SELLING PROPOSITION (USP):
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "The only Iranian curriculum pairing <strong>100% zero-latency offline AI PWA design tools (aicrispr.ir)</strong> with <strong>locally stocked, cold-chain Golden Gate assembly kits (crisprmart.ir)</strong>, backed by full Shetab banking integration, Farsi-English bilingual mentorship, and direct National Biosafety Secretariat SDN-1 filing dossiers."
            </p>
          </div>
        </div>

        {/* 6 Comprehensive Modules */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase text-slate-500">6 COMPREHENSIVE CURRICULUM MODULES</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPOSED_COURSE_MODULES.map((mod) => (
              <div
                key={mod.number}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4 hover:border-emerald-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-bold text-slate-800">
                      MODULE 0{mod.number}
                    </span>
                    <span className="text-slate-400">{mod.durationHours} Hours</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {mod.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                      {mod.titleFa}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <span className="font-bold text-slate-700 text-[10px] font-mono uppercase">Key Learning Outcomes:</span>
                    <ul className="space-y-1 text-slate-600">
                      {mod.learningOutcomes.map((lo, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">›</span>
                          <span>{lo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div className="rounded bg-slate-50 p-2 text-[11px] space-y-1">
                    <div className="text-slate-500 font-mono text-[10px]">PRACTICAL DELIVERABLE:</div>
                    <div className="font-semibold text-slate-800">{mod.practicalDeliverable}</div>
                  </div>

                  <div className="text-[11px] flex justify-between font-mono">
                    <span className="text-cyan-700">{mod.dryLabTool}</span>
                    <span className="text-emerald-700">{mod.wetLabKitLink}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Ready to enroll in the Certified Applied CRISPR Masterclass?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Includes Pro Lab PWA license, physical wheat Golden Gate cloning starter kit, and live instructor consultation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('subscriptions')}
              className="rounded-lg bg-emerald-700 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-800 cursor-pointer"
            >
              Enroll via Shetab (1,850,000 Toman)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
