import type { Request, Response } from "express";
export declare const getMyCourses: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const getCoursePlayData: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const createCourse: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   POST /api/v1/courses/:courseId/chapters
 * @desc    Create a chapter inside a specific course
 * @access  Strictly Admin
 */
export declare const createChapter: (req: Request, res: Response, next: import("express").NextFunction) => void;
/**
 * @route   POST /api/v1/courses/:courseId/chapters/:chapterId/lessons
 * @desc    Create a lesson inside a specific chapter
 * @access  Strictly Admin
 */
export declare const createLesson: (req: Request, res: Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=courses.controller.d.ts.map