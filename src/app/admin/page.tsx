"use client";

import { motion } from "framer-motion";
import { 
  ChartBarIcon, 
  ShoppingCartIcon, 
  CogIcon,
  CurrencyRupeeIcon
} from "@heroicons/react/24/outline";

const stats = [
  { title: "Total Orders", value: "124", color: "from-blue-500 to-blue-600", icon: ChartBarIcon, change: "+12% this month" },
  { title: "Products", value: "25", color: "from-primary-500 to-primary-600", icon: ShoppingCartIcon, change: "Categorized" },
  { title: "Services", value: "19", color: "from-purple-500 to-purple-600", icon: CogIcon, change: "All active" },
  { title: "Revenue", value: "₹2.4L", color: "from-amber-500 to-yellow-500", icon: CurrencyRupeeIcon, change: "+18% this month" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Info */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold text-secondary-900 dark:text-white tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Real-time metrics and operations status for Green Tag Solutions.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className={`relative bg-gradient-to-r ${stat.color} text-white p-6 rounded-2xl shadow-xl transition transform hover:-translate-y-1 duration-300`}>
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 opacity-80" />
                  <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                </div>
                <p className="font-semibold text-sm opacity-90">{stat.title}</p>
                <p className="text-xs opacity-75 mt-1">{stat.change}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="glass-dark rounded-2xl p-6 shadow-xl border border-white/5"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Recent Service Orders</h2>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-primary-400 font-semibold">
            Live Stream
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-white/10 text-gray-400 font-medium">
              <tr>
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "#ORD001", customer: "John Doe", amount: "₹2,999", status: "Completed", date: "2025-01-15" },
                { id: "#ORD002", customer: "Priya S", amount: "₹1,499", status: "Pending", date: "2025-01-16" },
                { id: "#ORD003", customer: "Rajesh K", amount: "₹3,999", status: "In Progress", date: "2025-01-17" },
              ].map((order) => (
                <tr key={order.id} className="border-b border-white/5 text-gray-250 hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-mono text-gray-400">{order.id}</td>
                  <td className="py-4 px-4 font-medium text-white">{order.customer}</td>
                  <td className="py-4 px-4 font-bold text-primary-400">{order.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                      order.status === "Completed" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                      order.status === "Pending" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : 
                      "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-450">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}