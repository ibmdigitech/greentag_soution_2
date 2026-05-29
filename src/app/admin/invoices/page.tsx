"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { PlusIcon, ArrowDownTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const dummyInvoices = [
  { id: "INV-2026-001", customer: "Rajesh Kumar", date: "2026-05-28", amount: 4500, status: "Paid" },
  { id: "INV-2026-002", customer: "Global Tech Park", date: "2026-05-27", amount: 12500, status: "Pending" },
  { id: "INV-2026-003", customer: "Priya Sharma", date: "2026-05-25", amount: 2999, status: "Paid" },
  { id: "INV-2026-004", customer: "Sunrise Apartments", date: "2026-05-20", amount: 28500, status: "Overdue" },
  { id: "INV-2026-005", customer: "City Hospital", date: "2026-05-18", amount: 9999, status: "Paid" },
  { id: "INV-2026-006", customer: "Anita Desai", date: "2026-05-15", amount: 1850, status: "Pending" },
];

export default function AdminInvoices() {
  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-2">
                Invoicing
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Generate and manage invoices for your clients.
              </p>
            </div>
            <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 flex items-center gap-2 transition w-full md:w-auto justify-center shadow-lg shadow-primary-600/20">
              <PlusIcon className="w-5 h-5" />
              Generate Invoice
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-dark rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full relative">
                <thead className="bg-secondary-800/80 sticky top-0 backdrop-blur-md border-b border-white/10 z-10">
                  <tr>
                    <th className="text-left py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Invoice ID</th>
                    <th className="text-left py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Customer</th>
                    <th className="text-left py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Date</th>
                    <th className="text-right py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Amount</th>
                    <th className="text-center py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Status</th>
                    <th className="text-right py-4 px-6 text-primary-400 font-medium whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyInvoices.map((invoice, index) => (
                    <motion.tr
                      key={invoice.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.05, 0.5) }}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="py-4 px-6 text-white font-medium whitespace-nowrap flex items-center gap-2">
                        <DocumentTextIcon className="w-4 h-4 text-gray-400" />
                        {invoice.id}
                      </td>
                      <td className="py-4 px-6 text-gray-300 whitespace-nowrap">{invoice.customer}</td>
                      <td className="py-4 px-6 text-gray-400 whitespace-nowrap text-sm">{invoice.date}</td>
                      <td className="py-4 px-6 text-right text-primary-400 font-bold whitespace-nowrap">₹{invoice.amount.toLocaleString()}</td>
                      <td className="py-4 px-6 text-center whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          invoice.status === "Paid" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : 
                          invoice.status === "Pending" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : 
                          "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <button className="px-3 py-1.5 bg-secondary-700/50 text-white rounded-lg hover:bg-primary-600 transition inline-flex items-center gap-1.5 text-sm font-medium border border-white/10 hover:border-primary-600">
                          <ArrowDownTrayIcon className="w-4 h-4" />
                          PDF
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}
