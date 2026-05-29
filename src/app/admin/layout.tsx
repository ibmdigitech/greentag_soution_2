"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChartBarIcon, 
  ShoppingCartIcon, 
  CogIcon, 
  DocumentTextIcon,
  PhotoIcon,
  ArrowRightOnRectangleIcon,
  UsersIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: ChartBarIcon },
  { name: "Products", href: "/admin/products", icon: ShoppingCartIcon },
  { name: "Invoices", href: "/admin/invoices", icon: DocumentTextIcon },
  { name: "Gallery", href: "/admin/gallery", icon: PhotoIcon },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check local storage for mock Google authentication status
    const authStatus = localStorage.getItem("admin_authenticated") === "true";
    setIsAuthenticated(authStatus);

    if (!authStatus && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  if (!mounted) return null;

  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  // Redirecting state to avoid layout flashes
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-secondary-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <PremiumNavbar />
      <div className="flex pt-20 bg-gray-50 dark:bg-secondary-950 min-h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-secondary-900 border-r border-gray-200 dark:border-white/10 shrink-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white uppercase tracking-wider">
              Admin Panel
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Green Tag Solutions
            </p>
          </div>
          <nav className="flex-1 px-4 space-y-1.5 pb-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-secondary-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <button
              onClick={() => {
                localStorage.removeItem("admin_authenticated");
                router.push("/");
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-red-500 hover:bg-red-500/10 transition duration-300 mt-4"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Mobile Sidebar Navigation */}
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-105 active:scale-95"
            aria-label="Toggle navigation menu"
          >
            {isSidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsSidebarOpen(false)}
            >
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-72 max-w-[80vw] h-full bg-white dark:bg-secondary-900 border-r border-gray-200 dark:border-white/10 flex flex-col p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-secondary-900 dark:text-white uppercase tracking-wider">
                    Admin Panel
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Green Tag Solutions
                  </p>
                </div>
                <nav className="flex-1 space-y-1.5">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                            : "text-gray-600 dark:text-gray-300 hover:text-secondary-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                  <button
                    onClick={() => {
                      localStorage.removeItem("admin_authenticated");
                      router.push("/");
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-red-500 hover:bg-red-500/10 transition duration-300 mt-4"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
                    <span>Logout</span>
                  </button>
                </nav>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <main className="flex-grow p-6 lg:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
      <PremiumFooter />
    </>
  );
}
