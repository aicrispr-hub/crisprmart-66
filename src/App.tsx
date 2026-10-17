import React, { useState } from 'react';
import { MainTab, DomainType, ProductKit, SubscriptionPlan } from './types';
import { Header } from './components/Header';
import { DomainSwitcher } from './components/DomainSwitcher';
import { OverviewView } from './components/overview/OverviewView';
import { MarketplaceView } from './components/marketplace/MarketplaceView';
import { AIAgentStudioView } from './components/ai/AIAgentStudioView';
import { TechArchiveView } from './components/tech/TechArchiveView';
import { EdTechCurriculumView } from './components/edtech/EdTechCurriculumView';
import { ViralScriptStudioView } from './components/viral/ViralScriptStudioView';
import { SgRnaDesignerView } from './components/tools/SgRnaDesignerView';
import { AgroSimulatorView } from './components/tools/AgroSimulatorView';
import { VetDiagConfiguratorView } from './components/tools/VetDiagConfiguratorView';
import { SubscriptionView } from './components/monetization/SubscriptionView';
import { CartDrawer } from './components/marketplace/CartDrawer';
import { ShetabCheckoutModal } from './components/monetization/ShetabCheckoutModal';
import { Footer } from './components/Footer';
import { PRODUCT_KITS } from './data/mockData';
import { WifiOff, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('overview');
  const [activeDomain, setActiveDomain] = useState<DomainType>('crisprmart');
  const [cartItems, setCartItems] = useState<{ kit: ProductKit; quantity: number }[]>([
    { kit: PRODUCT_KITS[3], quantity: 1 } // Pre-seed with Offline PWA Software License
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Shetab Checkout Modal State
  const [checkoutModalData, setCheckoutModalData] = useState<{
    isOpen: boolean;
    title: string;
    amountToman: number;
  }>({
    isOpen: false,
    title: '',
    amountToman: 0,
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (kit: ProductKit) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.kit.id === kit.id);
      if (existing) {
        return prev.map((item) =>
          item.kit.id === kit.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { kit, quantity: 1 }];
    });
    showToast(`Added "${kit.title}" to crisprmart.ir cart`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.kit.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as { kit: ProductKit; quantity: number }[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.kit.id !== id));
  };

  const handleInstantBuy = (kit: ProductKit) => {
    setCheckoutModalData({
      isOpen: true,
      title: kit.title,
      amountToman: kit.priceToman,
    });
  };

  const handleCartProceedToCheckout = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.kit.priceToman * item.quantity, 0);
    const total = subtotal + Math.round(subtotal * 0.09);
    setIsCartOpen(false);
    setCheckoutModalData({
      isOpen: true,
      title: `CRISPR Mart Order (${cartItems.length} items)`,
      amountToman: total,
    });
  };

  const handleOrderCustomOligo = (oligo: { gene: string; sequence: string; price: number }) => {
    // Add custom synthesized oligo kit to cart
    const customKit: ProductKit = {
      id: `custom-oligo-${Date.now()}`,
      title: `Custom Synthesis: ${oligo.gene} (${oligo.sequence})`,
      titleFa: `سفارش الیگوی اختصاصی سنتزشده: ${oligo.gene}`,
      domain: 'crisprmart',
      category: 'reagents',
      priceToman: oligo.price,
      inStock: true,
      leadTimeDays: 2,
      description: `HPLC Purified oligonucleotide duplex custom designed via aicrispr.ir. Target sequence: ${oligo.sequence}`,
      specifications: ['Purity: >98% HPLC', 'Buffer: 10 mM Tris-EDTA', 'Cold-chain dispatch'],
      applications: ['Golden Gate Assembly', 'Wheat Editing'],
      eNamadApproved: true,
      biosafetyCategory: 'Class-I Exempt',
      rating: 5.0,
      reviewsCount: 1,
      image: '/src/assets/images/crisprmart_biotech_lab_1791488348227.jpg'
    };
    handleAddToCart(customKit);
    setIsCartOpen(true);
  };

  const handleOrderVetKits = (details: { title: string; count: number; priceToman: number }) => {
    const customKit: ProductKit = {
      id: `vet-batch-${Date.now()}`,
      title: details.title,
      titleFa: `بسته سفارشی نوارهای تشخیصی دامپزشکی`,
      domain: 'crisprmart',
      category: 'diagnostic-strips',
      priceToman: details.priceToman,
      inStock: true,
      leadTimeDays: 1,
      description: `Batch order of field-deployable isothermal Cas12a/Cas13a test strips for herd diagnostic biosecurity.`,
      specifications: ['Isothermal 37°C reaction', 'FAM-Biotin detection strip', 'Sterile swabs included'],
      applications: ['Livestock Disease Control', 'Poultry Screening'],
      eNamadApproved: true,
      biosafetyCategory: 'Diagnostic Only',
      rating: 4.9,
      reviewsCount: 4,
      image: '/src/assets/images/veterinary_crispr_diagnostic_1791488364490.jpg'
    };
    handleAddToCart(customKit);
    setIsCartOpen(true);
  };

  const handlePlanSelected = (plan: SubscriptionPlan) => {
    showToast(`Subscription activated: ${plan.name}`);
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Offline PWA Banner Indicator if active */}
      {isOfflineMode && (
        <div className="bg-amber-500 text-slate-950 px-4 py-1.5 text-xs font-mono font-bold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <WifiOff className="h-3.5 w-3.5" />
            <span>
              PWA OFFLINE MODE SIMULATED · Client-Side WebAssembly Active (Zero Network Dependency)
            </span>
          </div>
          <button
            onClick={() => setIsOfflineMode(false)}
            className="text-[11px] underline cursor-pointer"
          >
            Re-enable Online Sync
          </button>
        </div>
      )}

      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeDomain={activeDomain}
        setActiveDomain={setActiveDomain}
        cartCount={cartTotalCount}
        openCart={() => setIsCartOpen(true)}
        isOfflineMode={isOfflineMode}
        setIsOfflineMode={setIsOfflineMode}
      />

      {/* Inter-Domain Switcher Sub-Header */}
      <DomainSwitcher
        activeDomain={activeDomain}
        setActiveDomain={setActiveDomain}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Stage */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <OverviewView
            setActiveTab={setActiveTab}
            setActiveDomain={setActiveDomain}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'marketplace' && (
          <MarketplaceView
            onAddToCart={handleAddToCart}
            onInstantBuy={handleInstantBuy}
          />
        )}

        {activeTab === 'ai-agents' && (
          <AIAgentStudioView
            onOrderOligo={handleOrderCustomOligo}
            isOfflineMode={isOfflineMode}
          />
        )}

        {activeTab === 'digital-library' && (
          <TechArchiveView />
        )}

        {activeTab === 'edtech-analysis' && (
          <EdTechCurriculumView
            setActiveTab={setActiveTab}
            setActiveDomain={setActiveDomain}
          />
        )}

        {activeTab === 'viral-scriptwriter' && (
          <ViralScriptStudioView
            setActiveTab={setActiveTab}
            setActiveDomain={setActiveDomain}
          />
        )}

        {activeTab === 'sgrna-tool' && (
          <SgRnaDesignerView
            onOrderOligo={handleOrderCustomOligo}
            isOfflineMode={isOfflineMode}
          />
        )}

        {activeTab === 'agro-simulator' && (
          <AgroSimulatorView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'vet-diagnostics' && (
          <VetDiagConfiguratorView
            onOrderKits={handleOrderVetKits}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'subscriptions' && (
          <SubscriptionView onPlanSelected={handlePlanSelected} />
        )}
      </main>

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleCartProceedToCheckout}
      />

      {/* Shetab / Shaparak Payment Gateway Modal */}
      <ShetabCheckoutModal
        isOpen={checkoutModalData.isOpen}
        onClose={() => setCheckoutModalData((prev) => ({ ...prev, isOpen: false }))}
        orderTitle={checkoutModalData.title}
        amountToman={checkoutModalData.amountToman}
        onSuccess={(track) => {
          showToast(`Payment successful! Shaparak RRN: ${track}`);
          setCartItems([]);
        }}
      />

      {/* Unified Footer */}
      <Footer setActiveTab={setActiveTab} setActiveDomain={setActiveDomain} />
    </div>
  );
}
