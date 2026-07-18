import { Router } from "express";
import { getMyCourses, getCoursePlayData, createChapter, createCourse, createLesson, } from "./courses.controller.js";
import { studentAuthCheck, adminAuthCheck, } from "../../shared/middlewares/authMiddleware.js";
const coursesRouter = Router();
coursesRouter.get("/my-courses", studentAuthCheck, getMyCourses);
// GET /api/v1/courses/:courseId/play
// Protected: Fetches the deep-dive video player payload (Requires ownership)
coursesRouter.get("/:courseId/play", studentAuthCheck, getCoursePlayData);
// ==========================================
// ADMIN CMS ROUTES (CREATION ENGINE)
// ==========================================
// POST /api/v1/courses
// Protected: Only Admins can create new courses
coursesRouter.post("/", adminAuthCheck, createCourse);
// POST /api/v1/courses/:courseId/chapters
// Protected: Only Admins can add chapters
coursesRouter.post("/:courseId/chapters", adminAuthCheck, createChapter);
// POST /api/v1/courses/:courseId/chapters/:chapterId/lessons
// Protected: Only Admins can add lessons
coursesRouter.post("/:courseId/chapters/:chapterId/lessons", adminAuthCheck, createLesson);
export default coursesRouter;
//# sourceMappingURL=courses.routes.js.map