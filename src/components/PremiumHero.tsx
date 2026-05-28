"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    image: "https://loremflickr.com/800/600/cleaning?lock=58.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Kerala's Trusted Professional Cleaning Experts",
    subtitle: "Home, Office, School & Service Station Cleaning Services Across Kerala",
  },
  {
    image: "https://loremflickr.com/800/600/cleaning?lock=59.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Premium Office Cleaning Solutions",
    subtitle: "Commercial spaces, retail stores, and corporate offices sanitized to perfection",
  },
  {
    image: "https://loremflickr.com/800/600/cleaning?lock=60.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "School & Institutional Cleaning",
    subtitle: "Safe, hygienic environments for learning spaces across Kerala",
  },
  {
    image: "https://loremflickr.com/800/600/cleaning?lock=61.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Deep Cleaning & Sanitization",
    subtitle: "Thorough cleaning with eco-friendly products for healthy living",
  },
];

export default function PremiumHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-secondary-900/70 to-primary-600/60" />

      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl hover:shadow-white/30 group"
                >
                  Book Service
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full text-lg hover:bg-primary-700 transition transform hover:scale-105 shadow-xl hover:shadow-primary-600/30 group"
                >
                  Order Products
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🛒
                  </motion.span>
                </Link>

                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-full text-lg border border-white/30 hover:bg-white/20 transition transform hover:scale-105 shadow-xl"
                >
                  Get Free Quote
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex justify-center mt-12 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-primary-400 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}