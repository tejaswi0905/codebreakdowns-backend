import type { Request, Response } from "express";
/**
 * @route   GET /api/v1/users/auth/github
 * @desc    Directly redirects the user to the GitHub OAuth authorization page
 * @access  Public
 */
export declare const githubLogin: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   GET /api/v1/users/auth/github/callback
 * @desc    Handles the callback from GitHub, logs the user in, and sets the cookie
 * @access  Public
 */
export declare const githubCallback: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const getMyProfile: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   POST /api/v1/users/auth/logout
 * @desc    Clears the HTTP-only JWT cookie to log the user out
 * @access  Public
 */
export declare const logout: (req: Request, res: Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=users.controller.d.ts.map