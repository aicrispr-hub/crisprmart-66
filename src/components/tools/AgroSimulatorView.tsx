import React, { useState } from 'react';
import { WHEAT_DROUGHT_IMAGE } from '../../data/mockData';
import { Sliders, TrendingUp, Droplets, Sun, Sprout, ArrowRight } from 'lucide-react';
import { MainTab } from '../../types';

interface AgroSimulatorViewProps {
  setActiveTab: (tab: MainTab) => void;
}

export const AgroSimulatorView: React.FC<AgroSimulatorViewProps> = ({ setActiveTab }) => {
  const [soilWaterDeficit, setSoilWaterDeficit] = useState<number>(-1.0); // -0.2 (optimal) to -2.0 (severe drought)
  const [soilSalinity, setSoilSalinity] = useState<number>(100); // 0 to 250 mM NaCl

  // Calculate physiological metrics
  const severityIndex = Math.min(1, Math.max(0, (Math.abs(soilWaterDeficit) - 0.2) / 1.8 + soilSalinity / 300));
  
  // Wild type yield drops severely under drought
  const wildTypeYieldKgHa = Math.round(5200 * Math.max(0.12, 1 - severityIndex * 0.85));
  // CRISPR edited line maintains osmotic balance
  const editedYieldKgHa = Math.round(5400 * Math.max(0.48, 1 - severityIndex * 0.48));
  
  const yieldAdvantagePct = Math.round(((editedYieldKgHa - wildTypeYieldKgHa) / wildTypeYieldKgHa) * 100);

  // Economic calculation based on Iranian guaranteed wheat purchase price (~20,500 Toman/kg)
  const pricePerKgToman = 20500;
  const extraIncomeMillionToman = Math.round(((editedYieldKgHa - wildTypeYieldKgHa) * pricePerKgToman) / 1000000);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
      {/* Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white relative">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>AGRONOMIC TRAIT SIMULATION ENGINE</span>
            <span>·</span>
            <span>IRANIAN CENTRAL PLATEAU DROUGHT MODEL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Agro-Genetics Drought & Salinity Trait Simulator
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Physiological response modeling of TaDREB2A gene-edited hexaploid wheat lines compared to wild-type across soil moisture deficits and salt stress in central Iran.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500">
              <Sliders className="h-4 w-4 text-emerald-600" />
              <span>ENVIRONMENTAL STRESS PARAMETERS</span>
            </div>

            {/* Slider 1: Soil Water Potential */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-bold text-slate-800">Soil Water Potential (Ψsoil):</span>
                <span className="font-bold text-emerald-700">{soilWaterDeficit.toFixed(2)} MPa</span>
              </div>
              <input
                type="range"
                min="-2.0"
                max="-0.2"
                step="0.05"
                value={soilWaterDeficit}
                onChange={(e) => setSoilWaterDeficit(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Severe Drought (-2.0 MPa)</span>
                <span>Moderate (-1.0 MPa)</span>
                <span>Field Capacity (-0.2 MPa)</span>
              </div>
            </div>

            {/* Slider 2: Soil Salinity */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-bold text-slate-800">Salinity Level (NaCl):</span>
                <span className="font-bold text-cyan-700">{soilSalinity} mM</span>
              </div>
              <input
                type="range"
                min="0"
                max="250"
                step="10"
                value={soilSalinity}
                onChange={(e) => setSoilSalinity(parseInt(e.target.value))}
                className="w-full accent-cyan-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Freshwater (0 mM)</span>
                <span>Khorasan Saline (120 mM)</span>
                <span>Qom Basin (250 mM)</span>
              </div>
            </div>

            {/* Economic Impact Summary */}
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 space-y-1">
              <div className="text-[11px] font-mono text-emerald-800 uppercase font-bold">
                Projected Economic Value (Per Hectare):
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-950">
                +{extraIncomeMillionToman} Million Tomans / Ha
              </div>
              <p className="text-xs text-emerald-800 mt-1">
                Yield gain calculated against the national guaranteed wheat procurement price (۲۵,۵۰۰ تومان/کیلوگرم).
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Simulation Output */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Agronomic Performance Comparison
              </h3>
              <span className="rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold px-2 py-0.5">
                +{yieldAdvantagePct}% Yield Retention
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Wild-Type Iranian Wheat:</span>
                <div className="text-2xl font-bold font-mono text-slate-800">
                  {wildTypeYieldKgHa.toLocaleString()} <span className="text-xs font-normal text-slate-500">kg/ha</span>
                </div>
                <div className="text-xs text-rose-600 font-medium">
                  Severe stomatal collapse under deficit
                </div>
              </div>

              <div className="rounded-lg border border-emerald-300 bg-emerald-50/50 p-4 space-y-1">
                <span className="text-[11px] font-mono text-emerald-700 uppercase">CRISPR TaDREB2A Edited:</span>
                <div className="text-2xl font-bold font-mono text-emerald-900">
                  {editedYieldKgHa.toLocaleString()} <span className="text-xs font-normal text-emerald-700">kg/ha</span>
                </div>
                <div className="text-xs text-emerald-700 font-medium">
                  Active osmotic adjustment & proline retention
                </div>
              </div>
            </div>

            {/* SVG Visual Curve Graph */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-500 uppercase">
                YIELD DECAY TRAJECTORY UNDER STRESS
              </div>
              <div className="relative h-44 w-full rounded-lg bg-slate-950 p-4 overflow-hidden border border-slate-800">
                <svg className="h-full w-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="#334155" strokeDasharray="3 3" />

                  {/* Wild Type Curve (Red) */}
                  <path
                    d="M 0,20 Q 200,70 400,110"
                    fill="none"
                    stroke="#F43F5E"
                    strokeWidth="3"
                  />

                  {/* Edited Line Curve (Emerald) */}
                  <path
                    d="M 0,15 Q 200,35 400,55"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3.5"
                  />
                </svg>

                <div className="absolute bottom-2 right-3 flex items-center gap-4 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                    <span>Wild-Type Chamran</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>TaDREB2A Edited</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Kit available: Hexaploid Wheat Golden Gate Pack
              </span>
              <button
                onClick={() => setActiveTab('marketplace')}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 cursor-pointer"
              >
                <span>View Kit on crisprmart.ir</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
