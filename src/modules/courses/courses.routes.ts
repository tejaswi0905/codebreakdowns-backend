import { Router } from "express";
import {
  getMyCourses,
  getAllPublishedCourses,
  getCoursePlayData,
  createChapter,
  createCourse,
  createLesson,
  reorderChapters,
  reorderLessons,
  getAdminCourseById,
} from "./courses.controller.js";
import {
  studentAuthCheck,
  adminAuthCheck,
  optionalAuthCheck,
} from "../../shared/middlewares/authMiddleware.js";

const coursesRouter = Router();

coursesRouter.get("/my-courses", studentAuthCheck, getMyCourses);

// GET /api/v1/courses
// Public: Fetches all published courses for the catalog
coursesRouter.get("/", getAllPublishedCourses);

// GET /api/v1/courses/:courseId/play
// Public/Protected: Fetches course data. Shows locks if unauthenticated/unpurchased.
coursesRouter.get("/:courseId/play", optionalAuthCheck, getCoursePlayData);

// ==========================================
// ADMIN CMS ROUTES (CREATION ENGINE)
// ==========================================

// GET /api/v1/courses/:courseId/admin
// Protected: Fetches complete course with chapters and lessons for builder
coursesRouter.get("/:courseId/admin", adminAuthCheck, getAdminCourseById);

// POST /api/v1/courses
// Protected: Only Admins can create new courses
coursesRouter.post("/", adminAuthCheck, createCourse);

// POST /api/v1/courses/:courseId/chapters
// Protected: Only Admins can add chapters
coursesRouter.post("/:courseId/chapters", adminAuthCheck, createChapter);

// POST /api/v1/courses/:courseId/chapters/:chapterId/lessons
// Protected: Only Admins can add lessons
coursesRouter.post(
  "/:courseId/chapters/:chapterId/lessons",
  adminAuthCheck,
  createLesson,
);

// PUT /api/v1/courses/:courseId/chapters/reorder
coursesRouter.put(
  "/:courseId/chapters/reorder",
  adminAuthCheck,
  reorderChapters,
);

// PUT /api/v1/courses/:courseId/chapters/:chapterId/lessons/reorder
coursesRouter.put(
  "/:courseId/chapters/:chapterId/lessons/reorder",
  adminAuthCheck,
  reorderLessons,
);

export default coursesRouter;
