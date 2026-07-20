import type { Request, Response } from "express";
/**
 * @route   GET /api/v1/admins/auth/google
 * @desc    Directly redirects the user to the Google OAuth authorization page
 * @access  Public
 */
export declare const googleLogin: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   GET /api/v1/admins/auth/google/callback
 * @desc    Handles the callback from Google, logs the admin in, and sets the cookie
 * @access  Public
 */
export declare const googleCallback: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const getMyProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   POST /api/v1/admins/auth/logout
 * @desc    Clears the HTTP-only JWT cookie to log the admin out
 * @access  Public
 */
export declare const logout: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   GET /api/v1/admins/analytics/users
 * @desc    Get user conversion rates and recent signups
 * @access  Private (Admin Only)
 */
export declare const getUserAnalytics: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   GET /api/v1/admins/analytics/revenue
 * @desc    Get total gross revenue and product breakdowns
 * @access  Private (Admin Only)
 */
export declare const getRevenueAnalytics: (req: Request, res: Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=admins.controller.d.ts.map