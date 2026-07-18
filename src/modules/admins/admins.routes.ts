// src/modules/admins/admins.routes.ts
import { Router } from "express";
import {
  googleLogin,
  googleCallback,
  getMyProfile,
  logout,
} from "./admins.controller.js";
import { getUserAnalytics, getRevenueAnalytics } from "./admins.controller.js";

import { adminAuthCheck } from "../../shared/middlewares/authMiddleware.js";

const adminRouter = Router();

// Base url "/api/v1/admins" mounted in app.ts

adminRouter.get("/auth/google", googleLogin);
adminRouter.get("/auth/google/callback", googleCallback);

adminRouter.post("/auth/logout", adminAuthCheck, logout);

adminRouter.get("/me", adminAuthCheck, getMyProfile);

adminRouter.get("/analytics/users", adminAuthCheck, getUserAnalytics);
adminRouter.get("/analytics/revenue", adminAuthCheck, getRevenueAnalytics);

export default adminRouter;
