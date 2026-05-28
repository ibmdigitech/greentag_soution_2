"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative text-white py-20 md:py-28 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-800/90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Cleaning Services Across Kerala
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-100">
              Premium home, office, and industrial cleaning with eco-friendly products. 
              Trusted by 500+ customers across God's Own Country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                Book Cleaning Now
              </Link>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 font-semibold rounded-lg hover:bg-green-600 transition shadow-lg"
              >
                Order Products via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}