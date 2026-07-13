import type { Request, Response } from "express";
import { catchAsync } from "../../shared/errors/catchAsync.js";
import { BadRequestError } from "../../shared/errors/AppError.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import { getGithubAuthUrl } from "../../shared/utils/gitOauth.js";
import { processGithubLogin } from "./users.authService.js";

/**
 * @route   GET /api/v1/users/auth/github
 * @desc    Directly redirects the user to the GitHub OAuth authorization page
 * @access  Public
 */
export const githubLogin = catchAsync(async (req: Request, res: Response) => {
  const url = getGithubAuthUrl();

  // Instantly bounce the user to the GitHub login screen
  res.redirect(url);
});

/**
 * @route   GET /api/v1/users/auth/github/callback
 * @desc    Handles the callback from GitHub, logs the user in, and sets the cookie
 * @access  Public
 */
export const githubCallback = catchAsync(
  async (req: Request, res: Response) => {
    // 1. Extract the code from the URL (e.g., ?code=12345abcdef)
    const code = req.query.code as string;

    if (!code) {
      throw new BadRequestError("Authorization code is missing from GitHub.");
    }

    // 2. Pass the code to our Orchestrator (Auth Service)
    const { user, token } = await processGithubLogin(code);

    // 3. Set the HTTP-Only Cookie
    const isProduction = process.env.NODE_ENV === "prod";

    res.cookie("jwt", token, {
      httpOnly: true, // Javascript on the frontend cannot read this cookie (prevents XSS attacks)
      secure: isProduction, // In production (HTTPS), this ensures the cookie is encrypted in transit
      sameSite: isProduction ? "none" : "lax", // Required for cross-origin cookies if backend and frontend are on different domains
      maxAge: 30 * 24 * 60 * 60 * 1000, // 7 Days in milliseconds
    });

    // 4. Redirect the user back to the React frontend!
    // Once the cookie is set, we send them to the dashboard so they can start learning.
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3001";
    res.redirect(`${frontendUrl}/dashboard`);
  },
);
