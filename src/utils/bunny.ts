import crypto from "crypto";
import { InternalServerError } from "../shared/errors/AppError.js";

/**
 * Generates a signed, temporary embed URL for Bunny.net Stream to prevent video piracy.
 * @param videoId The specific ID of the video in Bunny Stream
 * @param expirationHours How long the token should be valid (default 6 hours)
 * @returns A fully signed embed URL
 */
export const generateBunnyVideoToken = (
  videoId: string,
  expirationHours = 6,
): string => {
  // If the videoId is already a full URL (e.g., YouTube link), we shouldn't sign it.
  // We only sign plain IDs that belong to Bunny.
  if (videoId.startsWith("http://") || videoId.startsWith("https://")) {
    return videoId;
  }

  const securityKey = process.env.bunnyNetToken;
  const libraryId = process.env.bunnyNetVideoLibId;

  if (!securityKey || !libraryId) {
    throw new InternalServerError("Bunny.net credentials are missing in .env");
  }

  // Set expiration time (current Unix timestamp + expirationHours in seconds)
  const expires = Math.floor(Date.now() / 1000) + expirationHours * 3600;

  // The base string for hashing as per Bunny.net Token Authentication documentation
  const hashableBase = `${securityKey}${videoId}${expires}`;

  // Generate SHA256 Hash
  const token = crypto
    .createHash("sha256")
    .update(hashableBase)
    .digest("hex");

  return `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?token=${token}&expires=${expires}`;
};
