const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const askUsRoute = require("./routes/askUsRoutes");
const userRoutes = require("./routes/userRoutes"); // ✅ YOU MISSED THIS LINE
const AskUs = require("./models/AskUsModel");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/employee", employeeRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/askus", askUsRoute);
app.use("/api/user", userRoutes); // now no error

// Connect DB and Start Server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
