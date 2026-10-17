import React, { useState } from 'react';
import { ProductKit } from '../../types';
import { PRODUCT_KITS } from '../../data/mockData';
import { ShoppingCart, ShieldCheck, Truck, Zap, Filter, Star, CheckCircle, Info, ExternalLink, ArrowRight } from 'lucide-react';
import { ENamadBadge } from '../ENamadBadge';

interface MarketplaceViewProps {
  onAddToCart: (kit: ProductKit) => void;
  onInstantBuy: (kit: ProductKit) => void;
}

export const MarketplaceView: React.FC<MarketplaceViewProps> = ({
  onAddToCart,
  onInstantBuy,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductKit | null>(null);

  const filteredKits = selectedCategory === 'all'
    ? PRODUCT_KITS
    : PRODUCT_KITS.filter(k => k.category === selectedCategory);

  const formatToman = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount) + ' تومان';
  };

  const formatTomanEn = (amount: number) => {
    return new Intl.NumberFormat('en-US').format(amount) + ' Tomans';
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
      {/* Marketplace Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-mono font-semibold text-emerald-400 border border-emerald-500/30">
              crisprmart.ir
            </span>
            <span className="text-xs text-slate-300">
              سامانه رسمی خرید کیت‌ها، آنزیم‌ها و نرم‌افزارهای ژنومیک
            </span>
            <ENamadBadge compact />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            CRISPR Mart Marketplace — Biotechnology Reagents & Offline Suites
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The exclusive Iranian e-commerce marketplace holding official E-Namad accreditation for shipping molecular biology reagents, Cas12a veterinary field strips, and instant offline PWA software licenses with 100% Shetab bank gateway compliance.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div>
              <span className="text-emerald-400 font-bold">24-48h</span> Nationwide Cold-Chain Delivery
            </div>
            <div>
              <span className="text-emerald-400 font-bold">SDN-1</span> Biosafety Class-I & Class-II Validated
            </div>
            <div>
              <span className="text-emerald-400 font-bold">100%</span> Shetab / Shaparak Banking Security
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Products ({PRODUCT_KITS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('kits')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'kits'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Molecular & Plant Kits
          </button>
          <button
            onClick={() => setSelectedCategory('diagnostic-strips')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'diagnostic-strips'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Veterinary Lateral Flow
          </button>
          <button
            onClick={() => setSelectedCategory('software-license')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'software-license'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PWA Software Licenses
          </button>
        </div>

        <div className="text-xs text-slate-500">
          Showing <span className="font-semibold text-slate-900">{filteredKits.length}</span> verified catalog items
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredKits.map((kit) => (
          <div
            key={kit.id}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all group"
          >
            <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
              <img
                src={kit.image}
                alt={kit.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {kit.badge && (
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded shadow-xs">
                  {kit.badge}
                </div>
              )}

              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                {kit.biosafetyCategory}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-[11px] font-mono text-emerald-300 truncate">
                  {kit.titleFa}
                </p>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="font-semibold text-slate-800">{kit.rating}</span>
                  <span className="text-slate-400 font-mono">({kit.reviewsCount} reviews)</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-medium">E-Namad Verified</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {kit.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {kit.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {kit.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <div className="flex items-baseline justify-between pt-2">
                  <div>
                    <div className="text-lg font-bold font-mono text-slate-900">
                      {formatTomanEn(kit.priceToman)}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {formatToman(kit.priceToman)}
                    </div>
                  </div>

                  {kit.originalPriceToman && (
                    <span className="text-xs line-through text-slate-400 font-mono">
                      {formatTomanEn(kit.originalPriceToman)}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => setSelectedProduct(kit)}
                  className="rounded-lg border border-slate-300 bg-white py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  View Details
                </button>

                <button
                  onClick={() => onAddToCart(kit)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-700 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700">
                <span>{selectedProduct.category.toUpperCase()}</span>
                <span>·</span>
                <span>CATALOG #{selectedProduct.id}</span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                {selectedProduct.title}
              </h2>
              <p className="text-xs font-mono text-slate-500">
                {selectedProduct.titleFa}
              </p>

              <div className="rounded-lg bg-slate-50 p-4 space-y-2 border border-slate-100">
                <div className="text-xs font-bold text-slate-800 uppercase font-mono">Technical Specifications</div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedProduct.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">›</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="rounded-lg border border-slate-200 p-3">
                  <span className="text-slate-400 block text-[10px]">LEAD TIME & LOGISTICS:</span>
                  <span className="font-semibold text-slate-800">
                    {selectedProduct.leadTimeDays === 0 ? 'Instant Digital Download (PWA)' : `${selectedProduct.leadTimeDays} Business Days via Tipax Express`}
                  </span>
                </div>
                <div className="rounded-lg border border-slate-200 p-3">
                  <span className="text-slate-400 block text-[10px]">NATIONAL BIOSAFETY CATEGORY:</span>
                  <span className="font-semibold text-slate-800">{selectedProduct.biosafetyCategory}</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <span className="text-xs text-slate-400 block">PRICE (INCLUDING 9% VAT):</span>
                  <span className="text-xl font-bold font-mono text-slate-900">
                    {formatTomanEn(selectedProduct.priceToman)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      onInstantBuy(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="rounded-lg bg-emerald-700 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-800 cursor-pointer"
                  >
                    Instant Shetab Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
