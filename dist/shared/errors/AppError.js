export class AppError extends Error {
    statusCode;
    isOperational;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
// Shortcut class for 400 Bad Request errors (e.g., missing input, invalid email)
export class BadRequestError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}
// Shortcut class for 401 Unauthorized errors (e.g., missing token, bad password)
export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}
// Shortcut class for 404 Not Found errors (e.g., course not found)
export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(message, 404);
    }
}
//# sourceMappingURL=AppError.js.map