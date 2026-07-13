import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./shared/middlewares/errorHandler.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    credentials: true,
}));
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CodeBreakdowns Api is healthy",
    });
});
app.use(errorHandler);
export { app };
//# sourceMappingURL=app.js.map