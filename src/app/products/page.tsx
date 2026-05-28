"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const categories = [
  "All", "Cleaning Chemicals", "Floor Cleaner", "Glass Cleaner", "Tissue Products",
  "Cleaning Tools", "Mops & Buckets", "Vacuum Machines", "Pressure Washers",
  "Sanitizers", "Hand Wash", "Air Fresheners"
];

const products = [
  { id: 1, name: "Floor Cleaner 1L", category: "Floor Cleaner", price: 299, originalPrice: 399, rating: 4.5, image: "https://loremflickr.com/800/600/floor,cleaner", badge: "Best Seller" },
  { id: 2, name: "Glass Cleaner 500ml", category: "Glass Cleaner", price: 199, originalPrice: 249, rating: 4.3, image: "https://loremflickr.com/800/600/glass,cleaner", badge: "New" },
  { id: 3, name: "Air Freshener", category: "Air Fresheners", price: 449, originalPrice: 599, rating: 4.7, image: "https://loremflickr.com/800/600/air,freshener", badge: "Hot" },
  { id: 4, name: "Cleaning Mop Set", category: "Mops & Buckets", price: 599, originalPrice: 799, rating: 4.4, image: "https://loremflickr.com/800/600/mop", badge: "Popular" },
  { id: 5, name: "Sanitizer 500ml", category: "Sanitizers", price: 149, originalPrice: 199, rating: 4.6, image: "https://loremflickr.com/800/600/sanitizer", badge: "Essential" },
  { id: 6, name: "Vacuum Cleaner", category: "Vacuum Machines", price: 8999, originalPrice: 10999, rating: 4.2, image: "https://loremflickr.com/800/600/vacuum,cleaner" },
  { id: 7, name: "Deep Cleaning Kit", category: "Cleaning Tools", price: 1299, originalPrice: 1599, rating: 4.8, image: "https://loremflickr.com/800/600/cleaning,tools", badge: "Premium" },
  { id: 8, name: "Hand Wash Liquid", category: "Hand Wash", price: 179, originalPrice: 229, rating: 4.4, image: "https://loremflickr.com/800/600/hand,wash" },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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
              Premium Cleaning Products
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Quality cleaning supplies and equipment for your home and business
            </p>
          </motion.div>

          <div className="flex gap-3 mb-12 overflow-x-auto scrollbar-hide justify-center">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  index === 0
                    ? "bg-primary-600 text-white"
                    : "bg-white dark:bg-secondary-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-secondary-700"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                
                <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {product.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-accent-gold text-secondary-900 text-xs font-bold rounded-full">
                        {product.badge}
                      </div>
                    )}

                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 dark:bg-secondary-800/90 backdrop-blur px-2 py-1 rounded-full">
                      <StarIcon className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs font-medium text-secondary-900 dark:text-white">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                      {product.category}
                    </p>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl font-bold text-primary-600">₹{product.price}</span>
                      <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                      <span className="text-xs text-green-500 font-medium">
                        ({Math.round((1 - product.price / product.originalPrice) * 100)}% OFF)
                      </span>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 text-center py-2.5 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition"
                      >
                        Quick View
                      </button>
                      <a
                        href={`https://wa.me/919876543210?text=Order%20${product.name}%20(₹${product.price})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-1"
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
        </div>
      </main>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
              
              <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 text-xs font-bold rounded-full">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.badge && (
                    <span className="px-3 py-1 bg-accent-gold text-secondary-900 text-xs font-bold rounded-full">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>
                
                <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
                  {selectedProduct.name}
                </h2>
                
                <div className="flex items-center gap-2 mb-6">
                  <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium text-secondary-900 dark:text-white">{selectedProduct.rating} / 5.0</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Experience premium quality with our {selectedProduct.name}. Perfect for maintaining hygiene and cleanliness in your space. This product is specially formulated to deliver outstanding results.
                </p>
                
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-4xl font-bold text-primary-600">₹{selectedProduct.price}</span>
                  <span className="text-gray-400 line-through text-xl">₹{selectedProduct.originalPrice}</span>
                  <span className="text-sm text-green-500 font-medium">
                    Save ₹{selectedProduct.originalPrice - selectedProduct.price}
                  </span>
                </div>
                
                <a
                  href={`https://wa.me/919876543210?text=Order%20${selectedProduct.name}%20(₹${selectedProduct.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary-600 text-white font-bold text-center rounded-xl hover:bg-primary-700 transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                  Order on WhatsApp Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PremiumFooter />
    </>
  );
}