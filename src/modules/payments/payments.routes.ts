import { Router } from "express";
import { studentAuthCheck } from "../../shared/middlewares/authMiddleware.js";
import { createOrder, verifyPayment, razorpayWebhook } from "./payments.controller.js";

const paymentsRouter = Router();

// ==========================================
// PAYMENT ROUTES (Checkout Engine)
// ==========================================

// POST /api/v1/payments/checkout/:productId
// Generates the Razorpay order for the React frontend
paymentsRouter.post("/checkout/:productId", studentAuthCheck, createOrder);

// POST /api/v1/payments/verify
// Cryptographically verifies the payment and grants access
paymentsRouter.post("/verify", studentAuthCheck, verifyPayment);

// POST /api/v1/payments/webhook
// Razorpay server-to-server webhook
paymentsRouter.post("/webhook", razorpayWebhook);

export default paymentsRouter;
