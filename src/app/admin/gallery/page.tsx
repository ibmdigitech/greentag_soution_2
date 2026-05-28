"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";

const galleryItems = [
  { id: 1, title: "Home Deep Clean", image: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=300&h=200&fit=crop" },
  { id: 2, title: "Office Cleaning", image: "https://images.unsplash.com/photo-1497366216507-2b8d6632a094?w=300&h=200&fit=crop" },
  { id: 3, title: "Kitchen Sanitization", image: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=300&h=200&fit=crop" },
];

export default function AdminGallery() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4 md:mb-0">
              Manage Gallery
            </h1>
            <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 flex items-center gap-2 transition">
              <PlusIcon className="w-5 h-5" />
              Upload Image
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-dark rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white text-xs font-medium">{item.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}