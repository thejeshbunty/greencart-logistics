import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { loadDrivers, loadRoutes, loadOrders } from "./utils/loadData.js";

import authRoutes from "./routes/authRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";
import routeRoutes from "./routes/routeRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import simulationRoutes from "./routes/simulationRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files (dashboard)
app.use(express.static("public"));

// Routes
app.use("/auth", authRoutes);
app.use("/drivers", driverRoutes);
app.use("/routes", routeRoutes);
app.use("/orders", orderRoutes);
app.use("/simulate", simulationRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    await loadDrivers();
    await loadRoutes();
    await loadOrders();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
