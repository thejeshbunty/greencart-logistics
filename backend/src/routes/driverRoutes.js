import express from "express";
import { getAllDrivers, getDriverById, createDriver, updateDriver, deleteDriver } from "../controllers/driverController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(verifyToken); // Protect all routes

router.get("/", getAllDrivers);
router.get("/:id", getDriverById);
router.post("/", createDriver);
router.put("/:id", updateDriver);
router.delete("/:id", deleteDriver);

export default router;
