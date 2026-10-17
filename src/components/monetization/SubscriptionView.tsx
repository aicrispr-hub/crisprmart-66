import React, { useState } from 'react';
import { SUBSCRIPTION_PLANS } from '../../data/mockData';
import { SubscriptionPlan, MainTab } from '../../types';
import { Check, ShieldCheck, Zap, Download, CreditCard, Sparkles, Building2 } from 'lucide-react';
import { ShetabCheckoutModal } from './ShetabCheckoutModal';
import { ENamadBadge } from '../ENamadBadge';

interface SubscriptionViewProps {
  onPlanSelected: (plan: SubscriptionPlan) => void;
}

export const SubscriptionView: React.FC<SubscriptionViewProps> = ({ onPlanSelected }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<SubscriptionPlan | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const handleChoosePlan = (plan: SubscriptionPlan) => {
    if (plan.priceTomanMonthly === 0) {
      alert('You have successfully activated the Researcher Free Tier!');
      return;
    }
    setSelectedPlanForCheckout(plan);
    setCheckoutModalOpen(true);
  };

  const formatPrice = (plan: SubscriptionPlan) => {
    const amount = billingCycle === 'annual' ? plan.priceTomanAnnual : plan.priceTomanMonthly;
    if (amount === 0) return 'Free';
    return (
      <>
        <span>{amount.toLocaleString('en-US')}</span>
        <span className="text-xs font-normal text-slate-500 font-sans ml-1">
          Tomans / {billingCycle === 'annual' ? 'year' : 'month'}
        </span>
      </>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-12">
      {/* Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white relative">
        <div className="max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-mono font-semibold text-emerald-400 border border-emerald-500/30">
              MONETIZATION ARCHITECTURE
            </span>
            <span className="text-xs text-slate-300">
              اشتراک‌های ماهانه، سالانه و Pay-Per-Use به تومان ایران با درگاه شتاب
            </span>
            <ENamadBadge compact />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Transparent Subscription & Pay-Per-Use Pricing
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Unrestricted access to offline PWA tools, specialized polyploid AI bio-agents on <strong className="text-cyan-400">aicrispr.ir</strong>, and automatic discounts on physical synthesis kits on <strong className="text-emerald-400">crisprmart.ir</strong>.
          </p>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Billing (تسویه ماهانه)
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
              billingCycle === 'annual'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Annual (تسویه سالانه)</span>
            <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5">
              2 Months Free
            </span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {SUBSCRIPTION_PLANS.map((plan) => {
          const isPop = plan.popular;
          return (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-2xl border p-6 transition-all ${
                isPop
                  ? 'border-emerald-500 bg-white shadow-lg ring-1 ring-emerald-500 relative'
                  : 'border-slate-200 bg-white shadow-xs'
              }`}
            >
              {isPop && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-0.5 text-[11px] font-bold text-white shadow-xs uppercase font-mono">
                  Most Popular for Iranian Labs
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-900">
                      {plan.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 text-right" dir="rtl">
                      {plan.nameFa}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mt-1">
                    {plan.targetUser}
                  </p>
                </div>

                <div className="border-y border-slate-100 py-4">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                    {formatPrice(plan)}
                  </div>
                  {plan.priceTomanMonthly > 0 && (
                    <div className="text-[11px] text-slate-400 mt-1">
                      Includes 9% statutory VAT and immediate electronic tax invoice.
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-bold text-slate-700 uppercase font-mono text-[10px]">Included Features:</span>
                  <ul className="space-y-2 text-slate-600">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isPop
                      ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-xs'
                      : plan.priceTomanMonthly === 0
                      ? 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.priceTomanMonthly === 0 ? 'Start Free Tier' : 'Subscribe via Shetab'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pay-Per-Use Add-on Section */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 font-bold">
              <Zap className="h-4 w-4 text-cyan-600" />
              <span>PAY-PER-USE MICROPAYMENT TOKENS</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Need only occasional dry-lab runs?
            </h3>
            <p className="text-xs text-slate-600">
              Purchase token packs (250,000 Tomans for 50 computational runs on aicrispr.ir) without ongoing monthly commitments.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedPlanForCheckout({
                id: 'token-pack-50',
                name: '50-Token Computational Pack',
                nameFa: 'بسته ۵۰ تایی توکن محاسباتی',
                priceTomanMonthly: 250000,
                priceTomanAnnual: 250000,
                description: '50 Pay-per-use runs',
                targetUser: 'Ad-hoc researchers',
                features: ['50 Runs on aicrispr.ir', 'No expiry date'],
                apiTokensPerMonth: 50,
                pwaOfflineAccess: true,
                crisprmartKitDiscountPct: 0
              });
              setCheckoutModalOpen(true);
            }}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 cursor-pointer whitespace-nowrap"
          >
            Buy 50 Tokens (250,000 T)
          </button>
        </div>
      </div>

      {/* Shetab Modal */}
      {selectedPlanForCheckout && (
        <ShetabCheckoutModal
          isOpen={checkoutModalOpen}
          onClose={() => setCheckoutModalOpen(false)}
          orderTitle={selectedPlanForCheckout.name}
          amountToman={billingCycle === 'annual' ? selectedPlanForCheckout.priceTomanAnnual : selectedPlanForCheckout.priceTomanMonthly}
          onSuccess={(track) => {
            onPlanSelected(selectedPlanForCheckout);
          }}
        />
      )}
    </div>
  );
};
