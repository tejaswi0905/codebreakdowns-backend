export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Shortcut class for 400 Bad Request errors (e.g., missing input, invalid email)
export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

// Shortcut class for 401 Unauthorized errors (e.g., missing token, bad password)
export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized") {
    super(message, 401);
  }
}

// Shortcut class for 404 Not Found errors (e.g., course not found)
export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, 404);
  }
}
