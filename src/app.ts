import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./shared/middlewares/errorHandler.js";

import userRouter from "./modules/users/users.routes.js";
import coursesRouter from "./modules/courses/courses.routes.js";
import productsRouter from "./modules/products/products.routes.js";
import paymentsRouter from "./modules/payments/payments.routes.js";
import progressRouter from "./modules/progress/progress.routes.js";
import adminRouter from "./modules/admins/admins.routes.js";

const app = express();

declare global {
  namespace Express {
    interface Request {
      rawBody?: Buffer;
    }
  }
}

app.use(
  express.json({
    verify: (req, res, buf) => {
      (req as any).rawBody = buf;
    },
  }),
);
app.use(cookieParser());

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:3001",
      process.env.ADMIN_URL || "http://localhost:3002",
      "http://localhost:5174",
      "https://codebreakdowns-frontend.vercel.app",
      "https://codebreakdowns-admin.vercel.app"
    ],
    credentials: true,
  }),
);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CodeBreakdowns Api is healthy",
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/payments", paymentsRouter);
app.use("/api/v1/progress", progressRouter);
app.use("/api/v1/admins", adminRouter);

app.use(errorHandler);
export { app };
