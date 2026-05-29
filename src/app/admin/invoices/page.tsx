"use client";

import { motion } from "framer-motion";
import { PlusIcon, ArrowDownTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const dummyInvoices = [
  { id: "INV-2026-001", customer: "Rajesh Kumar", date: "2026-05-28", amount: 4500, status: "Paid", items: [{ name: "Deep Home Cleaning Service", price: 3813.56, qty: 1 }] },
  { id: "INV-2026-002", customer: "Global Tech Park", date: "2026-05-27", amount: 12500, status: "Pending", items: [{ name: "Office Deep Disinfection", price: 10593.22, qty: 1 }] },
  { id: "INV-2026-003", customer: "Priya Sharma", date: "2026-05-25", amount: 2999, status: "Paid", items: [{ name: "Floor Cleaner Pro 5L", price: 450, qty: 3 }, { name: "Microfiber Cloth Pack", price: 220, qty: 4 }, { name: "Glass Cleaner Spray", price: 180, qty: 2 }] },
  { id: "INV-2026-004", customer: "Sunrise Apartments", date: "2026-05-20", amount: 28500, status: "Overdue", items: [{ name: "Premium Society Cleaning Package", price: 24152.54, qty: 1 }] },
  { id: "INV-2026-005", customer: "City Hospital", date: "2026-05-18", amount: 9999, status: "Paid", items: [{ name: "Hospital Sanitization Package", price: 8473.73, qty: 1 }] },
  { id: "INV-2026-006", customer: "Anita Desai", date: "2026-05-15", amount: 1850, status: "Pending", items: [{ name: "Sofa Vacuuming & Cleaning", price: 1567.80, qty: 1 }] },
];

export default function AdminInvoices() {
  const downloadInvoice = (invoice: typeof dummyInvoices[0]) => {
    // Generate a premium invoice HTML template
    const cgst = (invoice.amount * 0.09).toFixed(2);
    const sgst = (invoice.amount * 0.09).toFixed(2);
    const subtotal = (invoice.amount - parseFloat(cgst) - parseFloat(sgst)).toFixed(2);

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice ${invoice.id} - Green Tag Solutions</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #1e293b;
      margin: 0;
      padding: 40px;
      background-color: #f8fafc;
    }
    .invoice-card {
      max-w: 850px;
      margin: 0 auto;
      background: #ffffff;
      padding: 50px;
      border-radius: 24px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #f1f5f9;
      padding-bottom: 30px;
      margin-bottom: 40px;
    }
    .logo-container {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .logo-text {
      font-size: 24px;
      font-weight: 800;
      color: #059669;
      letter-spacing: -0.5px;
    }
    .company-details {
      text-align: right;
      font-size: 13px;
      color: #64748b;
      line-height: 1.5;
    }
    .invoice-details {
      display: grid;
      grid-cols-2;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
    .details-box h3 {
      font-size: 12px;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
      margin-top: 0;
    }
    .details-box p {
      font-size: 15px;
      font-weight: 600;
      color: #334155;
      margin: 0 0 6px 0;
      line-height: 1.4;
    }
    .details-box span {
      font-size: 13px;
      color: #64748b;
      display: block;
    }
    .table-container {
      margin-bottom: 40px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }
    th {
      background: #f8fafc;
      padding: 14px 20px;
      font-size: 12px;
      font-weight: 700;
      color: #475569;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 2px solid #e2e8f0;
    }
    td {
      padding: 20px;
      font-size: 14px;
      color: #334155;
      border-bottom: 1px solid #f1f5f9;
    }
    .amount-column {
      text-align: right;
    }
    .summary-section {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 40px;
    }
    .summary-box {
      width: 300px;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 14px;
      color: #64748b;
    }
    .summary-row.total {
      border-top: 2px solid #e2e8f0;
      padding-top: 15px;
      font-size: 18px;
      font-weight: 800;
      color: #0f172a;
    }
    .badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .badge.paid {
      background-color: #d1fae5;
      color: #065f46;
    }
    .badge.pending {
      background-color: #fef3c7;
      color: #92400e;
    }
    .badge.overdue {
      background-color: #fee2e2;
      color: #991b1b;
    }
    .footer {
      text-align: center;
      padding-top: 30px;
      border-top: 2px solid #f1f5f9;
      font-size: 12px;
      color: #94a3b8;
    }
    .print-button {
      display: block;
      width: fit-content;
      margin: 30px auto 0 auto;
      padding: 12px 24px;
      background: #059669;
      color: #ffffff;
      font-weight: 700;
      font-size: 14px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.2);
      transition: background 0.2s;
    }
    .print-button:hover {
      background: #047857;
    }
    @media print {
      body {
        background-color: #ffffff;
        padding: 0;
      }
      .invoice-card {
        border: none;
        box-shadow: none;
        padding: 0;
      }
      .print-button {
        display: none;
      }
    }
  </style>
</head>
<body>
    <div className="invoice-card">
    <div className="header">
      <div className="logo-container" style="display: flex; align-items: center; gap: 12px;">
        <img src="${window.location.origin}/images/logo.png" alt="Logo" style="width: 48px; height: 48px; border-radius: 8px; object-fit: cover;" />
        <div style="text-align: left;">
          <span className="logo-text" style="font-size: 20px; font-weight: 800; color: #059669; display: block; line-height: 1; margin: 0;">GREEN TAG</span>
          <span style="font-size: 11px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 1px; display: block; margin-top: 2px;">Solutions</span>
        </div>
      </div>
      <div className="company-details">
        <p style="margin:0 0 5px 0; font-weight:700; color:#0f172a;">Green Tag Solutions Calicut</p>
        <p style="margin:0;">Calicut, Kerala, India</p>
        <p style="margin:3px 0 0 0;">GSTIN: 32AAAAA1111A1Z1</p>
        <p style="margin:3px 0 0 0;">Support: +91 98765 43210 | info@greentag.com</p>
      </div>
    </div>

    <div className="invoice-details">
      <div className="details-box">
        <h3>Invoice To</h3>
        <p>${invoice.customer}</p>
        <span>Kerala, India</span>
      </div>
      <div className="details-box" style="text-align: right;">
        <h3>Invoice Info</h3>
        <p style="color: #059669; font-size:18px;">${invoice.id}</p>
        <span><strong>Date:</strong> ${invoice.date}</span>
        <span style="margin-top: 5px;">
          <span className="badge ${invoice.status.toLowerCase()}">${invoice.status}</span>
        </span>
      </div>
    </div>

    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th className="amount-column">Qty</th>
            <th className="amount-column">Unit Price</th>
            <th className="amount-column">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${(invoice.items || []).map(item => `
            <tr>
              <td><strong>${item.name}</strong></td>
              <td className="amount-column">${item.qty}</td>
              <td className="amount-column">₹${item.price.toFixed(2)}</td>
              <td className="amount-column">₹${(item.price * item.qty).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div className="summary-section">
      <div className="summary-box">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹${subtotal}</span>
        </div>
        <div className="summary-row">
          <span>CGST (9%)</span>
          <span>₹${cgst}</span>
        </div>
        <div className="summary-row">
          <span>SGST (9%)</span>
          <span>₹${sgst}</span>
        </div>
        <div className="summary-row total">
          <span>Total Amount</span>
          <span>₹${invoice.amount.toLocaleString()}</span>
        </div>
      </div>
    </div>

    <div className="footer">
      <p style="margin:0 0 5px 0; font-weight:700;">Thank you for your business!</p>
      <p style="margin:0;">This is a computer-generated invoice. For any inquiries, please contact Support.</p>
    </div>
  </div>

  <button className="print-button" onclick="window.print()">Print / Save PDF</button>
</body>
</html>
    `;

    // Download the file
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Invoice-${invoice.id}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-secondary-900 dark:text-white tracking-tight">
            Invoicing & Ledger
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Generate, review, and print invoices or receipt transcripts.
          </p>
        </div>
        <button className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl flex items-center gap-2 transition duration-350 shadow-lg shadow-primary-600/20 w-full md:w-auto justify-center active:scale-95">
          <PlusIcon className="w-5 h-5" />
          Generate Invoice
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-dark rounded-2xl overflow-hidden shadow-xl border border-white/5"
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
                  transition={{ delay: Math.min(index * 0.03, 0.4) }}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-6 text-white font-medium whitespace-nowrap flex items-center gap-2">
                    <DocumentTextIcon className="w-4 h-4 text-gray-400" />
                    {invoice.id}
                  </td>
                  <td className="py-4 px-6 text-gray-300 whitespace-nowrap">{invoice.customer}</td>
                  <td className="py-4 px-6 text-gray-450 whitespace-nowrap text-sm">{invoice.date}</td>
                  <td className="py-4 px-6 text-right text-primary-400 font-bold whitespace-nowrap">₹{invoice.amount.toLocaleString()}</td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                      invoice.status === "Paid" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : 
                      invoice.status === "Pending" ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" : 
                      "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <button
                      onClick={() => downloadInvoice(invoice)}
                      className="px-3.5 py-2 bg-primary-600 hover:bg-primary-750 text-white rounded-xl transition duration-300 inline-flex items-center gap-1.5 text-xs font-bold shadow-md shadow-primary-600/10 active:scale-95 border border-primary-500/30"
                    >
                      <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                      PDF / Print
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
