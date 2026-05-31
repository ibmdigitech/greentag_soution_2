"use client";

import { useState, useRef } from "react";
import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  ArrowsRightLeftIcon,
  SparklesIcon,
  StarIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface GalleryItem {
  before: string;
  after: string;
  title: string;
  category: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    title: "Kitchen Deep Sanitization",
    category: "Residential",
    desc: "Complete deep cleaning of kitchen surfaces, cabinets, and appliances",
  },
  {
    before: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80",
    after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    title: "Corporate Office Restoration",
    category: "Commercial",
    desc: "Professional office deep cleaning and sanitization",
  },
  {
    before: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    after: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    title: "Sofa & Upholstery Shampooing",
    category: "Residential",
    desc: "Steam cleaning and stain removal for sofas and furniture",
  },
  {
    before: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    title: "Industrial Floor Polishing",
    category: "Industrial",
    desc: "High-pressure floor polishing and coating for factories",
  },
  {
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    title: "Bathroom Mould Treatment",
    category: "Residential",
    desc: "Anti-fungal treatment and complete bathroom restoration",
  },
  {
    before: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    after: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    title: "School Classroom Sanitation",
    category: "Institutional",
    desc: "Full school sanitization for safe learning environments",
  },
];

const categoryColors: Record<string, string> = {
  Residential: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Commercial: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Industrial: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Institutional: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

const stats = [
  { icon: PhotoIcon, value: "200+", label: "Projects Completed" },
  { icon: StarIcon, value: "4.9★", label: "Average Rating" },
  { icon: SparklesIcon, value: "100%", label: "Satisfaction Rate" },
  { icon: ArrowsRightLeftIcon, value: "Before/After", label: "Verified Results" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional"];
  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">

        {/* Hero */}
        <section className="py-20 px-4 bg-white dark:bg-secondary-800 border-b border-gray-100 dark:border-secondary-700/40">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                ✦ Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
                Transformation{" "}
                <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-8">
                Drag the slider on each card to reveal stunning before &amp; after results from real Green Tag Solutions cleaning projects across Kerala.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm font-semibold border border-primary-200 dark:border-primary-800/40">
                <ArrowsRightLeftIcon className="w-4 h-4" />
                Slide ← → to compare Before &amp; After
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="text-center p-4 bg-gray-50 dark:bg-secondary-900 rounded-2xl border border-gray-100 dark:border-secondary-700/40"
                  >
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <p className="text-xl font-bold text-secondary-900 dark:text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{s.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/20 scale-105"
                      : "bg-white dark:bg-secondary-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-secondary-700 hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: idx * 0.07 }}
                  className="bg-white dark:bg-secondary-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-secondary-700/60 hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Before/After Slider */}
                  <BeforeAfterSlider
                    before={item.before}
                    after={item.after}
                    title={item.title}
                  />

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-bold text-secondary-900 dark:text-white text-base group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${categoryColors[item.category] || ""}`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{item.desc}</p>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20I%20saw%20your%20gallery%20result%20for%20${encodeURIComponent(item.title)}%20and%20want%20to%20book%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white rounded-xl text-sm font-semibold transition-all duration-300 border border-primary-200 dark:border-primary-800/40 hover:border-primary-600"
                    >
                      <ChatBubbleLeftRightIcon className="w-4 h-4" />
                      Request Similar Result
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-gray-400 dark:text-gray-500">
                No results found for this category.
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-white dark:bg-secondary-800 border-t border-gray-100 dark:border-secondary-700/40">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-3">
                How We Achieve These Results
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Our 3-step proven process delivers consistent transformations</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Site Assessment", desc: "Our team visits and inspects the area, identifies problem zones and selects the right equipment and eco-certified products." },
                { step: "02", title: "Deep Cleaning", desc: "Using industrial-grade steam cleaners, pressure washers, and HEPA vacuums to eliminate grime, bacteria and allergens at the root." },
                { step: "03", title: "Quality Inspection", desc: "Every job is inspected with a structured checklist. We only sign off when you're 100% satisfied with the transformation." },
              ].map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center p-8 bg-gray-50 dark:bg-secondary-900 rounded-3xl border border-gray-100 dark:border-secondary-700/40"
                >
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg shadow-primary-600/20">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary-600 via-primary-700 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-green-100 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
                Join 500+ happy homeowners and businesses across Kerala. Book your professional deep cleaning or sanitization service in just a few taps.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-50 transition transform hover:scale-105 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Book a Cleaning Slot
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Green%20Tag%20Solutions%2C%20I%20saw%20your%20gallery%20and%20want%20to%20book%20a%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-800/50 border border-green-300/40 text-white font-bold rounded-full hover:bg-green-800 transition transform hover:scale-105 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <PremiumFooter />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Before/After Drag Slider ────────────────────────────────────────────────
function BeforeAfterSlider({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const calc = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div
      ref={ref}
      className="relative h-56 w-full overflow-hidden cursor-ew-resize select-none"
      onMouseDown={(e) => { setDragging(true); calc(e.clientX); }}
      onMouseMove={(e) => { if (dragging) calc(e.clientX); }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => { setDragging(true); calc(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (dragging) calc(e.touches[0].clientX); }}
      onTouchEnd={() => setDragging(false)}
    >
      {/* After (right side — full width base) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={`${title} - After`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before (left side — clipped by slider) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${pos}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={`${title} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: ref.current ? `${ref.current.offsetWidth}px` : "100%" }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 bg-red-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow z-20 pointer-events-none uppercase tracking-wider">
        Before
      </div>
      <div className="absolute bottom-3 right-3 bg-primary-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow z-20 pointer-events-none uppercase tracking-wider">
        After
      </div>

      {/* Slider handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-xl z-30 pointer-events-none flex items-center justify-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-9 h-9 rounded-full bg-white shadow-2xl border-2 border-primary-600 flex items-center justify-center text-primary-600 font-bold text-sm">
          ↔
        </div>
      </div>
    </div>
  );
}