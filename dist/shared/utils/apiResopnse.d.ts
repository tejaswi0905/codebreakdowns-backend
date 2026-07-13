import type { Response } from "express";
/**
 * A standardized utility to send success responses.
 * * @param res - The Express Response object
 * @param statusCode - HTTP Status Code (e.g., 200, 201)
 * @param data - The actual payload you want to send to the frontend
 * @param message - (Optional) A success message for the UI to display
 * @param meta - (Optional) Pagination data
 */
export declare const sendSuccess: <T>(res: Response, statusCode: number, data: T, message?: string, meta?: any) => Response<any, Record<string, any>>;
//# sourceMappingURL=apiResopnse.d.ts.map