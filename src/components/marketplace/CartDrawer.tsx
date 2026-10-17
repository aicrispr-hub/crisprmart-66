import React from 'react';
import { ProductKit } from '../../types';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { ENamadBadge } from '../ENamadBadge';

interface CartItem {
  kit: ProductKit;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.kit.priceToman * item.quantity, 0);
  const vat = Math.round(subtotal * 0.09);
  const total = subtotal + vat;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs">
      <div className="relative flex h-full w-full max-w-md flex-col justify-between bg-white shadow-2xl">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-emerald-700" />
            <h2 className="text-base font-bold text-slate-900">
              سبد خرید کریسپرمارت (crisprmart.ir)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
              <ShoppingBag className="h-12 w-12 text-slate-300" />
              <p className="text-sm font-medium text-slate-600">
                سبد خرید شما در حال حاضر خالی است.
              </p>
              <p className="text-xs text-slate-400 max-w-xs">
                کیت‌های مولکولی، نوارهای تشخیصی دامپزشکی یا مجوزهای آفلاین PWA را انتخاب کنید.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.kit.id}
                className="flex gap-3 rounded-lg border border-slate-200 p-3 bg-white"
              >
                <div className="flex-1 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-2">
                    {item.kit.title}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400 truncate">
                    {item.kit.titleFa}
                  </p>
                  <div className="text-xs font-mono font-bold text-emerald-800">
                    {(item.kit.priceToman).toLocaleString('fa-IR')} تومان
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-center rounded border border-slate-300">
                      <button
                        onClick={() => onUpdateQuantity(item.kit.id, -1)}
                        className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.kit.id, 1)}
                        className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.kit.id)}
                      className="text-slate-400 hover:text-rose-600 cursor-pointer p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {items.length > 0 && (
          <div className="border-t border-slate-200 p-5 space-y-4 bg-slate-50">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-slate-600">
                <span>مجموع اقلام:</span>
                <span>{subtotal.toLocaleString('fa-IR')} تومان</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>مالیات بر ارزش افزوده (۹٪):</span>
                <span>{vat.toLocaleString('fa-IR')} تومان</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-slate-200 pt-2">
                <span>مبلغ نهایی قابل پرداخت:</span>
                <span className="text-emerald-700">{total.toLocaleString('fa-IR')} تومان</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-700 py-3 text-xs font-bold text-white hover:bg-emerald-800 transition-colors cursor-pointer shadow-xs"
            >
              <span>اتصال به درگاه بانکی شتاب (شاپرک)</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>دارای نماد اعتماد الکترونیکی رسمی (اینماد ۲ ستاره)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
