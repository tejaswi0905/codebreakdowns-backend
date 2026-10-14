import { Router } from "express";
import {
  getMyCourses,
  getAllPublishedCourses,
  getCoursePlayData,
  createChapter,
  createCourse,
  createLesson,
  updateLesson,
  deleteLesson,
  reorderChapters,
  reorderLessons,
  getAdminCourseById,
  getBunnyVideoDuration,
  getAdminCourses,
  updateCourse,
} from "./courses.controller.js";
import {
  studentAuthCheck,
  adminAuthCheck,
  optionalAuthCheck,
} from "../../shared/middlewares/authMiddleware.js";

const coursesRouter = Router();

// Used by Admin Dashboard to fetch duration without CORS issues
coursesRouter.get("/bunny-metadata", adminAuthCheck, getBunnyVideoDuration);

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

// GET /api/v1/courses/admin/all
// Protected: Fetches all courses (published and draft) for admin list
coursesRouter.get("/admin/all", adminAuthCheck, getAdminCourses);

// GET /api/v1/courses/:courseId/admin
// Protected: Fetches complete course with chapters and lessons for builder
coursesRouter.get("/:courseId/admin", adminAuthCheck, getAdminCourseById);

// PUT /api/v1/courses/:courseId
// Protected: Updates course properties (isFree, isPublished, etc.)
coursesRouter.put("/:courseId", adminAuthCheck, updateCourse);

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

// PUT /api/v1/courses/:courseId/chapters/:chapterId/lessons/:lessonId
// Protected: Only Admins can update lessons
coursesRouter.put(
  "/:courseId/chapters/:chapterId/lessons/:lessonId",
  adminAuthCheck,
  updateLesson,
);

// DELETE /api/v1/courses/:courseId/chapters/:chapterId/lessons/:lessonId
// Protected: Only Admins can delete lessons
coursesRouter.delete(
  "/:courseId/chapters/:chapterId/lessons/:lessonId",
  adminAuthCheck,
  deleteLesson,
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
