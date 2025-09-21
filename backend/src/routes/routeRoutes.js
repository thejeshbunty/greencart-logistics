import express from "express";
import { getAllRoutes, getRouteById, createRoute, updateRoute, deleteRoute } from "../controllers/routeController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(verifyToken);

router.get("/", getAllRoutes);
router.get("/:id", getRouteById);
router.post("/", createRoute);
router.put("/:id", updateRoute);
router.delete("/:id", deleteRoute);

export default router;
