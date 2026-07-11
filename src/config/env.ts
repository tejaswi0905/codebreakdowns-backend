// import { z } from "zod";
// import "dotenv/config";

// // 1. Define the exact shape and requirements of your environment variables
// const envSchema = z.object({
//   NODE_ENV: z
//     .enum(["development", "production", "test"])
//     .default("development"),
//   PORT: z.coerce.number().default(3000), // z.coerce transforms the string "3000" into an actual number
//   DATABASE_URL: z
//     .string()
//     .url({ message: "DATABASE_URL must be a valid connection string" }),
//   JWT_SECRET: z
//     .string()
//     .min(10, { message: "JWT_SECRET must be at least 10 characters long" }),

//   // You would add your third-party keys here as you build them:
//   // RAZORPAY_KEY_ID: z.string(),
//   // RESEND_API_KEY: z.string().startsWith("re_"),
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
