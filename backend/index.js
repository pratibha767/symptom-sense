const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const symptomRoutes = require("./routes/symptoms");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/symptoms", symptomRoutes);

// Use the routes
app.use("/api/symptoms", require("./routes/symptoms"));


mongoose.connect("mongodb://localhost:27017/symptomsense", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
  app.listen(5000, () => console.log("Server is running on port 5000"));
}).catch((err) => console.error("MongoDB connection error:", err));
