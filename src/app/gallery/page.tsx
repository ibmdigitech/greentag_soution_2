"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";

const galleryItems = [
  { before: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=400&h=300&fit=crop", title: "Home Deep Cleaning", category: "Residential" },
  { before: "https://images.unsplash.com/photo-1497366216507-2b8d6632a094?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=400&h=300&fit=crop", title: "Office Cleaning", category: "Commercial" },
  { before: "https://images.unsplash.com/photo-155691112-9d16f2d6c2db?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=400&h=300&fit=crop", title: "Kitchen Sanitization", category: "Residential" },
  { before: "https://images.unsplash.com/photo-1519710164236-cd02ccd2a374?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1580587771520-7d44e5e5a6c4?w=400&h=300&fit=crop", title: "Hospital Cleaning", category: "Healthcare" },
  { before: "https://images.unsplash.com/photo-1600566842977-c3d5b8dda868?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=400&h=300&fit=crop", title: "Bathroom Deep Clean", category: "Residential" },
  { before: "https://images.unsplash.com/photo-1504328345606-88b89648dcf3?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1512901023466-207c320e8406?w=400&h=300&fit=crop", title: "Industrial Cleaning", category: "Industrial" },
];

export default function Gallery() {
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
              Before & After Gallery
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              See the transformation - our work speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-56">
                  <div className="grid grid-cols-2 h-full">
                    <div className="relative overflow-hidden">
                      <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-red-500/90 text-white text-xs font-medium rounded">
                        Before
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img src={item.after} alt="After" className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 px-2 py-1 bg-primary-600/90 text-white text-xs font-medium rounded">
                        After
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-secondary-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-secondary-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}