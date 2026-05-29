const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  icon: String,
  image: String,
  categoryType: { type: String, enum: ["residential", "commercial", "industrial"], required: true },
  pricing: {
    basic: Number,
    standard: Number,
    premium: Number,
  },
  processSteps: [{ title: String, description: String }],
  faqs: [{ question: String, answer: String }],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);