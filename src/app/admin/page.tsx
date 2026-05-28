"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChartBarIcon, 
  ShoppingCartIcon, 
  CogIcon, 
  UsersIcon,
  DocumentTextIcon,
  PhotoIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

const stats = [
  { title: "Total Orders", value: "124", color: "from-blue-500 to-blue-600", icon: ChartBarIcon, change: "+12% this month" },
  { title: "Products", value: "48", color: "from-primary-500 to-primary-600", icon: ShoppingCartIcon, change: "+3 new" },
  { title: "Services", value: "16", color: "from-purple-500 to-purple-600", icon: CogIcon, change: "All active" },
  { title: "Revenue", value: "₹2.4L", color: "from-accent-gold to-yellow-500", icon: ChartBarIcon, change: "+18% this month" },
];

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: ChartBarIcon },
  { name: "Products", href: "/admin/products", icon: ShoppingCartIcon },
  { name: "Services", href: "/admin/services", icon: CogIcon },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCartIcon },
  { name: "Invoices", href: "/admin/invoices", icon: DocumentTextIcon },
  { name: "Customers", href: "/admin/customers", icon: UsersIcon },
  { name: "Gallery", href: "/admin/gallery", icon: PhotoIcon },
  { name: "Logout", href: "/admin/logout", icon: ArrowRightOnRectangleIcon },
];

export default function AdminDashboard() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your cleaning services and products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className={`relative bg-gradient-to-r ${stat.color} text-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-10 h-10 opacity-80" />
                      <span className="text-3xl font-bold">{stat.value}</span>
                    </div>
                    <p className="font-medium">{stat.title}</p>
                    <p className="text-sm opacity-80">{stat.change}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-dark rounded-2xl p-6 shadow-xl"
              >
                <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                <div className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-dark rounded-2xl p-6 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Recent Orders</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-white/10">
                      <tr className="text-gray-300">
                        <th className="text-left py-3">Order ID</th>
                        <th className="text-left py-3">Customer</th>
                        <th className="text-left py-3">Amount</th>
                        <th className="text-left py-3">Status</th>
                        <th className="text-left py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: "#ORD001", customer: "John Doe", amount: "₹2,999", status: "Completed", date: "2025-01-15" },
                        { id: "#ORD002", customer: "Priya S", amount: "₹1,499", status: "Pending", date: "2025-01-16" },
                        { id: "#ORD003", customer: "Rajesh K", amount: "₹3,999", status: "In Progress", date: "2025-01-17" },
                      ].map((order) => (
                        <tr key={order.id} className="border-b border-white/5 text-gray-200 hover:bg-white/5 transition">
                          <td className="py-4">{order.id}</td>
                          <td className="py-4">{order.customer}</td>
                          <td className="py-4 font-semibold text-white">{order.amount}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              order.status === "Completed" ? "bg-primary-600" :
                              order.status === "Pending" ? "bg-yellow-600" : "bg-blue-600"
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}