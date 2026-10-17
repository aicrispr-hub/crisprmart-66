import React, { useState } from 'react';
import { VET_DIAGNOSTIC_IMAGE } from '../../data/mockData';
import { ShieldCheck, CheckCircle2, ShoppingCart, Clock, Thermometer, Layers, AlertCircle, ArrowRight } from 'lucide-react';
import { MainTab } from '../../types';

interface VetDiagConfiguratorViewProps {
  onOrderKits: (kitDetails: { title: string; count: number; priceToman: number }) => void;
  setActiveTab: (tab: MainTab) => void;
}

const PATHOGENS = [
  {
    id: 'avian-flu',
    name: 'Avian Influenza Virus (H9N2)',
    nameFa: 'آنفلوآنزای فوق‌حاد پرندگان (H9N2)',
    nuclease: 'LbCas12a',
    targetGene: 'Hemagglutinin (HA)',
    lod: '10 copies/µL',
    temp: '37°C Isothermal',
    timeMinutes: 15,
    crRnaSeq: 'UAAUUUCUACUAAGUGUAGAUGCCGACUCCAAUAGUACC',
    reporter: '5\'-6-FAM-TTATT-Biotin-3\'',
    batchPrice50Toman: 2850000
  },
  {
    id: 'fmd-disease',
    name: 'Foot-and-Mouth Disease (FMD / تب برفکی)',
    nameFa: 'ویروس تب برفکی نشخوارکنندگان (سویه O/A)',
    nuclease: 'LbCas12a',
    targetGene: 'VP1 Structural Capsid',
    lod: '25 copies/µL',
    temp: '37°C Isothermal',
    timeMinutes: 18,
    crRnaSeq: 'UAAUUUCUACUAAGUGUAGAUGGUGUGAGCAGCAGUACG',
    reporter: '5\'-6-FAM-TTATT-Biotin-3\'',
    batchPrice50Toman: 3100000
  },
  {
    id: 'bvd-bovine',
    name: 'Bovine Viral Diarrhea (BVD)',
    nameFa: 'اسهال ویروسی گاوی (BVDV-1)',
    nuclease: 'LwaCas13a',
    targetGene: '5\'-UTR Non-coding Region',
    lod: '5 copies/µL',
    temp: '37°C Isothermal',
    timeMinutes: 20,
    crRnaSeq: 'GGAUUUAGACUACCCCAAAAACGAAGGUGAGUCUGUAGUG',
    reporter: '5\'-6-FAM-UUUUU-Biotin-3\'',
    batchPrice50Toman: 3400000
  }
];

export const VetDiagConfiguratorView: React.FC<VetDiagConfiguratorViewProps> = ({
  onOrderKits,
  setActiveTab,
}) => {
  const [selectedPathogen, setSelectedPathogen] = useState(PATHOGENS[0]);
  const [batchQuantity, setBatchQuantity] = useState<number>(1); // boxes of 50 tests

  const totalPriceToman = selectedPathogen.batchPrice50Toman * batchQuantity;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
      {/* Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white relative">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span>FIELD VETERINARY DIAGNOSTICS</span>
            <span>·</span>
            <span>ISOTHERMAL CAS12A/CAS13A BIOSENSORS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Veterinary Lateral Flow Rapid Diagnostic Configurator
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Design and order field-deployable CRISPR diagnostic cassettes for industrial poultry complexes, sheep flocks, and dairy herds across Iran without requiring laboratory thermocyclers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Selector */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
            <div className="text-xs font-mono uppercase text-slate-500">
              1. CHOOSE LIVESTOCK / POULTRY PATHOGEN
            </div>

            <div className="space-y-2.5">
              {PATHOGENS.map((p) => {
                const isSelected = selectedPathogen.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPathogen(p)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/30 shadow-xs ring-1 ring-emerald-500'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">{p.name}</span>
                      <span className="font-mono text-emerald-700">{p.nuclease}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 font-mono text-right" dir="rtl">
                      {p.nameFa}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 uppercase font-mono">
                Batch Order Size (Boxes of 50 cassettes):
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 5, 10].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setBatchQuantity(qty)}
                    className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg border cursor-pointer ${
                      batchQuantity === qty
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {qty} Box ({qty * 50} Strips)
                  </button>
                ))}
              </div>
            </div>

            {/* Total Price & Order */}
            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 space-y-3">
              <div className="flex justify-between items-baseline font-mono">
                <span className="text-xs text-slate-500">TOTAL BATCH PRICE:</span>
                <span className="text-lg font-bold text-slate-900">
                  {(totalPriceToman).toLocaleString('fa-IR')} تومان
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Includes lyophilized Cas enzymes, buffer lysis vials, and sterile sampling swabs. Dispatched cold-chain via Tipax.
              </p>
              <button
                onClick={() =>
                  onOrderKits({
                    title: `${selectedPathogen.name} CRISPR Test Box (${batchQuantity * 50} Strips)`,
                    count: batchQuantity,
                    priceToman: totalPriceToman
                  })
                }
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-700 py-2.5 text-xs font-semibold text-white hover:bg-emerald-800 cursor-pointer"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Order Custom Batch on crisprmart.ir</span>
              </button>
            </div>
          </div>
        </div>

        {/* Assay Specifications Card */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-emerald-700 uppercase font-semibold">
                  ASSAY CASSETTE CONFIGURATION
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedPathogen.name}
                </h3>
              </div>
              <span className="rounded bg-emerald-100 text-emerald-800 text-xs font-mono px-2 py-0.5 font-bold">
                E-Namad Verified
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                <span className="text-slate-400 block text-[10px]">INCUBATION TIME:</span>
                <span className="font-bold text-slate-800">{selectedPathogen.timeMinutes} Minutes</span>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                <span className="text-slate-400 block text-[10px]">TEMPERATURE:</span>
                <span className="font-bold text-slate-800">{selectedPathogen.temp}</span>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                <span className="text-slate-400 block text-[10px]">DETECTION LIMIT:</span>
                <span className="font-bold text-slate-800">{selectedPathogen.lod}</span>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                <span className="text-slate-400 block text-[10px]">ENZYME:</span>
                <span className="font-bold text-slate-800">{selectedPathogen.nuclease}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="rounded-lg border border-slate-200 p-3 space-y-1">
                <span className="text-slate-400 text-[10px] block">crRNA SENSOR SEQUENCE (COLLATERAL ACTIVATION):</span>
                <span className="text-slate-800 font-semibold break-all select-all">{selectedPathogen.crRnaSeq}</span>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 space-y-1">
                <span className="text-slate-400 text-[10px] block">DUAL-LABELED REPORTER PROBE:</span>
                <span className="text-slate-800 font-semibold">{selectedPathogen.reporter}</span>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50/50 border border-emerald-100 p-4 space-y-2 text-xs text-emerald-950">
              <div className="font-bold font-mono text-[11px] uppercase flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                <span>Field Protocol Summary (Zero Laboratory Equipment):</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-700 text-xs">
                <li>Swab cloacal/nasal exudate and disperse in 300 µL rapid lysis buffer.</li>
                <li>Transfer 5 µL lysate to pre-mixed RPA-CRISPR tube; hold in hand or pocket at ~37°C for 10 minutes.</li>
                <li>Insert lateral flow strip; observe control (C) and test (T) line development within 5 minutes.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
