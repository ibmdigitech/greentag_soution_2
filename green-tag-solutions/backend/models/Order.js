const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  email: String,
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    name: String,
    price: Number,
    quantity: Number,
    gstRate: Number,
  }],
  totalAmount: { type: Number, required: true },
  gstAmount: { type: Number, default: 0 },
  shippingCharge: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  grandTotal: { type: Number, required: true },
  paymentMethod: { type: String, enum: ["cod", "razorpay", "whatsapp"], default: "cod" },
  paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  orderStatus: { type: String, enum: ["pending", "confirmed", "in-progress", "completed", "cancelled"], default: "pending" },
  invoiceNumber: String,
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);