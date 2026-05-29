"use client";

import { motion } from "framer-motion";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { productsData as products } from "@/data/products";

export default function AdminProducts() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-secondary-900 dark:text-white tracking-tight">
            Manage Products & Inventory
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Create, update, and manage your cleaning supplies catalogs.
          </p>
        </div>
        <button className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl flex items-center gap-2 transition duration-350 shadow-lg shadow-primary-600/20 w-full md:w-auto justify-center active:scale-95">
          <PlusIcon className="w-5 h-5" />
          Add New Product
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-dark rounded-2xl overflow-hidden shadow-xl border border-white/5"
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
                  transition={{ delay: Math.min(index * 0.03, 0.4) }}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-6 text-white font-medium whitespace-nowrap">{product.name}</td>
                  <td className="py-4 px-6 text-gray-300 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded bg-secondary-700/80 text-xs font-semibold text-gray-200 border border-white/5">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-primary-400 font-bold whitespace-nowrap">₹{product.price}</td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                      product.stock > 50 ? "bg-primary-600/10 text-primary-400 border-primary-500/20" : 
                      product.stock > 10 ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" : 
                      "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition duration-300">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-650 hover:text-white transition duration-300">
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
  );
}