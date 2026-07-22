import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/AppError.js";
import { prisma } from "../../config/prisma.js";
export const studentAuthCheck = async (req, res, next) => {
    try {
        // 1. Grab the JWT from the HTTP-Only cookie
        const token = req.cookies.jwt;
        if (!token) {
            return next(new UnauthorizedError("You are not logged in. Please log in to get access."));
        }
        // 2. Verify the token hasn't been tampered with
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // 3. Query the database for the freshest data
        const currentUser = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, role: true, isActive: true },
        });
        // 4. Edge Cases: User deleted or banned
        if (!currentUser) {
            return next(new UnauthorizedError("The user belonging to this token no longer exists."));
        }
        if (!currentUser.isActive) {
            return next(new UnauthorizedError("Your account has been deactivated. Please contact support."));
        }
        // 5. ROLE CHECK: Must be a STUDENT (or an ADMIN testing the platform)
        if (currentUser.role !== "STUDENT") {
            return next(new UnauthorizedError("Access denied. This route is for students."));
        }
        // 6. Attach the fresh, verified user to the request
        req.user = {
            id: currentUser.id,
            role: currentUser.role,
        };
        // 7. Pass control to the controller
        next();
    }
    catch (error) {
        // This catches jwt.verify errors (expired/tampered) and DB connection errors
        return next(new UnauthorizedError("Your session has expired or is invalid. Please log in again."));
    }
};
export const adminAuthCheck = async (req, res, next) => {
    try {
        // 1. Grab the JWT
        const token = req.cookies.jwt;
        if (!token) {
            return next(new UnauthorizedError("You are not logged in. Please log in to get access."));
        }
        // 2. Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // 3. Query DB
        const currentUser = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, role: true, isActive: true },
        });
        // 4. Edge Cases
        if (!currentUser) {
            return next(new UnauthorizedError("The user belonging to this token no longer exists."));
        }
        if (!currentUser.isActive) {
            return next(new UnauthorizedError("Your account has been deactivated."));
        }
        // 5. STRICT ROLE CHECK: MUST be an ADMIN
        if (currentUser.role !== "ADMIN") {
            return next(new UnauthorizedError("Access denied. Admin privileges required to perform this action."));
        }
        // 6. Attach User
        req.user = {
            id: currentUser.id,
            role: currentUser.role,
        };
        next();
    }
    catch (error) {
        return next(new UnauthorizedError("Your session has expired or is invalid. Please log in again."));
    }
};
export const optionalAuthCheck = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return next(); // No token, proceed as unauthenticated
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const currentUser = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, role: true, isActive: true },
        });
        if (currentUser && currentUser.isActive) {
            req.user = {
                id: currentUser.id,
                role: currentUser.role,
            };
        }
        next();
    }
    catch (error) {
        // If token is invalid/expired, proceed as unauthenticated instead of throwing
        next();
    }
};
//# sourceMappingURL=authMiddleware.js.map