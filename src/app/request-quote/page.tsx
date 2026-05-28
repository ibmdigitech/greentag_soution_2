"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { CalendarIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function RequestQuote() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
              Book Your Cleaning Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Fill the form below and our team will contact you within minutes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-dark rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary-400 transition">
                    <option>Select Service Type</option>
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>School Cleaning</option>
                    <option>Hospital Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Sofa Cleaning</option>
                    <option>Carpet Cleaning</option>
                    <option>Water Tank Cleaning</option>
                    <option>Petrol Pump Cleaning</option>
                    <option>Industrial Cleaning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Property / Service Address</label>
                <textarea
                  placeholder="Enter complete address with landmarks"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Service Requirements</label>
                <textarea
                  placeholder="Describe your requirements, property size, special instructions..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Preferred Date</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary-400 transition"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Preferred Time Slot</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary-400 transition">
                    <option>Morning (9AM-12PM)</option>
                    <option>Afternoon (12PM-4PM)</option>
                    <option>Evening (4PM-7PM)</option>
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-gold text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
              >
                <DocumentTextIcon className="w-5 h-5" />
                Submit Booking Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}