// src/modules/progress/progress.routes.ts
import { Router } from "express";
import { studentAuthCheck } from "../../shared/middlewares/authMiddleware.js";
import * as progressController from "./progress.controller.js";
const progressRouter = Router();
// Apply student authentication to all progress routes
progressRouter.use(studentAuthCheck);
progressRouter.post("/heartbeat", progressController.recordHeartbeat);
progressRouter.post("/complete", progressController.toggleComplete);
progressRouter.post("/bookmark", progressController.toggleBookmark);
progressRouter.get("/stats", progressController.getStats);
export default progressRouter;
//# sourceMappingURL=progress.routes.js.map