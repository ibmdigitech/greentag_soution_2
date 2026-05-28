"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "New Year Special - 30% OFF",
    description: "Celebrate the New Year with sparkling clean spaces",
    price: 1999,
    originalPrice: 2999,
    validUntil: "2025-02-28",
    tag: "NEW YEAR",
    image: "https://images.unsplash.com/photo-1512901023466-207c320e8406?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Onam Festival Combo",
    description: "Complete home cleaning package for Onam celebrations",
    price: 2499,
    originalPrice: 3499,
    validUntil: "2025-02-15",
    tag: "ONAM",
    image: "https://images.unsplash.com/photo-1609024399510-3ddd4b6c6dfb?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Eid Special Deep Cleaning",
    description: "Prepare your home for Eid with our premium deep cleaning",
    price: 2999,
    originalPrice: 4299,
    validUntil: "2025-02-28",
    tag: "EID",
    image: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=600&h=400&fit=crop",
  },
];

export default function Offers() {
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
              Special Offers & Promotions
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Exclusive deals for our valued customers across Kerala
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <span className="absolute -top-4 -right-4 w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center font-bold text-secondary-900 shadow-lg z-10 text-center text-xs">
                  SAVE<br />{Math.round((1 - offer.price / offer.originalPrice) * 100)}%
                </span>

                <div className="glass-dark rounded-2xl overflow-hidden shadow-xl h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                      {offer.tag}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {offer.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-1">
                      {offer.description}
                    </p>

                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-3xl font-bold text-primary-400">₹{offer.price}</span>
                      <span className="text-gray-400 line-through text-lg">₹{offer.originalPrice}</span>
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Valid until: {offer.validUntil}</span>
                        <span>Limited spots</span>
                      </div>
                      <div className="h-2 bg-secondary-700 rounded-full">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-400 to-accent-gold rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>

                    <Link
                      href="/request-quote"
                      className="block w-full py-3 bg-primary-600 text-white font-semibold rounded-lg text-center hover:bg-primary-700 transition"
                    >
                      Claim Offer Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}