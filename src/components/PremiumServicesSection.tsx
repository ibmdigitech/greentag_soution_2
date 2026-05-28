"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChatBubbleLeftRightIcon, ClockIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Regular and deep home cleaning with eco-friendly products",
    price: "₹1,999",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=400&h=300&fit=crop",
    features: ["Kitchen cleaning", "Bathroom sanitization", "Floor mopping"],
  },
  {
    id: 2,
    title: "Office Cleaning",
    description: "Professional office cleaning for corporate spaces",
    price: "₹2,999",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1497366216507-2b8d6632a094?w=400&h=300&fit=crop",
    features: ["Cubicle cleaning", "Floor polishing", "Carpet cleaning"],
  },
  {
    id: 3,
    title: "School Cleaning",
    description: "Safe and hygienic cleaning for educational institutions",
    price: "₹3,499",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1580587771520-7d44e5e5a6c4?w=400&h=300&fit=crop",
    features: ["Classroom cleaning", "Toilet sanitization", "Floor maintenance"],
  },
  {
    id: 4,
    title: "Hospital Cleaning",
    description: "Medical-grade cleaning for healthcare facilities",
    price: "₹4,999",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1519710164236-cd02ccd2a374?w=400&h=300&fit=crop",
    features: ["Sterilization", "ICU cleaning", "Waste disposal"],
  },
  {
    id: 5,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for neglected spaces",
    price: "₹3,999",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=400&h=300&fit=crop",
    features: ["Corner-to-corner", "Equipment degreasing", "Sanitization"],
  },
  {
    id: 6,
    title: "Petrol Pump Cleaning",
    description: "Industrial cleaning for fuel stations",
    price: "₹5,999",
    icon: "⛽",
    image: "https://images.unsplash.com/photo-1600566842977-c3d5b8dda868?w=400&h=300&fit=crop",
    features: ["Canopy cleaning", "Equipment cleaning", "Concrete degreasing"],
  },
  {
    id: 7,
    title: "Sofa Cleaning",
    description: "Professional sofa and upholstery cleaning",
    price: "₹1,499",
    icon: "🛋️",
    image: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=400&h=300&fit=crop",
    features: ["Steam cleaning", "Stain removal", "Odor elimination"],
  },
  {
    id: 8,
    title: "Carpet Cleaning",
    description: "Deep carpet and rug cleaning services",
    price: "₹2,499",
    icon: "🧹",
    image: "https://images.unsplash.com/photo-1580618344864-2031ce1bc4d8?w=400&h=300&fit=crop",
    features: ["Steam extraction", "Stain treatment", "Sanitization"],
  },
  {
    id: 9,
    title: "Water Tank Cleaning",
    description: "Professional water tank cleaning and disinfection",
    price: "₹3,299",
    icon: "💧",
    image: "https://images.unsplash.com/photo-1551641532-c825b2f6c4f9?w=400&h=300&fit=crop",
    features: ["Sediment removal", "Disinfection", "Water quality test"],
  },
];

export default function PremiumServicesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Our Premium Cleaning Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Professional cleaning solutions tailored for Kerala homes and businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-200 text-sm block">Starting</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <span className="w-1 h-1 bg-primary-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex-1 text-center py-2.5 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition"
                    >
                      Learn More
                    </Link>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20I%20need%20${service.title}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-1"
                    >
                      <ChatBubbleLeftRightIcon className="w-4 h-4" />
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-secondary-800 rounded-xl shadow">
            <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
            <div>
              <p className="font-bold text-secondary-900 dark:text-white">100% Satisfaction</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Guaranteed Service</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-secondary-800 rounded-xl shadow">
            <ClockIcon className="w-8 h-8 text-primary-600" />
            <div>
              <p className="font-bold text-secondary-900 dark:text-white">24/7 Support</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Always Available</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-secondary-800 rounded-xl shadow">
            <TruckIcon className="w-8 h-8 text-primary-600" />
            <div>
              <p className="font-bold text-secondary-900 dark:text-white">Kerala Wide</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">All Districts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}