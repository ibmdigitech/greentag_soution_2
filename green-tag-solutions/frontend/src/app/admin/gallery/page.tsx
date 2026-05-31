"use client";

import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const galleryItems = [
  { id: 1, title: "Home Deep Clean", image: "https://loremflickr.com/800/600/cleaning?lock=2" },
  { id: 2, title: "Office Cleaning", image: "https://loremflickr.com/800/600/cleaning?lock=3" },
  { id: 3, title: "Kitchen Sanitization", image: "https://loremflickr.com/800/600/cleaning?lock=4" },
];

export default function AdminGallery() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-secondary-900 dark:text-white tracking-tight">
            Manage Gallery
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Publish or edit before-and-after work photos shown to customers.
          </p>
        </div>
        <button className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl flex items-center gap-2 transition duration-350 shadow-lg shadow-primary-600/20 w-full md:w-auto justify-center active:scale-95">
          <PlusIcon className="w-5 h-5" />
          Upload Image
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-dark rounded-2xl p-6 shadow-xl border border-white/5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-40 rounded-xl overflow-hidden shadow-lg border border-white/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <span className="text-white text-xs font-semibold">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}