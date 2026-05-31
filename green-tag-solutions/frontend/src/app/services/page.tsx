"use client";

import { useState } from "react";
import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  { title: "Home Cleaning", desc: "Regular and deep home cleaning with eco-friendly products", price: "₹1,999", icon: HomeIcon, img: "https://loremflickr.com/800/600/cleaning?lock=33", category: "Residential" },
  { title: "Office Cleaning", desc: "Professional office cleaning for corporate spaces", price: "₹2,999", icon: BuildingOffice2Icon, img: "https://loremflickr.com/800/600/cleaning?lock=34", category: "Commercial" },
  { title: "School Cleaning", desc: "Safe and hygienic cleaning for educational institutions", price: "₹3,499", icon: AcademicCapIcon, img: "https://loremflickr.com/800/600/cleaning?lock=35", category: "Institutional" },
  { title: "Hospital Cleaning", desc: "Medical-grade cleaning for healthcare facilities", price: "₹4,999", icon: HeartIcon, img: "https://loremflickr.com/800/600/cleaning?lock=36", category: "Healthcare" },
  { title: "Deep Cleaning", desc: "Thorough deep cleaning for neglected spaces", price: "₹3,999", icon: SparklesIcon, img: "https://loremflickr.com/800/600/cleaning?lock=37", category: "Specialist" },
  { title: "Petrol Pump Cleaning", desc: "Industrial cleaning for fuel stations", price: "₹5,999", icon: CogIcon, img: "https://loremflickr.com/800/600/cleaning?lock=38", category: "Industrial" },
  { title: "Sofa Cleaning", desc: "Professional sofa and upholstery cleaning", price: "₹1,499", icon: SparklesIcon, img: "https://loremflickr.com/800/600/cleaning?lock=39", category: "Specialist" },
  { title: "Carpet Cleaning", desc: "Deep carpet and rug cleaning services", price: "₹2,499", icon: ShoppingBagIcon, img: "https://loremflickr.com/800/600/cleaning?lock=40", category: "Specialist" },
  { title: "Water Tank Cleaning", desc: "Professional water tank cleaning and disinfection", price: "₹3,299", icon: CogIcon, img: "https://loremflickr.com/800/600/cleaning?lock=41", category: "Industrial" },
  { title: "Service Station Cleaning", desc: "Automotive service station cleaning", price: "₹4,499", icon: CogIcon, img: "https://loremflickr.com/800/600/cleaning?lock=42", category: "Industrial" },
  { title: "Industrial Cleaning", desc: "Large-scale industrial facility cleaning", price: "Custom", icon: BuildingOffice2Icon, img: "https://loremflickr.com/800/600/cleaning?lock=43", category: "Industrial" },
  { title: "Post Construction Cleaning", desc: "Cleanup after renovation or construction", price: "₹5,999", icon: HomeIcon, img: "https://loremflickr.com/800/600/cleaning?lock=44", category: "Specialist" },
  { title: "Kitchen Cleaning", desc: "Deep kitchen hood and appliance cleaning", price: "₹2,199", icon: BuildingOffice2Icon, img: "https://loremflickr.com/800/600/cleaning?lock=45", category: "Residential" },
  { title: "Bathroom Sanitization", desc: "Complete bathroom deep cleaning", price: "₹1,799", icon: SparklesIcon, img: "https://loremflickr.com/800/600/cleaning?lock=46", category: "Residential" },
  { title: "Glass Cleaning", desc: "Professional window and glass cleaning", price: "₹999", icon: BuildingOffice2Icon, img: "https://loremflickr.com/800/600/cleaning?lock=47", category: "Commercial" },
  { title: "Pest Control Services", desc: "Complete pest control and elimination", price: "₹1,499", icon: BugAntIcon, img: "https://loremflickr.com/800/600/cleaning?lock=48", category: "Specialist" },
  { title: "Floor Polishing", desc: "Marble and tile floor polishing", price: "₹2,799", icon: SparklesIcon, img: "https://loremflickr.com/800/600/cleaning?lock=49", category: "Specialist" },
  { title: "Marble Polishing", desc: "Professional marble restoration", price: "₹3,499", icon: SparklesIcon, img: "https://loremflickr.com/800/600/cleaning?lock=50", category: "Specialist" },
  { title: "Apartment Cleaning", desc: "Complete apartment deep cleaning", price: "₹2,499", icon: HomeIcon, img: "https://loremflickr.com/800/600/cleaning?lock=51", category: "Residential" },
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
                      <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary-600/80 backdrop-blur text-white text-xs rounded-full">
                          {service.category}
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

          {/* How It Works Section */}
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 dark:text-white mb-4">
                Our Seamless Cleaning Process
              </h2>
              <p className="text-gray-650 dark:text-gray-300 text-lg max-w-xl mx-auto">
                Getting a spotless, sanitized space in Kerala has never been this effortless.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Process line for desktop */}
              <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary-400 to-green-500 z-0 opacity-20" />

              {[
                { step: "01", title: "Book in Seconds", desc: "Select your desired service, configure dynamic options, and schedule a convenient slot or place a direct WhatsApp order." },
                { step: "02", title: "We Assign Experts", desc: "Our verified, fully equipped local cleaning professionals will arrive on schedule with premium eco-friendly sanitizers." },
                { step: "03", title: "Enjoy the Sparkle", desc: "Sit back and relax while our dedicated team transforms your space using modern high-pressure systems and sanitization checklists." }
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center bg-white dark:bg-secondary-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-secondary-700/60"
                >
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-primary-600/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <ServicesFaqSection />
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}

// Separate stateful FAQ section to keep component clean and responsive
function ServicesFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Are your cleaning products safe for pets and children?",
      a: "Yes, absolutely! We prioritize your family's health and safety by using 100% certified organic, plant-based, non-toxic cleaning supplies. They are completely safe for infants, pets, and individuals with respiratory issues."
    },
    {
      q: "Do I need to be present during the cleaning service?",
      a: "You do not need to be present for the entire cleaning duration. However, we recommend being there at the start to walk the team through any specific focus areas, and at the end to inspect and sign off on our completed checklist."
    },
    {
      q: "Which regions in Kerala do you currently serve?",
      a: "Green Tag Solutions provides premium services across Kochi/Ernakulam, Kozhikode, Trivandrum, Thrissur, and all major surrounding municipal sectors. For remote bookings, please contact us via WhatsApp."
    },
    {
      q: "How does your pricing model work?",
      a: "Our pricing is transparent and based on the size of the space (BHK or square footage) and the type of service chosen (Deep Cleaning vs. Regular Sanitization). There are no hidden fees, and you can pay securely online or via cash after service delivery."
    }
  ];

  return (
    <div className="mt-36 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-650 dark:text-gray-300 text-lg">
          Clear, honest answers about our professional cleaning procedures.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-secondary-800 rounded-2xl border border-gray-150 dark:border-secondary-700/60 overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex justify-between items-center w-full p-6 text-left font-bold text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              <span>{faq.q}</span>
              <span className="text-xl font-semibold text-gray-400">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            <motion.div
              initial={false}
              animate={{ height: openIndex === idx ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-50 dark:border-secondary-750">
                {faq.a}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}