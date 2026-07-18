import { z } from "zod";
export declare const verifyPaymentSchema: z.ZodObject<{
    body: z.ZodObject<{
        productId: z.ZodString;
        razorpay_order_id: z.ZodString;
        razorpay_payment_id: z.ZodString;
        razorpay_signature: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=payments.schemas.d.ts.map