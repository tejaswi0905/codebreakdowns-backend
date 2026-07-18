// import { z } from "zod";
// import "dotenv/config";
export {};
// // 1. Define the exact shape and requirements of your environment variables
// const envSchema = z.object({
//   NODE_ENV: z.enum(["dev", "prod", "test"]).default("dev"),
//   PORT: z.coerce.number().default(3000),
//   DATABASE_URL: z.string().url(),
//   JWT_SECRET: z.string().min(10),
//   // NEW: Add the Razorpay keys!
//   RAZORPAY_KEY_ID: z.string().min(1, "Razorpay Key ID is required"),
//   RAZORPAY_KEY_SECRET: z.string().min(1, "Razorpay Secret is required"),
// });
// // 2. Validate process.env against our schema
// const _env = envSchema.safeParse(process.env);
// // 3. If validation fails, crash the app IMMEDIATELY with a helpful error
// if (!_env.success) {
//   console.error("❌ Invalid environment variables:");
//   console.error(_env.error.format());
//   process.exit(1);
// }
// // 4. Export the clean, validated, strictly-typed variables
// export const env = _env.data;
//# sourceMappingURL=env.js.map