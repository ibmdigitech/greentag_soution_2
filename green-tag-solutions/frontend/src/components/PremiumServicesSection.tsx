"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
  HomeIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  WrenchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Regular and deep home cleaning with eco-friendly products",
    price: "₹1,999",
    icon: HomeIcon,
    image: "/images/services/service_home_cleaning.jpg",
    features: ["Kitchen cleaning", "Bathroom sanitization", "Floor mopping"],
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "Office Cleaning",
    description: "Professional office cleaning for corporate spaces",
    price: "₹2,999",
    icon: BuildingOffice2Icon,
    image: "/images/services/service_office_cleaning.jpg",
    features: ["Cubicle cleaning", "Floor polishing", "Carpet cleaning"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "School Cleaning",
    description: "Safe and hygienic cleaning for educational institutions",
    price: "₹3,499",
    icon: AcademicCapIcon,
    image: "/images/services/service_school_cleaning.jpg",
    features: ["Classroom cleaning", "Toilet sanitization", "Floor maintenance"],
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 4,
    title: "Hospital Cleaning",
    description: "Medical-grade cleaning for healthcare facilities",
    price: "₹4,999",
    icon: HeartIcon,
    image: "/images/services/service_hospital_cleaning.jpg",
    features: ["Sterilization", "ICU cleaning", "Waste disposal"],
    color: "from-red-500 to-rose-600",
  },
  {
    id: 5,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for neglected spaces",
    price: "₹3,999",
    icon: SparklesIcon,
    image: "/images/services/service_deep_cleaning.jpg",
    features: ["Corner-to-corner", "Equipment degreasing", "Sanitization"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "Petrol Pump Cleaning",
    description: "Industrial cleaning for fuel stations",
    price: "₹5,999",
    icon: WrenchScrewdriverIcon,
    image: "/images/services/service_petrol_pump.jpg",
    features: ["Canopy cleaning", "Equipment cleaning", "Concrete degreasing"],
    color: "from-gray-600 to-slate-700",
  },
  {
    id: 7,
    title: "Sofa Cleaning",
    description: "Professional sofa and upholstery cleaning",
    price: "₹1,499",
    icon: SparklesIcon,
    image: "/images/services/service_sofa_cleaning.jpg",
    features: ["Steam cleaning", "Stain removal", "Odor elimination"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 8,
    title: "Carpet Cleaning",
    description: "Deep carpet and rug cleaning services",
    price: "₹2,499",
    icon: SparklesIcon,
    image: "/images/services/service_carpet_cleaning.jpg",
    features: ["Steam extraction", "Stain treatment", "Sanitization"],
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: 9,
    title: "Water Tank Cleaning",
    description: "Professional water tank cleaning and disinfection",
    price: "₹3,299",
    icon: WrenchIcon,
    image: "/images/services/service_water_tank.jpg",
    features: ["Sediment removal", "Disinfection", "Water quality test"],
    color: "from-sky-500 to-blue-600",
  },
];

export default function PremiumServicesSection() {
  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
            ✦ What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Our Premium Cleaning Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Professional cleaning solutions tailored for Kerala homes and businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>


                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <span className="w-4 h-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-2 flex-shrink-0 text-[9px] font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Link
                        href="/services"
                        className="flex-1 text-center py-2.5 border border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-950/20 transition text-sm"
                      >
                        Learn More
                      </Link>
                      <a
                        href={`https://wa.me/919876543210?text=Hello%20I%20need%20${encodeURIComponent(service.title)}%20service`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-1.5 text-sm"
                      >
                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 p-5 bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-gray-100 dark:border-secondary-700/60">
            <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheckIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="font-bold text-secondary-900 dark:text-white">100% Satisfaction</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Guaranteed Service</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-5 bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-gray-100 dark:border-secondary-700/60">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
              <ClockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-bold text-secondary-900 dark:text-white">24/7 Support</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Always Available</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-5 bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-gray-100 dark:border-secondary-700/60">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
              <TruckIcon className="w-6 h-6 text-orange-500 dark:text-orange-400" />
            </div>
            <div>
              <p className="font-bold text-secondary-900 dark:text-white">Kerala Wide</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">All Districts</p>
            </div>
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition transform hover:scale-105 shadow-lg shadow-primary-600/25"
          >
            View All Services
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}