import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./shared/middlewares/errorHandler.js";

import userRouter from "./modules/users/users.routes.js";
import coursesRouter from "./modules/courses/courses.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
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
app.use("/api/v1/course", coursesRouter);

app.use(errorHandler);
export { app };
