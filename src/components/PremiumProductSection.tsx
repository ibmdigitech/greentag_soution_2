"use client";

import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Premium Floor Cleaner",
    description: "Industrial-grade floor cleaning concentrate",
    price: "599",
    originalPrice: "799",
    image: "https://loremflickr.com/800/600/cleaning?lock=62",
    rating: 4.5,
    category: "Cleaning Chemicals",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Glass & Mirror Cleaner",
    description: "Streak-free shine for all glass surfaces",
    price: "399",
    originalPrice: "499",
    image: "https://loremflickr.com/800/600/cleaning?lock=63",
    rating: 4.3,
    category: "Cleaning Chemicals",
    badge: "New",
  },
  {
    id: 3,
    name: "Air Freshener",
    description: "Long-lasting premium fragrance",
    price: "299",
    originalPrice: "399",
    image: "https://loremflickr.com/800/600/cleaning?lock=64",
    rating: 4.7,
    category: "Air Care",
    badge: "Hot",
  },
  {
    id: 4,
    name: "Heavy Duty Mop Set",
    description: "Professional microfiber mop with bucket",
    price: "1299",
    originalPrice: "1599",
    image: "https://loremflickr.com/800/600/cleaning?lock=65",
    rating: 4.4,
    category: "Tools & Equipment",
  },
  {
    id: 5,
    name: "Disposable Garbage Bags",
    description: "Heavy-duty 30 micron thickness",
    price: "199",
    originalPrice: "249",
    image: "https://loremflickr.com/800/600/cleaning?lock=66",
    rating: 4.2,
    category: "Supplies",
  },
  {
    id: 6,
    name: "Hand Sanitizer",
    description: "70% alcohol-based sanitizer",
    price: "149",
    originalPrice: "199",
    image: "https://loremflickr.com/800/600/cleaning?lock=67",
    rating: 4.6,
    category: "Sanitizers",
    badge: "Popular",
  },
];

export default function PremiumProductSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Cleaning Products & Equipment
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Premium quality cleaning supplies for your home and business
          </p>
        </motion.div>

        <div className="flex gap-4 mb-8 overflow-x-auto scrollbar-hide">
          {["All", "Cleaning Chemicals", "Tools & Equipment", "Sanitizers", "Air Care", "Supplies"].map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
                index === 0
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-secondary-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-secondary-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />

              <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-accent-gold text-secondary-900 text-xs font-bold rounded-full">
                      {product.badge}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 dark:bg-secondary-800/90 backdrop-blur px-2 py-1 rounded-full">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-xs font-medium text-secondary-900 dark:text-white">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
                    <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                    <span className="text-xs text-green-500 font-medium">
                      ({Math.round((1 - parseInt(product.price) / parseInt(product.originalPrice)) * 100)}% OFF)
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-2.5 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition">
                      Quick View
                    </button>
                    <a
                      href={`https://wa.me/919876543210?text=Order%20${product.name}%20(₹${product.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-1"
                    >
                      <ShoppingCartIcon className="w-4 h-4" />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-secondary-800 text-white font-semibold rounded-full hover:bg-secondary-700 transition transform hover:scale-105 shadow-lg"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}