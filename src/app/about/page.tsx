"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
                About Green Tag Solutions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Kerala&apos;s trusted cleaning experts with years of experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-dark rounded-3xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Founded in 2020, Green Tag Solutions has grown to become Kerala&apos;s most trusted 
                  professional cleaning service provider. We combine modern cleaning techniques with 
                  eco-friendly products to deliver exceptional results.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Our dedicated team of trained professionals serves homes, offices, schools, and 
                  industrial facilities across all districts of Kerala with reliable and consistent service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We believe in creating healthier environments through sustainable cleaning solutions that 
                  protect both your family and our planet.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative h-96 rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=800&h=600&fit=crop"
                  alt="Professional cleaning team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white dark:bg-secondary-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                Why Choose Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Our commitment to excellence sets us apart
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "👥", stat: "500+", label: "Happy Customers" },
                { icon: "🧹", stat: "17+", label: "Services Offered" },
                { icon: "⭐", stat: "4.8", label: "Average Rating" },
                { icon: "🚚", stat: "24hr", label: "Service Guarantee" },
                { icon: "🌿", stat: "100%", label: "Eco-Friendly" },
                { icon: "📍", stat: "All", label: "Kerala Districts" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-gray-50 dark:bg-secondary-900 rounded-2xl"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <p className="text-4xl font-bold text-primary-600 mb-2">{item.stat}</p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PremiumFooter />
    </>
  );
}