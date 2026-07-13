import { Router } from "express";
import { githubLogin, githubCallback } from "./users.controller.js";

const userRouter = Router();

//Base url "/api/v1/users" mounted in app.ts

userRouter.get("/auth/github", githubLogin);
userRouter.get("/auth/github/callback", githubCallback);

export default userRouter;
