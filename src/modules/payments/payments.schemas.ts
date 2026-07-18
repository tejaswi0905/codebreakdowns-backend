import { z } from "zod";

// Validates the data React sends us AFTER a successful payment on the frontend
export const verifyPaymentSchema = z.object({
  body: z.object({
    productId: z.string().uuid("Invalid Product ID"),
    razorpay_order_id: z.string().min(1, "Order ID is required"),
    razorpay_payment_id: z.string().min(1, "Payment ID is required"),
    razorpay_signature: z.string().min(1, "Signature is required"),
  }),
});
