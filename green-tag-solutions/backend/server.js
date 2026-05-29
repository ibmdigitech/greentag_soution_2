const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/greentag")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({ message: "Green Tag Solutions API" });
});

app.use("/api/products", require("./routes/products"));
app.use("/api/services", require("./routes/services"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/invoices", require("./routes/invoices"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});