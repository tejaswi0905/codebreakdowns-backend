// src/modules/admins/admins.controller.ts
import type { Request, Response } from "express";

import { catchAsync } from "../../shared/errors/catchAsync.js";
import {
  BadRequestError,
  NotFoundError,
} from "../../shared/errors/AppError.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import { getGoogleAuthURL } from "../../shared/utils/googleOauth.js";
import { processGoogleLogin } from "./admins.authService.js";
import { prisma } from "../../config/prisma.js";

import * as analyticsService from "./admins.analyticsService.js";

/**
 * @route   GET /api/v1/admins/auth/google
 * @desc    Directly redirects the user to the Google OAuth authorization page
 * @access  Public
 */
export const googleLogin = catchAsync(async (req: Request, res: Response) => {
  const url = getGoogleAuthURL();

  // Instantly bounce the user to the Google login screen
  res.redirect(url);
});

/**
 * @route   GET /api/v1/admins/auth/google/callback
 * @desc    Handles the callback from Google, logs the admin in, and sets the cookie
 * @access  Public
 */
export const googleCallback = catchAsync(
  async (req: Request, res: Response) => {
    // 1. Extract the code from the URL
    const code = req.query.code as string;

    if (!code) {
      throw new BadRequestError("Authorization code is missing from Google.");
    }

    // 2. Pass the code to our Orchestrator (Auth Service)
    const { user, token } = await processGoogleLogin(code);

    // 3. Set the HTTP-Only Cookie
    const isProduction =
      process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days in milliseconds
    });

    // 4. Redirect the admin back to the Admin React frontend!
    const adminFrontendUrl =
      process.env.ADMIN_FRONTEND_URL || "https://codebreakdowns-admin.vercel.app";
    res.redirect(`${adminFrontendUrl}/dashboard`);
  },
);

export const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  // The adminAuthCheck middleware guarantees req.user exists and is an Admin!
  const userId = req.user!.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      avatarUrl: true,
      role: true,
    },
  });

  if (!user) {
    throw new NotFoundError("Admin profile not found.");
  }

  sendSuccess(res, 200, user);
});

/**
 * @route   POST /api/v1/admins/auth/logout
 * @desc    Clears the HTTP-only JWT cookie to log the admin out
 * @access  Public
 */
export const logout = catchAsync(async (req: Request, res: Response) => {
  const isProduction =
    process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

  res.clearCookie("jwt", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  });

  sendSuccess(res, 200, null, "Logged out successfully");
});

/**
 * @route   GET /api/v1/admins/analytics/users
 * @desc    Get user conversion rates and recent signups
 * @access  Private (Admin Only)
 */
export const getUserAnalytics = catchAsync(
  async (req: Request, res: Response) => {
    const data = await analyticsService.getUserMetricsDb();
    sendSuccess(res, 200, data, "User analytics fetched successfully.");
  },
);

/**
 * @route   GET /api/v1/admins/analytics/revenue
 * @desc    Get total gross revenue and product breakdowns
 * @access  Private (Admin Only)
 */
export const getRevenueAnalytics = catchAsync(
  async (req: Request, res: Response) => {
    const data = await analyticsService.getRevenueMetricsDb();
    sendSuccess(res, 200, data, "Revenue analytics fetched successfully.");
  },
);
