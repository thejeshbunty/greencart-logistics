import express from "express";
import { simulate } from "../controllers/simulationController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, simulate);

export default router;
