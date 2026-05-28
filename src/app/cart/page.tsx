"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Floor Cleaner 1L", price: 299, quantity: 2, image: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=100&h=100&fit=crop" },
    { id: 2, name: "Air Freshener", price: 449, quantity: 1, image: "https://images.unsplash.com/photo-1512901023466-207c320e8406?w=100&h=100&fit=crop" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

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
              Your Shopping Cart
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Review your items before checkout
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto bg-gray-200 dark:bg-secondary-700 rounded-full flex items-center justify-center mb-6">
                <ShoppingCartIcon className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                Your cart is empty
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Add some cleaning products to get started
              </p>
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition"
              >
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Shop Products
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-dark rounded-2xl overflow-hidden shadow-xl"
                >
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-6 border-b border-white/10 last:border-0"
                    >
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{item.name}</h4>
                        <p className="text-gray-300">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition">
                          -
                        </button>
                        <span className="text-white font-medium">{item.quantity}</span>
                        <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition">
                          +
                        </button>
                      </div>
                      <button className="text-red-400 hover:text-red-300 transition">
                        ✕
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-dark rounded-2xl p-6 shadow-xl"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>GST (18%)</span>
                      <span>₹{gst.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-white text-lg font-bold">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/checkout"
                      className="block w-full py-3 bg-gradient-to-r from-primary-600 to-accent-gold text-white font-semibold rounded-lg text-center hover:shadow-lg transition"
                    >
                      Proceed to Checkout
                    </Link>
                    <a
                      href={`https://wa.me/919876543210?text=Hello Green Tag Solutions, I would like to place the following order...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-green-600 text-white font-semibold rounded-lg text-center hover:bg-green-700 transition"
                    >
                      Order via WhatsApp
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}