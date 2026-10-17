import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, Printer, X, RefreshCw } from 'lucide-react';
import { LEGAL_COMPLIANCE_INFO } from '../../data/mockData';

interface ShetabCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderTitle: string;
  amountToman: number;
  onSuccess: (trackingNumber: string) => void;
}

export const ShetabCheckoutModal: React.FC<ShetabCheckoutModalProps> = ({
  isOpen,
  onClose,
  orderTitle,
  amountToman,
  onSuccess,
}) => {
  const [cardNumber, setCardNumber] = useState('6037-9918-4521-8890');
  const [cvv2, setCvv2] = useState('734');
  const [expMonth, setExpMonth] = useState('08');
  const [expYear, setExpYear] = useState('06');
  const [otp, setOtp] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpTimer, setOtpTimer] = useState(120);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  useEffect(() => {
    let interval: any = null;
    if (otpRequested && otpTimer > 0) {
      interval = setInterval(() => setOtpTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpRequested, otpTimer]);

  if (!isOpen) return null;

  const handleRequestOtp = () => {
    setOtpRequested(true);
    setOtpTimer(120);
    // Simulate SMS arrival
    setTimeout(() => {
      setOtp('849201');
    }, 1200);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const track = 'SHP-' + Math.floor(100000000 + Math.random() * 900000000);
      setTrackingCode(track);
      setIsProcessing(false);
      setIsCompleted(true);
      onSuccess(track);
    }, 1200);
  };

  const vatToman = Math.round(amountToman * 0.09);
  const totalWithVat = amountToman + vatToman;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
        {/* Gateway Header */}
        <div className="bg-slate-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold font-mono">
              SHP
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <Lock className="h-3 w-3" />
                <span>SHAPARAK SECURE GATEWAY (شاپرک)</span>
              </div>
              <h3 className="text-sm font-bold text-slate-100">
                درگاه پرداخت الکترونیک به پرداخت ملت / سامان
              </h3>
            </div>
          </div>

          {!isCompleted && (
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Content Body */}
        {!isCompleted ? (
          <form onSubmit={handlePay} className="p-6 space-y-4">
            {/* Merchant Summary */}
            <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-200 space-y-1 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">پذیرنده (Merchant):</span>
                <span className="font-bold text-slate-900">crisprmart.ir (کریسپر مارت)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">کالای انتخابی:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[220px]">{orderTitle}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1 mt-1 text-sm">
                <span className="text-slate-700 font-bold">مبلغ کل پرداختی:</span>
                <span className="font-extrabold text-emerald-700">
                  {amountToman.toLocaleString('fa-IR')} تومان
                </span>
              </div>
            </div>

            {/* Shetab Card Inputs */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  شماره کارت ۱۶ رقمی شتاب:
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 p-2.5 font-mono text-sm tracking-widest text-center text-slate-900 focus:border-emerald-600 focus:outline-none"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    کد شناسایی دوم (CVV2):
                  </label>
                  <input
                    type="password"
                    value={cvv2}
                    onChange={(e) => setCvv2(e.target.value)}
                    maxLength={4}
                    className="w-full rounded-lg border border-slate-300 p-2 font-mono text-center text-slate-900 focus:border-emerald-600 focus:outline-none"
                    placeholder="***"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    تاریخ انقضا:
                  </label>
                  <div className="flex items-center gap-1 font-mono">
                    <input
                      type="text"
                      value={expMonth}
                      onChange={(e) => setExpMonth(e.target.value)}
                      maxLength={2}
                      className="w-1/2 rounded-lg border border-slate-300 p-2 text-center text-slate-900 focus:border-emerald-600 focus:outline-none"
                      placeholder="ماه"
                      required
                    />
                    <span>/</span>
                    <input
                      type="text"
                      value={expYear}
                      onChange={(e) => setExpYear(e.target.value)}
                      maxLength={2}
                      className="w-1/2 rounded-lg border border-slate-300 p-2 text-center text-slate-900 focus:border-emerald-600 focus:outline-none"
                      placeholder="سال"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic OTP */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-slate-700 font-medium">
                    رمز پویا (پیامکی):
                  </label>
                  <button
                    type="button"
                    onClick={handleRequestOtp}
                    className="text-xs text-emerald-700 hover:underline font-semibold cursor-pointer"
                  >
                    {otpRequested ? `ارسال مجدد (${otpTimer} ثانیه)` : 'درخواست رمز پویا'}
                  </button>
                </div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="w-full rounded-lg border border-slate-300 p-2 font-mono text-center tracking-widest text-slate-900 focus:border-emerald-600 focus:outline-none"
                  placeholder="کد ۶ رقمی پیامک‌شده"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full rounded-lg bg-emerald-700 py-3 text-xs font-bold text-white hover:bg-emerald-800 disabled:opacity-50 cursor-pointer transition-colors shadow-xs"
              >
                {isProcessing ? 'در حال ارتباط با شاپرک...' : `پرداخت نهایی (${amountToman.toLocaleString('fa-IR')} تومان)`}
              </button>
            </div>

            <div className="text-[10px] text-slate-400 text-center font-mono">
              اتصال امن ۲۵۶ بیتی تحت نظارت بانک مرکزی جمهوری اسلامی ایران
            </div>
          </form>
        ) : (
          /* Payment Success & Official E-Invoice */
          <div className="p-6 space-y-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900">
                پرداخت با موفقیت انجام شد
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                سفارش شما در سامانه رسمی crisprmart.ir ثبت و کد رهگیری شاپرک صادر شد.
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 text-xs font-mono space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-500">شماره پیگیری شاپرک (RRN):</span>
                <span className="font-bold text-slate-900">{trackingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">شماره سفارش:</span>
                <span className="font-bold text-slate-900">ORD-IR-{Math.floor(10000 + Math.random() * 90000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">شناسه ملی پذیرنده:</span>
                <span className="font-bold text-slate-900">{LEGAL_COMPLIANCE_INFO.nationalId}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1 text-emerald-700 font-bold">
                <span>مبلغ تسویه‌شده:</span>
                <span>{amountToman.toLocaleString('fa-IR')} تومان</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="rounded-lg bg-slate-900 px-6 py-2 text-xs font-semibold text-white hover:bg-slate-800 cursor-pointer"
              >
                بازگشت به برنامه
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
