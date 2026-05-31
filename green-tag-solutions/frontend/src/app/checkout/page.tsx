"use client";

import { useState, useEffect } from "react";
import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  CreditCardIcon, 
  BanknotesIcon, 
  ChatBubbleLeftRightIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function Checkout() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isUpiModalOpen, setIsUpiModalOpen] = useState(false);
  const [upiStep, setUpiStep] = useState("pay"); // pay, verifying, success
  const [timeLeft, setTimeLeft] = useState(299); // 5 minutes timer
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isUpiModalOpen || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isUpiModalOpen, timeLeft]);

  if (!mounted) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "upi") {
      setIsUpiModalOpen(true);
      setUpiStep("pay");
      setTimeLeft(299);
    } else {
      // Simulate normal checkout
      alert("Order placed successfully via Cash on Delivery!");
      router.push("/");
    }
  };

  const verifyUpiPayment = () => {
    setUpiStep("verifying");
    setTimeout(() => {
      setUpiStep("success");
    }, 2500);
  };

  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-905 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900 dark:text-white mb-4 tracking-tight">
              Secure Checkout
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Complete your booking with Kerala&apos;s most trusted hygiene brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.form
                onSubmit={handlePlaceOrder}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-dark rounded-3xl p-8 shadow-2xl space-y-8 border border-white/5"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CreditCardIcon className="w-6 h-6 text-primary-400" />
                    Customer Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-medium">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm mb-2 font-medium">Delivery Address</label>
                      <textarea
                        placeholder="Enter complete address with landmarks"
                        rows={3}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition resize-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <BanknotesIcon className="w-6 h-6 text-primary-400" />
                    Payment Method
                  </h2>
                  <div className="space-y-4">
                    {[
                      { id: "upi", label: "UPI Instant Payment", icon: QrCodeIcon, desc: "Pay with GPay, PhonePe, Paytm or scan QR Code" },
                      { id: "cod", label: "Cash on Delivery", icon: BanknotesIcon, desc: "Pay with cash at your doorstep" },
                      { id: "whatsapp", label: "WhatsApp Invoice Checkout", icon: ChatBubbleLeftRightIcon, desc: "Complete reservation and get invoice on WhatsApp" },
                    ].map((method) => {
                      const Icon = method.icon;
                      const isSelected = paymentMethod === method.id;
                      return (
                        <label
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition border duration-300 ${
                            isSelected
                              ? "bg-primary-600/10 border-primary-500/50 shadow-lg shadow-primary-600/5"
                              : "bg-white/5 border-white/10 hover:bg-white/10"
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="payment" 
                            className="w-5 h-5 text-primary-600 focus:ring-0 focus:ring-offset-0 border-white/20 bg-transparent" 
                            checked={isSelected}
                            onChange={() => {}}
                          />
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                            isSelected ? "bg-primary-600 text-white" : "bg-white/10 text-gray-400"
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{method.label}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{method.desc}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-gold hover:from-primary-700 hover:to-yellow-600 text-white font-bold rounded-2xl shadow-xl shadow-primary-600/10 transition active:scale-95"
                >
                  {paymentMethod === "upi" ? "Proceed to UPI Payment" : "Place Order"}
                </motion.button>
              </motion.form>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-dark rounded-3xl p-6 shadow-2xl border border-white/5"
              >
                <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                <div className="space-y-4">
                  {[
                    { name: "Floor Cleaner Pro 5L", price: 450, qty: 2 },
                    { name: "Heavy Duty Mop Set", price: 650, qty: 1 },
                  ].map((item) => (
                    <div key={item.name} className="flex justify-between text-gray-300 text-sm">
                      <span className="font-medium">{item.name} x {item.qty}</span>
                      <span className="font-bold text-white">₹{item.price * item.qty}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-4 space-y-2.5">
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>Subtotal</span>
                      <span>₹1,550</span>
                    </div>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>GST (18%)</span>
                      <span>₹279</span>
                    </div>
                    <div className="flex justify-between text-white text-lg font-bold pt-1.5 border-t border-white/5">
                      <span>Total</span>
                      <span className="text-primary-400">₹1,829.00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* UPI Payment Modal */}
      <AnimatePresence>
        {isUpiModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 select-none"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-secondary-900 border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-6 md:p-8 text-center relative"
            >
              {upiStep === "pay" && (
                <>
                  <div className="flex items-center justify-between mb-6 pb-4 border-bottom border-white/5">
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">UPI Secured Checkout</span>
                    <button 
                      onClick={() => setIsUpiModalOpen(false)}
                      className="text-gray-500 hover:text-white transition text-xs font-bold px-2.5 py-1 rounded-md bg-white/5"
                    >
                      Cancel
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">Scan QR to Pay</h3>
                  <p className="text-xs text-gray-400 mb-6">Scan using Google Pay, PhonePe, Paytm, BHIM, or any banking app</p>
                  
                  {/* Premium Stylized Vector QR Code */}
                  <div className="relative w-48 h-48 bg-white p-3 rounded-2xl mx-auto mb-6 shadow-xl border border-gray-150 flex items-center justify-center">
                    <svg className="w-full h-full text-secondary-900" viewBox="0 0 100 100">
                      {/* Quiet zones & outer anchors */}
                      <path fill="currentColor" d="M0 0h30v8H8v22H0V0zm70 0h30v30h-8V8H70V0zM0 70h8v14h22v8H0V70zm100 0v30H70v-8h14V70h8z" />
                      {/* Top-Left Anchor */}
                      <path fill="currentColor" d="M12 12h14v14H12z M15 15h8v8h-8z M18 18h2v2h-2z" />
                      {/* Top-Right Anchor */}
                      <path fill="currentColor" d="M74 12h14v14H74z M77 15h8v8h-8z M80 18h2v2h-2z" />
                      {/* Bottom-Left Anchor */}
                      <path fill="currentColor" d="M12 74h14v14H12z M15 77h8v8h-8z M18 80h2v2h-2z" />
                      {/* Beautiful abstract data grid simulating a real QR code */}
                      <path fill="currentColor" d="M45 15h5v5h-5zM55 12h5v5h-5zM35 25h5v5h-5zM48 28h5v5h-5zM60 22h5v5h-5zM38 38h5v5h-5zM48 42h5v5h-5zM58 45h5v5h-5zM35 55h5v5h-5zM52 52h5v5h-5zM65 58h5v5h-5zM42 65h5v5h-5zM55 62h5v5h-5zM62 65h5v5h-5z" />
                      {/* Green Tag central core emblem */}
                      <rect x="42" y="42" width="16" height="16" rx="4" fill="#059669" />
                      <path d="M47 50l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  <div className="mb-6">
                    <span className="text-2xl font-black text-primary-400">₹1,829.00</span>
                    <span className="text-xs text-gray-500 block mt-1">UPI ID: greentag@upi</span>
                  </div>

                  {/* Timer & Security details */}
                  <div className="flex justify-center items-center gap-5 bg-white/5 border border-white/5 rounded-2xl p-4 mb-6">
                    <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-sm">
                      <ClockIcon className="w-4 h-4" />
                      <span>{formatTime(timeLeft)}</span>
                    </div>
                    <div className="w-[1px] h-6 bg-white/10" />
                    <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                      <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                      <span>Encrypted Gateway</span>
                    </div>
                  </div>

                  {/* Trigger buttons simulation */}
                  <button
                    onClick={verifyUpiPayment}
                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>I Have Paid (Verify Payment)</span>
                  </button>
                </>
              )}

              {upiStep === "verifying" && (
                <div className="py-16 flex flex-col items-center justify-center">
                  <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-primary-500/20" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-t-primary-500"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Verifying Payment</h3>
                  <p className="text-xs text-gray-400 max-w-xs">
                    Please do not close this window. We are checking the bank networks for transaction updates.
                  </p>
                </div>
              )}

              {upiStep === "success" && (
                <div className="py-10 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircleIcon className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Payment Successful!</h3>
                  <p className="text-xs text-gray-400 mb-8 max-w-xs">
                    Your order of ₹1,829.00 has been verified. Welcome to premium hygiene with Green Tag!
                  </p>
                  <button
                    onClick={() => {
                      setIsUpiModalOpen(false);
                      router.push("/");
                    }}
                    className="px-8 py-3 bg-primary-600 hover:bg-primary-750 text-white font-bold rounded-xl transition duration-300 shadow-md active:scale-95"
                  >
                    Back to Home
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <PremiumFooter />
    </>
  );
}