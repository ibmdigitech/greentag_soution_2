"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  avatar: string;
  text: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Siddharth Nair",
    location: "Kochi, Kerala",
    rating: 5,
    date: "2 days ago",
    avatar: "https://loremflickr.com/150/150/portrait,man?lock=10",
    text: "Green Tag Solutions did an outstanding deep cleaning of my 3BHK apartment in Kochi. They completely removed the stubborn mold stains caused by the monsoon humidity. Extremely professional staff!",
    verified: true,
  },
  {
    id: 2,
    name: "Anjali Menon",
    location: "Kozhikode, Kerala",
    rating: 5,
    date: "1 week ago",
    avatar: "https://loremflickr.com/150/150/portrait,woman?lock=22",
    text: "Excellent commercial cleaning! We hired them for our office sanitation in Kozhikode. They worked after hours so our operations weren't disrupted. The plant-based cleaning products they use smell fresh and non-chemical.",
    verified: true,
  },
  {
    id: 3,
    name: "Fahad Rahman",
    location: "Trivandrum, Kerala",
    rating: 5,
    date: "2 weeks ago",
    avatar: "https://loremflickr.com/150/150/portrait,man?lock=35",
    text: "Highly recommended cleaning service in Kerala! We booked their deep villa sanitization. Everything from kitchen chimney grease removal to tile scrubbing was done to perfection. Will definitely book again.",
    verified: true,
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-secondary-900 dark:to-secondary-850 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Widget */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 bg-white dark:bg-secondary-800 px-4 py-2 rounded-full shadow-md border border-gray-100 dark:border-secondary-700"
          >
            {/* Google Icon SVG */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-bold text-gray-600 dark:text-gray-300">Google Customer Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-secondary-900 dark:text-white mb-6 tracking-tight"
          >
            What Our Verified Clients Say
          </motion.h2>

          {/* Aggregate Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3 bg-primary-50/50 dark:bg-primary-950/10 px-6 py-4 rounded-2xl border border-primary-100/50 dark:border-primary-950/20 shadow-inner"
          >
            <div className="flex items-center gap-1">
              <span className="text-3xl font-extrabold text-secondary-900 dark:text-white">4.9</span>
              <span className="text-lg text-gray-500">/ 5.0</span>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Based on 342+ reviews from Kerala homeowners & business partners
            </span>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-secondary-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-secondary-700/50 flex flex-col justify-between"
            >
              {/* Card top elements */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-100 dark:border-primary-900/50">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 dark:text-white text-base">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {review.location}
                      </p>
                    </div>
                  </div>
                  {/* Google G logo on review card */}
                  <div className="bg-gray-50 dark:bg-secondary-750 p-2 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Stars and date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed mb-6 font-medium italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Verified badge */}
              {review.verified && (
                <div className="flex items-center gap-1.5 text-xs text-primary-600 dark:text-primary-400 font-semibold border-t border-gray-50 dark:border-secondary-750 pt-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified Google Reviewer
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA link below reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-secondary-800 text-sm font-bold text-gray-700 dark:text-gray-200 rounded-full shadow-md border border-gray-100 dark:border-secondary-700 hover:bg-gray-50 dark:hover:bg-secondary-750 transition"
          >
            Write a Google Review
            <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
