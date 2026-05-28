"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Offers", href: "/offers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 dark:bg-secondary-900/80 backdrop-blur-lg shadow-lg dark:shadow-secondary-800/20" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image src="/images/logo.jpeg" alt="Green Tag Solutions" width={48} height={48} className="rounded-full w-12 h-12 transition-transform group-hover:scale-110" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary-600 opacity-0 group-hover:opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? "text-primary-600 dark:text-primary-400" : "text-white"}`}>
                Green Tag Solutions
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? isScrolled ? "text-primary-600" : "text-primary-400"
                      : isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white/90"
                  } hover:${isScrolled ? "text-primary-600" : "text-white"}`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white/10 dark:bg-secondary-800/50 backdrop-blur hover:bg-white/20 dark:hover:bg-secondary-700/50 transition"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div key="sun" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                      <SunIcon className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                      <MoonIcon className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <Link
                href="/cart"
                className="relative p-2 rounded-full bg-white/10 dark:bg-secondary-800/50 backdrop-blur hover:bg-white/20 dark:hover:bg-secondary-700/50 transition"
              >
                <ShoppingCartIcon className={`w-5 h-5 ${isScrolled ? "text-gray-700" : "text-white"}`} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition transform hover:scale-105 shadow-lg hover:shadow-primary-600/30"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                WhatsApp Order
              </a>

              <Link
                href="/request-quote"
                className="inline-flex items-center px-5 py-2.5 bg-white/10 dark:bg-secondary-800/50 backdrop-blur text-white font-semibold rounded-full hover:bg-white/20 dark:hover:bg-secondary-700/50 transition transform hover:scale-105 border border-white/20"
              >
                Book Cleaning
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 dark:hover:bg-secondary-800/50 transition"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <XMarkIcon className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <Bars3Icon className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 dark:bg-secondary-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-secondary-700"
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                        pathname === item.href
                          ? "bg-primary-50 text-primary-600"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-secondary-700 space-y-3">
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-800"
                  >
                    {isDarkMode ? <SunIcon className="w-4 h-4 mr-2" /> : <MoonIcon className="w-4 h-4 mr-2" />}
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium text-white bg-primary-600"
                  >
                    <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                    WhatsApp Order
                  </a>
                  <Link
                    href="/request-quote"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-center text-white bg-secondary-800 dark:bg-secondary-700"
                  >
                    Book Cleaning
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Green%20Tag%20Solutions%2C%20I%20need%20cleaning%20service`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
          <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75" />
        </motion.a>
      </div>
    </>
  );
}