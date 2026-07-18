import { catchAsync } from "../../shared/errors/catchAsync.js";
import { BadRequestError, NotFoundError, } from "../../shared/errors/AppError.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import { getGithubAuthUrl } from "../../shared/utils/gitOauth.js";
import { processGithubLogin } from "./users.authService.js";
import { prisma } from "../../config/prisma.js";
/**
 * @route   GET /api/v1/users/auth/github
 * @desc    Directly redirects the user to the GitHub OAuth authorization page
 * @access  Public
 */
export const githubLogin = catchAsync(async (req, res) => {
    const url = getGithubAuthUrl();
    // Instantly bounce the user to the GitHub login screen
    res.redirect(url);
});
/**
 * @route   GET /api/v1/users/auth/github/callback
 * @desc    Handles the callback from GitHub, logs the user in, and sets the cookie
 * @access  Public
 */
export const githubCallback = catchAsync(async (req, res) => {
    // 1. Extract the code from the URL (e.g., ?code=12345abcdef)
    const code = req.query.code;
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
});
export const getMyProfile = catchAsync(async (req, res) => {
    // The studentAuthCheck middleware guarantees req.user exists!
    // We use the "!" operator to tell TypeScript we are 100% sure it's not undefined.
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
        where: { id: userId },
        // We only select safe fields. We don't need to send back their internal IDs or payout details here.
        select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
            role: true,
        },
    });
    if (!user) {
        throw new NotFoundError("User profile not found.");
    }
    sendSuccess(res, 200, user);
});
/**
 * @route   POST /api/v1/users/auth/logout
 * @desc    Clears the HTTP-only JWT cookie to log the user out
 * @access  Public
 */
export const logout = catchAsync(async (req, res) => {
    const isProduction = process.env.NODE_ENV === "production";
    // We clear the cookie using the EXACT same options we used to set it
    res.clearCookie("jwt", {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
    });
    sendSuccess(res, 200, null, "Logged out successfully");
});
//# sourceMappingURL=users.controller.js.map