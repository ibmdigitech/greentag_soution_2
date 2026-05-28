"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumHero from "@/components/PremiumHero";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import FestivalOfferSection from "@/components/FestivalOfferSection";
import PremiumServicesSection from "@/components/PremiumServicesSection";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <PremiumNavbar />
      
      <main className="flex-1">
        <PremiumHero />
        
        <SpecialOfferSection />
        
        <FestivalOfferSection />
        
        <PremiumServicesSection />

        <section className="py-20 px-4 bg-white dark:bg-secondary-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                Why Choose Green Tag Solutions?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Kerala&apos;s most trusted cleaning professionals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "👥", title: "Professional Team", desc: "Experienced and trained cleaning professionals" },
                { icon: "🌿", title: "Eco-Friendly", desc: "Safe cleaning products for your family" },
                { icon: "✓", title: "Guaranteed Service", desc: "100% satisfaction guaranteed" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-gray-50 dark:bg-secondary-800 rounded-2xl group hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
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