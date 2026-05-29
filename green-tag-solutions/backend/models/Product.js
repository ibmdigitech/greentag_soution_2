const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: [String],
  stock: { type: Number, default: 0 },
  gstRate: { type: Number, default: 18 },
  weight: String,
  dimensions: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);