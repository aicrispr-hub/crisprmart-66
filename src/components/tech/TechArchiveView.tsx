import React, { useState } from 'react';
import { ResearchDocument } from '../../types';
import { RESEARCH_DOCUMENTS } from '../../data/mockData';
import { Library, Download, Search, FileText, CheckCircle2, Bookmark, ExternalLink, Filter, BookOpen } from 'lucide-react';

export const TechArchiveView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDoc, setActiveDoc] = useState<ResearchDocument | null>(null);

  const filteredDocs = RESEARCH_DOCUMENTS.filter(doc => {
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.titleFa.includes(searchQuery) ||
      doc.abstractEn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleDownloadSop = (doc: ResearchDocument) => {
    const content = `CRISPRTECH.IR SPECIALIZED RESEARCH ARCHIVE\n` +
      `DOI: ${doc.doi}\n` +
      `Title: ${doc.title}\n` +
      `Title (Farsi): ${doc.titleFa}\n` +
      `Authors: ${doc.authors.join(', ')}\n` +
      `Journal: ${doc.journal} (${doc.year})\n\n` +
      `ABSTRACT (EN):\n${doc.abstractEn}\n\n` +
      `ABSTRACT (FA):\n${doc.abstractFa}\n\n` +
      `KEY FINDINGS:\n` +
      doc.keyFindings.map((f, i) => `${i + 1}. ${f}`).join('\n') +
      `\n\nOfficial protocol archived under National Biosafety Secretariat guidelines. Accessible offline via crisprmart.ir PWA ecosystem.`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.id}-protocol-archive.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-xs font-mono font-semibold text-indigo-400 border border-indigo-500/30">
              crisprtech.ir
            </span>
            <span className="text-xs text-slate-300">
              مرکز اسناد، مقالات و کتابخانه دیجیتال زیست‌فناوری کشاورزی و دامپزشکی
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            CRISPR Tech Digital Archive — Peer-Reviewed Science & Biosafety SOPs
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The national repository of gene editing research protocols, bilingual standard operating procedures (SOPs), and regulatory compliance dossiers under Iranian biotechnology law. Available for online citation and offline PWA reading.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div>
              <span className="text-indigo-400 font-bold">320+</span> Bench Protocols & SOPs
            </div>
            <div>
              <span className="text-indigo-400 font-bold">100%</span> Bilingual English / Persian Abstracts
            </div>
            <div>
              <span className="text-indigo-400 font-bold">SDN-1</span> Regulatory Filing Blueprints
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers, DOI, or genes..."
            className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Papers ({RESEARCH_DOCUMENTS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('agricultural-genetics')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'agricultural-genetics'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Agricultural Genetics
          </button>
          <button
            onClick={() => setSelectedCategory('veterinary-crispr')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'veterinary-crispr'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Veterinary CRISPR
          </button>
          <button
            onClick={() => setSelectedCategory('regulatory-biosafety')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'regulatory-biosafety'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Biosafety Statutes
          </button>
        </div>
      </div>

      {/* Document Listing */}
      <div className="space-y-6">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-slate-300 transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="font-semibold text-indigo-700">{doc.journal}</span>
                <span>·</span>
                <span>{doc.year}</span>
                <span>·</span>
                <span>DOI: {doc.doi}</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                OFFLINE PWA READY
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 hover:text-indigo-700 transition-colors">
                {doc.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                {doc.titleFa}
              </p>
              <div className="text-xs text-slate-500 mt-1">
                Authors: {doc.authors.join(', ')}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg bg-slate-50 p-3 space-y-1">
                <span className="font-bold text-slate-700 block text-[11px]">English Abstract:</span>
                <p className="text-slate-600 leading-relaxed">{doc.abstractEn}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 space-y-1 text-right" dir="rtl">
                <span className="font-bold text-slate-700 block text-[11px]">چکیده فارسی:</span>
                <p className="text-slate-600 leading-relaxed">{doc.abstractFa}</p>
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <span className="font-bold text-slate-800 text-[11px] font-mono uppercase">Key Empirical Outcomes:</span>
              <ul className="space-y-1 text-slate-600">
                {doc.keyFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-mono">
                Companion Kits available on crisprmart.ir
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadSop(doc)}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Download Protocol (SOP)</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
