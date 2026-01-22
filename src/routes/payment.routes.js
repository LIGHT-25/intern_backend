import express from "express";
import { makePayment } from "../controllers/payment.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/pay", authMiddleware, makePayment);

export default router;
