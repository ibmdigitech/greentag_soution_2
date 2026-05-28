"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon 
} from "@heroicons/react/24/outline";

export default function PremiumFooter() {
  return (
    <footer className="bg-gradient-to-b from-secondary-900 to-secondary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gradient mb-4">Green Tag Solutions</h3>
              <p className="text-gray-300 mb-6">
                Kerala's premier cleaning & facility management company. 
                Serving homes, offices, and institutions across God's Own Country.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Products", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Home Cleaning</li>
              <li className="text-gray-300">Office Cleaning</li>
              <li className="text-gray-300">Deep Cleaning</li>
              <li className="text-gray-300">Pest Control</li>
              <li className="text-gray-300">Water Tank Cleaning</li>
              <li className="text-gray-300">Sofa & Carpet Cleaning</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Ernakulam, Kochi, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@greentagsolutions.com</span>
              </li>
            </ul>

            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center mt-6 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition shadow-lg"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Green Tag Solutions. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-400">Payment Methods:</span>
            <div className="flex space-x-2">
              {["Visa", "Mastercard", "UPI", "COD"].map((method) => (
                <div key={method} className="w-10 h-6 bg-white/10 rounded" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}