import { Router } from "express";
import { githubLogin, githubCallback, getMyProfile, logout, } from "./users.controller.js";
import { studentAuthCheck } from "../../shared/middlewares/authMiddleware.js";
const userRouter = Router();
//Base url "/api/v1/users" mounted in app.ts
userRouter.get("/auth/github", githubLogin);
userRouter.get("/auth/github/callback", githubCallback);
userRouter.post("/auth/logout", studentAuthCheck, logout);
userRouter.get("/me", studentAuthCheck, getMyProfile);
export default userRouter;
//# sourceMappingURL=users.routes.js.map