import type { Response } from "express";

// We define the strict TypeScript interface for our "Envelope"
interface SuccessResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  meta?: any;
}

/**
 * A standardized utility to send success responses.
 * * @param res - The Express Response object
 * @param statusCode - HTTP Status Code (e.g., 200, 201)
 * @param data - The actual payload you want to send to the frontend
 * @param message - (Optional) A success message for the UI to display
 * @param meta - (Optional) Pagination data
 */
export const sendSuccess = <T>(
  res: Response,
  statusCode: number,
  data: T,
  message?: string,
  meta?: any,
) => {
  const responsePayload: SuccessResponse<T> = {
    success: true,
    data,
  };

  // Only attach message and meta if they were provided, keeping the JSON clean
  if (message) responsePayload.message = message;
  if (meta) responsePayload.meta = meta;

  return res.status(statusCode).json(responsePayload);
};
