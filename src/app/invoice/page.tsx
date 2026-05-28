"use client";

import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { motion } from "framer-motion";
import { PrinterIcon, ChatBubbleLeftRightIcon, QrCodeIcon } from "@heroicons/react/24/outline";

export default function Invoice() {
  const invoiceData = {
    invoiceNumber: "GT-2025-001",
    date: "2025-01-15",
    dueDate: "2025-01-22",
    customer: { name: "John Doe", phone: "+91 98765 43210", address: "Kochi, Kerala" },
    items: [
      { name: "Floor Cleaner 1L", price: 299, quantity: 2, gst: 18 },
      { name: "Air Freshener", price: 449, quantity: 1, gst: 18 },
    ],
    gstNumber: "GSTIN-32AAAAA0000AIZZ",
    status: "Paid",
  };

  const subtotal = invoiceData.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const gst = invoiceData.items.reduce((sum, i) => sum + (i.price * i.quantity * i.gst / 100), 0);
  const total = subtotal + gst;

  return (
    <>
      <PremiumNavbar />
      <main className="flex-1 pt-20 bg-gray-50 dark:bg-secondary-900 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-dark rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                  Green Tag Solutions
                </h1>
                <p className="text-gray-300 text-lg">Professional Cleaning Services & Products</p>
              </div>

              <div className="text-right mt-4 md:mt-0">
                <h2 className="text-3xl font-bold text-white mb-2">INVOICE</h2>
                <div className="space-y-1 text-sm text-gray-300">
                  <p><span className="text-gray-400">Invoice #:</span> {invoiceData.invoiceNumber}</p>
                  <p><span className="text-gray-400">Date:</span> {invoiceData.date}</p>
                  <p><span className="text-gray-400">Due:</span> {invoiceData.dueDate}</p>
                  <span className={`inline-block px-3 py-1 mt-2 rounded-full text-xs font-semibold ${
                    invoiceData.status === "Paid" ? "bg-primary-600" : "bg-yellow-600"
                  } text-white`}>
                    {invoiceData.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-primary-400 font-semibold mb-3">Bill To:</h3>
                <div className="space-y-1 text-gray-300">
                  <p className="text-white font-medium text-lg">{invoiceData.customer.name}</p>
                  <p>{invoiceData.customer.phone}</p>
                  <p>{invoiceData.customer.address}</p>
                </div>
              </div>

              <div className="md:text-right">
                <h3 className="text-primary-400 font-semibold mb-3">GST Details:</h3>
                <div className="space-y-1 text-gray-300">
                  <p className="text-white font-medium">{invoiceData.gstNumber}</p>
                  <p>Kerala State GST</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead className="border-b-2 border-primary-600">
                  <tr className="text-primary-400">
                    <th className="text-left py-3">Item Description</th>
                    <th className="text-center py-3">Qty</th>
                    <th className="text-right py-3">Price</th>
                    <th className="text-right py-3">GST (18%)</th>
                    <th className="text-right py-3">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-b border-white/10 text-gray-300 hover:bg-white/5 transition"
                    >
                      <td className="py-4 text-white">{item.name}</td>
                      <td className="text-center py-4">{item.quantity}</td>
                      <td className="text-right py-4">₹{item.price}</td>
                      <td className="text-right py-4">₹{(item.price * item.quantity * item.gst / 100).toFixed(2)}</td>
                      <td className="text-right py-4 font-medium text-white">₹{(item.price * item.quantity).toFixed(2)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end">
              <div className="w-48 h-48 bg-white/10 rounded-lg flex items-center justify-center mb-6 md:mb-0">
                <QrCodeIcon className="w-24 h-24 text-primary-400" />
                <span className="sr-only">QR Code for payment</span>
              </div>

              <div className="w-full md:w-80 space-y-2">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">GST (18%)</span>
                  <span className="text-white font-medium">₹{gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-4 text-lg font-bold">
                  <span className="text-primary-400">Grand Total</span>
                  <span className="text-white">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10 pt-6 border-t border-white/10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.print()}
                className="flex-1 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2"
              >
                <PrinterIcon className="w-5 h-5" />
                Print Invoice
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                Send via WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}