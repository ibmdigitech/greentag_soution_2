"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const waMessage = `Hello Green Tag Solutions, I have a query:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`, "_blank");
  };

  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Get in touch for a free consultation or quote
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-dark rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 transition resize-none"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-gold text-white font-semibold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    Send via WhatsApp
                    <span>→</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-dark rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <p className="text-gray-300">Ernakulam, Kochi, Kerala, India</p>
                      <p className="text-gray-300 text-sm">Serving all districts across Kerala</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-300">info@greentagsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Working Hours</p>
                      <p className="text-gray-300">Mon-Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-300">Sunday: Emergency Services Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-5 bg-green-500 text-white font-semibold rounded-2xl text-lg hover:bg-green-600 transition shadow-lg"
              >
                <span className="text-2xl">📱</span>
                Chat on WhatsApp Instantly
              </motion.a>
            </motion.div>
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}