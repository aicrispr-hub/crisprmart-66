import React, { useState } from 'react';
import { AIAgentDefinition, ProductKit } from '../../types';
import { AI_AGENTS, AI_AGENT_IMAGE } from '../../data/mockData';
import { Cpu, Zap, Download, Play, CheckCircle2, ShieldCheck, Terminal, Copy, ArrowRight, Sparkles } from 'lucide-react';

interface AIAgentStudioViewProps {
  onOrderOligo: (oligoDetails: { gene: string; sequence: string; price: number }) => void;
  isOfflineMode: boolean;
}

export const AIAgentStudioView: React.FC<AIAgentStudioViewProps> = ({
  onOrderOligo,
  isOfflineMode,
}) => {
  const [selectedAgent, setSelectedAgent] = useState<AIAgentDefinition>(AI_AGENTS[0]);
  const [inputPrompt, setInputPrompt] = useState<string>(AI_AGENTS[0].sampleInput);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [agentOutput, setAgentOutput] = useState<string | null>(AI_AGENTS[0].sampleOutput);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectAgent = (agent: AIAgentDefinition) => {
    setSelectedAgent(agent);
    setInputPrompt(agent.sampleInput);
    setAgentOutput(agent.sampleOutput);
  };

  const handleRunAgent = () => {
    setIsRunning(true);
    setAgentOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      if (selectedAgent.id === 'agent-wheat-polyploid') {
        setAgentOutput(
          `[COMPUTATION COMPLETE - HEXAPLOID ENGINE]\n` +
          `Target: TaDREB2A (Triticum aestivum - Subgenome A)\n` +
          `Alignment: Chromosome 5A (coordinates 142,883,120..142,883,142)\n` +
          `sgRNA-1: 5'-GACCGAGCTGCTGGACATCG-3' (PAM: CGG)\n` +
          `· On-Target Score: 94.6/100 (Doench-Fusi Model)\n` +
          `· Subgenome Discrimination: 100% specific to 5A (3 mismatches on 5B, 4 on 5D)\n` +
          `· Secondary Structure Free Energy (ΔG): -1.8 kcal/mol (Optimal folding)\n` +
          `Forward Oligo (BsaI): 5'-accgGACCGAGCTGCTGGACATCG-3'\n` +
          `Reverse Oligo (BsaI): 5'-aaacCGATGTCCAGCAGCTCGGTC-3'\n` +
          `Reagent Dispatch Recommendation: Golden Gate wheat assembly vector pCAMBIA1300-Cas9 available on crisprmart.ir.`
        );
      } else if (selectedAgent.id === 'agent-biopat-iran') {
        setAgentOutput(
          `[LEGAL BIOSAFETY AUDIT - ISLAMIC REPUBLIC OF IRAN]\n` +
          `Statute: National Biosafety Act (قانون ملی ایمنی زیستی) - Executive Bylaw 1399\n` +
          `Classification: SDN-1 (Site-Directed Nuclease Type 1 - non-homologous end joining InDel without foreign DNA).\n` +
          `Outcome: EXEMPT from mandatory GMO commercialization moratorium if delivered as Ribonucleoprotein (RNP) or segregated transgene-free in T1 generation.\n` +
          `E-Namad Impact: Allowed for direct commercial sale and online research kit distribution under Code 482-Bio.`
        );
      } else {
        setAgentOutput(
          `[VETERINARY CRISPR SENSOR SYNTHESIS]\n` +
          `Pathogen: Brucella abortus (IS711 Insertion Sequence)\n` +
          `crRNA Guide: 5'-UAAUUUCUACUAAGUGUAGAUCCGUGCACGUUCAUCAGUCC-3'\n` +
          `PAM: TTTA (Position nt 412)\n` +
          `Collateral ssDNA Trans-Cleavage Velocity: 98.4% of maximum reference.\n` +
          `Reporter recommendation: 5'-6-FAM-TTATT-Biotin-3' for Lateral Flow Strip strip detection (compatible with crisprmart.ir VetCas12 cassettes).`
        );
      }
    }, 850);
  };

  const handleCopy = () => {
    if (agentOutput) {
      navigator.clipboard.writeText(agentOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExportPwaConfig = () => {
    const config = {
      agentName: selectedAgent.name,
      codeName: selectedAgent.codeName,
      offlinePwaCached: true,
      cachedAt: new Date().toISOString(),
      systemPromptPreset: selectedAgent.systemPromptPreset,
      targetOrganisms: selectedAgent.targetOrganisms,
      localInferenceEngine: 'WebAssembly-CRISPR-Core-v1.4'
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedAgent.codeName}-offline-pwa-config.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/30">
              aicrispr.ir
            </span>
            <span className="text-xs text-slate-300">
              استودیوی طراحی و سفارشی‌سازی ایجنت‌های هوش مصنوعی ژنومیک
            </span>
            {isOfflineMode && (
              <span className="rounded bg-amber-500/20 px-2 py-0.5 text-xs font-mono text-amber-300 border border-amber-500/30">
                PWA OFFLINE ENGINE LOADED
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            AI CRISPR Agent Studio — Autonomous Dry-Lab Bioinformatics
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Autonomous, locally-deployable AI agents engineered for Iranian agro-genomics. Solve polyploid hexaploid wheat subgenome homeologies, vet biosafety regulations under Iranian law, and design isothermal Cas12a lateral flow diagnostic sensors.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div>
              <span className="text-cyan-400 font-bold">100%</span> Client-Side PWA Computation
            </div>
            <div>
              <span className="text-cyan-400 font-bold">A/B/D</span> Polyploid Subgenome Precision
            </div>
            <div>
              <span className="text-cyan-400 font-bold">1-Click</span> crisprmart.ir Synthesis Export
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Agent Selector */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-xs font-mono uppercase text-slate-500">SELECT INTELLIGENT AGENT</div>
          <div className="space-y-3">
            {AI_AGENTS.map((agent) => {
              const isSelected = selectedAgent.id === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => handleSelectAgent(agent)}
                  className={`w-full text-left rounded-xl border p-4 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-50/20 shadow-xs ring-1 ring-cyan-500'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-900">
                      {agent.codeName}
                    </span>
                    <span className="text-[10px] font-mono rounded bg-slate-100 px-1.5 py-0.5 text-slate-600">
                      {agent.tokenCostPerRun} TOKENS/RUN
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-800 mt-1">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {agent.specialty}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {agent.targetOrganisms.map((org, i) => (
                      <span key={i} className="text-[10px] bg-slate-50 text-slate-600 px-1.5 py-0.5 rounded border border-slate-100">
                        {org}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Offline PWA Export Card */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Download className="h-4 w-4 text-emerald-600" />
              <span>Offline PWA Agent Manifest</span>
            </div>
            <p className="text-xs text-slate-500">
              Export this agent's configuration, prompt presets, and local genome indexing rules for 100% offline field execution.
            </p>
            <button
              onClick={handleExportPwaConfig}
              className="w-full rounded-lg border border-slate-300 bg-white py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer"
            >
              Export JSON PWA Config
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Prompt & Terminal Stage */}
        <div className="lg:col-span-8 space-y-5">
          {/* Agent Parameters & Active View */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-700 font-semibold uppercase">ACTIVE GENOMIC AGENT</span>
                <h2 className="text-lg font-bold text-slate-900">{selectedAgent.name}</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">PWA STATUS:</span>
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-700 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  LOCALLY CACHED
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedAgent.description}
            </p>

            {/* Prompt Input Form */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase font-mono">
                Input Research Query / Gene Target Parameters:
              </label>
              <textarea
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-slate-300 p-3 text-xs font-mono text-slate-900 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                placeholder="Enter gene coordinates, cultivar, or biosafety query..."
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setInputPrompt(selectedAgent.sampleInput)}
                className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
              >
                Reset to default sample preset
              </button>

              <button
                onClick={handleRunAgent}
                disabled={isRunning}
                className="flex items-center gap-2 rounded-lg bg-cyan-700 px-5 py-2.5 text-xs font-semibold text-white hover:bg-cyan-800 disabled:opacity-50 cursor-pointer transition-colors"
              >
                {isRunning ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Executing Bio-Worker...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Run Intelligent Agent</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal / Output Viewport */}
          <div className="rounded-xl border border-slate-900 bg-slate-950 p-5 shadow-lg space-y-3 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">{selectedAgent.codeName}</span>
                <span>/</span>
                <span>LOCAL_OUTPUT_CONSOLE</span>
              </div>
              <button
                onClick={handleCopy}
                disabled={!agentOutput}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white cursor-pointer"
              >
                <Copy className="h-3 w-3" />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="min-h-[180px] text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
              {isRunning ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-2 text-slate-500">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
                  <span>Evaluating secondary structure & PAM coordinates...</span>
                </div>
              ) : agentOutput ? (
                agentOutput
              ) : (
                <div className="text-slate-600 py-8 text-center">
                  Execute the agent to inspect generated guide sequences and regulatory clearance.
                </div>
              )}
            </div>

            {agentOutput && selectedAgent.id === 'agent-wheat-polyploid' && (
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Direct Integration: Dispatch oligos to crisprmart.ir synthesis lab
                </span>
                <button
                  onClick={() =>
                    onOrderOligo({
                      gene: 'TaDREB2A Chamran-2',
                      sequence: 'GACCGAGCTGCTGGACATCG',
                      price: 450000
                    })
                  }
                  className="flex items-center gap-1.5 rounded bg-emerald-600 px-3 py-1.5 text-xs font-sans font-semibold text-white hover:bg-emerald-700 cursor-pointer"
                >
                  <span>Order Oligos on crisprmart.ir (450,000 T)</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
