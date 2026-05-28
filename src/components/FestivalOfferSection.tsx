"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const festivals = [
  {
    id: 1,
    name: "Onam Cleaning Offers",
    description: "Special cleaning packages for the festival of harvest",
    image: "https://loremflickr.com/800/600/cleaning?lock=52",
    discount: "30%",
    tag: "Harvest Special",
  },
  {
    id: 2,
    name: "Ramadan Cleaning",
    description: "Pre-Ramadan home and office cleaning services",
    image: "https://loremflickr.com/800/600/cleaning?lock=53",
    discount: "25%",
    tag: "Ramadan Mubarak",
  },
  {
    id: 3,
    name: "Eid Special Deep Cleaning",
    description: "Prepare your home for Eid celebrations",
    image: "https://loremflickr.com/800/600/cleaning?lock=54",
    discount: "35%",
    tag: "Eid Mubarak",
  },
  {
    id: 4,
    name: "Christmas Home Cleaning",
    description: "Festive cleaning for Christmas & New Year",
    image: "https://loremflickr.com/800/600/cleaning?lock=55",
    discount: "20%",
    tag: "Christmas Special",
  },
  {
    id: 5,
    name: "New Year Office Cleaning",
    description: "Start fresh in the new year with our office cleaning",
    image: "https://loremflickr.com/800/600/cleaning?lock=56",
    discount: "20%",
    tag: "New Year",
  },
];

export default function FestivalOfferSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-gold rounded-full"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Festival Special Offers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Celebrate Kerala's festivals with sparkling clean spaces
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-80 group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent" />
                    
                    <motion.div
                      className="absolute top-4 right-4 bg-accent-gold text-secondary-900 px-4 py-2 rounded-full font-bold text-lg shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {festival.discount} OFF
                    </motion.div>

                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary-600/80 backdrop-blur text-white text-xs rounded-full">
                        {festival.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-white dark:bg-secondary-800">
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                      {festival.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {festival.description}
                    </p>

                    <Link
                      href="/request-quote"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-gold text-white font-semibold rounded-full hover:shadow-lg transition group"
                    >
                      <span>Book Now</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-accent-gold rounded-2xl opacity-0 group-hover:opacity-100"
                    animate={{ rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}