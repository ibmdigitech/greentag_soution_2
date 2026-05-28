"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { CreditCardIcon, BanknotesIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function Checkout() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              Secure Checkout
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Complete your order with multiple payment options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.form
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-dark rounded-2xl p-8 shadow-xl space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CreditCardIcon className="w-6 h-6 text-primary-400" />
                    Customer Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm mb-2">Delivery Address</label>
                      <textarea
                        placeholder="Enter complete address with landmarks"
                        rows={3}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition resize-none"
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
                      { id: "cod", label: "Cash on Delivery", icon: BanknotesIcon, desc: "Pay on delivery" },
                      { id: "razorpay", label: "Razorpay (Online)", icon: CreditCardIcon, desc: "UPI, Card, Netbanking" },
                      { id: "whatsapp", label: "WhatsApp Order", icon: ChatBubbleLeftRightIcon, desc: "Order via chat" },
                    ].map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.id}
                          className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition"
                        >
                          <input type="radio" name="payment" className="w-5 h-5 text-primary-600" defaultChecked={method.id === "cod"} />
                          <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary-400" />
                          </div>
                          <div>
                            <p className="font-medium text-white">{method.label}</p>
                            <p className="text-sm text-gray-400">{method.desc}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-gold text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  Place Order Now
                </motion.button>
              </motion.form>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-dark rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                <div className="space-y-4">
                  {[
                    { name: "Floor Cleaner 1L", price: 299, qty: 2 },
                    { name: "Air Freshener", price: 449, qty: 1 },
                  ].map((item) => (
                    <div key={item.name} className="flex justify-between text-gray-300">
                      <span>{item.name} x {item.qty}</span>
                      <span>₹{item.price * item.qty}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>₹1,047</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>GST (18%)</span>
                      <span>₹188.46</span>
                    </div>
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>Total</span>
                      <span>₹1,235.46</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}