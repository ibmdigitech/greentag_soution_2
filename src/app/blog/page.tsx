"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Maintaining Clean Office Spaces",
    excerpt: "Professional tips to keep your workplace clean and productive",
    image: "https://images.unsplash.com/photo-1497366216507-2b8d6632a094?w=600&h=400&fit=crop",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Office Tips",
  },
  {
    id: 2,
    title: "Why Regular Home Cleaning is Essential",
    excerpt: "Discover the health benefits of consistent home cleanliness",
    image: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=600&h=400&fit=crop",
    date: "2025-01-10",
    readTime: "4 min read",
    category: "Home Tips",
  },
  {
    id: 3,
    title: "Eco-Friendly Cleaning Products: A Complete Guide",
    excerpt: "Learn about sustainable cleaning solutions for your home",
    image: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=600&h=400&fit=crop",
    date: "2025-01-05",
    readTime: "7 min read",
    category: "Products",
  },
];

export default function Blog() {
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
              Cleaning Tips & Insights
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Expert advice for maintaining spotless spaces across Kerala
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />

                <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur text-white text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
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