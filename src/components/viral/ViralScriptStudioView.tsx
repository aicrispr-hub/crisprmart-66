import React, { useState, useEffect } from 'react';
import { VIRAL_SCRIPTS } from '../../data/mockData';
import { ViralScriptConcept, MainTab, DomainType } from '../../types';
import { 
  Video, 
  Play, 
  Pause, 
  RotateCcw, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink, 
  Volume2, 
  Eye, 
  Clock, 
  Smartphone,
  Share2
} from 'lucide-react';

interface ViralScriptStudioViewProps {
  setActiveTab: (tab: MainTab) => void;
  setActiveDomain: (domain: DomainType) => void;
}

export const ViralScriptStudioView: React.FC<ViralScriptStudioViewProps> = ({
  setActiveTab,
  setActiveDomain,
}) => {
  const [selectedScript, setSelectedScript] = useState<ViralScriptConcept>(VIRAL_SCRIPTS[0]);
  const [copied, setCopied] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  // Playback timer for short-form preview
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 60) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCopyScript = () => {
    const fullText = 
      `🎬 VIRAL SCRIPT (Shorts/Reels/TikTok/Aparat)\n` +
      `عنوان: ${selectedScript.topicTitleFa}\n` +
      `Title: ${selectedScript.topicTitle}\n` +
      `استعاره بومی: ${selectedScript.persianMetaphor}\n\n` +
      `⚡ قلاب کنجکاوی (0-3 ثانیه):\n${selectedScript.hookFa}\n\n` +
      `🚨 درد و مشکل (3-15 ثانیه):\n${selectedScript.problemFa}\n\n` +
      `🧬 راه‌حل کریسپری (15-45 ثانیه):\n${selectedScript.solutionFa}\n\n` +
      `🎯 فراخوان به اقدام (45-60 ثانیه):\n${selectedScript.ctaFa}\n\n` +
      `--- دستورالعمل‌های بصری و صوتی ---\n` +
      selectedScript.visualDirections.map(d => `[${d.timestamp}]\nتصویر: ${d.visual}\nمتن روی تصویر: ${d.textOverlay}\nصدا و افکت: ${d.audioCue}\n`).join('\n') +
      `\n🔗 طراحی در aicrispr.ir | کیت رسمی در crisprmart.ir`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getActiveScene = () => {
    if (currentTime < 3) return selectedScript.visualDirections[0];
    if (currentTime < 15) return selectedScript.visualDirections[1];
    if (currentTime < 35) return selectedScript.visualDirections[2];
    if (currentTime < 45) return selectedScript.visualDirections[3] || selectedScript.visualDirections[2];
    return selectedScript.visualDirections[4] || selectedScript.visualDirections[3];
  };

  const activeScene = getActiveScene();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
      {/* Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-rose-500/20 px-2 py-0.5 text-xs font-mono font-semibold text-rose-400 border border-rose-500/30">
              VIRAL SCIENCE COMMUNICATOR
            </span>
            <span className="text-xs text-slate-300">
              استودیوی تولید سناریوهای وایرال ویدیوهای کوتاه (ریلز، شورتز، روبیکا و آپارات)
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Viral Short-Form Science Scriptwriter & Curiosity-Gap Engine
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Engineered with the 3-second Curiosity Gap technique, grounded in everyday Iranian metaphors (نان سنگک، زاینده‌رود، طلای سبز رفسنجان), and driving high-converting subscriptions to <strong className="text-emerald-400">crisprmart.ir</strong> and <strong className="text-cyan-400">aicrispr.ir</strong>.
          </p>
        </div>
      </div>

      {/* Concept Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VIRAL_SCRIPTS.map((script) => {
          const isSelected = selectedScript.id === script.id;
          return (
            <button
              key={script.id}
              onClick={() => {
                setSelectedScript(script);
                setCurrentTime(0);
                setIsPlaying(false);
              }}
              className={`rounded-xl border p-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-rose-500 bg-rose-50/20 shadow-xs ring-1 ring-rose-500'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-slate-900">SCENARIO CONCEPT</span>
                <span className="text-rose-600 font-semibold">60 SECONDS</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-1">
                {script.topicTitle}
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-1 text-right" dir="rtl">
                {script.topicTitleFa}
              </p>
              <div className="mt-3 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Metaphor:</span> {script.persianMetaphor}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Studio View: Teleprompter Simulator & Persian Script Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Mobile Video Player / Teleprompter Simulation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase text-slate-500">
            INTERACTIVE TIMELINE & TELEPROMPTER PREVIEW
          </div>

          <div className="mx-auto max-w-[340px] rounded-3xl border-4 border-slate-900 bg-slate-950 p-4 shadow-2xl text-white overflow-hidden relative aspect-[9/16] flex flex-col justify-between">
            {/* Top Device Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-rose-500" />
                <span>00:{currentTime.toString().padStart(2, '0')} / 01:00</span>
              </span>
              <span className="rounded bg-rose-600/30 px-2 py-0.5 text-rose-400 font-bold text-[10px]">
                REC 9:16
              </span>
            </div>

            {/* Simulated Live Visual Staging */}
            <div className="my-auto space-y-4 text-center z-10 py-6">
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 backdrop-blur-xs space-y-2">
                <div className="text-[10px] font-mono text-cyan-400 uppercase">
                  ACTIVE VISUAL STAGING [{activeScene?.timestamp}]
                </div>
                <p className="text-xs text-slate-200 leading-relaxed italic">
                  "{activeScene?.visual}"
                </p>
              </div>

              {/* Bold On-Screen Dynamic Caption */}
              <div className="bg-amber-400 text-slate-950 font-black text-sm px-3 py-2 rounded-lg shadow-lg font-mono">
                {activeScene?.textOverlay}
              </div>

              {/* Sound Cue */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-rose-400 font-mono">
                <Volume2 className="h-3.5 w-3.5" />
                <span>{activeScene?.audioCue}</span>
              </div>
            </div>

            {/* Bottom Controls inside Teleprompter */}
            <div className="z-10 space-y-3 pt-3 border-t border-slate-800">
              {/* Progress Slider */}
              <input
                type="range"
                min={0}
                max={60}
                value={currentTime}
                onChange={(e) => setCurrentTime(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentTime(0)}
                  className="rounded-full bg-slate-800 p-2 text-slate-300 hover:text-white cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full bg-rose-600 p-3 text-white hover:bg-rose-500 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full Script with Visual & Audio Directions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono uppercase text-slate-500">PRODUCTION-READY SCRIPT</div>
              <h2 className="text-lg font-bold text-slate-900">
                Four-Part Behavioral Script Breakdown (Persian + Directions)
              </h2>
            </div>

            <button
              onClick={handleCopyScript}
              className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? 'Copied Full Script' : 'Copy Script & Cues'}</span>
            </button>
          </div>

          {/* Script Sections */}
          <div className="space-y-4">
            {/* 1. Hook (0-3s) */}
            <div className="rounded-xl border border-rose-200 bg-rose-50/30 p-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-rose-800 uppercase">01. HOOK & CURIOSITY GAP (0:00 - 0:03)</span>
                <span className="text-rose-600">STOPS THE SCROLL</span>
              </div>
              <div className="text-xs text-slate-500">English: {selectedScript.hookEn}</div>
              <div className="rounded-lg bg-white p-3 border border-rose-100 text-sm font-semibold text-slate-900 leading-relaxed text-right" dir="rtl">
                {selectedScript.hookFa}
              </div>
            </div>

            {/* 2. Problem (3-15s) */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-amber-800 uppercase">02. PROBLEM & SENSITIVE PAIN POINT (0:03 - 0:15)</span>
                <span className="text-amber-700">EVERYDAY IRANIAN METAPHOR</span>
              </div>
              <div className="text-xs text-slate-500">English: {selectedScript.problemEn}</div>
              <div className="rounded-lg bg-white p-3 border border-amber-100 text-sm font-semibold text-slate-900 leading-relaxed text-right" dir="rtl">
                {selectedScript.problemFa}
              </div>
            </div>

            {/* 3. Solution (15-45s) */}
            <div className="rounded-xl border border-cyan-200 bg-cyan-50/30 p-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-cyan-800 uppercase">03. CRISPR ECOSYSTEM SOLUTION (0:15 - 0:45)</span>
                <span className="text-cyan-700">NO ACADEMIC JARGON</span>
              </div>
              <div className="text-xs text-slate-500">English: {selectedScript.solutionEn}</div>
              <div className="rounded-lg bg-white p-3 border border-cyan-100 text-sm font-semibold text-slate-900 leading-relaxed text-right" dir="rtl">
                {selectedScript.solutionFa}
              </div>
            </div>

            {/* 4. CTA (45-60s) */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/30 p-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-emerald-800 uppercase">04. CALL TO ACTION & SUBSCRIPTION (0:45 - 1:00)</span>
                <span className="text-emerald-700">HIGH CONVERSION DRIVER</span>
              </div>
              <div className="text-xs text-slate-500">English: {selectedScript.ctaEn}</div>
              <div className="rounded-lg bg-white p-3 border border-emerald-100 text-sm font-semibold text-slate-900 leading-relaxed text-right" dir="rtl">
                {selectedScript.ctaFa}
              </div>
            </div>
          </div>

          {/* Visual Directions & Audio Cues Table */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
            <div className="text-xs font-bold text-slate-800 uppercase font-mono">
              Complete Visual Directions & Audio Cues Table:
            </div>
            <div className="space-y-3">
              {selectedScript.visualDirections.map((dir, idx) => (
                <div key={idx} className="rounded-lg bg-slate-50 p-3 text-xs space-y-1 border border-slate-100">
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
                    <span className="font-bold text-slate-800">{dir.timestamp}</span>
                    <span className="text-rose-700 font-semibold">{dir.audioCue}</span>
                  </div>
                  <div className="text-slate-700">
                    <strong className="text-slate-900">Screen Visual:</strong> {dir.visual}
                  </div>
                  <div className="text-slate-600 font-mono text-[11px]">
                    <strong className="text-slate-900">Text Overlay:</strong> {dir.textOverlay}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
