"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { productsData as products } from "@/data/products";

export default function AdminProducts() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-2">
                Manage Products
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                View, edit, and manage your cleaning inventory.
              </p>
            </div>
            <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 flex items-center gap-2 transition w-full md:w-auto justify-center">
              <PlusIcon className="w-5 h-5" />
              Add New Product
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-dark rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full relative">
                <thead className="bg-secondary-800/80 sticky top-0 backdrop-blur-md border-b border-white/10 z-10">
                  <tr>
                    <th className="text-left py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Product Name</th>
                    <th className="text-left py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Category</th>
                    <th className="text-right py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Price</th>
                    <th className="text-right py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Stock</th>
                    <th className="text-right py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.05, 0.5) }}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="py-4 px-6 text-white font-medium whitespace-nowrap">{product.name}</td>
                      <td className="py-4 px-6 text-gray-300 whitespace-nowrap">
                        <span className="px-2 py-1 rounded bg-secondary-700 text-xs">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right text-primary-400 font-semibold whitespace-nowrap">₹{product.price}</td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          product.stock > 50 ? "bg-primary-600" : 
                          product.stock > 10 ? "bg-yellow-600" : "bg-red-600"
                        } text-white`}>
                          {product.stock} units
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition">
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition">
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}