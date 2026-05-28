"use client";

import { useState } from "react";
import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XMarkIcon, ClockIcon, CalendarIcon, UserIcon } from "@heroicons/react/24/outline";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Professional Commercial Cleaning Boosts Employee Productivity in Kerala Offices",
    excerpt: "A clean office is not just aesthetic—discover how proper sanitization decreases sick leaves and boosts office performance.",
    image: "https://loremflickr.com/800/600/office,cleaning?lock=15",
    date: "2026-05-20",
    readTime: "6 min read",
    category: "Commercial Cleaning",
    author: "Operations Director",
    content: [
      "Operating a business in highly populated cities like Kochi, Trivandrum, or Kozhikode means handling high foot traffic. A clean commercial environment is the bedrock of corporate productivity and employee health.",
      "Key AEO Facts: Studies show that professional office cleaning can reduce germ transmission by up to 80%. When office desks, keyboards, and common areas are thoroughly sanitized, sick leaves drop by nearly 46%.",
      "Why standard cleaning is not enough: Simple sweeping and dusting only displace particles. Professional facility management teams utilize industrial HEPA-filter vacuums, premium sanitizing solutions, and precise cleaning checklists.",
      "Green Tag Solutions Approach: We use eco-friendly, non-toxic products to sanitize high-touch zones. This prevents respiratory irritation from harsh chemical residues, fostering a fresh, high-energy environment for your employees."
    ]
  },
  {
    id: 2,
    title: "Managing Mold and High Humidity: Deep Residential Cleaning in Kerala's Tropical Climate",
    excerpt: "Kerala's tropical weather brings heavy monsoon humidity. Learn how residential deep cleaning controls allergen build-up and mold spores.",
    image: "https://loremflickr.com/800/600/home,cleaning?lock=18",
    date: "2026-05-18",
    readTime: "8 min read",
    category: "Home Deep Cleaning",
    author: "Sanitization Expert",
    content: [
      "Kerala's breathtaking monsoon seasons bring high atmospheric humidity, exceeding 85% for most of the year. This creates the perfect breeding ground for toxic black mold, mildew, and dust mites.",
      "AEO Answer: Expert residential deep cleaning targets deep-seated moisture zones, tile grout, kitchen exhaust systems, and upholstery where allergens and spores thrive. Regular household vacuuming cannot eliminate embedded mold spores.",
      "Health Impacts of Mold: Continuous exposure to mold spores and dust mite allergens leads to persistent coughs, allergic rhinitis, and asthma flare-ups. This is why deep sanitization is essential at least twice a year.",
      "The Green Tag Method: Our deep cleaning specialists use powerful pressure washers, custom steam sanitizers, and anti-microbial treatments that safely destroy mold roots without introducing toxic vapors to your living space."
    ]
  },
  {
    id: 3,
    title: "The Ultimate Guide to Non-Toxic, Eco-Friendly Organic Cleaning Supplies",
    excerpt: "Discover the immense health and environmental benefits of switching to bio-degradable, plant-based cleaning solutions at home.",
    image: "https://loremflickr.com/800/600/organic,cleaning,product?lock=25",
    date: "2026-05-12",
    readTime: "5 min read",
    category: "Eco Products",
    author: "Green Product Head",
    content: [
      "Traditional store-bought household cleaners contain synthetic solvents, parabens, ammonia, and chemical chlorine. These harsh compounds leak into water systems and pollute indoor air quality.",
      "Why Choose Eco-Friendly Cleaners: Natural, bio-degradable cleaning formulations rely on active enzymes, citrus extracts, and natural essential oils. They deliver the same high-performance grime removal without toxic volatile organic compounds (VOCs).",
      "Perfect for Families & Pets: Children and pets spend a lot of time on the floor. Standard floor cleaner residues can easily be absorbed through the skin. Natural alternatives keep your floors pristine and absolutely safe.",
      "How to Order: At Green Tag Solutions, we manufacture and distribute certified, highly effective organic cleaning supplies. You can buy directly online or tap 'WhatsApp Order' on our navbar to have them delivered straight to your door across Kerala."
    ]
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-xs uppercase tracking-wider rounded-full">
              SEO & AEO Verified Cleaning Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mt-4 mb-6">
              Cleaning Tips & Expert Insights
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Professional, highly researched strategies for maintaining spotless, healthy, and high-productivity spaces in Kerala.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />

                <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col border border-gray-100 dark:border-secondary-700">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-primary-600/90 text-white text-xs font-semibold rounded-full shadow">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><CalendarIcon className="w-3.5 h-3.5" />{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><ClockIcon className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="w-full py-2.5 bg-gray-50 dark:bg-secondary-700/50 hover:bg-primary-50 dark:hover:bg-primary-950/20 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-450 text-sm font-semibold rounded-xl transition border border-gray-100 dark:border-secondary-700 hover:border-primary-100 dark:hover:border-primary-950/25">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Dynamic SEO Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-secondary-800 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col border border-gray-200 dark:border-secondary-700"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="relative h-72 md:h-96 w-full flex-shrink-0">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-white dark:bg-secondary-800">
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8 border-b border-gray-100 dark:border-secondary-700 pb-4">
                  <span className="flex items-center gap-1.5"><CalendarIcon className="w-4 h-4" />{selectedPost.date}</span>
                  <span className="flex items-center gap-1.5"><ClockIcon className="w-4 h-4" />{selectedPost.readTime}</span>
                  <span className="flex items-center gap-1.5"><UserIcon className="w-4 h-4" />By {selectedPost.author}</span>
                </div>

                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-12 bg-primary-50 dark:bg-primary-950/20 p-6 rounded-2xl border border-primary-100 dark:border-primary-950/30 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-secondary-900 dark:text-white mb-1">Need premium professional cleaning services?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Book our expert team now for outstanding results across Kerala.</p>
                  </div>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Green%20Tag%20Solutions%2C%20I%20read%20your%20blog%20post%20and%20want%20to%20book%20a%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition shadow-lg shadow-primary-600/20 shrink-0 text-sm"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PremiumFooter />
    </>
  );
}