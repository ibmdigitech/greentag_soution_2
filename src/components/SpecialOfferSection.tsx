"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "30% OFF Deep Cleaning",
    description: "Complete deep cleaning for your home or office",
    price: "₹2,999",
    originalPrice: "₹4,299",
    validUntil: "2025-01-31",
    badge: "LIMITED",
    image: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Free Sanitization",
    description: "Free sanitization with any service booking",
    price: "FREE",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1519710164236-cd02ccd2a374?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Festival Combo Offers",
    description: "Special packages for Onam & Eid celebrations",
    price: "From ₹1,499",
    badge: "FESTIVE",
    image: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "First Booking Discount",
    description: "25% off on your first service",
    price: "25% OFF",
    badge: "WELCOME",
    image: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=400&h=300&fit=crop",
  },
];

export default function SpecialOfferSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-800" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-900 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm font-medium">
              SPECIAL OFFERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Limited Time Offers
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Exclusive discounts for our valued customers across Kerala
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -top-3 -right-3 z-10">
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-secondary-900 font-bold text-xs">{offer.badge}</span>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-accent-gold"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              <div className="glass-dark rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{offer.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary-400">{offer.price}</span>
                    {offer.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">{offer.originalPrice}</span>
                    )}
                  </div>

                  <div className="relative overflow-hidden mb-4">
                    <div className="h-1 bg-secondary-700 rounded-full">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-400 to-accent-gold rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block">Limited time offer</span>
                  </div>

                  <Link
                    href="/request-quote"
                    className="block w-full text-center py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition group-hover:shadow-lg overflow-hidden relative"
                  >
                    <span className="relative z-10">Book Now</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}