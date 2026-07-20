/**
 * Generates a signed, temporary embed URL for Bunny.net Stream to prevent video piracy.
 * @param videoId The specific ID of the video in Bunny Stream
 * @param expirationHours How long the token should be valid (default 6 hours)
 * @returns A fully signed embed URL
 */
export declare const generateBunnyVideoToken: (videoId: string, expirationHours?: number) => string;
//# sourceMappingURL=bunny.d.ts.map