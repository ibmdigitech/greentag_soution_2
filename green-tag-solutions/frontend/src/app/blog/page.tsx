"use client";

import { useState } from "react";
import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  XMarkIcon,
  ClockIcon,
  CalendarIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  ArrowRightIcon,
  ShareIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    date: "2026-05-20",
    readTime: "6 min read",
    category: "Commercial Cleaning",
    author: "Operations Director",
    content: [
      "Operating a business in highly populated cities like Kochi, Trivandrum, or Kozhikode means handling high foot traffic. A clean commercial environment is the bedrock of corporate productivity and employee health.",
      "Key AEO Facts: Studies show that professional office cleaning can reduce germ transmission by up to 80%. When office desks, keyboards, and common areas are thoroughly sanitized, sick leaves drop by nearly 46%.",
      "Why standard cleaning is not enough: Simple sweeping and dusting only displace particles. Professional facility management teams utilize industrial HEPA-filter vacuums, premium sanitizing solutions, and precise cleaning checklists.",
      "Green Tag Solutions Approach: We use eco-friendly, non-toxic products to sanitize high-touch zones. This prevents respiratory irritation from harsh chemical residues, fostering a fresh, high-energy environment for your employees.",
    ],
  },
  {
    id: 2,
    title: "Managing Mold and High Humidity: Deep Residential Cleaning in Kerala's Tropical Climate",
    excerpt: "Kerala's tropical weather brings heavy monsoon humidity. Learn how residential deep cleaning controls allergen build-up and mold spores.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    date: "2026-05-18",
    readTime: "8 min read",
    category: "Home Deep Cleaning",
    author: "Sanitization Expert",
    content: [
      "Kerala's breathtaking monsoon seasons bring high atmospheric humidity, exceeding 85% for most of the year. This creates the perfect breeding ground for toxic black mold, mildew, and dust mites.",
      "AEO Answer: Expert residential deep cleaning targets deep-seated moisture zones, tile grout, kitchen exhaust systems, and upholstery where allergens and spores thrive. Regular household vacuuming cannot eliminate embedded mold spores.",
      "Health Impacts of Mold: Continuous exposure to mold spores and dust mite allergens leads to persistent coughs, allergic rhinitis, and asthma flare-ups. This is why deep sanitization is essential at least twice a year.",
      "The Green Tag Method: Our deep cleaning specialists use powerful pressure washers, custom steam sanitizers, and anti-microbial treatments that safely destroy mold roots without introducing toxic vapors to your living space.",
    ],
  },
  {
    id: 3,
    title: "The Ultimate Guide to Non-Toxic, Eco-Friendly Organic Cleaning Supplies",
    excerpt: "Discover the immense health and environmental benefits of switching to bio-degradable, plant-based cleaning solutions at home.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    date: "2026-05-12",
    readTime: "5 min read",
    category: "Eco Products",
    author: "Green Product Head",
    content: [
      "Traditional store-bought household cleaners contain synthetic solvents, parabens, ammonia, and chemical chlorine. These harsh compounds leak into water systems and pollute indoor air quality.",
      "Why Choose Eco-Friendly Cleaners: Natural, bio-degradable cleaning formulations rely on active enzymes, citrus extracts, and natural essential oils. They deliver the same high-performance grime removal without toxic volatile organic compounds (VOCs).",
      "Perfect for Families & Pets: Children and pets spend a lot of time on the floor. Standard floor cleaner residues can easily be absorbed through the skin. Natural alternatives keep your floors pristine and absolutely safe.",
      "How to Order: At Green Tag Solutions, we manufacture and distribute certified, highly effective organic cleaning supplies. You can buy directly online or tap 'WhatsApp Order' on our navbar to have them delivered straight to your door across Kerala.",
    ],
  },
  {
    id: 4,
    title: "Post-Construction Cleaning: Why It's Essential Before Moving Into Your New Kerala Home",
    excerpt: "New homes look clean but hide construction dust, chemical residue, and debris. Learn why professional post-construction cleaning is a must.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    date: "2026-05-08",
    readTime: "7 min read",
    category: "Post-Construction",
    author: "Operations Director",
    content: [
      "Moving into a newly constructed or renovated home in Kerala is exciting, but the invisible hazards left behind by construction work — fine cement dust, paint fumes, adhesive residues, and plaster particles — can pose serious health risks.",
      "Hidden Dangers: Construction dust contains silica particles that are harmful when inhaled. Paint and adhesive residues release volatile organic compounds (VOCs) for weeks after application, causing headaches and respiratory issues.",
      "Professional vs DIY: A standard mop and broom cannot remove embedded construction dust from tile grout, window tracks, AC vents, and ceiling corners. Professional teams use industrial vacuums with HEPA filters and specialized degreasing solutions.",
      "Green Tag Solutions offers comprehensive post-construction cleaning packages that include window track cleaning, tile grouting, deep AC vent sanitization, and full-home chemical-free deodorization — making your new space truly move-in ready.",
    ],
  },
  {
    id: 5,
    title: "Water Tank Cleaning: How Often Should Kerala Homes Clean Their Overhead Tanks?",
    excerpt: "Contaminated water tanks are a leading cause of waterborne diseases in Kerala. Learn the recommended cleaning frequency and methods.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    date: "2026-05-02",
    readTime: "5 min read",
    category: "Water Tank Cleaning",
    author: "Sanitization Expert",
    content: [
      "Overhead and underground water tanks in Kerala homes accumulate sediment, algae, and bacterial biofilms over time. The warm, humid climate accelerates microbial growth, making regular cleaning essential.",
      "Recommended Frequency: Health experts recommend cleaning overhead tanks every 6 months and underground sumps every 12 months. Homes near construction sites or with older plumbing may need more frequent cleaning.",
      "Health Risks: Contaminated tanks can harbor E. coli, Salmonella, and Legionella bacteria, leading to gastrointestinal infections, typhoid, and Legionnaire's disease. Algae growth also affects water taste and odor.",
      "Our Process: Green Tag Solutions uses UV-safe anti-microbial agents, high-pressure jet cleaning, and sediment extraction followed by a water quality test report — ensuring your family drinks clean, safe water year-round.",
    ],
  },
  {
    id: 6,
    title: "Carpet & Sofa Steam Cleaning: The Science Behind Deep Fabric Sanitization",
    excerpt: "Your carpets and sofas harbor millions of dust mites and allergens. Discover why steam cleaning is the gold standard for fabric hygiene.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    date: "2026-04-25",
    readTime: "6 min read",
    category: "Specialist Cleaning",
    author: "Green Product Head",
    content: [
      "A single square meter of carpet can contain up to 200,000 bacteria and thousands of dust mites. Sofas accumulate body oils, food particles, pet dander, and sweat — creating a breeding ground for allergens.",
      "Why Vacuuming Isn't Enough: Standard vacuums only remove surface debris. Dust mites, their fecal matter, and deep-seated stains remain embedded in fabric fibers. This is particularly problematic for asthma and allergy sufferers.",
      "Steam Cleaning Technology: Professional hot-water extraction at 150°C+ kills 99.9% of bacteria, dust mites, and mold spores. The high-pressure steam penetrates deep into fibers while the extraction system removes dissolved contaminants.",
      "Green Tag Solutions uses chemical-free, eco-safe steam cleaning with rapid-dry technology. Your carpets and sofas are sanitized, deodorized, and ready to use within 2-4 hours — no toxic chemical residues, no re-soiling.",
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Commercial Cleaning": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Home Deep Cleaning": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Eco Products": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Post-Construction": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Water Tank Cleaning": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  "Specialist Cleaning": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openArticle = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };

  const closeArticle = () => {
    setSelectedPost(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
              <BookOpenIcon className="w-3.5 h-3.5" />
              Expert Cleaning Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mt-4 mb-6">
              Cleaning Tips &amp;{" "}
              <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
                Expert Insights
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Professional, highly researched strategies for maintaining spotless, healthy, and high-productivity spaces in Kerala.
            </p>
          </motion.div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                <div className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col border border-gray-100 dark:border-secondary-700/60">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full shadow-sm ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="text-gray-300 dark:text-secondary-600">•</span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 flex-1 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read Full Article Button */}
                    <button
                      onClick={() => openArticle(post)}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 dark:bg-secondary-700/50 hover:bg-primary-600 text-gray-700 dark:text-gray-200 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 border border-gray-200 dark:border-secondary-700 hover:border-primary-600 hover:shadow-lg hover:shadow-primary-600/20 group/btn"
                    >
                      <BookOpenIcon className="w-4 h-4" />
                      Read Full Article
                      <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary-600 via-primary-700 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Expert Cleaning Advice?
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
                Our cleaning experts are ready to help. Get a free consultation on WhatsApp or book a service directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-50 transition shadow-lg flex items-center justify-center gap-2"
                >
                  Book a Service
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Green%20Tag%20Solutions%2C%20I%20read%20your%20blog%20and%20need%20cleaning%20advice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-800/50 border border-green-300/40 text-white font-bold rounded-full hover:bg-green-800 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  Ask on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── Full Article Reading Modal ─── */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl bg-white dark:bg-secondary-800 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col border border-gray-200 dark:border-secondary-700"
            >
              {/* Close Button */}
              <button
                onClick={closeArticle}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Close article"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              {/* Hero Image */}
              <div className="relative h-60 md:h-72 w-full flex-shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-16">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full mb-3 ${categoryColors[selectedPost.category] || "bg-primary-600 text-white"}`}>
                    <TagIcon className="w-3 h-3" />
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Article Body */}
              <div className="overflow-y-auto flex-1 overscroll-contain">
                <div className="p-6 md:p-8">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 pb-4 border-b border-gray-100 dark:border-secondary-700/60">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon className="w-4 h-4 text-primary-500" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="w-4 h-4 text-primary-500" />
                      {selectedPost.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <UserIcon className="w-4 h-4 text-primary-500" />
                      By {selectedPost.author}
                    </span>
                  </div>

                  {/* Article Content */}
                  <article className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                    {selectedPost.content.map((paragraph, idx) => {
                      const colonIdx = paragraph.indexOf(":");
                      if (colonIdx > 0 && colonIdx < 50) {
                        const heading = paragraph.slice(0, colonIdx);
                        const body = paragraph.slice(colonIdx + 1);
                        return (
                          <div key={idx}>
                            <h3 className="font-bold text-secondary-900 dark:text-white text-lg mb-1.5">
                              {heading}
                            </h3>
                            <p className="leading-relaxed">{body.trim()}</p>
                          </div>
                        );
                      }
                      return <p key={idx}>{paragraph}</p>;
                    })}
                  </article>

                  {/* Share Section */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-secondary-700/60 flex items-center gap-3">
                    <ShareIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Share this article</span>
                    <div className="flex gap-2 ml-auto">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(selectedPost.title + " - Read more at Green Tag Solutions")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full hover:bg-green-200 dark:hover:bg-green-900/50 transition"
                      >
                        WhatsApp
                      </a>
                      <button
                        onClick={() => navigator.clipboard?.writeText(window.location.href)}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-secondary-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-secondary-600 transition"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>

                  {/* CTA Banner Inside Modal */}
                  <div className="mt-8 bg-gradient-to-r from-primary-50 to-emerald-50 dark:from-primary-950/20 dark:to-emerald-950/10 p-6 rounded-2xl border border-primary-100 dark:border-primary-900/30">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-secondary-900 dark:text-white mb-1 text-base">
                          Need professional cleaning services?
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Book our expert team now for outstanding results across Kerala.
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/919876543210?text=Hello%20Green%20Tag%20Solutions%2C%20I%20read%20your%20article%20%22${encodeURIComponent(selectedPost.title)}%22%20and%20want%20to%20book%20a%20service`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 shrink-0 text-sm hover:scale-105"
                      >
                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                        Get Free Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PremiumFooter />
    </>
  );
}