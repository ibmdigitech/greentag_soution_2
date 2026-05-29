"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const categories = [
  "All",
  "Cleaning Chemicals",
  "Cleaning Tools",
  "Safety Equipment",
  "Machines",
  "Cleaning Service",
];

const products = [
  { id: 1, name: "Floor Cleaner Pro 5L", category: "Cleaning Chemicals", price: 450, originalPrice: 540, rating: 4.8, image: "https://images.unsplash.com/photo-1584820927508-cadefc43a3d3?w=800&q=80", description: "Multi-purpose floor cleaner for homes and offices" },
  { id: 2, name: "Toilet Cleaner Max 1L", category: "Cleaning Chemicals", price: 120, originalPrice: 150, rating: 4.5, image: "https://images.unsplash.com/photo-1585834882196-1c888d3d9eeb?w=800&q=80", description: "Strong toilet stain remover with fresh fragrance" },
  { id: 3, name: "Glass Cleaner Spray 500ml", category: "Cleaning Chemicals", price: 180, originalPrice: 220, rating: 4.6, image: "https://images.unsplash.com/photo-1528310263463-5487771cb7bd?w=800&q=80", description: "Streak-free glass and mirror cleaning solution" },
  { id: 4, name: "Kitchen Degreaser 1L", category: "Cleaning Chemicals", price: 250, originalPrice: 300, rating: 4.7, image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80", description: "Removes oil and grease from kitchen surfaces" },
  { id: 5, name: "Disinfectant Liquid 5L", category: "Cleaning Chemicals", price: 550, originalPrice: 650, rating: 4.9, image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=800&q=80", description: "Hospital-grade disinfectant for all surfaces", badge: "Best Seller" },

  { id: 6, name: "Heavy Duty Mop Set", category: "Cleaning Tools", price: 650, originalPrice: 800, rating: 4.7, image: "https://images.unsplash.com/photo-1585933646706-7b620ea3f309?w=800&q=80", description: "Stainless steel mop with microfiber bucket system" },
  { id: 7, name: "Microfiber Cloth Pack", category: "Cleaning Tools", price: 220, originalPrice: 280, rating: 4.8, image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=800&q=80", description: "Reusable dust and cleaning cloth set", badge: "Popular" },
  { id: 8, name: "Floor Scrub Brush", category: "Cleaning Tools", price: 180, originalPrice: 220, rating: 4.4, image: "https://images.unsplash.com/photo-1584820926521-72b156ba2ab1?w=800&q=80", description: "Hard bristle floor scrubbing brush" },
  { id: 9, name: "Window Cleaning Kit", category: "Cleaning Tools", price: 850, originalPrice: 1000, rating: 4.6, image: "https://images.unsplash.com/photo-1528310344449-6f1604a11ccf?w=800&q=80", description: "Complete window cleaning kit with spray and wiper" },
  { id: 10, name: "Dust Pan Set", category: "Cleaning Tools", price: 150, originalPrice: 190, rating: 4.5, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", description: "Durable dust pan with brush set" },

  { id: 11, name: "Rubber Cleaning Gloves", category: "Safety Equipment", price: 120, originalPrice: 150, rating: 4.6, image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80", description: "Chemical-resistant hand gloves" },
  { id: 12, name: "Face Mask Pack", category: "Safety Equipment", price: 80, originalPrice: 100, rating: 4.7, image: "https://images.unsplash.com/photo-1583944984065-22442d22f183?w=800&q=80", description: "Disposable safety face masks" },
  { id: 13, name: "Safety Goggles", category: "Safety Equipment", price: 250, originalPrice: 300, rating: 4.5, image: "https://images.unsplash.com/photo-1588636730591-e0c1566373b5?w=800&q=80", description: "Eye protection for cleaning staff" },
  { id: 14, name: "Cleaning Apron", category: "Safety Equipment", price: 350, originalPrice: 420, rating: 4.4, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80", description: "Waterproof apron for industrial cleaning" },
  { id: 15, name: "Safety Shoes", category: "Safety Equipment", price: 1200, originalPrice: 1500, rating: 4.8, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?w=800&q=80", description: "Anti-slip safety shoes for workers" },

  { id: 16, name: "Vacuum Cleaner Industrial", category: "Machines", price: 8500, originalPrice: 10000, rating: 4.9, image: "https://images.unsplash.com/photo-1558384110-31846b450702?w=800&q=80", description: "Heavy-duty vacuum cleaner for office cleaning" },
  { id: 17, name: "Pressure Washer Machine", category: "Machines", price: 12500, originalPrice: 15000, rating: 4.7, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "High-pressure water cleaning machine" },
  { id: 18, name: "Floor Scrubber Machine", category: "Machines", price: 28500, originalPrice: 32000, rating: 4.8, image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=800&q=80", description: "Automatic floor scrubbing equipment" },
  { id: 19, name: "Steam Cleaning Machine", category: "Machines", price: 9500, originalPrice: 11000, rating: 4.6, image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80", description: "High-temperature steam cleaning equipment" },
  { id: 20, name: "Carpet Cleaning Machine", category: "Machines", price: 18500, originalPrice: 22000, rating: 4.9, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", description: "Professional carpet shampoo cleaning machine", badge: "Premium" },

  { id: 21, name: "Home Deep Cleaning", category: "Cleaning Service", price: 2999, originalPrice: 3500, rating: 4.9, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", description: "Complete home cleaning service" },
  { id: 22, name: "Office Cleaning Package", category: "Cleaning Service", price: 4999, originalPrice: 6000, rating: 4.8, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", description: "Office cleaning and sanitization" },
  { id: 23, name: "School Cleaning Service", category: "Cleaning Service", price: 7999, originalPrice: 9500, rating: 4.7, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", description: "Classroom and campus cleaning service" },
  { id: 24, name: "Hospital Sanitization", category: "Cleaning Service", price: 9999, originalPrice: 12000, rating: 4.9, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", description: "Medical-grade sanitization service" },
  { id: 25, name: "Petrol Pump Cleaning", category: "Cleaning Service", price: 6999, originalPrice: 8500, rating: 4.6, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", description: "Fuel station deep cleaning package" },
];

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