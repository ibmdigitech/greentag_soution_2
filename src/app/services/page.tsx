"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  HomeIcon, 
  BuildingOffice2Icon, 
  AcademicCapIcon, 
  HeartIcon,
  SparklesIcon,
  BugAntIcon,
  CogIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const services = [
  { title: "Home Cleaning", desc: "Regular and deep home cleaning with eco-friendly products", price: "₹1,999", icon: HomeIcon, img: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=400&h=300&fit=crop", category: "Residential" },
  { title: "Office Cleaning", desc: "Professional office cleaning for corporate spaces", price: "₹2,999", icon: BuildingOffice2Icon, img: "https://images.unsplash.com/photo-1497366216507-2b8d6632a094?w=400&h=300&fit=crop", category: "Commercial" },
  { title: "School Cleaning", desc: "Safe and hygienic cleaning for educational institutions", price: "₹3,499", icon: AcademicCapIcon, img: "https://images.unsplash.com/photo-1580587771520-7d44e5e5a6c4?w=400&h=300&fit=crop", category: "Institutional" },
  { title: "Hospital Cleaning", desc: "Medical-grade cleaning for healthcare facilities", price: "₹4,999", icon: HeartIcon, img: "https://images.unsplash.com/photo-1519710164236-cd02ccd2a374?w=400&h=300&fit=crop", category: "Healthcare" },
  { title: "Deep Cleaning", desc: "Thorough deep cleaning for neglected spaces", price: "₹3,999", icon: SparklesIcon, img: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=400&h=300&fit=crop", category: "Specialist" },
  { title: "Petrol Pump Cleaning", desc: "Industrial cleaning for fuel stations", price: "₹5,999", icon: CogIcon, img: "https://images.unsplash.com/photo-1600566842977-c3d5b8dda868?w=400&h=300&fit=crop", category: "Industrial" },
  { title: "Sofa Cleaning", desc: "Professional sofa and upholstery cleaning", price: "₹1,499", icon: SparklesIcon, img: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=400&h=300&fit=crop", category: "Specialist" },
  { title: "Carpet Cleaning", desc: "Deep carpet and rug cleaning services", price: "₹2,499", icon: ShoppingBagIcon, img: "https://images.unsplash.com/photo-1580618344864-2031ce1bc4d8?w=400&h=300&fit=crop", category: "Specialist" },
  { title: "Water Tank Cleaning", desc: "Professional water tank cleaning and disinfection", price: "₹3,299", icon: CogIcon, img: "https://images.unsplash.com/photo-1551641532-c825b2f6c4f9?w=400&h=300&fit=crop", category: "Industrial" },
  { title: "Service Station Cleaning", desc: "Automotive service station cleaning", price: "₹4,499", icon: CogIcon, img: "https://images.unsplash.com/photo-1600566842977-c3d5b8dda868?w=400&h=300&fit=crop", category: "Industrial" },
  { title: "Industrial Cleaning", desc: "Large-scale industrial facility cleaning", price: "Custom", icon: BuildingOffice2Icon, img: "https://images.unsplash.com/photo-1504328345606-88b89648dcf3?w=400&h=300&fit=crop", category: "Industrial" },
  { title: "Post Construction Cleaning", desc: "Cleanup after renovation or construction", price: "₹5,999", icon: HomeIcon, img: "https://images.unsplash.com/photo-1503386044109-24405b3e479f?w=400&h=300&fit=crop", category: "Specialist" },
  { title: "Kitchen Cleaning", desc: "Deep kitchen hood and appliance cleaning", price: "₹2,199", icon: BuildingOffice2Icon, img: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=400&h=300&fit=crop", category: "Residential" },
  { title: "Bathroom Sanitization", desc: "Complete bathroom deep cleaning", price: "₹1,799", icon: SparklesIcon, img: "https://images.unsplash.com/photo-1584622654111-d36343687d26?w=400&h=300&fit=crop", category: "Residential" },
  { title: "Glass Cleaning", desc: "Professional window and glass cleaning", price: "₹999", icon: BuildingOffice2Icon, img: "https://images.unsplash.com/photo-1497366216507-2b8d6632a094?w=400&h=300&fit=crop", category: "Commercial" },
  { title: "Pest Control Services", desc: "Complete pest control and elimination", price: "₹1,499", icon: BugAntIcon, img: "https://images.unsplash.com/photo-1600566842977-c3d5b8dda868?w=400&h=300&fit=crop", category: "Specialist" },
  { title: "Floor Polishing", desc: "Marble and tile floor polishing", price: "₹2,799", icon: SparklesIcon, img: "https://images.unsplash.com/photo-1580587771520-7d44e5e5a6c4?w=400&h=300&fit=crop", category: "Specialist" },
  { title: "Marble Polishing", desc: "Professional marble restoration", price: "₹3,499", icon: SparklesIcon, img: "https://images.unsplash.com/photo-1556912999-5e1b3f0a3cbd?w=400&h=300&fit=crop", category: "Specialist" },
  { title: "Apartment Cleaning", desc: "Complete apartment deep cleaning", price: "₹2,499", icon: HomeIcon, img: "https://images.unsplash.com/photo-1581578735186-35cbd6a56c4b?w=400&h=300&fit=crop", category: "Residential" },
];

export default function Services() {
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
              All Cleaning Services
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Professional cleaning solutions tailored for Kerala homes and businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary-600/80 backdrop-blur text-white text-xs rounded-full">
                          {service.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4">
                        <span className="text-xl font-bold text-white">
                          {typeof service.price === "string" ? service.price : `₹${service.price}`}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                        {service.desc}
                      </p>

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
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}