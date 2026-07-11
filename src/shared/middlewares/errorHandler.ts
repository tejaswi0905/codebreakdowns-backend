import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";

// WHAT THIS IS: The "General Manager".
// This middleware will be placed at the very bottom of your app.ts file.
// EVERY error in your entire app will eventually flow into this one function.

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  // next must be included here for Express to recognize this as an error handler!
  next: NextFunction,
) => {
  // 1. Default to a 500 Internal Server Error (Our fault)
  let statusCode = 500;
  let message = "Something went wrong! Please try again later.";

  // 2. Check if this is an error WE threw intentionally (The user's fault)
  if (err instanceof AppError && err.isOperational) {
    statusCode = err.statusCode;
    message = err.message; // Safe to show to the user
  }

  // 3. Logging for the Developers
  if (process.env.NODE_ENV === "development") {
    // In dev mode, print exactly what broke to the terminal
    console.error(`🔴 [ERROR] ${statusCode} - ${err.message}`);
    console.error(err.stack);
  } else if (statusCode === 500) {
    // In production, we don't want to log typos, ONLY severe 500 bugs
    console.error(`💥 [CRITICAL SYSTEM BUG]`, err);
  }

  // 4. Send the final JSON response to the React frontend
  res.status(statusCode).json({
    success: false,
    error: message,
    // Only send the stack trace (file/line numbers) to the frontend if we are in development!
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
