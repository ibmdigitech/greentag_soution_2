const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  customerDetails: {
    name: String,
    phone: String,
    address: String,
    email: String,
  },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    name: String,
    price: Number,
    quantity: Number,
    gstRate: Number,
    total: Number,
  }],
  subtotal: Number,
  gstAmount: Number,
  shippingCharge: Number,
  discount: Number,
  grandTotal: Number,
  gstNumber: { type: String, default: "GSTIN-32AAAAA0000AIZZ" },
  paymentStatus: { type: String, enum: ["paid", "pending", "cancelled"], default: "pending" },
  generatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Invoice", invoiceSchema);