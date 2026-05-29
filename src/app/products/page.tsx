"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { productCategories as categories, productsData as products } from "@/data/products";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const getWhatsAppLink = (product: any) => {
    const message = `Hello Green Tag Solutions,\nI would like to order:\n\nProduct: ${product.name}\nQuantity: 1\n\nPlease share payment details.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
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
              Premium Cleaning Products
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Quality cleaning supplies, equipment, and packages for your home and business
            </p>
          </motion.div>

          <div className="flex gap-3 mb-12 overflow-x-auto scrollbar-hide justify-center flex-wrap">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                    : "bg-white dark:bg-secondary-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-secondary-700 border border-gray-200 dark:border-secondary-700"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col border border-gray-100 dark:border-secondary-700/50">
                    <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-secondary-800">
                      <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      
                      {product.badge && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-accent-gold text-secondary-900 text-xs font-bold rounded-full shadow-md">
                          {product.badge}
                        </div>
                      )}

                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 dark:bg-secondary-800/90 backdrop-blur px-2.5 py-1 rounded-full shadow-sm">
                        <StarIcon className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-bold text-secondary-900 dark:text-white">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 font-medium tracking-wide uppercase">
                        {product.category}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-baseline gap-2 mb-5 mt-auto">
                        <span className="text-xl font-bold text-primary-600 dark:text-primary-400">₹{product.price}</span>
                        <span className="text-gray-400 dark:text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 text-center py-2.5 border-2 border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-400 font-bold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                        >
                          Details
                        </button>
                        <a
                          href={getWhatsAppLink(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-primary-600/20"
                        >
                          <ShoppingCartIcon className="w-4 h-4" />
                          Order
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )}
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
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-secondary-800 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row relative border border-gray-100 dark:border-secondary-700"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
              
              <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px] bg-gray-100 dark:bg-secondary-900">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400 text-xs font-bold rounded-full tracking-wide">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.badge && (
                    <span className="px-3 py-1 bg-accent-gold text-secondary-900 text-xs font-bold rounded-full">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>
                
                <h2 className="text-3xl font-extrabold text-secondary-900 dark:text-white mb-3 leading-tight">
                  {selectedProduct.name}
                </h2>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <span className="font-bold text-secondary-900 dark:text-white">{selectedProduct.rating}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">(120+ reviews)</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {selectedProduct.description}. Experience premium quality with our {selectedProduct.name}. Perfect for maintaining hygiene and cleanliness in your space.
                </p>
                
                <div className="flex items-baseline gap-4 mb-8 p-4 bg-gray-50 dark:bg-secondary-900 rounded-2xl border border-gray-100 dark:border-secondary-700/50">
                  <span className="text-4xl font-black text-primary-600 dark:text-primary-400">₹{selectedProduct.price}</span>
                  <span className="text-gray-400 dark:text-gray-500 line-through text-xl font-medium">₹{selectedProduct.originalPrice}</span>
                  <div className="ml-auto flex flex-col items-end">
                    <span className="text-sm text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg">
                      Save ₹{selectedProduct.originalPrice - selectedProduct.price}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Inclusive of all taxes</span>
                  </div>
                </div>
                
                <a
                  href={getWhatsAppLink(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary-600 text-white font-bold text-center rounded-2xl hover:bg-primary-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary-600/20 text-lg hover:-translate-y-1"
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