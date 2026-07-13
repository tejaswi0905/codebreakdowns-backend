/**
 * A standardized utility to send success responses.
 * * @param res - The Express Response object
 * @param statusCode - HTTP Status Code (e.g., 200, 201)
 * @param data - The actual payload you want to send to the frontend
 * @param message - (Optional) A success message for the UI to display
 * @param meta - (Optional) Pagination data
 */
export const sendSuccess = (res, statusCode, data, message, meta) => {
    const responsePayload = {
        success: true,
        data,
    };
    // Only attach message and meta if they were provided, keeping the JSON clean
    if (message)
        responsePayload.message = message;
    if (meta)
        responsePayload.meta = meta;
    return res.status(statusCode).json(responsePayload);
};
//# sourceMappingURL=apiResopnse.js.map