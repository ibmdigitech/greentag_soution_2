"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  TruckIcon,
  StarIcon,
  UserGroupIcon,
  MapPinIcon,
  ClockIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { icon: UserGroupIcon, stat: "500+", label: "Happy Customers", color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/20" },
  { icon: SparklesIcon, stat: "17+", label: "Services Offered", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/20" },
  { icon: StarIcon, stat: "4.9★", label: "Google Rating", color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-100 dark:bg-yellow-900/20" },
  { icon: ClockIcon, stat: "24hr", label: "Service Guarantee", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/20" },
  { icon: HeartIcon, stat: "100%", label: "Eco-Friendly", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/20" },
  { icon: MapPinIcon, stat: "All", label: "Kerala Districts", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/20" },
];

const values = [
  { icon: SparklesIcon, title: "Quality First", desc: "We never compromise on quality. Every cleaning job is inspected and verified before handover to ensure 100% satisfaction." },
  { icon: HeartIcon, title: "Eco-Conscious", desc: "All our products are bio-degradable, plant-based, and certified safe for children, pets, and people with respiratory sensitivities." },
  { icon: ShieldCheckIcon, title: "Trained Professionals", desc: "Our team undergoes rigorous training, background verification, and regular quality audits for consistent, world-class service delivery." },
  { icon: TruckIcon, title: "On-Time Delivery", desc: "We value your time. Our teams arrive at the scheduled slot with all required equipment and complete the job within promised timelines." },
];

const timeline = [
  { year: "2020", title: "Founded in Kozhikode", desc: "Green Tag Solutions was founded with a vision to bring professional cleaning to every Kerala household." },
  { year: "2021", title: "Expanded to 5 Districts", desc: "Grew our operations to cover Kochi, Thrissur, Trivandrum and all major city corridors in Kerala." },
  { year: "2022", title: "Launched Eco Product Line", desc: "Introduced our certified organic cleaning product range available for WhatsApp ordering statewide." },
  { year: "2023", title: "500+ Happy Customers", desc: "Crossed the 500 satisfied client milestone with a 4.9-star average Google review rating." },
  { year: "2024", title: "Online Booking Platform", desc: "Launched our full-featured website for instant booking, product orders, and live WhatsApp support." },
];

export default function About() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">

        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-emerald-500/5 dark:from-primary-900/20 dark:to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                ✦ Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
                  Green Tag Solutions
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Kerala&apos;s most trusted cleaning professionals — combining modern techniques with eco-friendly care since 2020.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-secondary-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-secondary-700/60">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <CheckBadgeIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </span>
                    Our Story
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Founded in 2020, Green Tag Solutions has grown to become Kerala&apos;s most trusted professional cleaning service provider. We combine modern cleaning techniques with eco-friendly products to deliver exceptional results.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Our dedicated team of trained professionals serves homes, offices, schools, and industrial facilities across all districts of Kerala with reliable and consistent service.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We believe in creating healthier environments through sustainable cleaning solutions that protect both your family and our planet.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="/services"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-2xl transition shadow-lg shadow-primary-600/20"
                  >
                    Explore Services <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Green%20Tag%20Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl transition shadow-lg shadow-green-600/20"
                  >
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80"
                  alt="Professional cleaning team Kerala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Trusted across Kerala since 2020</p>
                  <p className="text-gray-200 text-sm">500+ happy customers · 4.9★ rating</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-16 px-4 bg-white dark:bg-secondary-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-3">
                Our Numbers Speak
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Real results from real cleaning professionals</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="text-center p-6 bg-gray-50 dark:bg-secondary-900 rounded-2xl border border-gray-100 dark:border-secondary-700/40 hover:shadow-lg transition"
                  >
                    <div className={`w-12 h-12 ${item.bg} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <p className="text-3xl font-bold text-secondary-900 dark:text-white mb-1">{item.stat}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-secondary-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-bold text-xs uppercase tracking-widest rounded-full mb-3">
                Our Core Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-3">
                Why Families Trust Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                Every decision we make is guided by these four pillars.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 p-6 bg-white dark:bg-secondary-800 rounded-2xl shadow-md border border-gray-100 dark:border-secondary-700/60 hover:shadow-xl transition group"
                  >
                    <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                      <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900 dark:text-white text-lg mb-2">{val.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-white dark:bg-secondary-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-bold text-xs uppercase tracking-widest rounded-full mb-3">
                Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-3">
                Our Growth Story
              </h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 dark:from-primary-900 dark:via-primary-600 dark:to-primary-900 transform -translate-x-1/2" />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className={`flex-1 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                      <div className="bg-gray-50 dark:bg-secondary-900 p-5 rounded-2xl border border-gray-100 dark:border-secondary-700/50 shadow">
                        <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">{item.year}</span>
                        <h3 className="font-bold text-secondary-900 dark:text-white text-base mt-1 mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-800 shadow-md z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-emerald-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience the Green Tag Difference?
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
                Book your cleaning service today and join 500+ happy customers across Kerala.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-50 transition shadow-lg"
                >
                  Book a Cleaning
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Green%20Tag%20Solutions%2C%20I%20want%20to%20book%20a%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-700 border border-green-400 text-white font-bold rounded-full hover:bg-green-800 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  WhatsApp Order
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <PremiumFooter />
    </>
  );
}