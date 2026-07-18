import type { Request, Response } from "express";
/**
 * @route   POST /api/v1/payments/checkout/:productId
 * @desc    Generates a secure Razorpay Order ID for the frontend
 * @access  Protected (Student)
 */
export declare const createOrder: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   POST /api/v1/payments/verify
 * @desc    Verifies the cryptographic signature and grants course access
 * @access  Protected (Student)
 */
export declare const verifyPayment: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   POST /api/v1/payments/webhook
 * @desc    Handles Razorpay Webhook Events (server-to-server)
 * @access  Public (Secured by signature)
 */
export declare const razorpayWebhook: (req: Request, res: Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=payments.controller.d.ts.map